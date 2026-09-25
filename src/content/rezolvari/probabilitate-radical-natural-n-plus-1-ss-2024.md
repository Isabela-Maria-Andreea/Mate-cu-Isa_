---
titlu: "Probabilitatea ca √(n + 1) să fie natural"
titluSeo: "Probabilitatea ca √(n + 1) să fie natural pentru n de două cifre — șapte pătrate perfecte între 11 și 100, rezolvare cu barem, BAC 2024 Sesiunea specială M_mate-info, Subiectul I.4"
descriere: "n + 1 trebuie să fie pătrat perfect între 11 și 100. Sunt șapte, de la 16 la 100, deci p = 7/90. Atenție la capătul 100. Subiectul I.4, BAC 2024, Sesiunea specială, Varianta 9."
capitol: "Combinatorică și binomul lui Newton"
sursa: "BAC 2024, Sesiunea specială, Varianta 9 — Subiectul I.4"
varianta: "bac-2024-ss-v9"
subiect: "I"
pozitie: 4
punctaj: 5
dificultate: 2
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

$\sqrt{n+1}$ e natural când $n+1$ e pătrat perfect. Cum $10\le n\le 99$,
$n+1$ stă între $11$ și $100$. Numeri pătratele din intervalul ăsta.

Capătul de sus e chiar un pătrat: $100=10^{2}$. E locul unde se greșește cel
mai ușor, pentru că $n=99$ pare „prea mare" ca să conteze.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Cazurile posibile** <span class="punct">2p</span>

Numerele naturale de două cifre sunt de la $10$ la $99$: $99-10+1=90$ de
cazuri posibile.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Cazurile favorabile și probabilitatea** <span class="punct">3p</span>

$11\le n+1\le 100$. Pătratele din interval: $3^{2}=9$ e prea mic, apoi
$16,25,36,49,64,81,100$. Deci $n+1$ are $7$ valori posibile, iar
$n\in\left\{15,24,35,48,63,80,99\right\}$.

$$
p=\frac{7}{90}
$$

Fracția nu se simplifică: $7$ e prim și nu îl divide pe $90$.

<p class="rezultat">p = 7/90</p>

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

Mulțimea numerelor naturale de două cifre are $90$ de elemente, deci sunt $90$
de cazuri posibile.

$n\in\left\{15,24,35,48,63,80,99\right\}$, deci sunt $7$ cazuri favorabile, de
unde obținem $p=\dfrac{7}{90}$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se uită $n=99$** și se obțin $6$ cazuri favorabile. $99+1=100=10^{2}$, iar
$99$ are două cifre.

</div>

<div class="greseala">

**Se ia $n=8$, din $8+1=9$.** $8$ are o singură cifră, deci nu e în mulțimea din
care alegi.

</div>
