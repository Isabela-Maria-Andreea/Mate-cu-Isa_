---
titlu: "Vectori: AB = 2AC și punctul D cu OD = CB"
titluSeo: "AB = 2AC, OD = CB cu A(1,2), B(7,4) — coordonatele lui D, rezolvare cu barem, Simulare BAC 2025 M_mate-info, Subiectul I.5"
descriere: "De ce AB = 2AC face din C mijlocul lui AB, și de ce OD = CB îți dă coordonatele lui D direct din vector. Subiectul I.5 din simularea BAC 2025."
capitol: "Geometrie analitică în plan"
sursa: "BAC 2025, Simulare clasa a XII-a — Subiectul I.5"
varianta: "bac-2025-sm-v1"
subiect: "I"
pozitie: 5
punctaj: 5
dificultate: 2
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

<figure class="desen">
<svg viewBox="0 0 300 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reper cartezian cu punctele A(1,2) și B(7,4); C este mijlocul segmentului AB. Vectorul CB și vectorul OD, care pornește din origine, sunt egali: aceeași direcție, același sens, aceeași lungime.">
  <defs>
    <marker id="sag" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
  </defs>
  <line class="ax" x1="30" y1="250" x2="285" y2="250"/>
  <line class="ax" x1="30" y1="265" x2="30" y2="30"/>
  <text class="et-mic" x="287" y="264">x</text>
  <text class="et-mic" x="36" y="34">y</text>
  <text class="et" x="14" y="268">O</text>
  <line class="fig" x1="60" y1="190" x2="150" y2="160"/>
  <g color="var(--accent)">
    <line class="vect" x1="150" y1="160" x2="240" y2="130" marker-end="url(#sag)"/>
    <line class="vect" x1="30" y1="250" x2="120" y2="220" marker-end="url(#sag)"/>
  </g>
  <circle class="pct" cx="60" cy="190" r="3.5"/>
  <circle class="pct" cx="240" cy="130" r="3.5"/>
  <circle class="pct" cx="150" cy="160" r="3.5"/>
  <circle class="pct" cx="120" cy="220" r="3.5"/>
  <text class="et" x="40" y="182">A(1, 2)</text>
  <text class="et" x="222" y="120">B(7, 4)</text>
  <text class="et" x="140" y="150">C</text>
  <text class="et" x="126" y="236">D</text>
  <text class="et-mic et-acc" x="196" y="164">CB</text>
  <text class="et-mic et-acc" x="70" y="250">OD</text>
</svg>
<figcaption>C e la jumătatea drumului de la A la B. OD e același vector ca CB, doar mutat cu originea în O.</figcaption>
</figure>

**$\overrightarrow{AB}=2\overrightarrow{AC}$ spune că $C$ e mijlocul lui $AB$.**
Vectorii au aceeași direcție și același sens, iar $AC$ e jumătate din $AB$, deci
$C$ stă pe segment, exact la jumătate. Consecința utilă: și
$\overrightarrow{CB}=\dfrac{1}{2}\overrightarrow{AB}$.

**$\overrightarrow{OD}$ are coordonatele lui $D$.** Un vector care pornește din
origine are exact coordonatele vârfului. Deci nici nu trebuie să afli $C$: calculezi
$\overrightarrow{CB}$ din $\overrightarrow{AB}$ și citești $D$.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii $\overrightarrow{AB}$ și pe $\overrightarrow{CB}$ ca jumătate din el** <span class="punct">3p</span>

$$
\overrightarrow{AB}=\left(7-1\right)\vec{i}+\left(4-2\right)\vec{j}=6\vec{i}+2\vec{j}
$$

Din $\overrightarrow{AB}=2\overrightarrow{AC}$, $C$ este mijlocul lui $AB$, deci
$\overrightarrow{CB}=\dfrac{1}{2}\overrightarrow{AB}$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Citești $D$** <span class="punct">2p</span>

$$
\overrightarrow{OD}=\overrightarrow{CB}=\frac{1}{2}\left(6\vec{i}+2\vec{j}\right)=3\vec{i}+\vec{j}
$$

<p class="rezultat">D(3, 1)</p>

</div>
</div>

<div class="alternativa">

**Prin coordonatele lui $C$.** Mijlocul lui $AB$ e $C\left(\dfrac{1+7}{2},\dfrac{2+4}{2}\right)=C\left(4,3\right)$,
iar $\overrightarrow{CB}=\left(7-4\right)\vec{i}+\left(4-3\right)\vec{j}=3\vec{i}+\vec{j}$.
Același rezultat, cu un calcul în plus.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$\overrightarrow{CB}=\dfrac{1}{2}\overrightarrow{AB}$ și $\overrightarrow{AB}=6\vec{i}+2\vec{j}$.

$\overrightarrow{OD}=3\vec{i}+\vec{j}$, deci punctul $D$ are coordonatele $\left(3,1\right)$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se răspunde cu coordonatele lui $C$.** $C\left(4,3\right)$ e un pas intermediar.
Se cere $D$.

</div>

<div class="greseala">

**Se inversează sensul: $\overrightarrow{BC}$ în loc de $\overrightarrow{CB}$.**
Obții $D\left(-3,-1\right)$. $\overrightarrow{CB}$ pleacă din $C$ și ajunge în $B$,
deci se calculează $B-C$.

</div>
