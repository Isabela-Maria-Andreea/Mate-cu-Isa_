
# matecuisa

Site de matematică pentru bacalaureat (programa M_mate-info), scris de Isa,
studentă în anul 2 la Automatică și Calculatoare, UPB.

**Scopul site-ului:** conținut deschis și indexabil de Google, care aduce elevi
la meditații 1 la 1. Nu e o platformă — e un site de conținut cu o pagină de
contact.

## Stack

Astro 5, conținut din Markdown (content collections), KaTeX pentru matematică
(remark-math + rehype-katex). Output static. Fără framework UI, fără TypeScript
strict, fără Tailwind.

## Ce NU are, intenționat

Conturi, autentificare, bază de date, plăți, abonamente, corectare automată,
dashboard, analytics de la terți. Nu le propune și nu le adăuga. Dacă o cerință
pare să aibă nevoie de ele, spune asta și întreabă înainte.

## Harta fișierelor

| Ce                                   | Unde                             |
| ------------------------------------ | -------------------------------- |
| Rezolvări (conținut)               | `src/content/rezolvari/*.md`   |
| Schema de frontmatter                | `src/content.config.ts`        |
| Nume, email, WhatsApp, tarif, locuri | `src/config.ts`                |
| Tot CSS-ul                           | `src/styles/global.css`        |
| Cadrul paginii (nav, head, footer)   | `src/layouts/Base.astro`       |
| Pagina de rezolvare                  | `src/layouts/Rezolvare.astro`  |
| Invitația la meditații             | `src/components/Contact.astro` |
| Paginile fixe                        | `src/pages/`                   |

## Reguli de conținut

**Matematica afișată se scrie cu `$$` pe linii separate.** Pe o singură linie
iese matematică în rând, nu centrată:

```
$$
a_n = \sqrt{n^2 + 3n + 2} - n
$$
```

**Înăuntrul unui `<div>` trebuie rând gol** după deschidere și înainte de
închidere, altfel conținutul nu mai e parsat ca Markdown.

**Enunțurile se transcriu exact.** Stau în `src/content/enunturi/`, un fișier
per poziție, și se copiază cuvânt cu cuvânt din subiectul oficial — nu se
reformulează, nu se scurtează. Nu le scrie în corpul articolului: layout-ul le
ia din colecție, după `varianta + subiect + pozitie`. Dacă enunțul lipsește,
cere-l; nu îl reconstitui din rezolvare.

**Clase disponibile în articole:** `enunt`, `enunt-eticheta`, `aside`,
`pas` / `pas-n` / `pas-c`, `punct`, `rezultat`, `greseala`, `pe-foaie`,
`alternativa`, `atentie`, `variatie`, `desen`. Vezi
`src/content/rezolvari/_sablon.md`.

**Articolul se încheie cu secțiunea de greșeli.** Nu adăuga exerciții propuse,
probleme similare sau teme — site-ul publică rezolvări la variante oficiale,
atât. Exercițiile de antrenament sunt treaba meditațiilor, nu a paginii.

**Tabelul de variație e obligatoriu** oriunde apare un studiu de semn sau de
monotonie — derivată care schimbă semn, funcție auxiliară al cărei semn îl
demonstrezi, discuție despre numărul de soluții. Se scrie ca
`<table class="variatie">` într-un `<div class="variatie-scroll">`, cu rândurile
`x`, `f′(x)`, `f(x)` (sau funcția auxiliară, urmată de cea cerută). Valorile se
scriu cu unicode — `−∞`, `+∞`, `↗`, `↘` — pentru că LaTeX nu se randează în
interiorul unui tabel HTML. Tabelul **completează** descrierea în cuvinte, nu o
înlocuiește: baremul formulează monotonia în propoziții.

