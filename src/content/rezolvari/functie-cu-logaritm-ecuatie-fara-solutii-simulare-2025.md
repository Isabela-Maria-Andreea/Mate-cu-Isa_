---
titlu: "Funcție cu logaritm: asimptotă și ecuație fără soluții"
titluSeo: "f(x) = (2x − 2)/(x + 2) + ln((x + 2)/x) — derivată, asimptota y = 2 și numerele naturale n pentru care f(x) = n nu are soluții, Simulare BAC 2025 M_mate-info, Subiectul III.1"
descriere: "Cum derivezi logaritmul unui cât, de ce limita în 0 e +∞ și cum citești din minimul ln 3 care numere naturale nu sunt valori ale funcției. Subiectul III.1, simularea BAC 2025."
capitol: "Studiul funcției și reprezentarea grafică"
sursa: "BAC 2025, Simulare clasa a XII-a — Subiectul III.1"
varianta: "bac-2025-sm-v1"
subiect: "III"
pozitie: 1
subpuncte:
  - "Derivata"
  - "Asimptota orizontală spre +∞"
  - "Numerele naturale n pentru care f(x) = n nu are soluții"
punctaj: 15
dificultate: 3
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

**La a), logaritmul unui cât se poate desface.** $\ln\dfrac{x+2}{x}=\ln\left(x+2\right)-\ln x$
pe $\left(0,+\infty\right)$, unde ambele argumente sunt pozitive. Baremul derivează
însă direct, ca funcție compusă; rezolvarea de mai jos urmează baremul, iar varianta
cu logaritmul desfăcut e la finalul subpunctului.

**La b)**, fiecare termen are o limită cunoscută: fracția raport de polinoame de același
grad tinde la raportul coeficienților dominanți, $2$, iar $\dfrac{x+2}{x}\to 1$, deci
logaritmul tinde la $\ln 1=0$.

**La c), „nu are soluții" înseamnă că $n$ nu e valoare a lui $f$.** Afli mulțimea
valorilor din tabelul de variație. Numerele naturale care rămân în afara ei sunt
răspunsul.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Derivata

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Derivezi fiecare termen** <span class="punct">3p</span>

Pentru fracție, cu formula câtului:

$$
\left(\frac{2x-2}{x+2}\right)'=\frac{2\left(x+2\right)-\left(2x-2\right)\cdot 1}{\left(x+2\right)^{2}}
$$

Pentru logaritm, cu $u=\dfrac{x+2}{x}$ și $\left(\ln u\right)'=\dfrac{u'}{u}$:

$$
\left(\ln\frac{x+2}{x}\right)'=\frac{x}{x+2}\cdot\frac{1\cdot x-\left(x+2\right)\cdot 1}{x^{2}}
$$

<span class="atentie">**Derivata compusă.** $\left(\ln u\right)'=\dfrac{1}{u}\cdot u'$. Primul factor e inversul lui $u$, adică $\dfrac{x}{x+2}$, iar al doilea e derivata câtului $\dfrac{x+2}{x}$. Cine scrie doar $\dfrac{x}{x+2}$ pierde tot rândul.</span>

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Simplifici și aduci la același numitor** <span class="punct">2p</span>

Primul numărător: $2x+4-2x+2=6$. Al doilea: $x-x-2=-2$, iar
$\dfrac{x}{x+2}\cdot\dfrac{-2}{x^{2}}=\dfrac{-2}{x\left(x+2\right)}$, după ce se
simplifică un $x$. Deci

$$
f'\left(x\right)=\frac{6}{\left(x+2\right)^{2}}-\frac{2}{x\left(x+2\right)}
$$

Numitorul comun e $x\left(x+2\right)^{2}$. Amplifici prima fracție cu $x$, a doua cu
$x+2$:

$$
f'\left(x\right)=\frac{6x-2\left(x+2\right)}{x\left(x+2\right)^{2}}=\frac{6x-2x-4}{x\left(x+2\right)^{2}}=\frac{4\left(x-1\right)}{x\left(x+2\right)^{2}},\quad x\in\left(0,+\infty\right)
$$

</div>
</div>

<div class="alternativa">

**Cu logaritmul desfăcut.** $\ln\dfrac{x+2}{x}=\ln\left(x+2\right)-\ln x$, deci derivata
lui e $\dfrac{1}{x+2}-\dfrac{1}{x}=\dfrac{x-\left(x+2\right)}{x\left(x+2\right)}=-\dfrac{2}{x\left(x+2\right)}$.
Ajungi la același termen fără derivata compusă și fără simplificarea unui $x$.

</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Asimptota orizontală spre +∞

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Calculezi limita** <span class="punct">3p</span>

$$
\lim_{x\rightarrow +\infty}\frac{2x-2}{x+2}=2, \qquad \lim_{x\rightarrow +\infty}\frac{x+2}{x}=\lim_{x\rightarrow +\infty}\left(1+\frac{2}{x}\right)=1
$$

