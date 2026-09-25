---
titlu: "Funcție cu exponențială: tangentă și monotonie strictă"
titluSeo: "f(x) = (eˣ+2x+1)/(x+1): derivată, tangenta în x = 0 și monotonie — rezolvare cu barem, BAC 2026 M_mate-info, Subiectul III.1"
descriere: "Cum demonstrezi că xeˣ + 1 > 0 cu o funcție auxiliară, când semnul derivatei nu se vede direct. Subiectul III.1, BAC 2026, Sesiunea specială, Varianta 2."
capitol: "Derivate și monotonie"
sursa: "BAC 2026, Sesiunea specială, Varianta 2 — Subiectul III.1"
varianta: "bac-2026-ss-v2"
subiect: "III"
pozitie: 1
subpuncte:
  - "Calculul derivatei"
  - "Ecuația tangentei în x = 0"
  - "Monotonia strictă"
punctaj: 15
dificultate: 5
data: 2026-09-17
ciorna: false
---

## Ce recunoști înainte să calculezi

Cele trei subpuncte urcă în dificultate mai abrupt decât pare. a) e calcul de rutină,
b) e o formulă aplicată, dar c) cere un raționament pe două niveluri — e cel mai greu
lucru din toată varianta.

**La a), enunțul îți dă răspunsul.** Ți se cere să *arăți* că derivata e
$\dfrac{xe^{x}+1}{\left(x+1\right)^{2}}$, deci știi spre ce reduci. Numărătorul se
simplifică mult: termenii cu $e^{x}$ simplu și cei cu $2x$ se anulează, rămâne doar
$xe^{x}+1$.

**La c), aici e problema.** Semnul derivatei e dat de $xe^{x}+1$, pentru că numitorul
e un pătrat strict pozitiv. Dar $xe^{x}$ este **negativ** pentru $x<0$, deci nu poți
spune că suma e pozitivă doar privind-o.

Îți trebuie o **funcție auxiliară**: studiezi $g\left(x\right)=xe^{x}+1$ ca funcție de
sine stătătoare, îi afli monotonia, și arăți că minimul ei e pozitiv.

$$
g'\left(x\right)=e^{x}+xe^{x}=\left(x+1\right)e^{x}
$$

Pe $\left[-1,+\infty\right)$ avem $x+1\ge 0$ și $e^{x}>0$, deci $g'\ge 0$: funcția $g$
e crescătoare. Atunci valoarea ei cea mai mică pe intervalul închis e în capătul din
stânga, $g\left(-1\right)=1-\dfrac{1}{e}$, care e pozitivă fiindcă $e>1$.

<div class="aside">

**De ce extinzi la $\left[-1,+\infty\right)$.** Funcția $f$ e definită pe intervalul
deschis $\left(-1,+\infty\right)$, unde nu există un punct de minim. Studiind $g$ pe
intervalul **închis**, capeți un capăt în care poți evalua — și cum $g$ e crescătoare,
tot ce urmează e strict mai mare. E un truc standard: extinde domeniul funcției
auxiliare ca să ai unde calcula.

</div>

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Calculul derivatei


<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Aplici formula derivatei unui cât** <span class="punct">3p</span>

$$
f'\left(x\right)=\frac{\left(e^{x}+2\right)\left(x+1\right)-\left(e^{x}+2x+1\right)\cdot 1}{\left(x+1\right)^{2}}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Reduci numărătorul** <span class="punct">2p</span>

$$
xe^{x}+e^{x}+2x+2-e^{x}-2x-1=xe^{x}+1
$$

Se anulează $e^{x}$ cu $-e^{x}$ și $2x$ cu $-2x$; rămâne $2-1=1$.

$$
f'\left(x\right)=\frac{xe^{x}+1}{\left(x+1\right)^{2}}, \quad x\in\left(-1,+\infty\right)
$$

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Ecuația tangentei în $x=0$


<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Calculezi valoarea și panta** <span class="punct">2p</span>

$$
f\left(0\right)=\frac{e^{0}+0+1}{0+1}=\frac{2}{1}=2, \qquad
f'\left(0\right)=\frac{0\cdot e^{0}+1}{\left(0+1\right)^{2}}=1
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Aplici formula tangentei** <span class="punct">3p</span>

$$
y-f\left(0\right)=f'\left(0\right)\left(x-0\right)
$$

adică $y-2=1\cdot x$.

<p class="rezultat">y = x + 2</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Monotonia strictă


<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Studiezi funcția auxiliară** <span class="punct">3p</span>

Considerăm $g:\left[-1,+\infty\right)\rightarrow\mathbb{R}$, $g\left(x\right)=xe^{x}+1$.

<span class="atentie"><strong>Atenție la derivata produsului.</strong> $\left(xe^{x}\right)'=x'\cdot e^{x}+x\cdot\left(e^{x}\right)'=e^{x}+xe^{x}$, nu $e^{x}$. Dând factor comun $e^{x}$, obții $\left(x+1\right)e^{x}$.</span>

$$
g'\left(x\right)=\left(xe^{x}+1\right)'=e^{x}+xe^{x}=\left(x+1\right)e^{x}\ge 0, \quad x\in\left[-1,+\infty\right)
$$

deci $g$ este crescătoare pe $\left[-1,+\infty\right)$. Cum

$$
g\left(-1\right)=-e^{-1}+1=1-\frac{1}{e}>0
$$

rezultă că $g\left(x\right)>0$ pentru orice $x\in\left(-1,+\infty\right)$.

