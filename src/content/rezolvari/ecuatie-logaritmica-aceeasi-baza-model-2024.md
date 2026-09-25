---
titlu: "Ecuația log₂(x² + 8) = log₂(8 − 2x)"
titluSeo: "log₂(x² + 8) = log₂(8 − 2x) — egalarea argumentelor și condițiile de existență, rezolvare cu barem, BAC 2024 Model M_mate-info, Subiectul I.3"
descriere: "Aceeași bază de ambele părți înseamnă argumente egale, dar soluțiile trebuie verificate în condițiile de existență. Subiectul I.3, modelul BAC 2024."
capitol: "Numere reale, puteri și logaritmi"
sursa: "BAC 2024, Model — Subiectul I.3"
varianta: "bac-2024-model"
subiect: "I"
pozitie: 3
punctaj: 5
dificultate: 1
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

Ambii logaritmi au baza $2$. Logaritmul într-o bază fixată e injectiv, deci
$\log_{2}u=\log_{2}v$ se întâmplă doar când $u=v$. Treci direct la egalitatea
argumentelor.

Prețul e că egalitatea $u=v$ nu mai știe că $u$ și $v$ trebuie să fie pozitive.
Asta verifici separat, la final, pe fiecare soluție.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Egalezi argumentele** <span class="punct">3p</span>

$$
x^{2}+8=8-2x
$$

Muți totul în stânga. Se reduce $8$ cu $-8$:

$$
x^{2}+2x=0
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Rezolvi și verifici condițiile** <span class="punct">2p</span>

Scoți $x$ factor comun: $x\left(x+2\right)=0$, deci $x=0$ sau $x=-2$.

Condițiile de existență: $x^{2}+8>0$ e adevărată pentru orice $x$ real, iar
$8-2x>0$ înseamnă $x<4$.

- $x=0$: $8-0=8>0$, convine.
- $x=-2$: $8+4=12>0$, convine.

<p class="rezultat">x ∈ {−2, 0}</p>

</div>
</div>

<span class="atentie">**Baremul scrie „care convin".** Chiar dacă aici ambele soluții trec, verificarea trebuie să apară pe foaie. Fără ea, al doilea pas nu e complet.</span>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$x^{2}+8=8-2x$, de unde obținem $x^{2}+2x=0$, deci $x=-2$ sau $x=0$, care
convin.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se împarte la $x$.** Din $x^{2}=-2x$ se scrie $x=-2$ și se pierde soluția
$x=0$. Nu împarți niciodată o ecuație la o expresie care poate fi zero; scoți
factor comun.

</div>

<div class="greseala">

**Lipsește verificarea condițiilor.** Aici nu costă o soluție greșită, dar
costă cuvintele „care convin", pe care baremul le punctează.

</div>
