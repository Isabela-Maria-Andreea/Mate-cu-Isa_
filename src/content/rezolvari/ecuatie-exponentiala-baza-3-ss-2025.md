---
titlu: "Ecuație exponențială: totul în baza 3"
titluSeo: "9ˣ · 3³ = 3ˣ⁺² — aducerea la aceeași bază, rezolvare cu barem, BAC 2025 Sesiunea specială M_mate-info, Subiectul I.3"
descriere: "Cum scrii 9ˣ ca 3²ˣ, cum aduni exponenții la produs și compari. Subiectul I.3, BAC 2025, Sesiunea specială, Varianta 3."
capitol: "Numere reale, puteri și logaritmi"
sursa: "BAC 2025, Sesiunea specială, Varianta 3 — Subiectul I.3"
varianta: "bac-2025-ss-v3"
subiect: "I"
pozitie: 3
punctaj: 5
dificultate: 1
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

Apar bazele $9$ și $3$, iar $9=3^{2}$. Deci totul se scrie în baza $3$ și ecuația
devine o egalitate între doi exponenți.

Două reguli de puteri sunt în joc: $\left(3^{2}\right)^{x}=3^{2x}$ la ridicarea la
putere, și $3^{2x}\cdot 3^{3}=3^{2x+3}$ la produsul cu aceeași bază.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Aduci la baza 3** <span class="punct">3p</span>

$$
9^{x}\cdot 3^{3}=\left(3^{2}\right)^{x}\cdot 3^{3}=3^{2x}\cdot 3^{3}=3^{2x+3}
$$

Ecuația devine $3^{2x+3}=3^{x+2}$. Funcția exponențială e injectivă, deci
$2x+3=x+2$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Rezolvi** <span class="punct">2p</span>

$$
2x-x=2-3
$$

<p class="rezultat">x = −1</p>

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$3^{2x+3}=3^{x+2}$, de unde $2x+3=x+2$, deci $x=-1$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se înmulțesc exponenții în loc să se adune.** $3^{2x}\cdot 3^{3}=3^{2x+3}$, nu
$3^{6x}$. Cu $6x=x+2$ ar ieși $x=\dfrac{2}{5}$.

</div>

<div class="greseala">

**Se scrie $9^{x}=3^{x^{2}}$.** $\left(3^{2}\right)^{x}=3^{2\cdot x}$. Puterea unei
puteri înmulțește exponenții, nu îi ridică la putere.

</div>
