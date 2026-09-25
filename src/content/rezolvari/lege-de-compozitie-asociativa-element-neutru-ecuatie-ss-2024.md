---
titlu: "Legea x ∘ y = xy + (2x + 2y − 1)/4: element neutru și o ecuație cu trei factori"
titluSeo: "x ∘ y = xy + (2x + 2y − 1)/4 — 1 ∘ 1 = 7/4, elementul neutru 1/2 și ecuația (1/2 − x) ∘ (1/2 + x) ∘ (1/2 + x²) = 1/2 − x², BAC 2024 Sesiunea specială M_mate-info, Subiectul II.2"
descriere: "Compunerea lui 1/2 − a cu 1/2 + a dă 1/2 − a², ca o diferență de pătrate. Aplicată de două ori, ecuația devine x⁴ = x². Subiectul II.2, BAC 2024, Sesiunea specială, Varianta 9."
capitol: "Legi de compoziție și grupuri"
sursa: "BAC 2024, Sesiunea specială, Varianta 9 — Subiectul II.2"
varianta: "bac-2024-ss-v9"
subiect: "II"
pozitie: 2
subpuncte:
  - "1 ∘ 1 = 7/4"
  - "Elementul neutru e = 1/2"
  - "Ecuația cu trei factori"
punctaj: 15
dificultate: 3
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

**La c)**, elementele din ecuație sunt toate de forma „$\dfrac{1}{2}$ plus sau
minus ceva", iar $\dfrac{1}{2}$ e elementul neutru de la b). Asta sugerează să
calculezi o dată, în general, $\left(\dfrac{1}{2}-a\right)\circ\left(\dfrac{1}{2}+a\right)$.
Iese $\dfrac{1}{2}-a^{2}$, adică exact forma de la care ai pornit, cu $a$
înlocuit de $a^{2}$. Aplici regula de două ori și ecuația devine una cu puteri
ale lui $x$.

Legea e asociativă (enunțul o spune), deci nu contează cum grupezi cei trei
factori. Îi compui de la stânga la dreapta.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## 1 ∘ 1 = 7/4

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Înlocuiești** <span class="punct">3p</span>

$$
1\circ 1=1\cdot 1+\frac{2\cdot 1+2\cdot 1-1}{4}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Calculezi** <span class="punct">2p</span>

$2+2-1=3$, deci:

$$
1+\frac{3}{4}=\frac{4}{4}+\frac{3}{4}=\frac{7}{4}
$$

<p class="rezultat">1 ∘ 1 = 7/4</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Elementul neutru e = 1/2

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Compunerea la dreapta** <span class="punct">2p</span>

$2\cdot\dfrac{1}{2}=1$, iar $1-1=0$ la numărător:

$$
x\circ\frac{1}{2}=x\cdot\frac{1}{2}+\frac{2x+2\cdot\frac{1}{2}-1}{4}=\frac{x}{2}+\frac{2x}{4}=\frac{x}{2}+\frac{x}{2}=x
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Compunerea la stânga și concluzia** <span class="punct">3p</span>

$$
\frac{1}{2}\circ x=\frac{1}{2}\cdot x+\frac{2\cdot\frac{1}{2}+2x-1}{4}=\frac{x}{2}+\frac{x}{2}=x
$$

Ambele au loc pentru orice $x$ real.

<p class="rezultat">e = 1/2 este elementul neutru</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Ecuația cu trei factori

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Compui factorii doi câte doi** <span class="punct">2p</span>

Primii doi. Produsul e o diferență de pătrate:
$\left(\dfrac{1}{2}-x\right)\left(\dfrac{1}{2}+x\right)=\dfrac{1}{4}-x^{2}$. La
fracție, se reduce $-2x$ cu $+2x$:
$\dfrac{2\left(\frac{1}{2}-x\right)+2\left(\frac{1}{2}+x\right)-1}{4}=\dfrac{1-2x+1+2x-1}{4}=\dfrac{1}{4}$.

$$
\left(\frac{1}{2}-x\right)\circ\left(\frac{1}{2}+x\right)=\frac{1}{4}-x^{2}+\frac{1}{4}=\frac{1}{2}-x^{2}
$$

