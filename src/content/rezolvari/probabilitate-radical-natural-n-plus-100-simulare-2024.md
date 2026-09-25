---
titlu: "Probabilitatea ca √(n + 100) să fie natural"
titluSeo: "Probabilitatea ca √(n + 100) să fie natural pentru n de două cifre — pătratele dintre 110 și 199, rezolvare cu barem, Simulare BAC 2024 M_mate-info, Subiectul I.4"
descriere: "Muți condiția pe n + 100, afli între ce valori stă și cauți pătratele perfecte din interval. Patru cazuri favorabile din 90. Subiectul I.4, simularea BAC 2024."
capitol: "Combinatorică și binomul lui Newton"
sursa: "BAC 2024, Simulare clasa a XII-a — Subiectul I.4"
varianta: "bac-2024-sm-v1"
subiect: "I"
pozitie: 4
punctaj: 5
dificultate: 2
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

$\sqrt{k}$ e natural exact când $k$ e pătrat perfect. Deci întrebarea reală e:
pentru câte $n$ de două cifre este $n+100$ un pătrat perfect?

Nu verifici cele 90 de numere pe rând. Muți intervalul: dacă
$10\le n\le 99$, atunci $110\le n+100\le 199$. Cauți pătratele din intervalul
ăsta, care sunt puține, și din fiecare scazi $100$.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Cazurile posibile** <span class="punct">2p</span>

Numerele naturale de două cifre sunt $10,11,\dots,99$, adică $99-10+1=90$ de
numere. Sunt $90$ de cazuri posibile.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Cazurile favorabile și probabilitatea** <span class="punct">3p</span>

Din $10\le n\le 99$, adunând $100$: $110\le n+100\le 199$.

Pătratele perfecte din interval: $10^{2}=100$ e prea mic, $11^{2}=121$,
$12^{2}=144$, $13^{2}=169$, $14^{2}=196$, iar $15^{2}=225$ e prea mare. Scăzând
$100$ din fiecare: $n\in\left\{21,44,69,96\right\}$, deci $4$ cazuri favorabile.

$$
p=\frac{4}{90}=\frac{2}{45}
$$

Se simplifică fracția cu $2$.

<p class="rezultat">p = 2/45</p>

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

Mulțimea numerelor naturale de două cifre are $90$ de elemente, deci sunt $90$
de cazuri posibile.

Cum $110\le n+100\le 199$ și $n+100$ este pătratul unui număr natural, obținem
$4$ numere: $21$, $44$, $69$ și $96$, deci $p=\dfrac{4}{90}=\dfrac{2}{45}$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se numără $89$ de cazuri posibile**, din $99-10$. Capetele intră amândouă, deci
sunt $99-10+1=90$.

</div>

<div class="greseala">

**Se răspunde cu pătratele în loc de numere:** $121,144,169,196$. Ele sunt
valorile lui $n+100$, nu ale lui $n$. Aici nu schimbă probabilitatea, dar pe
foaie lista de cazuri favorabile trebuie să fie din mulțimea din care alegi.

</div>
