---
titlu: "E(π/3) = 0 pentru E(x) = tg x − 4 cos(x/2) · cos x"
titluSeo: "E(x) = tg x − 4cos(x/2)·cos x, E(π/3) = 0 — valorile lui tg π/3, cos π/6 și cos π/3, rezolvare cu barem, Simulare BAC 2024 M_mate-info, Subiectul I.6"
descriere: "Înlocuiești x = π/3, observi că x/2 devine π/6 și citești cele trei valori din triunghiul cu unghiuri de 30° și 60°. Subiectul I.6, simularea BAC 2024."
capitol: "Trigonometrie"
sursa: "BAC 2024, Simulare clasa a XII-a — Subiectul I.6"
varianta: "bac-2024-sm-v1"
subiect: "I"
pozitie: 6
punctaj: 5
dificultate: 1
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

<figure class="desen">
<svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triunghi dreptunghic cu unghiul drept în C, unghiul de 60 de grade în A și cel de 30 de grade în B. Cateta AC are lungimea 1, cateta BC are lungimea radical din 3, ipotenuza AB are lungimea 2.">
  <polygon class="fig" points="60,226 150,226 60,70"/>
  <polyline class="aux" points="60,214 72,214 72,226"/>
  <path class="aux" d="M 126 226 A 24 24 0 0 0 138 205.2"/>
  <path class="aux" d="M 60 102 A 32 32 0 0 0 76 97.7"/>
  <text class="et" x="40" y="244">C</text>
  <text class="et" x="154" y="244">A</text>
  <text class="et" x="52" y="60">B</text>
  <text class="et-mic" x="100" y="246">1</text>
  <text class="et-mic" x="30" y="152">√3</text>
  <text class="et-mic" x="112" y="144">2</text>
  <text class="et-mic et-acc" x="110" y="218">60°</text>
  <text class="et-mic et-acc" x="66" y="120">30°</text>
</svg>
<figcaption>Jumătatea unui triunghi echilateral cu latura 2. Din el se citesc toate cele trei valori: tg 60° = √3/1, cos 30° = √3/2, cos 60° = 1/2.</figcaption>
</figure>

Nu e nimic de simplificat în $E\left(x\right)$ în general. Cerința e doar o
valoare, deci înlocuiești $x=\dfrac{\pi}{3}$.

Singurul lucru de observat e argumentul lui primul cosinus:
$\dfrac{x}{2}=\dfrac{\pi}{6}$. Astfel apar două unghiuri, $\dfrac{\pi}{3}$ și
$\dfrac{\pi}{6}$, adică $60°$ și $30°$, ambele din același triunghi dreptunghic
(cel din desen).

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Valorile trigonometrice** <span class="punct">3p</span>

Pentru $x=\dfrac{\pi}{3}$, $\dfrac{x}{2}=\dfrac{\pi}{6}$. Din triunghiul din
desen (cateta opusă supra cea alăturată, cateta alăturată supra ipotenuză):

$$
\operatorname{tg}\frac{\pi}{3}=\frac{\sqrt{3}}{1}=\sqrt{3},\qquad \cos\frac{\pi}{6}=\frac{\sqrt{3}}{2},\qquad \cos\frac{\pi}{3}=\frac{1}{2}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Înlocuiești** <span class="punct">2p</span>

$4\cdot\dfrac{\sqrt{3}}{2}\cdot\dfrac{1}{2}=\dfrac{4\sqrt{3}}{4}=\sqrt{3}$; se
simplifică $4$ de sus cu $2\cdot 2$ de jos:

$$
E\left(\frac{\pi}{3}\right)=\sqrt{3}-4\cdot\frac{\sqrt{3}}{2}\cdot\frac{1}{2}=\sqrt{3}-\sqrt{3}=0
$$

<p class="rezultat">E(π/3) = 0</p>

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$\operatorname{tg}\dfrac{\pi}{3}=\sqrt{3}$, $\cos\dfrac{\pi}{6}=\dfrac{\sqrt{3}}{2}$,
$\cos\dfrac{\pi}{3}=\dfrac{1}{2}$

$E\left(\dfrac{\pi}{3}\right)=\sqrt{3}-4\cdot\dfrac{\sqrt{3}}{2}\cdot\dfrac{1}{2}=\sqrt{3}-\sqrt{3}=0$

</div>

## Unde se pierd puncte

<div class="greseala">

**Se scrie $\cos\dfrac{x}{2}=\dfrac{\cos x}{2}$.** Argumentul se împarte la $2$,
nu valoarea. $\cos\dfrac{\pi}{6}=\dfrac{\sqrt{3}}{2}$, pe când
$\dfrac{1}{2}\cos\dfrac{\pi}{3}=\dfrac{1}{4}$.

</div>

<div class="greseala">

**Se inversează sinusul cu cosinusul la $30°$ și $60°$:** $\cos\dfrac{\pi}{6}=\dfrac{1}{2}$.
Atunci $E\left(\dfrac{\pi}{3}\right)=\sqrt{3}-1$. Dacă „arătați că" nu iese
zero, verifică întâi valorile din tabel. Din desen: la $30°$, cateta alăturată
e cea lungă, $\sqrt{3}$.

</div>
