---
titlu: "Polinom de gradul III: împărțire și produsul (1 + xᵢ)"
titluSeo: "f = aX³ + 3X² − aX − 6: f(1), împărțirea la X² + 3X − 1 și (1 + x₁)(1 + x₂)(1 + x₃) = 1 — rezolvare cu barem, BAC 2025 Sesiunea I M_mate-info, Subiectul II.2"
descriere: "Cum vezi câtul fără împărțire lungă și de ce produsul (1 + xᵢ) se leagă de f(−1), prin forma descompusă a polinomului. Subiectul II.2, BAC 2025, Sesiunea I, Varianta 1."
capitol: "Inele, corpuri și polinoame"
sursa: "BAC 2025, Sesiunea I, Varianta 1 — Subiectul II.2"
varianta: "bac-2025-s1-v1"
subiect: "II"
pozitie: 2
subpuncte:
  - "Valoarea f(1)"
  - "Câtul și restul"
  - "Produsul (1 + x₁)(1 + x₂)(1 + x₃)"
punctaj: 15
dificultate: 3
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

**La b)**, pentru $a=1$, $f=X^{3}+3X^{2}-X-6$. Primii trei termeni au factor comun
$X$ și dau exact $X\left(X^{2}+3X-1\right)=X\cdot g$. Deci $f=X\cdot g-6$, iar câtul și
restul se citesc direct. Nu e nevoie de împărțirea lungă.

**La c)**, $\left(1+x_1\right)\left(1+x_2\right)\left(1+x_3\right)$ seamănă cu forma
descompusă a lui $f$:

$$
f=a\left(X-x_1\right)\left(X-x_2\right)\left(X-x_3\right)
$$

În $X=-1$, fiecare factor devine $-1-x_i=-\left(1+x_i\right)$. Deci
$f\left(-1\right)=-a\left(1+x_1\right)\left(1+x_2\right)\left(1+x_3\right)$, iar
$f\left(-1\right)$ se calculează direct din coeficienți.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Valoarea f(1)

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Înlocuiești** <span class="punct">3p</span>

$$
f\left(1\right)=a\cdot 1^{3}+3\cdot 1^{2}-a\cdot 1-6
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Reduci** <span class="punct">2p</span>

Se reduce $a$ cu $-a$:

$$
a+3-a-6=-3
$$

Rezultatul nu depinde de $a$.

<p class="rezultat">f(1) = −3, pentru orice a nenul</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Câtul și restul

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii $f$ cu $g$ ca factor** <span class="punct">3p</span>

Pentru $a=1$:

$$
f=X^{3}+3X^{2}-X-6=X\left(X^{2}+3X-1\right)-6=X\cdot g-6
$$

Deci câtul împărțirii este $X$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Restul** <span class="punct">2p</span>

$-6$ are gradul $0$, mai mic decât gradul lui $g$, deci e chiar restul.

<p class="rezultat">câtul X, restul −6</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Produsul (1 + x₁)(1 + x₂)(1 + x₃)

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Legi produsul de $f\left(-1\right)$** <span class="punct">3p</span>

Din $f=a\left(X-x_1\right)\left(X-x_2\right)\left(X-x_3\right)$:

$$
f\left(-1\right)=a\left(-1-x_1\right)\left(-1-x_2\right)\left(-1-x_3\right)=a\cdot\left(-1\right)^{3}\left(1+x_1\right)\left(1+x_2\right)\left(1+x_3\right)
$$

deci

$$
\left(1+x_1\right)\left(1+x_2\right)\left(1+x_3\right)=-\frac{f\left(-1\right)}{a}
$$

<span class="atentie">**Semnul din $\left(-1\right)^{3}$.** Fiecare dintre cei trei factori aduce un minus, iar trei minusuri dau minus. De aici semnul din fața fracției.</span>

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Calculezi $f\left(-1\right)$ și rezolvi** <span class="punct">2p</span>

$$
f\left(-1\right)=-a+3+a-6=-3
$$

Se reduce $-a$ cu $a$. Atunci $-\dfrac{-3}{a}=\dfrac{3}{a}=1$.

<p class="rezultat">a = 3</p>

</div>
</div>

<div class="alternativa">

**Cu relațiile lui Viète.** Desfăcut,
$\left(1+x_1\right)\left(1+x_2\right)\left(1+x_3\right)=1+\left(x_1+x_2+x_3\right)+\left(x_1x_2+x_1x_3+x_2x_3\right)+x_1x_2x_3$.
Din Viète: suma e $-\dfrac{3}{a}$, suma produselor două câte două e $\dfrac{-a}{a}=-1$,
produsul e $\dfrac{6}{a}$. Totalul: $1-\dfrac{3}{a}-1+\dfrac{6}{a}=\dfrac{3}{a}$. Același
rezultat, cu mai multe ocazii de greșeală la semne.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $f\left(1\right)=a\cdot 1^{3}+3\cdot 1^{2}-a\cdot 1-6=a+3-a-6=-3$, pentru orice număr
real nenul $a$.

**b)** $f=X\left(X^{2}+3X-1\right)-6$, deci câtul împărțirii este $X$, iar restul este
$-6$.

**c)** $\left(1+x_1\right)\left(1+x_2\right)\left(1+x_3\right)=-\dfrac{f\left(-1\right)}{a}$,
cu $f\left(-1\right)=-3$.

$-\dfrac{f\left(-1\right)}{a}=1$, de unde $a=3$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se uită semnul din $\left(-1\right)^{3}$.** Fiecare factor $-1-x_i$ aduce un minus, iar
trei minusuri dau minus. Fără el ieși cu $a=-3$.

</div>

<div class="greseala">

**Se greșește produsul rădăcinilor la Viète.** Pentru $aX^{3}+bX^{2}+cX+d$, produsul
e $-\dfrac{d}{a}$. Aici $d=-6$, deci $\dfrac{6}{a}$, nu $-\dfrac{6}{a}$.

</div>
