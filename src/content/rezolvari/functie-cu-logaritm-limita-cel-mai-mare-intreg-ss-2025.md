---
titlu: "Funcție cu logaritm: o limită 0/0 și cel mai mare m întreg"
titluSeo: "f(x) = (2x − 2 + ln x)/x — derivată, limita f(x)/ln x în 1 și cel mai mare m întreg pentru care f(x) = m are soluții, BAC 2025 Sesiunea specială M_mate-info, Subiectul III.1"
descriere: "Derivata unui cât cu logaritm, o limită în 1 cu l'Hôpital sau cu o limită remarcabilă, și cum citești din maximul 2 + 1/e³ cel mai mare întreg atins. Subiectul III.1, BAC 2025, Sesiunea specială, Varianta 3."
capitol: "Studiul funcției și reprezentarea grafică"
sursa: "BAC 2025, Sesiunea specială, Varianta 3 — Subiectul III.1"
varianta: "bac-2025-ss-v3"
subiect: "III"
pozitie: 1
subpuncte:
  - "Derivata"
  - "Limita lui f(x)/ln x în 1"
  - "Cel mai mare m întreg"
punctaj: 15
dificultate: 3
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

**La b), limita e într-un punct finit, $x\to 1$.** Înlocuiești întâi $x=1$ ca să vezi
ce formă ai. $f\left(1\right)=\dfrac{2-2+0}{1}=0$ și $\ln 1=0$. Deci
$\left[\dfrac{0}{0}\right]$, iar l'Hôpital se aplică.

**La c), „cel mai mare întreg $m$ pentru care ecuația are soluții”** înseamnă cel mai
mare întreg din mulțimea valorilor lui $f$. Cum $f$ crește și apoi scade, valoarea
maximă e în punctul critic. Răspunsul e partea întreagă a acestui maxim.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Derivata

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Formula câtului** <span class="punct">3p</span>

Cu $u=2x-2+\ln x$, $u'=2+\dfrac{1}{x}$, $v=x$, $v'=1$:

$$
f'\left(x\right)=\frac{\left(2+\frac{1}{x}\right)\cdot x-\left(2x-2+\ln x\right)\cdot 1}{x^{2}}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Reduci** <span class="punct">2p</span>

$\left(2+\dfrac{1}{x}\right)\cdot x=2x+1$. Se reduce $2x$ cu $-2x$:

$$
f'\left(x\right)=\frac{2x+1-2x+2-\ln x}{x^{2}}=\frac{3-\ln x}{x^{2}},\quad x\in\left(0,+\infty\right)
$$

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Limita lui f(x)/ln x în 1

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Identifici forma și aplici l'Hôpital** <span class="punct">3p</span>

$$
\frac{f\left(x\right)}{\ln x}=\frac{2x-2+\ln x}{x\ln x}
$$

Pentru $x\to 1$: numărătorul tinde la $2-2+\ln 1=0$, numitorul la $1\cdot\ln 1=0$.
Ambele funcții sunt derivabile lângă $1$, iar derivata numitorului,
$\ln x+1$, e nenulă lângă $1$, deci:

$$
\lim_{x\rightarrow 1}\frac{2x-2+\ln x}{x\ln x}=\lim_{x\rightarrow 1}\frac{\left(2x-2+\ln x\right)'}{\left(x\ln x\right)'}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Calculezi** <span class="punct">2p</span>

$\left(x\ln x\right)'=1\cdot\ln x+x\cdot\dfrac{1}{x}=\ln x+1$, derivata unui produs.

$$
\lim_{x\rightarrow 1}\frac{2+\frac{1}{x}}{\ln x+1}=\frac{2+1}{0+1}=3
$$

<p class="rezultat">3</p>

</div>
</div>

<div class="alternativa">

**Fără l'Hôpital.** Împarți fracția în două:
$\dfrac{2x-2+\ln x}{x\ln x}=\dfrac{2}{x}\cdot\dfrac{x-1}{\ln x}+\dfrac{1}{x}$. Cu limita
remarcabilă $\lim_{x\to 1}\dfrac{\ln x}{x-1}=1$, rezultă $2\cdot 1+1=3$. E mai scurt,
dacă știi limita remarcabilă sub forma cu $x\to 1$.

