---
titlu: "Polinom cu parametru și suma cuburilor rădăcinilor"
titluSeo: "f = mX⁴ − mX² + X + 1: rest, Viète și suma cuburilor rădăcinilor — rezolvare cu barem, BAC 2026 M_mate-info, Subiectul II.2"
descriere: "De ce nu calculezi suma cuburilor prin formule, ci folosești faptul că fiecare rădăcină verifică ecuația. Subiectul II.2, BAC 2026, Sesiunea specială, Varianta 2."
capitol: "Inele, corpuri și polinoame"
sursa: "BAC 2026, Sesiunea specială, Varianta 2 — Subiectul II.2"
varianta: "bac-2026-ss-v2"
subiect: "II"
pozitie: 2
subpuncte:
  - "Valoarea f(−1)"
  - "Restul împărțirii la X + 2"
  - "Suma cuburilor rădăcinilor"
punctaj: 15
dificultate: 5
data: 2026-09-17
ciorna: false
---

## Ce recunoști înainte să calculezi

Primele două subpuncte sunt aplicații directe ale aceleiași idei: **valoarea unui
polinom într-un punct**. Al treilea e o problemă complet diferită și mult mai grea.

**La a) și b), teorema restului face tot.** Restul împărțirii lui $f$ la $X-c$ este
$f\left(c\right)$. Pentru $g=X+2$, scris ca $X-\left(-2\right)$, restul e
$f\left(-2\right)$. Nu se face nicio împărțire.

**La c), nu porni cu formule pentru suma cuburilor.** Există relații care exprimă
$\sum x_{i}^{3}$ prin sumele lui Viète, dar pentru un polinom de gradul al patrulea
sunt lungi și ușor de greșit.

Metoda scurtă pleacă de la ceva evident: **fiecare rădăcină verifică ecuația.** Deci
pentru orice $i$,

$$
mx_{i}^{4}-mx_{i}^{2}+x_{i}+1=0
$$

Produsul rădăcinilor e $\dfrac{1}{m}\ne 0$, deci nicio rădăcină nu e nulă și poți
împărți prin $x_{i}$:

$$
mx_{i}^{3}-mx_{i}+1+\frac{1}{x_{i}}=0
\;\Longrightarrow\;
mx_{i}^{3}=mx_{i}-1-\frac{1}{x_{i}}
$$

Sumând după $i$, obții direct $m\sum x_{i}^{3}$ în funcție de $\sum x_{i}$ și
$\sum\dfrac{1}{x_{i}}$ — două mărimi care se citesc imediat din Viète.

<div class="aside">

**De ce se simplifică atât de mult.** Coeficientul lui $X^{3}$ este $0$, deci
$\sum x_{i}=0$. Iar $\sum\dfrac{1}{x_{i}}=\dfrac{e_{3}}{e_{4}}$, raportul ultimelor
două sume Viète — aici $\dfrac{-1/m}{1/m}=-1$. Ambele ies numere, independent de $m$.

</div>

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Valoarea $f\left(-1\right)$

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Înlocuiești** <span class="punct">3p</span>

$$
f\left(-1\right)=m\left(-1\right)^{4}-m\left(-1\right)^{2}+\left(-1\right)+1
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Reduci** <span class="punct">2p</span>

Puterile pare ale lui $-1$ dau $1$, deci

$$
m-m-1+1=0
$$

<p class="rezultat">f(−1) = 0, pentru orice m real nenul</p>

Termenii cu $m$ se anulează între ei, ceea ce explică de ce rezultatul nu depinde de
parametru.

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Restul împărțirii la $X+2$

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Aplici teorema restului** <span class="punct">3p</span>

Restul împărțirii lui $f$ la $X+2$ este $f\left(-2\right)$:

$$
f\left(-2\right)=16m-4m-2+1=12m-1
$$

pentru orice număr real nenul $m$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Pui condiția** <span class="punct">2p</span>

$$
12m-1=11 \iff m=1
$$

<p class="rezultat">m = 1</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Suma cuburilor rădăcinilor

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii relațiile lui Viète** <span class="punct">3p</span>

Pentru $f=mX^{4}+0\cdot X^{3}-mX^{2}+X+1$:

