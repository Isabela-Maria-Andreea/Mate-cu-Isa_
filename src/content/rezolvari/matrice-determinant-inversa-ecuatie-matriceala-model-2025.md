---
titlu: "Matrice: determinant, un produs și ecuația A·C(x) = B(x)"
titluSeo: "A·C(x) = B(x), C(x) = A⁻¹·B(x) și C(x) − C(y) = (y − x)A — rezolvare cu barem, BAC 2025 Model M_mate-info, Subiectul II.1"
descriere: "Determinantul lui A cu regula lui Sarrus, produsul B(x)·A fără greșeli de indice și cum scoți C(x) din ecuația matriceală. Subiectul II.1, modelul BAC 2025."
capitol: "Matrice"
sursa: "BAC 2025, Model — Subiectul II.1"
varianta: "bac-2025-model"
subiect: "II"
pozitie: 1
subpuncte:
  - "Determinantul lui A"
  - "A − B(x)·A = xI₃"
  - "C(x) − C(y) = (y − x)A"
punctaj: 15
dificultate: 3
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

Matricea $A$ are în fiecare linie și în fiecare coloană un singur element nenul,
$1$ sau $-1$. Asta face calculele scurte: la determinant rămâne un singur produs
nenul, iar la înmulțire fiecare element al rezultatului vine dintr-un singur termen.

**La c), $C\left(x\right)$ nu e dată, e definită printr-o ecuație.** Din
$A\cdot C\left(x\right)=B\left(x\right)$ o scoți înmulțind la stânga cu $A^{-1}$.
Inversa există pentru că $\det A=1\ne 0$, adică exact ce ai arătat la a). Subpunctul
a) nu e doar un punctaj ușor, e și ipoteza de care ai nevoie la c).

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Determinantul lui A

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii regula lui Sarrus** <span class="punct">3p</span>

Trei produse pe diagonala principală și paralelele ei, minus trei pe diagonala
secundară și paralelele ei:

$$
\det A=0\cdot 0\cdot 0+\left(-1\right)\cdot\left(-1\right)\cdot 1+0\cdot 0\cdot 0-1\cdot 0\cdot 0-0\cdot\left(-1\right)\cdot 0-0\cdot\left(-1\right)\cdot 0
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Calculezi** <span class="punct">2p</span>

Singurul produs nenul e $\left(-1\right)\cdot\left(-1\right)\cdot 1=1$:

$$
\det A=0+1+0-0-0-0=1
$$

<p class="rezultat">det A = 1</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## A − B(x)·A = xI₃

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Calculezi $B\left(x\right)\cdot A$ și diferența** <span class="punct">3p</span>

Linia întâi a lui $B\left(x\right)$, $\left(1,x,0\right)$, înmulțită cu coloanele lui
$A$: cu $\left(0,-1,0\right)$ dă $-x$, cu $\left(0,0,-1\right)$ dă $0$, cu
$\left(1,0,0\right)$ dă $1$. La fel pentru celelalte linii:

$$
B\left(x\right)\cdot A=\begin{pmatrix}-x & 0 & 1\\ -1 & -x & 0\\ 0 & -1 & -x\end{pmatrix}
$$

Scazi din $A$ element cu element. Pe pozițiile unde $A$ are $1$ sau $-1$, produsul
are același număr, deci se reduc; rămân doar elementele de pe diagonală:

$$
A-B\left(x\right)\cdot A=\begin{pmatrix}0-\left(-x\right) & 0-0 & 1-1\\ -1-\left(-1\right) & 0-\left(-x\right) & 0-0\\ 0-0 & -1-\left(-1\right) & 0-\left(-x\right)\end{pmatrix}=\begin{pmatrix}x & 0 & 0\\ 0 & x & 0\\ 0 & 0 & x\end{pmatrix}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Scoți factorul $x$** <span class="punct">2p</span>

$$
\begin{pmatrix}x & 0 & 0\\ 0 & x & 0\\ 0 & 0 & x\end{pmatrix}=x\begin{pmatrix}1 & 0 & 0\\ 0 & 1 & 0\\ 0 & 0 & 1\end{pmatrix}=xI_3
$$

<p class="rezultat">A − B(x)·A = xI₃, pentru orice x real</p>

</div>
</div>

<span class="atentie">**Ordinea contează.** Se cere $B\left(x\right)\cdot A$, nu $A\cdot B\left(x\right)$. Înmulțirea matricelor nu e comutativă, iar $A\cdot B\left(x\right)$ are alte elemente.</span>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## C(x) − C(y) = (y − x)A

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Afli $A^{-1}$ și pe $C\left(x\right)$** <span class="punct">3p</span>

Din a), $\det A=1\ne 0$, deci $A$ e inversabilă. Transpusa lui $A$ este
$\begin{pmatrix}0 & -1 & 0\\ 0 & 0 & -1\\ 1 & 0 & 0\end{pmatrix}$. Complementii
algebrici ai lui $A^{T}$ dau adjuncta, iar cum $\det A=1$, inversa e chiar adjuncta:

