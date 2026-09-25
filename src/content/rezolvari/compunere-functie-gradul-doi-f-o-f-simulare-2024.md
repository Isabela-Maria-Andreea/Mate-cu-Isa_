---
titlu: "Compunerea (f ∘ f)(1) = 1 pentru f(x) = x² + ax − 1"
titluSeo: "(f ∘ f)(1) = 1 pentru f(x) = x² + ax − 1 — compunerea calculată din interior spre exterior, rezolvare cu barem, Simulare BAC 2024 M_mate-info, Subiectul I.2"
descriere: "Calculezi întâi f(1) = a, apoi f(a), și ajungi la o ecuație de gradul II în a cu două soluții. Subiectul I.2 din simularea de bacalaureat 2024."
capitol: "Funcții, ecuații și inecuații"
sursa: "BAC 2024, Simulare clasa a XII-a — Subiectul I.2"
varianta: "bac-2024-sm-v1"
subiect: "I"
pozitie: 2
punctaj: 5
dificultate: 2
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

$\left(f\circ f\right)\left(1\right)$ înseamnă $f\left(f\left(1\right)\right)$. Se
calculează **din interior spre exterior**: întâi $f\left(1\right)$, apoi $f$ din
rezultat.

Nu ai nevoie de formula generală a lui $f\circ f$; ar ieși un polinom de gradul
patru. Îți trebuie doar valoarea într-un punct.

Aici $f\left(1\right)$ iese chiar $a$, pentru că $1$ și $-1$ se reduc. Asta face
ca pasul al doilea să fie $f\left(a\right)$, în care $a$ apare și ca argument, și
ca parametru.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Calculezi $f\left(1\right)$, apoi $f\left(f\left(1\right)\right)$** <span class="punct">2p</span>

$$
f\left(1\right)=1^{2}+a\cdot 1-1=a
$$

Se reduce $1$ cu $-1$. Apoi înlocuiești $x=a$ în $f\left(x\right)=x^{2}+ax-1$:

$$
\left(f\circ f\right)\left(1\right)=f\left(a\right)=a^{2}+a\cdot a-1=2a^{2}-1
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Rezolvi ecuația** <span class="punct">3p</span>

$$
2a^{2}-1=1\ \Rightarrow\ 2a^{2}=2\ \Rightarrow\ a^{2}=1
$$

$a^{2}-1=\left(a-1\right)\left(a+1\right)=0$, deci $a=1$ sau $a=-1$.

<p class="rezultat">a ∈ {−1, 1}</p>

</div>
</div>

<span class="atentie">**$a^{2}=1$ are două soluții.** Dacă scrii doar $a=1$, pierzi jumătate din răspuns.</span>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$f\left(1\right)=a$, $\left(f\circ f\right)\left(1\right)=f\left(a\right)=2a^{2}-1$

$2a^{2}-1=1$, de unde obținem $a=-1$ sau $a=1$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se înmulțește în loc să se compună:** $\left(f\circ f\right)\left(1\right)=f\left(1\right)\cdot f\left(1\right)=a^{2}$.
Cercul $\circ$ înseamnă „aplici $f$ pe rezultat", nu produs.

</div>

<div class="greseala">

**La $f\left(a\right)$ se scrie $a^{2}+a-1$.** Termenul $ax$ devine $a\cdot a$, nu
$a$. Când argumentul și parametrul au aceeași literă, scrie întâi $a\cdot a$ și
abia apoi $a^{2}$.

</div>
