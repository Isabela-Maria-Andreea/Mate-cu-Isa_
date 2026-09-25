---
titlu: "Ecuație logaritmică și condițiile care elimină soluții"
titluSeo: "log₂(2x²−4x+3) = 2log₂x — rezolvare cu barem, BAC 2026 M_mate-info, Subiectul I.3"
descriere: "De ce condiția de existență se citește din enunț, nu din forma la care ajungi după transformări. Subiectul I.3, BAC 2026, Sesiunea specială, Varianta 2."
capitol: "Numere reale, puteri și logaritmi"
sursa: "BAC 2026, Sesiunea specială, Varianta 2 — Subiectul I.3"
varianta: "bac-2026-ss-v2"
subiect: "I"
pozitie: 3
punctaj: 5
dificultate: 3
data: 2026-09-17
ciorna: false
---

## Ce recunoști înainte să calculezi

Structura e simplă: logaritm egal cu logaritm, aceeași bază. Odată ce ambele părți
sunt un singur logaritm, argumentele trebuie să fie egale. Tot exercițiul e să ajungi
acolo corect.

Transformarea evidentă e $2\log_{2}x=\log_{2}x^{2}$. Dar aici e capcana, și merită
înțeleasă exact.

**Condiția de existență se citește din enunțul original, nu din forma finală.**
Enunțul conține $\log_{2}x$, care cere $x>0$. După ce scrii $\log_{2}x^{2}$, expresia
pare să aibă sens și pentru $x$ negativ — dar nu ai voie să folosești asta, pentru că
domeniul s-a stabilit înainte de transformare.

$$
\text{Condiții: } x>0 \quad\text{și}\quad 2x^{2}-4x+3>0
$$

A doua e automat îndeplinită: discriminantul lui $2x^{2}-4x+3$ este
$16-24=-8<0$, iar coeficientul dominant e pozitiv, deci expresia e strict pozitivă
pentru orice $x$ real. Rămâne doar $x>0$.

<div class="aside">

**De ce contează.** Egalitatea $2\log_{2}x=\log_{2}x^{2}$ e adevărată doar pe $x>0$.
Pe $x<0$, membrul drept există, cel stâng nu. Dacă pornești de la forma transformată,
lărgești domeniul fără să vrei și rișți să accepți o soluție falsă.

</div>

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Aduci la logaritmi egali și egalezi argumentele** <span class="punct">2p</span>

$$
\log_{2}\left(2x^{2}-4x+3\right)=\log_{2}x^{2}
$$

Funcția logaritmică e injectivă, deci

$$
2x^{2}-4x+3=x^{2} \iff x^{2}-4x+3=0
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Rezolvi și confrunți cu condiția** <span class="punct">3p</span>

$$
x^{2}-4x+3=0 \iff x=1 \ \text{ sau } \ x=3
$$

Ambele sunt strict pozitive, deci ambele convin.

<p class="rezultat">x = 1 și x = 3</p>

</div>
</div>

## Ce îți spune baremul

Două puncte pentru reducerea la ecuația de gradul al doilea, trei pentru rădăcini
**împreună cu mențiunea că ele convin**. Baremul scrie literal „care convin".

E același tipar ca la orice ecuație cu restricții: găsirea soluțiilor valorează mai
puțin decât verificarea lor. O propoziție — „ambele verifică $x>0$" — ia punctele pe
care le pierde cineva care se oprește la rădăcini.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

Condiții de existență: $x>0$ (iar $2x^{2}-4x+3>0$ pentru orice $x$ real).

$$
\log_{2}\left(2x^{2}-4x+3\right)=\log_{2}x^{2} \Rightarrow x^{2}-4x+3=0 \Rightarrow x=1 \text{ sau } x=3
$$

Ambele verifică $x>0$, deci ambele convin.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se scriu condițiile pentru forma transformată.** Dacă pornești de la
$\log_{2}x^{2}$, ajungi să ceri doar $x\ne 0$ și accepți soluții negative. Condiția
vine din $\log_{2}x$, cel din enunț.

</div>

<div class="greseala">

**Se mută coeficientul greșit.** $2\log_{2}x$ înseamnă $\log_{2}x^{2}$, nu
$\log_{2}\left(2x\right)$. Coeficientul devine exponent, nu factor.

</div>

<div class="greseala">

**Nu se justifică pozitivitatea primului argument.** Chiar dacă $2x^{2}-4x+3>0$
mereu, baremul se uită după condiții scrise. O propoziție despre discriminantul
negativ e suficientă.

</div>

