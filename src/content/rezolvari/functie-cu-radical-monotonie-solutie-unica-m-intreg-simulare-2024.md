---
titlu: "Funcția (x + 6)√(x² + 4): monotonie și soluție unică pentru m întreg"
titluSeo: "f(x) = (x + 6)√(x² + 4) — derivata, intervalele de monotonie și de ce f(x) = m are soluție unică pentru orice m întreg, BAC 2024 Simulare M_mate-info, Subiectul III.1"
descriere: "Derivata unui produs cu radical, semnul lui x² + 3x + 2 și argumentul pentru c): între maximul local √128 și minimul local √125 nu există niciun număr întreg. Subiectul III.1, simularea BAC 2024."
capitol: "Studiul funcției și reprezentarea grafică"
sursa: "BAC 2024, Simulare clasa a XII-a — Subiectul III.1"
varianta: "bac-2024-sm-v1"
subiect: "III"
pozitie: 1
subpuncte:
  - "Derivata"
  - "Intervalele de monotonie"
  - "Soluție unică pentru m întreg"
punctaj: 15
dificultate: 4
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

**La a)** e derivata unui produs, iar unul dintre factori e un radical dintr-o
funcție. Rezultatul are $\sqrt{x^{2}+4}$ la numitor, deci aduci totul la
numitorul ăsta.

**La b)** numitorul $\sqrt{x^{2}+4}$ e mereu pozitiv, deci semnul lui $f'$ e
semnul trinomului $x^{2}+3x+2$. Ai două rădăcini, deci trei intervale.

**La c) e ideea problemei.** Funcția crește, apoi scade puțin, apoi crește din
nou. O dreaptă orizontală $y=m$ taie graficul de trei ori doar dacă $m$ e între
minimul local și maximul local. Calculezi cele două valori:
$f\left(-2\right)=\sqrt{128}$ și $f\left(-1\right)=\sqrt{125}$. Amândouă sunt
între $11$ și $12$. Deci niciun $m$ **întreg** nu cade în zona cu mai multe
soluții. Condiția „$m$ întreg" din enunț e exact ce face afirmația adevărată.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Derivata

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Formula produsului** <span class="punct">3p</span>

Cu $u=x+6$, $u'=1$ și $v=\sqrt{x^{2}+4}$. Radicalul e compus: $\left(\sqrt{w}\right)'=\dfrac{w'}{2\sqrt{w}}$,
cu $w=x^{2}+4$, $w'=2x$:

$$
v'=\frac{2x}{2\sqrt{x^{2}+4}}
$$

<span class="atentie">**$\left(\sqrt{x^{2}+4}\right)'$ nu e $\dfrac{1}{2\sqrt{x^{2}+4}}$.** Lipsește derivata expresiei de sub radical, $2x$. E aceeași capcană ca la $\left(u^{2}\right)'=2u\cdot u'$.</span>

$$
f'\left(x\right)=u'v+uv'=\sqrt{x^{2}+4}+\left(x+6\right)\cdot\frac{2x}{2\sqrt{x^{2}+4}}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Aduci la același numitor** <span class="punct">2p</span>

În fracție se simplifică $2$ cu $2$, rămâne $\dfrac{x\left(x+6\right)}{\sqrt{x^{2}+4}}=\dfrac{x^{2}+6x}{\sqrt{x^{2}+4}}$.
Primul termen, amplificat cu $\sqrt{x^{2}+4}$, devine
$\dfrac{x^{2}+4}{\sqrt{x^{2}+4}}$:

$$
f'\left(x\right)=\frac{x^{2}+4+x^{2}+6x}{\sqrt{x^{2}+4}}=\frac{2x^{2}+6x+4}{\sqrt{x^{2}+4}}=\frac{2\left(x^{2}+3x+2\right)}{\sqrt{x^{2}+4}},\quad x\in\mathbb{R}
$$

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Intervalele de monotonie

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Zerourile derivatei** <span class="punct">2p</span>

$\sqrt{x^{2}+4}>0$, deci $f'\left(x\right)=0$ exact când $x^{2}+3x+2=0$.
Descompui: $x^{2}+3x+2=\left(x+1\right)\left(x+2\right)$, deci

$$
f'\left(x\right)=0\iff x=-2\ \text{sau}\ x=-1
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Semnul și monotonia** <span class="punct">3p</span>

Trinomul are coeficientul lui $x^{2}$ pozitiv, deci e pozitiv în afara
rădăcinilor și negativ între ele.

<div class="variatie-scroll">
<table class="variatie">
<tr><th>x</th><td>−∞</td><td></td><td>−2</td><td></td><td>−1</td><td></td><td>+∞</td></tr>
<tr><th>f′(x)</th><td></td><td>+</td><td>0</td><td>−</td><td>0</td><td>+</td><td></td></tr>
<tr><th>f(x)</th><td>−∞</td><td>↗</td><td>√128</td><td>↘</td><td>√125</td><td>↗</td><td>+∞</td></tr>
</table>
</div>

$f'\left(x\right)\ge 0$ pentru $x\in\left(-\infty,-2\right]$, deci $f$ este
crescătoare pe $\left(-\infty,-2\right]$. $f'\left(x\right)\le 0$ pentru
$x\in\left[-2,-1\right]$, deci $f$ este descrescătoare pe $\left[-2,-1\right]$.
$f'\left(x\right)\ge 0$ pentru $x\in\left[-1,+\infty\right)$, deci $f$ este
crescătoare pe $\left[-1,+\infty\right)$.

<p class="rezultat">f crescătoare pe (−∞, −2] și pe [−1, +∞), descrescătoare pe [−2, −1]</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Soluție unică pentru m întreg

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Limitele, extremele și încadrarea lor** <span class="punct">3p</span>

Spre $-\infty$: $x+6\to-\infty$ și $\sqrt{x^{2}+4}\to+\infty$, deci produsul
tinde la $-\infty$. Spre $+\infty$ ambii factori tind la $+\infty$:

$$
\lim_{x\rightarrow -\infty}f\left(x\right)=-\infty,\qquad \lim_{x\rightarrow +\infty}f\left(x\right)=+\infty
$$

Valorile în punctele critice, scrise ca un singur radical ca să le poți
compara:

$$
f\left(-2\right)=4\sqrt{8}=\sqrt{16\cdot 8}=\sqrt{128},\qquad f\left(-1\right)=5\sqrt{5}=\sqrt{25\cdot 5}=\sqrt{125}
$$

$11^{2}=121$ și $12^{2}=144$, iar $121<125<128<144$, deci:

$$
11<\sqrt{125}<\sqrt{128}<12
$$

$f$ e continuă (produs de funcții continue).

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Concluzia, pe cazuri** <span class="punct">2p</span>

Un întreg $m$ e fie $\le 11$, fie $\ge 12$. Între $11$ și $12$ nu există întregi.

**Dacă $m\le 11$:** pe $\left[-2,+\infty\right)$, cea mai mică valoare a lui $f$
e $f\left(-1\right)=\sqrt{125}>11\ge m$, deci acolo nu există soluții. Pe
$\left(-\infty,-2\right)$, $f$ e continuă și strict crescătoare de la $-\infty$
la $\sqrt{128}>m$, deci ia valoarea $m$ exact o dată.

**Dacă $m\ge 12$:** pe $\left(-\infty,-1\right]$, cea mai mare valoare a lui $f$
e $f\left(-2\right)=\sqrt{128}<12\le m$, deci acolo nu există soluții. Pe
$\left(-1,+\infty\right)$, $f$ e continuă și strict crescătoare de la
$\sqrt{125}<m$ la $+\infty$, deci ia valoarea $m$ exact o dată.

<p class="rezultat">f(x) = m are soluție unică pentru orice m întreg</p>

</div>
</div>

<span class="atentie">**„Strict" crescătoare, nu doar crescătoare.** Unicitatea soluției pe fiecare ramură vine din injectivitate, adică din monotonia strictă. $f'$ se anulează doar în două puncte izolate, deci pe $\left(-\infty,-2\right)$ și $\left(-1,+\infty\right)$ monotonia e strictă.</span>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $f'\left(x\right)=\sqrt{x^{2}+4}+\left(x+6\right)\cdot\dfrac{2x}{2\sqrt{x^{2}+4}}=\dfrac{2x^{2}+6x+4}{\sqrt{x^{2}+4}}=\dfrac{2\left(x^{2}+3x+2\right)}{\sqrt{x^{2}+4}}$, $x\in\mathbb{R}$

**b)** $f'\left(x\right)=0\iff x=-2$ sau $x=-1$

