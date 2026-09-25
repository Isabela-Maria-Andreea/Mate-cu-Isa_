---
titlu: "Ecuația lg(x² − 3x + 5) = lg 5"
titluSeo: "lg(x² − 3x + 5) = lg 5 — egalarea argumentelor și verificarea condiției de existență, rezolvare cu barem, BAC 2024 Sesiunea specială M_mate-info, Subiectul I.3"
descriere: "Argumentele se egalează, iar x² − 3x = 0 dă x = 0 și x = 3. De ce aici condiția de existență e satisfăcută automat. Subiectul I.3, BAC 2024, Sesiunea specială, Varianta 9."
capitol: "Numere reale, puteri și logaritmi"
sursa: "BAC 2024, Sesiunea specială, Varianta 9 — Subiectul I.3"
varianta: "bac-2024-ss-v9"
subiect: "I"
pozitie: 3
punctaj: 5
dificultate: 1
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

Ambii membri sunt $\lg$ din ceva. $\lg$ e injectiv, deci argumentele sunt
egale: $x^{2}-3x+5=5$.

Condiția de existență cere $x^{2}-3x+5>0$. Nu trebuie studiată separat: orice
soluție face argumentul egal cu $5$, care e pozitiv. Rămâne doar să o spui.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Egalezi argumentele** <span class="punct">3p</span>

$$
x^{2}-3x+5=5
$$

Se reduce $5$ cu $5$:

$$
x^{2}-3x=0
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Rezolvi și verifici** <span class="punct">2p</span>

$x\left(x-3\right)=0$, deci $x=0$ sau $x=3$.

Pentru ambele valori argumentul logaritmului e $5>0$, deci soluțiile convin.

<p class="rezultat">x ∈ {0, 3}</p>

</div>
</div>

<div class="aside">

**Condiția ar fi fost oricum adevărată pentru orice $x$.** Trinomul
$x^{2}-3x+5$ are $\Delta=9-20=-11<0$ și coeficientul lui $x^{2}$ pozitiv, deci e
pozitiv peste tot. Asta e mai mult decât îți trebuie; pentru punctaj e
suficient să verifici soluțiile găsite.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$x^{2}-3x+5=5$, de unde obținem $x^{2}-3x=0$, deci $x=0$ sau $x=3$, care
convin.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se simplifică cu $x$ și rămâne doar $x=3$.** Din $x^{2}=3x$, împărțirea la $x$
pierde $x=0$. Scoate factor comun.

</div>

<div class="greseala">

**Se elimină $x=0$ „pentru că $\lg 0$ nu există".** Nu $x$ trebuie să fie
pozitiv, ci argumentul $x^{2}-3x+5$. Pentru $x=0$, argumentul e $5$.

</div>