$$
x_{1}+x_{2}+x_{3}+x_{4}=0
$$

$$
\sum_{i<j<k} x_{i}x_{j}x_{k}=-\frac{1}{m}, \qquad
x_{1}x_{2}x_{3}x_{4}=\frac{1}{m}\ne 0
$$

pentru orice număr real nenul $m$. Ultima relație garantează că nicio rădăcină nu e
nulă.

De aici, suma inverselor:

$$
\frac{1}{x_{1}}+\frac{1}{x_{2}}+\frac{1}{x_{3}}+\frac{1}{x_{4}}
=\frac{\sum x_{i}x_{j}x_{k}}{x_{1}x_{2}x_{3}x_{4}}
=\frac{-1/m}{1/m}=-1
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Folosești că fiecare rădăcină verifică ecuația** <span class="punct">2p</span>

Din $mx_{i}^{3}=mx_{i}-1-\dfrac{1}{x_{i}}$, sumând după cele patru rădăcini:

$$
m\left(\sum x_{i}^{3}\right)=m\left(\sum x_{i}\right)-4-\left(\sum\frac{1}{x_{i}}\right)
=m\cdot 0-4-\left(-1\right)=-3
$$

Cum $\sum x_{i}^{3}=1$, rezultă $m\cdot 1=-3$.

<p class="rezultat">m = −3</p>

</div>
</div>

## Ce îți spune baremul

La **a)**, trei puncte pentru simpla înlocuire și două pentru reducere — deci scrie
rândul cu puterile lui $-1$ neefectuate, chiar dacă vezi rezultatul.

La **b)**, tot trei puncte pentru $f\left(-2\right)=12m-1$. Baremul nu cere împărțirea
polinoamelor deloc; teorema restului e presupusă cunoscută.

La **c)**, trei puncte se dau pentru **relațiile lui Viète scrise corect**, înainte de
orice altceva, și doar două pentru identitatea finală. Asta e vestea bună a
subpunctului: dacă scrii cele trei relații Viète și menționezi că produsul e nenul, ai
luat majoritatea punctajului chiar dacă nu duci raționamentul până la capăt.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $f\left(-1\right)=m-m-1+1=0$, pentru orice $m$ real nenul.

**b)** Restul este $f\left(-2\right)=16m-4m-2+1=12m-1$; din $12m-1=11$ rezultă $m=1$.

**c)** $\sum x_{i}=0$, $\sum x_{i}x_{j}x_{k}=-\dfrac{1}{m}$,
$x_{1}x_{2}x_{3}x_{4}=\dfrac{1}{m}\ne 0$, deci $\sum\dfrac{1}{x_{i}}=-1$.

Fiecare rădăcină verifică $mx_{i}^{4}-mx_{i}^{2}+x_{i}+1=0$; împărțind prin $x_{i}$ și
sumând:

$$
m\left(\sum x_{i}^{3}\right)=m\left(\sum x_{i}\right)-4-\left(\sum\frac{1}{x_{i}}\right)=-3
$$

Cum $\sum x_{i}^{3}=1$, obținem $m=-3$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se face împărțirea efectivă la b).** Teorema restului dă răspunsul într-un rând.
Împărțirea unui polinom de gradul al patrulea cu parametru durează cinci minute și
poate introduce erori.

</div>

<div class="greseala">

**Se uită coeficientul nul al lui $X^{3}$.** Polinomul e $mX^{4}+0\cdot X^{3}-mX^{2}+X+1$.
Cine sare peste termenul lipsă calculează greșit sumele Viète și obține
$\sum x_{i}\ne 0$.

</div>

<div class="greseala">

**Se împarte prin $x_{i}$ fără justificare.** Trebuie spus de ce nicio rădăcină nu e
nulă: produsul lor este $\dfrac{1}{m}$, care e nenul pentru orice $m$ nenul. Fără
această propoziție, pasul nu e valid.

</div>

<div class="greseala">

**Se confundă $f\left(-1\right)=0$ cu „$-1$ e singura rădăcină".** Subpunctul a) arată
doar că $-1$ este *o* rădăcină. Polinomul are patru, iar c) le folosește pe toate.

</div>

