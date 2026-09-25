---
titlu: "Funcție cu logaritm: asimptotă oblică și bijectivitate"
titluSeo: "f(x) = 2x + ln(x/(x + 2)) — derivată, asimptota oblică y = 2x și demonstrația că f e bijectivă, BAC 2025 Sesiunea I M_mate-info, Subiectul III.1"
descriere: "Cum derivezi logaritmul unui cât, cum afli m și n pentru asimptota oblică și de ce strict crescătoare plus limitele ±∞ dau bijectivitatea. Subiectul III.1, BAC 2025, Sesiunea I, Varianta 1."
capitol: "Studiul funcției și reprezentarea grafică"
sursa: "BAC 2025, Sesiunea I, Varianta 1 — Subiectul III.1"
varianta: "bac-2025-s1-v1"
subiect: "III"
pozitie: 1
subpuncte:
  - "Derivata"
  - "Asimptota oblică"
  - "f este bijectivă"
punctaj: 15
dificultate: 3
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

**La b), asimptota oblică nu e dată.** O cauți ca $y=mx+n$, cu
$m=\lim\dfrac{f\left(x\right)}{x}$ și $n=\lim\left(f\left(x\right)-mx\right)$. Termenul
$2x$ sugerează $m=2$, iar logaritmul tinde la $\ln 1=0$, deci $n=0$.

**La c), bijectivitatea se împarte în două.** Injectivitatea vine din monotonia
strictă, iar semnul lui $f'$ de la a) e evident: fracție cu toți factorii pozitivi.
Surjectivitatea vine din continuitate plus limitele la capete: dacă funcția pleacă de
la $-\infty$ și ajunge la $+\infty$ fără salturi, trece prin orice valoare reală.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Derivata

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Derivezi logaritmul compus** <span class="punct">3p</span>

Cu $u=\dfrac{x}{x+2}$, $u'=\dfrac{1\cdot\left(x+2\right)-x\cdot 1}{\left(x+2\right)^{2}}=\dfrac{2}{\left(x+2\right)^{2}}$
și $\left(\ln u\right)'=\dfrac{1}{u}\cdot u'$:

$$
f'\left(x\right)=2+\frac{x+2}{x}\cdot\frac{x+2-x}{\left(x+2\right)^{2}}=2+\frac{2}{x\left(x+2\right)}
$$

Se simplifică $x+2$ o dată.

<span class="atentie">**Inversul lui $u$.** $\dfrac{1}{u}=\dfrac{x+2}{x}$, adică fracția întoarsă. Se greșește des scriind $\dfrac{x}{x+2}$ în loc de inversul ei.</span>

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Aduci la același numitor** <span class="punct">2p</span>

$$
f'\left(x\right)=\frac{2x\left(x+2\right)+2}{x\left(x+2\right)}=\frac{2x^{2}+4x+2}{x\left(x+2\right)}=\frac{2\left(x^{2}+2x+1\right)}{x\left(x+2\right)}=\frac{2\left(x+1\right)^{2}}{x\left(x+2\right)}
$$

$x^{2}+2x+1=\left(x+1\right)^{2}$, pătratul unui binom.

</div>
</div>

<div class="alternativa">

**Cu logaritmul desfăcut.** Pe $\left(0,+\infty\right)$,
$\ln\dfrac{x}{x+2}=\ln x-\ln\left(x+2\right)$, deci
$f'\left(x\right)=2+\dfrac{1}{x}-\dfrac{1}{x+2}=2+\dfrac{2}{x\left(x+2\right)}$. Ajungi
în același loc fără derivata compusă.

</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Asimptota oblică

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Panta $m$** <span class="punct">2p</span>

$$
\lim_{x\rightarrow +\infty}\frac{f\left(x\right)}{x}=\lim_{x\rightarrow +\infty}\left(2+\frac{1}{x}\ln\frac{x}{x+2}\right)=2
$$

