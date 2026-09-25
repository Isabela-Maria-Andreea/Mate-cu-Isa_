---
titlu: "Dreaptă și parabolă cu un singur punct comun"
titluSeo: "Graficele lui f(x) = 2x − 1 și g(x) = x² − 4x + m au exact un punct comun — Δ = 0, rezolvare cu barem, Simulare BAC 2026 M_mate-info, Subiectul I.2"
descriere: "Cum traduci „exact un punct comun” într-o ecuație de gradul al doilea cu discriminant nul și afli parametrul m. Subiectul I.2 de la Simularea BAC 2026, clasa a XII-a."
capitol: "Funcții, ecuații și inecuații"
sursa: "BAC 2026, Simulare clasa a XII-a — Subiectul I.2"
varianta: "bac-2026-sm-v1"
subiect: "I"
pozitie: 2
punctaj: 5
dificultate: 2
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

**Punctele comune a două grafice sunt soluțiile ecuației $f\left(x\right)=g\left(x\right)$.**
Un punct $\left(x,y\right)$ e pe ambele grafice exact când $y=f\left(x\right)$ și
$y=g\left(x\right)$, deci când $f\left(x\right)=g\left(x\right)$.

Aici $f$ e de gradul I și $g$ de gradul al II-lea, deci ecuația are gradul al
II-lea. „Exact un punct comun" devine „exact o soluție reală", iar o ecuație de
gradul al II-lea are exact o soluție când **$\Delta=0$**.

Geometric: dreapta e tangentă la parabolă.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Egalezi funcțiile și aduci totul într-un membru** <span class="punct">2p</span>

$$
x^{2}-4x+m=2x-1
$$

Treci $2x$ și $-1$ în stânga, cu semn schimbat: $-4x-2x=-6x$ și $m+1$.

$$
x^{2}-6x+m+1=0
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Pui condiția $\Delta=0$** <span class="punct">3p</span>

Cu $a=1$, $b=-6$, $c=m+1$:

$$
\Delta=b^{2}-4ac=36-4\left(m+1\right)=36-4m-4=32-4m
$$

<span class="atentie">**Paranteza.** $4\left(m+1\right)$ se desface ca $4m+4$, iar minusul din fața ei schimbă ambele semne. Cine scrie $36-4m+1$ obține $m=\dfrac{37}{4}$.</span>

$$
32-4m=0 \Rightarrow m=8
$$

<p class="rezultat">m = 8</p>

</div>
</div>

<div class="aside">

**Verificare rapidă.** Pentru $m=8$ ecuația devine $x^{2}-6x+9=0$, adică
$\left(x-3\right)^{2}=0$, cu singura soluție $x=3$. Punctul comun este
$\left(3,5\right)$, pentru că $f\left(3\right)=5$. Pe foaie nu e necesar, dar
te asigură că n-ai greșit un semn.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$f\left(x\right)=g\left(x\right)$, deci $x^{2}-6x+m+1=0$.

Graficele au exact un punct comun, deci ecuația are soluție unică, adică
$\Delta=0$. Cum $\Delta=32-4m$, obținem $m=8$.

</div>

## Unde se pierd puncte

<!-- SCHIȚĂ: greșelile de mai jos sunt propuse, nu verificate pe lucrări reale. De confirmat de Isa. -->

<div class="greseala">

**Se pune $\Delta>0$ sau $\Delta\ge 0$.** $\Delta>0$ înseamnă două puncte comune,
iar $\Delta\ge 0$ înseamnă cel puțin unul. „Exact un punct" cere egalitate.

</div>

<div class="greseala">

**Lipsește justificarea pentru $\Delta=0$.** Scrie propoziția „ecuația are
soluție unică, deci $\Delta=0$". Fără ea, $32-4m=0$ apare pe foaie fără motiv.

</div>
