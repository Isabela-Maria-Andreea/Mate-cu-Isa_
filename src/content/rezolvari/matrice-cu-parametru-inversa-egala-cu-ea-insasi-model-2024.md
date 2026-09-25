---
titlu: "Matricea A(a): determinant, produs și ecuația A(1)·X·A(0) = I₃"
titluSeo: "A(a) cu A(a)·A(b) = A(a) − A(b) + I₃ — determinant, inversa egală cu matricea însăși și ecuația A(1)·X·A(0) = I₃, BAC 2024 Model M_mate-info, Subiectul II.1"
descriere: "Cum calculezi produsul A(a)·A(b) linie cu coloană și de ce din el iese că fiecare A(a) e propria inversă, ceea ce rezolvă ecuația matriceală de la c) fără calcul de inversă. Subiectul II.1, modelul BAC 2024."
capitol: "Matrice"
sursa: "BAC 2024, Model — Subiectul II.1"
varianta: "bac-2024-model"
subiect: "II"
pozitie: 1
subpuncte:
  - "Determinantul lui A(1)"
  - "Relația A(a)·A(b) = A(a) − A(b) + I₃"
  - "Ecuația A(1)·X·A(0) = I₃"
punctaj: 15
dificultate: 3
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

**La a) e doar Sarrus** pe o matrice cu multe zerouri. Din cei șase termeni,
cinci conțin un zero.

**La b) calculezi un produs și îl rescrii.** Ținta, $A\left(a\right)-A\left(b\right)+I_3$,
îți spune ce să cauți în rezultat: după ce scazi $I_3$, trebuie să rămână o
matrice cu $a-b$ exact pe pozițiile unde $A\left(a\right)$ și $A\left(b\right)$
diferă.

**La c) nu calculezi nicio inversă de la zero.** Relația de la b) pentru $b=a$
dă $A\left(a\right)\cdot A\left(a\right)=I_3$, deci fiecare $A\left(a\right)$ e
propria ei inversă. Asta e legătura dintre b) și c), și e motivul pentru care
b) e acolo.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Determinantul lui A(1)

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii matricea pentru $a=1$** <span class="punct">2p</span>

Înlocuiești $a=1$ pe pozițiile $\left(2,1\right)$ și $\left(2,3\right)$:

$$
A\left(1\right)=\begin{pmatrix}0 & 0 & 1\\ 1 & -1 & 1\\ 1 & 0 & 0\end{pmatrix}\ \Rightarrow\ \det\left(A\left(1\right)\right)=\begin{vmatrix}0 & 0 & 1\\ 1 & -1 & 1\\ 1 & 0 & 0\end{vmatrix}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Aplici regula lui Sarrus** <span class="punct">3p</span>

Cei trei termeni cu plus sunt $0\cdot\left(-1\right)\cdot 0$,
$0\cdot 1\cdot 1$ și $1\cdot 1\cdot 0$, toți zero. Cei trei cu minus sunt
$1\cdot\left(-1\right)\cdot 1=-1$, $0\cdot 1\cdot 0=0$ și $0\cdot 1\cdot 0=0$:

$$
\det\left(A\left(1\right)\right)=0+0+0-\left(-1\right)-0-0=1
$$

<p class="rezultat">det(A(1)) = 1</p>

</div>
</div>

<span class="atentie">**Semnul la termenul cu minus.** Termenul e $-\left(1\cdot\left(-1\right)\cdot 1\right)=-\left(-1\right)=+1$. Dacă scrii direct $-1$, ajungi la $\det=-1$.</span>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Relația A(a)·A(b) = A(a) − A(b) + I₃

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Calculezi produsul** <span class="punct">3p</span>

Liniile lui $A\left(a\right)$ sunt $\left(0,0,1\right)$, $\left(a,-1,a\right)$,
$\left(1,0,0\right)$. Coloanele lui $A\left(b\right)$ sunt
$\left(0,b,1\right)$, $\left(0,-1,0\right)$, $\left(1,b,0\right)$.

Prima linie, $\left(0,0,1\right)$, alege al treilea element din fiecare coloană:
$\left(1,0,0\right)$. A treia linie, $\left(1,0,0\right)$, alege primul element:
$\left(0,0,1\right)$.

Linia din mijloc, cu fiecare coloană:

$$
\begin{aligned}
&a\cdot 0+\left(-1\right)\cdot b+a\cdot 1=a-b\\
&a\cdot 0+\left(-1\right)\cdot\left(-1\right)+a\cdot 0=1\\
&a\cdot 1+\left(-1\right)\cdot b+a\cdot 0=a-b
\end{aligned}
$$

Deci:

$$
A\left(a\right)\cdot A\left(b\right)=\begin{pmatrix}1 & 0 & 0\\ a-b & 1 & a-b\\ 0 & 0 & 1\end{pmatrix}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Despari în $\left(A\left(a\right)-A\left(b\right)\right)+I_3$** <span class="punct">2p</span>

Scazi elementele lui $A\left(b\right)$ din cele ale lui $A\left(a\right)$. Tot ce
nu depinde de parametru se reduce ($0-0$, $1-1$, $-1-\left(-1\right)$), rămân
doar pozițiile cu $a$ și $b$:

$$
A\left(a\right)-A\left(b\right)=\begin{pmatrix}0 & 0 & 0\\ a-b & 0 & a-b\\ 0 & 0 & 0\end{pmatrix}
$$

Adunând $I_3$ se obține exact produsul de la pasul 1:

