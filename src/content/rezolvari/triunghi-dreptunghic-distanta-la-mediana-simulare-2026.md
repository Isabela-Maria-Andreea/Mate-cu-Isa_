---
titlu: "Distanța de la C la mediana AM"
titluSeo: "Triunghi dreptunghic cu AB = 9, AC = 12 — distanța de la C la dreapta AM este 7,2, rezolvare cu barem, Simulare BAC 2026 M_mate-info, Subiectul I.6"
descriere: "De ce, într-un triunghi dreptunghic, distanța de la C la mediana AM este egală cu înălțimea din A, și cum o calculezi din arie. Subiectul I.6, Simularea BAC 2026, cu desen."
capitol: "Trigonometrie"
sursa: "BAC 2026, Simulare clasa a XII-a — Subiectul I.6"
varianta: "bac-2026-sm-v1"
subiect: "I"
pozitie: 6
punctaj: 5
dificultate: 3
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

<figure class="desen">
<svg viewBox="0 0 320 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triunghiul ABC dreptunghic în A, cu AB = 9 vertical și AC = 12 orizontal. M este mijlocul ipotenuzei BC. Perpendiculara din C pe dreapta AM cade pe prelungirea lui AM, dincolo de M. AD este înălțimea din A pe BC.">
  <polygon class="fig" points="40,260 40,80 280,260"/>
  <line class="fig" x1="40" y1="260" x2="160" y2="170"/>
  <line class="aux" x1="160" y1="170" x2="209.6" y2="132.8"/>
  <line class="aux" x1="40" y1="260" x2="126.4" y2="144.8"/>
  <line class="vect" x1="280" y1="260" x2="193.6" y2="144.8"/>
  <polyline class="aux" points="40,250 50,250 50,260"/>
  <polyline class="aux" points="185.6,150.8 191.6,158.8 199.6,152.8"/>
  <circle class="pct" cx="160" cy="170" r="3"/>
  <circle class="pct" cx="193.6" cy="144.8" r="3"/>
  <circle class="pct" cx="126.4" cy="144.8" r="3"/>
  <text class="et" x="24" y="276">A</text>
  <text class="et" x="24" y="80">B</text>
  <text class="et" x="286" y="276">C</text>
  <text class="et" x="150" y="192">M</text>
  <text class="et" x="198" y="138">E</text>
  <text class="et" x="110" y="138">D</text>
  <text class="et-mic" x="18" y="174">9</text>
  <text class="et-mic" x="152" y="280">12</text>
  <text class="et-mic et-acc" x="244" y="196">7,2</text>
</svg>
<figcaption>Piciorul perpendicularei din C, notat E, cade pe prelungirea lui AM, nu pe segment. De aceea enunțul spune „dreapta AM”. CE și AD au aceeași lungime.</figcaption>
</figure>

Două lucruri declanșează rezolvarea.

**$M$ e mijlocul ipotenuzei.** Într-un triunghi dreptunghic, mediana din unghiul
drept are jumătate din ipotenuză, deci $AM=BM=CM$. Triunghiul $AMC$ e isoscel,
cu $AM=CM$.

**Distanța de la un vârf la o latură e o înălțime.** $d\left(C,AM\right)$ este
înălțimea din $C$ a triunghiului $AMC$, iar $d\left(A,CM\right)$ este înălțimea
din $A$. Aria lui $AMC$ se scrie în două feluri:

$$
\frac{AM\cdot d\left(C,AM\right)}{2}=\frac{CM\cdot d\left(A,CM\right)}{2}
$$

Cum $AM=CM$, cele două distanțe sunt egale. Iar $d\left(A,CM\right)$ e chiar
înălțimea $AD$ a triunghiului mare, pentru că dreapta $CM$ este dreapta $BC$.

Deci problema se reduce la **înălțimea pe ipotenuză** într-un triunghi
dreptunghic, calculată din arie.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Reduci distanța cerută la înălțimea $AD$** <span class="punct">3p</span>

$AM$ e mediana corespunzătoare ipotenuzei, deci $AM=\dfrac{BC}{2}=CM$. În
triunghiul isoscel $AMC$, înălțimile din $C$ și din $A$ sunt egale (din scrierea
ariei în două feluri):

$$
d\left(C,AM\right)=d\left(A,CM\right)=AD
$$

unde $AD$ este înălțimea din $A$ a triunghiului $ABC$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Calculezi $BC$ și $AD$ din arie** <span class="punct">2p</span>

Din teorema lui Pitagora:

$$
BC^{2}=AB^{2}+AC^{2}=81+144=225 \Rightarrow BC=15
$$

Aria lui $ABC$ se scrie cu catetele sau cu ipotenuza și înălțimea:

$$
\frac{BC\cdot AD}{2}=\frac{AB\cdot AC}{2} \Rightarrow \frac{15\cdot AD}{2}=\frac{9\cdot 12}{2}
$$

Se simplifică numitorul $2$ din ambii membri: $15\cdot AD=108$, deci

$$
AD=\frac{108}{15}=\frac{36}{5}=7{,}2
$$

<p class="rezultat">d(C, AM) = 7,2</p>

</div>
</div>

<div class="alternativa">

**Direct din aria lui $AMC$.** Mediana $AM$ împarte triunghiul în două
triunghiuri de arii egale, deci $\mathcal{A}_{AMC}=\dfrac{1}{2}\cdot\dfrac{9\cdot 12}{2}=27$.
Cu $AM=\dfrac{15}{2}$: $\dfrac{1}{2}\cdot\dfrac{15}{2}\cdot d\left(C,AM\right)=27$,
deci $d\left(C,AM\right)=\dfrac{108}{15}=7{,}2$. Nu mai ai nevoie de $AD$.

</div>

<div class="aside">

**De ce nu cu coordonate?** Merge: $A\left(0,0\right)$, $B\left(0,9\right)$,
$C\left(12,0\right)$, $M\left(6;\dfrac{9}{2}\right)$, dreapta $AM$ are ecuația
$3x-4y=0$, iar formula distanței dă $\dfrac{\left|36\right|}{5}=7{,}2$. Dar
formula distanței de la punct la dreaptă e o sursă de greșeli la semne, iar
calea prin arii are trei rânduri.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$AM=CM$, de unde obținem $d\left(C,AM\right)=d\left(A,CM\right)=AD$, unde $AD$ este
înălțime a triunghiului $ABC$.

$BC=15$ și, cum $\dfrac{15\cdot AD}{2}=\dfrac{9\cdot 12}{2}$, obținem
$d\left(C,AM\right)=7{,}2$.

</div>

## Unde se pierd puncte

<!-- SCHIȚĂ: greșelile de mai jos sunt propuse, nu verificate pe lucrări reale. De confirmat de Isa. -->

<div class="greseala">

**Se caută piciorul perpendicularei pe segmentul $AM$.** Unghiul $AMC$ e obtuz,
deci perpendiculara din $C$ cade pe prelungire. Un desen făcut la întâmplare
te poate face să crezi că distanța e $CM$ sau o parte din $AC$.

</div>

<div class="greseala">

**Se afirmă $d\left(C,AM\right)=AD$ fără justificare.** Egalitatea vine din
$AM=CM$. Propoziția aceea ține 3p din 5.

</div>