Rezultatul are aceeași formă, cu $x^{2}$ în locul lui $x$. Deci, compunând cu
$\dfrac{1}{2}+x^{2}$, același calcul dă $\dfrac{1}{2}-\left(x^{2}\right)^{2}$:

$$
\left(\frac{1}{2}-x\right)\circ\left(\frac{1}{2}+x\right)\circ\left(\frac{1}{2}+x^{2}\right)=\left(\frac{1}{2}-x^{2}\right)\circ\left(\frac{1}{2}+x^{2}\right)=\frac{1}{2}-x^{4}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Rezolvi ecuația** <span class="punct">3p</span>

$$
\frac{1}{2}-x^{4}=\frac{1}{2}-x^{2}\ \Rightarrow\ x^{4}-x^{2}=0\ \Rightarrow\ x^{2}\left(x^{2}-1\right)=0
$$

$x^{2}-1=\left(x-1\right)\left(x+1\right)$, deci
$x^{2}\left(x-1\right)\left(x+1\right)=0$.

<p class="rezultat">x ∈ {−1, 0, 1}</p>

</div>
</div>

<span class="atentie">**Nu împărți la $x^{2}$.** Din $x^{4}=x^{2}$, împărțirea dă $x^{2}=1$ și pierde soluția $x=0$. Factorul comun le păstrează pe toate.</span>

<div class="alternativa">

**Cu forma „produs minus constantă".** Legea se poate scrie
$x\circ y=\left(x+\dfrac{1}{2}\right)\left(y+\dfrac{1}{2}\right)-\dfrac{1}{2}$
(desfaci și compari). Atunci
$\left(\dfrac{1}{2}-a\right)\circ\left(\dfrac{1}{2}+a\right)=\left(1-a\right)\left(1+a\right)-\dfrac{1}{2}=\dfrac{1}{2}-a^{2}$
dintr-un rând. E mai rapid, dar forma trebuie justificată pe foaie.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $1\circ 1=1\cdot 1+\dfrac{2\cdot 1+2\cdot 1-1}{4}=1+\dfrac{3}{4}=\dfrac{7}{4}$

**b)** $x\circ\dfrac{1}{2}=x\cdot\dfrac{1}{2}+\dfrac{2x+2\cdot\frac{1}{2}-1}{4}=\dfrac{x}{2}+\dfrac{x}{2}=x$
și $\dfrac{1}{2}\circ x=\dfrac{1}{2}\cdot x+\dfrac{2\cdot\frac{1}{2}+2x-1}{4}=\dfrac{x}{2}+\dfrac{x}{2}=x$,
pentru orice număr real $x$, deci $e=\dfrac{1}{2}$ este elementul neutru.

**c)** $\left(\dfrac{1}{2}-x\right)\circ\left(\dfrac{1}{2}+x\right)=\dfrac{1}{2}-x^{2}$,
$\left(\dfrac{1}{2}-x\right)\circ\left(\dfrac{1}{2}+x\right)\circ\left(\dfrac{1}{2}+x^{2}\right)=\dfrac{1}{2}-x^{4}$,
pentru orice număr real $x$.

$\dfrac{1}{2}-x^{4}=\dfrac{1}{2}-x^{2}$, de unde obținem $x=-1$ sau $x=0$ sau
$x=1$.

</div>

## Unde se pierd puncte

<div class="greseala">

**La c), se compune ca și cum $\circ$ ar fi înmulțire:** se scrie
$\left(\dfrac{1}{4}-x^{2}\right)\left(\dfrac{1}{2}+x^{2}\right)$. Termenul
$\dfrac{2x+2y-1}{4}$ din lege se uită, iar primul rezultat iese
$\dfrac{1}{4}-x^{2}$ în loc de $\dfrac{1}{2}-x^{2}$.

</div>

<div class="greseala">

**La c), se răspunde doar cu $x=\pm 1$.** Soluția $x=0$ se pierde la
împărțirea cu $x^{2}$.

</div>
