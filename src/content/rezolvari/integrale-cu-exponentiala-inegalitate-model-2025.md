---
titlu: "Integrale cu eˣ și o inegalitate între integrale"
titluSeo: "f(x) = eˣ + x² − 1: integrală polinomială, forma u′/u și inegalitatea ∫x/(f(x)+1) ≤ 1 − 2/e, BAC 2025 Model M_mate-info, Subiectul III.2"
descriere: "Cum simplifici integrandul înainte de a integra, cum recunoști u′/u și cum demonstrezi o inegalitate între integrale prin micșorarea numitorului. Subiectul III.2, modelul BAC 2025."
capitol: "Primitive și integrala definită"
sursa: "BAC 2025, Model — Subiectul III.2"
varianta: "bac-2025-model"
subiect: "III"
pozitie: 2
subpuncte:
  - "Integrala din x² − 1"
  - "Integrala de forma u′/u"
  - "Inegalitatea între integrale"
punctaj: 15
dificultate: 4
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

La fiecare subpunct, integrandul conține $f$ combinată cu altceva. **Primul gest e
să înlocuiești $f$ și să vezi ce rămâne**:

- la a), $f\left(x\right)-e^{x}=x^{2}-1$, un polinom;
- la b), $f\left(x\right)-x^{2}=e^{x}-1$, iar la numărător e $e^{x}=\left(e^{x}-1\right)'$, deci forma $\dfrac{u'}{u}$;
- la c), $f\left(x\right)+1=e^{x}+x^{2}$, pe care nu-l poți integra în $\dfrac{x}{e^{x}+x^{2}}$.

**La c) nu se cere o valoare, ci o inegalitate.** Semn că integrala nu se calculează
direct. Micșorezi numitorul scoțând $x^{2}$: $e^{x}+x^{2}\ge e^{x}$, deci fracția
crește, iar $\dfrac{x}{e^{x}}=xe^{-x}$ se integrează prin părți. Membrul drept,
$1-\dfrac{2}{e}$, e chiar valoarea acestei integrale.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Integrala din x² − 1

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Simplifici și integrezi** <span class="punct">3p</span>

Se reduce $e^{x}$ cu $-e^{x}$:

$$
\int_{1}^{4}\left(f\left(x\right)-e^{x}\right)dx=\int_{1}^{4}\left(x^{2}-1\right)dx=\left(\frac{x^{3}}{3}-x\right)\Bigg|_{1}^{4}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Evaluezi** <span class="punct">2p</span>

$$
\left(\frac{64}{3}-4\right)-\left(\frac{1}{3}-1\right)=\frac{64}{3}-\frac{1}{3}-4+1=\frac{63}{3}-3=21-3=18
$$

<p class="rezultat">18</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Integrala de forma u′/u

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Simplifici și recunoști forma** <span class="punct">3p</span>

Se reduce $x^{2}$ cu $-x^{2}$, deci $f\left(x\right)-x^{2}=e^{x}-1$. Cum
$\left(e^{x}-1\right)'=e^{x}$:

