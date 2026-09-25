---
titlu: "Funcția 4x³/(x − 1)²: asimptotă oblică și exact două soluții"
titluSeo: "f(x) = 4x³/(x − 1)² pe (1, +∞) — derivata, asimptota oblică y = 4x + 8 și ecuația f(x) = m cu exact două soluții pentru m > 27, BAC 2024 Sesiunea specială M_mate-info, Subiectul III.1"
descriere: "Derivata unui cât cu factor comun (x − 1), asimptota oblică din două limite de funcții raționale și un minim în x = 3 care explică pragul 27. Subiectul III.1, BAC 2024, Sesiunea specială, Varianta 9."
capitol: "Studiul funcției și reprezentarea grafică"
sursa: "BAC 2024, Sesiunea specială, Varianta 9 — Subiectul III.1"
varianta: "bac-2024-ss-v9"
subiect: "III"
pozitie: 1
subpuncte:
  - "Derivata"
  - "Asimptota oblică spre +∞"
  - "Exact două soluții pentru m > 27"
punctaj: 15
dificultate: 3
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

**La a)**, numitorul derivatei câtului e $\left(x-1\right)^{4}$, dar rezultatul
cerut are $\left(x-1\right)^{3}$. Deci la numărător trebuie scos factor comun
$\left(x-1\right)$ înainte de orice desfacere.

**La b)** faci cele două limite obișnuite: $m=\lim\dfrac{f\left(x\right)}{x}$ și
$n=\lim\left(f\left(x\right)-mx\right)$. Sunt limite de funcții raționale la
$+\infty$, deci compari gradele și coeficienții dominanți.

**La c)**, $27$ nu e un număr oarecare: e $f\left(3\right)$, iar $x=3$ e unde se
anulează derivata de la a). Graficul coboară de la $+\infty$ la $27$, apoi urcă
înapoi la $+\infty$. Orice nivel peste $27$ e atins o dată pe coborâre și o dată
pe urcare.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Derivata

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Formula câtului** <span class="punct">3p</span>

Cu $u=4x^{3}$, $u'=12x^{2}$, și $v=\left(x-1\right)^{2}$,
$v'=2\left(x-1\right)$:

$$
f'\left(x\right)=\frac{12x^{2}\left(x-1\right)^{2}-4x^{3}\cdot 2\left(x-1\right)}{\left(x-1\right)^{4}}
$$

<span class="atentie">**$\left(\left(x-1\right)^{2}\right)'=2\left(x-1\right)\cdot\left(x-1\right)'$.** Aici $\left(x-1\right)'=1$, deci nu se vede, dar regula e cea a funcției compuse.</span>

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Simplifici prin $x-1$** <span class="punct">2p</span>

Ambii termeni ai numărătorului conțin $x-1$. Îl scoți factor comun și îl
simplifici cu unul din cei patru de la numitor; $x-1\ne 0$ pe domeniu:

$$
f'\left(x\right)=\frac{\left(x-1\right)\left[12x^{2}\left(x-1\right)-8x^{3}\right]}{\left(x-1\right)^{4}}=\frac{12x^{3}-12x^{2}-8x^{3}}{\left(x-1\right)^{3}}
$$

$12x^{3}-8x^{3}=4x^{3}$, iar $4x^{3}-12x^{2}=4x^{2}\left(x-3\right)$:

$$
f'\left(x\right)=\frac{4x^{2}\left(x-3\right)}{\left(x-1\right)^{3}},\quad x\in\left(1,+\infty\right)
$$

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Asimptota oblică spre +∞

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Panta** <span class="punct">2p</span>

Împarți la $x$ și se simplifică un $x$ din $x^{3}$:

$$
\lim_{x\rightarrow +\infty}\frac{f\left(x\right)}{x}=\lim_{x\rightarrow +\infty}\frac{4x^{2}}{\left(x-1\right)^{2}}=4
$$

Numărătorul și numitorul au gradul $2$, deci limita e raportul coeficienților
dominanți: $\dfrac{4}{1}$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Ordonata la origine și concluzia** <span class="punct">3p</span>

Aduci la același numitor:

$$
f\left(x\right)-4x=\frac{4x^{3}-4x\left(x-1\right)^{2}}{\left(x-1\right)^{2}}
$$

$\left(x-1\right)^{2}=x^{2}-2x+1$, deci
$4x\left(x-1\right)^{2}=4x^{3}-8x^{2}+4x$. La scădere se reduce $4x^{3}$ cu
$-4x^{3}$:

$$
f\left(x\right)-4x=\frac{8x^{2}-4x}{\left(x-1\right)^{2}}\ \Rightarrow\ \lim_{x\rightarrow +\infty}\left(f\left(x\right)-4x\right)=8
$$

Din nou grade egale, coeficienții dominanți $8$ și $1$.

<p class="rezultat">y = 4x + 8 este asimptota oblică spre +∞</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Exact două soluții pentru m > 27

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Semnul derivatei și monotonia** <span class="punct">2p</span>

