---
titlu: "Integrale cu logaritm și primitiva tangentă la Ox"
titluSeo: "f(x) = (4x + 6/x²)·ln x — integrale definite și primitiva F pentru care Ox e tangentă la grafic, rezolvare cu barem, Simulare BAC 2026 M_mate-info, Subiectul III.2"
descriere: "Două integrale în care logaritmul se simplifică sau devine u·u', și cum găsești primitiva al cărei grafic e tangent la axa Ox: F(a) = 0 și f(a) = 0. Subiectul III.2, Simularea BAC 2026."
capitol: "Primitive și integrala definită"
sursa: "BAC 2026, Simulare clasa a XII-a — Subiectul III.2"
varianta: "bac-2026-sm-v1"
subiect: "III"
pozitie: 2
subpuncte:
  - "Integrala lui f(x)/ln x"
  - "Integrala cu ln x / x"
  - "Primitiva tangentă la Ox"
punctaj: 15
dificultate: 3
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

Primele două subpuncte sunt construite ca să **scape de o parte din $f$**
înainte de integrare.

**La a),** împărțirea la $\ln x$ elimină logaritmul, iar pe $\left[2,3\right]$
$\ln x\ne 0$. Rămâne o integrală de polinom plus putere.

**La b),** din $f\left(x\right)$ scazi $4x\ln x$, adică exact primul termen.
Rămâne $\dfrac{6\ln x}{x^{2}}$, iar înmulțirea cu $x$ lasă $\dfrac{6\ln x}{x}$.
Forma $\ln x\cdot\dfrac{1}{x}$ înseamnă $u\cdot u'$ cu $u=\ln x$, a cărei
primitivă e $\dfrac{u^{2}}{2}$.

**La c), „$Ox$ tangentă la grafic" sunt două condiții.** Tangenta în punctul de
abscisă $a$ este $y=F\left(a\right)+F'\left(a\right)\left(x-a\right)$. Ea coincide cu
$Ox$, adică $y=0$, exact când $F\left(a\right)=0$ și $F'\left(a\right)=0$. Cum
$F'=f$ (din definiția primitivei), a doua condiție e $f\left(a\right)=0$ și se
rezolvă fără să știi $F$. Din ea afli $a$, iar din prima, constanta.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Integrala lui $\dfrac{f\left(x\right)}{\ln x}$

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Simplifici cu $\ln x$ și integrezi** <span class="punct">3p</span>

Pentru $x\in\left[2,3\right]$, $\ln x>0$, deci se simplifică $\ln x$ cu $\ln x$:

$$
\int_{2}^{3}\frac{f\left(x\right)}{\ln x}\,dx=\int_{2}^{3}\left(4x+\frac{6}{x^{2}}\right)dx=2x^{2}\Big|_{2}^{3}-\frac{6}{x}\Big|_{2}^{3}
$$

Primitivele: $\int 4x\,dx=2x^{2}$ și $\int 6x^{-2}\,dx=6\cdot\dfrac{x^{-1}}{-1}=-\dfrac{6}{x}$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Înlocuiești limitele** <span class="punct">2p</span>

$$
2x^{2}\Big|_{2}^{3}=18-8=10, \qquad -\frac{6}{x}\Big|_{2}^{3}=-2-\left(-3\right)=1
$$

<span class="atentie">**Semnul la al doilea termen.** $-\dfrac{6}{3}-\left(-\dfrac{6}{2}\right)=-2+3=1$, nu $-1$.</span>

<p class="rezultat">10 + 1 = 11</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Integrala cu $\dfrac{\ln x}{x}$

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Reduci integrandul și recunoști $u\cdot u'$** <span class="punct">3p</span>

Desfaci $f\left(x\right)=4x\ln x+\dfrac{6\ln x}{x^{2}}$. Se reduce $4x\ln x$ cu
$-4x\ln x$:

$$
x\left(f\left(x\right)-4x\ln x\right)=x\cdot\frac{6\ln x}{x^{2}}=\frac{6\ln x}{x}
$$

Cum $\left(\ln x\right)'=\dfrac{1}{x}$:

$$
\int_{1}^{e}\frac{6\ln x}{x}\,dx=6\int_{1}^{e}\ln x\left(\ln x\right)'dx=6\cdot\frac{\ln^{2}x}{2}\Big|_{1}^{e}=3\ln^{2}x\Big|_{1}^{e}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Înlocuiești limitele** <span class="punct">2p</span>

$$
3\ln^{2}e-3\ln^{2}1=3\cdot 1-3\cdot 0=3
$$

<p class="rezultat">integrala este 3</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Primitiva tangentă la $Ox$

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Afli punctul de tangență** <span class="punct">2p</span>

