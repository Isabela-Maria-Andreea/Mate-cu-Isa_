---
titlu: "Probabilitate: multipli impari ai lui 9"
titluSeo: "Probabilitatea ca un număr de două cifre să fie multiplu impar al lui 9 — rezolvare cu barem, BAC 2025 Model M_mate-info, Subiectul I.4"
descriere: "Câte numere de două cifre sunt, care dintre multiplii lui 9 sunt impari și de ce e mai sigur să-i scrii pe toți decât să cauți o formulă. Subiectul I.4, modelul BAC 2025."
capitol: "Combinatorică și binomul lui Newton"
sursa: "BAC 2025, Model — Subiectul I.4"
varianta: "bac-2025-model"
subiect: "I"
pozitie: 4
punctaj: 5
dificultate: 1
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

Probabilitate clasică: cazuri favorabile supra cazuri posibile. Ai de numărat două
mulțimi, amândouă mici.

**Cazurile posibile.** Numerele de două cifre merg de la $10$ la $99$, deci sunt
$99-10+1=90$. Cine scrie $99-10=89$ uită că se numără ambele capete.

**Cazurile favorabile.** Multiplii lui $9$ de două cifre sunt doar zece,
de la $18$ la $99$, așa că îi poți scrie pe toți și să-i alegi pe cei impari.
Aici lista e mai sigură decât un raționament: $9k$ e impar exact când $k$ e impar,
cu $k$ de la $2$ la $11$, dar la capete se greșește ușor.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Numeri cazurile posibile** <span class="punct">2p</span>

Mulțimea numerelor naturale de două cifre are $90$ de elemente, deci sunt $90$ de
cazuri posibile.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Numeri cazurile favorabile și calculezi** <span class="punct">3p</span>

Multiplii lui $9$ de două cifre: $18, 27, 36, 45, 54, 63, 72, 81, 90, 99$. Dintre ei,
impari sunt

$$
27,\ 45,\ 63,\ 81,\ 99
$$

deci $5$ cazuri favorabile.

$$
p=\frac{5}{90}=\frac{1}{18}
$$

<p class="rezultat">p = 1/18</p>

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

Mulțimea numerelor naturale de două cifre are $90$ de elemente, deci $90$ de cazuri
posibile.

Numerele $27$, $45$, $63$, $81$ și $99$ sunt multiplii impari de $9$, deci $5$ cazuri
favorabile, de unde $p=\dfrac{5}{90}=\dfrac{1}{18}$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se numără $89$ de numere.** Diferența $99-10$ numără intervalele, nu numerele.
Rezultatul devine $\dfrac{5}{89}$, iar cele două puncte pentru cazurile posibile se
pierd.

</div>

<div class="greseala">

**Se pierde $99$ sau se adaugă $9$.** $9$ are o singură cifră, iar $99=9\cdot 11$ e
impar și intră. Scrie lista, nu o reconstitui din memorie.

</div>
