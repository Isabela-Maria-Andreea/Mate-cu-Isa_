---
titlu: "Funcție rațională: derivată, asimptotă oblică și numărul de soluții"
titluSeo: "f(x) = (x³−4x)/(x²+5) — derivată, asimptotă oblică y = x și ecuația f(x) = m cu trei soluții, BAC 2026 M_mate-info, Subiectul III.1"
descriere: "Cum factorizezi derivata printr-o substituție, de ce asimptota oblică se verifică prin f(x) − x și cum citești numărul de soluții din extreme. Subiectul III.1, BAC 2026, Sesiunea I, Varianta 3."
capitol: "Studiul funcției și reprezentarea grafică"
sursa: "BAC 2026, Sesiunea I, Varianta 3 — Subiectul III.1"
varianta: "bac-2026-s1-v3"
subiect: "III"
pozitie: 1
subpuncte:
  - "Calculul derivatei"
  - "Asimptota oblică y = x"
  - "Ecuația f(x) = m cu exact trei soluții"
punctaj: 15
dificultate: 4
data: 2026-09-17
ciorna: false
---

## Ce recunoști înainte să calculezi

Cele trei subpuncte formează un lanț strâns: derivata de la **a)** dă punctele
critice, iar valorile funcției în ele, împreună cu limitele de la $\pm\infty$
sugerate de **b)**, dau răspunsul la **c)**. Nimic nu se irosește.

**La a), enunțul îți dă răspunsul.** Ți se cere să *arăți* că derivata are forma
$\dfrac{\left(x^{2}-1\right)\left(x^{2}+20\right)}{\left(x^{2}+5\right)^{2}}$. Asta
înseamnă că nu trebuie să ghicești factorizarea — trebuie doar să ajungi la ea. Iar
trucul e substituția $t=x^{2}$: numărătorul devine $t^{2}+19t-20$, un trinom de
gradul al doilea cu rădăcinile $1$ și $-20$, deci $\left(t-1\right)\left(t+20\right)$.

**La b), asimptota oblică nu se caută, se verifică.** Când ecuația dreptei e dată,
nu mai calculezi $m=\lim\dfrac{f\left(x\right)}{x}$ și $n=\lim\left(f\left(x\right)-mx\right)$.
E suficient să arăți că $\lim_{x\to+\infty}\left(f\left(x\right)-x\right)=0$. Un singur
calcul în loc de două.

**La c), forma derivatei spune totul.** În
$f'\left(x\right)=\dfrac{\left(x^{2}-1\right)\left(x^{2}+20\right)}{\left(x^{2}+5\right)^{2}}$,
factorii $x^{2}+20$ și $\left(x^{2}+5\right)^{2}$ sunt strict pozitivi pentru orice
$x$. Deci **semnul derivatei e dat exclusiv de $x^{2}-1$** — iar ăsta e un semn pe
care îl știi pe de rost.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Calculul derivatei

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Aplici formula derivatei unui cât** <span class="punct">3p</span>

$$
f'\left(x\right)=\frac{\left(3x^{2}-4\right)\left(x^{2}+5\right)-\left(x^{3}-4x\right)\cdot 2x}{\left(x^{2}+5\right)^{2}}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Reduci și factorizezi numărătorul** <span class="punct">2p</span>

$$
\left(3x^{4}+15x^{2}-4x^{2}-20\right)-\left(2x^{4}-8x^{2}\right)=x^{4}+19x^{2}-20
$$

Cu substituția $t=x^{2}$, trinomul $t^{2}+19t-20$ are rădăcinile $1$ și $-20$, deci
se scrie $\left(t-1\right)\left(t+20\right)$. Revenind:

$$
f'\left(x\right)=\frac{x^{4}+19x^{2}-20}{\left(x^{2}+5\right)^{2}}=\frac{\left(x^{2}-1\right)\left(x^{2}+20\right)}{\left(x^{2}+5\right)^{2}}, \quad x\in\mathbb{R}
$$

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Asimptota oblică $y=x$

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii diferența dintre funcție și dreaptă** <span class="punct">2p</span>

$$
\lim_{x\rightarrow +\infty}\left(f\left(x\right)-x\right)=
\lim_{x\rightarrow +\infty}\left(\frac{x^{3}-4x}{x^{2}+5}-x\right)
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Aduci la același numitor și treci la limită** <span class="punct">3p</span>

$$
\frac{x^{3}-4x-x\left(x^{2}+5\right)}{x^{2}+5}=\frac{-9x}{x^{2}+5}
$$

Gradul numitorului e strict mai mare decât al numărătorului, deci

$$
\lim_{x\rightarrow +\infty}\frac{-9x}{x^{2}+5}=0
$$

Prin urmare dreapta de ecuație $y=x$ este asimptotă oblică spre $+\infty$ la
graficul funcției $f$.

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Ecuația $f\left(x\right)=m$ cu exact trei soluții

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Stabilești monotonia** <span class="punct">2p</span>

$f'\left(x\right)=0 \Rightarrow x=-1$ sau $x=1$. Cum semnul derivatei e dat doar de
$x^{2}-1$:

