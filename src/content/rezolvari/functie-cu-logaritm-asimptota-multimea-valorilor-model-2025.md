---
titlu: "Funcția ln x / x³: asimptotă și mulțimea valorilor"
titluSeo: "f(x) = ln x / x³ — derivată, asimptota orizontală y = 0 și ecuația f(x) = m cu cel puțin o soluție, BAC 2025 Model M_mate-info, Subiectul III.1"
descriere: "Derivata unui cât cu logaritm, limita la +∞ cu l'Hôpital și cum citești din tabelul de variație pentru ce m are ecuația soluții. Subiectul III.1, modelul BAC 2025."
capitol: "Studiul funcției și reprezentarea grafică"
sursa: "BAC 2025, Model — Subiectul III.1"
varianta: "bac-2025-model"
subiect: "III"
pozitie: 1
subpuncte:
  - "Derivata"
  - "Asimptota orizontală spre +∞"
  - "Pentru ce m are f(x) = m soluții"
punctaj: 15
dificultate: 3
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

**La a), rezultatul are $x^{4}$ la numitor, nu $x^{6}$.** Derivata câtului îți dă
$\left(x^{3}\right)^{2}=x^{6}$ jos, deci undeva se simplifică $x^{2}$. Știind asta,
cauți factorul comun $x^{2}$ la numărător.

**La b), asimptota orizontală e o limită.** Calculezi $\lim_{x\to+\infty}f\left(x\right)$;
dacă iese finită, $y=$ acea valoare e asimptota.

**La c), „ecuația $f\left(x\right)=m$ are cel puțin o soluție" înseamnă că $m$ e o
valoare a funcției.** Întrebarea reală e: care e mulțimea valorilor lui $f$? O afli
din tabelul de variație: limitele la capete și valoarea în punctul critic.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Derivata

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Aplici formula câtului** <span class="punct">3p</span>

Cu $u=\ln x$, $u'=\dfrac{1}{x}$, $v=x^{3}$, $v'=3x^{2}$:

$$
f'\left(x\right)=\frac{u'v-uv'}{v^{2}}=\frac{\frac{1}{x}\cdot x^{3}-3x^{2}\ln x}{x^{6}}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Simplifici prin $x^{2}$** <span class="punct">2p</span>

$\dfrac{1}{x}\cdot x^{3}=x^{2}$, deci numărătorul e $x^{2}-3x^{2}\ln x=x^{2}\left(1-3\ln x\right)$:

$$
f'\left(x\right)=\frac{x^{2}\left(1-3\ln x\right)}{x^{6}}=\frac{1-3\ln x}{x^{4}}, \quad x\in\left(0,+\infty\right)
$$

Se simplifică $x^{2}$ de sus cu $x^{2}$ din $x^{6}$, care e nenul pe domeniu.

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Asimptota orizontală spre +∞

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Calculezi limita** <span class="punct">3p</span>

Când $x\to+\infty$, $\ln x\to+\infty$ și $x^{3}\to+\infty$, deci ai
$\left[\dfrac{\infty}{\infty}\right]$. Ambele funcții sunt derivabile, iar
$\left(x^{3}\right)'=3x^{2}\ne 0$ pentru $x$ mare, deci se aplică l'Hôpital:

$$
\lim_{x\rightarrow +\infty}\frac{\ln x}{x^{3}}=\lim_{x\rightarrow +\infty}\frac{\frac{1}{x}}{3x^{2}}=\lim_{x\rightarrow +\infty}\frac{1}{3x^{3}}=0
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Concluzia** <span class="punct">2p</span>

Limita e finită și egală cu $0$.

<p class="rezultat">y = 0 este asimptota orizontală spre +∞</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Pentru ce m are f(x) = m soluții

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Studiezi monotonia** <span class="punct">2p</span>

Numitorul $x^{4}$ e pozitiv, deci semnul lui $f'$ e semnul lui $1-3\ln x$.

$$
f'\left(x\right)=0 \iff \ln x=\frac{1}{3} \iff x=e^{\frac{1}{3}}=\sqrt[3]{e}
$$

Pentru $x<\sqrt[3]{e}$, $\ln x<\dfrac{1}{3}$, deci $f'\left(x\right)>0$; pentru
$x>\sqrt[3]{e}$, $f'\left(x\right)<0$. Deci $f$ este crescătoare pe
$\left(0,\sqrt[3]{e}\right]$ și descrescătoare pe $\left[\sqrt[3]{e},+\infty\right)$.

