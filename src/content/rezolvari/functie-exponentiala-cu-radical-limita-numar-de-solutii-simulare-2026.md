---
titlu: "Funcție cu exponențială și radical: limita 1 la infinit și numărul de soluții"
titluSeo: "f(x) = e^(x−2)/√(x−1) — derivată, limita (f(x))^(1/(x−2)) = √e și ecuația f(x) = mx cu două soluții, rezolvare cu barem, Simulare BAC 2026 M_mate-info, Subiectul III.1"
descriere: "Derivata unui cât cu radical, o limită de tip 1 la infinit rezolvată prin definiția derivatei și numărul de soluții ale ecuației f(x) = mx prin funcția f(x)/x. Subiectul III.1, Simularea BAC 2026."
capitol: "Derivate și monotonie"
sursa: "BAC 2026, Simulare clasa a XII-a — Subiectul III.1"
varianta: "bac-2026-sm-v1"
subiect: "III"
pozitie: 1
subpuncte:
  - "Derivata"
  - "Limita de tip 1 la infinit"
  - "Ecuația f(x) = mx cu exact două soluții"
punctaj: 15
dificultate: 4
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

**La a), rezultatul e dat.** Aplici formula câtului și aduci la forma din enunț.
Singura dificultate e fracția etajată care apare din derivata radicalului.

**La b), $x\to 2$ și $f\left(2\right)=\dfrac{e^{0}}{\sqrt{1}}=1$.** Baza tinde la
$1$, exponentul $\dfrac{1}{x-2}$ tinde la $\pm\infty$: nedeterminare
$\left[1^{\infty}\right]$. Pentru ea există o singură rețetă, limita remarcabilă
$\left(1+u\right)^{\frac{1}{u}}\to e$ când $u\to 0$. Iar exponentul care rămâne,
$\dfrac{f\left(x\right)-1}{x-2}=\dfrac{f\left(x\right)-f\left(2\right)}{x-2}$, e
exact **definiția derivatei în 2**. Nu calculezi nimic nou, folosești a).

**La c), $f\left(x\right)=mx$ are parametrul lângă $x$.** Nu poți studia direct
intersecția graficului cu dreptele $y=mx$, care se rotesc în jurul originii. Dar
$x>1$, deci poți împărți: $\dfrac{f\left(x\right)}{x}=m$. Acum parametrul e
singur, iar numărul de soluții se citește din monotonia funcției
$g\left(x\right)=\dfrac{f\left(x\right)}{x}$, ca intersecție cu o dreaptă
orizontală.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Derivata

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Aplici formula câtului** <span class="punct">3p</span>

Cu $u=e^{x-2}$, $u'=e^{x-2}$ și $v=\sqrt{x-1}$, $v'=\dfrac{1}{2\sqrt{x-1}}$:

$$
f'\left(x\right)=\frac{e^{x-2}\sqrt{x-1}-e^{x-2}\cdot\dfrac{1}{2\sqrt{x-1}}}{x-1}
$$

Numitorul e $v^{2}=\left(\sqrt{x-1}\right)^{2}=x-1$.

<span class="atentie">**Derivata compusă.** $\left(\sqrt{x-1}\right)'=\dfrac{1}{2\sqrt{x-1}}\cdot\left(x-1\right)'$, iar $\left(x-1\right)'=1$. La fel, $\left(e^{x-2}\right)'=e^{x-2}\cdot\left(x-2\right)'=e^{x-2}$. Aici factorii interiori sunt $1$, dar scrie-i: la altă funcție nu vor mai fi.</span>

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Elimini fracția etajată** <span class="punct">2p</span>

Amplifici numărătorul și numitorul cu $2\sqrt{x-1}$. În numărător,
$\sqrt{x-1}\cdot 2\sqrt{x-1}=2\left(x-1\right)$, iar al doilea termen pierde
numitorul:

$$
f'\left(x\right)=\frac{e^{x-2}\left(2\left(x-1\right)-1\right)}{2\left(x-1\right)\sqrt{x-1}}=\frac{e^{x-2}\left(2x-2-1\right)}{2\left(x-1\right)\sqrt{x-1}}=\frac{e^{x-2}\left(2x-3\right)}{2\left(x-1\right)\sqrt{x-1}}
$$

pentru $x\in\left(1,+\infty\right)$.

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Limita de tip $1^{\infty}$

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Identifici nedeterminarea și forțezi limita remarcabilă** <span class="punct">3p</span>

$f$ e continuă, deci $\lim\limits_{x\to 2}f\left(x\right)=f\left(2\right)=\dfrac{e^{0}}{\sqrt{1}}=1$,
iar $\dfrac{1}{x-2}\to\pm\infty$. Ai $\left[1^{\infty}\right]$.

Scrii baza ca $1+\left(f\left(x\right)-1\right)$ și amplifici exponentul:

