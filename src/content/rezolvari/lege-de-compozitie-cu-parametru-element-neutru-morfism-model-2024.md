---
titlu: "Legea x ∘ y = m(x − 3)(y − 3) + 3: element neutru și o funcție cu radical"
titluSeo: "x ∘ y = m(x − 3)(y − 3) + 3 pe [3, +∞) — 3 ∘ 5 = 3, elementul neutru 7/2 pentru m = 2 și f(x ∘ y) = f(x) ∘ f(y) cu f(x) = 3 + √(x − 3), BAC 2024 Model M_mate-info, Subiectul II.2"
descriere: "O lege scrisă deja în forma cu x − 3 și y − 3: de ce 3 e element absorbant, cum verifici elementul neutru pe ambele părți și de ce radicalul se desparte în produs. Subiectul II.2, modelul BAC 2024."
capitol: "Legi de compoziție și grupuri"
sursa: "BAC 2024, Model — Subiectul II.2"
varianta: "bac-2024-model"
subiect: "II"
pozitie: 2
subpuncte:
  - "3 ∘ 5 = 3 pentru orice m"
  - "Elementul neutru pentru m = 2"
  - "f(x ∘ y) = f(x) ∘ f(y) pentru m = 1"
punctaj: 15
dificultate: 2
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

Legea e dată direct în forma „produs de paranteze plus constantă":
$x\circ y=m\left(x-3\right)\left(y-3\right)+3$. Tot ce se întâmplă în problemă
se citește din parantezele $x-3$ și $y-3$.

**La a)**, $x=3$ anulează prima paranteză. Deci $3\circ y=3$ pentru orice $y$ și
orice $m$: $3$ „înghite" orice element. Nu contează că al doilea e $5$.

**La b)**, elementul neutru trebuie să facă $m\left(e-3\right)=1$, ca produsul să
lase $x-3$ neschimbat. Cu $m=2$, $e-3=\dfrac{1}{2}$. Enunțul îți dă $e$, deci doar
verifici.

**La c)**, $f\left(x\right)-3=\sqrt{x-3}$. Funcția ia paranteza $x-3$ și îi pune
radical. Cum legea înmulțește paranteze, iar radicalul unui produs e produsul
radicalilor, relația cerută vine de la sine.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## 3 ∘ 5 = 3 pentru orice m

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Înlocuiești în lege** <span class="punct">3p</span>

$$
3\circ 5=m\left(3-3\right)\left(5-3\right)+3
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Calculezi** <span class="punct">2p</span>

$3-3=0$ și $5-3=2$, deci produsul e zero indiferent de $m$:

$$
m\cdot 0\cdot 2+3=0+3=3
$$

<p class="rezultat">3 ∘ 5 = 3, pentru orice m ∈ (0, +∞)</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Elementul neutru pentru m = 2

Pentru $m=2$ legea devine $x\circ y=2\left(x-3\right)\left(y-3\right)+3$. Ca
$e=\dfrac{7}{2}$ să fie element neutru, trebuie $x\circ e=x$ și $e\circ x=x$
pentru orice $x\in M$. Mai întâi, $\dfrac{7}{2}=3{,}5\ge 3$, deci $e\in M$.

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Compunerea la dreapta** <span class="punct">2p</span>

$\dfrac{7}{2}-3=\dfrac{7}{2}-\dfrac{6}{2}=\dfrac{1}{2}$, iar $2\cdot\dfrac{1}{2}=1$:

$$
x\circ\frac{7}{2}=2\left(x-3\right)\left(\frac{7}{2}-3\right)+3=2\cdot\frac{1}{2}\left(x-3\right)+3=x-3+3=x
$$

Se reduce $-3$ cu $+3$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Compunerea la stânga și concluzia** <span class="punct">3p</span>

$$
\frac{7}{2}\circ x=2\left(\frac{7}{2}-3\right)\left(x-3\right)+3=x-3+3=x
$$

Ambele egalități au loc pentru orice $x\in M$.

<p class="rezultat">e = 7/2 este elementul neutru</p>

</div>
</div>

<div class="aside">

**De ce baremul cere ambele părți.** Legea e comutativă (înmulțirea parantezelor
e comutativă), deci a doua egalitate rezultă din prima. Dacă vrei să scrii un
singur calcul, spui explicit „legea este comutativă, deci și
$\dfrac{7}{2}\circ x=x$". Fără propoziția asta, corectorul vede o singură
jumătate din definiție.