$$
\int_{1}^{2}\frac{e^{x}}{e^{x}-1}dx=\int_{1}^{2}\frac{\left(e^{x}-1\right)'}{e^{x}-1}dx=\ln\left(e^{x}-1\right)\Bigg|_{1}^{2}
$$

Modulul din $\ln\left|u\right|$ nu e necesar: pe $\left[1,2\right]$, $e^{x}>1$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Evaluezi și simplifici** <span class="punct">2p</span>

$$
\ln\left(e^{2}-1\right)-\ln\left(e-1\right)=\ln\frac{e^{2}-1}{e-1}=\ln\frac{\left(e-1\right)\left(e+1\right)}{e-1}=\ln\left(e+1\right)
$$

Diferența de pătrate $e^{2}-1=\left(e-1\right)\left(e+1\right)$, apoi se simplifică
$e-1$.

<p class="rezultat">ln(e + 1)</p>

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Inegalitatea între integrale

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Compari integranzii** <span class="punct">3p</span>

$f\left(x\right)+1=e^{x}+x^{2}$. Pentru orice $x\in\left[0,1\right]$,
$e^{x}+x^{2}\ge e^{x}>0$, deci $\dfrac{1}{e^{x}+x^{2}}\le\dfrac{1}{e^{x}}$. Înmulțești
cu $x\ge 0$:

$$
\frac{x}{e^{x}+x^{2}}\le\frac{x}{e^{x}}=xe^{-x}
$$

Inegalitatea se păstrează la integrare pe $\left[0,1\right]$:

$$
\int_{0}^{1}\frac{x}{f\left(x\right)+1}dx\le\int_{0}^{1}xe^{-x}dx
$$

</div>
</div>

<span class="atentie">**Semnul lui $x$.** Poți înmulți inegalitatea cu $x$ fără să schimbi sensul doar pentru că $x\ge 0$ pe $\left[0,1\right]$. Scrie asta; e motivul pentru care intervalul începe la $0$.</span>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Integrezi prin părți** <span class="punct">2p</span>

Cu $\left(-e^{-x}\right)'=e^{-x}$:

$$
\int_{0}^{1}x\left(-e^{-x}\right)'dx=-xe^{-x}\Bigg|_{0}^{1}+\int_{0}^{1}e^{-x}dx=-xe^{-x}\Bigg|_{0}^{1}-e^{-x}\Bigg|_{0}^{1}=-e^{-x}\left(x+1\right)\Bigg|_{0}^{1}
$$

$$
=-\frac{2}{e}-\left(-1\right)=1-\frac{2}{e}
$$

Deci $\displaystyle\int_{0}^{1}\frac{x}{f\left(x\right)+1}dx\le 1-\frac{2}{e}$.

<p class="rezultat">∫₀¹ x/(f(x)+1) dx ≤ 1 − 2/e</p>

</div>
</div>

## Ce îți spune baremul

La c), trei puncte se dau pentru comparația integranzilor, înainte de orice calcul.
Ideea de a micșora numitorul valorează mai mult decât integrarea prin părți.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $\displaystyle\int_{1}^{4}\left(f\left(x\right)-e^{x}\right)dx=\int_{1}^{4}\left(x^{2}-1\right)dx=\left(\frac{x^{3}}{3}-x\right)\Big|_{1}^{4}=\frac{64}{3}-4-\left(\frac{1}{3}-1\right)=18$

**b)** $\displaystyle\int_{1}^{2}\frac{e^{x}}{f\left(x\right)-x^{2}}dx=\int_{1}^{2}\frac{e^{x}}{e^{x}-1}dx=\int_{1}^{2}\frac{\left(e^{x}-1\right)'}{e^{x}-1}dx=\ln\left(e^{x}-1\right)\Big|_{1}^{2}=\ln\left(e^{2}-1\right)-\ln\left(e-1\right)=\ln\left(e+1\right)$

**c)** $\dfrac{x}{f\left(x\right)+1}=\dfrac{x}{e^{x}+x^{2}}$ și, cum $e^{x}+x^{2}\ge e^{x}$
și $x\ge 0$ pentru $x\in\left[0,1\right]$,
$\displaystyle\int_{0}^{1}\frac{x}{f\left(x\right)+1}dx\le\int_{0}^{1}xe^{-x}dx$.

$\displaystyle\int_{0}^{1}xe^{-x}dx=\int_{0}^{1}x\left(-e^{-x}\right)'dx=-e^{-x}\left(x+1\right)\Big|_{0}^{1}=1-\frac{2}{e}$,
de unde concluzia.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se scrie $\ln\left(e^{2}-1\right)-\ln\left(e-1\right)=\ln\left(e^{2}-e\right)$.**
Diferența de logaritmi e logaritmul câtului, nu al diferenței.

</div>

<div class="greseala">

**Se încearcă calculul exact la c).** $\dfrac{x}{e^{x}+x^{2}}$ nu are primitivă
elementară. Dacă enunțul cere „demonstrați că $\le$", caută o funcție mai mare pe
care o poți integra.

</div>

<div class="greseala">

**Se uită semnul la $\left(e^{-x}\right)'=-e^{-x}$.** Integrarea prin părți iese cu
semn schimbat și rezultatul devine $\dfrac{2}{e}-1$, care e negativ, imposibil pentru
integrala unei funcții pozitive.

</div>
