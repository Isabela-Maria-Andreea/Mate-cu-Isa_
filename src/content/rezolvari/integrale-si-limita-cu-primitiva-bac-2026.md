---
titlu: "Integrale cu simplificare și o limită cu primitivă"
titluSeo: "f(x) = (x²−4)/(x·ln x) — integrale și limita cu l'Hôpital, rezolvare cu barem, BAC 2026 M_mate-info, Subiectul III.2"
descriere: "De ce cele două integrale se simplifică înainte de orice tehnică, cum recunoști derivata logaritmului sub integrală și cum aplici l'Hôpital la o limită cu primitivă. Subiectul III.2, BAC 2026, Sesiunea I, Varianta 3."
capitol: "Primitive și integrala definită"
sursa: "BAC 2026, Sesiunea I, Varianta 3 — Subiectul III.2"
varianta: "bac-2026-s1-v3"
subiect: "III"
pozitie: 2
subpuncte:
  - "Integrala cu x·ln x"
  - "Integrala cu 1/(x·ln x)"
  - "Limita cu primitivă"
punctaj: 15
dificultate: 5
data: 2026-09-17
ciorna: false
---

## Ce recunoști înainte să calculezi

Funcția e o fracție cu logaritm la numitor. Dacă te apuci să o integrezi așa, te
blochezi. Dar nu trebuie: **la subpunctele a) și b) nu integrezi niciodată $f$
singură.**

Uită-te la ce se cere la fiecare și ce **înmulțește sau împarte** funcția:

- la **a)** apare $f\left(x\right)\cdot x\ln x$ — exact numitorul lui $f$;
- la **b)** apare $\dfrac{f\left(x\right)}{x^{2}-4}$ — exact numărătorul lui $f$.

Ambele sunt invitații la simplificare, nu la tehnici de integrare. Scrie $f$
desfășurat și taie ce se taie:

$$
f\left(x\right)\cdot x\ln x=\frac{x^{2}-4}{x\ln x}\cdot x\ln x=x^{2}-4
$$

$$
\frac{f\left(x\right)}{x^{2}-4}=\frac{x^{2}-4}{x\ln x}\cdot\frac{1}{x^{2}-4}=\frac{1}{x\ln x}
$$

În prima, se simplifică $x\ln x$ de la numitor cu $x\ln x$ din afară. În a doua,
se simplifică $x^{2}-4$ de la numărător cu $x^{2}-4$ de la numitor. Rămâne un
polinom la a) și o fracție elementară la b).

**La b), după simplificare, recunoaște tiparul.** Cum $\left(\ln x\right)'=\dfrac{1}{x}$,
integrandul se scrie

$$
\frac{1}{x\ln x}=\frac{1}{\ln x}\cdot\frac{1}{x}=\frac{1}{\ln x}\cdot\left(\ln x\right)'
$$

care e de forma $\dfrac{u'}{u}$, cu $u=\ln x$. Primitiva ei este $\ln\left|u\right|$.

**La c), toate semnele arată către l'Hôpital** — dar înainte de a-l invoca,
trebuie arătat prin calcul că ești în cazul $\left[\frac{0}{0}\right]$.

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Integrala cu $x\ln x$

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Simplifici și integrezi polinomul** <span class="punct">3p</span>

$$
\int_{2}^{3}f\left(x\right)x\ln x\,dx=\int_{2}^{3}\frac{x^{2}-4}{x\ln x}\cdot x\ln x\,dx=\int_{2}^{3}\left(x^{2}-4\right)dx
$$

Simplificarea e legitimă pentru că pe $\left[2,3\right]$ avem $x>1$, deci
$\ln x>0$ și $x\ln x\ne 0$.

$$
\int_{2}^{3}\left(x^{2}-4\right)dx=\left(\frac{x^{3}}{3}-4x\right)\Bigg|_{2}^{3}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Evaluezi în capete** <span class="punct">2p</span>

$$
\left(\frac{27}{3}-12\right)-\left(\frac{8}{3}-8\right)=\left(9-12\right)-\frac{8}{3}+8
$$

$$
=-3-\frac{8}{3}+8=5-\frac{8}{3}=\frac{15-8}{3}=\frac{7}{3}
$$