$$
\lim_{x\to 2}\left(f\left(x\right)\right)^{\frac{1}{x-2}}
=\lim_{x\to 2}\left(1+f\left(x\right)-1\right)^{\frac{1}{x-2}}
=\lim_{x\to 2}\left(\left(1+f\left(x\right)-1\right)^{\frac{1}{f\left(x\right)-1}}\right)^{\frac{f\left(x\right)-1}{x-2}}
$$

Paranteza mare tinde la $e$, pentru că $f\left(x\right)-1\to 0$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Recunoști derivata în exponent** <span class="punct">2p</span>

Cum $f\left(2\right)=1$, exponentul este
$\dfrac{f\left(x\right)-f\left(2\right)}{x-2}$, care tinde la $f'\left(2\right)$ (din
definiția derivatei). De la a):

$$
f'\left(2\right)=\frac{e^{0}\left(4-3\right)}{2\cdot 1\cdot\sqrt{1}}=\frac{1}{2}
$$

$$
\lim_{x\to 2}\left(f\left(x\right)\right)^{\frac{1}{x-2}}=e^{\lim\limits_{x\to 2}\frac{f\left(x\right)-1}{x-2}}=e^{f'\left(2\right)}=e^{\frac{1}{2}}=\sqrt{e}
$$

<p class="rezultat">limita este √e</p>

</div>
</div>

<div class="alternativa">

**Prin logaritm, fără derivată.** $\ln f\left(x\right)=x-2-\dfrac{1}{2}\ln\left(x-1\right)$,
deci

$$
\frac{\ln f\left(x\right)}{x-2}=1-\frac{1}{2}\cdot\frac{\ln\left(1+\left(x-2\right)\right)}{x-2}\to 1-\frac{1}{2}\cdot 1=\frac{1}{2}
$$

din limita remarcabilă $\dfrac{\ln\left(1+u\right)}{u}\to 1$. Limita cerută este
$e^{\frac{1}{2}}=\sqrt{e}$. E o cale mai scurtă și nu depinde de a); baremul o
acceptă ca orice soluție corectă.

</div>

<div class="aside">

**Un detaliu de rigoare.** Împărțirea la $f\left(x\right)-1$ cere
$f\left(x\right)\ne 1$ lângă $2$. Din a), $f'>0$ pe $\left(\dfrac{3}{2},+\infty\right)$,
deci $f$ e injectivă acolo și ia valoarea $1$ doar în $x=2$. Baremul nu cere
propoziția, dar dacă ai timp, ea închide raționamentul.

</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Ecuația $f\left(x\right)=mx$ cu exact două soluții

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Treci la $g=\dfrac{f}{x}$ și îi studiezi monotonia** <span class="punct">3p</span>

Cum $x>1$, $x\ne 0$, deci $f\left(x\right)=mx\Leftrightarrow\dfrac{f\left(x\right)}{x}=m$.
Fie $g:\left(1,+\infty\right)\to\mathbb{R}$, $g\left(x\right)=\dfrac{f\left(x\right)}{x}$.

$$
g'\left(x\right)=\frac{xf'\left(x\right)-f\left(x\right)}{x^{2}}
$$

Numărătorul, cu $f'$ de la a) și $f\left(x\right)=\dfrac{e^{x-2}\cdot 2\left(x-1\right)}{2\left(x-1\right)\sqrt{x-1}}$
(adus la același numitor):

$$
xf'\left(x\right)-f\left(x\right)=\frac{e^{x-2}\left(x\left(2x-3\right)-2\left(x-1\right)\right)}{2\left(x-1\right)\sqrt{x-1}}=\frac{e^{x-2}\left(2x^{2}-3x-2x+2\right)}{2\left(x-1\right)\sqrt{x-1}}
$$

$$
g'\left(x\right)=\frac{e^{x-2}\left(2x^{2}-5x+2\right)}{2x^{2}\left(x-1\right)\sqrt{x-1}}
$$

Pe $\left(1,+\infty\right)$, $e^{x-2}>0$ și numitorul e pozitiv, deci semnul lui
$g'$ e semnul lui $2x^{2}-5x+2=\left(2x-1\right)\left(x-2\right)$. Cum $x>1$,
$2x-1>0$, deci **semnul lui $g'$ e semnul lui $x-2$**:

- pentru orice $x\in\left(1,2\right)$, $g'\left(x\right)<0$, deci $g$ e strict descrescătoare pe $\left(1,2\right)$;
- pentru orice $x\in\left(2,+\infty\right)$, $g'\left(x\right)>0$, deci $g$ e strict crescătoare pe $\left(2,+\infty\right)$.

<span class="atentie">**Rădăcina $\dfrac{1}{2}$ nu e în domeniu.** $2x^{2}-5x+2$ se anulează și în $x=\dfrac{1}{2}$, dar $\dfrac{1}{2}\notin\left(1,+\infty\right)$. Singurul punct critic e $x=2$.</span>

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Calculezi valorile la capete și în minim** <span class="punct">2p</span>

$$
g\left(2\right)=\frac{f\left(2\right)}{2}=\frac{1}{2}
$$

