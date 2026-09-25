---
titlu: "Raza cercului circumscris unui triunghi dreptunghic"
titluSeo: "R = √10 pentru triunghiul dreptunghic cu AC = 6 și tg C = 1/3 — rezolvare cu barem, BAC 2026 M_mate-info, Subiectul I.6"
descriere: "De ce într-un triunghi dreptunghic nu ai nevoie de teorema sinusurilor: ipotenuza este chiar diametrul. Subiectul I.6, BAC 2026, Sesiunea specială, Varianta 2."
capitol: "Trigonometrie"
sursa: "BAC 2026, Sesiunea specială, Varianta 2 — Subiectul I.6"
varianta: "bac-2026-ss-v2"
subiect: "I"
pozitie: 6
punctaj: 5
dificultate: 3
data: 2026-09-17
ciorna: false
---

## Ce recunoști înainte să calculezi

<figure class="desen">
<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triunghi dreptunghic ABC cu unghiul drept în A, cateta AC de 6, cateta AB de 2, și cercul circumscris având ipotenuza BC drept diametru.">
  <circle class="cerc" cx="190" cy="150" r="126.5"/>
  <line class="aux" x1="70" y1="110" x2="310" y2="190"/>
  <polygon class="fig" points="70,190 310,190 70,110"/>
  <path class="fig" d="M 70 174 L 86 174 L 86 190"/>
  <circle class="pct" cx="190" cy="150" r="3"/>
  <circle class="pct" cx="70" cy="190" r="3"/>
  <circle class="pct" cx="310" cy="190" r="3"/>
  <circle class="pct" cx="70" cy="110" r="3"/>
  <text class="et" x="52" y="208">A</text>
  <text class="et" x="55" y="104">B</text>
  <text class="et" x="318" y="208">C</text>
  <text class="et et-acc" x="198" y="145">O</text>
  <text class="et-mic" x="178" y="212">AC = 6</text>
  <text class="et-mic" x="14" y="155">AB = 2</text>
  <text class="et-mic et-acc" x="196" y="120">R</text>
  <text class="et-mic" x="150" y="138">BC = 2√10</text>
</svg>
<figcaption>Unghiul drept fiind în A, ipotenuza BC este diametrul cercului circumscris, iar centrul O este mijlocul ei.</figcaption>
</figure>

Enunțul spune „dreptunghic în $A$", și asta schimbă complet problema.

**Într-un triunghi dreptunghic, ipotenuza este diametrul cercului circumscris.**
Centrul cercului e mijlocul ipotenuzei, iar raza e jumătate din ea:

$$
R=\frac{BC}{2}
$$

Nu ai nevoie de teorema sinusurilor, nu ai nevoie de arie, nu ai nevoie de formula
$R=\dfrac{abc}{4S}$. Ai nevoie doar de lungimea ipotenuzei.

Deci întrebarea reală e: cât e $BC$? Iar pentru asta îți trebuie a doua catetă, care
vine din tangentă.

**Tangenta unghiului $C$ leagă cele două catete.** Unghiul drept e în $A$, deci
față de $C$: cateta opusă e $AB$, cea alăturată e $AC$.

$$
\operatorname{tg}C=\frac{AB}{AC}
$$

Aici e locul unde se greșește cel mai des — se inversează opusa cu alăturata. Reține
că numitorul e latura care **pleacă din unghiul** despre care vorbești.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Afli a doua catetă din tangentă** <span class="punct">2p</span>

$$
\operatorname{tg}C=\frac{AB}{AC} \Rightarrow \frac{AB}{6}=\frac{1}{3} \Rightarrow AB=2
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Afli ipotenuza și împarți la doi** <span class="punct">3p</span>

Din teorema lui Pitagora în triunghiul dreptunghic $ABC$:

$$
BC=\sqrt{AB^{2}+AC^{2}}=\sqrt{4+36}=\sqrt{40}=2\sqrt{10}
$$

Cum $BC$ este ipotenuza, ea este diametrul cercului circumscris, deci
$R=\dfrac{BC}{2}$.

<p class="rezultat">R = √10</p>

</div>
</div>

## Ce îți spune baremul

Două puncte pentru cateta $AB$, trei pentru ipotenuză și rază. Baremul nu cere
demonstrarea faptului că ipotenuza e diametrul — îl consideră cunoscut. Dar îl cere
**folosit explicit**: relația $R=\dfrac{BC}{2}$ trebuie scrisă.

Un elev care calculează corect $BC=2\sqrt{10}$ și se oprește acolo a rezolvat
problema în cap, dar pe foaie nu apare răspunsul cerut.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$\operatorname{tg}C=\dfrac{AB}{AC}=\dfrac{AB}{6}=\dfrac{1}{3}$, de unde $AB=2$.

$$
BC=\sqrt{AB^{2}+AC^{2}}=\sqrt{40}=2\sqrt{10}
$$

Triunghiul fiind dreptunghic, $BC$ este diametrul cercului circumscris, deci
$R=\dfrac{BC}{2}=\sqrt{10}$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se inversează opusa cu alăturata.** Din $\operatorname{tg}C=\dfrac{AC}{AB}$ ar
rezulta $AB=18$, iar $R$ ar ieși complet altfel. Față de unghiul $C$, latura $AC$
pleacă din $C$ — e cea alăturată.

</div>

<div class="greseala">

**Se simplifică greșit radicalul.** $\sqrt{40}=2\sqrt{10}$, nu $4\sqrt{10}$ și nici
$\sqrt{4}\cdot\sqrt{10}$ lăsat nesimplificat. Rezultatul cerut e $\sqrt{10}$, deci un
factor greșit se vede imediat.

</div>

<div class="greseala">

**Se pornește cu teorema sinusurilor.** $\dfrac{BC}{\sin A}=2R$ funcționează și dă
același lucru, fiindcă $\sin 90^{\circ}=1$. Dar e un ocol: proprietatea ipotenuzei e
mai scurtă și nu cere să-ți amintești formula.

</div>

<div class="greseala">

**Se confundă raza cu diametrul.** $BC=2\sqrt{10}$ este diametrul. Răspunsul e
jumătatea lui.

</div>

