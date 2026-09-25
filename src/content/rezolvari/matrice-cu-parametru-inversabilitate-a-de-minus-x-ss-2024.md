---
titlu: "Matricea A(x): ecuația A(x)·A(1) = 2A(x) și inversabilitatea lui A(−x)"
titluSeo: "A(x) cu det(A(x)) = (x − 1)²(x + 1) — det(A(2)) = 3, ecuația A(x)·A(1) = 2A(x) și de ce A(x) inversabilă implică A(−x) inversabilă, BAC 2024 Sesiunea specială M_mate-info, Subiectul II.1"
descriere: "Un produs cu o matrice cu linii repetate, o egalitate de matrice citită pe elemente și un determinant factorizat, din care se vede că mulțimea {−1, 1} e simetrică față de 0. Subiectul II.1, BAC 2024, Sesiunea specială, Varianta 9."
capitol: "Matrice"
sursa: "BAC 2024, Sesiunea specială, Varianta 9 — Subiectul II.1"
varianta: "bac-2024-ss-v9"
subiect: "II"
pozitie: 1
subpuncte:
  - "Determinantul lui A(2)"
  - "Ecuația A(x)·A(1) = 2A(x)"
  - "A(x) inversabilă implică A(−x) inversabilă"
punctaj: 15
dificultate: 3
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

**La b)**, $A\left(1\right)$ are prima și a treia linie egale cu
$\left(1,1,1\right)$ și a doua nulă. Înmulțind orice linie cu matricea asta,
toate cele trei elemente ale rezultatului ies egale. Deci
$A\left(x\right)\cdot A\left(1\right)$ are fiecare linie constantă, și calculul
e scurt.

O egalitate de matrice înseamnă nouă egalități de numere. Nu trebuie
rezolvate toate: dintr-una afli $x$, iar pe celelalte le verifici.

**La c)**, „inversabilă" înseamnă determinant nenul. Calculezi
$\det\left(A\left(x\right)\right)$ ca funcție de $x$ și îl factorizezi. Se
anulează în $x=1$ și $x=-1$. Mulțimea $\left\{-1,1\right\}$ e simetrică: dacă $x$
nu e în ea, nici $-x$ nu e.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Determinantul lui A(2)

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii matricea pentru $x=2$** <span class="punct">2p</span>

$x-1=1$ pe poziția $\left(2,3\right)$:

$$
A\left(2\right)=\begin{pmatrix}1 & 2 & 2\\ 0 & 0 & 1\\ 2 & 1 & 1\end{pmatrix}\ \Rightarrow\ \det\left(A\left(2\right)\right)=\begin{vmatrix}1 & 2 & 2\\ 0 & 0 & 1\\ 2 & 1 & 1\end{vmatrix}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Sarrus** <span class="punct">3p</span>

Cu plus: $1\cdot 0\cdot 1=0$, $2\cdot 1\cdot 2=4$, $2\cdot 0\cdot 1=0$. Cu
minus: $2\cdot 0\cdot 2=0$, $1\cdot 1\cdot 1=1$, $2\cdot 0\cdot 1=0$.

$$
\det\left(A\left(2\right)\right)=0+4+0-0-1-0=3
$$

<p class="rezultat">det(A(2)) = 3</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Ecuația A(x)·A(1) = 2A(x)

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Calculezi produsul** <span class="punct">3p</span>

Pentru $x=1$, $x-1=0$:

$$
A\left(1\right)=\begin{pmatrix}1 & 1 & 1\\ 0 & 0 & 0\\ 1 & 1 & 1\end{pmatrix}
$$

Fiecare coloană a lui $A\left(1\right)$ e $\left(1,0,1\right)$. Deci o linie
$\left(p,q,r\right)$ înmulțită cu oricare coloană dă $p\cdot 1+q\cdot 0+r\cdot 1=p+r$:
suma primului și ultimului element. Pentru liniile lui $A\left(x\right)$:
$1+x$, $0+\left(x-1\right)=x-1$, $x+1$:

$$
A\left(x\right)\cdot A\left(1\right)=\begin{pmatrix}1+x & 1+x & 1+x\\ x-1 & x-1 & x-1\\ x+1 & x+1 & x+1\end{pmatrix}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Egalezi cu $2A\left(x\right)$** <span class="punct">2p</span>

$$
\begin{pmatrix}1+x & 1+x & 1+x\\ x-1 & x-1 & x-1\\ x+1 & x+1 & x+1\end{pmatrix}=\begin{pmatrix}2 & 2x & 2x\\ 0 & 0 & 2x-2\\ 2x & 2 & 2\end{pmatrix}
$$

Poziția $\left(1,1\right)$: $1+x=2$, deci $x=1$. Verifici că $x=1$ satisface
toate celelalte egalități: $1+x=2=2x$, $x-1=0=2x-2$, $x+1=2=2x$. Toate au loc.

