---
titlu: "Drepte paralele determinate de puncte"
titluSeo: "OA paralelă cu BC — determinarea parametrului din pante, rezolvare cu barem, BAC 2026 M_mate-info, Subiectul I.5"
descriere: "Cum afli parametrul dintr-o condiție de paralelism, folosind pantele, și de ce originea O contează în enunț. Subiectul I.5, BAC 2026, Sesiunea I, Varianta 3."
capitol: "Geometrie analitică în plan"
sursa: "BAC 2026, Sesiunea I, Varianta 3 — Subiectul I.5"
varianta: "bac-2026-s1-v3"
subiect: "I"
pozitie: 5
punctaj: 5
dificultate: 2
data: 2026-09-17
ciorna: false
---

## Ce recunoști înainte să calculezi

<figure class="desen">
<svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reper cartezian cu punctele A(3,6), B(4,1) și C(5,3); dreptele OA și BC sunt paralele, ambele cu panta 2.">
  <line class="ax" x1="50" y1="270" x2="300" y2="270"/>
  <line class="ax" x1="50" y1="270" x2="50" y2="30"/>
  <text class="et-mic" x="304" y="274">x</text>
  <text class="et-mic" x="42" y="28">y</text>
  <text class="et" x="34" y="286">O</text>
  <line class="aux" x1="50" y1="270" x2="180" y2="10"/>
  <line class="aux" x1="172" y1="271" x2="252" y2="111"/>
  <line class="fig" x1="50" y1="270" x2="155" y2="60"/>
  <line class="fig" x1="190" y1="235" x2="225" y2="165"/>
  <circle class="pct" cx="155" cy="60" r="3.5"/>
  <circle class="pct" cx="190" cy="235" r="3.5"/>
  <circle class="pct" cx="225" cy="165" r="3.5"/>
  <text class="et" x="126" y="52">A(3, 6)</text>
  <text class="et" x="166" y="254">B(4, 1)</text>
  <text class="et" x="233" y="161">C(5, 3)</text>
  <text class="et-mic et-acc" x="76" y="150">OA</text>
  <text class="et-mic et-acc" x="228" y="206">BC</text>
</svg>
<figcaption>Pante egale înseamnă drepte paralele; punctate sunt prelungirile, care nu se întâlnesc niciodată.</figcaption>
</figure>

Paralelism în plan cartezian înseamnă un singur lucru: **pante egale**. Tot
exercițiul se reduce la a le scrie pe amândouă și a le egala.

Dar sunt două detalii care decid dacă pornești corect.

**Primul: $O$ este originea.** Enunțul vorbește despre dreapta $OA$ fără să
definească $O$ nicăieri, pentru că „reperul cartezian $xOy$" îl introduce deja.
Deci $O\left(0,0\right)$. Se pierde ușor dacă citești repede și cauți un punct
$O$ în listă.

**Al doilea: formula pantei.** Pentru două puncte $P\left(x_1,y_1\right)$ și
$Q\left(x_2,y_2\right)$,

$$
m_{PQ} = \frac{y_2 - y_1}{x_2 - x_1}
$$

Diferența de ordonate sus, diferența de abscise jos — în aceeași ordine la
numărător și la numitor. Dacă inversezi ordinea la una dintre ele, îți iese
panta cu semn schimbat.

Aici numitorul lui $m_{BC}$ este $5-4=1$, ceea ce face calculul deosebit de
scurt. Merită observat: numerele din enunț sunt alese ca să nu ai fracții.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Calculezi panta dreptei $OA$** <span class="punct">2p</span>

Cu $O\left(0,0\right)$ și $A\left(3,6\right)$:

$$
m_{OA} = \frac{6-0}{3-0} = 2
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Scrii panta lui $BC$ și pui condiția de paralelism** <span class="punct">3p</span>

Cu $B\left(4,1\right)$ și $C\left(5,a\right)$:

$$
m_{BC} = \frac{a-1}{5-4} = a-1
$$

Din $m_{OA} = m_{BC}$ obținem $a-1=2$.

<p class="rezultat">a = 3</p>

</div>
</div>

## Ce îți spune baremul

Împărțirea e 2 pentru $m_{OA}$ și 3 pentru rest. Cele două puncte de la început
se iau pentru un singur rând de calcul — practic gratuit, dacă îl scrii.

De aici sfatul: chiar dacă vezi răspunsul din cap, **scrie ambele pante pe rânduri
separate**. Cine sare direct la $a-1=2$ riscă să rămână cu punctajul de la pasul
al doilea, pentru că primul nu se vede nicăieri.

<div class="aside">

**Rigoare, dincolo de barem.** Două drepte cu pante egale sunt paralele *sau*
confundate. Aici $OA$ are ecuația $y=2x$, iar $B\left(4,1\right)$ nu o verifică,
deci dreptele sunt distincte. Baremul nu cere verificarea, dar la un subiect de
15 puncte o asemenea observație poate conta.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$$
m_{OA}=\frac{6-0}{3-0}=2, \qquad m_{BC}=\frac{a-1}{5-4}=a-1
$$

Din $m_{OA}=m_{BC}$ obținem $a=3$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se ignoră că $O$ e originea.** Fără $O\left(0,0\right)$ nu poți calcula
$m_{OA}$, iar exercițiul se blochează din prima linie.

</div>

<div class="greseala">

**Se inversează ordinea la numitor.** $\dfrac{a-1}{5-4}$, nu $\dfrac{a-1}{4-5}$.
A doua variantă dă $a=-1$, adică răspuns greșit dintr-un semn.

</div>

<div class="greseala">

**Se confundă paralelismul cu perpendicularitatea.** Paralele înseamnă
$m_1 = m_2$; perpendiculare înseamnă $m_1 \cdot m_2 = -1$. Dacă ai folosit a doua
condiție, ai obținut $a=\dfrac{1}{2}$.

</div>

