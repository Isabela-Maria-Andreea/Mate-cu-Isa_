---
titlu: "Sistem cu parametru: soluție unică și soluții legate între ele"
titluSeo: "Sistem liniar cu matricea A(a), det A(a) = a² + a − 2, soluție unică și sistemul nedeterminat pentru a = 1 — rezolvare cu barem, Simulare BAC 2025 M_mate-info, Subiectul II.1"
descriere: "Când are sistemul soluție unică, cum scrii soluția generală a unui sistem compatibil nedeterminat și cum legi două soluții prin condiții între coordonate. Subiectul II.1, simularea BAC 2025."
capitol: "Sisteme de ecuații liniare"
sursa: "BAC 2025, Simulare clasa a XII-a — Subiectul II.1"
varianta: "bac-2025-sm-v1"
subiect: "II"
pozitie: 1
subpuncte:
  - "Determinantul lui A(0)"
  - "Soluție unică"
  - "Două soluții legate între ele"
punctaj: 15
dificultate: 3
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

Compară matricea cu sistemul, linie cu linie: $A\left(a\right)$ e chiar **matricea
coeficienților**. Prima linie, $\left(a,1,-a\right)$, sunt coeficienții lui $x$, $y$,
$z$ din prima ecuație, și la fel pentru celelalte. Deci tot ce afli despre
$\det\left(A\left(a\right)\right)$ spune ceva direct despre sistem.

**La b)**, un sistem pătratic are soluție unică exact când determinantul matricei
lui e nenul. Calculezi $\det\left(A\left(a\right)\right)$ ca polinom în $a$ și excluzi
rădăcinile.

**La c)**, $a=1$ e una dintre valorile excluse la b), deci sistemul nu mai are
soluție unică. Poate fi incompatibil sau poate avea o infinitate de soluții; rezolvarea arată că e
compatibil nedeterminat. Scrii
soluția generală cu un parametru $\alpha$, apoi condițiile $y_1=x_2$ și $z_1=y_2$
devin un sistem mic în $\alpha_1$ și $\alpha_2$.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Determinantul lui A(0)

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii $A\left(0\right)$ și determinantul** <span class="punct">2p</span>

Cu $a=0$ peste tot:

$$
A\left(0\right)=\begin{pmatrix}0 & 1 & 0\\ 3 & 1 & -2\\ 1 & -3 & 0\end{pmatrix}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Calculezi cu Sarrus** <span class="punct">3p</span>

$$
\det\left(A\left(0\right)\right)=0\cdot 1\cdot 0+1\cdot\left(-2\right)\cdot 1+0\cdot 3\cdot\left(-3\right)-0\cdot 1\cdot 1-0\cdot\left(-2\right)\cdot\left(-3\right)-1\cdot 3\cdot 0
$$

$$
=0-2+0-0-0-0=-2
$$

<p class="rezultat">det(A(0)) = −2</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Soluție unică

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Determinantul ca funcție de $a$** <span class="punct">2p</span>

$$
\det\left(A\left(a\right)\right)=a\cdot 1\cdot a+1\cdot\left(-2\right)\cdot 1+\left(-a\right)\cdot 3\cdot\left(-3\right)-\left(-a\right)\cdot 1\cdot 1-a\cdot\left(-2\right)\cdot\left(-3\right)-1\cdot 3\cdot a
$$

$$
=a^{2}-2+9a+a-6a-3a=a^{2}+a-2
$$

Termenii în $a$: $9a+a-6a-3a=a$.

</div>
</div>

<span class="atentie">**Semnele la diagonala secundară.** Produsul $\left(-a\right)\cdot 1\cdot 1=-a$ se scade, deci devine $+a$. Iar $a\cdot\left(-2\right)\cdot\left(-3\right)=6a$ are doi factori negativi, deci e pozitiv înainte să-l scazi. Aici se greșește cel mai des.</span>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Excluzi rădăcinile** <span class="punct">3p</span>

$$
a^{2}+a-2=\left(a-1\right)\left(a+2\right)=0 \iff a=1 \text{ sau } a=-2
$$

$A\left(a\right)$ e matricea sistemului, deci sistemul are soluție unică dacă și numai
dacă $\det\left(A\left(a\right)\right)\ne 0$.

<p class="rezultat">a ∈ ℝ \ {−2, 1}</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Două soluții legate între ele

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Soluția generală pentru $a=1$** <span class="punct">2p</span>

Sistemul devine

$$
\begin{cases}x+y-z=1\\ 3x+y-2z=1\\ x-3y+z=-3\end{cases}
$$

Scazi prima ecuație din a doua: $\left(3x-x\right)+\left(y-y\right)+\left(-2z+z\right)=0$,
adică $2x-z=0$, deci $z=2x$. Din prima ecuație, $y=1-x+z=1-x+2x=1+x$.

Verifici în a treia: $x-3\left(1+x\right)+2x=x-3-3x+2x=-3$. Se verifică pentru orice
$x$, deci a treia ecuație nu aduce nimic nou. Cu $x=\alpha$:

$$
\left(x,y,z\right)=\left(\alpha,\ \alpha+1,\ 2\alpha\right),\quad \alpha\in\mathbb{R}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Pui condițiile între cele două soluții** <span class="punct">3p</span>

Prima soluție e $\left(\alpha_1,\alpha_1+1,2\alpha_1\right)$, a doua
$\left(\alpha_2,\alpha_2+1,2\alpha_2\right)$.

- $y_1=x_2$: $\alpha_1+1=\alpha_2$;
- $z_1=y_2$: $2\alpha_1=\alpha_2+1$.

Înlocuiești $\alpha_2$ din prima în a doua: $2\alpha_1=\alpha_1+2$, deci $\alpha_1=2$
și $\alpha_2=3$.

<p class="rezultat">(x₁, y₁, z₁) = (2, 3, 4) și (x₂, y₂, z₂) = (3, 4, 6)</p>

Verificare: $y_1=3=x_2$ și $z_1=4=y_2$.

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $A\left(0\right)=\begin{pmatrix}0 & 1 & 0\\ 3 & 1 & -2\\ 1 & -3 & 0\end{pmatrix}$,
$\det\left(A\left(0\right)\right)=0-2+0-0-0-0=-2$

**b)** $\det\left(A\left(a\right)\right)=a^{2}+a-2$.
$\det\left(A\left(a\right)\right)=0\iff a=-2$ sau $a=1$, deci sistemul are soluție
unică dacă și numai dacă $a\in\mathbb{R}\setminus\left\{-2,1\right\}$.

**c)** Pentru $a=1$, soluțiile sistemului sunt $\left(\alpha,\alpha+1,2\alpha\right)$,
cu $\alpha\in\mathbb{R}$.

$\alpha_1+1=\alpha_2$ și $2\alpha_1=\alpha_2+1$, de unde $\alpha_1=2$ și $\alpha_2=3$,
deci soluțiile sunt $\left(2,3,4\right)$ și $\left(3,4,6\right)$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se răspunde la b) cu $\left\{-2,1\right\}$.** Acestea sunt valorile pentru care
determinantul **se anulează**, deci exact cele pentru care soluția nu mai e unică.
Răspunsul e complementul lor.

</div>

<div class="greseala">

**La c) se caută o singură soluție cu Cramer.** Pentru $a=1$ determinantul e $0$,
iar Cramer nu se aplică. Dacă nu observi legătura cu b), rămâi blocat.

</div>

<div class="greseala">

**Se inversează condițiile.** $y_1=x_2$ leagă a doua coordonată a primei soluții de
prima coordonată a celei de-a doua. Citit invers, obții alte valori pentru $\alpha$.

</div>