<p class="rezultat">x = 1</p>

</div>
</div>

<span class="atentie">**O singură egalitate nu ajunge.** Din $(1,1)$ afli candidatul, dar o egalitate de matrice cere toate cele nouă poziții. Dacă una ar fi picat, ecuația n-ar fi avut soluție.</span>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## A(x) inversabilă implică A(−x) inversabilă

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Determinantul general și când e nenul** <span class="punct">3p</span>

Sarrus pe $A\left(x\right)=\begin{pmatrix}1 & x & x\\ 0 & 0 & x-1\\ x & 1 & 1\end{pmatrix}$.
Cu plus: $1\cdot 0\cdot 1=0$, $x\left(x-1\right)x=x^{2}\left(x-1\right)$,
$x\cdot 0\cdot 1=0$. Cu minus: $x\cdot 0\cdot x=0$,
$1\cdot\left(x-1\right)\cdot 1=x-1$, $x\cdot 0\cdot 1=0$:

$$
\det\left(A\left(x\right)\right)=x^{2}\left(x-1\right)-\left(x-1\right)=\left(x-1\right)\left(x^{2}-1\right)
$$

Scoți factor comun $x-1$, iar $x^{2}-1=\left(x-1\right)\left(x+1\right)$:

$$
\det\left(A\left(x\right)\right)=\left(x-1\right)^{2}\left(x+1\right)
$$

$A\left(x\right)$ inversabilă înseamnă $\det\left(A\left(x\right)\right)\ne 0$,
adică $x\ne 1$ și $x\ne -1$: $x\in\mathbb{R}\setminus\left\{-1,1\right\}$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Treci la $-x$** <span class="punct">2p</span>

Dacă $x\ne 1$ și $x\ne -1$, atunci $-x\ne -1$ și $-x\ne 1$, deci
$-x\in\mathbb{R}\setminus\left\{-1,1\right\}$. Din formula de la pasul 1,
$\det\left(A\left(-x\right)\right)\ne 0$.

<p class="rezultat">A(−x) este inversabilă</p>

</div>
</div>

<div class="alternativa">

**Direct cu formula.** $\det\left(A\left(-x\right)\right)=\left(-x-1\right)^{2}\left(-x+1\right)=\left(x+1\right)^{2}\left(1-x\right)$.
Din $x\ne\pm 1$, fiecare factor e nenul. Același argument, scris cu determinantul
lui $A\left(-x\right)$ în loc de mulțimea valorilor interzise.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $A\left(2\right)=\begin{pmatrix}1 & 2 & 2\\ 0 & 0 & 1\\ 2 & 1 & 1\end{pmatrix}\Rightarrow\det\left(A\left(2\right)\right)=0+0+4-0-1-0=3$

**b)** $A\left(1\right)=\begin{pmatrix}1 & 1 & 1\\ 0 & 0 & 0\\ 1 & 1 & 1\end{pmatrix}$,
$A\left(x\right)\cdot A\left(1\right)=\begin{pmatrix}1+x & 1+x & 1+x\\ x-1 & x-1 & x-1\\ x+1 & x+1 & x+1\end{pmatrix}$,
pentru orice număr real $x$.

$\begin{pmatrix}1+x & 1+x & 1+x\\ x-1 & x-1 & x-1\\ x+1 & x+1 & x+1\end{pmatrix}=\begin{pmatrix}2 & 2x & 2x\\ 0 & 0 & 2x-2\\ 2x & 2 & 2\end{pmatrix}$,
de unde obținem $x=1$.

**c)** $\det\left(A\left(x\right)\right)=\left(x-1\right)^{2}\left(x+1\right)$ și
$\det\left(A\left(x\right)\right)\ne 0$, deci $x\in\mathbb{R}\setminus\left\{-1,1\right\}$.

Cum $-x\in\mathbb{R}\setminus\left\{-1,1\right\}$, obținem
$\det\left(A\left(-x\right)\right)\ne 0$, deci $A\left(-x\right)$ este
inversabilă.

</div>

## Unde se pierd puncte

<div class="greseala">

**La c), se afirmă „determinantul e funcție pară".** Nu e:
$\det\left(A\left(-x\right)\right)=\left(x+1\right)^{2}\left(1-x\right)$, diferit de
$\left(x-1\right)^{2}\left(x+1\right)$. Simetrică e doar mulțimea zerourilor,
$\left\{-1,1\right\}$, și asta e tot ce trebuie.

</div>

<div class="greseala">

**La c), se lasă determinantul nefactorizat,** ca $x^{3}-x^{2}-x+1$. Din forma
asta nu se vede unde se anulează, iar argumentul cu $-x$ nu mai poate fi scris.

</div>
