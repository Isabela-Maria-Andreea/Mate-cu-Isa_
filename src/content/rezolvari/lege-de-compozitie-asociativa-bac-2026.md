---
titlu: "Lege de compoziție asociativă cu translație"
titluSeo: "x*y = (2/3)(x−3)(y−3)+3 — rezolvare cu barem, BAC 2026 M_mate-info, Subiectul II.2"
descriere: "De ce legea asta e o înmulțire deghizată, cum se vede asociativitatea dintr-o singură substituție și cum rezolvi m*m*n = −1 pe numere naturale. Subiectul II.2, BAC 2026, Sesiunea I, Varianta 3."
capitol: "Legi de compoziție și grupuri"
sursa: "BAC 2026, Sesiunea I, Varianta 3 — Subiectul II.2"
varianta: "bac-2026-s1-v3"
subiect: "II"
pozitie: 2
subpuncte:
  - "Calculul lui 0 * 2"
  - "Ecuația x * 3x/2 = 5x"
  - "Perechile naturale cu m * m * n = −1"
punctaj: 15
dificultate: 4
data: 2026-09-17
ciorna: false
---

## Ce recunoști înainte să calculezi

Legea arată complicat, dar structura ei e simplă, și e aceeași la aproape toate
legile de compoziție de la bac: **e o operație cunoscută, mutată cu o translație.**

Uită-te ce se repetă: $x-3$, $y-3$, și un $+3$ la final. Numărul $3$ apare de trei
ori. Asta nu e întâmplare — e semnul că totul se petrece „în jurul lui $3$".

Concret, dacă notezi

$$
\varphi\left(x\right)=\frac{2}{3}\left(x-3\right)
$$

atunci un calcul scurt arată că

$$
\varphi\left(x*y\right)=\varphi\left(x\right)\cdot\varphi\left(y\right)
$$

Adică $\varphi$ transformă legea $*$ în **înmulțirea obișnuită**. De aici decurge
imediat de ce legea e asociativă — înmulțirea e — și, mai important pentru
subpunctul c), de ce compunerile repetate se comportă ca produse de puteri.

<div class="aside">

**Ce câștigi din observație.** Nu ești obligată să o folosești: subpunctele se pot
rezolva și prin calcul direct, iar baremul așa le dă. Dar ea îți spune dinainte ce
formă va avea rezultatul, ceea ce e un control util — dacă la c) îți iese altceva
decât un produs de tipul $\left(m-3\right)^{2}\left(n-3\right)$, știi că ai greșit
undeva.

</div>

**Un al doilea reflex util:** la subpunctul b), nu desface paranteza înainte de a
observa ce se simplifică. Din $\dfrac{3x}{2}-3=\dfrac{3}{2}\left(x-2\right)$, factorul
$\dfrac{2}{3}$ din față se anulează cu $\dfrac{3}{2}$, și rămâi cu un produs curat de
două paranteze.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Calculul lui $0*2$

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Înlocuiești în definiție** <span class="punct">3p</span>

$$
0*2=\frac{2}{3}\left(0-3\right)\left(2-3\right)+3
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Calculezi** <span class="punct">2p</span>

$$
\frac{2}{3}\cdot\left(-3\right)\cdot\left(-1\right)+3 = 2+3 = 5
$$

<p class="rezultat">0 * 2 = 5</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Ecuația $x*\dfrac{3x}{2}=5x$

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Calculezi membrul stâng, pentru orice $x$ real** <span class="punct">2p</span>

$$
x*\frac{3x}{2}=\frac{2}{3}\left(x-3\right)\left(\frac{3x}{2}-3\right)+3
=\frac{2}{3}\cdot\frac{3}{2}\left(x-3\right)\left(x-2\right)+3
$$

Factorii $\dfrac{2}{3}$ și $\dfrac{3}{2}$ se simplifică, deci

$$
x*\frac{3x}{2}=\left(x-3\right)\left(x-2\right)+3=x^{2}-5x+9
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Rezolvi ecuația** <span class="punct">3p</span>

$$
x^{2}-5x+9=5x \iff x^{2}-10x+9=0
$$

<p class="rezultat">x = 1 sau x = 9</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Perechile naturale cu $m*m*n=-1$

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Compui de două ori** <span class="punct">2p</span>

