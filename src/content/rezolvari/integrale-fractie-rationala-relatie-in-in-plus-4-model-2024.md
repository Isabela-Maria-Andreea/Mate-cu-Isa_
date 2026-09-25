---
titlu: "Integrale cu x/(x² + 1)² și relația dintre Iₙ și Iₙ₊₄"
titluSeo: "f(x) = x/(x² + 1)² — integrala 1/4 cu u′/u², radicalul din x·f(x) și Iₙ − Iₙ₊₄ = 2/((n + 2)(n + 4)), BAC 2024 Model M_mate-info, Subiectul III.2"
descriere: "Simplificare înainte de integrare, o integrală de forma u′/u² și un șir de integrale unde diferența se reduce prin 1 − x⁴ = (1 − x²)(1 + x²). Subiectul III.2, modelul BAC 2024."
capitol: "Primitive și integrala definită"
sursa: "BAC 2024, Model — Subiectul III.2"
varianta: "bac-2024-model"
subiect: "III"
pozitie: 2
subpuncte:
  - "Integrala cu (x² + 1)² simplificat"
  - "Integrala lui f pe [0, 1]"
  - "Relația dintre Iₙ și Iₙ₊₄"
punctaj: 15
dificultate: 3
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

**La a), factorul $\left(x^{2}+1\right)^{2}$ e exact numitorul lui $f$.** Se
simplifică înainte de orice integrare și rămâne $\displaystyle\int_{1}^{3}x\,dx$.

**La b), numărătorul $x$ e, până la un factor $2$, derivata lui $x^{2}+1$.**
Integrala are forma $\dfrac{u'}{u^{2}}$, a cărei primitivă e $-\dfrac{1}{u}$.
Semnalul e mereu același: la numărător e derivata expresiei de la numitor, sau
un multiplu al ei.

**La c), $x f\left(x\right)$ e un pătrat perfect.**
$x\cdot\dfrac{x}{\left(x^{2}+1\right)^{2}}=\left(\dfrac{x}{x^{2}+1}\right)^{2}$,
deci radicalul dispare. Apoi, diferența $I_n-I_{n+4}$ are la numărător
$x^{n+1}-x^{n+5}=x^{n+1}\left(1-x^{4}\right)$, iar $1-x^{4}$ conține factorul
$1+x^{2}$ al numitorului. Diferența de pătrate e cea care face ca fracția să
dispară.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Integrala cu (x² + 1)² simplificat

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Simplifici și integrezi** <span class="punct">3p</span>

$f\left(x\right)\left(x^{2}+1\right)^{2}=\dfrac{x}{\left(x^{2}+1\right)^{2}}\cdot\left(x^{2}+1\right)^{2}=x$,
pentru că $\left(x^{2}+1\right)^{2}\ne 0$:

$$
\int_{1}^{3}f\left(x\right)\left(x^{2}+1\right)^{2}dx=\int_{1}^{3}x\,dx=\left.\frac{x^{2}}{2}\right|_{1}^{3}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Formula Leibniz–Newton** <span class="punct">2p</span>

$$
\frac{3^{2}}{2}-\frac{1^{2}}{2}=\frac{9}{2}-\frac{1}{2}=\frac{8}{2}=4
$$

