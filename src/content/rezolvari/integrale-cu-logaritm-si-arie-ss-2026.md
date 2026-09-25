---
titlu: "Integrale cu logaritm și o arie cu parametru"
titluSeo: "f(x) = 6 + 1/x + ln²x/x: două integrale și aria dintre grafic și Ox — rezolvare cu barem, BAC 2026 M_mate-info, Subiectul III.2"
descriere: "De ce fiecare subpunct scade exact acea parte din funcție care te încurcă, și cum se calculează aria prin integrare prin părți. Subiectul III.2, BAC 2026, Sesiunea specială, Varianta 2."
capitol: "Primitive și integrala definită"
sursa: "BAC 2026, Sesiunea specială, Varianta 2 — Subiectul III.2"
varianta: "bac-2026-ss-v2"
subiect: "III"
pozitie: 2
subpuncte:
  - "Integrala fără termenul cu logaritm"
  - "Integrala doar cu termenul cu logaritm"
  - "Aria cu parametru"
punctaj: 15
dificultate: 5
data: 2026-09-17
ciorna: false
---

## Ce recunoști înainte să calculezi

Funcția are trei bucăți: o constantă, $\dfrac{1}{x}$, și $\dfrac{\ln^{2}x}{x}$.

$$
f\left(x\right)=6+\frac{1}{x}+\frac{\ln^{2}x}{x}
$$

Uită-te acum la ce se cere la fiecare subpunct — și ce **scade** din $f$:

- la **a)** se scade $\dfrac{\ln^{2}x}{x}$, deci rămâne $6+\dfrac{1}{x}$;
- la **b)** se scad $6$ și $\dfrac{1}{x}$, deci rămâne exact $\dfrac{\ln^{2}x}{x}$.

Enunțul e construit ca să izolezi câte o parte. **Prima mișcare, la ambele, e aceeași:
scrie $f$ desfășurat și taie ce se taie.** Nu integrezi niciodată funcția întreagă.

**La b), după simplificare, recunoaște tiparul.** Cum $\left(\ln x\right)'=\dfrac{1}{x}$,
integrandul se scrie

$$
\frac{\ln^{2}x}{x}=\left(\ln x\right)'\cdot\ln^{2}x
$$

care e de forma $u'u^{2}$, deci are primitiva $\dfrac{u^{3}}{3}$.

**La c), funcția $g$ e tot $f$ rearanjată.** Din $g\left(x\right)=\dfrac{f\left(x\right)-6}{x}$
rezultă

$$
g\left(x\right)=\frac{1}{x^{2}}+\frac{\ln^{2}x}{x^{2}}
$$

Pe $\left[1,e\right]$ ambii termeni sunt pozitivi, deci graficul stă deasupra axei și
aria e chiar integrala, fără modul de discutat.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Integrala fără termenul cu logaritm

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Simplifici și integrezi** <span class="punct">3p</span>

$$
\int_{1}^{3}\left(f\left(x\right)-\frac{\ln^{2}x}{x}\right)dx
=\int_{1}^{3}\left(6+\frac{1}{x}\right)dx
=\left(6x+\ln x\right)\Bigg|_{1}^{3}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Evaluezi în capete** <span class="punct">2p</span>

$$
\left(18+\ln 3\right)-\left(6+\ln 1\right)=12+\ln 3
$$

<p class="rezultat">12 + ln 3</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Integrala doar cu termenul cu logaritm

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Simplifici și recunoști forma $u'u^{2}$** <span class="punct">3p</span>

$$
\int_{1}^{e}\left(f\left(x\right)-6-\frac{1}{x}\right)dx
=\int_{1}^{e}\frac{\ln^{2}x}{x}dx
=\int_{1}^{e}\left(\ln x\right)'\ln^{2}x\,dx
=\frac{\ln^{3}x}{3}\Bigg|_{1}^{e}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Evaluezi** <span class="punct">2p</span>

Cum $\ln e=1$ și $\ln 1=0$:

$$
\frac{1}{3}-0=\frac{1}{3}
$$

<p class="rezultat">1/3</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Aria cu parametru

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii aria ca integrală** <span class="punct">2p</span>