$\dfrac{x}{x+2}\to 1$, deci $\ln\dfrac{x}{x+2}\to 0$, iar $\dfrac{1}{x}\to 0$. Produsul
lor tinde la $0$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Ordonata la origine $n$** <span class="punct">3p</span>

$$
\lim_{x\rightarrow +\infty}\left(f\left(x\right)-2x\right)=\lim_{x\rightarrow +\infty}\ln\frac{x}{x+2}=\ln 1=0
$$

Se reduce $2x$ cu $-2x$.

<p class="rezultat">y = 2x este asimptota oblică spre +∞</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## f este bijectivă

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Injectivitatea** <span class="punct">2p</span>

Pentru orice $x\in\left(0,+\infty\right)$: $\left(x+1\right)^{2}>0$, $x>0$ și $x+2>0$,
deci $f'\left(x\right)>0$. Prin urmare $f$ este strict crescătoare, deci injectivă.

<div class="variatie-scroll">
<table class="variatie">
<tr><th>x</th><td>0</td><td></td><td>+∞</td></tr>
<tr><th>f′(x)</th><td></td><td>+</td><td></td></tr>
<tr><th>f(x)</th><td>−∞</td><td>↗</td><td>+∞</td></tr>
</table>
</div>

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Surjectivitatea** <span class="punct">3p</span>

Limita în $0$: $2x\to 0$, iar $\dfrac{x}{x+2}\to 0$ cu valori pozitive, deci
$\ln\dfrac{x}{x+2}\to-\infty$. Rezultă $\lim_{x\to 0}f\left(x\right)=-\infty$.

Limita la $+\infty$: $2x\to+\infty$, iar logaritmul tinde la $0$. Rezultă
$\lim_{x\to+\infty}f\left(x\right)=+\infty$.

$f$ e continuă, ca sumă de funcții continue, deci ia toate valorile dintre
$-\infty$ și $+\infty$. Imaginea e $\mathbb{R}$, adică $f$ e surjectivă.

<p class="rezultat">f este bijectivă</p>

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $f'\left(x\right)=2+\dfrac{x+2}{x}\cdot\dfrac{x+2-x}{\left(x+2\right)^{2}}=2+\dfrac{2}{x\left(x+2\right)}=\dfrac{2x^{2}+4x+2}{x\left(x+2\right)}=\dfrac{2\left(x+1\right)^{2}}{x\left(x+2\right)}$, $x\in\left(0,+\infty\right)$

**b)** $\lim\limits_{x\rightarrow +\infty}\dfrac{f\left(x\right)}{x}=\lim\limits_{x\rightarrow +\infty}\left(2+\dfrac{1}{x}\ln\dfrac{x}{x+2}\right)=2$,
$\lim\limits_{x\rightarrow +\infty}\left(f\left(x\right)-2x\right)=\lim\limits_{x\rightarrow +\infty}\ln\dfrac{x}{x+2}=0$,
deci dreapta $y=2x$ este asimptota oblică spre $+\infty$.

**c)** Pentru orice $x\in\left(0,+\infty\right)$, $f'\left(x\right)>0$, deci $f$ este
strict crescătoare, deci injectivă.

$\lim\limits_{x\rightarrow 0}f\left(x\right)=-\infty$, $\lim\limits_{x\rightarrow +\infty}f\left(x\right)=+\infty$
și $f$ este continuă, deci $f$ este surjectivă, de unde $f$ este bijectivă.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se arată doar injectivitatea.** Bijectivă înseamnă injectivă **și** surjectivă.
Monotonia singură dă doar două puncte din cinci.

</div>

<div class="greseala">

**Se uită continuitatea la surjectivitate.** Limitele $\pm\infty$ nu ajung. O funcție
cu salt poate avea aceleași limite și totuși să sară peste unele valori. Continuitatea
e ce face argumentul corect.

</div>

<div class="greseala">

**Se scrie direct $y=2x$, din intuiție.** Termenul $2x$ sugerează panta, dar
asimptota trebuie justificată prin ambele limite. Baremul dă două puncte pentru
$m=2$ și trei pentru $n=0$.

</div>
