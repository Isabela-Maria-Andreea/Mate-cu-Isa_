---
titlu: "Matrice cu parametru și sistem cu soluție unică"
titluSeo: "det(A(a)) = a²−2a+3, sistem cu soluție unică și condiția z₀ = n·x₀ — rezolvare cu barem, BAC 2026 M_mate-info, Subiectul II.1"
descriere: "De ce forma canonică (a−1)²+2 decide totul, cum rezolvi sistemul cu parametru prin substituție și cum restrângi cazurile naturale. Subiectul II.1, BAC 2026, Sesiunea I, Varianta 3."
capitol: "Sisteme de ecuații liniare"
sursa: "BAC 2026, Sesiunea I, Varianta 3 — Subiectul II.1"
varianta: "bac-2026-s1-v3"
subiect: "II"
pozitie: 1
subpuncte:
  - "Determinantul pentru a = 1"
  - "Soluție unică pentru orice a real"
  - "Condiția z₀ = n·x₀"
punctaj: 15
dificultate: 4
data: 2026-09-17
ciorna: false
---

## Ce recunoști înainte să calculezi

Cele trei subpuncte nu sunt independente — sunt o scară. Punctul **a)** e un
determinant numeric, **b)** cere același determinant simbolic, iar **c)** are
nevoie de soluția efectivă a sistemului, care există tocmai pentru că b) a arătat
că determinantul nu se anulează.

Deci calculul de la b) nu e o repetare a lui a): e piesa de care depinde tot
restul. Iar forma în care îl scrii decide cât de ușor termini.

**Observația care face b) banal:** $a^{2}-2a+3$ nu se factorizează, dar se
restrânge:

$$
a^{2}-2a+3 = \left(a-1\right)^{2}+2
$$

Un pătrat plus $2$ este cel puțin $2$, deci strict pozitiv pentru **orice** $a$
real. Nu ai nevoie de discriminant, de discuții pe cazuri, de nimic. Asta e
tiparul standard când ți se cere „pentru orice număr real $a$": nu verifici, ci
scrii expresia într-o formă din care pozitivitatea se vede.

**Pentru c), simplifică sistemul înainte de a-l rezolva.** A treia ecuație,
$2y+z=0$, îți dă direct $z=-2y$. Substituind, sistemul de trei ecuații cu trei
necunoscute devine unul de două cu două. Nu porni cu Cramer pe un sistem $3\times 3$
cu parametru — e de trei ori mai mult calcul pentru același rezultat.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Determinantul pentru $a=1$

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii matricea și determinantul** <span class="punct">2p</span>

$$
A\left(1\right)=\begin{pmatrix}1 & 1 & 1\\ 1 & 3 & 1\\ 0 & 2 & 1\end{pmatrix}
\;\Longrightarrow\;
\det\left(A\left(1\right)\right)=\begin{vmatrix}1 & 1 & 1\\ 1 & 3 & 1\\ 0 & 2 & 1\end{vmatrix}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Aplici regula lui Sarrus** <span class="punct">3p</span>

$$
\det\left(A\left(1\right)\right)=3+2+0-0-2-1=2
$$

<p class="rezultat">det(A(1)) = 2</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Soluție unică pentru orice $a$ real

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Calculezi determinantul cu parametru** <span class="punct">3p</span>

$$
\det\left(A\left(a\right)\right)=\begin{vmatrix}1 & a & a\\ a & 3 & a\\ 0 & 2 & 1\end{vmatrix}
= 3 + 0 + 2a^{2} - 0 - 2a - a^{2} = a^{2}-2a+3
$$

pentru orice număr real $a$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Arăți că nu se anulează niciodată** <span class="punct">2p</span>

$$
\det\left(A\left(a\right)\right)=\left(a-1\right)^{2}+2 \ge 2 > 0
$$

Determinantul matricei sistemului este nenul pentru orice număr real $a$, deci
sistemul este compatibil determinat: are soluție unică.

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Condiția $z_{0}=n x_{0}$

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Rezolvi sistemul prin substituție** <span class="punct">3p</span>

