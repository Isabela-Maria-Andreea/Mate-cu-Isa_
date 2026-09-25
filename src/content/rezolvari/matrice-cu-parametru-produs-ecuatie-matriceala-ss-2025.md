---
titlu: "Matrice cu parametru: o formulă de produs folosită de două ori"
titluSeo: "M(x)·M(y) − xyI₃ = (x + y + 1)M(0) și ecuația M(1)M(x) − M(2)M(x/2) = 2M(0) — rezolvare cu barem, BAC 2025 Sesiunea specială M_mate-info, Subiectul II.1"
descriere: "Cum calculezi produsul M(x)·M(y) fără greșeli și cum folosești formula de la b) ca să rezolvi c) fără nicio înmulțire de matrice. Subiectul II.1, BAC 2025, Sesiunea specială, Varianta 3."
capitol: "Matrice"
sursa: "BAC 2025, Sesiunea specială, Varianta 3 — Subiectul II.1"
varianta: "bac-2025-ss-v3"
subiect: "II"
pozitie: 1
subpuncte:
  - "Determinantul lui M(0)"
  - "Formula pentru M(x)·M(y)"
  - "Ecuația matriceală"
punctaj: 15
dificultate: 3
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

**La a)**, $M\left(0\right)$ are primele două coloane nule. Un determinant cu o coloană
de zerouri e $0$, fără alt calcul. Sarrus confirmă.

**La b)**, nu ai de ales: înmulțești matricele. Ajută să observi că a treia linie a
lui $M\left(x\right)$ are zerouri pe primele două poziții, deci multe produse dispar.

**La c), b) îți dă formula de care ai nevoie.** Rescrisă:

$$
M\left(x\right)\cdot M\left(y\right)=xyI_3+\left(x+y+1\right)M\left(0\right)
$$

Ambele produse din c) sunt de forma asta. Le înlocuiești, se reduce $xI_3$ și
rămâne o ecuație în $x$ înmulțită cu $M\left(0\right)$. Nu mai înmulțești nicio
matrice.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Determinantul lui M(0)

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii $M\left(0\right)$** <span class="punct">2p</span>

$$
M\left(0\right)=\begin{pmatrix}0 & 0 & -3\\ 0 & 0 & 1\\ 0 & 0 & 1\end{pmatrix}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Calculezi** <span class="punct">3p</span>

Fiecare dintre cele șase produse din regula lui Sarrus conține un element din prima
coloană, care e nulă:

$$
\det\left(M\left(0\right)\right)=0+0+0-0-0-0=0
$$

<p class="rezultat">det(M(0)) = 0</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Formula pentru M(x)·M(y)

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Calculezi produsul** <span class="punct">3p</span>

Linia întâi a lui $M\left(x\right)$, $\left(2x,3x,-3\right)$, cu coloanele lui
$M\left(y\right)$:

- cu $\left(2y,-y,0\right)$: $4xy-3xy+0=xy$;
- cu $\left(3y,-2y,0\right)$: $6xy-6xy+0=0$;
- cu $\left(-3,1,y+1\right)$: $-6x+3x-3\left(y+1\right)=-3x-3y-3$.

Linia a doua, $\left(-x,-2x,1\right)$:

- cu $\left(2y,-y,0\right)$: $-2xy+2xy=0$;
- cu $\left(3y,-2y,0\right)$: $-3xy+4xy=xy$;
- cu $\left(-3,1,y+1\right)$: $3x-2x+y+1=x+y+1$.

Linia a treia, $\left(0,0,x+1\right)$, dă doar
$\left(x+1\right)\left(y+1\right)=xy+x+y+1$ pe ultima poziție.

$$
M\left(x\right)\cdot M\left(y\right)-xyI_3=\begin{pmatrix}xy & 0 & -3x-3y-3\\ 0 & xy & x+y+1\\ 0 & 0 & xy+x+y+1\end{pmatrix}-\begin{pmatrix}xy & 0 & 0\\ 0 & xy & 0\\ 0 & 0 & xy\end{pmatrix}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Scoți factorul comun** <span class="punct">2p</span>

Se reduce $xy$ cu $-xy$ pe diagonală:

