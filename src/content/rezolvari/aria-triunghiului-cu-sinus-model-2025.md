---
titlu: "Aria triunghiului când știi cosinusul unghiului"
titluSeo: "Aria triunghiului ABC cu AB = 6, BC = 10, cos B = 4/5 — sinusul din cosinus și formula cu sinus, BAC 2025 Model M_mate-info, Subiectul I.6"
descriere: "De ce cosinusul din enunț e doar un pas spre sinus, cum alegi semnul radicalului și ce formulă de arie folosești. Subiectul I.6, modelul BAC 2025."
capitol: "Trigonometrie"
sursa: "BAC 2025, Model — Subiectul I.6"
varianta: "bac-2025-model"
subiect: "I"
pozitie: 6
punctaj: 5
dificultate: 2
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

<figure class="desen">
<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triunghiul ABC cu latura BC de 10 pe orizontală, AB de 6 și unghiul B marcat; înălțimea din A cade în H, pe BC.">
  <polygon class="fig" points="30,200 280,200 150,110"/>
  <line class="aux" x1="150" y1="110" x2="150" y2="200"/>
  <path class="aux" d="M 62 200 A 32 32 0 0 0 56 182"/>
  <circle class="pct" cx="30" cy="200" r="3.5"/>
  <circle class="pct" cx="280" cy="200" r="3.5"/>
  <circle class="pct" cx="150" cy="110" r="3.5"/>
  <text class="et" x="14" y="218">B</text>
  <text class="et" x="284" y="218">C</text>
  <text class="et" x="144" y="100">A</text>
  <text class="et-mic" x="146" y="218">H</text>
  <text class="et-mic et-acc" x="76" y="146">6</text>
  <text class="et-mic et-acc" x="200" y="222">10</text>
  <text class="et-mic" x="68" y="194">B</text>
</svg>
<figcaption>Ai două laturi și unghiul dintre ele, adică exact datele formulei de arie cu sinus. Înălțimea AH e drumul alternativ.</figcaption>
</figure>

Ai două laturi, $AB$ și $BC$, și unghiul $B$ **dintre ele**. Asta e configurația
formulei

$$
\mathcal{A}_{ABC}=\frac{AB\cdot BC\cdot\sin B}{2}
$$

Enunțul îți dă însă cosinusul, nu sinusul. Deci primul pas e să-l obții pe
$\sin B$ din identitatea fundamentală $\sin^{2}B+\cos^{2}B=1$.

**Semnul radicalului.** Din identitate iese $\sin B=\pm\dfrac{3}{5}$. Un unghi de
triunghi e între $0^\circ$ și $180^\circ$, unde sinusul e pozitiv, deci rămâne doar
$+\dfrac{3}{5}$.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Sinusul din cosinus** <span class="punct">3p</span>

$$
\sin^{2}B=1-\cos^{2}B=1-\frac{16}{25}=\frac{9}{25}
$$

Cum $B\in\left(0^\circ,180^\circ\right)$, $\sin B>0$, deci

$$
\sin B=\frac{3}{5}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Aria** <span class="punct">2p</span>

$$
\mathcal{A}_{ABC}=\frac{AB\cdot BC\cdot\sin B}{2}=\frac{1}{2}\cdot 6\cdot 10\cdot\frac{3}{5}=\frac{1}{2}\cdot 36=18
$$

<p class="rezultat">Aria = 18</p>

</div>
</div>

<div class="alternativa">

**Cu înălțimea.** În triunghiul dreptunghic $ABH$, $AH=AB\cdot\sin B=6\cdot\dfrac{3}{5}=\dfrac{18}{5}$,
iar $\mathcal{A}=\dfrac{BC\cdot AH}{2}=\dfrac{10\cdot\frac{18}{5}}{2}=18$. E aceeași
formulă, desfăcută în doi pași. Tot ai nevoie de $\sin B$.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$\sin^{2}B=1-\dfrac{16}{25}=\dfrac{9}{25}$ și, cum $B$ e unghi al triunghiului,
$\sin B=\dfrac{3}{5}$.

$\mathcal{A}_{ABC}=\dfrac{AB\cdot BC\cdot\sin B}{2}=\dfrac{1}{2}\cdot 6\cdot 10\cdot\dfrac{3}{5}=18$

</div>

## Unde se pierd puncte

<div class="greseala">

**Se folosește cosinusul în formula ariei.** $\dfrac{1}{2}\cdot 6\cdot 10\cdot\dfrac{4}{5}=24$.
Formula are sinus. Dacă rezultatul nu e $18$, cum cere enunțul, ai semnalul că ceva
nu e în regulă.

</div>

<div class="greseala">

**Se scrie $\sin B=\dfrac{3}{5}$ fără justificare.** Trei puncte se dau pe acest rând.
Scrie identitatea și o jumătate de propoziție despre semn.

</div>
