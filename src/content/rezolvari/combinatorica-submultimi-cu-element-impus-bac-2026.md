---
titlu: "Submulțimi care conțin obligatoriu un element"
titluSeo: "Câte submulțimi cu 3 elemente conțin numărul 5 — rezolvare cu barem, BAC 2026 M_mate-info, Subiectul I.4"
descriere: "Cum transformi o condiție de tipul „trebuie să conțină elementul x\" într-o combinare mai mică, fără să enumeri. Subiectul I.4, BAC 2026, Sesiunea I, Varianta 3."
capitol: "Combinatorică și binomul lui Newton"
sursa: "BAC 2026, Sesiunea I, Varianta 3 — Subiectul I.4"
varianta: "bac-2026-s1-v3"
subiect: "I"
pozitie: 4
punctaj: 5
dificultate: 2
data: 2026-09-17
ciorna: false
---

## Ce recunoști înainte să calculezi

Mulțimea are cinci elemente, submulțimile cerute au trei. Tentația e să le
enumeri pe toate și să numeri câte conțin pe $5$. Merge — dar e lent, și la
mulțimi mai mari devine imposibil.

Ideea care rezolvă problema în zece secunde: **un element impus nu se alege, el
e deja acolo.**

Dacă submulțimea trebuie să aibă trei elemente și unul dintre ele este obligatoriu
$5$, atunci singura libertate care îți rămâne e alegerea celorlalte **două**, din
elementele rămase. Adică din $A \setminus \{5\} = \{1, 2, 3, 7\}$.

Problema „submulțimi cu 3 elemente din 5, care conțin pe 5" devine problema
„submulțimi cu 2 elemente din 4". Nimic altceva.

<div class="aside">

**Generalizarea.** Dintr-o mulțime cu $n$ elemente, numărul submulțimilor cu $k$
elemente care conțin un element fixat este $C_{n-1}^{\,k-1}$: scazi unu din ambii
indici. Dacă în schimb elementul e **interzis**, scazi doar din indicele de jos:
$C_{n-1}^{\,k}$.

</div>

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Reformulezi problema** <span class="punct">3p</span>

Numărul submulțimilor cu exact trei elemente ale mulțimii $A$ care conțin
elementul $5$ este egal cu numărul submulțimilor cu exact două elemente ale
mulțimii $A \setminus \{5\}$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Numeri** <span class="punct">2p</span>

Mulțimea $A \setminus \{5\} = \{1, 2, 3, 7\}$ are patru elemente, deci

$$
C_{4}^{2} = \frac{4 \cdot 3}{2} = 6
$$

submulțimi cu exact două elemente.

<p class="rezultat">6 submulțimi</p>

</div>
</div>

## Ce îți spune baremul

Trei puncte din cinci se dau pentru **reformulare**, nu pentru calcul. Propoziția
care spune că problema e echivalentă cu numărarea perechilor din $A \setminus \{5\}$
valorează mai mult decât $C_4^2 = 6$.

E logic: calculul e banal, raționamentul e tot exercițiul. Scrie-l ca frază
completă, nu îl lăsa subînțeles.

Corolarul: dacă enumeri cele șase submulțimi și scrii răspunsul corect fără
justificare, rămâi expusă — un răspuns fără raționament nu ia automat punctele de
raționament.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

Numărul submulțimilor cu trei elemente ale lui $A$ care conțin $5$ este egal cu
numărul submulțimilor cu două elemente ale lui $A\setminus\{5\}$.

$$
C_{4}^{2}=6
$$

</div>

## Unde se pierd puncte

<div class="greseala">

**Se scade doar dintr-un indice.** $C_4^3$ ar răspunde la „câte submulțimi cu trei
elemente **nu** conțin pe 5", iar $C_5^2$ nu răspunde la nimic din enunț. Elementul
impus scade și mărimea mulțimii, și mărimea submulțimii.

</div>

<div class="greseala">

**Se enumeră fără să se justifice.** Enumerarea e o verificare bună, dar nu ține
loc de raționament. Scrie întâi echivalența, apoi, dacă vrei, verifică
enumerând.

</div>

<div class="greseala">

**Se numără aranjamente în loc de combinări.** O submulțime nu are ordine:
$\{1,2\}$ și $\{2,1\}$ sunt aceeași. Dacă folosești $A_4^2 = 12$, ai numărat
fiecare submulțime de două ori.

</div>

