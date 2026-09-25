---
titlu: "Lege de compoziție: element neutru și simetric"
titluSeo: "x∗y = 5(x − 1)(y − 1) + 1, elementul neutru 6/5 și simetricul lui n egal cu m/25 — rezolvare cu barem, BAC 2025 Sesiunea specială M_mate-info, Subiectul II.2"
descriere: "Cum verifici elementul neutru pe ambele părți și cum ecuația simetricului devine (m − 25)(n − 1) = 1 în numere naturale. Subiectul II.2, BAC 2025, Sesiunea specială, Varianta 3."
capitol: "Legi de compoziție și grupuri"
sursa: "BAC 2025, Sesiunea specială, Varianta 3 — Subiectul II.2"
varianta: "bac-2025-ss-v3"
subiect: "II"
pozitie: 2
subpuncte:
  - "Calculul lui 1∗3"
  - "Elementul neutru"
  - "Simetricul lui n"
punctaj: 15
dificultate: 3
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

Legea e dată deja în forma factorizată, $5\left(x-1\right)\left(y-1\right)+1$. Asta
spune că $1$ e un element „absorbant”: $1*y=0+1=1$ pentru orice $y$. Subpunctul a)
e un caz particular.

**La b)** ți se dă neutrul, trebuie doar verificat. Cu $y=\dfrac{6}{5}$, factorul
$y-1=\dfrac{1}{5}$ se simplifică exact cu $5$ și rămâne $x-1+1=x$.

**La c)**, „$\dfrac{m}{25}$ e simetricul lui $n$” înseamnă că îl compui cu $n$ și
obții neutrul, $\dfrac{6}{5}$. Rezultă o ecuație cu produs de doi întregi egal cu
$1$, deci două cazuri.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Calculul lui 1∗3

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Înlocuiești** <span class="punct">3p</span>

$$
1*3=5\left(1-1\right)\left(3-1\right)+1
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Calculezi** <span class="punct">2p</span>

Primul factor e $0$, deci tot produsul e $0$:

$$
0+1=1
$$

<p class="rezultat">1∗3 = 1</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Elementul neutru

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Compui la dreapta** <span class="punct">2p</span>

$$
x*\frac{6}{5}=5\left(x-1\right)\left(\frac{6}{5}-1\right)+1=5\left(x-1\right)\cdot\frac{1}{5}+1=x-1+1=x
$$

Se simplifică $5$ cu $\dfrac{1}{5}$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Compui la stânga și concluzionezi** <span class="punct">3p</span>

$$
\frac{6}{5}*x=5\left(\frac{6}{5}-1\right)\left(x-1\right)+1=x-1+1=x
$$

Ambele egalități au loc pentru orice $x$ real.

<p class="rezultat">e = 6/5 este elementul neutru</p>

</div>
</div>

<div class="alternativa">

**Prin comutativitate.** $5\left(x-1\right)\left(y-1\right)$ nu se schimbă dacă
inversezi $x$ și $y$, deci legea e comutativă. Odată arătat că $x*\dfrac{6}{5}=x$,
cealaltă egalitate rezultă. Trebuie însă spus explicit că legea e comutativă.

</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Simetricul lui n

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii condiția de simetric** <span class="punct">3p</span>

$$
\frac{m}{25}*n=n*\frac{m}{25}=\frac{6}{5}
$$

$$
5\left(\frac{m}{25}-1\right)\left(n-1\right)+1=\frac{6}{5}
$$

Scazi $1$: $5\left(\dfrac{m}{25}-1\right)\left(n-1\right)=\dfrac{1}{5}$. Scrii
$\dfrac{m}{25}-1=\dfrac{m-25}{25}$:

$$
5\cdot\frac{m-25}{25}\left(n-1\right)=\frac{1}{5} \iff \frac{\left(m-25\right)\left(n-1\right)}{5}=\frac{1}{5}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Rezolvi în numere naturale** <span class="punct">2p</span>

$$
\left(m-25\right)\left(n-1\right)=1
$$

$m-25$ și $n-1$ sunt întregi cu produsul $1$, deci ambii $1$ sau ambii $-1$.

- $m-25=1$ și $n-1=1$: $m=26$, $n=2$.
- $m-25=-1$ și $n-1=-1$: $m=24$, $n=0$.

Ambele perechi au $m,n$ naturale.

<p class="rezultat">(m, n) ∈ {(24, 0), (26, 2)}</p>

</div>
</div>

<span class="atentie">**$n=0$ e natural.** Enunțul cere numere naturale, iar perechea $\left(24,0\right)$ e validă: simetricul lui $0$ e $\dfrac{24}{25}$. Cine exclude $0$ pierde o pereche.</span>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $1*3=5\left(1-1\right)\left(3-1\right)+1=0+1=1$

**b)** $x*\dfrac{6}{5}=5\left(x-1\right)\left(\dfrac{6}{5}-1\right)+1=x-1+1=x$ și
$\dfrac{6}{5}*x=5\left(\dfrac{6}{5}-1\right)\left(x-1\right)+1=x$, pentru orice
număr real $x$, deci $e=\dfrac{6}{5}$ este elementul neutru.

**c)** $\dfrac{m}{25}*n=n*\dfrac{m}{25}=\dfrac{6}{5}$, de unde
$5\left(\dfrac{m}{25}-1\right)\left(n-1\right)+1=\dfrac{6}{5}$.

$\left(m-25\right)\left(n-1\right)=1$ și, cum $m$ și $n$ sunt numere naturale,
obținem perechile $\left(24,0\right)$ și $\left(26,2\right)$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se compune cu $0$ în loc de neutru.** Simetricul lui $n$ e elementul $n'$ cu
$n*n'=e$. Aici $e=\dfrac{6}{5}$, nu $0$. Cu $0$ ecuația devine
$\left(m-25\right)\left(n-1\right)=-5$, care are alte soluții.

</div>

<div class="greseala">

**Se verifică neutrul doar la dreapta, fără a menționa comutativitatea.** Definiția
cere ambele egalități. Baremul le punctează separat, cu 2 și 3 puncte.

</div>

<div class="greseala">

**Se greșește la $5\cdot\dfrac{m-25}{25}$.** Rezultatul e $\dfrac{m-25}{5}$, nu
$5\left(m-25\right)$. Scrie simplificarea pe un rând separat.

</div>
