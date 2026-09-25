---
titlu: "Ecuație logaritmică cu logaritm în baza x"
titluSeo: "log₆(7x − 5) = log₆(x + 1) + 1/logₓ6 — schimbarea bazei și condițiile de existență, BAC 2025 Model M_mate-info, Subiectul I.3"
descriere: "Cum transformi 1/logₓ6 în log₆x, de ce x = 1 cade chiar dacă verifică ecuația finală și ce condiții scrii la început. Subiectul I.3, modelul BAC 2025."
capitol: "Numere reale, puteri și logaritmi"
sursa: "BAC 2025, Model — Subiectul I.3"
varianta: "bac-2025-model"
subiect: "I"
pozitie: 3
punctaj: 5
dificultate: 3
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

Termenul ciudat e $\dfrac{1}{\log_{x}6}$. Are baza $x$, iar restul ecuației e în
baza $6$, deci trebuie adus la baza $6$. Formula schimbă între ele baza și argumentul:

$$
\log_{a}b=\frac{1}{\log_{b}a}, \qquad\text{deci}\qquad \frac{1}{\log_{x}6}=\log_{6}x
$$

După asta, membrul drept e o sumă de logaritmi în aceeași bază, care devine logaritmul
produsului. Ajungi la $\log_{6}\left(\ldots\right)=\log_{6}\left(\ldots\right)$ și
egalezi argumentele.

**Condițiile se scriu înainte, nu după.** Aici sunt mai multe decât de obicei, pentru
că $x$ apare și ca bază:

- $7x-5>0$, adică $x>\dfrac{5}{7}$;
- $x+1>0$, adică $x>-1$;
- baza $x$ trebuie să fie pozitivă și diferită de $1$: $x>0$, $x\ne 1$.

Împreună: $x\in\left(\dfrac{5}{7},1\right)\cup\left(1,+\infty\right)$.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Aduci la aceeași bază și egalezi argumentele** <span class="punct">3p</span>

Cu $\dfrac{1}{\log_{x}6}=\log_{6}x$:

$$
\log_{6}\left(x+1\right)+\log_{6}x=\log_{6}\left(x\left(x+1\right)\right)=\log_{6}\left(x^{2}+x\right)
$$

Ecuația devine $\log_{6}\left(7x-5\right)=\log_{6}\left(x^{2}+x\right)$. Logaritmul e
injectiv, deci

$$
7x-5=x^{2}+x \iff x^{2}+x-7x+5=0 \iff x^{2}-6x+5=0
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Rezolvi și verifici condițiile** <span class="punct">2p</span>

$$
x^{2}-6x+5=\left(x-1\right)\left(x-5\right)=0
$$

deci $x=1$ sau $x=5$.

<span class="atentie">**$x=1$ nu convine.** Verifică ecuația de gradul al doilea, dar în ecuația inițială $\log_{1}6$ nu există, pentru că baza unui logaritm nu poate fi $1$. Baremul cere explicit „care nu convine".</span>

Pentru $x=5$: $7\cdot 5-5=30$ și $5^{2}+5=30$, iar $5$ respectă toate condițiile.

<p class="rezultat">x = 5</p>

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

Condiții: $x>\dfrac{5}{7}$, $x\ne 1$.

$\log_{6}\left(7x-5\right)=\log_{6}\left(x^{2}+x\right)$, deci $7x-5=x^{2}+x$, de unde
$x^{2}-6x+5=0$.

$x=1$, care nu convine, sau $x=5$, care convine.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se păstrează $x=1$.** E capcana pusă intenționat: rădăcina iese curat din ecuația
de gradul al doilea, dar face baza logaritmului egală cu $1$. Două puncte din cinci
depind de propoziția „care nu convine".

</div>

<div class="greseala">

**Se uită de condiția pe bază.** Cine scrie doar $7x-5>0$ și $x+1>0$ obține
$x>\dfrac{5}{7}$, un interval care îl conține pe $1$, și nu mai are de unde să-l
elimine.

</div>

<div class="greseala">

**Se scrie $\dfrac{1}{\log_{x}6}=\log_{x}\dfrac{1}{6}$.** Inversul logaritmului nu e
logaritmul inversului: $\log_{x}\dfrac{1}{6}=-\log_{x}6$, cu totul altceva.

</div>
