/* ---------------------------------------------------------------
   Verifică integritatea conținutului, dincolo de ce prinde schema.

   Schema Astro validează fiecare fișier în parte. Scriptul ăsta
   verifică relațiile DINTRE fișiere — exact genul de eroare care
   apare când adaugi variante în serie și care nu se vede la build:
   o rezolvare fără enunț, un subpunct declarat dar nemarcat în text,
   un barem care lipsește.

   Rulezi cu:  npm run verifica
   --------------------------------------------------------------- */

import { readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const R = 'src/content/rezolvari';
const E = 'src/content/enunturi';
const B = 'bareme';

const erori = [];
const averizari = [];

const eroare = (f, m) => erori.push(`${f}: ${m}`);
const atentie = (f, m) => averizari.push(`${f}: ${m}`);

/** Frontmatter minimal — nu avem nevoie de un parser YAML complet. */
function frontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const d = {};
  let cheieLista = null;
  for (const linie of m[1].split('\n')) {
    const lista = linie.match(/^\s+-\s+"?(.*?)"?\s*$/);
    if (lista && cheieLista) {
      d[cheieLista].push(lista[1]);
      continue;
    }
    const pereche = linie.match(/^([a-zA-Z]+):\s*(.*)$/);
    if (!pereche) continue;
    const [, cheie, valoare] = pereche;
    if (valoare.trim() === '') {
      cheieLista = cheie;
      d[cheie] = [];
    } else {
      cheieLista = null;
      d[cheie] = valoare.trim().replace(/^"|"$/g, '');
    }
  }
  return d;
}

const mdDin = async (dir) =>
  (await readdir(dir)).filter((f) => f.endsWith('.md') && !f.startsWith('_'));

/* ---------- citește tot ---------- */

const rezolvari = [];
for (const f of await mdDin(R)) {
  const text = await readFile(path.join(R, f), 'utf8');
  const d = frontmatter(text);
  if (!d) { eroare(f, 'frontmatter lipsă sau stricat'); continue; }
  rezolvari.push({ f, d, text });
}

const enunturi = [];
for (const f of await mdDin(E)) {
  const d = frontmatter(await readFile(path.join(E, f), 'utf8'));
  if (!d) { eroare(f, 'frontmatter lipsă sau stricat'); continue; }
  enunturi.push({ f, d });
}

const cheie = (d) => `${d.varianta}|${d.subiect}|${d.pozitie}`;
const enunturiDupaCheie = new Set(enunturi.map((e) => cheie(e.d)));

/* ---------- verificări ---------- */

const vazute = new Map();

for (const { f, d, text } of rezolvari) {
  const esteCiorna = d.ciorna === 'true';

  // 1. Enunțul există?
  if (d.varianta && !enunturiDupaCheie.has(cheie(d))) {
    eroare(f, `nu găsesc enunțul pentru ${d.varianta} ${d.subiect}.${d.pozitie}`);
  }

  // 2. Două rezolvări pentru aceeași poziție?
  if (d.varianta && !esteCiorna) {
    const k = cheie(d);
    if (vazute.has(k)) eroare(f, `aceeași poziție ca ${vazute.get(k)}`);
    else vazute.set(k, f);
  }

  // 3. Subpunctele declarate au marcaje în text?
  const marcaje = [...text.matchAll(/class="subpunct" id="([a-e])"/g)].map((m) => m[1]);
  const declarate = Array.isArray(d.subpuncte) ? d.subpuncte.length : 0;
  if (declarate !== marcaje.length) {
    eroare(f, `${declarate} subpuncte în frontmatter, ${marcaje.length} marcaje în text`);
  }
  const asteptate = ['a', 'b', 'c', 'd', 'e'].slice(0, declarate);
  if (marcaje.join('') !== asteptate.join('')) {
    eroare(f, `marcajele sunt [${marcaje}], se așteptau [${asteptate}]`);
  }

  // 4. Problemele de 15 puncte au subpuncte?
  if (Number(d.punctaj) === 15 && declarate === 0) {
    atentie(f, '15 puncte fără subpuncte declarate');
  }

  // 5. Caseta „ce scrii pe foaie"?
  if (!esteCiorna && !text.includes('class="pe-foaie"')) {
    atentie(f, 'lipsește caseta „Ce scrii efectiv pe foaie"');
  }

  // 6. Geometrie la Subiectul I fără desen?
  const geometrie = ['Geometrie analitică în plan', 'Trigonometrie'];
  if (!esteCiorna && d.subiect === 'I' && geometrie.includes(d.capitol) &&
      !text.includes('class="desen"')) {
    atentie(f, `${d.capitol} la Subiectul I fără desen`);
  }

  // 7. Monotonie fără tabel de variație?
  const semneMonotonie = /strict crescătoare|strict descrescătoare|monotoni/i.test(text);
  if (!esteCiorna && semneMonotonie && !text.includes('class="variatie"')) {
    atentie(f, 'discută monotonia fără tabel de variație');
  }

  // 8. Baremul variantei există?
  if (d.varianta && !existsSync(path.join(B, `${d.varianta}.md`))) {
    atentie(f, `nu există ${B}/${d.varianta}.md`);
  }

  // 9. Descrierea e utilă pentru Google?
  if (d.descriere && d.descriere.length < 70) {
    atentie(f, 'descrierea e prea scurtă pentru rezultatele Google');
  }

  // 10. Matematică afișată scrisă pe o singură linie?
  if (/^\$\$.+\$\$$/m.test(text)) {
    eroare(f, '$$...$$ pe o singură linie — iese matematică în rând, nu centrată');
  }

  // 11. Rând gol după deschiderea unui div?
  for (const m of text.matchAll(/<div class="(enunt|aside|pas-c|similar|greseala|pe-foaie)"[^>]*>\n(?!\n)/g)) {
    if (!m[0].endsWith('\n\n')) {
      eroare(f, `<div class="${m[1]}"> fără rând gol după — Markdown-ul nu se procesează înăuntru`);
    }
  }
}

// 12. Enunțuri orfane
for (const { f, d } of enunturi) {
  if (d.varianta === '_sablon') continue;
  const areRezolvare = rezolvari.some((r) => cheie(r.d) === cheie(d));
  if (!areRezolvare) atentie(f, 'enunț fără rezolvare');
}

/* ---------- raport ---------- */

const n = rezolvari.filter((r) => r.d.ciorna !== 'true').length;
console.log(`\n${n} rezolvări publicate, ${enunturi.length} enunțuri.\n`);

if (erori.length) {
  console.log('ERORI:');
  for (const e of erori) console.log(`  ✗ ${e}`);
  console.log('');
}
if (averizari.length) {
  console.log('DE VERIFICAT:');
  for (const a of averizari) console.log(`  · ${a}`);
  console.log('');
}
if (!erori.length && !averizari.length) console.log('Totul e în regulă.\n');

process.exit(erori.length ? 1 : 0);