La $1$: $g\left(x\right)=\dfrac{e^{x-2}}{x\sqrt{x-1}}$; numărătorul tinde la
$e^{-1}>0$, numitorul la $0$ prin valori pozitive, deci
$\lim\limits_{x\to 1}g\left(x\right)=+\infty$.

La $+\infty$: pentru $x>1$, $x\sqrt{x-1}<x\cdot x=x^{2}$, deci
$g\left(x\right)>\dfrac{e^{x-2}}{x^{2}}$. Cu l'Hôpital de două ori, fiecare dată
în $\left[\dfrac{\infty}{\infty}\right]$:
$\dfrac{e^{x-2}}{x^{2}}\to\dfrac{e^{x-2}}{2x}\to\dfrac{e^{x-2}}{2}\to+\infty$. Deci
$\lim\limits_{x\to+\infty}g\left(x\right)=+\infty$.

<div class="variatie-scroll">
<table class="variatie">
<tr><th>x</th><td>1</td><td></td><td>2</td><td></td><td>+∞</td></tr>
<tr><th>g′(x)</th><td>|</td><td>−</td><td>0</td><td>+</td><td></td></tr>
<tr><th>g(x)</th><td>+∞</td><td>↘</td><td>1/2</td><td>↗</td><td>+∞</td></tr>
</table>
</div>

$g$ e continuă, coboară de la $+\infty$ la $\dfrac{1}{2}$ pe $\left(1,2\right]$, apoi
urcă de la $\dfrac{1}{2}$ la $+\infty$. O dreaptă orizontală $y=m$ taie graficul:

- de două ori, dacă $m>\dfrac{1}{2}$ (o dată pe fiecare ramură);
- o dată, dacă $m=\dfrac{1}{2}$ (în minim);
- niciodată, dacă $m<\dfrac{1}{2}$.

<p class="rezultat">m ∈ (1/2, +∞)</p>

</div>
</div>

## Ce îți spune baremul

La c), 3p din 5 sunt pentru derivata lui $g$ și monotonie. Limitele și concluzia
iau doar 2p. Cine se împotmolește la calculul lui $g'$ pierde mai mult decât
cine greșește intervalul final.

Baremul scrie limita la $+\infty$ fără justificare. Rândul cu l'Hôpital de mai sus
nu e obligatoriu, dar e ieftin.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $f'\left(x\right)=\dfrac{e^{x-2}\sqrt{x-1}-e^{x-2}\cdot\frac{1}{2\sqrt{x-1}}}{x-1}=\dfrac{e^{x-2}\left(2x-2-1\right)}{2\left(x-1\right)\sqrt{x-1}}=\dfrac{e^{x-2}\left(2x-3\right)}{2\left(x-1\right)\sqrt{x-1}}$

**b)** $\lim\limits_{x\to 2}\left(f\left(x\right)\right)^{\frac{1}{x-2}}=\lim\limits_{x\to 2}\left(\left(1+f\left(x\right)-1\right)^{\frac{1}{f\left(x\right)-1}}\right)^{\frac{f\left(x\right)-1}{x-2}}=e^{f'\left(2\right)}=e^{\frac{1}{2}}=\sqrt{e}$

**c)** $g\left(x\right)=\dfrac{f\left(x\right)}{x}$, $g'\left(x\right)=\dfrac{e^{x-2}\left(2x^{2}-5x+2\right)}{2x^{2}\left(x-1\right)\sqrt{x-1}}$;
$g'\left(x\right)=0\Rightarrow x=2$. $g$ e strict descrescătoare pe $\left(1,2\right)$ și
strict crescătoare pe $\left(2,+\infty\right)$ (tabelul de variație).
$\lim\limits_{x\to 1}g\left(x\right)=+\infty$, $g\left(2\right)=\dfrac{1}{2}$,
$\lim\limits_{x\to+\infty}g\left(x\right)=+\infty$, $g$ continuă, deci ecuația
$g\left(x\right)=m$, adică $f\left(x\right)=mx$, are exact două soluții pentru
$m\in\left(\dfrac{1}{2},+\infty\right)$.

</div>

## Unde se pierd puncte

<!-- SCHIȚĂ: greșelile de mai jos sunt propuse, nu verificate pe lucrări reale. De confirmat de Isa. -->

<div class="greseala">

**La b), se calculează $f'\left(2\right)$ greșit sau deloc.** Tot efortul
transformării ajunge la $e^{f'\left(2\right)}$. Dacă nu legi exponentul de
definiția derivatei, rămâi cu o limită $\left[\dfrac{0}{0}\right]$ nerezolvată.

</div>

<div class="greseala">

**La c), se studiază $f$ în loc de $\dfrac{f}{x}$.** Monotonia lui $f$ spune câte
soluții are $f\left(x\right)=k$ pentru o constantă $k$, nu $f\left(x\right)=mx$.

</div>

<div class="greseala">

**La c), se include $m=\dfrac{1}{2}$.** Atunci ecuația are o singură soluție,
$x=2$. Intervalul e deschis.

</div>
