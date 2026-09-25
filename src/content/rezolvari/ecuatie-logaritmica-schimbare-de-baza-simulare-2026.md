---
titlu: "Ecuație logaritmică cu baze inversate"
titluSeo: "(1 + log_x 2)·log_2 x = 5 — log_x 2 · log_2 x = 1, ecuație logaritmică rezolvată cu barem, Simulare BAC 2026 M_mate-info, Subiectul I.3"
descriere: "Cum recunoști că log_x 2 și log_2 x sunt inverse unul altuia și de ce ecuația se reduce la log_2 x = 4. Condițiile de existență incluse. Subiectul I.3, Simularea BAC 2026."
capitol: "Numere reale, puteri și logaritmi"
sursa: "BAC 2026, Simulare clasa a XII-a — Subiectul I.3"
varianta: "bac-2026-sm-v1"
subiect: "I"
pozitie: 3
punctaj: 5
dificultate: 2
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

În ecuație apar $\log_{x}2$ și $\log_{2}x$: aceleași două numere, cu baza și
argumentul inversate. Pentru astfel de perechi există formula

$$
\log_{a}b\cdot\log_{b}a=1
$$

care vine din schimbarea bazei: $\log_{x}2=\dfrac{1}{\log_{2}x}$.

Asta îți spune ce să faci: **desfaci paranteza**. Al doilea termen devine
$\log_{x}2\cdot\log_{2}x=1$, iar ecuația rămâne cu un singur logaritm.

Înainte de toate, condițiile. $x$ apare ca **bază** în $\log_{x}2$, deci
$x>0$ și $x\ne 1$. Tot $x$ apare ca argument în $\log_{2}x$, ceea ce cere doar
$x>0$, deja inclus.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Desfaci paranteza și reduci produsul la 1** <span class="punct">3p</span>

Condiții: $x>0$, $x\ne 1$.

$$
\log_{2}x+\log_{x}2\cdot\log_{2}x=5
$$

Cum $\log_{x}2\cdot\log_{2}x=1$, ecuația devine

$$
\log_{2}x+1=5 \Rightarrow \log_{2}x=4
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Treci la exponențială și verifici condițiile** <span class="punct">2p</span>

$$
\log_{2}x=4 \Leftrightarrow x=2^{4}=16
$$

$16>0$ și $16\ne 1$, deci soluția convine.

<p class="rezultat">x = 16</p>

</div>
</div>

<div class="alternativa">

**Cu notația $t=\log_{2}x$.** Atunci $\log_{x}2=\dfrac{1}{t}$ (cu $t\ne 0$, adică
$x\ne 1$), iar ecuația devine $\left(1+\dfrac{1}{t}\right)t=5$, adică $t+1=5$,
deci $t=4$. E același calcul, dar se vede mai clar de unde vine condiția
$x\ne 1$.

</div>

## Ce îți spune baremul

Punctajul mare, 3p, se dă pentru ajungerea la $\log_{2}x=4$. Ultimele 2p cer
și soluția, și cuvintele „care convine". Pe foaie, verificarea condițiilor
trebuie să apară scrisă.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

Condiții: $x>0$, $x\ne 1$.

$\log_{2}x+\log_{x}2\cdot\log_{2}x=5$, de unde obținem $\log_{2}x+1=5$, deci
$\log_{2}x=4$.

$x=16$, care convine.

</div>

## Unde se pierd puncte

<!-- SCHIȚĂ: greșelile de mai jos sunt propuse, nu verificate pe lucrări reale. De confirmat de Isa. -->

<div class="greseala">

**Se uită $x\ne 1$.** Aici nu schimbă răspunsul, dar condiția face parte din
rezolvare. Cine nu o scrie nu poate justifica „care convine".

</div>

<div class="greseala">

**Se înlocuiește $\log_{x}2$ cu $\log_{2}x$.** Nu sunt egale, sunt inverse.
Cu confuzia asta ecuația devine $\log_{2}x+\log_{2}^{2}x=5$, fără soluții
frumoase, iar timpul se pierde pe o ecuație de gradul al doilea greșită.

</div>
