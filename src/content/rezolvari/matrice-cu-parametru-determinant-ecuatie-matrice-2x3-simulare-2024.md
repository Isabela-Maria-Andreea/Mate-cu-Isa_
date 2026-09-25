---
titlu: "Matricea A(x): determinant negativ și o ecuație cu matrice 2 × 3"
titluSeo: "A(x) cu det(A(x)·A(x) − I₃) ≤ 0 și ecuația X·(A(0))⁻¹ = B·A(0) cu B de tip 2 × 3, BAC 2024 Simulare M_mate-info, Subiectul II.1"
descriere: "Sarrus pe o matrice cu multe zerouri, un determinant care iese −x²(2 + x²) și o ecuație matriceală în care inversa nu se calculează deloc: se înmulțește la dreapta cu A(0). Subiectul II.1, simularea BAC 2024."
capitol: "Matrice"
sursa: "BAC 2024, Simulare clasa a XII-a — Subiectul II.1"
varianta: "bac-2024-sm-v1"
subiect: "II"
pozitie: 1
subpuncte:
  - "Determinantul lui A(0)"
  - "det(A(x)·A(x) − I₃) ≤ 0"
  - "Ecuația X·(A(0))⁻¹ = B·A(0)"
punctaj: 15
dificultate: 3
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

**La a)** e Sarrus pe $A\left(0\right)$. Din cei șase termeni, unul singur e
nenul.

**La b)** „$\le 0$ pentru orice $x$" îți spune ce formă trebuie să aibă
rezultatul: minus ceva care e sigur pozitiv, de obicei un pătrat înmulțit cu o
expresie pozitivă. Calculezi pătratul matricei, scazi $I_3$ și cauți
factorul comun $x^{2}$ în determinant.

**La c)** necunoscuta $X$ e înmulțită **la dreapta** cu
$\left(A\left(0\right)\right)^{-1}$. Ca să o eliberezi, înmulțești ambii membri
la dreapta cu $A\left(0\right)$. Inversa nu trebuie calculată: dispare, pentru că
$\left(A\left(0\right)\right)^{-1}\cdot A\left(0\right)=I_3$. Iar
$A\left(0\right)\cdot A\left(0\right)$ l-ai calculat deja la b), pentru $x=0$.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Determinantul lui A(0)

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii matricea pentru $x=0$** <span class="punct">2p</span>

$$
A\left(0\right)=\begin{pmatrix}1 & -1 & 0\\ -1 & 0 & 0\\ 0 & 0 & -1\end{pmatrix}\ \Rightarrow\ \det\left(A\left(0\right)\right)=\begin{vmatrix}1 & -1 & 0\\ -1 & 0 & 0\\ 0 & 0 & -1\end{vmatrix}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Aplici regula lui Sarrus** <span class="punct">3p</span>

Termenii cu plus: $1\cdot 0\cdot\left(-1\right)$, $\left(-1\right)\cdot 0\cdot 0$,
$0\cdot\left(-1\right)\cdot 0$, toți zero. Termenii cu minus:
$0\cdot 0\cdot 0$, $1\cdot 0\cdot 0$ și
$\left(-1\right)\cdot\left(-1\right)\cdot\left(-1\right)=-1$:

$$
\det\left(A\left(0\right)\right)=0+0+0-0-0-\left(-1\right)=1
$$

<p class="rezultat">det(A(0)) = 1</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## det(A(x)·A(x) − I₃) ≤ 0

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Calculezi $A\left(x\right)\cdot A\left(x\right)$ și scazi $I_3$** <span class="punct">3p</span>

Liniile lui $A\left(x\right)$ sunt $\left(1,-1,x\right)$, $\left(-1,0,0\right)$,
$\left(x,0,-1\right)$. Matricea e simetrică, deci coloanele sunt aceleași
triplete. Câteva produse, ca model:

$$
\begin{aligned}
&\text{poziția }(1,1):\ 1\cdot 1+\left(-1\right)\cdot\left(-1\right)+x\cdot x=2+x^{2}\\
&\text{poziția }(1,3):\ 1\cdot x+\left(-1\right)\cdot 0+x\cdot\left(-1\right)=0\\
&\text{poziția }(3,3):\ x\cdot x+0\cdot 0+\left(-1\right)\cdot\left(-1\right)=x^{2}+1
\end{aligned}
$$

La $(1,3)$ se reduce $x$ cu $-x$. Toată matricea:

$$
A\left(x\right)\cdot A\left(x\right)=\begin{pmatrix}2+x^{2} & -1 & 0\\ -1 & 1 & -x\\ 0 & -x & x^{2}+1\end{pmatrix}
$$

Scăzând $I_3$, fiecare element de pe diagonală scade cu $1$:

$$
A\left(x\right)\cdot A\left(x\right)-I_3=\begin{pmatrix}1+x^{2} & -1 & 0\\ -1 & 0 & -x\\ 0 & -x & x^{2}\end{pmatrix}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Calculezi determinantul și îi studiezi semnul** <span class="punct">2p</span>

Cu Sarrus, cei trei termeni cu plus conțin fiecare un $0$. Rămân doi termeni
cu minus: $\left(1+x^{2}\right)\cdot\left(-x\right)\cdot\left(-x\right)=x^{2}\left(1+x^{2}\right)$
și $\left(-1\right)\cdot\left(-1\right)\cdot x^{2}=x^{2}$:

