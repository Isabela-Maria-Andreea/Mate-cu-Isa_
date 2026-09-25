---
name: verifica-varianta
description: Recitește o variantă deja scrisă și o compară cu PDF-urile oficiale — transcrierea enunțurilor, corectitudinea matematicii față de barem, punctajele, regulile de redactare. Se invocă după ce varianta e gata, într-o sesiune nouă, sau când utilizatoarea cere verificarea unei variante.
---

# Verificarea unei variante scrise

**Rulează într-o sesiune nouă, nu imediat după ce ai scris rezolvările.**
Dacă tu le-ai scris în conversația asta, spune-i utilizatoarei să deschidă o
sesiune curată și să te invoce acolo. Motivul: contextul care a produs o
greșeală o reproduce la recitire. Verificarea are valoare doar dacă pornește de
la fișiere și de la PDF-ul oficial, nu de la ce îți amintești.

## Ce citești, în ordinea asta

1. **PDF-ul subiectului** din `subiecte/` — paginile randate, nu extragerea de
   text.
2. **PDF-ul baremului** din `subiecte/`.
3. Cele zece **enunțuri** din `src/content/enunturi/<id-varianta>-*.md`.
4. Baremul transcris din `bareme/<id-varianta>.md`.
5. Cele zece **rezolvări** din `src/content/rezolvari/`.
6. `CLAUDE.md`, pentru regulile de redactare.

Nu porni de la rezolvări. Citește întâi sursele oficiale, ca să ai în minte ce
*trebuie* să scrie, apoi compară.

## Ce verifici

### Nivelul 1 — fidelitatea transcrierii

Compară fiecare enunț cu PDF-ul, **caracter cu caracter**. Cauți: indici și
exponenți inversați, semne pierdute, intervale deschise scrise închise, condiții
omise („număr natural nenul", „pentru orice $x$ real"), elemente de matrice
mutate.

O greșeală aici e cea mai gravă din tot site-ul: elevul învață o problemă care
nu există.

### Nivelul 2 — matematica

Reface fiecare calcul. Nu presupune că e corect pentru că pare plauzibil.
Verifică în special:

- rezultatul final coincide cu cel din barem;
- fiecare pas intermediar duce la următorul;
- condițiile de aplicare sunt scrise acolo unde metoda le cere (echivalența la
  ridicarea la pătrat, cazul $\left[\frac{0}{0}\right]$ înainte de l'Hôpital,
  nenulitatea unui factor înainte de simplificare);
- semnele, la fiecare înmulțire cu un negativ.

### Nivelul 3 — punctajele

Fiecare `<span class="punct">` trebuie să corespundă baremului oficial, nu unei
estimări. Verifică și suma: subpunctele unei probleme de 15 puncte dau 15.

Dacă un punctaj nu se regăsește în barem, **semnalează-l ca inventat** — e o
eroare de încredere, nu una de stil.

### Nivelul 4 — regulile din CLAUDE.md

Tabel de variație la studiu de semn. Desen la geometrie de la Subiectul I.
Caseta `pe-foaie` fără elemente pedagogice în ea. Reamintirea funcției la
problemele de 15 puncte. Simplificări intermediare arătate. Fără exerciții
propuse la final.

Partea mecanică o prinde `npm run verifica` — rulează-l, dar nu te opri acolo:
scriptul nu poate citi dacă un tabel de variație are semnele corecte.

### Nivelul 5 — vocea

Citește cele zece rezolvări una după alta. Semnalează:

- fraze care se repetă identic între articole;
- secțiuni „Ce îți spune baremul" care nu spun nimic neevident — dacă
  împărțirea punctelor e banală, secțiunea trebuie scoasă, nu umplută;
- ton care alunecă în entuziasm sau în tutorial generic.

Zece articole care sună identic arată a conținut generat, ceea ce contrazice
exact ce promite pagina „Cine este Isa".

## Ce faci cu ce găsești

**Corectează singur** doar erorile mecanice: o clasă CSS scrisă greșit, un
`$$` pe un rând, un rând gol lipsă după `<div>`, un capitol care nu e în
`CAPITOLE`.

**Nu corecta singur** matematica, punctajele sau enunțurile. Raportează-le și
așteaptă. O corectură greșită la matematică e mai rea decât greșeala inițială,
pentru că trece neobservată.

## Raportul

Grupat pe gravitate, cu fișierul și locul exact:

1. **Grave** — matematică greșită, enunț transcris greșit, punctaj inventat.
2. **De corectat** — condiție lipsă, justificare absentă, regulă din CLAUDE.md
   neaplicată.
3. **De discutat** — voce repetitivă, secțiuni care nu adaugă nimic.

Dacă nu găsești nimic la nivelul 1 sau 2, **spune asta explicit**. Un raport
care înșiră doar observații de stil, fără să confirme că matematica e corectă,
nu e o verificare.

La final: `npm run build` și `npm run verifica`.
