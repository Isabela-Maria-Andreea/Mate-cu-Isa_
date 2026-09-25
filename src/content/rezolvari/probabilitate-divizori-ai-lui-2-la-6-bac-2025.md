---
titlu: "Probabilitate: divizori de două cifre ai lui 2⁶"
titluSeo: "Probabilitatea ca un număr de două cifre să fie divizor al lui 2⁶ = 64 — rezolvare cu barem, BAC 2025 Sesiunea I M_mate-info, Subiectul I.4"
descriere: "Divizorii lui 2⁶ sunt puterile lui 2 până la 64. Doar trei au două cifre. Subiectul I.4, BAC 2025, Sesiunea I, Varianta 1."
capitol: "Combinatorică și binomul lui Newton"
sursa: "BAC 2025, Sesiunea I, Varianta 1 — Subiectul I.4"
varianta: "bac-2025-s1-v1"
subiect: "I"
pozitie: 4
punctaj: 5
dificultate: 1
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

$2^{6}=64$ are ca singur factor prim pe $2$, deci divizorii lui sunt exact puterile
lui $2$: $1,2,4,8,16,32,64$. Cele de două cifre sunt $16$, $32$ și $64$.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Cazurile posibile** <span class="punct">2p</span>

Mulțimea numerelor naturale de două cifre are $90$ de elemente, deci $90$ de cazuri
posibile.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Cazurile favorabile** <span class="punct">3p</span>

Divizorii de două cifre ai lui $2^{6}=64$ sunt $16=2^{4}$, $32=2^{5}$, $64=2^{6}$,
deci $3$ cazuri favorabile.

$$
p=\frac{3}{90}=\frac{1}{30}
$$

<p class="rezultat">p = 1/30</p>

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

Mulțimea numerelor naturale de două cifre are $90$ de elemente, deci $90$ de cazuri
posibile.

Divizorii de două cifre ai lui $2^{6}$ sunt $16$, $32$ și $64$, deci $3$ cazuri
favorabile, de unde $p=\dfrac{3}{90}=\dfrac{1}{30}$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se numără multiplii lui $64$ în loc de divizori.** Singurul multiplu de două cifre
e $64$, deci ar ieși $p=\dfrac{1}{90}$. Divizor al lui $64$ înseamnă că $64$ se împarte
la el.

</div>

<div class="greseala">

**Se uită $64$.** Un număr e divizor al lui însuși. Cu doar $16$ și $32$ obții
$\dfrac{1}{45}$.

</div>
