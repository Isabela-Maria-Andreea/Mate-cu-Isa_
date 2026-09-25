---
titlu: "Progresie geometrică: primul termen din b₃ și b₄"
titluSeo: "Progresie geometrică cu b₃ = 40 și b₄ = 80, aflarea lui b₁ — rezolvare cu barem, Simulare BAC 2025 M_mate-info, Subiectul I.1"
descriere: "Rația iese dintr-o împărțire, iar b₁ se obține mergând înapoi doi pași. Subiectul I.1 din simularea de bacalaureat 2025, M_mate-info."
capitol: "Progresii aritmetice și geometrice"
sursa: "BAC 2025, Simulare clasa a XII-a — Subiectul I.1"
varianta: "bac-2025-sm-v1"
subiect: "I"
pozitie: 1
punctaj: 5
dificultate: 1
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

$b_3$ și $b_4$ sunt termeni **consecutivi**. Într-o progresie geometrică, raportul
a doi termeni consecutivi e chiar rația, deci o ai dintr-o singură împărțire.

De la $b_3$ la $b_1$ sunt doi pași înapoi, deci împarți la $q$ de două ori, adică la
$q^{2}$. Formula generală $b_n=b_1q^{n-1}$ spune același lucru: $b_3=b_1q^{2}$.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Rația** <span class="punct">2p</span>

$$
q=\frac{b_4}{b_3}=\frac{80}{40}=2
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Primul termen** <span class="punct">3p</span>

Din $b_3=b_1q^{2}$:

$$
b_1=\frac{b_3}{q^{2}}=\frac{40}{4}=10
$$

<p class="rezultat">b₁ = 10</p>

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$q=\dfrac{b_4}{b_3}=2$, unde $q$ este rația progresiei geometrice.

$b_1=\dfrac{b_3}{q^{2}}$, deci $b_1=\dfrac{40}{4}=10$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se scrie $b_3=b_1q^{3}$.** Exponentul e $n-1$, deci $2$. Cu $q^{3}$ ar ieși
$b_1=5$, iar $b_1,b_2,b_3$ ar fi $5,10,20$, ceea ce contrazice $b_3=40$. Merită
verificarea de două secunde: $10,20,40,80$.

</div>

<div class="greseala">

**Se tratează progresia ca aritmetică.** Diferența $b_4-b_3=40$ duce la $b_1=-40$.
Enunțul spune „geometrice", iar la progresia geometrică contează raportul, nu diferența.

</div>
