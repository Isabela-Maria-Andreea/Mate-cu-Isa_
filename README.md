# Mate cu Isa

Site de rezolvări comentate la bacalaureatul de matematică, programa
**M_mate-info**. Fiecare problemă dintr-o variantă oficială are pagina ei:
enunțul transcris exact, rezolvarea pas cu pas, capcanele de barem și, separat,
ce se scrie efectiv pe foaie pentru punctaj.

Conținutul e deschis și indexabil — nu e o platformă cu conturi, ci un site
static de conținut, cu o pagină de contact pentru meditații 1 la 1.

**Stadiu:** 102 rezolvări publicate, 104 enunțuri transcrise.

---

## Stack

| Tehnologie | Rol |
|---|---|
| [Astro 5](https://astro.build) | Generator static; build-ul produce HTML pur, fără JavaScript trimis către client |
| Astro Content Collections | Conținutul din Markdown, validat la build cu scheme [Zod](https://zod.dev) |
| [remark-math](https://github.com/remarkjs/remark-math) + [rehype-katex](https://github.com/remarkjs/remark-math) | Formulele LaTeX din Markdown sunt transformate în HTML în timpul build-ului |
| [KaTeX](https://katex.org) | Randarea matematicii — la build, nu în browser: pagina ajunge la elev deja compusă |
| CSS scris de mână | Variabile pe `:root`, fără framework de stilizare |
| Node.js | Scriptul propriu de verificare a conținutului (`scripts/verifica.mjs`) |

Fără bază de date, fără backend, fără dependințe de runtime. Site-ul e un folder
de fișiere statice: se servește de oriunde, nu are ce să cadă și nu are ce să fie
spart.

## Cum e construit

### Conținutul e date, nu pagini

Rezolvările și enunțurile stau în două colecții separate
(`src/content/rezolvari/`, `src/content/enunturi/`), fiecare cu schema ei în
`src/content.config.ts`. Frontmatter-ul poartă capitolul din programă, varianta,
subiectul, poziția, punctajul din barem și dificultatea — iar `capitol` e un
`z.enum` peste lista oficială de capitole, așa că o etichetă scrisă greșit
oprește build-ul, cu numele fișierului în mesajul de eroare.

Enunțurile sunt ținute separat de rezolvări intenționat: se transcriu o singură
dată pe variantă și sunt regăsite de layout după cheia `varianta + subiect +
pozitie`, nu copiate în corpul articolului.

### Rutele se generează din conținut

```
src/pages/rezolvari/[...slug].astro   → o pagină per rezolvare
src/pages/variante/[id].astro         → o pagină per variantă de bac
```

Numele fișierului Markdown devine adresa, deci e ales după cuvintele pe care
le-ar căuta cineva pe Google:
`ecuatie-logaritmica-schimbare-de-baza-simulare-2026.md` →
`/rezolvari/ecuatie-logaritmica-schimbare-de-baza-simulare-2026/`.

### Verificare automată a conținutului

Schema Astro validează fiecare fișier în parte. `npm run verifica` verifică ce
schema nu poate vedea — **relațiile dintre fișiere**:

- o rezolvare care nu are enunțul transcris;
- subpuncte declarate în frontmatter, dar nemarcate în text;
- o problemă de geometrie fără desen;
- un studiu de monotonie fără tabel de variație;
- `$$` pus pe un singur rând (iese matematică în rând, nu centrată);
- un `<div>` fără rând gol după deschidere (conținutul nu mai e parsat ca Markdown).

Iese cu cod `1` la erori și `0` la avertismente, deci poate fi pus într-un hook
de commit sau într-un pas de CI.

## Instalare

```bash
npm install
npm run dev       # http://localhost:4321 — hot reload
npm run build     # generează dist/
npm run preview   # servește dist/ local
npm run verifica  # verifică integritatea conținutului
```

După orice modificare de conținut se rulează **amândouă**: `npm run build`
(erori de schemă) și `npm run verifica` (relații stricate între fișiere).

## Publicare

Output static. Legat la Cloudflare Pages sau Vercel, publicarea înseamnă
`git push` — site-ul se reconstruiește singur.

Comanda de build: `npm run build` · folderul de ieșire: `dist`

## Structura proiectului

```
src/
├── content/
│   ├── rezolvari/       articolele (Markdown + frontmatter)
│   └── enunturi/         enunțurile oficiale, transcrise exact
├── content.config.ts     schemele Zod și lista de capitole
├── layouts/
│   ├── Base.astro        cadrul paginii: head, nav, footer
│   └── Rezolvare.astro   pagina unei rezolvări
├── components/           Contact, iconițe
├── pages/                rutele, inclusiv cele generate din conținut
├── styles/global.css     tot CSS-ul; culorile și fonturile ca variabile
├── config.ts             date de contact, tarif, locuri disponibile
└── variante.ts           variantele de bac și metadatele lor
scripts/verifica.mjs      verificatorul de conținut
```

## Convenții de redactare

Matematica afișată se scrie cu `$$` pe **linii separate**:

```
$$
a_n = \sqrt{n^2 + 3n + 2} - n
$$
```

În rând se scrie cu un singur dolar: `$n \ge 1$`.

În interiorul unui `<div>` trebuie **rând gol** după deschidere și înainte de
închidere, altfel textul nu mai e citit ca Markdown:

```html
<div class="aside">

Text cu $matematică$ aici.

</div>
```

Clase disponibile în articole: `enunt`, `enunt-eticheta`, `aside`,
`pas` / `pas-n` / `pas-c`, `punct`, `rezultat`, `greseala`, `pe-foaie`,
`alternativa`, `atentie`, `variatie`, `desen`. Șablonul complet:
`src/content/rezolvari/_sablon.md`.

Explicația pedagogică stă în afara casetei `pe-foaie`; caseta conține exact ce
se scrie pe foaie pentru punctaj. `ciorna: true` în frontmatter ține un articol
nepublicat.

## Decizii tehnice asumate

Site-ul nu are conturi, autentificare, bază de date, plăți, abonamente,
corectare automată sau analytics de la terți. E o alegere, nu o lipsă: scopul
e conținut care se încarcă instant pe telefon și pe care Google îl indexează,
nu o platformă de întreținut. Dacă va fi vreodată nevoie de conturi, se adaugă
peste, fără să se rescrie nimic.

---

Scris de **Isabela-Maria Andreea**, studentă la Automatică și Calculatoare, UPB.
