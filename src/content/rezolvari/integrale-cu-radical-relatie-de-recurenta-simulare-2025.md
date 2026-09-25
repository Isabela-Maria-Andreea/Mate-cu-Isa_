---
titlu: "Integrale cu radical și o relație de recurență"
titluSeo: "f(x) = x²/(2x² + 1): integrala lui √f(x) și relația (n + 1)Iₙ − Iₙ₊₁ — rezolvare cu barem, Simulare BAC 2025 M_mate-info, Subiectul III.2"
descriere: "Cum scoți x² de sub radical fără să uiți modulul, cum simplifici f(√eˣ) și de ce combinația (n + 1)Iₙ − Iₙ₊₁ ascunde o derivată. Subiectul III.2, simularea BAC 2025."
capitol: "Primitive și integrala definită"
sursa: "BAC 2025, Simulare clasa a XII-a — Subiectul III.2"
varianta: "bac-2025-sm-v1"
subiect: "III"
pozitie: 2
subpuncte:
  - "Integrala din x²"
  - "Integrala lui √f(x)"
  - "Relația dintre Iₙ și Iₙ₊₁"
punctaj: 15
dificultate: 5
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

**La a)** factorul $2x^{2}+1$ e chiar numitorul lui $f$, deci se simplifică și rămâne
$x^{2}$.

**La b)** $\sqrt{f\left(x\right)}=\dfrac{\sqrt{x^{2}}}{\sqrt{2x^{2}+1}}$. Numărătorul e
$\left|x\right|$, care pe $\left[0,2\right]$ e $x$. Rămâne $\dfrac{x}{\sqrt{2x^{2}+1}}$,
unde $x$ e aproape derivata lui $2x^{2}+1$. E forma $\dfrac{u'}{2\sqrt{u}}$, a cărei
primitivă e $\sqrt{u}$.

**La c)** începi cu $f\left(\sqrt{e^{x}}\right)$. Cum $\left(\sqrt{e^{x}}\right)^{2}=e^{x}$:

$$
f\left(\sqrt{e^{x}}\right)=\frac{e^{x}}{2e^{x}+1}, \qquad \frac{1}{f\left(\sqrt{e^{x}}\right)}=\frac{2e^{x}+1}{e^{x}}=2+e^{-x}
$$

Deci $I_n=\displaystyle\int_{0}^{1}x^{n}\left(2+e^{-x}\right)dx$. Combinația
$\left(n+1\right)x^{n}-x^{n+1}$, înmulțită cu $e^{-x}$, e exact derivata lui
$x^{n+1}e^{-x}$. Asta e ideea din spatele relației.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Integrala din x²

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Simplifici și integrezi** <span class="punct">3p</span>

$\left(2x^{2}+1\right)f\left(x\right)=\left(2x^{2}+1\right)\cdot\dfrac{x^{2}}{2x^{2}+1}=x^{2}$,
se simplifică $2x^{2}+1$, care e nenul:

$$
\int_{-1}^{2}\left(2x^{2}+1\right)f\left(x\right)dx=\int_{-1}^{2}x^{2}dx=\frac{x^{3}}{3}\Bigg|_{-1}^{2}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Evaluezi** <span class="punct">2p</span>

$$
\frac{8}{3}-\left(-\frac{1}{3}\right)=\frac{8}{3}+\frac{1}{3}=3
$$

<p class="rezultat">3</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Integrala lui √f(x)

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scoți de sub radical și recunoști forma** <span class="punct">3p</span>

$$
\sqrt{f\left(x\right)}=\frac{\sqrt{x^{2}}}{\sqrt{2x^{2}+1}}=\frac{\left|x\right|}{\sqrt{2x^{2}+1}}=\frac{x}{\sqrt{2x^{2}+1}},\quad x\in\left[0,2\right]
$$

<span class="atentie">**Modulul.** $\sqrt{x^{2}}=\left|x\right|$, nu $x$. Aici $x\ge 0$ pe interval, deci modulul dispare, dar trebuie spus. Pe un interval cu valori negative, rezultatul ar fi altul.</span>

Cum $\left(2x^{2}+1\right)'=4x$, scrii $x=\dfrac{1}{2}\cdot\dfrac{4x}{2}$:

$$
\int_{0}^{2}\frac{x}{\sqrt{2x^{2}+1}}dx=\frac{1}{2}\int_{0}^{2}\frac{\left(2x^{2}+1\right)'}{2\sqrt{2x^{2}+1}}dx=\frac{1}{2}\sqrt{2x^{2}+1}\Bigg|_{0}^{2}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Evaluezi** <span class="punct">2p</span>

$\sqrt{2\cdot 4+1}=\sqrt{9}=3$ și $\sqrt{1}=1$:

$$
\frac{3}{2}-\frac{1}{2}=1
$$

<p class="rezultat">1</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Relația dintre Iₙ și Iₙ₊₁

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Simplifici $I_n$ și scrii combinația** <span class="punct">2p</span>

Din $\dfrac{1}{f\left(\sqrt{e^{x}}\right)}=2+e^{-x}$:

$$
I_n=\int_{0}^{1}x^{n}\left(2+e^{-x}\right)dx
$$

Prin liniaritatea integralei:

$$
\left(n+1\right)I_n-I_{n+1}=\int_{0}^{1}\left(\left(n+1\right)x^{n}-x^{n+1}\right)\left(2+e^{-x}\right)dx
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Separi partea cu $2$ de cea cu $e^{-x}$** <span class="punct">3p</span>

Partea cu $2$ se integrează direct:

$$
\int_{0}^{1}2\left(\left(n+1\right)x^{n}-x^{n+1}\right)dx=2x^{n+1}\Bigg|_{0}^{1}-\frac{2x^{n+2}}{n+2}\Bigg|_{0}^{1}=2-\frac{2}{n+2}=\frac{2\left(n+2\right)-2}{n+2}=\frac{2\left(n+1\right)}{n+2}
$$

Pentru partea cu $e^{-x}$, derivata unui produs:

$$
\left(x^{n+1}e^{-x}\right)'=\left(n+1\right)x^{n}e^{-x}-x^{n+1}e^{-x}=\left(\left(n+1\right)x^{n}-x^{n+1}\right)e^{-x}
$$

$\left(e^{-x}\right)'=-e^{-x}$ dă minusul. Deci

$$
\int_{0}^{1}\left(\left(n+1\right)x^{n}-x^{n+1}\right)e^{-x}dx=x^{n+1}e^{-x}\Bigg|_{0}^{1}=\frac{1}{e}-0=\frac{1}{e}
$$

Adunând:

<p class="rezultat">(n + 1)Iₙ − Iₙ₊₁ = 2(n + 1)/(n + 2) + 1/e</p>

</div>
</div>

<div class="alternativa">

**Prin părți, pe $I_{n+1}$.** Poți integra prin părți partea $\displaystyle\int_{0}^{1}x^{n+1}e^{-x}dx$,
cu $\left(-e^{-x}\right)'=e^{-x}$, și obții
$-\dfrac{1}{e}+\left(n+1\right)\displaystyle\int_{0}^{1}x^{n}e^{-x}dx$. Același
rezultat, doar că trebuie ținută evidența a două integrale. Recunoașterea derivatei
lui $x^{n+1}e^{-x}$ e mai scurtă.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $\displaystyle\int_{-1}^{2}\left(2x^{2}+1\right)f\left(x\right)dx=\int_{-1}^{2}x^{2}dx=\frac{x^{3}}{3}\Big|_{-1}^{2}=\frac{8}{3}+\frac{1}{3}=3$

**b)** $\displaystyle\int_{0}^{2}\sqrt{f\left(x\right)}dx=\int_{0}^{2}\frac{x}{\sqrt{2x^{2}+1}}dx=\frac{1}{2}\int_{0}^{2}\frac{\left(2x^{2}+1\right)'}{2\sqrt{2x^{2}+1}}dx=\frac{1}{2}\sqrt{2x^{2}+1}\Big|_{0}^{2}=\frac{3}{2}-\frac{1}{2}=1$

**c)** $I_n=\displaystyle\int_{0}^{1}x^{n}\left(2+e^{-x}\right)dx$,
$\left(n+1\right)I_n-I_{n+1}=\displaystyle\int_{0}^{1}\left(\left(n+1\right)x^{n}-x^{n+1}\right)\left(2+e^{-x}\right)dx=$

$=2x^{n+1}\Big|_{0}^{1}-\dfrac{2x^{n+2}}{n+2}\Big|_{0}^{1}+\displaystyle\int_{0}^{1}\left(x^{n+1}e^{-x}\right)'dx=2-\dfrac{2}{n+2}+x^{n+1}e^{-x}\Big|_{0}^{1}=\dfrac{2\left(n+1\right)}{n+2}+\dfrac{1}{e}$

</div>

## Unde se pierd puncte

<div class="greseala">

**Se scrie $f\left(\sqrt{e^{x}}\right)=\dfrac{\sqrt{e^{x}}}{2\sqrt{e^{x}}+1}$.** Se
înlocuiește $x$ cu $\sqrt{e^{x}}$ în $x$, nu în $x^{2}$. În $f$ apare $x^{2}$, deci
$\left(\sqrt{e^{x}}\right)^{2}=e^{x}$.

</div>

<div class="greseala">

**Se uită factorul $\dfrac{1}{2}$ la b).** $\left(\sqrt{2x^{2}+1}\right)'=\dfrac{2x}{\sqrt{2x^{2}+1}}$,
nu $\dfrac{x}{\sqrt{2x^{2}+1}}$. Fără corecție, rezultatul iese $2$.

</div>

<div class="greseala">

**Se calculează separat $I_n$ și $I_{n+1}$.** Nu e nevoie, și calculul lor în funcție
de $n$ e lung. Relația iese direct lucrând cu combinația întreagă sub același semn de
integrală.

</div>
