---
titlu: "Lege de compoziție cu radical: când e asociativă"
titluSeo: "x∗y = √((x²+2)(y²+2)+m) — calcul, ecuație bipătrată și asociativitate pentru m = −2, rezolvare cu barem, Simulare BAC 2026 M_mate-info, Subiectul II.2"
descriere: "Cum calculezi cu o lege definită printr-un radical, cum rezolvi x∗(2x) = 5 printr-o ecuație bipătrată și de ce legea e asociativă doar pentru m = −2. Subiectul II.2, Simularea BAC 2026."
capitol: "Legi de compoziție și grupuri"
sursa: "BAC 2026, Simulare clasa a XII-a — Subiectul II.2"
varianta: "bac-2026-sm-v1"
subiect: "II"
pozitie: 2
subpuncte:
  - "Calculul lui 0∗1 pentru m = 3"
  - "Ecuația x∗(2x) = 5 pentru m = 7"
  - "Asociativitatea"
punctaj: 15
dificultate: 3
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

Legea arată complicat, dar e construită din **aceeași bucată repetată**:
$x^{2}+2$. Notează-o în minte $h\left(x\right)=x^{2}+2$. Atunci

$$
x*y=\sqrt{h\left(x\right)h\left(y\right)+m}
\quad\text{și}\quad
\left(x*y\right)^{2}+2=h\left(x\right)h\left(y\right)+m+2
$$

A doua relație e cheia de la c): când compui de două ori, radicalul dispare prin
ridicare la pătrat, iar $m+2$ apare ca termen în plus. Dacă $m+2=0$, legea
devine „înmulțirea valorilor lui $h$", care e asociativă. Asta îți spune
dinainte care e răspunsul și unde trebuie să te uiți în calcul.

Condiția $m\in\left[-4,+\infty\right)$ din enunț are un motiv: cum
$h\left(x\right)\ge 2$, produsul $h\left(x\right)h\left(y\right)\ge 4$, deci
radicandul e cel puțin $4+m\ge 0$. Legea e bine definită.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Calculul lui $0*1$ pentru $m=3$

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Înlocuiești $x=0$, $y=1$, $m=3$** <span class="punct">3p</span>

$$
0*1=\sqrt{\left(0^{2}+2\right)\left(1^{2}+2\right)+3}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Calculezi** <span class="punct">2p</span>

$$
0*1=\sqrt{2\cdot 3+3}=\sqrt{9}=3
$$

<p class="rezultat">0 ∗ 1 = 3</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Ecuația $x*\left(2x\right)=5$ pentru $m=7$

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii $x*\left(2x\right)$** <span class="punct">2p</span>

Cu $y=2x$, $y^{2}=\left(2x\right)^{2}=4x^{2}$:

$$
x*\left(2x\right)=\sqrt{\left(x^{2}+2\right)\left(4x^{2}+2\right)+7}
$$

<span class="atentie">**Pătratul lui $2x$** este $4x^{2}$, nu $2x^{2}$. Paranteza din enunț, $x*\left(2x\right)$, e acolo tocmai ca să nu uiți să ridici la pătrat și coeficientul.</span>

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Ridici la pătrat și rezolvi ecuația bipătrată** <span class="punct">3p</span>

Ambii membri sunt nenegativi, deci ridicarea la pătrat e o echivalență:

$$
\left(x^{2}+2\right)\left(4x^{2}+2\right)+7=25
$$

Desfaci produsul: $4x^{4}+2x^{2}+8x^{2}+4=4x^{4}+10x^{2}+4$. Atunci

$$
4x^{4}+10x^{2}+4+7=25 \Rightarrow 4x^{4}+10x^{2}-14=0 \;\Big|:2 \Rightarrow 2x^{4}+5x^{2}-7=0
$$

Cu $t=x^{2}\ge 0$: $2t^{2}+5t-7=0$, $\Delta=25+56=81$, deci
$t=\dfrac{-5\pm 9}{4}$, adică $t=1$ sau $t=-\dfrac{7}{2}$.

$t=-\dfrac{7}{2}<0$ nu convine, pentru că $x^{2}$ nu poate fi negativ. Rămâne
$x^{2}=1$.

