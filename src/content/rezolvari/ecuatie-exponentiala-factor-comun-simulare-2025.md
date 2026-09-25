---
titlu: "Ecuație exponențială cu factor comun"
titluSeo: "3ˣ + 2·3ˣ⁺¹ = 63 — scoaterea lui 3ˣ factor comun, rezolvare cu barem, Simulare BAC 2025 M_mate-info, Subiectul I.3"
descriere: "Cum desfaci 3ˣ⁺¹ în 3·3ˣ ca ecuația să aibă o singură putere, apoi compari exponenții. Subiectul I.3 din simularea BAC 2025."
capitol: "Numere reale, puteri și logaritmi"
sursa: "BAC 2025, Simulare clasa a XII-a — Subiectul I.3"
varianta: "bac-2025-sm-v1"
subiect: "I"
pozitie: 3
punctaj: 5
dificultate: 1
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

În ecuație apar $3^{x}$ și $3^{x+1}$: aceeași bază, exponenți care diferă printr-o
constantă. Semnalul e să scrii totul cu **o singură putere**, $3^{x}$:

$$
3^{x+1}=3^{x}\cdot 3^{1}=3\cdot 3^{x}
$$

După asta, ecuația e de gradul întâi în $3^{x}$. Nu ai nevoie de logaritmi, pentru că
$63$ se împarte exact.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Aduci la $3^{x}$** <span class="punct">3p</span>

$$
3^{x}+2\cdot 3\cdot 3^{x}=63 \iff 3^{x}+6\cdot 3^{x}=63 \iff 7\cdot 3^{x}=63
$$

deci $3^{x}=9$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Compari exponenții** <span class="punct">2p</span>

$9=3^{2}$, iar funcția exponențială e injectivă, deci

<p class="rezultat">x = 2</p>

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$3^{x}+6\cdot 3^{x}=63$, deci $3^{x}=9$, de unde $x=2$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se scrie $2\cdot 3^{x+1}=6^{x+1}$.** Coeficientul nu intră în bază. $2\cdot 3^{x+1}$
înseamnă $2$ înmulțit cu $3^{x+1}$, adică $6\cdot 3^{x}$.

</div>

<div class="greseala">

**Se scrie $3^{x+1}=3^{x}+3$.** Exponentul adunat devine factor, nu termen:
$a^{m+n}=a^{m}\cdot a^{n}$.

</div>
