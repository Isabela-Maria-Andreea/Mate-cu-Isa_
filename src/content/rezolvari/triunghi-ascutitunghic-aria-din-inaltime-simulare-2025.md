---
titlu: "Aria triunghiului din înălțime și o distanță la latură"
titluSeo: "Triunghi ascuțitunghic cu AB = 10, AD = 8 și d(D, AC) = 4√2 — aria egală cu 56, rezolvare cu barem, Simulare BAC 2025 M_mate-info, Subiectul I.6"
descriere: "Cum afli BD cu Pitagora și DC din distanța de la D la AC, apoi aria cu baza BC. Subiectul I.6 din simularea BAC 2025."
capitol: "Trigonometrie"
sursa: "BAC 2025, Simulare clasa a XII-a — Subiectul I.6"
varianta: "bac-2025-sm-v1"
subiect: "I"
pozitie: 6
punctaj: 5
dificultate: 3
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

<figure class="desen">
<svg viewBox="0 0 310 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triunghiul ABC cu baza BC orizontală. AD este înălțimea, de lungime 8, cu D pe BC. BD = 6 și DC = 8. Din D se duce perpendiculara DE pe AC, de lungime 4√2.">
  <polygon class="fig" points="30,230 282,230 138,86"/>
  <line class="fig" x1="138" y1="86" x2="138" y2="230"/>
  <line class="aux" x1="138" y1="230" x2="210" y2="158"/>
  <polyline class="aux" points="138,220 148,220 148,230"/>
  <polyline class="aux" points="203,151 196,158 203,165"/>
  <circle class="pct" cx="138" cy="230" r="3"/>
  <circle class="pct" cx="210" cy="158" r="3"/>
  <text class="et" x="14" y="248">B</text>
  <text class="et" x="286" y="248">C</text>
  <text class="et" x="132" y="76">A</text>
  <text class="et" x="132" y="250">D</text>
  <text class="et" x="214" y="152">E</text>
  <text class="et-mic" x="72" y="150">10</text>
  <text class="et-mic" x="122" y="164">8</text>
  <text class="et-mic" x="78" y="224">6</text>
  <text class="et-mic et-acc" x="160" y="186">4√2</text>
</svg>
<figcaption>Înălțimea AD împarte triunghiul în două triunghiuri dreptunghice. Din ABD iese BD, iar din ADC, cu DE, iese DC.</figcaption>
</figure>

Aria se calculează cu baza $BC$ și înălțimea $AD=8$, care e dată. Lipsește doar
$BC=BD+DC$. Cum triunghiul e ascuțitunghic, $D$ cade între $B$ și $C$, deci
lungimile se adună.

**$BD$ vine din triunghiul $ABD$**, dreptunghic în $D$, cu Pitagora.

**$DC$ vine din triunghiul $ADC$**, tot dreptunghic în $D$. Distanța de la $D$ la
$AC$ e înălțimea lui din unghiul drept, notată aici $DE$. Pentru un triunghi
dreptunghic, înălțimea pe ipotenuză e produsul catetelor supra ipotenuză:

$$
DE=\frac{AD\cdot DC}{AC}
$$

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Afli $BD$ și $DC$** <span class="punct">3p</span>

În triunghiul $ABD$, dreptunghic în $D$:

$$
BD=\sqrt{AB^{2}-AD^{2}}=\sqrt{100-64}=\sqrt{36}=6
$$

În triunghiul $ADC$, dreptunghic în $D$, notăm $DC=c$. Atunci $AC=\sqrt{64+c^{2}}$ și

$$
4\sqrt{2}=\frac{8c}{\sqrt{64+c^{2}}}
$$

Ridici la pătrat: $32=\dfrac{64c^{2}}{64+c^{2}}$, deci $32\left(64+c^{2}\right)=64c^{2}$,
adică $2048+32c^{2}=64c^{2}$, de unde $32c^{2}=2048$ și $c^{2}=64$. Cum $c>0$, $DC=8$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Aria** <span class="punct">2p</span>

$BC=BD+DC=6+8=14$.

$$
\mathcal{A}_{ABC}=\frac{BC\cdot AD}{2}=\frac{14\cdot 8}{2}=56
$$

<p class="rezultat">Aria = 56</p>

</div>
</div>

<div class="alternativa">

**Cu un unghi.** În triunghiul $ADE$, dreptunghic în $E$,
$\sin\angle DAE=\dfrac{DE}{AD}=\dfrac{4\sqrt{2}}{8}=\dfrac{\sqrt{2}}{2}$, deci
$\angle DAC=45^\circ$. Atunci triunghiul $ADC$ e dreptunghic isoscel și $DC=AD=8$.
Mai scurt, fără ecuație, dacă recunoști $\dfrac{\sqrt{2}}{2}$.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$BD=\sqrt{AB^{2}-AD^{2}}=6$. În triunghiul $ADC$, dreptunghic în $D$,
$\dfrac{AD\cdot DC}{AC}=4\sqrt{2}$, adică $\dfrac{8\cdot DC}{\sqrt{64+DC^{2}}}=4\sqrt{2}$,
de unde $DC=8$.

$BC=14$ și $\mathcal{A}_{ABC}=\dfrac{BC\cdot AD}{2}=\dfrac{14\cdot 8}{2}=56$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se scrie $DC=8$ fără justificare.** Trei puncte depind de $BD$ și $DC$ împreună.
Dacă $DC$ apare din senin, corectorul nu are ce puncta.

</div>

<div class="greseala">

**Se ia $BC=DC-BD$.** Asta ar fi valabil dacă $D$ ar cădea în afara segmentului,
ceea ce se întâmplă doar la un unghi obtuz în $B$. Enunțul spune „ascuțitunghic"
tocmai ca să poți aduna.

</div>