$$
\det\left(A\left(x\right)\cdot A\left(x\right)-I_3\right)=-x^{2}\left(1+x^{2}\right)-x^{2}=-x^{2}\left(1+x^{2}+1\right)=-x^{2}\left(2+x^{2}\right)
$$

$x^{2}\ge 0$ și $2+x^{2}>0$, deci produsul lor e $\ge 0$, iar cu minus în față
e $\le 0$.

<p class="rezultat">det(A(x)·A(x) − I₃) = −x²(2 + x²) ≤ 0, pentru orice x real</p>

</div>
</div>

<span class="atentie">**$(-x)\cdot(-x)=+x^{2}$.** Termenul cu minus din Sarrus e $-\left(1+x^{2}\right)\cdot x^{2}$. Dacă greșești semnul produsului $(-x)(-x)$, obții $+x^{2}\left(1+x^{2}\right)-x^{2}=x^{4}$, care nu e $\le 0$.</span>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Ecuația X·(A(0))⁻¹ = B·A(0)

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Izolezi $X$** <span class="punct">2p</span>

$\det\left(A\left(0\right)\right)=1\ne 0$ (de la a)), deci inversa există.
Înmulțești ambii membri la dreapta cu $A\left(0\right)$:

$$
X\cdot\left(A\left(0\right)\right)^{-1}\cdot A\left(0\right)=B\cdot A\left(0\right)\cdot A\left(0\right)
$$

În stânga, $\left(A\left(0\right)\right)^{-1}\cdot A\left(0\right)=I_3$ și
$X\cdot I_3=X$:

$$
X=B\cdot A\left(0\right)\cdot A\left(0\right)
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Calculezi produsul** <span class="punct">3p</span>

$A\left(0\right)\cdot A\left(0\right)$ e matricea de la b) pentru $x=0$:

$$
A\left(0\right)\cdot A\left(0\right)=\begin{pmatrix}2 & -1 & 0\\ -1 & 1 & 0\\ 0 & 0 & 1\end{pmatrix}
$$

Prima linie a lui $B$ e $\left(1,0,1\right)$: aduni prima și a treia linie a
matricei de mai sus, $\left(2,-1,0\right)+\left(0,0,1\right)=\left(2,-1,1\right)$.
A doua linie a lui $B$ e $\left(0,1,0\right)$: alege a doua linie,
$\left(-1,1,0\right)$.

$$
X=\begin{pmatrix}2 & -1 & 1\\ -1 & 1 & 0\end{pmatrix}
$$

<p class="rezultat">X are liniile (2, −1, 1) și (−1, 1, 0)</p>

</div>
</div>

<span class="atentie">**Partea pe care înmulțești.** $X$ e de tip $2\times 3$, iar $A\left(0\right)$ de tip $3\times 3$. Produsul $A\left(0\right)\cdot X$ nici nu există (3 coloane în stânga, 2 linii în dreapta). Dimensiunile îți confirmă că înmulțirea se face la dreapta.</span>

<div class="alternativa">

**Cu inversa calculată.** Poți afla $\left(A\left(0\right)\right)^{-1}$ explicit și
să scrii $X=B\cdot A\left(0\right)\cdot A\left(0\right)$ oricum, dar calculul
inversei nu servește la nimic: ea dispare când înmulțești. Varianta din barem
evită complet adjuncta.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $A\left(0\right)=\begin{pmatrix}1 & -1 & 0\\ -1 & 0 & 0\\ 0 & 0 & -1\end{pmatrix}\Rightarrow\det\left(A\left(0\right)\right)=0+0+0-0-0-\left(-1\right)=1$

**b)** $A\left(x\right)\cdot A\left(x\right)=\begin{pmatrix}2+x^{2} & -1 & 0\\ -1 & 1 & -x\\ 0 & -x & x^{2}+1\end{pmatrix}$,
$A\left(x\right)\cdot A\left(x\right)-I_3=\begin{pmatrix}1+x^{2} & -1 & 0\\ -1 & 0 & -x\\ 0 & -x & x^{2}\end{pmatrix}$

$\det\left(A\left(x\right)\cdot A\left(x\right)-I_3\right)=-x^{2}\left(1+x^{2}\right)-x^{2}=-x^{2}\left(2+x^{2}\right)\le 0$,
pentru orice număr real $x$.

**c)** $X=B\cdot A\left(0\right)\cdot A\left(0\right)$, deci
$X=\begin{pmatrix}2 & -1 & 1\\ -1 & 1 & 0\end{pmatrix}$.

</div>

## Unde se pierd puncte

<div class="greseala">

**La b), se scade $I_3$ din fiecare element.** $I_3$ are $1$ doar pe diagonală,
deci doar diagonala scade cu $1$. Elementele $-1$ și $-x$ din afara diagonalei
rămân la fel.

</div>

<div class="greseala">

**La c), se scrie $X=A\left(0\right)\cdot A\left(0\right)\cdot B$.** Ordinea din
produs se păstrează: $B$ era în stânga lui $A\left(0\right)$ și rămâne în
stânga. Și aici dimensiunile te opresc: $3\times 3$ înmulțit cu $2\times 3$ nu
se poate face.

</div>
