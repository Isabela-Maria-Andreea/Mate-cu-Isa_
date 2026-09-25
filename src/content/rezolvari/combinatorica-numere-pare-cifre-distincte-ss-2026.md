---
titlu: "Numere pare de trei cifre distincte"
titluSeo: "Câte numere pare de trei cifre distincte se formează cu {2,4,5,6} — rezolvare cu barem, BAC 2026 M_mate-info, Subiectul I.4"
descriere: "De ce începi numărarea cu poziția constrânsă, nu de la stânga la dreapta. Subiectul I.4, BAC 2026, Sesiunea specială, Varianta 2."
capitol: "Combinatorică și binomul lui Newton"
sursa: "BAC 2026, Sesiunea specială, Varianta 2 — Subiectul I.4"
varianta: "bac-2026-ss-v2"
subiect: "I"
pozitie: 4
punctaj: 5
dificultate: 2
data: 2026-09-17
ciorna: false
---

## Ce recunoști înainte să calculezi

Ai două constrângeri simultane: numărul trebuie să fie **par** și să aibă **cifre
distincte**. Ordinea în care le tratezi decide dacă exercițiul durează treizeci de
secunde sau cinci minute.

Regula: **începi întotdeauna cu poziția cea mai constrânsă.**

Aici, poziția constrânsă e cifra unităților — ea decide paritatea. Din
$A=\left\{2,4,5,6\right\}$, cifrele pare sunt $2$, $4$ și $6$, deci trei variante.
După ce o fixezi, pentru zeci rămân trei cifre din cele patru, iar pentru sute rămân
două.

$$
3\cdot 3\cdot 2=18
$$

Dacă începi de la stânga, de la cifra sutelor, te trezești că numărul de variante
pentru unități depinde de ce ai ales înainte — pentru că unele alegeri consumă o
cifră pară, altele nu. Ajungi să discuți cazuri degeaba.

<div class="aside">

**De ce nu e o combinare.** Aici ordinea contează: $245$ și $425$ sunt numere
diferite. Deci numeri **aranjamente**, nu submulțimi. Formula $C_{4}^{3}$ ar răspunde
la „câte mulțimi de trei cifre", ceea ce nu se cere.

</div>

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Alegi cifra unităților** <span class="punct">2p</span>

Numărul e par, deci ultima cifră e $2$, $4$ sau $6$: se poate alege în $3$ moduri.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Completezi celelalte poziții și înmulțești** <span class="punct">3p</span>

Pentru fiecare alegere a cifrei unităților, cifra zecilor se poate alege în câte $3$
moduri din cele rămase; pentru fiecare alegere a unităților și a zecilor, cifra
sutelor se poate alege în câte $2$ moduri.

$$
3\cdot 3\cdot 2=18
$$

<p class="rezultat">18 numere</p>

</div>
</div>

## Ce îți spune baremul

Două puncte doar pentru propoziția „cifra unităților se poate alege în 3 moduri", și
trei pentru restul. Practic, un sfert din punctaj se ia pentru a fi identificat corect
constrângerea — înainte de orice înmulțire.

Scrie fiecare poziție separat, cu câte variante are și de ce. Un simplu
$3\cdot 3\cdot 2=18$ fără explicație e corect, dar nu arată raționamentul pe care îl
punctează baremul.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

Cifra unităților se poate alege în $3$ moduri (numărul e par).

Pentru fiecare astfel de alegere, cifra zecilor se poate alege în $3$ moduri, iar
cifra sutelor în $2$ moduri, cifrele fiind distincte.

$$
3\cdot 3\cdot 2=18 \text{ numere}
$$

</div>

## Unde se pierd puncte

<div class="greseala">

**Se începe de la cifra sutelor.** Nu e greșit matematic, dar te obligă la discuție pe
cazuri: dacă la sute pui $5$, mai ai trei cifre pare disponibile; dacă pui o cifră
pară, mai ai două. Poziția constrânsă se tratează prima.

</div>

<div class="greseala">

**Se ignoră condiția de cifre distincte.** Fără ea ar fi $3\cdot 4\cdot 4=48$.
Cuvântul „distincte" din enunț schimbă doi factori din trei.

</div>

<div class="greseala">

**Se folosesc combinări în loc de aranjamente.** Numerele au ordine. $C_{4}^{3}=4$ nu
are nicio legătură cu ce se cere.

</div>