Pe $\left(1,+\infty\right)$, $4x^{2}>0$ și $\left(x-1\right)^{3}>0$, deci semnul
lui $f'$ e semnul lui $x-3$. $f'\left(x\right)=0\Rightarrow x=3$.

Pentru $x\in\left(1,3\right)$, $f'\left(x\right)<0$, deci $f$ este strict
descrescătoare pe $\left(1,3\right)$. Pentru $x\in\left(3,+\infty\right)$,
$f'\left(x\right)>0$, deci $f$ este strict crescătoare pe
$\left(3,+\infty\right)$.

<div class="variatie-scroll">
<table class="variatie">
<tr><th>x</th><td>1</td><td></td><td>3</td><td></td><td>+∞</td></tr>
<tr><th>f′(x)</th><td></td><td>−</td><td>0</td><td>+</td><td></td></tr>
<tr><th>f(x)</th><td>+∞</td><td>↘</td><td>27</td><td>↗</td><td>+∞</td></tr>
</table>
</div>

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Valorile de la capete și concluzia** <span class="punct">3p</span>

În $1$, din dreapta: numărătorul tinde la $4$, numitorul
$\left(x-1\right)^{2}$ la $0$ cu valori pozitive, deci
$\lim\limits_{x\rightarrow 1,\,x>1}f\left(x\right)=+\infty$.

În $3$: $f\left(3\right)=\dfrac{4\cdot 27}{2^{2}}=\dfrac{108}{4}=27$.

Spre $+\infty$: gradul numărătorului e mai mare, deci
$\lim\limits_{x\rightarrow +\infty}f\left(x\right)=+\infty$.

$f$ e continuă. Pe $\left(1,3\right)$ scade strict de la $+\infty$ la $27$,
deci ia fiecare valoare $m>27$ exact o dată. Pe $\left(3,+\infty\right)$ crește
strict de la $27$ la $+\infty$, deci ia din nou fiecare $m>27$ exact o dată. În
$x=3$ valoarea e $27$, nu $m$.

<p class="rezultat">f(x) = m are exact două soluții pentru orice m ∈ (27, +∞)</p>

</div>
</div>

<span class="atentie">**„Exact" cere și că nu sunt mai multe.** Nu ajunge să arăți că există câte o soluție pe fiecare ramură. Monotonia strictă garantează că pe fiecare ramură soluția e unică, deci în total sunt două, nu mai multe.</span>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $f'\left(x\right)=\dfrac{12x^{2}\left(x-1\right)^{2}-4x^{3}\cdot 2\left(x-1\right)}{\left(x-1\right)^{4}}=\dfrac{12x^{3}-12x^{2}-8x^{3}}{\left(x-1\right)^{3}}=\dfrac{4x^{2}\left(x-3\right)}{\left(x-1\right)^{3}}$, $x\in\left(1,+\infty\right)$

**b)** $\lim\limits_{x\rightarrow +\infty}\dfrac{f\left(x\right)}{x}=\lim\limits_{x\rightarrow +\infty}\dfrac{4x^{2}}{\left(x-1\right)^{2}}=4$

$\lim\limits_{x\rightarrow +\infty}\left(f\left(x\right)-4x\right)=\lim\limits_{x\rightarrow +\infty}\dfrac{8x^{2}-4x}{\left(x-1\right)^{2}}=8$,
deci dreapta de ecuație $y=4x+8$ este asimptota oblică spre $+\infty$ la
graficul funcției $f$.

**c)** $f'\left(x\right)=0\Rightarrow x=3$; $f'\left(x\right)<0$ pentru orice
$x\in\left(1,3\right)$, deci $f$ este strict descrescătoare pe
$\left(1,3\right)$, și $f'\left(x\right)>0$ pentru orice
$x\in\left(3,+\infty\right)$, deci $f$ este strict crescătoare pe
$\left(3,+\infty\right)$.

$\lim\limits_{x\rightarrow 1,\,x>1}f\left(x\right)=+\infty$, $f\left(3\right)=27$,
$\lim\limits_{x\rightarrow +\infty}f\left(x\right)=+\infty$ și $f$ este continuă,
deci ecuația $f\left(x\right)=m$ are exact două soluții pentru orice
$m\in\left(27,+\infty\right)$.

</div>

## Unde se pierd puncte

<div class="greseala">

**La a), se desface totul înainte de a simplifica.** Cu
$\left(x-1\right)^{2}$ desfăcut, numărătorul devine un polinom de gradul patru,
iar factorul $x-1$ trebuie apoi găsit prin împărțire. Scoate-l factor comun cât
se vede încă.

</div>

<div class="greseala">

**La b), se scrie $n=\lim\left(f\left(x\right)-x\right)$.** Se scade $mx$, cu
$m=4$ aflat la pasul anterior, nu $x$. Cu $f\left(x\right)-x$ limita e
$+\infty$ și pare că asimptota nu există.

</div>

<div class="greseala">

**La c), se uită limita în $1$.** Fără ea nu știi că ramura din stânga urcă
până la $+\infty$, deci nu poți spune că atinge orice $m>27$.

</div>
