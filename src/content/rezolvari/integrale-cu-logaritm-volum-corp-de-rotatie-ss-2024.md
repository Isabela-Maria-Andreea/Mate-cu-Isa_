---
titlu: "Integrale cu x ln x și volumul unui corp de rotație"
titluSeo: "f(x) = x + 1 + x ln x — integrala 6, integrarea prin părți a lui x ln x și volumul corpului de rotație egal cu 7π/(24a), deci a = 8, BAC 2024 Sesiunea specială M_mate-info, Subiectul III.2"
descriere: "Trei integrale în care f − x ln x = x + 1 face aproape toată treaba: o integrală de polinom, x ln x prin părți și volumul π∫g² cu g = 1/(x + 1)². Subiectul III.2, BAC 2024, Sesiunea specială, Varianta 9."
capitol: "Primitive și integrala definită"
sursa: "BAC 2024, Sesiunea specială, Varianta 9 — Subiectul III.2"
varianta: "bac-2024-ss-v9"
subiect: "III"
pozitie: 2
subpuncte:
  - "Integrala lui f − x ln x"
  - "Integrala lui x ln x"
  - "Volumul corpului de rotație"
punctaj: 15
dificultate: 3
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

$f\left(x\right)=x+1+x\ln x$ are două bucăți: $x+1$ și $x\ln x$. Fiecare subpunct
scade una dintre ele din $f$.

**La a) și c)** rămâne $x+1$. La a) îl integrezi direct. La c) $g$ devine
$\dfrac{1}{\left(x+1\right)^{2}}$, o putere a lui $x+1$.

**La b)** rămâne $x\ln x$: polinom înmulțit cu logaritm. Aici, spre deosebire
de exponențială, **logaritmul se derivează** și polinomul se integrează, pentru
că $\ln x$ nu are o primitivă simplă, dar derivata lui, $\dfrac{1}{x}$, se
simplifică cu puterea lui $x$.

**La c)**, volumul corpului obținut prin rotirea graficului lui $g$ în jurul
axei $Ox$ e $V=\pi\displaystyle\int_{a}^{b}g^{2}\left(x\right)dx$. Atenție la
pătrat: $g$ are deja un pătrat la numitor, deci $g^{2}$ are puterea a patra.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Integrala lui f − x ln x

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Simplifici și integrezi** <span class="punct">3p</span>

Se reduce $x\ln x$ cu $-x\ln x$, rămâne $x+1$:

$$
\int_{1}^{3}\left(f\left(x\right)-x\ln x\right)dx=\int_{1}^{3}\left(x+1\right)dx=\left.\left(\frac{x^{2}}{2}+x\right)\right|_{1}^{3}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Leibniz–Newton** <span class="punct">2p</span>

În $3$: $\dfrac{9}{2}+3=\dfrac{15}{2}$. În $1$: $\dfrac{1}{2}+1=\dfrac{3}{2}$.

$$
\frac{15}{2}-\frac{3}{2}=\frac{12}{2}=6
$$

<p class="rezultat">∫₁³ (f(x) − x ln x) dx = 6</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Integrala lui x ln x

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Integrezi prin părți** <span class="punct">3p</span>

$f\left(x\right)-x-1=x\ln x$. Scrii $x=\left(\dfrac{x^{2}}{2}\right)'$ și
derivezi logaritmul, $\left(\ln x\right)'=\dfrac{1}{x}$:

$$
\int_{1}^{e}x\ln x\,dx=\int_{1}^{e}\left(\frac{x^{2}}{2}\right)'\ln x\,dx=\left.\frac{x^{2}}{2}\ln x\right|_{1}^{e}-\int_{1}^{e}\frac{x^{2}}{2}\cdot\frac{1}{x}dx
$$

În ultima integrală se simplifică $x$: $\dfrac{x^{2}}{2}\cdot\dfrac{1}{x}=\dfrac{x}{2}$,
cu primitiva $\dfrac{x^{2}}{4}$:

$$
\int_{1}^{e}x\ln x\,dx=\left.\frac{x^{2}}{2}\ln x\right|_{1}^{e}-\left.\frac{x^{2}}{4}\right|_{1}^{e}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Înlocuiești limitele** <span class="punct">2p</span>

Primul termen: în $e$, $\dfrac{e^{2}}{2}\cdot\ln e=\dfrac{e^{2}}{2}$; în $1$,
$\dfrac{1}{2}\cdot\ln 1=0$. Al doilea: $\dfrac{e^{2}}{4}-\dfrac{1}{4}$.