Logaritmul e continuu, deci $\ln\dfrac{x+2}{x}\to\ln 1=0$. Prin urmare

$$
\lim_{x\rightarrow +\infty}f\left(x\right)=2+0=2
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Concluzia** <span class="punct">2p</span>

<p class="rezultat">y = 2 este asimptota orizontală spre +∞</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Numerele naturale n pentru care f(x) = n nu are soluții

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Monotonia** <span class="punct">2p</span>

În $f'\left(x\right)=\dfrac{4\left(x-1\right)}{x\left(x+2\right)^{2}}$, numitorul e
pozitiv pe $\left(0,+\infty\right)$, deci semnul lui $f'$ e semnul lui $x-1$.
$f'\left(x\right)=0\iff x=1$.

- pentru $x\in\left(0,1\right]$, $f'\left(x\right)\le 0$, deci $f$ este descrescătoare pe $\left(0,1\right]$;
- pentru $x\in\left[1,+\infty\right)$, $f'\left(x\right)\ge 0$, deci $f$ este crescătoare pe $\left[1,+\infty\right)$.

<div class="variatie-scroll">
<table class="variatie">
<tr><th>x</th><td>0</td><td></td><td>1</td><td></td><td>+∞</td></tr>
<tr><th>f′(x)</th><td></td><td>−</td><td>0</td><td>+</td><td></td></tr>
<tr><th>f(x)</th><td>+∞</td><td>↘</td><td>ln 3</td><td>↗</td><td>2</td></tr>
</table>
</div>

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Mulțimea valorilor și numerele naturale excluse** <span class="punct">3p</span>

$f\left(1\right)=\dfrac{0}{3}+\ln\dfrac{3}{1}=\ln 3$.

Limita în $0$: $\dfrac{2x-2}{x+2}\to-1$, iar $\dfrac{x+2}{x}\to+\infty$, deci
logaritmul tinde la $+\infty$. Suma: $\lim_{x\to 0}f\left(x\right)=+\infty$.

Pe $\left(0,1\right]$, $f$ e continuă și scade de la $+\infty$ la $\ln 3$, deci ia toate
valorile din $\left[\ln 3,+\infty\right)$. Pe $\left[1,+\infty\right)$ urcă de la
$\ln 3$ spre $2$, deci nu adaugă nimic nou. Mulțimea valorilor e $\left[\ln 3,+\infty\right)$.

Cât e $\ln 3$? Cum $e<3<e^{2}$, avem $1<\ln 3<2$. Numerele naturale mai mici decât
$\ln 3$ sunt $0$ și $1$. Pentru ele ecuația nu are soluții; pentru $n\ge 2$ are.

<p class="rezultat">n = 0 sau n = 1</p>

</div>
</div>

<span class="atentie">**$0$ e număr natural.** Enunțul spune „numere naturale", nu „nenule". Cine începe de la $1$ pierde o valoare.</span>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $f'\left(x\right)=\dfrac{2\left(x+2\right)-\left(2x-2\right)}{\left(x+2\right)^{2}}+\dfrac{x}{x+2}\cdot\dfrac{x-\left(x+2\right)}{x^{2}}=\dfrac{6}{\left(x+2\right)^{2}}-\dfrac{2}{x\left(x+2\right)}=\dfrac{4\left(x-1\right)}{x\left(x+2\right)^{2}}$

**b)** $\lim\limits_{x\rightarrow +\infty}f\left(x\right)=\lim\limits_{x\rightarrow +\infty}\left(\dfrac{2x-2}{x+2}+\ln\dfrac{x+2}{x}\right)=2+0=2$,
deci dreapta $y=2$ este asimptota orizontală spre $+\infty$.

**c)** $f'\left(x\right)=0\iff x=1$; $f'\le 0$ pe $\left(0,1\right]$, deci $f$
descrescătoare; $f'\ge 0$ pe $\left[1,+\infty\right)$, deci $f$ crescătoare.

$\lim\limits_{x\rightarrow 0}f\left(x\right)=+\infty$, $f\left(1\right)=\ln 3$, $f$ e
continuă și, cum $1<\ln 3<2$, obținem $n=0$ sau $n=1$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se răspunde doar $n=1$.** Vezi nota despre $0$ de mai sus.

</div>

<div class="greseala">

**Se consideră că $f$ ia doar valori sub $2$.** Asimptota $y=2$ privește ramura din
dreapta. Spre $0$ funcția tinde la $+\infty$, deci pe $\left(0,1\right]$ ia toate
valorile de la $\ln 3$ în sus, iar ecuația are soluții pentru orice $n\ge 2$.

</div>

<div class="greseala">

**Nu se justifică $1<\ln 3<2$.** Pentru că $e\approx 2{,}72$, e ușor de văzut, dar
concluzia depinde de această poziție. O propoziție: $e<3<e^{2}$.

</div>
