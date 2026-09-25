---
titlu: "Valoarea unei expresii trigonometrice"
titluSeo: "E(x) = (1+tg²x)·sin(x/2) + cos3x pentru x = π/3 — rezolvare cu barem, BAC 2026 M_mate-info, Subiectul I.6"
descriere: "Cum eviți radicalii folosind identitatea 1+tg²x = 1/cos²x și de ce fiecare termen are alt argument. Subiectul I.6, BAC 2026, Sesiunea I, Varianta 3."
capitol: "Trigonometrie"
sursa: "BAC 2026, Sesiunea I, Varianta 3 — Subiectul I.6"
varianta: "bac-2026-s1-v3"
subiect: "I"
pozitie: 6
punctaj: 5
dificultate: 3
data: 2026-09-17
ciorna: false
---

## Ce recunoști înainte să calculezi

<figure class="desen">
<svg viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cerc trigonometric cu cele trei unghiuri din expresie marcate: π/3 pentru tangentă, π/6 pentru sinus și π pentru cosinus.">
  <line class="ax" x1="40" y1="160" x2="330" y2="160"/>
  <line class="ax" x1="180" y1="290" x2="180" y2="30"/>
  <circle class="cerc" cx="180" cy="160" r="110"/>
  <line class="fig" x1="180" y1="160" x2="235" y2="65"/>
  <line class="fig" x1="180" y1="160" x2="275" y2="105"/>
  <line class="fig" x1="180" y1="160" x2="70" y2="160"/>
  <circle class="pct" cx="235" cy="65" r="3.5"/>
  <circle class="pct" cx="275" cy="105" r="3.5"/>
  <circle class="pct" cx="70" cy="160" r="3.5"/>
  <text class="et" x="242" y="58">π/3</text>
  <text class="et" x="283" y="101">π/6</text>
  <text class="et" x="46" y="152">π</text>
  <text class="et-mic et-acc" x="244" y="76">tg = √3</text>
  <text class="et-mic et-acc" x="285" y="119">sin = 1/2</text>
  <text class="et-mic et-acc" x="26" y="180">cos = −1</text>
  <text class="et-mic" x="186" y="286">x = π/3 · x/2 = π/6 · 3x = π</text>
</svg>
<figcaption>Cele trei unghiuri sunt diferite, deși vin din același x: argumentele expresiei sunt x, x/2 și 3x.</figcaption>
</figure>

Două observații, și exercițiul devine aritmetică.

**Prima, și cea mai importantă: cei trei termeni au argumente diferite.**
Expresia conține $\operatorname{tg}^{2}x$, $\sin\dfrac{x}{2}$ și $\cos 3x$. Pentru
$x=\dfrac{\pi}{3}$ asta înseamnă trei unghiuri distincte:

$$
x = \frac{\pi}{3}, \qquad \frac{x}{2} = \frac{\pi}{6}, \qquad 3x = \pi
$$

Greșeala clasică e să înlocuiești $\dfrac{\pi}{3}$ peste tot. Calculează întâi
cele trei unghiuri, separat, înainte de orice valoare trigonometrică.

**A doua: $1+\operatorname{tg}^{2}x$ nu se calculează, se recunoaște.** Este o
identitate fundamentală:

$$
1 + \operatorname{tg}^{2} x = \frac{1}{\cos^{2} x}
$$

Cu ea nu mai ai nevoie de $\operatorname{tg}\dfrac{\pi}{3}=\sqrt{3}$ deloc:

$$
1 + \operatorname{tg}^{2}\frac{\pi}{3} = \frac{1}{\cos^{2}\frac{\pi}{3}} = \frac{1}{\left(\frac{1}{2}\right)^{2}} = 4
$$

Ambele rute dau $4$, dar a doua nu trece prin niciun radical. La un examen
cronometrat, un radical în minus e o greșeală în minus.

<div class="aside">

**De ce contează domeniul.** Enunțul precizează $x\in\left(0,\dfrac{\pi}{2}\right)$
tocmai pentru ca $\operatorname{tg}x$ să existe și $\cos x \ne 0$. Nu e decor:
fără el, identitatea de mai sus nu s-ar putea aplica peste tot.

</div>

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Calculezi valorile trigonometrice necesare** <span class="punct">3p</span>

$$
\operatorname{tg}\frac{\pi}{3} = \sqrt{3}, \qquad \sin\frac{\pi}{6} = \frac{1}{2}, \qquad \cos\pi = -1
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Înlocuiești și calculezi** <span class="punct">2p</span>

$$
E\left(\frac{\pi}{3}\right) = \left(1+\left(\sqrt{3}\right)^{2}\right)\cdot\frac{1}{2} + \left(-1\right) = 4\cdot\frac{1}{2} - 1 = 1
$$

<p class="rezultat">E(π/3) = 1</p>

</div>
</div>

## Ce îți spune baremul

Trei puncte pentru cele trei valori trigonometrice, două pentru înlocuire. Din
nou, partea grea după barem nu e calculul final, ci identificarea corectă a
unghiurilor.

Scrie cele trei valori pe un rând separat, exact ca în barem. Dacă le calculezi
mental și treci direct la înlocuire, o greșeală de aritmetică la final îți ia și
punctele pe care le meritai pentru unghiuri.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$\operatorname{tg}\dfrac{\pi}{3}=\sqrt{3}$, $\sin\dfrac{\pi}{6}=\dfrac{1}{2}$, $\cos\pi=-1$.

$$
E\left(\frac{\pi}{3}\right)=\left(1+3\right)\cdot\frac{1}{2}+\left(-1\right)=1
$$

</div>

## Unde se pierd puncte

<div class="greseala">

**Se folosește același argument peste tot.** $\sin\dfrac{\pi}{3}$ în loc de
$\sin\dfrac{\pi}{6}$, sau $\cos\dfrac{\pi}{3}$ în loc de $\cos\pi$. E greșeala
pe care o testează problema, prin alegerea a trei argumente diferite.

</div>

<div class="greseala">

**Se confundă $\operatorname{tg}^{2}x$ cu $\operatorname{tg}\left(x^{2}\right)$.**
Notația $\operatorname{tg}^{2}x$ înseamnă $\left(\operatorname{tg}x\right)^{2}$,
deci $\left(\sqrt{3}\right)^{2}=3$.

</div>

<div class="greseala">

**Se pierde semnul lui $\cos\pi$.** $\cos\pi = -1$, nu $1$. Cu semnul greșit
rezultatul iese $3$, iar cerința era „arătați că $E=1$" — deci vezi imediat că ai
greșit, dacă te uiți.

</div>