$$
A^{-1}=\begin{pmatrix}0 & -1 & 0\\ 0 & 0 & -1\\ 1 & 0 & 0\end{pmatrix}
$$

Verificare rapidă: $A\cdot A^{-1}=I_3$. (Aici inversa coincide cu transpusa, pentru
că liniile lui $A$ sunt perpendiculare două câte două și au lungime $1$.)

Înmulțind $A\cdot C\left(x\right)=B\left(x\right)$ la stânga cu $A^{-1}$:

$$
C\left(x\right)=A^{-1}\cdot B\left(x\right)=\begin{pmatrix}0 & -1 & -x\\ x & 0 & -1\\ 1 & x & 0\end{pmatrix}
$$

Fiecare linie a lui $A^{-1}$ are un singur element nenul, deci alege o linie din
$B\left(x\right)$: prima linie a lui $C\left(x\right)$ e minus linia a doua din
$B\left(x\right)$, a doua e minus linia a treia, a treia e chiar linia întâi.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Faci diferența** <span class="punct">2p</span>

Elementele care nu depind de $x$ se reduc:

$$
C\left(x\right)-C\left(y\right)=\begin{pmatrix}0 & 0 & -x+y\\ x-y & 0 & 0\\ 0 & x-y & 0\end{pmatrix}
=\left(y-x\right)\begin{pmatrix}0 & 0 & 1\\ -1 & 0 & 0\\ 0 & -1 & 0\end{pmatrix}=\left(y-x\right)A
$$

La factorul comun: $x-y=-\left(y-x\right)$, de aceea în pozițiile unde $A$ are $-1$
apare $x-y$.

<p class="rezultat">C(x) − C(y) = (y − x)A</p>

</div>
</div>

<div class="alternativa">

**Fără să calculezi $C\left(x\right)$.** Scazi cele două ecuații:
$A\left(C\left(x\right)-C\left(y\right)\right)=B\left(x\right)-B\left(y\right)$.
Diferența din dreapta are $x-y$ exact unde $B$ are $x$ și $-\left(x-y\right)$ unde
are $-x$, iar un calcul direct arată că asta e $\left(y-x\right)A^{2}$. Deci
$A\left(C\left(x\right)-C\left(y\right)\right)=A\cdot\left(y-x\right)A$ și, înmulțind
la stânga cu $A^{-1}$, $C\left(x\right)-C\left(y\right)=\left(y-x\right)A$. E mai
elegant, dar cere să observi $A^{2}$; calculul cu inversa e mai sigur în examen.

</div>

## Ce îți spune baremul

La c), trei puncte se dau pentru $A^{-1}$ și $C\left(x\right)$ împreună. Baremul nu
cere să arăți cum ai obținut inversa, dar dacă o scrii greșit pierzi tot rândul.
Verificarea $A\cdot A^{-1}=I_3$ pe ciornă durează un minut și merită.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $\det A=0\cdot 0\cdot 0+\left(-1\right)\cdot\left(-1\right)\cdot 1+0\cdot 0\cdot 0-1\cdot 0\cdot 0-0\cdot\left(-1\right)\cdot 0-0\cdot\left(-1\right)\cdot 0=1$

**b)** $B\left(x\right)\cdot A=\begin{pmatrix}-x & 0 & 1\\ -1 & -x & 0\\ 0 & -1 & -x\end{pmatrix}$,
$A-B\left(x\right)\cdot A=\begin{pmatrix}x & 0 & 0\\ 0 & x & 0\\ 0 & 0 & x\end{pmatrix}=xI_3$

**c)** $A^{-1}=\begin{pmatrix}0 & -1 & 0\\ 0 & 0 & -1\\ 1 & 0 & 0\end{pmatrix}$,
$C\left(x\right)=A^{-1}\cdot B\left(x\right)=\begin{pmatrix}0 & -1 & -x\\ x & 0 & -1\\ 1 & x & 0\end{pmatrix}$

$C\left(x\right)-C\left(y\right)=\begin{pmatrix}0 & 0 & -x+y\\ x-y & 0 & 0\\ 0 & x-y & 0\end{pmatrix}=\left(y-x\right)A$

</div>

## Unde se pierd puncte

<div class="greseala">

**Se scrie $C\left(x\right)=B\left(x\right)\cdot A^{-1}$.** Din $A\cdot C=B$, inversa
se pune la stânga: $C=A^{-1}B$. Cu ea la dreapta obții altă matrice, iar diferența de
la final nu mai iese $\left(y-x\right)A$.

</div>

<div class="greseala">

**Se greșește un semn la Sarrus.** Cu atâtea zerouri pare imposibil, dar tocmai
singurul produs nenul are doi factori negativi. Scrie toate cele șase produse.

</div>

<div class="greseala">

**Se scoate factorul $x-y$ în loc de $y-x$.** Rezultatul corect ar fi atunci
$\left(x-y\right)\cdot\left(-A\right)$, egal, dar trebuie dus până la forma din enunț.

</div>