$f'\left(x\right)\ge 0$ pentru orice $x\in\left(-\infty,-2\right]\Rightarrow f$
crescătoare pe $\left(-\infty,-2\right]$; $f'\left(x\right)\le 0$ pentru orice
$x\in\left[-2,-1\right]\Rightarrow f$ descrescătoare pe $\left[-2,-1\right]$;
$f'\left(x\right)\ge 0$ pentru orice $x\in\left[-1,+\infty\right)\Rightarrow f$
crescătoare pe $\left[-1,+\infty\right)$.

**c)** $\lim\limits_{x\rightarrow -\infty}f\left(x\right)=-\infty$,
$f\left(-2\right)=\sqrt{128}$, $f\left(-1\right)=\sqrt{125}$,
$\lim\limits_{x\rightarrow +\infty}f\left(x\right)=+\infty$, $f$ este continuă și
$11<\sqrt{125}<\sqrt{128}<12$.

Cum $f$ este strict crescătoare pe $\left(-\infty,-2\right)$, descrescătoare pe
$\left[-2,-1\right]$ și strict crescătoare pe $\left(-1,+\infty\right)$, obținem
că ecuația $f\left(x\right)=m$ are soluție unică, pentru orice număr întreg $m$.

</div>

## Unde se pierd puncte

<div class="greseala">

**La c), se compară $4\sqrt{8}$ cu $5\sqrt{5}$ cu aproximări.** Cu
$\sqrt{8}\approx 2{,}8$ și $\sqrt{5}\approx 2{,}2$ obții $11{,}2$ și $11$, iar al
doilea pare egal cu $11$. Scrise ca $\sqrt{128}$ și $\sqrt{125}$, comparația cu
$11=\sqrt{121}$ și $12=\sqrt{144}$ e exactă.

</div>

<div class="greseala">

**La c), se afirmă că $f$ e bijectivă.** Nu e: pentru $m=11{,}25$, care stă între
$\sqrt{125}\approx 11{,}18$ și $\sqrt{128}\approx 11{,}31$, ecuația are trei
soluții. Afirmația din enunț e adevărată doar pentru $m$ întreg, iar
argumentul trebuie să folosească asta.

</div>

<div class="greseala">

**La b), se răspunde doar cu punctele critice.** „Intervalele de monotonie"
cere intervalele și tipul monotoniei pe fiecare, nu doar $-2$ și $-1$.

</div>
