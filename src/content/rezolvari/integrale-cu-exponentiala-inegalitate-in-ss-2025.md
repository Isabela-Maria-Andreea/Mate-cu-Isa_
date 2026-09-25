---
titlu: "Integrale cu e⁻ˣ și o inegalitate pentru Iₙ"
titluSeo: "f(x) = (x + 4)/eˣ: integrală polinomială, integrare prin părți și inegalitatea Iₙ₊₁ + 4Iₙ ≤ e/(n + 1), BAC 2025 Sesiunea specială M_mate-info, Subiectul III.2"
descriere: "Cum dispare eˣ la a), cum integrezi (x + 4)e⁻ˣ prin părți și de ce combinația Iₙ₊₁ + 4Iₙ simplifică numitorul x + 4. Subiectul III.2, BAC 2025, Sesiunea specială, Varianta 3."
capitol: "Primitive și integrala definită"
sursa: "BAC 2025, Sesiunea specială, Varianta 3 — Subiectul III.2"
varianta: "bac-2025-ss-v3"
subiect: "III"
pozitie: 2
subpuncte:
  - "Integrala din x + 4"
  - "Integrala lui f prin părți"
  - "Inegalitatea pentru Iₙ"
punctaj: 15
dificultate: 4
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

$f\left(x\right)=\dfrac{x+4}{e^{x}}=\left(x+4\right)e^{-x}$. Fiecare subpunct face ceva
diferit cu exponențiala:

- la **a)** o înmulțești cu $e^{x}$ și dispare;
- la **b)** rămâne, iar produsul polinom · exponențială cere integrare prin părți;
- la **c)** $\dfrac{1}{f\left(x\right)}=\dfrac{e^{x}}{x+4}$, iar combinația
  $I_{n+1}+4I_n$ aduce la numărător $x^{n}\left(x+4\right)$, care simplifică numitorul.

**La c)** se cere o inegalitate, nu o egalitate. După simplificare rămâne
$\displaystyle\int_{0}^{1}x^{n}e^{x}dx$, pe care nu trebuie s-o calculezi: e suficient
să majorezi $e^{x}\le e$ pe $\left[0,1\right]$.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Integrala din x + 4

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Simplifici și integrezi** <span class="punct">3p</span>

$f\left(x\right)e^{x}=\dfrac{x+4}{e^{x}}\cdot e^{x}=x+4$:

$$
\int_{0}^{2}f\left(x\right)e^{x}dx=\int_{0}^{2}\left(x+4\right)dx=\left(\frac{x^{2}}{2}+4x\right)\Bigg|_{0}^{2}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Evaluezi** <span class="punct">2p</span>

$$
\left(\frac{4}{2}+8\right)-0=2+8=10
$$

<p class="rezultat">10</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Integrala lui f prin părți

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Integrezi prin părți** <span class="punct">3p</span>

$f\left(x\right)=\left(x+4\right)e^{-x}$. Cu $\left(-e^{-x}\right)'=e^{-x}$ și
$\left(x+4\right)'=1$:

$$
\int_{0}^{1}\left(x+4\right)\left(-e^{-x}\right)'dx=\left(x+4\right)\left(-e^{-x}\right)\Bigg|_{0}^{1}-\int_{0}^{1}1\cdot\left(-e^{-x}\right)dx=\left(x+4\right)\left(-e^{-x}\right)\Bigg|_{0}^{1}-e^{-x}\Bigg|_{0}^{1}
$$

Ultimul termen: cele două minusuri, cel din fața integralei și cel din $-e^{-x}$, se
anulează, deci rămâne $+\displaystyle\int_{0}^{1}e^{-x}dx$. Primitiva lui $e^{-x}$ e
$-e^{-x}$, de unde $-e^{-x}\Big|_{0}^{1}$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Evaluezi** <span class="punct">2p</span>

$\left(x+4\right)\left(-e^{-x}\right)\Big|_{0}^{1}=-\dfrac{5}{e}-\left(-4\right)=-\dfrac{5}{e}+4$ și
$-e^{-x}\Big|_{0}^{1}=-\dfrac{1}{e}+1$:

$$
-\frac{5}{e}+4-\frac{1}{e}+1=5-\frac{6}{e}
$$

<p class="rezultat">5 − 6/e</p>

</div>
</div>

<span class="atentie">**Semnul la $\left(e^{-x}\right)'$.** Derivata compusă dă $\left(e^{-x}\right)'=e^{-x}\cdot\left(-x\right)'=-e^{-x}$. De aici primitiva lui $e^{-x}$ e $-e^{-x}$. Un semn greșit aici schimbă ambele fracții cu $e$.</span>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Inegalitatea pentru Iₙ

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Simplifici combinația** <span class="punct">2p</span>

$\dfrac{1}{f\left(x\right)}=\dfrac{e^{x}}{x+4}$, deci
$I_n=\displaystyle\int_{0}^{1}\frac{x^{n}e^{x}}{x+4}dx$. Aduni sub aceeași integrală:

$$
I_{n+1}+4I_n=\int_{0}^{1}\frac{\left(x^{n+1}+4x^{n}\right)e^{x}}{x+4}dx=\int_{0}^{1}\frac{x^{n}\left(x+4\right)e^{x}}{x+4}dx=\int_{0}^{1}x^{n}e^{x}dx
$$

Factorul comun $x^{n}$ scoate la iveală $x+4$, care se simplifică cu numitorul.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Majorezi exponențiala** <span class="punct">3p</span>

Pentru $x\in\left[0,1\right]$, $e^{x}\le e^{1}=e$ (exponențiala e crescătoare), iar
$x^{n}\ge 0$. Deci $x^{n}e^{x}\le e\cdot x^{n}$ și, integrând:

$$
I_{n+1}+4I_n\le e\int_{0}^{1}x^{n}dx=e\cdot\frac{x^{n+1}}{n+1}\Bigg|_{0}^{1}=\frac{e}{n+1}
$$

<p class="rezultat">Iₙ₊₁ + 4Iₙ ≤ e/(n + 1)</p>

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $\displaystyle\int_{0}^{2}f\left(x\right)e^{x}dx=\int_{0}^{2}\left(x+4\right)dx=\left(\frac{x^{2}}{2}+4x\right)\Big|_{0}^{2}=2+8=10$

**b)** $\displaystyle\int_{0}^{1}f\left(x\right)dx=\int_{0}^{1}\left(x+4\right)\left(-e^{-x}\right)'dx=\left(x+4\right)\left(-e^{-x}\right)\Big|_{0}^{1}-e^{-x}\Big|_{0}^{1}=-\frac{5}{e}+4-\frac{1}{e}+1=5-\frac{6}{e}$

**c)** $I_n=\displaystyle\int_{0}^{1}\frac{x^{n}e^{x}}{x+4}dx$, de unde
$I_{n+1}+4I_n=\displaystyle\int_{0}^{1}\frac{\left(x^{n+1}+4x^{n}\right)e^{x}}{x+4}dx=\int_{0}^{1}x^{n}e^{x}dx$.

Cum $e^{x}\le e$ pentru orice $x\in\left[0,1\right]$,
$I_{n+1}+4I_n\le e\displaystyle\int_{0}^{1}x^{n}dx=e\cdot\frac{x^{n+1}}{n+1}\Big|_{0}^{1}=\frac{e}{n+1}$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se scrie $\dfrac{1}{f\left(x\right)}=\dfrac{x+4}{e^{x}}$.** Asta e chiar $f$.
Inversul are exponențiala sus: $\dfrac{e^{x}}{x+4}$. Cu $f$ în loc de $\dfrac{1}{f}$,
nimic nu se mai simplifică la c).

</div>

<div class="greseala">

**Se calculează exact $\displaystyle\int_{0}^{1}x^{n}e^{x}dx$.** Pentru $n$ general
nu are formă simplă, iar inegalitatea nu cere asta. Majorarea $e^{x}\le e$ e tot ce
trebuie.

</div>

<div class="greseala">

**La b) se uită termenul $-\displaystyle\int\left(x+4\right)'\cdot\left(-e^{-x}\right)$.**
Integrarea prin părți are doi termeni. Fără al doilea, rezultatul e $4-\dfrac{5}{e}$.

</div>
