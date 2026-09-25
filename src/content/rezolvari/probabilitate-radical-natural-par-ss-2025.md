---
titlu: "Probabilitate: √n număr natural par"
titluSeo: "Probabilitatea ca √n să fie număr natural par, n de două cifre — rezolvare cu barem, BAC 2025 Sesiunea specială M_mate-info, Subiectul I.4"
descriere: "Condiția pe √n înseamnă că n e pătrat perfect al unui număr par. Între 10 și 99 sunt doar trei. Subiectul I.4, BAC 2025, Sesiunea specială, Varianta 3."
capitol: "Combinatorică și binomul lui Newton"
sursa: "BAC 2025, Sesiunea specială, Varianta 3 — Subiectul I.4"
varianta: "bac-2025-ss-v3"
subiect: "I"
pozitie: 4
punctaj: 5
dificultate: 2
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

$\sqrt{n}$ e număr natural doar când $n$ e pătrat perfect. Condiția de paritate se
pune pe **radical**, nu pe $n$. Deci cauți $n=k^{2}$, cu $k$ par.

Pătratele de două cifre sunt $16,25,36,49,64,81$, adică $k=4,\ldots,9$. Dintre ele
păstrezi $k$ par: $4,6,8$.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Cazurile posibile** <span class="punct">2p</span>

Numerele naturale de două cifre sunt $90$, deci $90$ de cazuri posibile.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Cazurile favorabile** <span class="punct">3p</span>

$\sqrt{n}\in\left\{4,6,8\right\}$, adică $n\in\left\{16,36,64\right\}$. Următorul
candidat, $\sqrt{n}=10$, ar da $n=100$, care are trei cifre. Sunt $3$ cazuri
favorabile.

$$
p=\frac{3}{90}=\frac{1}{30}
$$

<p class="rezultat">p = 1/30</p>

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

Sunt $90$ de numere naturale de două cifre, deci $90$ de cazuri posibile.

$\sqrt{n}$ este număr natural par pentru $n\in\left\{16,36,64\right\}$, deci $3$
cazuri favorabile, de unde $p=\dfrac{3}{90}=\dfrac{1}{30}$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se numără toate pătratele perfecte.** Sunt șase. Cu ele obții $p=\dfrac{1}{15}$.
Condiția „par" le înjumătățește.

</div>