<p class="rezultat">∫₁³ f(x)(x² + 1)² dx = 4</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Integrala lui f pe [0, 1]

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii integrala ca $\dfrac{u'}{u^{2}}$** <span class="punct">3p</span>

Cu $u=x^{2}+1$, $u'=2x$, deci $x=\dfrac{1}{2}u'$:

$$
\int_{0}^{1}\frac{x}{\left(x^{2}+1\right)^{2}}dx=\frac{1}{2}\int_{0}^{1}\frac{\left(x^{2}+1\right)'}{\left(x^{2}+1\right)^{2}}dx=\left.-\frac{1}{2}\cdot\frac{1}{x^{2}+1}\right|_{0}^{1}
$$

Primitiva lui $\dfrac{u'}{u^{2}}$ e $-\dfrac{1}{u}$, pentru că
$\left(-\dfrac{1}{u}\right)'=\dfrac{u'}{u^{2}}$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Înlocuiești limitele** <span class="punct">2p</span>

În $x=1$: $-\dfrac{1}{2}\cdot\dfrac{1}{2}=-\dfrac{1}{4}$. În $x=0$:
$-\dfrac{1}{2}\cdot\dfrac{1}{1}=-\dfrac{1}{2}$. Scazi a doua valoare din prima:

$$
-\frac{1}{4}-\left(-\frac{1}{2}\right)=-\frac{1}{4}+\frac{2}{4}=\frac{1}{4}
$$

<p class="rezultat">∫₀¹ f(x) dx = 1/4</p>

</div>
</div>

<span class="atentie">**Nu uita factorul $\dfrac{1}{2}$.** Numărătorul e $x$, nu $2x$. Fără $\dfrac{1}{2}$ în față obții $\dfrac{1}{2}$ în loc de $\dfrac{1}{4}$.</span>

<div class="alternativa">

**Cu schimbare de variabilă explicită.** $t=x^{2}+1$, $dt=2x\,dx$, capetele devin
$t=1$ și $t=2$: $\displaystyle\frac{1}{2}\int_{1}^{2}\frac{dt}{t^{2}}=\frac{1}{2}\left(-\frac{1}{t}\right)\Big|_{1}^{2}=\frac{1}{2}\left(-\frac{1}{2}+1\right)=\frac{1}{4}$.
Același calcul, cu capetele schimbate o dată cu variabila.

</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Relația dintre Iₙ și Iₙ₊₄

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scapi de radical** <span class="punct">2p</span>

$$
x f\left(x\right)=\frac{x^{2}}{\left(x^{2}+1\right)^{2}}=\left(\frac{x}{x^{2}+1}\right)^{2}
$$

Radicalul dintr-un pătrat e modulul: $\sqrt{a^{2}}=\left|a\right|$. Pe
$\left[0,1\right]$, $x\ge 0$, deci
$\left|\dfrac{x}{x^{2}+1}\right|=\dfrac{x}{x^{2}+1}$. Înmulțind cu $x^{n}$:

$$
I_n=\int_{0}^{1}x^{n}\cdot\frac{x}{x^{2}+1}dx=\int_{0}^{1}\frac{x^{n+1}}{x^{2}+1}dx
$$

</div>
</div>

<span class="atentie">**Modulul la scoaterea de sub radical.** Scrii $\sqrt{a^{2}}=\left|a\right|$ și abia apoi renunți la modul, cu motivul: $x\in\left[0,1\right]$. E o capcană clasică de barem, chiar dacă aici semnul iese bine.</span>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Scazi și simplifici** <span class="punct">3p</span>

La fel, $I_{n+4}=\displaystyle\int_{0}^{1}\frac{x^{n+5}}{x^{2}+1}dx$. Integralele
au aceleași capete, deci le scazi sub același semn de integrală:

$$
I_n-I_{n+4}=\int_{0}^{1}\frac{x^{n+1}-x^{n+5}}{x^{2}+1}dx=\int_{0}^{1}\frac{x^{n+1}\left(1-x^{4}\right)}{x^{2}+1}dx
$$

$1-x^{4}$ e diferență de pătrate: $1-x^{4}=\left(1-x^{2}\right)\left(1+x^{2}\right)$.
Se simplifică $1+x^{2}$ cu numitorul:

$$
I_n-I_{n+4}=\int_{0}^{1}x^{n+1}\left(1-x^{2}\right)dx=\int_{0}^{1}\left(x^{n+1}-x^{n+3}\right)dx
$$

Integrezi fiecare putere:

$$
\left.\frac{x^{n+2}}{n+2}\right|_{0}^{1}-\left.\frac{x^{n+4}}{n+4}\right|_{0}^{1}=\frac{1}{n+2}-\frac{1}{n+4}
$$

Aduci la numitorul comun $\left(n+2\right)\left(n+4\right)$; la numărător se
reduce $n$ cu $-n$:

$$
\frac{\left(n+4\right)-\left(n+2\right)}{\left(n+2\right)\left(n+4\right)}=\frac{2}{\left(n+2\right)\left(n+4\right)}
$$

<p class="rezultat">Iₙ − Iₙ₊₄ = 2/((n + 2)(n + 4)), pentru orice n natural nenul</p>

</div>
</div>

<div class="aside">

**De ce $n+4$ și nu $n+2$.** Cu $I_n-I_{n+2}$ numărătorul ar fi
$x^{n+1}\left(1-x^{2}\right)$, care nu se simplifică cu $1+x^{2}$. Diferența de
patru trepte e aleasă exact ca să apară $1-x^{4}$. Ce se simplifică frumos e
$I_n+I_{n+2}=\displaystyle\int_{0}^{1}x^{n+1}dx=\frac{1}{n+2}$; relația cerută se
poate obține și din două astfel de sume.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $\displaystyle\int_{1}^{3}f\left(x\right)\left(x^{2}+1\right)^{2}dx=\int_{1}^{3}x\,dx=\left.\frac{x^{2}}{2}\right|_{1}^{3}=\frac{9}{2}-\frac{1}{2}=4$

**b)** $\displaystyle\int_{0}^{1}f\left(x\right)dx=\frac{1}{2}\int_{0}^{1}\frac{\left(x^{2}+1\right)'}{\left(x^{2}+1\right)^{2}}dx=\left.-\frac{1}{2}\cdot\frac{1}{x^{2}+1}\right|_{0}^{1}=-\frac{1}{4}+\frac{1}{2}=\frac{1}{4}$

**c)** $\displaystyle I_n=\int_{0}^{1}x^{n}\sqrt{xf\left(x\right)}\,dx=\int_{0}^{1}\frac{x^{n+1}}{x^{2}+1}dx$,
pentru orice număr natural nenul $n$.

$\displaystyle I_n-I_{n+4}=\int_{0}^{1}\frac{x^{n+1}\left(1-x^{4}\right)}{x^{2}+1}dx=\int_{0}^{1}x^{n+1}\left(1-x^{2}\right)dx=\frac{1}{n+2}-\frac{1}{n+4}=\frac{2}{\left(n+2\right)\left(n+4\right)}$

</div>

## Unde se pierd puncte

<div class="greseala">

**La b), primitiva lui $\dfrac{1}{u^{2}}$ scrisă ca $\ln u^{2}$.** Logaritmul
apare la $\dfrac{u'}{u}$, cu $u$ la puterea întâi. La $\dfrac{u'}{u^{2}}$ ai
putere: $u^{-2}$ se integrează la $\dfrac{u^{-1}}{-1}=-\dfrac{1}{u}$.

</div>

<div class="greseala">

**La c), $\sqrt{xf\left(x\right)}$ scris ca $\dfrac{\sqrt{x}}{x^{2}+1}$.** Se
scoate de sub radical doar numitorul și se uită că și numărătorul e $x^{2}$.
Scrie întâi $xf\left(x\right)$ ca o singură fracție, apoi vezi că e un pătrat.

</div>

<div class="greseala">

**La c), se integrează fracția $\dfrac{x^{n+1}}{x^{2}+1}$ direct.** Nu are o
primitivă simplă pentru $n$ general, și nici nu trebuie. Enunțul cere
diferența, iar diferența e cea care se simplifică.

</div>
