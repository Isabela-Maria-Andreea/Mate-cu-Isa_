---
titlu: "Lege de compoziție: factorizare și perechi de întregi"
titluSeo: "x∗y = x²y + xy² + x + y = (x + y)(xy + 1), ecuația m∗n = 1 în numere întregi — rezolvare cu barem, BAC 2025 Model M_mate-info, Subiectul II.2"
descriere: "Cum descoperi factorizarea (x + y)(xy + 1) și de ce un produs de întregi egal cu 1 lasă doar două cazuri. Subiectul II.2, modelul BAC 2025."
capitol: "Legi de compoziție și grupuri"
sursa: "BAC 2025, Model — Subiectul II.2"
varianta: "bac-2025-model"
subiect: "II"
pozitie: 2
subpuncte:
  - "Calculul lui 1∗3"
  - "Ecuația x∗(2/x) = 9x"
  - "Perechi de întregi cu m∗n = 1"
punctaj: 15
dificultate: 3
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

Legea arată ca o sumă de patru termeni fără legătură, dar se factorizează.
Grupează termenii doi câte doi:

$$
x^{2}y+xy^{2}=xy\left(x+y\right), \qquad x+y=1\cdot\left(x+y\right)
$$

Ambele grupe îl conțin pe $x+y$, deci

$$
x*y=\left(x+y\right)\left(xy+1\right)
$$

La a) și b) nu ai nevoie de ea. **La c) e tot exercițiul**: o ecuație în întregi
de forma „produs $=1$" se rezolvă pe cazuri, pentru că $1$ are foarte puțini divizori.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Calculul lui 1∗3

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Înlocuiești** <span class="punct">3p</span>

$$
1*3=1^{2}\cdot 3+1\cdot 3^{2}+1+3
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Calculezi** <span class="punct">2p</span>

$$
3+9+4=16
$$

<p class="rezultat">1∗3 = 16</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Ecuația x∗(2/x) = 9x

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Calculezi $x*\dfrac{2}{x}$** <span class="punct">3p</span>

Cu $y=\dfrac{2}{x}$, $x\ne 0$:

$$
x*\frac{2}{x}=x^{2}\cdot\frac{2}{x}+x\cdot\frac{4}{x^{2}}+x+\frac{2}{x}=2x+\frac{4}{x}+x+\frac{2}{x}
$$

Se simplifică $x^{2}$ cu $x$ în primul termen și $x$ cu $x^{2}$ în al doilea. Aduni
termenii asemenea:

$$
3x+\frac{6}{x}=\frac{3x^{2}+6}{x}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Rezolvi ecuația** <span class="punct">2p</span>

$$
\frac{3x^{2}+6}{x}=9x \iff 3x^{2}+6=9x^{2} \iff 6x^{2}=6 \iff x^{2}=1
$$

Înmulțirea cu $x$ e permisă pentru că $x\ne 0$. Ambele rădăcini sunt nenule, deci
convin.

<p class="rezultat">x = −1 sau x = 1</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Perechi de întregi cu m∗n = 1

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Factorizezi legea** <span class="punct">2p</span>

$$
m*n=m^{2}n+mn^{2}+m+n=mn\left(m+n\right)+\left(m+n\right)=\left(m+n\right)\left(mn+1\right)
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Discuți cazurile** <span class="punct">3p</span>

$m+n$ și $mn+1$ sunt întregi cu produsul $1$, deci sunt fie ambii $1$, fie ambii $-1$.

**Cazul 1:** $m+n=1$ și $mn+1=1$, adică $mn=0$. Unul dintre ele e $0$, celălalt e
$1$. Cu $m\le n$: $\left(0,1\right)$.

**Cazul 2:** $m+n=-1$ și $mn+1=-1$, adică $mn=-2$. $m$ și $n$ sunt rădăcinile
ecuației $t^{2}+t-2=0$, adică $\left(t-1\right)\left(t+2\right)=0$, deci $t=1$ sau
$t=-2$. Cu $m\le n$: $\left(-2,1\right)$.

<p class="rezultat">(m, n) ∈ {(0, 1), (−2, 1)}</p>

</div>
</div>

<span class="atentie">**Nu uita cazul cu $-1$.** Produsul a doi întregi e $1$ și când ambii sunt $-1$. Cine discută doar cazul pozitiv găsește o singură pereche.</span>

## Ce îți spune baremul

La c), factorizarea valorează două puncte chiar dacă nu duci discuția până la capăt.
Scrie-o pe un rând separat, cu grupările vizibile.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $1*3=1^{2}\cdot 3+1\cdot 3^{2}+1+3=3+9+4=16$

**b)** $x*\dfrac{2}{x}=\dfrac{3x^{2}+6}{x}$, pentru orice $x\ne 0$.
$\dfrac{3x^{2}+6}{x}=9x$, de unde $x=-1$ sau $x=1$, care convin.

**c)** $m*n=\left(m+n\right)\left(mn+1\right)$.
$\left(m+n\right)\left(mn+1\right)=1$ și, cum $m,n$ sunt întregi, $m+n=mn+1=1$ sau
$m+n=mn+1=-1$. Cu $m\le n$ obținem perechile $\left(0,1\right)$ și $\left(-2,1\right)$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se scrie $x\cdot\left(\dfrac{2}{x}\right)^{2}=\dfrac{2}{x}$.** Pătratul se aplică
și numărătorului: $\dfrac{4}{x^{2}}$. Cu greșeala asta, termenii nu mai dau
$\dfrac{6}{x}$.

</div>

<div class="greseala">

**Se ignoră condiția $m\le n$.** Atunci apar și $\left(1,0\right)$, $\left(1,-2\right)$.
Enunțul le exclude, iar corectorul le poate considera răspuns greșit.

</div>

<div class="greseala">

**Se încearcă valori la întâmplare.** Găsești $\left(0,1\right)$ repede, dar fără
factorizare nu poți argumenta că nu mai sunt altele.

</div>