$$
g\left(x\right)=\frac{f\left(x\right)-6}{x}=\frac{1}{x^{2}}+\frac{\ln^{2}x}{x^{2}}
$$

Funcția e pozitivă pe $\left[1,e\right]$, deci

$$
\mathcal{A}=\int_{1}^{e}g\left(x\right)dx
=\int_{1}^{e}\frac{1}{x^{2}}dx+\int_{1}^{e}\frac{\ln^{2}x}{x^{2}}dx
$$

Prima integrală e imediată: $\left(-\dfrac{1}{x}\right)\Bigg|_{1}^{e}=1-\dfrac{1}{e}$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Integrezi prin părți și determini $m$** <span class="punct">3p</span>

Pentru a doua integrală, cu $\left(-\dfrac{1}{x}\right)'=\dfrac{1}{x^{2}}$, integrarea
prin părți aplicată de două ori dă

$$
\int_{1}^{e}\frac{\ln^{2}x}{x^{2}}dx=2-\frac{5}{e}
$$

Prin urmare

$$
\mathcal{A}=\left(1-\frac{1}{e}\right)+\left(2-\frac{5}{e}\right)=3-\frac{6}{e}=3\left(1-\frac{2}{e}\right)
$$

Din $m\left(1-\dfrac{2}{e}\right)=3\left(1-\dfrac{2}{e}\right)$, cum factorul e nenul:

<p class="rezultat">m = 3</p>

</div>
</div>

## Ce îți spune baremul

La **a)** și **b)**, împărțirea e $3+2$: partea grea e simplificarea și recunoașterea
primitivei, nu evaluarea. Scrie explicit rândul în care $f$ se reduce — acolo sunt cele
trei puncte.

La **c)**, două puncte se dau doar pentru **scrierea ariei ca integrală** din $g$
rescrisă, înainte de orice calcul. Trei rămân pentru integrarea prin părți și
identificarea lui $m$.

Concluzia practică: chiar dacă nu duci integrarea prin părți până la capăt, scrierea
lui $g\left(x\right)=\dfrac{1}{x^{2}}+\dfrac{\ln^{2}x}{x^{2}}$ și a integralei îți aduce
deja două puncte.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $\displaystyle\int_{1}^{3}\left(6+\frac{1}{x}\right)dx=\left(6x+\ln x\right)\Big|_{1}^{3}=18+\ln 3-6=12+\ln 3$

**b)** $\displaystyle\int_{1}^{e}\frac{\ln^{2}x}{x}dx=\int_{1}^{e}\left(\ln x\right)'\ln^{2}x\,dx=\frac{\ln^{3}x}{3}\Big|_{1}^{e}=\frac{1}{3}$

**c)** $g\left(x\right)=\dfrac{1}{x^{2}}+\dfrac{\ln^{2}x}{x^{2}}>0$ pe $\left[1,e\right]$,
deci $\mathcal{A}=\displaystyle\int_{1}^{e}g\left(x\right)dx=3-\dfrac{6}{e}$.

Din $m\left(1-\dfrac{2}{e}\right)=3-\dfrac{6}{e}$ obținem $m=3$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se integrează $f$ întreagă.** La a) și b), o parte din funcție se scade tocmai ca să
dispară. Citește integrandul complet înainte să alegi metoda.

</div>

<div class="greseala">

**Se confundă $\dfrac{\ln^{2}x}{x}$ cu $\dfrac{\ln^{2}x}{x^{2}}$.** Prima are primitivă
imediată, prin forma $u'u^{2}$. A doua cere integrare prin părți, de două ori. Un
singur exponent la numitor schimbă complet dificultatea — și e exact diferența dintre
b) și c).

</div>

<div class="greseala">

**Se uită verificarea semnului la c).** Aria e integrala din **modulul** funcției. Aici
$g>0$ pe interval, deci modulul dispare — dar trebuie spus, într-o propoziție.

</div>

<div class="greseala">

**Se simplifică prin factorul $\left(1-\dfrac{2}{e}\right)$ fără justificare.** El e
nenul pentru că $e>2$. O mențiune scurtă e suficientă.

</div>

