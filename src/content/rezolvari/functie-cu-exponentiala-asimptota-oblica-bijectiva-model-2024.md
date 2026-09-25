---
titlu: "Funcția x − e⁻ˣ/(x − 1): asimptotă oblică și bijectivitate"
titluSeo: "f(x) = x − e^(−x)/(x − 1) pe (1, +∞) — derivata, asimptota oblică y = x și demonstrația că f e bijectivă, BAC 2024 Model M_mate-info, Subiectul III.1"
descriere: "Derivata unui cât cu e⁻ˣ, asimptota oblică din cele două limite și bijectivitatea ca injectivitate din monotonie plus surjectivitate din limitele la capete. Subiectul III.1, modelul BAC 2024."
capitol: "Studiul funcției și reprezentarea grafică"
sursa: "BAC 2024, Model — Subiectul III.1"
varianta: "bac-2024-model"
subiect: "III"
pozitie: 1
subpuncte:
  - "Derivata"
  - "Asimptota oblică spre +∞"
  - "f este bijectivă"
punctaj: 15
dificultate: 3
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

**La a), rezultatul are un singur termen cu exponențială, $xe^{-x}$.** Derivata
câtului $\dfrac{e^{-x}}{x-1}$ dă inițial doi termeni cu $e^{-x}$ la numărător;
unul dintre ei trebuie să se reducă. Știind asta, urmărești semnele cu atenție.

**La b), $f$ e scrisă deja ca „$x$ minus ceva".** Asta sugerează $y=x$ ca
asimptotă. Confirmi cu cele două limite standard: panta
$m=\lim\dfrac{f\left(x\right)}{x}$ și ordonata la origine
$n=\lim\left(f\left(x\right)-mx\right)$.

**La c), bijectiv înseamnă injectiv plus surjectiv**, iar codomeniul e
$\mathbb{R}$. Injectivitatea vine din monotonia strictă, deci din semnul lui
$f'$, pe care a) ți-l dă gata: numărătorul e o sumă de termeni pozitivi.
Surjectivitatea vine din continuitate plus limitele la capetele domeniului:
trebuie să iasă $-\infty$ și $+\infty$.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Derivata

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Derivezi termen cu termen** <span class="punct">3p</span>

$\left(x\right)'=1$. Pentru cât, cu $u=e^{-x}$, $v=x-1$:

$$
u'=\left(e^{-x}\right)'=e^{-x}\cdot\left(-x\right)'=-e^{-x},\qquad v'=1
$$

<span class="atentie">**$\left(e^{-x}\right)'=-e^{-x}$, nu $e^{-x}$.** E derivata unei funcții compuse: exponentul $-x$ are derivata $-1$. Aici se pierde cel mai des punctajul de la a).</span>

$$
f'\left(x\right)=1-\frac{u'v-uv'}{v^{2}}=1-\frac{-e^{-x}\left(x-1\right)-e^{-x}}{\left(x-1\right)^{2}}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Simplifici numărătorul și aduci la același numitor** <span class="punct">2p</span>

Desfaci: $-e^{-x}\left(x-1\right)=-xe^{-x}+e^{-x}$. Apoi scazi $e^{-x}$; se
reduce $+e^{-x}$ cu $-e^{-x}$:

$$
-xe^{-x}+e^{-x}-e^{-x}=-xe^{-x}
$$

Minusul din fața fracției se înmulțește cu $-xe^{-x}$ și devine plus:

$$
f'\left(x\right)=1+\frac{xe^{-x}}{\left(x-1\right)^{2}}=\frac{\left(x-1\right)^{2}+xe^{-x}}{\left(x-1\right)^{2}},\quad x\in\left(1,+\infty\right)
$$

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Asimptota oblică spre +∞

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Panta** <span class="punct">3p</span>

Împarți fiecare termen al lui $f$ la $x$:

$$
\lim_{x\rightarrow +\infty}\frac{f\left(x\right)}{x}=\lim_{x\rightarrow +\infty}\left(1-\frac{e^{-x}}{x\left(x-1\right)}\right)=1
$$

Fracția tinde la $0$: numărătorul $e^{-x}\to 0$, numitorul
$x\left(x-1\right)\to+\infty$. Nu e nedeterminare, deci nu ai nevoie de
l'Hôpital.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Ordonata la origine și concluzia** <span class="punct">2p</span>

Cu $m=1$, $f\left(x\right)-x=-\dfrac{e^{-x}}{x-1}$; se reduce $x$ cu $-x$:

$$
\lim_{x\rightarrow +\infty}\left(f\left(x\right)-x\right)=\lim_{x\rightarrow +\infty}\left(-\frac{e^{-x}}{x-1}\right)=0
$$

Din nou $\dfrac{0}{+\infty}$, adică $0$.

<p class="rezultat">y = x este asimptota oblică spre +∞</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## f este bijectivă

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Injectivitatea, din semnul derivatei** <span class="punct">2p</span>

