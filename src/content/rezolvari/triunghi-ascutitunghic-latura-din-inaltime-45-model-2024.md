---
titlu: "Latura BC din înălțime și unghiul de 45°"
titluSeo: "Triunghi ascuțitunghic cu AB = 5, C = π/4 și AD = 4 — BC = 7 din două triunghiuri dreptunghice, rezolvare cu barem, BAC 2024 Model M_mate-info, Subiectul I.6"
descriere: "Înălțimea AD taie triunghiul în două triunghiuri dreptunghice: unul isoscel, din care iese DC, și unul 3-4-5, din care iese BD. Subiectul I.6, modelul BAC 2024."
capitol: "Trigonometrie"
sursa: "BAC 2024, Model — Subiectul I.6"
varianta: "bac-2024-model"
subiect: "I"
pozitie: 6
punctaj: 5
dificultate: 2
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

<figure class="desen">
<svg viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triunghiul ABC cu baza BC orizontală și înălțimea AD, cu D între B și C. AB = 5, AD = 4, unghiul C are 45 de grade. BD = 3 și DC = 4.">
  <polygon class="fig" points="30,220 310,220 150,60"/>
  <line class="fig" x1="150" y1="60" x2="150" y2="220"/>
  <polyline class="aux" points="150,208 162,208 162,220"/>
  <path class="aux" d="M 275 220 A 35 35 0 0 1 285.3 195.3"/>
  <circle class="pct" cx="150" cy="220" r="3"/>
  <text class="et" x="14" y="240">B</text>
  <text class="et" x="314" y="240">C</text>
  <text class="et" x="144" y="50">A</text>
  <text class="et" x="144" y="242">D</text>
  <text class="et-mic" x="72" y="134">5</text>
  <text class="et-mic" x="134" y="146">4</text>
  <text class="et-mic et-acc" x="84" y="212">3</text>
  <text class="et-mic et-acc" x="226" y="212">4</text>
  <text class="et-mic" x="244" y="206">45°</text>
</svg>
<figcaption>Triunghiul ADC e dreptunghic cu un unghi de 45°, deci isoscel: DC = AD. Triunghiul ABD e dreptunghic cu ipotenuza 5 și o catetă 4.</figcaption>
</figure>

Înălțimea $AD$ face unghi drept cu $BC$, deci împarte triunghiul în **două
triunghiuri dreptunghice în $D$**, fiecare cu câte o bucată din $BC$.

**În $ADC$** știi unghiul $C=\dfrac{\pi}{4}$ și cateta $AD$. Un triunghi
dreptunghic cu un unghi de $45°$ are și celălalt unghi ascuțit de $45°$, deci e
isoscel.

**În $ABD$** știi ipotenuza $AB=5$ și cateta $AD=4$. Pitagora dă cealaltă
catetă.

„Ascuțitunghic" nu e decor: el garantează că piciorul înălțimii cade **între**
$B$ și $C$, deci $BC=BD+DC$.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**$DC$ din triunghiul $ADC$** <span class="punct">2p</span>

$ADC$ e dreptunghic în $D$, cu $\angle C=45°$, deci
$\angle DAC=90°-45°=45°$. Triunghiul e isoscel, cu $DC=AD$.

$$
DC=AD=4
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**$BD$ din triunghiul $ABD$ și suma** <span class="punct">3p</span>

$ABD$ e dreptunghic în $D$, cu ipotenuza $AB=5$. Din Pitagora:

$$
BD^{2}=AB^{2}-AD^{2}=25-16=9,\qquad BD=3
$$

Triunghiul $ABC$ e ascuțitunghic, deci $D$ se află pe segmentul $BC$, între $B$
și $C$:

$$
BC=BD+DC=3+4=7
$$

<p class="rezultat">BC = 7</p>

</div>
</div>

<span class="atentie">**Nu sări peste „$D$ e între $B$ și $C$".** Dacă unghiul $B$ ar fi obtuz, $D$ ar cădea în afara segmentului și $BC$ ar fi $DC-BD=1$. Ipoteza „ascuțitunghic" e cea care exclude cazul ăsta.</span>

<div class="alternativa">

**Cu tangenta, în loc de „isoscel".** În $ADC$, $\operatorname{tg}C=\dfrac{AD}{DC}$,
deci $DC=\dfrac{4}{\operatorname{tg}\frac{\pi}{4}}=\dfrac{4}{1}=4$. Același
rezultat, cu o formulă în loc de un argument despre unghiuri.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$\triangle ADC$ dreptunghic în $D$ cu $C=\dfrac{\pi}{4}$, deci $DC=AD=4$.

$\triangle ABD$ dreptunghic în $D$: $BD=\sqrt{AB^{2}-AD^{2}}=\sqrt{25-16}=3$.

$\triangle ABC$ ascuțitunghic, deci $D\in\left(BC\right)$ și
$BC=BD+DC=3+4=7$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se aplică teorema sinusurilor direct în $ABC$.** Din
$\dfrac{AB}{\sin C}=\dfrac{BC}{\sin A}$ ai nevoie de $\sin A$, pe care nu-l
știi. Se ajunge la el, dar pe un drum mult mai lung; înălțimea e dată tocmai ca
să nu mergi pe acolo.

</div>

<div class="greseala">

**Se scrie $DC=4\sqrt{2}$.** Asta e $AC$, ipotenuza triunghiului isoscel, nu
cateta. $DC$ e cateta alăturată unghiului $C$, egală cu $AD$.

</div>
