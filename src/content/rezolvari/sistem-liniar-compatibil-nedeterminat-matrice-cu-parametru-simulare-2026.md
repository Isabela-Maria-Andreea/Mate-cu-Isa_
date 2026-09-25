---
titlu: "Matrice cu parametru și sistem compatibil nedeterminat"
titluSeo: "A(a) și sistemul ax + y + z = 2a — determinant, inversabilitate, soluții pentru a = 2 cu x₀y₀ = y₁, rezolvare cu barem, Simulare BAC 2026 M_mate-info, Subiectul II.1"
descriere: "Determinantul lui A(a) prin regula lui Sarrus, mulțimea valorilor pentru care matricea e inversabilă și cum scrii soluțiile unui sistem compatibil nedeterminat cu un parametru. Subiectul II.1, Simularea BAC 2026."
capitol: "Sisteme de ecuații liniare"
sursa: "BAC 2026, Simulare clasa a XII-a — Subiectul II.1"
varianta: "bac-2026-sm-v1"
subiect: "II"
pozitie: 1
subpuncte:
  - "Determinantul lui A(1)"
  - "Când e A(a) inversabilă"
  - "Soluțiile pentru a = 2 cu x₀y₀ = y₁"
punctaj: 15
dificultate: 3
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

$A\left(a\right)$ este **matricea sistemului**: pe fiecare linie stau coeficienții
lui $x$, $y$, $z$ din ecuația corespunzătoare. Tot ce afli despre determinant la
a) și b) se folosește la c).

**La b), inversabil înseamnă determinant nenul.** Calculezi
$\det\left(A\left(a\right)\right)$ ca polinom în $a$, îi găsești rădăcinile și le
scoți din $\mathbb{R}$.

**La c) sunt două sisteme diferite.** Pentru $a=1$, determinantul e $4\ne 0$
(de la a)), deci sistemul are soluție unică $\left(x_{1},y_{1},z_{1}\right)$.
Enunțul folosește doar $y_{1}$. Pentru $a=2$, determinantul e $0$ (de la b)),
deci sistemul are fie nicio soluție, fie o infinitate. Formularea „determinați
soluțiile" îți spune că sunt infinit de multe și că le scrii cu un parametru.
Condiția $x_{0}y_{0}=y_{1}$ alege dintre ele.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Determinantul lui $A\left(1\right)$

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii matricea pentru $a=1$** <span class="punct">2p</span>

Înlocuiești $a=1$ în poziția $\left(1,1\right)$ și în poziția $\left(2,3\right)$:

$$
A\left(1\right)=\begin{pmatrix}1 & 1 & 1\\ 1 & -1 & 1\\ 3 & 2 & 1\end{pmatrix}
\Rightarrow
\det\left(A\left(1\right)\right)=\begin{vmatrix}1 & 1 & 1\\ 1 & -1 & 1\\ 3 & 2 & 1\end{vmatrix}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Aplici regula lui Sarrus** <span class="punct">3p</span>

Produsele pe diagonala principală și pe paralelele ei, cu $+$:
$1\cdot\left(-1\right)\cdot 1=-1$, $1\cdot 1\cdot 3=3$, $1\cdot 1\cdot 2=2$.

Produsele pe diagonala secundară și pe paralelele ei, cu $-$:
$1\cdot\left(-1\right)\cdot 3=-3$, $1\cdot 1\cdot 2=2$, $1\cdot 1\cdot 1=1$.

$$
\det\left(A\left(1\right)\right)=-1+3+2-\left(-3\right)-2-1=-1+2+3+3-2-1=4
$$

<span class="atentie">**Minus în fața unui produs negativ.** $-\left(-3\right)=+3$. E cel mai frecvent loc în care Sarrus dă alt rezultat.</span>

<p class="rezultat">det(A(1)) = 4</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Când e $A\left(a\right)$ inversabilă

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Calculezi determinantul ca funcție de $a$** <span class="punct">3p</span>

Aceiași pași ca la a), cu $a$ în loc de $1$:

- cu $+$: $a\cdot\left(-1\right)\cdot 1=-a$, $\;1\cdot a\cdot 3=3a$, $\;1\cdot 1\cdot 2=2$;
- cu $-$: $1\cdot\left(-1\right)\cdot 3=-3$, $\;a\cdot a\cdot 2=2a^{2}$, $\;1\cdot 1\cdot 1=1$.

$$
\det\left(A\left(a\right)\right)=-a+3a+2-\left(-3+2a^{2}+1\right)=2a+2+2-2a^{2}=-2a^{2}+2a+4
$$

Verificare: pentru $a=1$ iese $-2+2+4=4$, ca la a).

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Scoți rădăcinile determinantului** <span class="punct">2p</span>

$$
-2a^{2}+2a+4=0 \;\Big|\cdot\left(-\tfrac{1}{2}\right) \Rightarrow a^{2}-a-2=0
$$

$\Delta=1+8=9$, deci $a=\dfrac{1\pm 3}{2}$, adică $a=-1$ sau $a=2$.
Echivalent, $a^{2}-a-2=\left(a+1\right)\left(a-2\right)$.