- pentru orice $x\in\left(-\infty,-1\right)$, $f'\left(x\right)>0$, deci $f$ este strict crescătoare;
- pentru orice $x\in\left(-1,1\right)$, $f'\left(x\right)<0$, deci $f$ este strict descrescătoare;
- pentru orice $x\in\left(1,+\infty\right)$, $f'\left(x\right)>0$, deci $f$ este strict crescătoare.

Scris ca tabel de variație — forma pe care o așteaptă corectorul:

<div class="variatie-scroll">
<table class="variatie">
<tr><th>x</th><td>−∞</td><td></td><td>−1</td><td></td><td>1</td><td></td><td>+∞</td></tr>
<tr><th>f′(x)</th><td></td><td>+</td><td>0</td><td>−</td><td>0</td><td>+</td><td></td></tr>
<tr><th>f(x)</th><td>−∞</td><td>↗</td><td>1/2</td><td>↘</td><td>−1/2</td><td>↗</td><td>+∞</td></tr>
</table>
</div>

Tabelul spune dintr-o privire ce are nevoie subpunctul: funcția urcă până la
$\dfrac{1}{2}$, coboară până la $-\dfrac{1}{2}$, apoi urcă din nou. Între cele două
valori, orice dreaptă orizontală taie graficul de trei ori.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Citești valorile extreme și concluzionezi** <span class="punct">3p</span>

$$
\lim_{x\rightarrow -\infty}f\left(x\right)=-\infty, \quad
f\left(-1\right)=\frac{1}{2}, \quad
f\left(1\right)=-\frac{1}{2}, \quad
\lim_{x\rightarrow +\infty}f\left(x\right)=+\infty
$$

Funcția e continuă, crește de la $-\infty$ la $\dfrac{1}{2}$, scade până la
$-\dfrac{1}{2}$, apoi crește la $+\infty$. O dreaptă orizontală $y=m$ taie graficul
în trei puncte exact când $m$ e strict între valoarea minimului local și cea a
maximului local.

<p class="rezultat">m ∈ (−1/2, 1/2)</p>

</div>
</div>

## Ce îți spune baremul

La **a)**, trei puncte se dau pentru simpla aplicare a formulei derivatei unui cât —
înainte de orice reducere. Scrie rândul acela chiar dacă ai de gând să calculezi
mental: e cel mai ieftin punctaj din tot subiectul.

La **b)**, două puncte se acordă doar pentru **scrierea** limitei
$\lim\left(f\left(x\right)-x\right)$, fără să o calculezi. Adică simplul fapt că știi
ce înseamnă asimptotă oblică valorează deja $40\%$ din subpunct.

La **c)**, monotonia ia două puncte, iar valorile extreme plus concluzia iau trei.
Interesant: tabelul de variație singur nu ajunge — punctele mari vin din
$f\left(-1\right)$, $f\left(1\right)$ și limitele la infinit. Fără ele nu poți numi
intervalul, deci nu poți răspunde.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $f'\left(x\right)=\dfrac{\left(3x^{2}-4\right)\left(x^{2}+5\right)-\left(x^{3}-4x\right)\cdot 2x}{\left(x^{2}+5\right)^{2}}=\dfrac{\left(x^{2}-1\right)\left(x^{2}+20\right)}{\left(x^{2}+5\right)^{2}}$

**b)** $\lim\limits_{x\rightarrow +\infty}\left(f\left(x\right)-x\right)=\lim\limits_{x\rightarrow +\infty}\dfrac{-9x}{x^{2}+5}=0$,
deci $y=x$ este asimptotă oblică spre $+\infty$.

**c)** $f'\left(x\right)=0$ pentru $x=\pm 1$; tabelul de variație (sau, în cuvinte: $f$
crește pe $\left(-\infty,-1\right)$, scade pe $\left(-1,1\right)$, crește pe
$\left(1,+\infty\right)$). Cum $f\left(-1\right)=\dfrac{1}{2}$,
$f\left(1\right)=-\dfrac{1}{2}$, limitele la $\pm\infty$ sunt $\mp\infty$ și $f$ e continuă,
ecuația are exact trei soluții pentru $m\in\left(-\dfrac{1}{2},\dfrac{1}{2}\right)$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se greșește ordinea la derivata câtului.** Formula e
$\dfrac{u'v-uv'}{v^{2}}$, nu $\dfrac{uv'-u'v}{v^{2}}$. Cu ordinea inversată obții
derivata cu semn schimbat, iar monotonia de la c) iese pe dos.

</div>

<div class="greseala">

**Se caută asimptota în loc să se verifice.** Calculul lui $m$ și $n$ e corect, dar
dublează munca. Când dreapta e dată în enunț, verifică direct diferența.

</div>

<div class="greseala">

**Se include capătul intervalului.** Pentru $m=\dfrac{1}{2}$ sau $m=-\dfrac{1}{2}$,
dreapta trece exact prin extrem, iar ecuația are **două** soluții, nu trei.
Intervalul e deschis: $\left(-\dfrac{1}{2},\dfrac{1}{2}\right)$.

</div>

<div class="greseala">

**Se uită continuitatea.** Argumentul cu numărul de intersecții se bazează pe
proprietatea lui Darboux. Funcția e continuă pe $\mathbb{R}$ fiind rațională cu
numitor nenul — o propoziție care se scrie în cinci secunde și susține toată
concluzia.

</div>

