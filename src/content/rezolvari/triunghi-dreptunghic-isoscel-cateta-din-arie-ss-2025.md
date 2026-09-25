---
titlu: "Triunghi dreptunghic: cateta din arie și BC = AB√2"
titluSeo: "Triunghi dreptunghic în A cu aria 32 și BC = AB√2 — AC = 8, rezolvare cu barem, BAC 2025 Sesiunea specială M_mate-info, Subiectul I.6"
descriere: "De ce BC = AB√2 face triunghiul isoscel și cum iese cateta din arie. Subiectul I.6, BAC 2025, Sesiunea specială, Varianta 3."
capitol: "Trigonometrie"
sursa: "BAC 2025, Sesiunea specială, Varianta 3 — Subiectul I.6"
varianta: "bac-2025-ss-v3"
subiect: "I"
pozitie: 6
punctaj: 5
dificultate: 2
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

<figure class="desen">
<svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triunghiul ABC dreptunghic în A, cu catetele AB și AC egale și ipotenuza BC; unghiul B are 45 de grade.">
  <polygon class="fig" points="40,220 40,60 200,220"/>
  <polyline class="aux" points="40,208 52,208 52,220"/>
  <path class="aux" d="M 40 90 A 30 30 0 0 0 61 81"/>
  <circle class="pct" cx="40" cy="220" r="3"/>
  <circle class="pct" cx="40" cy="60" r="3"/>
  <circle class="pct" cx="200" cy="220" r="3"/>
  <text class="et" x="22" y="238">A</text>
  <text class="et" x="22" y="56">B</text>
  <text class="et" x="206" y="238">C</text>
  <text class="et-mic" x="50" y="112">45°</text>
  <text class="et-mic et-acc" x="126" y="130">AB√2</text>
</svg>
<figcaption>Ipotenuza e √2 ori o catetă doar în triunghiul dreptunghic isoscel. Atunci catetele sunt egale.</figcaption>
</figure>

Relația $BC=AB\sqrt{2}$ ar trebui să-ți sune cunoscut: e diagonala pătratului în
funcție de latură, adică ipotenuza triunghiului dreptunghic isoscel. Deci
$AC=AB$.

Cu catetele egale, aria $\dfrac{AB\cdot AC}{2}=\dfrac{AC^{2}}{2}$ dă direct $AC$.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Arăți că triunghiul e isoscel** <span class="punct">3p</span>

În triunghiul dreptunghic în $A$, $\cos B=\dfrac{AB}{BC}$ (cateta alăturată supra
ipotenuză):

$$
\frac{AB}{BC}=\frac{AB}{AB\sqrt{2}}=\frac{1}{\sqrt{2}}
$$

deci $B=\dfrac{\pi}{4}$. Atunci și $C=\dfrac{\pi}{2}-\dfrac{\pi}{4}=\dfrac{\pi}{4}$,
iar $AB=AC$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Folosești aria** <span class="punct">2p</span>

$$
\frac{AB\cdot AC}{2}=32 \iff \frac{AC^{2}}{2}=32 \iff AC^{2}=64
$$

Cum $AC>0$:

<p class="rezultat">AC = 8</p>

</div>
</div>

<div class="alternativa">

**Cu Pitagora, fără unghiuri.** $AC^{2}=BC^{2}-AB^{2}=2AB^{2}-AB^{2}=AB^{2}$, deci
$AC=AB$. Restul e identic. E probabil calea cea mai rapidă, pentru că nu cere să
recunoști $\dfrac{1}{\sqrt{2}}$ ca $\cos 45^\circ$.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$\dfrac{AB}{BC}=\dfrac{1}{\sqrt{2}}$, de unde $B=\dfrac{\pi}{4}$, deci $AB=AC$.

$\dfrac{AB\cdot AC}{2}=32$, de unde $AC=8$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se scrie $AC^{2}=64$ și atât.** Trebuie și ultimul pas, $AC=8$, cu $AC>0$ ca motiv
pentru care se ia doar rădăcina pozitivă.

</div>

<div class="greseala">

**Se uită împărțirea la $2$ în formula ariei.** $AB\cdot AC=32$ dă $AC=4\sqrt{2}$, iar
enunțul cere să arăți $8$. Nepotrivirea e semnalul.

</div>