<p class="rezultat">7/3</p>

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Integrala cu $\dfrac{1}{x\ln x}$

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Simplifici și recunoști forma $\dfrac{u'}{u}$** <span class="punct">3p</span>

$$
\int_{e}^{e^{2}}\frac{f\left(x\right)}{x^{2}-4}dx
=\int_{e}^{e^{2}}\frac{x^{2}-4}{x\ln x}\cdot\frac{1}{x^{2}-4}\,dx
=\int_{e}^{e^{2}}\frac{1}{x\ln x}dx
$$

Cu $u=\ln x$ și $u'=\dfrac{1}{x}$:

$$
\int_{e}^{e^{2}}\frac{1}{\ln x}\cdot\left(\ln x\right)'dx=\ln\left(\ln x\right)\Bigg|_{e}^{e^{2}}
$$

Pe $\left[e,e^{2}\right]$ avem $\ln x\ge 1>0$, deci modulul din $\ln\left|u\right|$ nu
e necesar.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Evaluezi** <span class="punct">2p</span>

Cum $\ln e^{2}=2$ și $\ln e=1$:

$$
\ln\left(\ln e^{2}\right)-\ln\left(\ln e\right)=\ln 2-\ln 1=\ln 2-0=\ln 2
$$

<p class="rezultat">ln 2</p>

</div>
</div>

<div class="alternativa">

**Aceeași integrală prin substituție.** Mulți profesori preferă substituția
explicită $t=\ln x$, cu $dt=\dfrac{1}{x}dx$. Capetele se schimbă: pentru $x=e$
avem $t=1$, pentru $x=e^{2}$ avem $t=2$. Integrala devine
$\displaystyle\int_{1}^{2}\frac{dt}{t}=\ln t\Big|_{1}^{2}=\ln 2$. Baremul
acceptă ambele — recunoașterea formei $\dfrac{u'}{u}$ e mai scurtă, substituția
e mai greu de greșit.

</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Limita cu primitivă

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Arăți că ești în cazul $\left[\frac{0}{0}\right]$** <span class="punct">3p</span>

Înainte de l'Hôpital, verifici prin calcul că amândouă tind la zero.

**Numărătorul.** Integrala are limita superioară variabilă, iar când
$x\rightarrow 2$ cele două capete se suprapun:

$$
\lim_{x\rightarrow 2}\int_{2}^{x}\left(t-2\right)F\left(t\right)dt=\int_{2}^{2}\left(t-2\right)F\left(t\right)dt=0
$$

**Numitorul.** Din ipoteza $F\left(2\right)=0$ dată în enunț, și cum $F$ e
continuă fiind derivabilă:

$$
\lim_{x\rightarrow 2}F^{2}\left(x\right)=F^{2}\left(2\right)=0^{2}=0
$$

Deci raportul e de forma $\left[\dfrac{0}{0}\right]$ și l'Hôpital se aplică.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Derivezi separat numărătorul și numitorul**

**Numărătorul.** Prin teorema fundamentală a calculului integral, derivata unei
integrale cu limita superioară variabilă este integrandul evaluat în acea limită:

$$
\left(\int_{2}^{x}\left(t-2\right)F\left(t\right)dt\right)'=\left(x-2\right)F\left(x\right)
$$

**Numitorul.** Aici e capcana: $F^{2}$ e o funcție compusă.

<span class="atentie"><strong>Atenție la derivata compusă.</strong> $\left(F^{2}\right)'=2F\cdot F'$, nu $2F$ și nici $F^{2}\cdot F'$. Iar $F'\left(x\right)=f\left(x\right)$ din definiția primitivei — asta e chiar ce înseamnă „$F$ este primitiva lui $f$".</span>

$$
\left(F^{2}\left(x\right)\right)'=2F\left(x\right)\cdot F'\left(x\right)=2F\left(x\right)f\left(x\right)
$$

Raportul devine:

$$
\lim_{x\rightarrow 2}\frac{\left(x-2\right)F\left(x\right)}{2F\left(x\right)f\left(x\right)}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">03</div>
<div class="pas-c">

**Simplifici și calculezi** <span class="punct">2p</span>

Factorul $F\left(x\right)$ se simplifică, fiind nenul pe o vecinătate a lui $2$
din care se exclude $2$: cum $f<0$ pe $\left(1,2\right)$ și $f>0$ pe
$\left(2,+\infty\right)$, funcția $F$ are minim în $2$, iar $F\left(2\right)=0$
înseamnă $F\left(x\right)>0$ pentru $x\ne 2$.

$$
\lim_{x\rightarrow 2}\frac{x-2}{2f\left(x\right)}
$$

Înlocuiești $f$ și desfaci diferența de pătrate de la numitor:

$$
2f\left(x\right)=\frac{2\left(x^{2}-4\right)}{x\ln x}=\frac{2\left(x-2\right)\left(x+2\right)}{x\ln x}
$$

Deci

$$
\frac{x-2}{2f\left(x\right)}=\left(x-2\right)\cdot\frac{x\ln x}{2\left(x-2\right)\left(x+2\right)}=\frac{x\ln x}{2\left(x+2\right)}
$$

Factorul $x-2$ se simplifică, iar nedeterminarea dispare — nu mai aplici
l'Hôpital a doua oară.

$$
\lim_{x\rightarrow 2}\frac{x\ln x}{2\left(x+2\right)}=\frac{2\ln 2}{2\cdot 4}=\frac{2\ln 2}{8}=\frac{\ln 2}{4}
$$

<p class="rezultat">ln 2 / 4</p>

</div>
</div>

## Ce îți spune baremul

La toate cele trei subpuncte împărțirea e $3+2$: partea grea e recunoașterea
metodei, nu aritmetica finală.

La **a)** cele trei puncte se iau pentru simplificare plus primitiva polinomului
— adică pentru a înțelege că nu ai de integrat o fracție cu logaritm. Evaluarea
în capete, unde se greșește cel mai des cu semnele, valorează doar două.

La **b)**, cele trei puncte merg pe lanțul de simplificări până la
$\ln\left(\ln x\right)$. Dacă ajungi acolo și greșești evaluarea, pierzi doar două
puncte din cinci.

