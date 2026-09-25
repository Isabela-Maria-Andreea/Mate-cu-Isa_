---
titlu: "Integrale cu (x + 1)/eˣ și o dublă inegalitate pentru Iₙ"
titluSeo: "f(x) = (x + 1)/eˣ — integrala 12, integrare prin părți cu rezultatul (2e − 3)/e și ln 2/n ≤ Iₙ ≤ (e − 1)/n prin substituția t = xⁿ, BAC 2024 Simulare M_mate-info, Subiectul III.2"
descriere: "O simplificare, o integrare prin părți cu e⁻ˣ și un șir de integrale care, după substituția t = xⁿ, se încadrează între două integrale simple. Subiectul III.2, simularea BAC 2024."
capitol: "Primitive și integrala definită"
sursa: "BAC 2024, Simulare clasa a XII-a — Subiectul III.2"
varianta: "bac-2024-sm-v1"
subiect: "III"
pozitie: 2
subpuncte:
  - "Integrala lui eˣ f(x)"
  - "Integrala lui f pe [0, 1]"
  - "Încadrarea lui Iₙ"
punctaj: 15
dificultate: 4
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

**La a)**, $e^{x}f\left(x\right)=e^{x}\cdot\dfrac{x+1}{e^{x}}=x+1$. Exponențiala
se simplifică înainte de integrare.

**La b)** integrezi $\left(x+1\right)e^{-x}$: un polinom înmulțit cu o
exponențială. Asta e forma clasică pentru **integrarea prin părți**: derivezi
polinomul (devine constantă) și integrezi exponențiala. Scrii $\dfrac{1}{e^{x}}$
ca $e^{-x}$ ca să vezi primitiva: $\left(-e^{-x}\right)'=e^{-x}$.

**La c)** apar $x^{n}$ în $f$ și $x^{n-1}$ în față. Cum
$\left(x^{n}\right)'=nx^{n-1}$, substituția $t=x^{n}$ face ca $n$ să dispară
din integrală și să rămână doar ca factor $\dfrac{1}{n}$. Asta explică de ce
ambele margini au $n$ la numitor. Apoi încadrezi funcția $\dfrac{e^{t}}{t+1}$
pe $\left[0,1\right]$ între două funcții pe care știi să le integrezi.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Integrala lui eˣ f(x)

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Simplifici și integrezi** <span class="punct">3p</span>

Se simplifică $e^{x}$ cu $e^{x}$ de la numitor:

$$
\int_{0}^{4}e^{x}f\left(x\right)dx=\int_{0}^{4}\left(x+1\right)dx=\left.\left(\frac{x^{2}}{2}+x\right)\right|_{0}^{4}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Înlocuiești limitele** <span class="punct">2p</span>

În $4$: $\dfrac{16}{2}+4=8+4$. În $0$: $0$.

$$
8+4-0=12
$$

<p class="rezultat">∫₀⁴ eˣ f(x) dx = 12</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Integrala lui f pe [0, 1]

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Integrezi prin părți** <span class="punct">3p</span>

$f\left(x\right)=\left(x+1\right)e^{-x}=\left(x+1\right)\left(-e^{-x}\right)'$.
Formula $\displaystyle\int_{a}^{b}g\,h'=g\,h\Big|_{a}^{b}-\int_{a}^{b}g'\,h$,
cu $g=x+1$, $g'=1$ și $h=-e^{-x}$:

$$
\int_{0}^{1}\left(x+1\right)\left(-e^{-x}\right)'dx=\left.\left(x+1\right)\left(-e^{-x}\right)\right|_{0}^{1}-\int_{0}^{1}\left(-e^{-x}\right)dx
$$

Minusul din fața integralei și minusul din $-e^{-x}$ dau plus, deci ultima
integrală e $\displaystyle\int_{0}^{1}e^{-x}dx=\left.-e^{-x}\right|_{0}^{1}$:

$$
\int_{0}^{1}f\left(x\right)dx=\left.\left(x+1\right)\left(-e^{-x}\right)\right|_{0}^{1}+\left.\left(-e^{-x}\right)\right|_{0}^{1}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Înlocuiești limitele** <span class="punct">2p</span>

Primul termen: în $1$, $2\cdot\left(-\dfrac{1}{e}\right)=-\dfrac{2}{e}$; în $0$,
$1\cdot\left(-1\right)=-1$. Diferența: $-\dfrac{2}{e}+1$.

Al doilea termen: în $1$, $-\dfrac{1}{e}$; în $0$, $-1$. Diferența:
$-\dfrac{1}{e}+1$.

$$
-\frac{2}{e}+1-\frac{1}{e}+1=2-\frac{3}{e}=\frac{2e-3}{e}
$$

<p class="rezultat">∫₀¹ f(x) dx = (2e − 3)/e</p>

</div>
</div>

<span class="atentie">**Semnele la capătul $0$.** $-e^{-0}=-1$, iar când scazi valoarea din $0$ scrii $-\left(-1\right)=+1$. Cele două „$+1$" din rezultat vin de acolo. Dacă le pierzi, ajungi la $-\dfrac{3}{e}$, o integrală negativă dintr-o funcție pozitivă.</span>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Încadrarea lui Iₙ

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Rescrii $I_n$ și schimbi variabila** <span class="punct">3p</span>