</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Cel mai mare m întreg

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Monotonia** <span class="punct">2p</span>

$x^{2}>0$, deci semnul lui $f'$ e semnul lui $3-\ln x$.

$$
f'\left(x\right)=0\iff\ln x=3\iff x=e^{3}
$$

Pentru $x<e^{3}$, $\ln x<3$ și $f'\left(x\right)>0$; pentru $x>e^{3}$,
$f'\left(x\right)<0$. Deci $f$ este crescătoare pe $\left(0,e^{3}\right]$ și
descrescătoare pe $\left[e^{3},+\infty\right)$.

<div class="variatie-scroll">
<table class="variatie">
<tr><th>x</th><td>0</td><td></td><td>e³</td><td></td><td>+∞</td></tr>
<tr><th>f′(x)</th><td></td><td>+</td><td>0</td><td>−</td><td></td></tr>
<tr><th>f(x)</th><td>−∞</td><td>↗</td><td>2 + 1/e³</td><td>↘</td><td>2</td></tr>
</table>
</div>

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Maximul și concluzia** <span class="punct">3p</span>

$$
f\left(e^{3}\right)=\frac{2e^{3}-2+3}{e^{3}}=\frac{2e^{3}+1}{e^{3}}=2+\frac{1}{e^{3}}
$$

Cum $0<\dfrac{1}{e^{3}}<1$, maximul e în $\left(2,3\right)$.

Limita în $0$: numărătorul tinde la $-2+\left(-\infty\right)=-\infty$, numitorul la
$0$ cu valori pozitive, deci $\lim_{x\to 0}f\left(x\right)=-\infty$.

$f$ e continuă, deci ia toate valorile din $\left(-\infty,2+\dfrac{1}{e^{3}}\right]$ și
niciuna mai mare. Cel mai mare întreg din această mulțime e $2$.

<p class="rezultat">m = 2</p>

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $f'\left(x\right)=\dfrac{\left(2+\frac{1}{x}\right)\cdot x-\left(2x-2+\ln x\right)}{x^{2}}=\dfrac{2x+1-2x+2-\ln x}{x^{2}}=\dfrac{3-\ln x}{x^{2}}$, $x\in\left(0,+\infty\right)$

**b)** $\lim\limits_{x\rightarrow 1}\dfrac{f\left(x\right)}{\ln x}=\lim\limits_{x\rightarrow 1}\dfrac{2x-2+\ln x}{x\ln x}=\lim\limits_{x\rightarrow 1}\dfrac{\left(2x-2+\ln x\right)'}{\left(x\ln x\right)'}=\lim\limits_{x\rightarrow 1}\dfrac{2+\frac{1}{x}}{\ln x+1}=3$

**c)** $f'\left(x\right)=0\iff x=e^{3}$; $f'\ge 0$ pe $\left(0,e^{3}\right]$, deci $f$
crescătoare; $f'\le 0$ pe $\left[e^{3},+\infty\right)$, deci $f$ descrescătoare.

$\lim\limits_{x\rightarrow 0}f\left(x\right)=-\infty$, $f\left(e^{3}\right)=2+\dfrac{1}{e^{3}}\in\left(2,3\right)$
și $f$ este continuă, deci cel mai mare număr întreg $m$ pentru care ecuația are
cel puțin o soluție este $2$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se răspunde $m=3$.** Maximul $2+\dfrac{1}{e^{3}}$ e puțin peste $2$, dar sub $3$.
Valoarea $3$ nu e atinsă, deci $f\left(x\right)=3$ nu are soluții.

</div>

<div class="greseala">

**Se derivează $x\ln x$ ca $\dfrac{1}{x}$.** E un produs, deci
$\left(x\ln x\right)'=\ln x+1$. Cu derivata greșită, limita iese $\dfrac{3}{1}$ tot
din întâmplare în $x=1$, dar corectorul taie rândul.

</div>

<div class="greseala">

**Se aplică l'Hôpital fără să arăți forma $\dfrac{0}{0}$.** Trei puncte sunt pe
rândul cu l'Hôpital. Scrie în ce tind numărătorul și numitorul înainte de a deriva.

</div>