Scris ca tabel de variație — forma pe care o așteaptă corectorul:

<div class="variatie-scroll">
<table class="variatie">
<tr><th>x</th><td>−1</td><td></td><td>+∞</td></tr>
<tr><th>g′(x)</th><td>0</td><td>+</td><td></td></tr>
<tr><th>g(x)</th><td>1 − 1/e</td><td>↗</td><td></td></tr>
<tr><th>f′(x)</th><td>|</td><td>+</td><td></td></tr>
<tr><th>f(x)</th><td>|</td><td>↗</td><td></td></tr>
</table>
</div>

Primele trei rânduri sunt argumentul: $g$ pornește de la o valoare pozitivă și
crește, deci rămâne pozitivă. Ultimele două sunt concluzia: numărătorul lui
$f'$ fiind $g$, iar numitorul un pătrat strict pozitiv, semnul se transmite.
Bara verticală marchează că $f$ nu e definită în $-1$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Încheie despre semnul derivatei** <span class="punct">2p</span>

Cum $\left(x+1\right)^{2}>0$ pentru orice $x\in\left(-1,+\infty\right)$, iar
numărătorul $g\left(x\right)$ este strict pozitiv, obținem $f'\left(x\right)>0$ pe tot
domeniul.

<p class="rezultat">f este strict crescătoare pe (−1, +∞)</p>

</div>
</div>

<div class="alternativa">

**A doua cale, fără extinderea domeniului.** În loc să studiezi $g$ pe intervalul
închis $\left[-1,+\infty\right)$, poți rămâne pe domeniul deschis și să calculezi
limita în capătul lui.

Pe $\left(-1,+\infty\right)$ avem $x+1>0$ și $e^{x}>0$, deci
$g'\left(x\right)=\left(x+1\right)e^{x}>0$: funcția $g$ este strict crescătoare.
Atunci valorile ei sunt strict mai mari decât limita în capătul din stânga:

$$
\lim_{\substack{x\rightarrow -1\\ x>-1}}g\left(x\right)=\left(-1\right)e^{-1}+1=1-\frac{1}{e}>0
$$

deci $g\left(x\right)>1-\dfrac{1}{e}>0$ pentru orice $x\in\left(-1,+\infty\right)$.

Ambele variante iau punctajul complet. Extinderea la interval închis îți dă un
capăt în care poți **evalua**; limita îți dă același număr fără să modifici
domeniul. Alege-o pe cea cu care ești mai obișnuită — dar scrie complet una
dintre ele, nu jumătate din fiecare.

</div>

## Ce îți spune baremul

La **a)**, trei puncte pentru aplicarea formulei, înainte de orice reducere. La **b)**,
două puncte doar pentru $f\left(0\right)$ și $f'\left(0\right)$ — două numere, scrise
pe un rând.

La **c)**, trei puncte din cinci merg pe **funcția auxiliară**: introducerea lui $g$,
derivata ei, monotonia, și valoarea în $-1$. Doar două rămân pentru concluzia despre
$f$.

Asta îți spune ce se testează: nu concluzia, ci ideea de a construi $g$. Dacă scrii
funcția auxiliară și îi arăți pozitivitatea, dar uiți să încheie despre $f$, pierzi
două puncte din cinci. Invers — dacă afirmi că $xe^{x}+1>0$ fără demonstrație — pierzi
trei.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $f'\left(x\right)=\dfrac{\left(e^{x}+2\right)\left(x+1\right)-\left(e^{x}+2x+1\right)}{\left(x+1\right)^{2}}=\dfrac{xe^{x}+1}{\left(x+1\right)^{2}}$

**b)** $f\left(0\right)=2$, $f'\left(0\right)=1$; tangenta este
$y-f\left(0\right)=f'\left(0\right)\left(x-0\right)$, adică $y=x+2$.

**c)** Fie $g:\left[-1,+\infty\right)\rightarrow\mathbb{R}$, $g\left(x\right)=xe^{x}+1$
(sau tabelul de variație al lui $g$, urmat de cel al lui $f$).
Atunci $g'\left(x\right)=\left(x+1\right)e^{x}\ge 0$, deci $g$ e crescătoare, iar
$g\left(-1\right)=1-\dfrac{1}{e}>0$, deci $g\left(x\right)>0$ pe $\left(-1,+\infty\right)$.

Cum $\left(x+1\right)^{2}>0$, rezultă $f'\left(x\right)>0$, deci $f$ e strict
crescătoare.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se afirmă că $xe^{x}+1>0$ fără demonstrație.** E adevărat, dar nu e evident: pentru
$x$ negativ, $xe^{x}$ e negativ. Baremul plătește exact pentru argumentul care
lipsește.

</div>

<div class="greseala">

**Se studiază $g$ pe intervalul deschis.** Pe $\left(-1,+\infty\right)$ funcția $g$ nu
are minim atins, deci nu poți evalua nicăieri. Extinderea la capătul închis $-1$ e
tocmai pasul care face argumentul să funcționeze.

</div>

<div class="greseala">

**Se derivează greșit $xe^{x}$.** Este produs: $\left(xe^{x}\right)'=e^{x}+xe^{x}=\left(x+1\right)e^{x}$,
nu $e^{x}$.

</div>

<div class="greseala">

**Se confundă formula tangentei.** Panta e $f'\left(0\right)$, iar punctul de tangență
are ordonata $f\left(0\right)$. Dacă le inversezi, obții $y=2x+1$.

</div>

