---
titlu: "Ecuație cu valori ale unei funcții de gradul I"
titluSeo: "f(a) + f(−2a) = a pentru f(x) = 3x − 4 — rezolvare cu barem, BAC 2026 M_mate-info, Subiectul I.2"
descriere: "De ce f(−2a) nu este −2·f(a) și cum se rezolvă corect o ecuație cu valori ale unei funcții de gradul I. Subiectul I.2, BAC 2026, Sesiunea I, Varianta 3."
capitol: "Funcții, ecuații și inecuații"
sursa: "BAC 2026, Sesiunea I, Varianta 3 — Subiectul I.2"
varianta: "bac-2026-s1-v3"
subiect: "I"
pozitie: 2
punctaj: 5
dificultate: 2
data: 2026-09-17
ciorna: false
---

## Ce recunoști înainte să calculezi

Problema pare o simplă substituție, și chiar este. Dar are o capcană care costă
puncte în fiecare an, iar ea se vede înainte de orice calcul.

Scrierea $f(-2a)$ **nu** înseamnă $-2 \cdot f(a)$.

Tentația e reală, pentru că $f(x) = 3x - 4$ arată „liniar". Nu e. O funcție
pentru care ai avea voie să scoți factorul afară ar trebui să îndeplinească
$f(\lambda x) = \lambda f(x)$, iar asta cere termen liber zero. Aici termenul
liber e $-4$, și el **nu se înmulțește cu nimic** — rămâne $-4$ oricât de
complicat ar fi argumentul.

$$
f(-2a) = 3 \cdot (-2a) - 4 = -6a - 4
\qquad\text{și nu}\qquad
-2\left(3a - 4\right) = -6a + 8
$$

Diferența e doar la semnul termenului liber, dar schimbă complet răspunsul.

<div class="aside">

**Regula practică.** $f(\text{ceva})$ înseamnă: iei expresia lui $f$ și pui
„ceva" în locul fiecărui $x$. Atât. Nu muți factori în față, nu simplifici
înainte de substituție. Când argumentul e mai complicat, scrie-l între
paranteze — $3 \cdot (-2a)$, nu $3 \cdot -2a$ — și capcana dispare de la sine.

</div>

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Calculezi separat cele două valori** <span class="punct">3p</span>

$$
f(a) = 3a - 4, \qquad f(-2a) = 3\left(-2a\right) - 4 = -6a - 4
$$

pentru orice număr real $a$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Scrii ecuația și o rezolvi** <span class="punct">2p</span>

$$
3a - 4 - 6a - 4 = a \;\Longleftrightarrow\; -3a - 8 = a \;\Longleftrightarrow\; 4a = -8
$$

<p class="rezultat">a = −2</p>

</div>
</div>

## Ce îți spune baremul

Merită privit cum se împart cele 5 puncte: **3 pentru substituție și doar 2
pentru rezolvarea ecuației**.

Adică partea care se notează cel mai gras nu e algebra, ci faptul că ai înțeles
ce înseamnă $f(-2a)$. Asta confirmă că aici se testează exact capcana de mai
sus, nu capacitatea de a rezolva o ecuație de gradul I.

Concluzia practică: scrie explicit ambele valori, pe un rând separat, chiar dacă
ți se pare banal. Dacă sari direct la ecuația finală și greșești un semn, pierzi
și punctele de substituție, pentru că nu se vede nicăieri că le aveai.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$f\left(a\right)=3a-4$, $f\left(-2a\right)=-6a-4$, pentru orice număr real $a$.

$$
3a-4-6a-4=a \Rightarrow a=-2
$$

</div>

## Unde se pierd puncte

<div class="greseala">

**Se scoate factorul în fața funcției.** $f(-2a) = -2f(a)$ dă $-6a + 8$ în loc de
$-6a - 4$, iar răspunsul iese $a = \dfrac{4}{7}$. E greșeala principală testată
de problemă.

</div>

<div class="greseala">

**Se pierde un semn la adunare.** $3a - 4 - 6a - 4$ are **doi** termeni liberi de
$-4$, nu unul. Cel de-al doilea vine din $f(-2a)$ și se uită ușor dacă scrii
totul pe un singur rând.

</div>

<div class="greseala">

**Nu se scrie răspunsul.** Cerința e „determinați numărul real $a$", deci ultimul
rând trebuie să fie $a = -2$, nu $4a = -8$.

</div>