$$
m*m=\frac{2}{3}\left(m-3\right)^{2}+3
$$

Pentru a compune cu $n$, observă că $\left(m*m\right)-3=\dfrac{2}{3}\left(m-3\right)^{2}$,
deci

$$
m*m*n=\frac{2}{3}\cdot\frac{2}{3}\left(m-3\right)^{2}\left(n-3\right)+3
=\frac{4}{9}\left(m-3\right)^{2}\left(n-3\right)+3
$$

pentru orice numere naturale $m$ și $n$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Rezolvi în numere naturale** <span class="punct">3p</span>

$$
\frac{4}{9}\left(m-3\right)^{2}\left(n-3\right)+3=-1
\iff \left(m-3\right)^{2}\left(n-3\right)=-9
$$

Acum lucrezi cu constrângerile. Factorul $\left(m-3\right)^{2}$ este un pătrat
perfect, deci nenegativ; cum produsul e nenul, el este strict pozitiv, iar
$n-3$ trebuie să fie negativ.

Din $n$ natural rezultă $n-3 \ge -3$, deci

$$
\left(m-3\right)^{2}=\frac{9}{3-n} \ \text{ cu } \ 3-n \in \left\{1,2,3\right\}
$$

Singura valoare care dă pătrat perfect este $3-n=1$, adică $n=2$, de unde
$\left(m-3\right)^{2}=9$ și deci $m=0$ sau $m=6$, ambele naturale.

<p class="rezultat">(m, n) ∈ {(0, 2), (6, 2)}</p>

</div>
</div>

## Ce îți spune baremul

La **a)**, trei puncte se dau doar pentru scrierea substituției și două pentru
aritmetică. Adică nu sări peste rândul cu $\dfrac{2}{3}\left(0-3\right)\left(2-3\right)+3$:
el valorează mai mult decât rezultatul.

La **b)** și **c)**, raportul se inversează: două puncte pentru pregătire, trei
pentru rezolvarea efectivă. Are logică — acolo partea grea chiar e finalul.

Observația importantă e la **c)**: baremul acordă două puncte doar pentru scrierea
lui $m*m$ și $m*m*n$ în formă generală, **înainte** de orice condiție. Dacă te
blochezi la discuția pe numere naturale, tot ai luat aceste puncte — cu condiția
să fi scris formulele.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $0*2=\dfrac{2}{3}\left(-3\right)\left(-1\right)+3=2+3=5$

**b)** $x*\dfrac{3x}{2}=x^{2}-5x+9$, pentru orice $x$ real; din $x^{2}-5x+9=5x$
obținem $x=1$ sau $x=9$.

**c)** $m*m*n=\dfrac{4}{9}\left(m-3\right)^{2}\left(n-3\right)+3$; egalând cu $-1$ rezultă
$\left(m-3\right)^{2}\left(n-3\right)=-9$, deci perechile $\left(0,2\right)$ și $\left(6,2\right)$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se compune greșit la c).** $m*m*n$ nu este $\dfrac{2}{3}\left(m-3\right)^{2}\left(n-3\right)+3$.
La a doua compunere, primul argument este $m*m$, iar din el trebuie scăzut $3$ —
și abia atunci apare al doilea factor $\dfrac{2}{3}$. De aici $\dfrac{4}{9}$, nu
$\dfrac{2}{3}$.

</div>

<div class="greseala">

**Se desface paranteza prea devreme la b).** Dacă înmulțești totul înainte să
observi simplificarea $\dfrac{2}{3}\cdot\dfrac{3}{2}=1$, ajungi la fracții inutile
și la erori de semn. Scoate întâi factorul comun din a doua paranteză.

</div>

<div class="greseala">

**Se caută soluții reale în loc de naturale.** Ecuația
$\left(m-3\right)^{2}\left(n-3\right)=-9$ are o infinitate de soluții reale.
Restrângerea la naturale — pătrat perfect, $n-3\ge -3$ — este tot exercițiul.

</div>

<div class="greseala">

**Se pierde soluția $m=0$.** Din $\left(m-3\right)^{2}=9$ rezultă $m-3=\pm 3$, deci
$m=6$ **sau** $m=0$. Zero este număr natural, deci perechea $\left(0,2\right)$
contează.

</div>