La **c)**, trei puncte se dau pentru **aplicarea corectă a lui l'Hôpital** — adică
justificarea cazului $\left[\frac{0}{0}\right]$ plus cele două derivate — și doar
două pentru limita finală. Scrie explicit de ce ambii termeni tind la zero, chiar
dacă nu duci calculul până la capăt.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $\displaystyle\int_{2}^{3}f\left(x\right)x\ln x\,dx=\int_{2}^{3}\left(x^{2}-4\right)dx=\left(\frac{x^{3}}{3}-4x\right)\Big|_{2}^{3}=-3+\frac{16}{3}=\frac{7}{3}$

**b)** $\displaystyle\int_{e}^{e^{2}}\frac{f\left(x\right)}{x^{2}-4}dx=\int_{e}^{e^{2}}\frac{1}{\ln x}\left(\ln x\right)'dx=\ln\left(\ln x\right)\Big|_{e}^{e^{2}}=\ln 2$

**c)** Cum $\displaystyle\int_{2}^{x}\left(t-2\right)F\left(t\right)dt\rightarrow 0$ și
$F^{2}\left(x\right)\rightarrow F^{2}\left(2\right)=0$, limita e de forma
$\left[\frac{0}{0}\right]$. Aplicăm l'Hôpital, cu $F'=f$:

$$
\lim_{x\rightarrow 2}\frac{\left(x-2\right)F\left(x\right)}{2F\left(x\right)f\left(x\right)}
=\lim_{x\rightarrow 2}\frac{\left(x-2\right)x\ln x}{2\left(x-2\right)\left(x+2\right)}
=\lim_{x\rightarrow 2}\frac{x\ln x}{2\left(x+2\right)}=\frac{\ln 2}{4}
$$

</div>

## Unde se pierd puncte

<div class="greseala">

**Se încearcă integrarea prin părți la a).** Vezi $x\ln x$ și reflexul e
integrarea prin părți. Dar $f\left(x\right)$ are exact $x\ln x$ la numitor: se
simplifică înainte de orice tehnică. Citește integrandul întreg, nu doar o bucată
din el.

</div>

<div class="greseala">

**Se derivează greșit numitorul la c).**
$\left(F^{2}\left(x\right)\right)'=2F\left(x\right)f\left(x\right)$, nu
$2F\left(x\right)$ și nici $F^{2}\left(x\right)\cdot f\left(x\right)$. Se aplică
derivata funcției compuse, iar $F'=f$ prin definiția primitivei.

</div>

<div class="greseala">

**Se invocă l'Hôpital fără să se arate cazul $\left[\frac{0}{0}\right]$.**
Baremul cere justificarea, nu doar aplicarea. Fără ipoteza $F\left(2\right)=0$
numitorul nu tinde la zero, iar regula nu se aplică — deci ea trebuie citată
explicit.

</div>

<div class="greseala">

**Nu se factorizează $x^{2}-4$ la final.** După ce $F$ dispare, rămâne
$\dfrac{x-2}{2f\left(x\right)}$, care e tot $\left[\frac{0}{0}\right]$. Nu aplica
l'Hôpital a doua oară: $x^{2}-4=\left(x-2\right)\left(x+2\right)$, iar factorul
$x-2$ se simplifică direct.

</div>

<div class="greseala">

**Se simplifică $F\left(x\right)$ fără justificare.** Trebuie spus de ce
$F\left(x\right)\ne 0$ lângă $2$: funcția are minim în $2$, unde valoarea e zero,
deci e strict pozitivă în rest.

</div>