$Ox$ e tangentă la graficul lui $F$ într-un punct $A\left(a,F\left(a\right)\right)$,
$a\in\left(0,+\infty\right)$, dacă și numai dacă

$$
F\left(a\right)=0 \quad\text{și}\quad F'\left(a\right)=0
$$

Cum $F'\left(x\right)=f\left(x\right)$ (din definiția primitivei), a doua condiție e
$\left(4a+\dfrac{6}{a^{2}}\right)\ln a=0$. Pentru $a>0$, $4a+\dfrac{6}{a^{2}}>0$,
deci $\ln a=0$, adică $a=1$.

<span class="atentie">**Ambele condiții.** $F\left(a\right)=0$ singură spune doar că graficul trece prin $Ox$, nu că e tangent la ea.</span>

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Calculezi primitiva prin părți și impui $F\left(1\right)=0$** <span class="punct">3p</span>

Integrezi prin părți, cu $\ln x$ ca funcția care se derivează și
$4x+\dfrac{6}{x^{2}}=\left(2x^{2}-\dfrac{6}{x}\right)'$:

$$
\int f\left(x\right)dx=\left(2x^{2}-\frac{6}{x}\right)\ln x-\int\left(2x^{2}-\frac{6}{x}\right)\cdot\frac{1}{x}\,dx
$$

În ultima integrală, $\left(2x^{2}-\dfrac{6}{x}\right)\cdot\dfrac{1}{x}=2x-\dfrac{6}{x^{2}}$,
cu primitiva $x^{2}+\dfrac{6}{x}$. Deci

$$
F\left(x\right)=\left(2x^{2}-\frac{6}{x}\right)\ln x-x^{2}-\frac{6}{x}+c
$$

Din $F\left(1\right)=0$: $\left(2-6\right)\cdot 0-1-6+c=0$, deci $c=7$.

<p class="rezultat">F(x) = (2x² − 6/x)·ln x − x² − 6/x + 7</p>

</div>
</div>

<div class="alternativa">

**Cu integrala cu limită variabilă, ca în barem.** $F\left(x\right)=\displaystyle\int_{1}^{x}f\left(t\right)dt$
este primitiva lui $f$ care se anulează în $1$, deci satisface direct
$F\left(1\right)=0$. Calculul prin părți e același, doar că în loc de constanta
$c$ apare $-\left(t^{2}+\dfrac{6}{t}\right)\Big|_{1}$, adică $+7$. Nu mai ai de
aflat constanta separat.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $\displaystyle\int_{2}^{3}\frac{f\left(x\right)}{\ln x}dx=\int_{2}^{3}\left(4x+\frac{6}{x^{2}}\right)dx=2x^{2}\Big|_{2}^{3}-\frac{6}{x}\Big|_{2}^{3}=10+1=11$

**b)** $\displaystyle\int_{1}^{e}x\left(f\left(x\right)-4x\ln x\right)dx=\int_{1}^{e}\frac{6\ln x}{x}dx=6\int_{1}^{e}\ln x\left(\ln x\right)'dx=3\ln^{2}x\Big|_{1}^{e}=3$

**c)** $Ox$ tangentă în $A\left(a,F\left(a\right)\right)$ $\Rightarrow$
$F\left(a\right)=0$ și $F'\left(a\right)=f\left(a\right)=0$, deci $a=1$.
$F\left(x\right)=\left(2x^{2}-\dfrac{6}{x}\right)\ln x-x^{2}-\dfrac{6}{x}+c$ și
$F\left(1\right)=0\Rightarrow c=7$, deci
$F\left(x\right)=\left(2x^{2}-\dfrac{6}{x}\right)\ln x-x^{2}-\dfrac{6}{x}+7$.

</div>

## Unde se pierd puncte

<!-- SCHIȚĂ: greșelile de mai jos sunt propuse, nu verificate pe lucrări reale. De confirmat de Isa. -->

<div class="greseala">

**La c), se pune doar $F\left(a\right)=0$.** Cu o singură condiție ai două
necunoscute, $a$ și $c$, și nu ajungi la nimic. Tangența dă a doua ecuație.

</div>

<div class="greseala">

**La c), se uită constanta.** O primitivă fără $+c$ nu poate fi ajustată să
treacă prin $\left(1,0\right)$. Rezultatul iese cu $0$ în loc de $7$.

</div>

<div class="greseala">

**La c), se greșește primitiva lui $\dfrac{6}{x^{2}}$.** E $-\dfrac{6}{x}$.
Semnul greșit aici se propagă în $v$, apoi în integrala a doua și în constantă.

</div>
