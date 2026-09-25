---
titlu: "Probabilitate: n de două cifre, n² de trei cifre"
titluSeo: "Probabilitatea ca n² să aibă trei cifre, pentru n număr de două cifre — rezolvare cu barem, Simulare BAC 2025 M_mate-info, Subiectul I.4"
descriere: "Cum transformi condiția pe n² într-un interval pentru n și de ce 31 e ultimul număr bun. Subiectul I.4 din simularea BAC 2025."
capitol: "Combinatorică și binomul lui Newton"
sursa: "BAC 2025, Simulare clasa a XII-a — Subiectul I.4"
varianta: "bac-2025-sm-v1"
subiect: "I"
pozitie: 4
punctaj: 5
dificultate: 2
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

Condiția e pe $n^{2}$, dar numeri valori ale lui $n$. Deci o muți pe $n$:

$$
100\le n^{2}\le 999
$$

Limita de jos e sigură: $n\ge 10$ oricum, iar $10^{2}=100$ are deja trei cifre. Limita
de sus e singura întrebare reală: care e cel mai mare $n$ cu $n^{2}\le 999$? Pătratele
de lângă: $31^{2}=961$ și $32^{2}=1024$. Deci $n\le 31$.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Cazurile posibile** <span class="punct">2p</span>

Numerele naturale de două cifre sunt $10,11,\ldots,99$, adică $90$. Sunt $90$ de
cazuri posibile.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Cazurile favorabile și probabilitatea** <span class="punct">3p</span>

$n^{2}$ are trei cifre când $10^{2}\le n^{2}\le 31^{2}$, adică $n\in\left\{10,11,\ldots,31\right\}$.
Sunt $31-10+1=22$ de valori.

$$
p=\frac{22}{90}=\frac{11}{45}
$$

Se simplifică prin $2$.

<p class="rezultat">p = 11/45</p>

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

Mulțimea numerelor naturale de două cifre are $90$ de elemente, deci $90$ de cazuri
posibile.

Cum $10^{2}\le n^{2}\le 31^{2}$, obținem $22$ de cazuri favorabile, deci
$p=\dfrac{22}{90}=\dfrac{11}{45}$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se numără $21$ de valori.** $31-10=21$ uită unul dintre capete. De la $10$ la $31$
inclusiv sunt $22$ de numere.

</div>

<div class="greseala">

**Se ia $n\le 32$ sau $n\le 30$.** Fără $31^{2}=961$ scris explicit, capătul se
ghicește. Calculează cele două pătrate din jurul lui $1000$.

</div>
