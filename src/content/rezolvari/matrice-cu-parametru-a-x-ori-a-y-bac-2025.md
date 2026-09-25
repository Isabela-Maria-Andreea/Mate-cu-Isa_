---
titlu: "Matrice cu parametru: A(x)·A(y) = 2A(x + y)"
titluSeo: "A(x)·A(y) = 2A(x + y) și ecuația (A(x) + A(3x))·A(2x) = 4A(x²) — rezolvare cu barem, BAC 2025 Sesiunea I M_mate-info, Subiectul II.1"
descriere: "Determinantul pe linia cu un singur element nenul, produsul A(x)·A(y) pe elemente și cum reduci ecuația de la c) la 4x = x². Subiectul II.1, BAC 2025, Sesiunea I, Varianta 1."
capitol: "Matrice"
sursa: "BAC 2025, Sesiunea I, Varianta 1 — Subiectul II.1"
varianta: "bac-2025-s1-v1"
subiect: "II"
pozitie: 1
subpuncte:
  - "Determinantul lui A(1)"
  - "Produsul A(x)·A(y)"
  - "Ecuația matriceală"
punctaj: 15
dificultate: 3
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

**Linia a doua a lui $A\left(x\right)$ e $\left(0,2,0\right)$.** La determinant poți
dezvolta după ea: rămâne $2$ înmulțit cu un minor $2\times 2$. Sarrus merge la fel de
bine, iar baremul îl folosește.

**La c), două observații fac totul fără înmulțiri noi.**

- $A\left(x\right)$ depinde de $x$ liniar, element cu element. Deci suma
  $A\left(x\right)+A\left(3x\right)$ e de două ori matricea din mijloc,
  $2A\left(2x\right)$. Verifici pe elemente: $\left(2-3x\right)+\left(2-9x\right)=2\left(2-6x\right)$
  și la fel peste tot.
- Formula de la b) dă $A\left(2x\right)\cdot A\left(2x\right)=2A\left(4x\right)$.

Ecuația ajunge la $A\left(4x\right)=A\left(x^{2}\right)$, adică $4x=x^{2}$.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Determinantul lui A(1)

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii $A\left(1\right)$** <span class="punct">2p</span>

Cu $x=1$: $2-3=-1$, $-9$, $2+3=5$:

$$
A\left(1\right)=\begin{pmatrix}-1 & 0 & 1\\ 0 & 2 & 0\\ -9 & 0 & 5\end{pmatrix}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Calculezi cu Sarrus** <span class="punct">3p</span>

$$
\det\left(A\left(1\right)\right)=\left(-1\right)\cdot 2\cdot 5+0+0-1\cdot 2\cdot\left(-9\right)-0-0=-10+18=8
$$

Singurele produse nenule sunt pe diagonala principală și pe diagonala secundară, ambele
prin elementul $2$ din centru.

<p class="rezultat">det(A(1)) = 8</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Produsul A(x)·A(y)

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Înmulțești** <span class="punct">3p</span>

Linia a doua și coloana a doua sunt „izolate” (au un singur element nenul, $2$), deci
dau doar $2\cdot 2=4$ în centru și zerouri în rest. Rămân patru elemente de calculat:

- $\left(1,1\right)$: $\left(2-3x\right)\left(2-3y\right)+x\cdot\left(-9y\right)=4-6x-6y+9xy-9xy=4-6x-6y$;
- $\left(1,3\right)$: $\left(2-3x\right)y+x\left(2+3y\right)=2y-3xy+2x+3xy=2x+2y$;
- $\left(3,1\right)$: $-9x\left(2-3y\right)+\left(2+3x\right)\left(-9y\right)=-18x+27xy-18y-27xy=-18x-18y$;
- $\left(3,3\right)$: $-9x\cdot y+\left(2+3x\right)\left(2+3y\right)=-9xy+4+6x+6y+9xy=4+6x+6y$.

În fiecare, termenii cu $xy$ se reduc.

$$
A\left(x\right)\cdot A\left(y\right)=\begin{pmatrix}4-6x-6y & 0 & 2x+2y\\ 0 & 4 & 0\\ -18x-18y & 0 & 4+6x+6y\end{pmatrix}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Scoți factorul $2$** <span class="punct">2p</span>

