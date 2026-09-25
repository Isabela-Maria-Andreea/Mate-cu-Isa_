---
titlu: "Lege de compoziție cu radical: parte stabilă"
titluSeo: "x∗y = √(xy) + 1/√(xy) + (x+y)/2 − 2 pe (0, +∞), [1, +∞) parte stabilă — rezolvare cu barem, Simulare BAC 2025 M_mate-info, Subiectul II.2"
descriere: "Cum scrii √(xy) + 1/√(xy) − 2 ca pătrat supra ceva pozitiv și de ce asta rezolvă partea stabilă dintr-o singură inegalitate. Subiectul II.2, simularea BAC 2025."
capitol: "Legi de compoziție și grupuri"
sursa: "BAC 2025, Simulare clasa a XII-a — Subiectul II.2"
varianta: "bac-2025-sm-v1"
subiect: "II"
pozitie: 2
subpuncte:
  - "Calculul lui 1∗4"
  - "Ecuația x∗x = 1"
  - "[1, +∞) parte stabilă"
punctaj: 15
dificultate: 4
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

Legea are o bucată care apare mereu la bac în forme diferite:

$$
t+\frac{1}{t}-2, \qquad t=\sqrt{xy}>0
$$

Adusă la același numitor, e un pătrat perfect:

$$
t+\frac{1}{t}-2=\frac{t^{2}-2t+1}{t}=\frac{\left(t-1\right)^{2}}{t}\ge 0
$$

E inegalitatea „un număr pozitiv plus inversul lui e cel puțin $2$". De aici
$x*y\ge\dfrac{x+y}{2}$ pentru orice $x,y>0$.

**La c)** asta rezolvă tot: dacă $x,y\ge 1$, media lor e cel puțin $1$, deci și
$x*y\ge 1$. Fără observația cu pătratul, ai încerca să studiezi o funcție de două
variabile, ceea ce la bac nu se face.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Calculul lui 1∗4

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Înlocuiești** <span class="punct">3p</span>

$$
1*4=\sqrt{1\cdot 4}+\frac{1}{\sqrt{1\cdot 4}}+\frac{1+4}{2}-2
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Calculezi** <span class="punct">2p</span>

$\sqrt{4}=2$, deci

$$
2+\frac{1}{2}+\frac{5}{2}-2=\frac{6}{2}=3
$$

Se reduce $2$ cu $-2$, iar $\dfrac{1}{2}+\dfrac{5}{2}=3$.

<p class="rezultat">1∗4 = 3</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Ecuația x∗x = 1

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Calculezi $x*x$** <span class="punct">2p</span>

Pentru $x>0$, $\sqrt{x\cdot x}=\sqrt{x^{2}}=x$, fără modul, pentru că $x$ e pozitiv:

$$
x*x=x+\frac{1}{x}+\frac{2x}{2}-2=2x+\frac{1}{x}-2=\frac{2x^{2}-2x+1}{x}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Rezolvi ecuația** <span class="punct">3p</span>

$$
\frac{2x^{2}-2x+1}{x}=1 \iff 2x^{2}-2x+1=x \iff 2x^{2}-3x+1=0
$$

$\Delta=9-8=1$, deci $x=\dfrac{3\pm 1}{4}$, adică $x=\dfrac{1}{2}$ sau $x=1$.
Ambele sunt în $M=\left(0,+\infty\right)$, deci convin.

<p class="rezultat">x = 1/2 sau x = 1</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## [1, +∞) parte stabilă

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Rescrii legea cu pătratul** <span class="punct">3p</span>

Cu $t=\sqrt{xy}$:

$$
\sqrt{xy}+\frac{1}{\sqrt{xy}}-2=\frac{xy-2\sqrt{xy}+1}{\sqrt{xy}}=\frac{\left(\sqrt{xy}-1\right)^{2}}{\sqrt{xy}}
$$

La numărător, $\left(\sqrt{xy}\right)^{2}=xy$. Deci

$$
x*y=\frac{\left(\sqrt{xy}-1\right)^{2}}{\sqrt{xy}}+\frac{x+y}{2}\ge\frac{x+y}{2},\quad\text{pentru orice } x,y\in M
$$

pentru că fracția are numărătorul un pătrat și numitorul pozitiv.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Concluzia** <span class="punct">2p</span>

Pentru $x,y\in\left[1,+\infty\right)$, $x+y\ge 2$, deci $\dfrac{x+y}{2}\ge 1$. Rezultă
$x*y\ge 1$, adică $x*y\in\left[1,+\infty\right)$.

<p class="rezultat">[1, +∞) este parte stabilă a lui M în raport cu „∗”</p>

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $1*4=\sqrt{1\cdot 4}+\dfrac{1}{\sqrt{1\cdot 4}}+\dfrac{1+4}{2}-2=2+\dfrac{1}{2}+\dfrac{5}{2}-2=3$

**b)** $x*x=\dfrac{2x^{2}-2x+1}{x}$, pentru orice $x\in M$.
$\dfrac{2x^{2}-2x+1}{x}=1$, deci $2x^{2}-3x+1=0$, de unde $x=\dfrac{1}{2}$ sau $x=1$,
care convin.

**c)** $x*y=\dfrac{\left(\sqrt{xy}-1\right)^{2}}{\sqrt{xy}}+\dfrac{x+y}{2}\ge\dfrac{x+y}{2}$,
pentru orice $x,y\in M$.

Pentru $x,y\in\left[1,+\infty\right)$, $\dfrac{x+y}{2}\ge 1$, deci
$x*y\in\left[1,+\infty\right)$, de unde $\left[1,+\infty\right)$ este parte stabilă a
mulțimii $M$ în raport cu legea „$*$".

</div>

## Unde se pierd puncte

<div class="greseala">

**Se verifică stabilitatea pe exemple.** $1*1=1$ și $1*4=3$ arată că merge în două
cazuri, nu în toate. Partea stabilă cere un argument pentru orice $x,y\ge 1$.

</div>

<div class="greseala">

**Se scrie $x*x=x+\dfrac{1}{x}+x-2$ și apoi se uită că $\dfrac{x+x}{2}=x$.** Unii
lasă $2x$ la fracție și obțin $3x+\dfrac{1}{x}-2$. Simplifică fracția înainte.

</div>

<div class="greseala">

**Se ignoră că $\sqrt{xy}>0$.** Inegalitatea $\dfrac{\left(\sqrt{xy}-1\right)^{2}}{\sqrt{xy}}\ge 0$
se bazează pe numitorul pozitiv. Merită scris.

</div>
