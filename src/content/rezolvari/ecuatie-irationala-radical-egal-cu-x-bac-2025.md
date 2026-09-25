---
titlu: "Ecuație irațională: √(2x² − 3x + 2) = x"
titluSeo: "√(2x² − 3x + 2) = x — ridicare la pătrat și verificarea condiției x ≥ 0, rezolvare cu barem, BAC 2025 Sesiunea I M_mate-info, Subiectul I.3"
descriere: "De ce trebuie x ≥ 0 înainte să ridici la pătrat și de ce radicandul nu mai trebuie verificat separat. Subiectul I.3, BAC 2025, Sesiunea I, Varianta 1."
capitol: "Funcții, ecuații și inecuații"
sursa: "BAC 2025, Sesiunea I, Varianta 1 — Subiectul I.3"
varianta: "bac-2025-s1-v1"
subiect: "I"
pozitie: 3
punctaj: 5
dificultate: 2
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

Un radical egal cu o expresie: ridici la pătrat. Dar ridicarea la pătrat poate aduce
soluții false, pentru că pierde semnul membrului drept.

**Condiția care contează e $x\ge 0$.** Radicalul e mereu nenegativ, deci și membrul
drept trebuie să fie. Radicandul nu trebuie verificat separat: după ridicare îl
egalezi cu $x^{2}$, care e oricum $\ge 0$.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Ridici la pătrat** <span class="punct">2p</span>

Cu $x\ge 0$:

$$
2x^{2}-3x+2=x^{2} \iff 2x^{2}-x^{2}-3x+2=0 \iff x^{2}-3x+2=0
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Rezolvi și verifici** <span class="punct">3p</span>

$$
x^{2}-3x+2=\left(x-1\right)\left(x-2\right)=0
$$

deci $x=1$ sau $x=2$. Ambele sunt pozitive, deci convin.

Verificare directă: pentru $x=1$, $\sqrt{2-3+2}=\sqrt{1}=1$; pentru $x=2$,
$\sqrt{8-6+2}=\sqrt{4}=2$.

<p class="rezultat">x = 1 sau x = 2</p>

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$2x^{2}-3x+2=x^{2}$, de unde $x^{2}-3x+2=0$, deci $x=1$ sau $x=2$, care convin.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se omite „care convin”.** Trei puncte sunt pe al doilea rând, iar verificarea
soluțiilor face parte din el. Chiar dacă aici ambele trec, trebuie spus.

</div>

<div class="greseala">

**Se pune condiția pe radicand și se uită $x\ge 0$.** $2x^{2}-3x+2>0$ pentru orice
$x$ (discriminantul e negativ), deci condiția aceea nu elimină nimic. Cea care poate
elimina e $x\ge 0$.

</div>
