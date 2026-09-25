---
titlu: "Ecuația 2ˣ⁺¹ · 8ˣ = 32"
titluSeo: "2^(x+1) · 8^x = 32 — aducerea la baza 2 și egalarea exponenților, rezolvare cu barem, Simulare BAC 2024 M_mate-info, Subiectul I.3"
descriere: "8 și 32 sunt puteri ale lui 2, deci toată ecuația se scrie în baza 2, iar exponenții se adună. Subiectul I.3 din simularea de bacalaureat 2024."
capitol: "Numere reale, puteri și logaritmi"
sursa: "BAC 2024, Simulare clasa a XII-a — Subiectul I.3"
varianta: "bac-2024-sm-v1"
subiect: "I"
pozitie: 3
punctaj: 5
dificultate: 1
data: 2026-09-19
ciorna: false
---

## Ce recunoști înainte să calculezi

Bazele care apar sunt $2$ și $8$, iar membrul drept e $32$. Toate sunt puteri ale
lui $2$: $8=2^{3}$, $32=2^{5}$. Când totul se poate scrie în aceeași bază, ecuația
exponențială devine o ecuație între exponenți.

Două reguli de puteri fac treaba:
$\left(2^{3}\right)^{x}=2^{3x}$ și $2^{p}\cdot 2^{q}=2^{p+q}$.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Aduci totul la baza 2** <span class="punct">3p</span>

$8^{x}=\left(2^{3}\right)^{x}=2^{3x}$, deci:

$$
2^{x+1}\cdot 2^{3x}=32\ \Rightarrow\ 2^{x+1+3x}=2^{5}\ \Rightarrow\ 2^{4x+1}=2^{5}
$$

Funcția exponențială e injectivă, deci exponenții sunt egali: $4x+1=5$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Rezolvi ecuația de gradul I** <span class="punct">2p</span>

$4x=4$, deci $x=1$.

<p class="rezultat">x = 1</p>

</div>
</div>

<div class="aside">

**Verificare:** $2^{2}\cdot 8^{1}=4\cdot 8=32$. Ecuațiile exponențiale nu au
condiții de existență, deci soluția nu trebuie validată ca la logaritmi.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$2^{x+1}\cdot 2^{3x}=32$, deci $2^{4x+1}=2^{5}$, de unde obținem $4x+1=5$, deci
$x=1$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se scrie $2^{x+1}\cdot 8^{x}=16^{2x+1}$.** La înmulțire se adună exponenții
doar dacă baza e aceeași; bazele nu se înmulțesc între ele. Întâi aduci $8$ la
baza $2$.

</div>

<div class="greseala">

**Se scrie $\left(2^{3}\right)^{x}=2^{3+x}$.** Puterea unei puteri înmulțește
exponenții. Cu greșeala, ajungi la $2^{2x+4}=2^{5}$ și $x=\dfrac{1}{2}$.

</div>
