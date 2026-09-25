---
titlu: "Punctul D din OD = ½(AB + AC)"
titluSeo: "OD = ½(AB + AC) pentru A(1,4), B(4,6), C(4,2) — coordonatele lui D din componentele vectorilor, rezolvare cu barem, Simulare BAC 2024 M_mate-info, Subiectul I.5"
descriere: "Scrii AB și AC în componente, le aduni, împarți la 2 și citești coordonatele lui D din vectorul de poziție. De ce ½(AB + AC) e vectorul medianei. Subiectul I.5, simularea BAC 2024."
capitol: "Geometrie analitică în plan"
sursa: "BAC 2024, Simulare clasa a XII-a — Subiectul I.5"
varianta: "bac-2024-sm-v1"
subiect: "I"
pozitie: 5
punctaj: 5
dificultate: 2
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

<figure class="desen">
<svg viewBox="0 0 340 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reper cartezian cu triunghiul ABC, A(1,4), B(4,6), C(4,2), și M(4,4) mijlocul lui BC. Vectorul AM, mediana din A, este egal cu vectorul OD, unde D(3,0) este pe axa Ox.">
  <defs>
    <marker id="sag" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
  </defs>
  <line class="ax" x1="20" y1="280" x2="325" y2="280"/>
  <line class="ax" x1="40" y1="300" x2="40" y2="15"/>
  <text class="et-mic" x="326" y="296">x</text>
  <text class="et-mic" x="46" y="20">y</text>
  <text class="et" x="22" y="298">O</text>
  <line class="fig" x1="80" y1="120" x2="200" y2="40"/>
  <line class="fig" x1="80" y1="120" x2="200" y2="200"/>
  <line class="aux" x1="200" y1="40" x2="200" y2="200"/>
  <g color="var(--accent)">
    <line class="vect" x1="80" y1="120" x2="196" y2="120" marker-end="url(#sag)"/>
    <line class="vect" x1="40" y1="280" x2="156" y2="280" marker-end="url(#sag)"/>
  </g>
  <circle class="pct" cx="80" cy="120" r="3.5"/>
  <circle class="pct" cx="200" cy="40" r="3.5"/>
  <circle class="pct" cx="200" cy="200" r="3.5"/>
  <circle class="pct" cx="200" cy="120" r="3.5"/>
  <circle class="pct" cx="160" cy="280" r="3.5"/>
  <text class="et" x="50" y="112">A(1, 4)</text>
  <text class="et" x="208" y="40">B(4, 6)</text>
  <text class="et" x="208" y="206">C(4, 2)</text>
  <text class="et" x="208" y="124">M(4, 4)</text>
  <text class="et" x="146" y="302">D(3, 0)</text>
  <text class="et-mic et-acc" x="130" y="112">AM</text>
  <text class="et-mic et-acc" x="90" y="272">OD</text>
</svg>
<figcaption>Jumătatea sumei AB + AC este vectorul AM, mediana din A. OD e același vector, mutat cu originea în O.</figcaption>
</figure>

Relația leagă un vector de poziție, $\overrightarrow{OD}$, de o combinație de
vectori între punctele date. Calculezi membrul drept în componente, și atunci
$\overrightarrow{OD}=p\vec{i}+q\vec{j}$ îți dă direct $D\left(p,q\right)$.

Componentele unui vector se obțin scăzând originea din vârf:

$$
\overrightarrow{PQ}=\left(x_Q-x_P\right)\vec{i}+\left(y_Q-y_P\right)\vec{j}
$$

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Calculezi membrul drept** <span class="punct">3p</span>

Cu $A\left(1,4\right)$, $B\left(4,6\right)$, $C\left(4,2\right)$:

$$
\overrightarrow{AB}=\left(4-1\right)\vec{i}+\left(6-4\right)\vec{j}=3\vec{i}+2\vec{j},\qquad \overrightarrow{AC}=\left(4-1\right)\vec{i}+\left(2-4\right)\vec{j}=3\vec{i}-2\vec{j}
$$

La adunare, se reduce $2\vec{j}$ cu $-2\vec{j}$:

$$
\overrightarrow{OD}=\frac{1}{2}\left(3\vec{i}+2\vec{j}+3\vec{i}-2\vec{j}\right)=\frac{1}{2}\cdot 6\vec{i}=3\vec{i}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Citești coordonatele** <span class="punct">2p</span>

$\overrightarrow{OD}=3\vec{i}+0\cdot\vec{j}$, deci $x_D=3$ și $y_D=0$.

<p class="rezultat">D(3, 0)</p>

</div>
</div>

<div class="alternativa">

**Prin mediană.** $\dfrac{1}{2}\left(\overrightarrow{AB}+\overrightarrow{AC}\right)=\overrightarrow{AM}$,
unde $M$ e mijlocul lui $BC$. $M\left(\dfrac{4+4}{2},\dfrac{6+2}{2}\right)=M\left(4,4\right)$,
deci $\overrightarrow{AM}=3\vec{i}+0\cdot\vec{j}$ și $D\left(3,0\right)$. Folosește
un rezultat de geometrie în loc de calcul, dar pe foaie trebuie să-l numești.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$\overrightarrow{OD}=\dfrac{1}{2}\left(3\vec{i}+2\vec{j}+3\vec{i}-2\vec{j}\right)=3\vec{i}$

Coordonatele punctului $D$ sunt $x_D=3$ și $y_D=0$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se scad punctele în ordine inversă:** $\overrightarrow{AB}=\left(1-4\right)\vec{i}+\left(4-6\right)\vec{j}$.
Vectorul iese cu semn schimbat, iar $D$ ajunge în $\left(-3,0\right)$.

</div>

<div class="greseala">

**Se confundă $D$ cu $M$.** $\overrightarrow{AM}$ pornește din $A$, deci $M$ nu
are coordonatele componentelor lui. Doar pentru un vector care pornește din $O$
componentele sunt coordonatele vârfului.

</div>
