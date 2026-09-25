---
titlu: "Drepte paralele: OB și AC"
titluSeo: "OB paralelă cu AC, A(2,0), B(2,4), C(5,a) — parametrul din egalitatea pantelor, BAC 2025 Model M_mate-info, Subiectul I.5"
descriere: "Cum afli a din condiția de paralelism, egalând pantele, și de ce panta lui AC iese direct a/3. Subiectul I.5 din modelul de bacalaureat 2025."
capitol: "Geometrie analitică în plan"
sursa: "BAC 2025, Model — Subiectul I.5"
varianta: "bac-2025-model"
subiect: "I"
pozitie: 5
punctaj: 5
dificultate: 2
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

<figure class="desen">
<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reper cartezian cu originea O și punctele A(2,0), B(2,4) și C(5,a). Segmentele OB și AC sunt paralele, ambele cu panta 2.">
  <line class="ax" x1="30" y1="260" x2="285" y2="260"/>
  <line class="ax" x1="40" y1="275" x2="40" y2="20"/>
  <text class="et-mic" x="286" y="274">x</text>
  <text class="et-mic" x="46" y="24">y</text>
  <text class="et" x="22" y="278">O</text>
  <line class="aux" x1="100" y1="260" x2="100" y2="140"/>
  <line class="fig" x1="40" y1="260" x2="100" y2="140"/>
  <line class="fig" x1="100" y1="260" x2="190" y2="80"/>
  <circle class="pct" cx="40" cy="260" r="3.5"/>
  <circle class="pct" cx="100" cy="260" r="3.5"/>
  <circle class="pct" cx="100" cy="140" r="3.5"/>
  <circle class="pct" cx="190" cy="80" r="3.5"/>
  <text class="et" x="104" y="278">A(2, 0)</text>
  <text class="et" x="46" y="132">B(2, 4)</text>
  <text class="et" x="196" y="78">C(5, a)</text>
  <text class="et-mic et-acc" x="52" y="200">OB</text>
  <text class="et-mic et-acc" x="152" y="190">AC</text>
</svg>
<figcaption>A e proiecția lui B pe axa Ox. AC e dreapta OB mutată cu 2 unități spre dreapta, deci au aceeași pantă.</figcaption>
</figure>

Paralelism în reper cartezian înseamnă **pante egale**. Scrii panta fiecărei drepte
și le egalezi.

$O$ nu apare în lista de puncte pentru că e originea reperului $xOy$, deci
$O\left(0,0\right)$.

Formula pantei prin două puncte $P\left(x_1,y_1\right)$, $Q\left(x_2,y_2\right)$:

$$
m_{PQ}=\frac{y_2-y_1}{x_2-x_1}
$$

$A$ și $B$ au aceeași abscisă, deci dreapta $AB$ e verticală și nu are pantă. Nu
contează aici, pentru că perechile care te interesează sunt $O,B$ și $A,C$, dar nu
le amesteca.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Panta lui $OB$** <span class="punct">2p</span>

Cu $O\left(0,0\right)$ și $B\left(2,4\right)$:

$$
m_{OB}=\frac{4-0}{2-0}=2
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Panta lui $AC$ și condiția de paralelism** <span class="punct">3p</span>

Cu $A\left(2,0\right)$ și $C\left(5,a\right)$:

$$
m_{AC}=\frac{a-0}{5-2}=\frac{a}{3}
$$

Din $m_{OB}=m_{AC}$: $\dfrac{a}{3}=2$.

<p class="rezultat">a = 6</p>

</div>
</div>

<div class="aside">

**Dreptele nu sunt confundate.** Pante egale înseamnă paralele sau confundate. $OB$
are ecuația $y=2x$, iar $A\left(2,0\right)$ nu o verifică ($2\cdot 2\ne 0$), deci
dreptele sunt distincte. Baremul nu cere verificarea.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$m_{OB}=2$, $m_{AC}=\dfrac{a}{3}$ și, cum $m_{OB}=m_{AC}$, obținem $a=6$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se scrie $m_{AC}=\dfrac{a}{5}$.** Numitorul e $5-2$, nu $5$. Se întâmplă când se
copiază reflexul de la $OB$, unde un capăt e originea și scăderea nu se vede.

</div>

<div class="greseala">

**Se folosește condiția de perpendicularitate.** $m_{OB}\cdot m_{AC}=-1$ dă
$a=-\dfrac{3}{2}$. Paralele înseamnă pante egale.

</div>
