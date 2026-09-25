---
titlu: "Dreapta prin A perpendiculară pe OB"
titluSeo: "Ecuația dreptei prin A(0,5) perpendiculară pe OB — m₁·m₂ = −1, rezolvare cu barem, Simulare BAC 2026 M_mate-info, Subiectul I.5"
descriere: "Cum afli panta unei drepte perpendiculare din condiția m₁·m₂ = −1 și scrii ecuația prin punct și pantă. Subiectul I.5 de la Simularea BAC 2026, clasa a XII-a, cu desen."
capitol: "Geometrie analitică în plan"
sursa: "BAC 2026, Simulare clasa a XII-a — Subiectul I.5"
varianta: "bac-2026-sm-v1"
subiect: "I"
pozitie: 5
punctaj: 5
dificultate: 2
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

<figure class="desen">
<svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reper cartezian cu punctele A(0,5) pe axa Oy și B(4,2). Dreapta OB și dreapta d prin A, perpendiculară pe OB, care o intersectează în punctul (2,1).">
  <line class="ax" x1="30" y1="260" x2="305" y2="260"/>
  <line class="ax" x1="50" y1="285" x2="50" y2="20"/>
  <text class="et-mic" x="308" y="264">x</text>
  <text class="et-mic" x="42" y="18">y</text>
  <text class="et" x="34" y="276">O</text>
  <line class="aux" x1="210" y1="180" x2="290" y2="140"/>
  <line class="aux" x1="150" y1="260" x2="160" y2="280"/>
  <line class="fig" x1="50" y1="260" x2="210" y2="180"/>
  <line class="vect" x1="50" y1="60" x2="150" y2="260"/>
  <polyline class="aux" points="138.9,215.5 134.5,206.6 125.5,211.1"/>
  <circle class="pct" cx="50" cy="60" r="3.5"/>
  <circle class="pct" cx="210" cy="180" r="3.5"/>
  <circle class="pct" cx="130" cy="220" r="3"/>
  <text class="et" x="58" y="56">A(0, 5)</text>
  <text class="et" x="206" y="200">B(4, 2)</text>
  <text class="et-mic" x="134" y="238">(2, 1)</text>
  <text class="et-mic et-acc" x="104" y="130">d</text>
</svg>
<figcaption>Dreapta d coboară de două ori mai repede decât urcă OB: panta −2 contra 1/2. Unghiul drept e în (2, 1).</figcaption>
</figure>

Perpendicularitatea între drepte neverticale se scrie într-un singur fel:

$$
m_{1}\cdot m_{2}=-1
$$

Deci ai nevoie de **panta lui $OB$**, iar $O$ e originea reperului,
$O\left(0,0\right)$, chiar dacă nu apare în lista de puncte. Din ea afli panta
dreptei căutate. Apoi ai un punct, $A$, și o pantă: ecuația dreptei prin punct
și pantă,

$$
y-y_{A}=m\left(x-x_{A}\right)
$$

Observația care scurtează: $A$ e pe axa $Oy$, deci $5$ este chiar ordonata la
origine. Ecuația va fi de forma $y=mx+5$.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Calculezi panta lui $OB$ și pe cea a perpendicularei** <span class="punct">3p</span>

Cu $O\left(0,0\right)$ și $B\left(4,2\right)$:

$$
m_{OB}=\frac{2-0}{4-0}=\frac{2}{4}=\frac{1}{2}
$$

Pentru dreapta $d$ căutată, $m_{OB}\cdot m_{d}=-1$:

$$
\frac{1}{2}\cdot m_{d}=-1 \Rightarrow m_{d}=-2
$$

<span class="atentie">**Inversă și cu semn schimbat.** Panta perpendicularei e $-\dfrac{1}{m}$, nu $\dfrac{1}{m}$ și nici $-m$. Din $\dfrac{1}{2}$ iese $-2$.</span>

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Scrii ecuația prin $A$ cu panta $-2$** <span class="punct">2p</span>

$$
y-5=-2\left(x-0\right) \Rightarrow y-5=-2x \Rightarrow y=-2x+5
$$

<p class="rezultat">d: y = −2x + 5</p>

</div>
</div>

<div class="alternativa">

**Cu vectorul director.** $\overrightarrow{OB}=4\vec{i}+2\vec{j}$ e normal la $d$,
deci $d$ are ecuația $4x+2y+c=0$. Din $A\left(0,5\right)$: $10+c=0$, deci
$c=-10$, adică $4x+2y-10=0$, echivalent cu $y=-2x+5$. Merge, dar folosește o
noțiune mai puțin obișnuită la clasă; pantele sunt calea standard.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$m_{OB}=\dfrac{1}{2}$ și, cum $m_{OB}\cdot m_{d}=-1$, obținem $m_{d}=-2$.

Ecuația dreptei $d$ este $y-5=-2x$, adică $y=-2x+5$.

</div>

## Unde se pierd puncte

<!-- SCHIȚĂ: greșelile de mai jos sunt propuse, nu verificate pe lucrări reale. De confirmat de Isa. -->

<div class="greseala">

**Se ia panta lui $AB$ în loc de $OB$.** Enunțul cere perpendiculara pe $OB$,
iar $O$ e originea. Cu $AB$ ies alte numere și tot exercițiul e pierdut.

</div>

<div class="greseala">

**Se scrie $m_{d}=2$ sau $m_{d}=\dfrac{1}{2}$.** Ori s-a pierdut semnul, ori
s-a pus condiția de paralelism. Pentru perpendiculare produsul pantelor e $-1$.

</div>