**Problemele de geometrie de la Subiectul I primesc întotdeauna un desen** —
geometrie analitică, vectori, trigonometrie în triunghi. Se scrie ca SVG inline
într-un `<figure class="desen">`, cu `<figcaption>` care spune ce arată desenul,
nu ce se vede oricum. Folosește clasele `ax`, `fig`, `aux`, `cerc`, `vect`,
`pct`, `et`, `et-mic`, `et-acc` din `global.css` — culorile vin din temă, nu se
scriu în SVG. Pune `role="img"` și `aria-label` cu descrierea figurii. Desenul
stă imediat sub titlul „Ce recunoști înainte să calculezi", pentru că rolul lui
e să arate configurația înainte de calcul.

## Cum se scrie rezolvarea

**Arată toate simplificările intermediare.** Nu sări peste algebra de bază.
Diferența de pătrate se scrie desfășurat — `$x^2-4=(x-2)(x+2)$` — iar termenii
care se reduc se numesc explicit: „se simplifică $e^x$ cu $-e^x$". Elevul care
citește trebuie să poată reface fiecare rând fără să calculeze pe hârtie.

**Justifică alegerea metodei prin calcul, nu prin afirmație.** Înainte de
l'Hôpital, arată de ce ai $\left[\frac{0}{0}\right]$: ce tinde la zero la
numărător, ce la numitor, și din ce ipoteză. La fel pentru orice metodă care
are condiții de aplicare.

**Leagă notațiile de datele din enunț.** Când introduci sau schimbi o notație,
pune în paranteză de unde vine: `$F'(x)=f(x)$ din definiția primitivei`,
`$g$ e numărătorul lui $f'$`. Fără asta, pasul pare scos din context.

**Semnalează capcanele de barem acolo unde apar**, nu doar la final, cu
`<span class="atentie">`. Tipice: `$(u^2)'=2u\cdot u'$` la derivarea compusă,
modulul la scoaterea de sub radical, semnul la înmulțirea cu un negativ.

**Menționează metodele alternative acceptate de barem** cu
`<div class="alternativa">`. Baremul scrie explicit că orice soluție corectă
primește punctajul, deci a doua cale legitimă merită numită — pe scurt, cu
diferența față de prima.

**Fără casetă de enunț care se lipește la derulare.** Clasa `reamintire` a fost
scoasă intenționat; nu o readuce și nu repeta enunțul la fiecare subpunct.

**Separă complet explicația de rezolvarea de examen.** Tot ce e pedagogic —
`aside`, `alternativa`, `atentie`, comentariile dintre pași — stă în afara
casetei `pe-foaie`. Caseta conține exact ce se scrie pe foaie pentru punctaj,
nimic mai mult.

`ciorna: true` ține un articol nepublicat.

## Design

Toate culorile și fonturile sunt variabile CSS pe `:root` în `global.css`
(`--ink`, `--accent`, `--rule`, `--serif`, `--sans`, `--mono`, `--measure`).
**Folosește variabilele, nu valori hardcodate.** Nu introduce framework de
stilizare și nu schimba paleta fără să ți se ceară.

Serif pentru conținut (se potrivește cu KaTeX), sans pentru navigație și
etichete. Coloana de text stă la ~65 de caractere — `--measure`.

Mobilul contează: majoritatea elevilor citesc pe telefon. Formulele lungi au
scroll propriu, nu împing pagina.

## Ton

Scrie în română, cu diacritice. Direct, fără entuziasm de marketing, fără
emoji. Se adresează unui elev de clasa a 12-a ca unui om inteligent.

## Verificare

După orice modificare de conținut, rulează **amândouă**:

```
npm run build      # erori de schemă: capitol greșit, câmp lipsă
npm run verifica   # relații stricate între fișiere
```

`verifica` prinde ce nu vede schema: o rezolvare fără enunț, subpuncte
declarate dar nemarcate în text, o problemă de geometrie fără desen, monotonie
fără tabel de variație, `$$` pe un singur rând, `<div>` fără rând gol după.
Iese cu cod 1 la erori, 0 la avertismente.