$$
\frac{e^{2}}{2}-\left(\frac{e^{2}}{4}-\frac{1}{4}\right)=\frac{e^{2}}{2}-\frac{e^{2}}{4}+\frac{1}{4}=\frac{2e^{2}-e^{2}+1}{4}=\frac{e^{2}+1}{4}
$$

<p class="rezultat">∫₁ᵉ (f(x) − x − 1) dx = (e² + 1)/4</p>

</div>
</div>

<span class="atentie">**Paranteza după minus.** Al doilea termen e o diferență, $\dfrac{e^{2}}{4}-\dfrac{1}{4}$, scăzută în întregime. Fără paranteză, $\dfrac{1}{4}$ iese cu minus și rezultatul devine $\dfrac{e^{2}-1}{4}$.</span>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Volumul corpului de rotație

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii $g$ și calculezi volumul** <span class="punct">3p</span>

Din a), $f\left(x\right)-x\ln x=x+1$, deci
$g\left(x\right)=\dfrac{1}{\left(x+1\right)^{2}}$ pe $\left[1,3\right]$. Atunci
$g^{2}\left(x\right)=\dfrac{1}{\left(x+1\right)^{4}}=\left(x+1\right)^{-4}$, cu
primitiva $\dfrac{\left(x+1\right)^{-3}}{-3}=-\dfrac{1}{3\left(x+1\right)^{3}}$:

$$
V=\pi\int_{1}^{3}g^{2}\left(x\right)dx=\pi\int_{1}^{3}\frac{1}{\left(x+1\right)^{4}}dx=\left.\pi\left(-\frac{1}{3\left(x+1\right)^{3}}\right)\right|_{1}^{3}
$$

În $3$: $-\dfrac{1}{3\cdot 64}=-\dfrac{1}{192}$. În $1$:
$-\dfrac{1}{3\cdot 8}=-\dfrac{1}{24}=-\dfrac{8}{192}$. Diferența:

$$
V=\pi\left(-\frac{1}{192}+\frac{8}{192}\right)=\frac{7\pi}{192}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Afli $a$** <span class="punct">2p</span>

$$
\frac{7\pi}{192}=\frac{7\pi}{24a}\ \Rightarrow\ 24a=192
$$

Se simplifică $7\pi$ din ambii membri.

<p class="rezultat">a = 8</p>

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $\displaystyle\int_{1}^{3}\left(f\left(x\right)-x\ln x\right)dx=\int_{1}^{3}\left(x+1\right)dx=\left.\left(\frac{x^{2}}{2}+x\right)\right|_{1}^{3}=\frac{15}{2}-\frac{3}{2}=6$

**b)** $\displaystyle\int_{1}^{e}\left(f\left(x\right)-x-1\right)dx=\int_{1}^{e}\left(\frac{x^{2}}{2}\right)'\ln x\,dx=\left.\frac{x^{2}}{2}\ln x\right|_{1}^{e}-\left.\frac{x^{2}}{4}\right|_{1}^{e}=\frac{e^{2}}{2}-\frac{e^{2}}{4}+\frac{1}{4}=\frac{e^{2}+1}{4}$

**c)** $g\left(x\right)=\dfrac{1}{\left(x+1\right)^{2}}$, $x\in\left[1,3\right]$,
deci $\displaystyle V=\pi\int_{1}^{3}g^{2}\left(x\right)dx=\pi\int_{1}^{3}\frac{1}{\left(x+1\right)^{4}}dx=\left.\pi\left(-\frac{1}{3\left(x+1\right)^{3}}\right)\right|_{1}^{3}=\frac{7\pi}{192}$

$\dfrac{7\pi}{192}=\dfrac{7\pi}{24a}$, de unde obținem $a=8$.

</div>

## Unde se pierd puncte

<div class="greseala">

**La c), se integrează $g$ în loc de $g^{2}$.** Formula volumului are pătratul
funcției. Cu $\displaystyle\pi\int_{1}^{3}\frac{dx}{\left(x+1\right)^{2}}$ obții
$\dfrac{\pi}{4}$ și un $a$ greșit.

</div>

<div class="greseala">

**La b), se alege invers:** se derivează $x$ și se integrează $\ln x$. Primitiva
lui $\ln x$ e $x\ln x-x$, iar integrala nouă e mai grea decât cea de la care ai
pornit.

</div>

<div class="greseala">

**La c), se scrie primitiva lui $\left(x+1\right)^{-4}$ ca
$\dfrac{\left(x+1\right)^{-5}}{-5}$.** La integrare exponentul crește cu $1$:
$-4+1=-3$.

</div>