Din a treia ecuație, $z=-2y$. Înlocuind în primele două:

$$
x - ay = 1, \qquad ax + \left(3-2a\right)y = 0
$$

Din prima, $x = 1 + ay$. Înlocuind în a doua obținem
$y\left(a^{2}-2a+3\right) = -a$, deci

$$
y_{0}=\frac{-a}{a^{2}-2a+3}, \qquad
x_{0}=\frac{3-2a}{a^{2}-2a+3}, \qquad
z_{0}=\frac{2a}{a^{2}-2a+3}
$$

Numitorul e același peste tot și e nenul, conform punctului b). Condiția
$z_{0}=n x_{0}$ devine deci, după simplificare:

$$
2a = n\left(3-2a\right)
$$

unde $a$ și $n$ sunt numere naturale, $a$ nenul.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Restrângi cazurile** <span class="punct">2p</span>

Cum $a$ e natural nenul, membrul stâng $2a$ este strict pozitiv. Atunci și
$n\left(3-2a\right)$ trebuie să fie strict pozitiv, iar cum $n$ e natural,
rezultă $3-2a>0$, adică $a<\dfrac{3}{2}$.

Singurul număr natural nenul mai mic decât $\dfrac{3}{2}$ este $a=1$, care
convine: atunci $2=n\cdot 1$, deci $n=2$, număr natural.

<p class="rezultat">a = 1</p>

</div>
</div>

## Ce îți spune baremul

Împărțirea pe cele trei subpuncte e $5+5+5$, dar în interiorul fiecăruia
punctajul e instructiv.

La **b)**, trei puncte se dau pentru determinantul simbolic și doar două pentru
concluzie. Calculul e partea grea; restrângerea la $\left(a-1\right)^{2}+2$ și
fraza de final valorează mai puțin, dar fără ele nu iei nimic din cele două.

La **c)**, trei puncte se dau pentru a **ajunge** la relația $2a=n\left(3-2a\right)$
și doar două pentru a o rezolva. Adică dacă te blochezi la final, dar ai scris
soluția sistemului și condiția, ai deja majoritatea punctajului. Merită mereu să
scrii relația la care ai ajuns, chiar dacă nu o duci până la capăt.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $\det\left(A\left(1\right)\right)=3+2+0-0-2-1=2$

**b)** $\det\left(A\left(a\right)\right)=a^{2}-2a+3=\left(a-1\right)^{2}+2\neq 0$ pentru orice
număr real $a$, deci sistemul are soluție unică.

**c)** Din soluția sistemului, condiția $z_{0}=nx_{0}$ devine $2a=n\left(3-2a\right)$.
Cum $a$ e natural nenul, $3-2a>0$, deci $a=1$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se discută pe cazuri la b).** Dacă scrii discriminantul lui $a^2-2a+3$ și
concluzionezi că nu are rădăcini reale, e corect — dar e mai lung și mai ușor de
greșit decât forma restrânsă. Scrie direct $\left(a-1\right)^2+2$.

</div>

<div class="greseala">

**Se confundă „soluție unică" cu „soluție".** Determinantul nenul garantează
existența **și** unicitatea. Cerința e exact „soluție unică", deci menționează
ambele, nu doar că sistemul e compatibil.

</div>

<div class="greseala">

**Se uită că $a$ e natural nenul.** Din $2a=n\left(3-2a\right)$, peste numerele
reale ar ieși o infinitate de perechi. Restrângerea la naturale, plus $a \ne 0$,
este ceea ce face răspunsul unic. Enunțul spune „număr natural nenul" — citește
condiția, nu doar întrebarea.

</div>

<div class="greseala">

**Se pornește cu Cramer pe sistemul $3\times 3$.** Se poate, dar înseamnă trei
determinanți cu parametru în loc de o substituție. La un subiect cronometrat, e
cel mai bun mod de a rămâne fără timp.

</div>