Din definiția lui $f$, $f\left(x^{n}\right)=\dfrac{x^{n}+1}{e^{x^{n}}}$, deci
$\dfrac{1}{f\left(x^{n}\right)}=\dfrac{e^{x^{n}}}{x^{n}+1}$:

$$
I_n=\int_{0}^{1}\frac{x^{n-1}e^{x^{n}}}{x^{n}+1}dx
$$

$\left(x^{n}\right)'=nx^{n-1}$, deci $x^{n-1}=\dfrac{1}{n}\left(x^{n}\right)'$.
Cu $t=x^{n}$, $dt=nx^{n-1}dx$; pentru $x=0$, $t=0$, iar pentru $x=1$, $t=1$:

$$
I_n=\frac{1}{n}\int_{0}^{1}\frac{\left(x^{n}\right)'e^{x^{n}}}{x^{n}+1}dx=\frac{1}{n}\int_{0}^{1}\frac{e^{t}}{t+1}dt
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Încadrezi integrandul și integrezi marginile** <span class="punct">2p</span>

Pentru $t\in\left[0,1\right]$:

- $e^{t}\ge e^{0}=1$, deci $\dfrac{e^{t}}{t+1}\ge\dfrac{1}{t+1}$;
- $t+1\ge 1$, deci $\dfrac{e^{t}}{t+1}\le e^{t}$.

Integrala păstrează inegalitățile între funcții pe același interval. Marginea
de jos:

$$
I_n\ge\frac{1}{n}\int_{0}^{1}\frac{1}{t+1}dt=\left.\frac{1}{n}\ln\left(t+1\right)\right|_{0}^{1}=\frac{1}{n}\left(\ln 2-\ln 1\right)=\frac{\ln 2}{n}
$$

Marginea de sus:

$$
I_n\le\frac{1}{n}\int_{0}^{1}e^{t}dt=\left.\frac{1}{n}e^{t}\right|_{0}^{1}=\frac{e-1}{n}
$$

<p class="rezultat">ln 2 / n ≤ Iₙ ≤ (e − 1)/n, pentru orice n ≥ 2</p>

</div>
</div>

<span class="atentie">**Capetele se schimbă odată cu variabila.** Aici $0^{n}=0$ și $1^{n}=1$, deci rămân aceleași, dar asta trebuie spus. Pe alt interval, de exemplu $\left[1,2\right]$, capătul de sus ar deveni $2^{n}$.</span>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $\displaystyle\int_{0}^{4}e^{x}f\left(x\right)dx=\int_{0}^{4}\left(x+1\right)dx=\left.\left(\frac{x^{2}}{2}+x\right)\right|_{0}^{4}=8+4=12$

**b)** $\displaystyle\int_{0}^{1}f\left(x\right)dx=\int_{0}^{1}\left(x+1\right)\left(-e^{-x}\right)'dx=\left.\left(x+1\right)\left(-e^{-x}\right)\right|_{0}^{1}-\left.e^{-x}\right|_{0}^{1}=-\frac{2}{e}+1-\frac{1}{e}+1=\frac{2e-3}{e}$

**c)** $\displaystyle I_n=\int_{0}^{1}\frac{x^{n-1}e^{x^{n}}}{x^{n}+1}dx=\frac{1}{n}\int_{0}^{1}\frac{\left(x^{n}\right)'e^{x^{n}}}{x^{n}+1}dx=\frac{1}{n}\int_{0}^{1}\frac{e^{t}}{t+1}dt$,
pentru orice număr natural $n$, $n\ge 2$.

Pentru $t\in\left[0,1\right]$, $e^{t}\ge 1$ și $t+1\ge 1$, deci
$\displaystyle I_n\ge\frac{1}{n}\int_{0}^{1}\frac{1}{t+1}dt=\frac{1}{n}\ln\left(t+1\right)\Big|_{0}^{1}=\frac{\ln 2}{n}$
și $\displaystyle I_n\le\frac{1}{n}\int_{0}^{1}e^{t}dt=\frac{e-1}{n}$.

</div>

## Unde se pierd puncte

<div class="greseala">

**La b), se alege invers la integrarea prin părți:** $g=e^{-x}$, $h'=x+1$. Atunci
apare $\dfrac{\left(x+1\right)^{2}}{2}$ înmulțit cu $e^{-x}$, iar integrala nouă e
mai grea decât cea inițială. Polinomul se derivează, exponențiala se integrează.

</div>

<div class="greseala">

**La c), se scrie $\dfrac{1}{f\left(x^{n}\right)}=\dfrac{x^{n}+1}{e^{x^{n}}}$.**
Asta e $f\left(x^{n}\right)$, nu inversul lui. Fracția se răstoarnă: exponențiala
urcă la numărător.

</div>

<div class="greseala">

**La c), se încadrează fără să se spună pe ce interval.** $e^{t}\ge 1$ e
adevărată doar pentru $t\ge 0$. Inegalitățile dintre funcții trebuie scrise cu
intervalul, $t\in\left[0,1\right]$, altfel integrarea lor nu e justificată.

</div>
