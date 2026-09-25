---
titlu: "Termenul din mijlocul unei progresii aritmetice"
titluSeo: "a₂ dintr-o progresie aritmetică cu a₁ = 6 și a₃ = 30 — rezolvare cu barem, BAC 2026 M_mate-info, Subiectul I.1"
descriere: "De ce nu ai nevoie de rația progresiei ca să afli termenul din mijloc. Subiectul I.1, BAC 2026, Sesiunea specială, Varianta 2."
capitol: "Progresii aritmetice și geometrice"
sursa: "BAC 2026, Sesiunea specială, Varianta 2 — Subiectul I.1"
varianta: "bac-2026-ss-v2"
subiect: "I"
pozitie: 1
punctaj: 5
dificultate: 1
data: 2026-09-17
ciorna: false
---

## Ce recunoști înainte să calculezi

Reflexul e să afli rația: din $a_{3}=a_{1}+2r$ scoți $r=12$, apoi $a_{2}=a_{1}+r=18$.
Corect, dar sunt doi pași în plus.

Observația care scurtează totul: într-o progresie aritmetică, **fiecare termen este
media aritmetică a vecinilor săi**. Nu e un truc, e chiar definiția scrisă altfel —
dacă diferența până la vecinul din stânga e aceeași cu cea până la vecinul din
dreapta, termenul stă exact la mijloc.

$$
a_{2}=\frac{a_{1}+a_{3}}{2}
$$

Ți se dau exact $a_{1}$ și $a_{3}$. Enunțul e construit ca să folosești proprietatea
asta, nu ca să calculezi rația.

<div class="aside">

**Se generalizează.** Aceeași relație funcționează pentru orice termen cu vecini
simetrici: $a_{n}=\dfrac{a_{n-k}+a_{n+k}}{2}$. La progresii geometrice cu termeni
pozitivi, analogul e media geometrică: $b_{n}=\sqrt{b_{n-k}\cdot b_{n+k}}$.

</div>

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii termenul ca medie a vecinilor** <span class="punct">3p</span>

$$
a_{2}=\frac{a_{1}+a_{3}}{2}=\frac{6+30}{2}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Calculezi** <span class="punct">2p</span>

$$
\frac{36}{2}=18
$$

<p class="rezultat">a₂ = 18</p>

</div>
</div>

## Ce îți spune baremul

Trei puncte din cinci pentru scrierea relației, două pentru împărțire. Raportul e
neobișnuit de dezechilibrat pentru un calcul atât de scurt, și spune limpede ce se
testează: nu aritmetica, ci faptul că știi proprietatea.

Deci scrie rândul cu $\dfrac{a_{1}+a_{3}}{2}$ explicit, chiar dacă vezi răspunsul din
cap. Dacă treci direct la $18$, riști să rămâi cu două puncte din cinci.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$$
a_{2}=\frac{a_{1}+a_{3}}{2}=\frac{6+30}{2}=\frac{36}{2}=18
$$

</div>

## Unde se pierd puncte

<div class="greseala">

**Se confundă cu media geometrică.** $\sqrt{6\cdot 30}=\sqrt{180}$ e relația de la
progresii geometrice. Aici e aritmetică: semisumă, nu radical din produs.

</div>

<div class="greseala">

**Se calculează rația și se oprește acolo.** $r=12$ nu e răspunsul. Cerința e
termenul $a_{2}$, deci ultimul rând trebuie să fie $a_{2}=18$.

</div>

<div class="greseala">

**Se sare peste relație.** Rezultatul corect fără nicio justificare scrisă nu ia
automat punctele de raționament. Trei din cele cinci puncte stau în rândul pe care
ești tentată să-l sari.

</div>

