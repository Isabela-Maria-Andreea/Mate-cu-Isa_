---
titlu: "Legea x * y = (x² + y² + x + y)/(x + y + 1): element neutru și perechi naturale"
titluSeo: "x * y = (x² + y² + x + y)/(x + y + 1) pe [0, +∞) — 1 * 2 = 2, elementul neutru e = 0 și perechile (m, n) naturale cu m * n = 5, BAC 2024 Simulare M_mate-info, Subiectul II.2"
descriere: "O lege cu fracție în care x² + x = x(x + 1) se simplifică cu numitorul, iar ecuația m * n = 5 devine o sumă de două pătrate egală cu 13. Subiectul II.2, simularea BAC 2024."
capitol: "Legi de compoziție și grupuri"
sursa: "BAC 2024, Simulare clasa a XII-a — Subiectul II.2"
varianta: "bac-2024-sm-v1"
subiect: "II"
pozitie: 2
subpuncte:
  - "1 * 2 = 2"
  - "Elementul neutru e = 0"
  - "Perechile naturale cu m * n = 5"
punctaj: 15
dificultate: 3
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

**La b)**, când pui $y=0$, numărătorul devine $x^{2}+x=x\left(x+1\right)$, iar
numitorul $x+1$. Factorul comun se simplifică, și rămâne $x$. Numitorul nu se
anulează pe $M$, pentru că $x\ge 0$.

**La c)** ai o ecuație cu două necunoscute naturale. O singură ecuație nu le
fixează în general, dar dacă o aduci la forma **sumă de pătrate egală cu un
număr**, variantele sunt puține. Semnalul e prezența lui $m^{2}$ și $n^{2}$ cu
coeficientul $1$, plus termeni de gradul I în $m$ și $n$: se completează pătratele.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## 1 * 2 = 2

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Înlocuiești** <span class="punct">3p</span>

$$
1*2=\frac{1^{2}+2^{2}+1+2}{1+2+1}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Calculezi** <span class="punct">2p</span>

Numărătorul: $1+4+1+2=8$. Numitorul: $4$.

$$
\frac{8}{4}=2
$$

<p class="rezultat">1 * 2 = 2</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Elementul neutru e = 0

Mai întâi, $0\in M=\left[0,+\infty\right)$. Trebuie arătat că $x*0=x$ și
$0*x=x$ pentru orice $x\in M$.

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Compunerea la dreapta** <span class="punct">2p</span>

$$
x*0=\frac{x^{2}+0^{2}+x+0}{x+0+1}=\frac{x^{2}+x}{x+1}=\frac{x\left(x+1\right)}{x+1}=x
$$

Se simplifică $x+1$, care e nenul pentru că $x\ge 0$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Compunerea la stânga și concluzia** <span class="punct">3p</span>

$$
0*x=\frac{0^{2}+x^{2}+0+x}{0+x+1}=\frac{x\left(x+1\right)}{x+1}=x
$$

Ambele egalități au loc pentru orice $x\in M$.

<p class="rezultat">e = 0 este elementul neutru</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Perechile naturale cu m * n = 5

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Aduci ecuația la o sumă de pătrate** <span class="punct">3p</span>

Numitorul $m+n+1\ge 1$, deci poți înmulți cu el:

$$
\frac{m^{2}+n^{2}+m+n}{m+n+1}=5\ \Rightarrow\ m^{2}+n^{2}+m+n=5m+5n+5
$$

Muți totul în stânga: $m-5m=-4m$ și $n-5n=-4n$:

$$
m^{2}-4m+n^{2}-4n-5=0
$$

Completezi pătratele: $m^{2}-4m=\left(m-2\right)^{2}-4$ și
$n^{2}-4n=\left(n-2\right)^{2}-4$. Atunci
$\left(m-2\right)^{2}-4+\left(n-2\right)^{2}-4-5=0$, iar $-4-4-5=-13$:

$$
\left(m-2\right)^{2}+\left(n-2\right)^{2}=13
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Cauți pătratele care dau 13** <span class="punct">2p</span>

Pătratele mai mici sau egale cu $13$ sunt $0,1,4,9$. Singura sumă de două
dintre ele egală cu $13$ e $4+9$. Deci una dintre paranteze are pătratul $4$,
cealaltă $9$.

- $\left(m-2\right)^{2}=4$ dă $m-2=\pm 2$, adică $m=0$ sau $m=4$.
- $\left(n-2\right)^{2}=9$ dă $n-2=\pm 3$, adică $n=5$ sau $n=-1$. Cum $n$ e
  natural, rămâne $n=5$.

Același raționament cu rolurile inversate dă $n\in\left\{0,4\right\}$ și $m=5$.

<p class="rezultat">(m, n) ∈ {(0, 5), (4, 5), (5, 0), (5, 4)}</p>

</div>
</div>

<div class="aside">

**Verificare pe o pereche:** $4*5=\dfrac{16+25+4+5}{4+5+1}=\dfrac{50}{10}=5$.
Merită făcută măcar una, pentru că la completarea pătratelor se greșește ușor
constanta.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $1*2=\dfrac{1^{2}+2^{2}+1+2}{1+2+1}=\dfrac{8}{4}=2$

**b)** $x*0=\dfrac{x^{2}+0^{2}+x+0}{x+0+1}=\dfrac{x\left(x+1\right)}{x+1}=x$ și
$0*x=\dfrac{0^{2}+x^{2}+0+x}{0+x+1}=\dfrac{x\left(x+1\right)}{x+1}=x$, pentru
orice $x\in M$, deci $e=0$ este elementul neutru al legii de compoziție „$*$".

**c)** $\dfrac{m^{2}+n^{2}+m+n}{m+n+1}=5$, de unde obținem
$\left(m-2\right)^{2}+\left(n-2\right)^{2}=13$.

Cum $m$ și $n$ sunt numere naturale, obținem perechile $\left(0,5\right)$,
$\left(4,5\right)$, $\left(5,0\right)$ și $\left(5,4\right)$.

</div>

## Unde se pierd puncte

<div class="greseala">

**La c), se uită $n=-1$ fără să se spună de ce.** Soluția $n-2=-3$ există ca
număr întreg. Trebuie eliminată explicit: $-1$ nu e natural.

</div>

<div class="greseala">

**La c), se răspunde doar cu $\left(0,5\right)$ și $\left(4,5\right)$.** Enunțul
cere perechi ordonate, fără condiția $m\le n$. Legea e simetrică, deci și
$\left(5,0\right)$, $\left(5,4\right)$ sunt soluții.

</div>

<div class="greseala">

**Se scrie $\left(m-2\right)^{2}+\left(n-2\right)^{2}=5$.** Se uită că
fiecare completare de pătrat aduce un $-4$. Sunt două completări, deci la $-5$
se mai adaugă $-8$, iar în dreapta ajunge $13$.

</div>
