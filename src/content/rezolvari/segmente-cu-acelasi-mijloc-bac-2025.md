---
titlu: "Segmente cu același mijloc"
titluSeo: "AC și BD au același mijloc, A(0,1), B(5,0), C(6,3), D(a,b) — rezolvare cu barem, BAC 2025 Sesiunea I M_mate-info, Subiectul I.5"
descriere: "Scrii mijlocul fiecărui segment și egalezi coordonatele. Geometric, ABCD e paralelogram. Subiectul I.5, BAC 2025, Sesiunea I, Varianta 1."
capitol: "Geometrie analitică în plan"
sursa: "BAC 2025, Sesiunea I, Varianta 1 — Subiectul I.5"
varianta: "bac-2025-s1-v1"
subiect: "I"
pozitie: 5
punctaj: 5
dificultate: 1
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

<figure class="desen">
<svg viewBox="0 0 280 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Paralelogramul ABCD cu A(0,1), B(5,0), C(6,3) și D(a,b). Diagonalele AC și BD se intersectează în mijlocul lor comun, M(3,2).">
  <line class="ax" x1="20" y1="230" x2="270" y2="230"/>
  <line class="ax" x1="30" y1="245" x2="30" y2="30"/>
  <text class="et-mic" x="270" y="244">x</text>
  <text class="et-mic" x="36" y="34">y</text>
  <polygon class="fig" points="30,195 205,230 240,125 65,90"/>
  <line class="aux" x1="30" y1="195" x2="240" y2="125"/>
  <line class="aux" x1="205" y1="230" x2="65" y2="90"/>
  <circle class="pct" cx="30" cy="195" r="3.5"/>
  <circle class="pct" cx="205" cy="230" r="3.5"/>
  <circle class="pct" cx="240" cy="125" r="3.5"/>
  <circle class="pct" cx="65" cy="90" r="3.5"/>
  <circle class="pct" cx="135" cy="160" r="3"/>
  <text class="et" x="38" y="212">A(0, 1)</text>
  <text class="et" x="186" y="250">B(5, 0)</text>
  <text class="et" x="222" y="116">C(6, 3)</text>
  <text class="et" x="46" y="82">D(a, b)</text>
  <text class="et-mic et-acc" x="140" y="152">M</text>
</svg>
<figcaption>Diagonalele unui patrulater se înjumătățesc reciproc doar dacă patrulaterul e paralelogram. M e mijlocul comun.</figcaption>
</figure>

„Același mijloc” e o egalitate de puncte, deci de coordonate. Mijlocul unui segment
are coordonatele media aritmetică a capetelor:

$$
M\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)
$$

Mijlocul lui $AC$ e complet cunoscut. Cel al lui $BD$ depinde de $a$ și $b$. Egalezi
abscisele și ordonatele separat și obții două ecuații simple.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii cele două mijloace** <span class="punct">3p</span>

Mijlocul lui $AC$: $\left(\dfrac{0+6}{2},\dfrac{1+3}{2}\right)=\left(3,2\right)$.

Mijlocul lui $BD$: $\left(\dfrac{5+a}{2},\dfrac{0+b}{2}\right)=\left(\dfrac{5+a}{2},\dfrac{b}{2}\right)$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Egalezi** <span class="punct">2p</span>

$\dfrac{5+a}{2}=3$, deci $5+a=6$ și $a=6-5=1$; $\dfrac{b}{2}=2$, deci $b=4$.

<p class="rezultat">a = 1 și b = 4</p>

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

Mijlocul segmentului $AC$ are coordonatele $\left(3,2\right)$, iar mijlocul segmentului
$BD$ are coordonatele $\left(\dfrac{5+a}{2},\dfrac{b}{2}\right)$, deci $a=1$ și $b=4$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se scrie mijlocul ca diferență.** $\dfrac{x_2-x_1}{2}$ e jumătatea lungimii proiecției,
nu coordonata mijlocului. Formula are sumă.

</div>
