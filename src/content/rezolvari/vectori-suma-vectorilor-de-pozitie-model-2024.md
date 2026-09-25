---
titlu: "Punctul C din OA + OB = OC"
titluSeo: "OA + OB = OC pentru A(0,3) și B(4,0) — coordonatele lui C cu vectori de poziție, rezolvare cu barem, BAC 2024 Model M_mate-info, Subiectul I.5"
descriere: "Vectorul de poziție al unui punct are componentele chiar coordonatele punctului, deci suma se face pe componente. Subiectul I.5, modelul BAC 2024."
capitol: "Geometrie analitică în plan"
sursa: "BAC 2024, Model — Subiectul I.5"
varianta: "bac-2024-model"
subiect: "I"
pozitie: 5
punctaj: 5
dificultate: 1
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

<figure class="desen">
<svg viewBox="0 0 320 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reper cartezian cu A(0,3) pe axa Oy și B(4,0) pe axa Ox. Vectorii OA, OB și OC pornesc din origine; OC este diagonala dreptunghiului OACB, cu C(4,3).">
  <defs>
    <marker id="sag" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
  </defs>
  <line class="ax" x1="30" y1="250" x2="305" y2="250"/>
  <line class="ax" x1="50" y1="270" x2="50" y2="20"/>
  <text class="et-mic" x="306" y="266">x</text>
  <text class="et-mic" x="56" y="24">y</text>
  <text class="et" x="32" y="268">O</text>
  <line class="aux" x1="50" y1="100" x2="250" y2="100"/>
  <line class="aux" x1="250" y1="250" x2="250" y2="100"/>
  <g color="var(--accent)">
    <line class="vect" x1="50" y1="250" x2="50" y2="104" marker-end="url(#sag)"/>
    <line class="vect" x1="50" y1="250" x2="246" y2="250" marker-end="url(#sag)"/>
    <line class="vect" x1="50" y1="250" x2="247" y2="102" marker-end="url(#sag)"/>
  </g>
  <circle class="pct" cx="50" cy="100" r="3.5"/>
  <circle class="pct" cx="250" cy="250" r="3.5"/>
  <circle class="pct" cx="250" cy="100" r="3.5"/>
  <text class="et" x="58" y="92">A(0, 3)</text>
  <text class="et" x="232" y="272">B(4, 0)</text>
  <text class="et" x="258" y="96">C(4, 3)</text>
  <text class="et-mic et-acc" x="150" y="166">OC</text>
</svg>
<figcaption>Suma a doi vectori cu aceeași origine e diagonala paralelogramului construit pe ei. Aici paralelogramul e un dreptunghi, pentru că OA și OB stau pe axe.</figcaption>
</figure>

Toți vectorii din relație pornesc din $O$, originea reperului. Un vector
$\overrightarrow{OP}$ se numește **vector de poziție** al lui $P$, iar
componentele lui sunt chiar coordonatele lui $P$:

$$
P\left(x,y\right)\ \Rightarrow\ \overrightarrow{OP}=x\vec{i}+y\vec{j}
$$

Deci $\overrightarrow{OC}$ îți dă direct coordonatele lui $C$. Adunarea vectorilor
se face pe componente, $\vec{i}$ cu $\vec{i}$ și $\vec{j}$ cu $\vec{j}$.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii vectorii de poziție** <span class="punct">2p</span>

Din $A\left(0,3\right)$ și $B\left(4,0\right)$:

$$
\overrightarrow{OA}=0\cdot\vec{i}+3\vec{j}=3\vec{j},\qquad \overrightarrow{OB}=4\vec{i}+0\cdot\vec{j}=4\vec{i}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Aduni și citești coordonatele** <span class="punct">3p</span>

$$
\overrightarrow{OC}=\overrightarrow{OA}+\overrightarrow{OB}=4\vec{i}+3\vec{j}
$$

Coeficientul lui $\vec{i}$ e abscisa, al lui $\vec{j}$ e ordonata.

<p class="rezultat">C(4, 3)</p>

</div>
</div>

<div class="alternativa">

**Cu regula paralelogramului, fără componente.** $OA$ e pe axa $Oy$, $OB$ pe
axa $Ox$, deci paralelogramul construit pe ele e dreptunghiul $OACB$. Al
patrulea vârf are abscisa lui $B$ și ordonata lui $A$, adică $\left(4,3\right)$.
E aceeași idee, spusă geometric; pe foaie e mai sigur calculul pe componente,
pentru că arată fiecare pas.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$\overrightarrow{OA}=3\vec{j}$, $\overrightarrow{OB}=4\vec{i}$

$\overrightarrow{OC}=4\vec{i}+3\vec{j}$, deci punctul $C$ are coordonatele
$\left(4,3\right)$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se inversează coordonatele și se răspunde $C\left(3,4\right)$.** Se întâmplă
când aduni „3 cu 4" în ordinea în care apar în enunț. $A$ contribuie cu ordonata,
$B$ cu abscisa.

</div>

<div class="greseala">

**Se răspunde doar cu vectorul $\overrightarrow{OC}=4\vec{i}+3\vec{j}$.**
Enunțul cere coordonatele punctului; concluzia $C\left(4,3\right)$ trebuie
scrisă explicit.

</div>