</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## f(x ∘ y) = f(x) ∘ f(y) pentru m = 1

Pentru $m=1$: $x\circ y=\left(x-3\right)\left(y-3\right)+3$.

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Partea stângă** <span class="punct">2p</span>

Înlocuiești în $f\left(t\right)=3+\sqrt{t-3}$ argumentul $t=x\circ y$:

$$
f\left(x\circ y\right)=3+\sqrt{\left(x-3\right)\left(y-3\right)+3-3}=3+\sqrt{\left(x-3\right)\left(y-3\right)}
$$

Sub radical se reduce $+3$ cu $-3$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**O rescrii ca $f\left(x\right)\circ f\left(y\right)$** <span class="punct">3p</span>

Pentru $x,y\ge 3$, ambele paranteze sunt nenegative, deci radicalul produsului
se desparte:
$\sqrt{\left(x-3\right)\left(y-3\right)}=\sqrt{x-3}\cdot\sqrt{y-3}$.

Din definiția lui $f$, $\sqrt{x-3}=f\left(x\right)-3$ și
$\sqrt{y-3}=f\left(y\right)-3$:

$$
3+\sqrt{x-3}\cdot\sqrt{y-3}=\left(f\left(x\right)-3\right)\left(f\left(y\right)-3\right)+3=f\left(x\right)\circ f\left(y\right)
$$

Ultima egalitate e chiar legea, aplicată elementelor $f\left(x\right)$ și
$f\left(y\right)$, care sunt în $M$ pentru că $f\left(x\right)=3+\sqrt{x-3}\ge 3$.

<p class="rezultat">f(x ∘ y) = f(x) ∘ f(y), pentru orice x, y ∈ M</p>

</div>
</div>

<span class="atentie">**$\sqrt{ab}=\sqrt{a}\cdot\sqrt{b}$ cere $a,b\ge 0$.** Aici e garantat de $M=\left[3,+\infty\right)$. Merită scris, pentru că e singurul loc din problemă unde domeniul chiar contează.</span>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $3\circ 5=m\left(3-3\right)\left(5-3\right)+3=m\cdot 0\cdot 2+3=3$, pentru
orice $m\in\left(0,+\infty\right)$.

**b)** $x\circ\dfrac{7}{2}=2\left(x-3\right)\left(\dfrac{7}{2}-3\right)+3=x-3+3=x$
și $\dfrac{7}{2}\circ x=2\left(\dfrac{7}{2}-3\right)\left(x-3\right)+3=x-3+3=x$,
pentru orice $x\in M$, deci $e=\dfrac{7}{2}$ este elementul neutru.

**c)** $f\left(x\circ y\right)=3+\sqrt{\left(x-3\right)\left(y-3\right)+3-3}=3+\sqrt{\left(x-3\right)\left(y-3\right)}$

Cum $x-3\ge 0$ și $y-3\ge 0$, $\sqrt{\left(x-3\right)\left(y-3\right)}=\sqrt{x-3}\cdot\sqrt{y-3}$, deci

$f\left(x\circ y\right)=3+\left(3+\sqrt{x-3}-3\right)\left(3+\sqrt{y-3}-3\right)=\left(f\left(x\right)-3\right)\left(f\left(y\right)-3\right)+3=f\left(x\right)\circ f\left(y\right)$,
pentru orice $x,y\in M$.

</div>

## Unde se pierd puncte

<div class="greseala">

**La b), se verifică doar $x\circ e=x$.** Definiția elementului neutru are două
egalități. Fie le scrii pe amândouă, fie spui că legea e comutativă.

</div>

<div class="greseala">

**La b), se lucrează cu $m$ general.** Enunțul fixează $m=2$; cu $m$ oarecare,
$x\circ\dfrac{7}{2}=\dfrac{m}{2}\left(x-3\right)+3$, care nu e $x$. Înlocuiește
$m$ înainte să calculezi.

</div>

<div class="greseala">

**La c), se calculează $f\left(x\right)\circ f\left(y\right)$ cu legea pentru
$m=2$** de la b). Fiecare subpunct își fixează propriul $m$; aici e $m=1$.

</div>
