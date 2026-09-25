---
name: toate-variantele
description: Procesează în serie toate variantele nelucrate din subiecte/, apelând pe rând scrierea și verificarea, cu oprire la prima problemă gravă. Se invocă atunci când utilizatoarea vrea mai multe variante procesate una după alta.
---

# Procesare în serie

Rulează `varianta-noua` și `verifica-varianta` pe fiecare variantă nelucrată,
până se termină sau până apare o problemă care cere decizia utilizatoarei.

## Înainte de orice — inventarul

Compară ce e în `subiecte/` cu ce e deja în `src/variante.ts`. O variantă e
**nelucrată** dacă are ambele PDF-uri (subiect și barem) în `subiecte/` și
niciun id corespunzător în `VARIANTE`.

Raportează lista înainte să începi: câte variante, care sunt, în ce ordine le
iei. Dacă lipsește baremul pentru vreuna, **sări peste ea** și spune de ce — nu
scrie rezolvări cu punctaje inventate.

Dacă nu găsești nicio variantă nelucrată, spune asta și oprește-te.

## Bucla, pentru fiecare variantă

### Pasul 1 — schelet

Fazele 1–3 din `varianta-noua`: cele zece enunțuri transcrise exact, baremul în
`bareme/`, intrarea în `src/variante.ts` cu temele completate.

Partea asta e pur mecanică și nu are risc de calitate. O faci fără să întrebi.

### Pasul 2 — rezolvările

Faza 4 din `varianta-noua`, toate zece. **Aici e diferența față de rularea
manuală:** nu te oprești după fiecare, pentru că verificarea vine imediat după.

Respectă toate regulile din `CLAUDE.md`.

### Pasul 3 — verificarea, ca subagent

Pornește un **subagent** care rulează `verifica-varianta` pe varianta tocmai
scrisă. Contextul lui trebuie să fie curat: dă-i doar id-ul variantei, nu
rezumate ale muncii tale. Rostul lui e să citească fișierele și PDF-urile de la
zero, nu să-ți confirme presupunerile.

### Pasul 4 — decizia

Din raportul subagentului:

- **Orice problemă gravă** — matematică greșită, enunț transcris greșit, punctaj
  care nu e în barem — **oprește toată bucla**. Raportează ce s-a găsit, la ce
  variantă, și așteaptă. Nu trece la varianta următoare.
- **Probleme de corectat** — condiție lipsă, regulă neaplicată — corectează-le,
  apoi rulează verificarea din nou pe aceleași fișiere.
- **Observații de discutat** — voce, secțiuni inutile — notează-le și continuă.

### Pasul 5 — mai departe

`npm run build` și `npm run verifica`. Dacă trec, treci la varianta următoare.

## Când te oprești, indiferent de raport

- La a treia variantă procesată, **oprește-te și cere o citire umană**, chiar
  dacă totul a trecut. Motivul: articolele scrise în serie încep să semene
  între ele, iar asemănarea nu se vede din interior. Utilizatoarea citește două
  la alegere și spune dacă mai sună a om.
- Dacă aceeași observație de voce apare la două variante consecutive, oprește-te
  — e un tipar, nu un accident.
- Dacă build-ul cade și nu știi de ce din prima încercare.

## Raportul final

Pe scurt: câte variante ai procesat, câte articole, ce a găsit verificarea la
fiecare, și ce a rămas de decis. Lista variantelor sărite, cu motivul.