$$
=2\begin{pmatrix}2-3\left(x+y\right) & 0 & x+y\\ 0 & 2 & 0\\ -9\left(x+y\right) & 0 & 2+3\left(x+y\right)\end{pmatrix}=2A\left(x+y\right)
$$

Matricea din paranteză e $A$ scrisă cu $x+y$ în locul lui $x$.

<p class="rezultat">A(x)·A(y) = 2A(x + y)</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Ecuația matriceală

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Reduci membrul stâng** <span class="punct">3p</span>

Adunând element cu element,

$$
A\left(x\right)+A\left(3x\right)=\begin{pmatrix}4-12x & 0 & 4x\\ 0 & 4 & 0\\ -36x & 0 & 4+12x\end{pmatrix}=2A\left(2x\right)
$$

Apoi, din b) cu $x$ și $y$ ambele egale cu $2x$:

$$
\left(A\left(x\right)+A\left(3x\right)\right)\cdot A\left(2x\right)=2A\left(2x\right)\cdot A\left(2x\right)=2\cdot 2A\left(4x\right)=4A\left(4x\right)
$$

<span class="atentie">**Doi factori de $2$.** Unul vine din $A\left(x\right)+A\left(3x\right)=2A\left(2x\right)$, pentru că diagonala constantă se dublează; celălalt vine din formula de la b). Fără oricare dintre ei, ecuația nu mai iese.</span>

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Compari** <span class="punct">2p</span>

$4A\left(4x\right)=4A\left(x^{2}\right)$, deci $A\left(4x\right)=A\left(x^{2}\right)$.
Elementul din colțul dreapta-sus al lui $A\left(t\right)$ e chiar $t$, deci $4x=x^{2}$:

$$
x^{2}-4x=x\left(x-4\right)=0
$$

<p class="rezultat">x = 0 sau x = 4</p>

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $A\left(1\right)=\begin{pmatrix}-1 & 0 & 1\\ 0 & 2 & 0\\ -9 & 0 & 5\end{pmatrix}$,
$\det\left(A\left(1\right)\right)=-10+0+0+18-0-0=8$

**b)** $A\left(x\right)\cdot A\left(y\right)=\begin{pmatrix}4-6x-6y & 0 & 2x+2y\\ 0 & 4 & 0\\ -18x-18y & 0 & 4+6x+6y\end{pmatrix}=2\begin{pmatrix}2-3\left(x+y\right) & 0 & x+y\\ 0 & 2 & 0\\ -9\left(x+y\right) & 0 & 2+3\left(x+y\right)\end{pmatrix}=2A\left(x+y\right)$

**c)** $A\left(x\right)+A\left(3x\right)=2A\left(2x\right)$,
$\left(A\left(x\right)+A\left(3x\right)\right)\cdot A\left(2x\right)=4A\left(4x\right)$.

$4A\left(4x\right)=4A\left(x^{2}\right)$, de unde $4x=x^{2}$, deci $x=0$ sau $x=4$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se scrie $A\left(x\right)+A\left(3x\right)=A\left(4x\right)$.** Parametrul nu se
adună așa: termenii constanți ($2$ pe diagonală) s-ar dubla, iar $A\left(4x\right)$ îi
are o singură dată. Verifică pe un element: $\left(2-3x\right)+\left(2-9x\right)=4-12x$,
nu $2-12x$.

</div>

<div class="greseala">

**Se împarte la $x$ în $4x=x^{2}$.** Pierzi soluția $x=0$. Dai factor comun.

</div>

<div class="greseala">

**Se uită factorul $2$ din formula de la b).** $A\left(2x\right)\cdot A\left(2x\right)=2A\left(4x\right)$,
nu $A\left(4x\right)$. Fără el, membrul stâng devine $2A\left(4x\right)$ și ecuația nu
mai are soluții, pentru că $2A\left(4x\right)$ are $4$ pe poziția din mijloc, iar
$4A\left(x^{2}\right)$ are $8$.

</div>