$$
\begin{pmatrix}0 & 0 & -3\left(x+y+1\right)\\ 0 & 0 & x+y+1\\ 0 & 0 & x+y+1\end{pmatrix}=\left(x+y+1\right)\begin{pmatrix}0 & 0 & -3\\ 0 & 0 & 1\\ 0 & 0 & 1\end{pmatrix}=\left(x+y+1\right)M\left(0\right)
$$

<p class="rezultat">M(x)·M(y) − xyI₃ = (x + y + 1)M(0)</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Ecuația matriceală

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Aplici formula de la b) de două ori** <span class="punct">3p</span>

Din b), $M\left(a\right)\cdot M\left(b\right)=abI_3+\left(a+b+1\right)M\left(0\right)$.

Cu $a=1$, $b=x$: $M\left(1\right)\cdot M\left(x\right)=xI_3+\left(x+2\right)M\left(0\right)$.

Cu $a=2$, $b=\dfrac{x}{2}$: $M\left(2\right)\cdot M\left(\dfrac{x}{2}\right)=xI_3+\left(\dfrac{x}{2}+3\right)M\left(0\right)$.

Scazi. Se reduce $xI_3$ cu $-xI_3$:

$$
M\left(1\right)\cdot M\left(x\right)-M\left(2\right)\cdot M\left(\frac{x}{2}\right)=\left(x+2-\frac{x}{2}-3\right)M\left(0\right)=\left(\frac{x}{2}-1\right)M\left(0\right)
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Identifici coeficienții** <span class="punct">2p</span>

$$
\left(\frac{x}{2}-1\right)M\left(0\right)=2M\left(0\right)
$$

$M\left(0\right)$ nu e matricea nulă (are elementul $-3$), deci coeficienții trebuie
să fie egali: $\dfrac{x}{2}-1=2$.

<p class="rezultat">x = 6</p>

</div>
</div>

<span class="atentie">**Nu „simplifica” prin $M\left(0\right)$.** Matricele nu se împart, iar $M\left(0\right)$ nici nu e inversabilă (determinantul e $0$, de la a)). Argumentul corect e comparația unui element nenul: $-3\left(\dfrac{x}{2}-1\right)=-6$.</span>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $M\left(0\right)=\begin{pmatrix}0 & 0 & -3\\ 0 & 0 & 1\\ 0 & 0 & 1\end{pmatrix}$,
$\det\left(M\left(0\right)\right)=0+0+0-0-0-0=0$

**b)** $M\left(x\right)\cdot M\left(y\right)-xyI_3=\begin{pmatrix}xy & 0 & -3x-3y-3\\ 0 & xy & x+y+1\\ 0 & 0 & xy+x+y+1\end{pmatrix}-\begin{pmatrix}xy & 0 & 0\\ 0 & xy & 0\\ 0 & 0 & xy\end{pmatrix}=\begin{pmatrix}0 & 0 & -3\left(x+y+1\right)\\ 0 & 0 & x+y+1\\ 0 & 0 & x+y+1\end{pmatrix}=\left(x+y+1\right)M\left(0\right)$

**c)** $M\left(1\right)\cdot M\left(x\right)-M\left(2\right)\cdot M\left(\dfrac{x}{2}\right)=xI_3+\left(x+2\right)M\left(0\right)-xI_3-\left(\dfrac{x}{2}+3\right)M\left(0\right)=\left(\dfrac{x}{2}-1\right)M\left(0\right)$

$\left(\dfrac{x}{2}-1\right)M\left(0\right)=2M\left(0\right)$, de unde $x=6$.

</div>

## Unde se pierd puncte

<div class="greseala">

**La c) se înmulțesc matricele direct.** Merge, dar sunt două produse $3\times 3$ cu
parametru, cu multe ocazii de greșeală. Formula de la b) e pusă acolo tocmai ca să
le eviți.

</div>

<div class="greseala">

**Se scrie $M\left(2\right)M\left(\dfrac{x}{2}\right)=\dfrac{x}{2}I_3+\ldots$** Produsul
parametrilor e $2\cdot\dfrac{x}{2}=x$, nu $\dfrac{x}{2}$. Atunci $xI_3$ nu se mai
reduce și ecuația nu mai are sens.

</div>

<div class="greseala">

**Se uită termenul $-3$ din colțul $\left(1,3\right)$ al produsului.** El dă
$-3x-3y-3$, iar fără el factorul comun nu mai iese. Linia întâi înmulțită cu a treia
coloană are trei termeni, toți nenuli.

</div>
