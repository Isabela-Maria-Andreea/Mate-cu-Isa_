---
titlu: "Integrale cu fracții raționale și o arie cu eˣ"
titluSeo: "f(x) = x²/(x + 1)³: integrala din x², integrala lui x/(x + 1) și aria sub g(x) = f(eˣ)/eˣ — rezolvare cu barem, BAC 2025 Sesiunea I M_mate-info, Subiectul III.2"
descriere: "Cum simplifici integrandul, cum scoți pătratul de sub radical cu modul și cum recunoști forma u′/u³ la arie. Subiectul III.2, BAC 2025, Sesiunea I, Varianta 1."
capitol: "Primitive și integrala definită"
sursa: "BAC 2025, Sesiunea I, Varianta 1 — Subiectul III.2"
varianta: "bac-2025-s1-v1"
subiect: "III"
pozitie: 2
subpuncte:
  - "Integrala din x²"
  - "Integrala cu radical"
  - "Aria sub graficul lui g"
punctaj: 15
dificultate: 4
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

**La a)** factorul $\left(x+1\right)^{3}$ e numitorul lui $f$, deci se simplifică și
rămâne $x^{2}$.

**La b)** sub radical e $\dfrac{x^{2}}{\left(x+1\right)^{2}}$, un pătrat perfect. Radicalul
dă $\dfrac{\left|x\right|}{\left|x+1\right|}$, iar pe $\left[0,1\right]$ avem $x\ge 0$
și $x+1>0$. Rămâne $\dfrac{x}{x+1}$, care se integrează după ce scrii $x=\left(x+1\right)-1$.