$$
\begin{pmatrix}0 & 0 & 0\\ a-b & 0 & a-b\\ 0 & 0 & 0\end{pmatrix}+\begin{pmatrix}1 & 0 & 0\\ 0 & 1 & 0\\ 0 & 0 & 1\end{pmatrix}=\begin{pmatrix}1 & 0 & 0\\ a-b & 1 & a-b\\ 0 & 0 & 1\end{pmatrix}
$$

<p class="rezultat">A(a)·A(b) = A(a) − A(b) + I₃, pentru orice a, b reale</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Ecuația A(1)·X·A(0) = I₃

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Inversele, din b)** <span class="punct">2p</span>

În relația de la b) pui $b=a$. Atunci $A\left(a\right)-A\left(a\right)$ e matricea
nulă și rămâne:

$$
A\left(a\right)\cdot A\left(a\right)=I_3
$$

Deci $A\left(a\right)$ e inversabilă și $\left(A\left(a\right)\right)^{-1}=A\left(a\right)$.
În particular:

$$
\left(A\left(1\right)\right)^{-1}=A\left(1\right),\qquad \left(A\left(0\right)\right)^{-1}=A\left(0\right)
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Izolezi $X$ și calculezi** <span class="punct">3p</span>

Înmulțești ecuația la stânga cu $\left(A\left(1\right)\right)^{-1}$ și la dreapta
cu $\left(A\left(0\right)\right)^{-1}$:

$$
X=\left(A\left(1\right)\right)^{-1}\cdot\left(A\left(0\right)\right)^{-1}=A\left(1\right)\cdot A\left(0\right)
$$

Produsul îl dă tot b), cu $a=1$ și $b=0$, deci $a-b=1$:

$$
X=A\left(1\right)-A\left(0\right)+I_3=\begin{pmatrix}0 & 0 & 0\\ 1 & 0 & 1\\ 0 & 0 & 0\end{pmatrix}+I_3
$$

$$
X=\begin{pmatrix}1 & 0 & 0\\ 1 & 1 & 1\\ 0 & 0 & 1\end{pmatrix}
$$

<p class="rezultat">X are liniile (1, 0, 0), (1, 1, 1), (0, 0, 1)</p>

</div>
</div>

<span class="atentie">**Ordinea contează.** $A\left(1\right)$ stă la stânga lui $X$, deci inversa ei se înmulțește la stânga; $A\left(0\right)$ stă la dreapta, deci inversa ei la dreapta. Rezultatul e $\left(A\left(1\right)\right)^{-1}\cdot\left(A\left(0\right)\right)^{-1}$, nu în altă ordine. În ordinea inversă, $A\left(0\right)\cdot A\left(1\right)$, formula de la b) ar avea $a-b=-1$ și ai obține altă matrice.</span>

<div class="alternativa">

**Fără b), cu inversa calculată.** Poți afla $\left(A\left(1\right)\right)^{-1}$ cu
determinantul de la a) și matricea adjunctă, apoi la fel pentru $A\left(0\right)$.
E corect și primește punctajul, dar sunt două inverse de $3\times 3$ în loc de
o observație de un rând.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $A\left(1\right)=\begin{pmatrix}0 & 0 & 1\\ 1 & -1 & 1\\ 1 & 0 & 0\end{pmatrix}\Rightarrow\det\left(A\left(1\right)\right)=0+0+0-\left(-1\right)-0-0=1$

**b)** $A\left(a\right)\cdot A\left(b\right)=\begin{pmatrix}1 & 0 & 0\\ a-b & 1 & a-b\\ 0 & 0 & 1\end{pmatrix}=\begin{pmatrix}0 & 0 & 0\\ a-b & 0 & a-b\\ 0 & 0 & 0\end{pmatrix}+I_3=A\left(a\right)-A\left(b\right)+I_3$,
pentru orice numere reale $a$ și $b$.

**c)** Din b), $A\left(a\right)\cdot A\left(a\right)=I_3$, deci
$\left(A\left(1\right)\right)^{-1}=A\left(1\right)$, $\left(A\left(0\right)\right)^{-1}=A\left(0\right)$.

$X=\left(A\left(1\right)\right)^{-1}\cdot\left(A\left(0\right)\right)^{-1}=A\left(1\right)\cdot A\left(0\right)$,
de unde $X=\begin{pmatrix}1 & 0 & 0\\ 1 & 1 & 1\\ 0 & 0 & 1\end{pmatrix}$.

</div>

## Unde se pierd puncte

<div class="greseala">

**La b), se înmulțesc matricele element cu element.** Produsul de matrice e
linie cu coloană. Înmulțirea pe poziții dă o matrice cu liniile $\left(0,0,1\right)$,
$\left(ab,1,ab\right)$, $\left(1,0,0\right)$, care nu seamănă cu nimic din
enunț.

</div>

<div class="greseala">

**La c), se scrie $X=\dfrac{I_3}{A\left(1\right)\cdot A\left(0\right)}$.** Nu
există împărțire de matrice. Se înmulțește cu inversa, pe partea potrivită.

</div>

<div class="greseala">

**La c), se afirmă $\left(A\left(1\right)\right)^{-1}=A\left(1\right)$ fără
justificare.** Cele 2 puncte ale primului pas sunt pentru motiv: fie relația de
la b) cu $b=a$, fie calculul explicit al lui $A\left(1\right)\cdot A\left(1\right)$.

</div>