În $f'\left(x\right)$ de la a), pentru $x>1$: $\left(x-1\right)^{2}>0$, $x>0$ și
$e^{-x}>0$. Numărătorul e o sumă de termeni strict pozitivi, numitorul e strict
pozitiv, deci $f'\left(x\right)>0$ pe tot domeniul.

Rezultă că $f$ este strict crescătoare pe $\left(1,+\infty\right)$, deci
injectivă: două valori diferite ale lui $x$ dau valori diferite ale lui $f$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Surjectivitatea, din limitele la capete** <span class="punct">3p</span>

Spre $+\infty$: $x\to+\infty$, iar fracția tinde la $0$ (din b)), deci

$$
\lim_{x\rightarrow +\infty}f\left(x\right)=+\infty
$$

Spre $1$, din dreapta: $e^{-x}\to e^{-1}=\dfrac{1}{e}>0$, iar $x-1\to 0$ cu
valori pozitive. Fracția e un număr pozitiv fix împărțit la unul pozitiv tot mai
mic, deci tinde la $+\infty$, iar cu minus în față:

$$
\lim_{\substack{x\rightarrow 1\\ x>1}}f\left(x\right)=1-\left(+\infty\right)=-\infty
$$

<div class="variatie-scroll">
<table class="variatie">
<tr><th>x</th><td>1</td><td></td><td>+∞</td></tr>
<tr><th>f′(x)</th><td></td><td>+</td><td></td></tr>
<tr><th>f(x)</th><td>−∞</td><td>↗</td><td>+∞</td></tr>
</table>
</div>

$f$ e continuă (compunere, diferență și cât de funcții continue, cu numitorul
nenul pe domeniu) și crește de la $-\infty$ la $+\infty$. Din proprietatea lui
Darboux, ia toate valorile reale, deci $f\left(\left(1,+\infty\right)\right)=\mathbb{R}$
și $f$ este surjectivă.

<p class="rezultat">f este injectivă și surjectivă, deci bijectivă</p>

</div>
</div>

<span class="atentie">**Limita în $1$ se ia doar din dreapta.** Domeniul e $\left(1,+\infty\right)$, deci $x-1>0$ și semnul fracției e sigur pozitiv. Dacă scrii $\dfrac{1/e}{0}$ fără semnul lui zero, limita nu e justificată.</span>

## Ce îți spune baremul

La c), baremul dă mai multe puncte surjectivității decât injectivității: 2 pentru
„$f'>0$, deci strict crescătoare, deci injectivă" și 3 pentru cele două limite
plus continuitatea. Cuvântul „continuă" e parte din punctaj: fără el, limitele
nu garantează că $f$ trece prin toate valorile.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $f'\left(x\right)=1-\dfrac{-e^{-x}\left(x-1\right)-e^{-x}}{\left(x-1\right)^{2}}=1+\dfrac{xe^{-x}}{\left(x-1\right)^{2}}=\dfrac{\left(x-1\right)^{2}+xe^{-x}}{\left(x-1\right)^{2}}$, $x\in\left(1,+\infty\right)$

**b)** $\lim\limits_{x\rightarrow +\infty}\dfrac{f\left(x\right)}{x}=\lim\limits_{x\rightarrow +\infty}\left(1-\dfrac{e^{-x}}{x\left(x-1\right)}\right)=1$

$\lim\limits_{x\rightarrow +\infty}\left(f\left(x\right)-x\right)=\lim\limits_{x\rightarrow +\infty}\left(-\dfrac{e^{-x}}{x-1}\right)=0$,
deci dreapta de ecuație $y=x$ este asimptota oblică spre $+\infty$ la graficul
funcției $f$.

**c)** $f'\left(x\right)>0$, pentru orice $x\in\left(1,+\infty\right)$, deci $f$
este strict crescătoare pe $\left(1,+\infty\right)$, deci $f$ este injectivă.

$\lim\limits_{x\rightarrow +\infty}f\left(x\right)=+\infty$,
$\lim\limits_{\substack{x\rightarrow 1\\ x>1}}f\left(x\right)=-\infty$ și $f$ este continuă, deci
$f$ este surjectivă, de unde obținem că $f$ este bijectivă.

</div>

## Unde se pierd puncte

<div class="greseala">

**La a), $\left(e^{-x}\right)'=e^{-x}$.** Cu greșeala asta numărătorul devine
$xe^{-x}-2e^{-x}$ și nu mai ajungi la forma din enunț. Dacă „arătați că" nu
iese, primul lucru de verificat e derivata exponențialei.

</div>

<div class="greseala">

**La b), se aplică l'Hôpital la $\dfrac{e^{-x}}{x-1}$.** Nu e caz de
nedeterminare: sus tinde la $0$, jos la $+\infty$. L'Hôpital nu e greșit ca
rezultat aici, dar e aplicat fără ipoteză, și corectorul poate tăia.

</div>

<div class="greseala">

**La c), se demonstrează doar injectivitatea.** „Bijectivă" cere și
surjectivitate, adică imaginea egală cu codomeniul $\mathbb{R}$. Fără limitele la
capete ai jumătate de răspuns.

</div>