<div class="variatie-scroll">
<table class="variatie">
<tr><th>x</th><td>0</td><td></td><td>∛e</td><td></td><td>+∞</td></tr>
<tr><th>f′(x)</th><td></td><td>+</td><td>0</td><td>−</td><td></td></tr>
<tr><th>f(x)</th><td>−∞</td><td>↗</td><td>1/(3e)</td><td>↘</td><td>0</td></tr>
</table>
</div>

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Valorile de la capete și concluzia** <span class="punct">3p</span>

Valoarea maximă:

$$
f\left(\sqrt[3]{e}\right)=\frac{\ln e^{\frac{1}{3}}}{\left(e^{\frac{1}{3}}\right)^{3}}=\frac{\frac{1}{3}}{e}=\frac{1}{3e}
$$

Limita în $0$: $\ln x\to-\infty$, iar $x^{3}\to 0$ cu valori pozitive. Nu e caz de
nedeterminare, un număr foarte negativ împărțit la unul pozitiv foarte mic:

$$
\lim_{x\rightarrow 0}f\left(x\right)=-\infty
$$

Pe $\left(0,\sqrt[3]{e}\right]$, $f$ e continuă și crescătoare de la $-\infty$ la
$\dfrac{1}{3e}$, deci ia toate valorile din $\left(-\infty,\dfrac{1}{3e}\right]$. Pe
$\left[\sqrt[3]{e},+\infty\right)$ scade spre $0$, deci ia valori din
$\left(0,\dfrac{1}{3e}\right]$, care sunt deja acoperite.

<p class="rezultat">m ∈ (−∞, 1/(3e)]</p>

</div>
</div>

<span class="atentie">**Intervalul e închis la $\dfrac{1}{3e}$.** Valoarea maximă e atinsă în $x=\sqrt[3]{e}$, deci pentru $m=\dfrac{1}{3e}$ ecuația are o soluție. Enunțul cere „cel puțin o soluție", nu două.</span>

## Ce îți spune baremul

La c), baremul dă doar două puncte pentru monotonie și trei pentru limita în $0$,
valoarea maximă și concluzia. Tabelul singur nu e răspunsul: mulțimea valorilor
se citește din capetele lui, deci $\lim_{x\to 0}f\left(x\right)$ și
$f\left(\sqrt[3]{e}\right)$ trebuie scrise explicit.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $f'\left(x\right)=\dfrac{\frac{1}{x}\cdot x^{3}-3x^{2}\ln x}{x^{6}}=\dfrac{x^{2}-3x^{2}\ln x}{x^{6}}=\dfrac{1-3\ln x}{x^{4}}$, $x\in\left(0,+\infty\right)$

**b)** $\lim\limits_{x\rightarrow +\infty}\dfrac{\ln x}{x^{3}}=\lim\limits_{x\rightarrow +\infty}\dfrac{\frac{1}{x}}{3x^{2}}=0$,
deci dreapta $y=0$ este asimptota orizontală spre $+\infty$.

**c)** $f'\left(x\right)=0\Rightarrow x=\sqrt[3]{e}$; $f'\ge 0$ pe $\left(0,\sqrt[3]{e}\right]$,
deci $f$ crescătoare; $f'\le 0$ pe $\left[\sqrt[3]{e},+\infty\right)$, deci $f$
descrescătoare.

$\lim\limits_{x\rightarrow 0}f\left(x\right)=-\infty$, $f\left(\sqrt[3]{e}\right)=\dfrac{1}{3e}$
și $f$ continuă, deci $m\in\left(-\infty,\dfrac{1}{3e}\right]$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se aplică l'Hôpital în $0$.** $\dfrac{-\infty}{0^{+}}$ nu e nedeterminare. L'Hôpital
aici dă un rezultat fără sens. Verifică forma înainte de a deriva.

</div>

<div class="greseala">

**Se scrie $f\left(\sqrt[3]{e}\right)=\dfrac{1}{3}$.** Se uită numitorul:
$\left(\sqrt[3]{e}\right)^{3}=e$, nu $1$.

</div>

<div class="greseala">

**Se răspunde cu $\left(0,\dfrac{1}{3e}\right]$.** Asta e doar ramura din dreapta.
Pe $\left(0,1\right)$ funcția ia și toate valorile negative, pentru că $\ln x<0$
acolo.

</div>
