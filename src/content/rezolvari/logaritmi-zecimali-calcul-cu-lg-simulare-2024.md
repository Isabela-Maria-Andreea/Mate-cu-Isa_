---
titlu: "Logaritmi zecimali: (3 + lg 1/10) · lg √10 = 1"
titluSeo: "(3 + lg 1/10) · lg √10 = 1 — lg ca exponent al lui 10, rezolvare cu barem, Simulare BAC 2024 M_mate-info, Subiectul I.1"
descriere: "Scrii 1/10 și √10 ca puteri ale lui 10, iar logaritmii devin exponenții: −1 și 1/2. Subiectul I.1 din simularea de bacalaureat 2024, cu punctajul pe pași."
capitol: "Numere reale, puteri și logaritmi"
sursa: "BAC 2024, Simulare clasa a XII-a — Subiectul I.1"
varianta: "bac-2024-sm-v1"
subiect: "I"
pozitie: 1
punctaj: 5
dificultate: 1
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

$\lg$ e logaritmul în baza $10$. Pentru o putere a lui $10$, $\lg 10^{k}=k$:
logaritmul îți dă exponentul.

Ambele argumente de aici sunt puteri ale lui $10$ scrise deghizat:
$\dfrac{1}{10}=10^{-1}$ și $\sqrt{10}=10^{\frac{1}{2}}$. Odată rescrise, nu mai ai
niciun logaritm de calculat, doar exponenți de citit.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Paranteza** <span class="punct">3p</span>

$\lg\dfrac{1}{10}=\lg 10^{-1}=-1$, deci:

$$
\left(3+\lg\frac{1}{10}\right)\cdot\lg\sqrt{10}=\left(3-1\right)\cdot\lg\sqrt{10}=2\cdot\lg\sqrt{10}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Al doilea factor** <span class="punct">2p</span>

$\sqrt{10}=10^{\frac{1}{2}}$, deci $\lg\sqrt{10}=\dfrac{1}{2}$:

$$
2\cdot\frac{1}{2}=1
$$

<p class="rezultat">(3 + lg 1/10) · lg √10 = 1</p>

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$\left(3+\lg\dfrac{1}{10}\right)\cdot\lg\sqrt{10}=2\cdot\lg\sqrt{10}=2\cdot\dfrac{1}{2}=1$

</div>

## Unde se pierd puncte

<div class="greseala">

**Se scrie $\lg\dfrac{1}{10}=\dfrac{1}{\lg 10}$.** Logaritmul unei fracții nu e
fracția logaritmilor. Varianta corectă e $\lg\dfrac{1}{10}=\lg 1-\lg 10=0-1=-1$.
Cu greșeala, paranteza devine $4$ și rezultatul $2$.

</div>

<div class="greseala">

**Se scrie $\lg\sqrt{10}=\sqrt{\lg 10}=1$.** Radicalul e o putere, $\dfrac{1}{2}$,
iar puterea iese în fața logaritmului ca factor, nu ca radical peste el.

</div>
