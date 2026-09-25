---
titlu: "Probabilitate: produsul cifrelor divizibil cu 5"
titluSeo: "Numere de două cifre nenule cu produsul cifrelor divizibil cu 5 — probabilitatea 17/81, rezolvare cu barem, Simulare BAC 2026 M_mate-info, Subiectul I.4"
descriere: "De ce produsul cifrelor e divizibil cu 5 exact când una dintre cifre e 5 și cum numeri cazurile favorabile fără să-l numeri pe 55 de două ori. Subiectul I.4, Simularea BAC 2026."
capitol: "Combinatorică și binomul lui Newton"
sursa: "BAC 2026, Simulare clasa a XII-a — Subiectul I.4"
varianta: "bac-2026-sm-v1"
subiect: "I"
pozitie: 4
punctaj: 5
dificultate: 2
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

**Cazurile posibile.** „Cifre nenule" înseamnă că fiecare cifră e din
$\left\{1,2,\ldots,9\right\}$. Zecile au 9 variante, unitățile tot 9, deci
$9\cdot 9=81$ de numere.

**Cazurile favorabile.** $5$ e număr prim, deci un produs de cifre e divizibil
cu $5$ doar dacă unul dintre factori e divizibil cu $5$. Singura cifră nenulă
divizibilă cu $5$ este chiar $5$. Condiția devine: **cel puțin o cifră este 5**.

„Cel puțin una" e semnalul pentru două căi: numeri direct, cu grijă la cazul în
care sunt amândouă, sau numeri **complementul**.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Numeri cazurile posibile** <span class="punct">2p</span>

Cifra zecilor și cifra unităților se aleg fiecare din $\left\{1,2,\ldots,9\right\}$:

$$
9\cdot 9=81 \text{ cazuri posibile}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Numeri cazurile favorabile și calculezi probabilitatea** <span class="punct">3p</span>

Produsul cifrelor e divizibil cu $5$ exact când una dintre cifre e $5$.

- cifra zecilor e $5$: $51,52,\ldots,59$, adică $9$ numere;
- cifra unităților e $5$: $15,25,\ldots,95$, adică $9$ numere.

<span class="atentie">**Numărul 55 apare în ambele liste.** Se scade o dată: $9+9-1=17$, nu $18$.</span>

$$
p=\frac{\text{nr. cazuri favorabile}}{\text{nr. cazuri posibile}}=\frac{17}{81}
$$

<p class="rezultat">p = 17/81</p>

</div>
</div>

<div class="alternativa">

**Prin complement.** Numerele fără nicio cifră $5$ au ambele cifre din
$\left\{1,2,3,4,6,7,8,9\right\}$, deci sunt $8\cdot 8=64$. Favorabile:
$81-64=17$. Calea asta nu are capcana cu $55$, pentru că nu numeri nimic de
două ori.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

Mulțimea $A$ are $9\cdot 9=81$ de elemente, deci sunt $81$ de cazuri posibile.

Produsul cifrelor e divizibil cu $5$ dacă și numai dacă una dintre cifre este
$5$. Sunt $9+9-1=17$ astfel de numere, deci $17$ cazuri favorabile, de unde
$p=\dfrac{17}{81}$.

</div>

## Unde se pierd puncte

<!-- SCHIȚĂ: greșelile de mai jos sunt propuse, nu verificate pe lucrări reale. De confirmat de Isa. -->

<div class="greseala">

**Se numără 55 de două ori.** Rezultă $\dfrac{18}{81}=\dfrac{2}{9}$. Arată
curat, dar e greșit.

</div>

<div class="greseala">

**Se iau 90 de cazuri posibile.** $90$ e numărul tuturor numerelor de două
cifre, de la $10$ la $99$. Enunțul cere cifre nenule, deci $10,20,\ldots$ și
toate numerele cu $0$ la unități ies din mulțime.

</div>