**La c)** $f\left(e^{x}\right)=\dfrac{e^{2x}}{\left(e^{x}+1\right)^{3}}$. Împărțit la
$e^{x}$, rămâne $\dfrac{e^{x}}{\left(e^{x}+1\right)^{3}}$. Numărătorul e derivata
bazei de la numitor, deci forma e $\dfrac{u'}{u^{3}}$, cu primitiva
$-\dfrac{1}{2u^{2}}$.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Integrala din x²

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Simplifici și integrezi** <span class="punct">3p</span>

$f\left(x\right)\left(x+1\right)^{3}=\dfrac{x^{2}}{\left(x+1\right)^{3}}\cdot\left(x+1\right)^{3}=x^{2}$:

$$
\int_{0}^{3}f\left(x\right)\left(x+1\right)^{3}dx=\int_{0}^{3}x^{2}dx=\frac{x^{3}}{3}\Bigg|_{0}^{3}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Evaluezi** <span class="punct">2p</span>

$$
\frac{27}{3}-0=9
$$

<p class="rezultat">9</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Integrala cu radical

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scoți de sub radical și desfaci fracția** <span class="punct">3p</span>

$f\left(x\right)\left(x+1\right)=\dfrac{x^{2}}{\left(x+1\right)^{2}}$, se simplifică un
$x+1$. Deci

$$
\sqrt{f\left(x\right)\left(x+1\right)}=\frac{\left|x\right|}{\left|x+1\right|}=\frac{x}{x+1},\quad x\in\left[0,1\right]
$$

<span class="atentie">**Modulul.** $\sqrt{\dfrac{x^{2}}{\left(x+1\right)^{2}}}=\dfrac{\left|x\right|}{\left|x+1\right|}$. Pe $\left[0,1\right]$, $x\ge 0$ și $x+1>0$, deci modulele dispar. Scrie asta explicit.</span>

Scrii $\dfrac{x}{x+1}=\dfrac{\left(x+1\right)-1}{x+1}=1-\dfrac{1}{x+1}$:

$$
\int_{0}^{1}\left(1-\frac{1}{x+1}\right)dx=x\Bigg|_{0}^{1}-\ln\left(x+1\right)\Bigg|_{0}^{1}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Evaluezi** <span class="punct">2p</span>

$$
\left(1-0\right)-\left(\ln 2-\ln 1\right)=1-\ln 2
$$

<p class="rezultat">1 − ln 2</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Aria sub graficul lui g

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii $g$ și aria** <span class="punct">3p</span>

$f\left(e^{x}\right)=\dfrac{\left(e^{x}\right)^{2}}{\left(e^{x}+1\right)^{3}}=\dfrac{e^{2x}}{\left(e^{x}+1\right)^{3}}$,
deci

$$
g\left(x\right)=\frac{e^{2x}}{e^{x}\left(e^{x}+1\right)^{3}}=\frac{e^{x}}{\left(e^{x}+1\right)^{3}}
$$

Se simplifică $e^{x}$ din $e^{2x}=e^{x}\cdot e^{x}$. $g>0$ pe $\mathbb{R}$, deci modulul
din formula ariei dispare. Cu $\left(e^{x}+1\right)'=e^{x}$:

$$
\mathcal{A}=\int_{-1}^{1}\left|g\left(x\right)\right|dx=\int_{-1}^{1}\frac{\left(e^{x}+1\right)'}{\left(e^{x}+1\right)^{3}}dx=-\frac{1}{2\left(e^{x}+1\right)^{2}}\Bigg|_{-1}^{1}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Evaluezi** <span class="punct">2p</span>

În $x=1$: $-\dfrac{1}{2\left(e+1\right)^{2}}$.

În $x=-1$: $e^{-1}+1=\dfrac{1+e}{e}$, deci $\left(e^{-1}+1\right)^{2}=\dfrac{\left(e+1\right)^{2}}{e^{2}}$
și $-\dfrac{1}{2\left(e^{-1}+1\right)^{2}}=-\dfrac{e^{2}}{2\left(e+1\right)^{2}}$.

Diferența:

$$
-\frac{1}{2\left(e+1\right)^{2}}+\frac{e^{2}}{2\left(e+1\right)^{2}}=\frac{e^{2}-1}{2\left(e+1\right)^{2}}=\frac{\left(e-1\right)\left(e+1\right)}{2\left(e+1\right)^{2}}=\frac{e-1}{2\left(e+1\right)}
$$

Diferența de pătrate, apoi se simplifică un $e+1$.

<p class="rezultat">Aria = (e − 1)/(2(e + 1))</p>

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $\displaystyle\int_{0}^{3}f\left(x\right)\left(x+1\right)^{3}dx=\int_{0}^{3}x^{2}dx=\frac{x^{3}}{3}\Big|_{0}^{3}=9-0=9$

**b)** $\displaystyle\int_{0}^{1}\sqrt{f\left(x\right)\left(x+1\right)}dx=\int_{0}^{1}\frac{x}{x+1}dx=\int_{0}^{1}\left(1-\frac{1}{x+1}\right)dx=x\Big|_{0}^{1}-\ln\left(x+1\right)\Big|_{0}^{1}=1-\ln 2$

**c)** $g\left(x\right)=\dfrac{e^{x}}{\left(e^{x}+1\right)^{3}}$, $x\in\mathbb{R}$, deci
$\mathcal{A}=\displaystyle\int_{-1}^{1}\left|g\left(x\right)\right|dx=\int_{-1}^{1}\frac{\left(e^{x}+1\right)'}{\left(e^{x}+1\right)^{3}}dx=-\frac{1}{2\left(e^{x}+1\right)^{2}}\Big|_{-1}^{1}=\frac{e^{2}-1}{2\left(e+1\right)^{2}}=\frac{e-1}{2\left(e+1\right)}$

</div>

## Unde se pierd puncte

<div class="greseala">

**Se scrie primitiva lui $\dfrac{u'}{u^{3}}$ ca $\ln u^{3}$.** Doar $\dfrac{u'}{u}$ are
primitiva logaritm. Pentru $u^{-3}$ folosești regula puterii:
$\dfrac{u^{-2}}{-2}=-\dfrac{1}{2u^{2}}$.

</div>

<div class="greseala">

**Se greșește $e^{-1}+1$ la evaluare.** Aduce-l la numitorul $e$ înainte să ridici la
pătrat. Altfel apare $\dfrac{1}{\left(\frac{1}{e}+1\right)^{2}}$ și e ușor să pierzi $e^{2}$.

</div>

<div class="greseala">

**Se integrează $\dfrac{x}{x+1}$ ca $\dfrac{x^{2}}{2}\cdot\ln\left(x+1\right)$.** Primitiva
unui cât nu se obține integrând separat numărătorul și numitorul. Rescrierea $1-\dfrac{1}{x+1}$ e pasul care
lipsește.

</div>