<p class="rezultat">x = −1 sau x = 1</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Asociativitatea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii cele două compuneri** <span class="punct">3p</span>

Din definiție, $\left(x*y\right)^{2}=\left(x^{2}+2\right)\left(y^{2}+2\right)+m$, deci

$$
\left(x*y\right)*z=\sqrt{\left(\left(x^{2}+2\right)\left(y^{2}+2\right)+m+2\right)\left(z^{2}+2\right)+m}
$$

La fel, $\left(y*z\right)^{2}=\left(y^{2}+2\right)\left(z^{2}+2\right)+m$, deci

$$
x*\left(y*z\right)=\sqrt{\left(x^{2}+2\right)\left(\left(y^{2}+2\right)\left(z^{2}+2\right)+m+2\right)+m}
$$

Legea e asociativă dacă $\left(x*y\right)*z=x*\left(y*z\right)$ pentru orice
$x,y,z$ reali. Radicalii sunt egali exact când radicanzii sunt egali:

$$
\left(\left(x^{2}+2\right)\left(y^{2}+2\right)+m+2\right)\left(z^{2}+2\right)+m=\left(x^{2}+2\right)\left(\left(y^{2}+2\right)\left(z^{2}+2\right)+m+2\right)+m
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Reduci și afli $m$** <span class="punct">2p</span>

Desfaci ambele paranteze exterioare. Produsul
$\left(x^{2}+2\right)\left(y^{2}+2\right)\left(z^{2}+2\right)$ apare în ambii
membri și se reduce, iar $m$ se reduce cu $m$. Rămâne

$$
\left(m+2\right)\left(z^{2}+2\right)=\left(m+2\right)\left(x^{2}+2\right)
\;\Leftrightarrow\;
\left(m+2\right)\left(z^{2}-x^{2}\right)=0
$$

Relația trebuie să aibă loc pentru **orice** $x$ și $z$. Pentru $x=0$, $z=1$ ea
devine $m+2=0$. Invers, pentru $m=-2$ ea e adevărată pentru orice $x,z$.

$m=-2\in\left[-4,+\infty\right)$, deci convine.

<p class="rezultat">m = −2</p>

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $0*1=\sqrt{\left(0^{2}+2\right)\left(1^{2}+2\right)+3}=\sqrt{9}=3$

**b)** $x*\left(2x\right)=\sqrt{\left(x^{2}+2\right)\left(4x^{2}+2\right)+7}=5$, deci
$2x^{4}+5x^{2}-7=0$ și, cum $x$ e număr real, $x^{2}=1$, adică $x=-1$ sau $x=1$.

**c)** $\left(x*y\right)*z=x*\left(y*z\right)$ pentru orice $x,y,z$ reali, de unde
$\left(\left(x^{2}+2\right)\left(y^{2}+2\right)+m+2\right)\left(z^{2}+2\right)+m=\left(x^{2}+2\right)\left(\left(y^{2}+2\right)\left(z^{2}+2\right)+m+2\right)+m$,
adică $\left(m+2\right)\left(z^{2}+2\right)=\left(m+2\right)\left(x^{2}+2\right)$ pentru orice
$x,z$ reali, dacă și numai dacă $m=-2$, care convine.

</div>

## Unde se pierd puncte

<!-- SCHIȚĂ: greșelile de mai jos sunt propuse, nu verificate pe lucrări reale. De confirmat de Isa. -->

<div class="greseala">

**La c), se uită că $\left(x*y\right)^{2}$ scoate radicalul.** Cine scrie
$\left(x*y\right)^{2}+2$ cu radicalul încă înăuntru ajunge la o expresie pe
care nu o mai poate compara.

</div>

<div class="greseala">

**La c), se trage concluzia dintr-un singur exemplu.** Egalitatea pentru
$x=0$, $z=1$ arată că $m=-2$ e **necesar**. Trebuie spus și că pentru $m=-2$
egalitatea are loc pentru orice $x,z$. Asta e „dacă și numai dacă" din barem.

</div>

<div class="greseala">

**La b), se păstrează $t=-\dfrac{7}{2}$.** $x^{2}=-\dfrac{7}{2}$ nu are soluții
reale. Scrie explicit de ce respingi valoarea.

</div>