$A\left(a\right)$ e inversabilă exact când $\det\left(A\left(a\right)\right)\ne 0$.

<p class="rezultat">a ∈ ℝ \ {−1, 2}</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Soluțiile pentru $a=2$ cu $x_{0}y_{0}=y_{1}$

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Rezolvi sistemul pentru $a=2$** <span class="punct">2p</span>

$$
\begin{cases}2x+y+z=4\\ x-y+2z=-4\\ 3x+2y+z=8\end{cases}
$$

Aduni primele două ecuații: $y$ se reduce cu $-y$ și rămâne
$3x+3z=0$, deci $z=-x$.

Înlocuiești în prima: $2x+y-x=4$, deci $y=4-x$.

Verifici a treia: $3x+2\left(4-x\right)+\left(-x\right)=3x+8-2x-x=8$. Adevărat
pentru orice $x$, deci a treia ecuație nu mai adaugă nicio condiție: sistemul e
compatibil nedeterminat. Cu $x=\alpha$:

$$
\left(x_{0},y_{0},z_{0}\right)=\left(\alpha,\,4-\alpha,\,-\alpha\right),\quad \alpha\in\mathbb{R}
$$

<span class="atentie">**Verificarea celei de-a treia ecuații nu e opțională.** Determinantul nul permite și un sistem incompatibil. Abia după ce a treia ecuație iese identitate știi că soluțiile există.</span>

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Afli $y_{1}$ și pui condiția** <span class="punct">3p</span>

Pentru $a=1$: $x+y+z=2$ și $x-y+z=-4$. Scazi a doua ecuație din prima:
$x$ se reduce cu $x$, $z$ cu $z$, și rămâne $2y=6$, deci $y_{1}=3$.

Nu e nevoie de $x_{1}$ și $z_{1}$ (ar ieși $\dfrac{3}{2}$ și $-\dfrac{5}{2}$).

Condiția $x_{0}y_{0}=y_{1}$ devine

$$
\alpha\left(4-\alpha\right)=3 \Rightarrow 4\alpha-\alpha^{2}=3 \Rightarrow \alpha^{2}-4\alpha+3=0
$$

$\alpha^{2}-4\alpha+3=\left(\alpha-1\right)\left(\alpha-3\right)$, deci $\alpha=1$
sau $\alpha=3$.

<p class="rezultat">(1, 3, −1) și (3, 1, −3)</p>

</div>
</div>

<div class="alternativa">

**$y_{1}$ cu regula lui Cramer.** $\det\left(A\left(1\right)\right)=4$ de la a), iar
$\Delta_{y}$ se obține înlocuind coloana a doua cu termenii liberi
$\left(2,-4,8\right)$: $\Delta_{y}=12$, deci $y_{1}=\dfrac{12}{4}=3$. Corect și
punctat, dar mai lung decât scăderea a două ecuații.

</div>

## Ce îți spune baremul

La c), baremul dă 2p doar pentru forma generală a soluțiilor pentru $a=2$.
Chiar dacă nu ajungi la final, $\left(\alpha,4-\alpha,-\alpha\right)$ scris corect
e punctaj sigur.

Baremul oficial scrie „$\alpha\in\mathbb{C}$"; e o greșeală de tipar. Sistemul
se rezolvă în numere reale, deci tu scrii $\alpha\in\mathbb{R}$.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $\det\left(A\left(1\right)\right)=\begin{vmatrix}1 & 1 & 1\\ 1 & -1 & 1\\ 3 & 2 & 1\end{vmatrix}=-1+2+3+3-2-1=4$

**b)** $\det\left(A\left(a\right)\right)=-2a^{2}+2a+4$.
$\det\left(A\left(a\right)\right)=0\Leftrightarrow a=-1$ sau $a=2$, deci $A\left(a\right)$
e inversabilă pentru $a\in\mathbb{R}\setminus\left\{-1,2\right\}$.

**c)** Pentru $a=2$, soluțiile sistemului sunt $\left(\alpha,4-\alpha,-\alpha\right)$,
$\alpha\in\mathbb{R}$. Pentru $a=1$, $y_{1}=3$, deci $\alpha\left(4-\alpha\right)=3$,
de unde $\alpha=1$ sau $\alpha=3$. Soluțiile cerute sunt $\left(1,3,-1\right)$ și
$\left(3,1,-3\right)$.

</div>

## Unde se pierd puncte

<!-- SCHIȚĂ: greșelile de mai jos sunt propuse, nu verificate pe lucrări reale. De confirmat de Isa. -->

<div class="greseala">

**La b), se răspunde cu $\left\{-1,2\right\}$.** Acestea sunt valorile pentru
care matricea **nu** e inversabilă. Răspunsul e complementul lor.

</div>

<div class="greseala">

**La c), se aplică Cramer pentru $a=2$.** Determinantul e $0$, deci Cramer nu
se aplică. Împărțirea la zero se vede abia la final, după timp pierdut.

</div>

<div class="greseala">

**La c), se dă o singură soluție.** Ecuația $\alpha^{2}-4\alpha+3=0$ are două
rădăcini, deci sunt două tripleți. Unul singur înseamnă răspuns incomplet.

</div>
