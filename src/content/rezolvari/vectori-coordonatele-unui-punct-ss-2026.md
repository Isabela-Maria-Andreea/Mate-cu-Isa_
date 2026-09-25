---
titlu: "Coordonatele unui punct dintr-o relație vectorială"
titluSeo: "Punctul C cu 2·BC = OA pentru A(6,4) și B(1,3) — rezolvare cu barem, BAC 2026 M_mate-info, Subiectul I.5"
descriere: "Cum transformi o egalitate de vectori în două ecuații cu numere, fără să desenezi nimic. Subiectul I.5, BAC 2026, Sesiunea specială, Varianta 2."
capitol: "Geometrie analitică în plan"
sursa: "BAC 2026, Sesiunea specială, Varianta 2 — Subiectul I.5"
varianta: "bac-2026-ss-v2"
subiect: "I"
pozitie: 5
punctaj: 5
dificultate: 2
data: 2026-09-17
ciorna: false
---

## Ce recunoști înainte să calculezi

<figure class="desen">
<svg viewBox="0 0 360 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reper cartezian cu punctele A(6,4), B(1,3) și C(4,5); vectorul BC are aceeași direcție și sens ca OA, dar jumătate din lungime.">
  <defs>
    <marker id="sag" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
  </defs>
  <line class="ax" x1="50" y1="250" x2="340" y2="250"/>
  <line class="ax" x1="50" y1="250" x2="50" y2="20"/>
  <text class="et-mic" x="344" y="254">x</text>
  <text class="et-mic" x="42" y="18">y</text>
  <text class="et" x="34" y="266">O</text>
  <g color="var(--accent)">
    <line class="vect" x1="50" y1="250" x2="290" y2="90" marker-end="url(#sag)"/>
    <line class="vect" x1="90" y1="130" x2="210" y2="50" marker-end="url(#sag)"/>
  </g>
  <circle class="pct" cx="290" cy="90" r="3.5"/>
  <circle class="pct" cx="90" cy="130" r="3.5"/>
  <circle class="pct" cx="210" cy="50" r="3.5"/>
  <text class="et" x="298" y="86">A(6, 4)</text>
  <text class="et" x="58" y="126">B(1, 3)</text>
  <text class="et" x="218" y="46">C(4, 5)</text>
  <text class="et-mic et-acc" x="150" y="182">OA</text>
  <text class="et-mic et-acc" x="140" y="106">BC</text>
</svg>
<figcaption>Cei doi vectori au aceeași direcție și același sens; BC este jumătate din OA, ceea ce fixează poziția lui C.</figcaption>
</figure>

O egalitate între doi vectori în plan nu e o singură ecuație, ci **două**: una pe
componenta orizontală, una pe cea verticală. Din momentul în care scrii ambii vectori
în componente, problema devine aritmetică.

Două lucruri de fixat înainte:

**$O$ este originea.** Reperul se numește $xOy$, deci $O\left(0,0\right)$. Vectorul
$\overrightarrow{OA}$ are componentele chiar coordonatele lui $A$.

**Ordinea literelor dă sensul scăderii.** Pentru $\overrightarrow{PQ}$, se scade
originea vectorului din vârful lui: $\overrightarrow{PQ}=\left(x_{Q}-x_{P}\right)\vec{i}+\left(y_{Q}-y_{P}\right)\vec{j}$.
Deci $\overrightarrow{BC}$ pornește din $B$ și ajunge în $C$ — se scade $B$ din $C$,
nu invers.

Coeficientul $2$ din $2\overrightarrow{BC}=\overrightarrow{OA}$ e mai comod mutat de
partea cealaltă: $\overrightarrow{BC}=\dfrac{1}{2}\overrightarrow{OA}$. Așa înmulțești
numere cunoscute, nu necunoscute.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii ambii vectori în componente** <span class="punct">2p</span>

$$
\overrightarrow{OA}=6\vec{i}+4\vec{j}, \qquad
\overrightarrow{BC}=\left(x_{C}-1\right)\vec{i}+\left(y_{C}-3\right)\vec{j}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Egalezi componenta cu componentă** <span class="punct">3p</span>

Din $\overrightarrow{BC}=\dfrac{1}{2}\overrightarrow{OA}$ obținem

$$
\left(x_{C}-1\right)\vec{i}+\left(y_{C}-3\right)\vec{j}=3\vec{i}+2\vec{j}
$$

deci $x_{C}-1=3$ și $y_{C}-3=2$.

<p class="rezultat">C(4, 5)</p>

</div>
</div>

## Ce îți spune baremul

Două puncte pentru scrierea celor doi vectori, trei pentru identificarea componentelor
și rezolvare. Ca la majoritatea itemilor de la Subiectul I, pregătirea valorează
aproape jumătate.

Scrie $\overrightarrow{BC}$ cu $x_{C}$ și $y_{C}$ explicit, nu „fie $C\left(x,y\right)$"
urmat de calcule în cap. Rândul acela e unul dintre cele două punctate.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$\overrightarrow{OA}=6\vec{i}+4\vec{j}$,
$\overrightarrow{BC}=\left(x_{C}-1\right)\vec{i}+\left(y_{C}-3\right)\vec{j}$

Din $\overrightarrow{BC}=\dfrac{1}{2}\overrightarrow{OA}$ rezultă
$\left(x_{C}-1\right)\vec{i}+\left(y_{C}-3\right)\vec{j}=3\vec{i}+2\vec{j}$,
de unde $C\left(4,5\right)$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se inversează ordinea în $\overrightarrow{BC}$.** Scris ca
$\left(1-x_{C}\right)\vec{i}+\left(3-y_{C}\right)\vec{j}$, dă $C\left(-2,1\right)$.
Vectorul merge de la prima literă spre a doua.

</div>

<div class="greseala">

**Se înmulțește greșit cu $2$.** Din $2\overrightarrow{BC}=\overrightarrow{OA}$ rezultă
$\overrightarrow{BC}=\dfrac{1}{2}\overrightarrow{OA}$, deci componentele se
**împart** la doi. Dacă le înmulțești, obții $C\left(13,11\right)$.

</div>

<div class="greseala">

**Se scrie o singură ecuație.** Egalitatea vectorilor înseamnă egalitatea ambelor
componente. Un singur rând de calcul lasă jumătate din problemă nerezolvată.

</div>

