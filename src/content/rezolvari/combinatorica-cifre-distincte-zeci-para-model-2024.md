---
titlu: "Numere de două cifre distincte, cu cifra zecilor pară"
titluSeo: "Câte numere de două cifre distincte cu cifra zecilor pară din {1, 2, 3, 4, 5} — regula produsului, BAC 2024 Model M_mate-info, Subiectul I.4"
descriere: "Alegi întâi cifra cu restricție, apoi pe cea liberă, și înmulțești. De ce ordinea alegerii contează și de unde vine 2 · 4 = 8. Subiectul I.4, modelul BAC 2024."
capitol: "Combinatorică și binomul lui Newton"
sursa: "BAC 2024, Model — Subiectul I.4"
varianta: "bac-2024-model"
subiect: "I"
pozitie: 4
punctaj: 5
dificultate: 1
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

Un număr de două cifre e o pereche ordonată (zeci, unități). Numeri perechile
posibile cu **regula produsului**: câte variante ai pentru prima poziție, înmulțit
cu câte variante rămân pentru a doua.

Regula practică: **începi cu poziția care are restricția.** Aici restricția e pe
cifra zecilor (pară). Dacă o alegi prima, cifra unităților are o singură
condiție, să fie diferită, și numărul de variante pentru ea nu depinde de ce ai
ales înainte.

Mulțimea nu conține $0$, deci nu ai grija cifrei zecilor nule.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Cifra zecilor** <span class="punct">2p</span>

Cifrele pare din $A=\left\{1,2,3,4,5\right\}$ sunt $2$ și $4$. Deci cifra
zecilor se alege în $2$ moduri.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Cifra unităților și produsul** <span class="punct">3p</span>

Cifra unităților poate fi orice element din $A$ în afară de cel folosit la zeci,
deci $5-1=4$ moduri, oricare ar fi cifra zecilor.

$$
2\cdot 4=8
$$

<p class="rezultat">8 numere</p>

</div>
</div>

<div class="aside">

**Le poți și scrie pe toate:** $21, 23, 24, 25, 41, 42, 43, 45$. Opt, deci
socoteala se confirmă. La mulțimi mici lista e o verificare bună, dar pe foaie
punctajul se dă pe argumentul de numărare.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

Cifra zecilor se poate alege în $2$ moduri. Pentru fiecare alegere a cifrei
zecilor, cifra unităților se poate alege în câte $4$ moduri, deci se pot forma
$2\cdot 4=8$ numere.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se ignoră „cifre distincte" și se răspunde $2\cdot 5=10$.** Cele două numere
în plus sunt $22$ și $44$, care au cifre egale.

</div>

<div class="greseala">

**Se începe cu cifra unităților.** Atunci numărul de variante pentru zeci
depinde de ce ai ales la unități (dacă ai luat $2$, rămâne doar $4$ la zeci), și
produsul simplu nu mai funcționează. Se poate număra și așa, pe cazuri, dar e
mai lung și mai ușor de greșit.

</div>
