---
titlu: "Compunerea unei funcții cu ea însăși, evaluată într-un punct"
titluSeo: "(f∘f)(0) = 0 pentru f(x) = ax² + 2ax − 1 — rezolvare cu barem, BAC 2026 M_mate-info, Subiectul I.2"
descriere: "De ce nu desfaci niciodată f(f(x)) simbolic când ți se cere valoarea într-un punct. Subiectul I.2, BAC 2026, Sesiunea specială, Varianta 2."
capitol: "Funcții, ecuații și inecuații"
sursa: "BAC 2026, Sesiunea specială, Varianta 2 — Subiectul I.2"
varianta: "bac-2026-ss-v2"
subiect: "I"
pozitie: 2
punctaj: 5
dificultate: 2
data: 2026-09-17
ciorna: false
---

## Ce recunoști înainte să calculezi

Capcana e la vedere și costă cinci minute: tentația de a calcula $f\left(f\left(x\right)\right)$
în general, ca expresie. Ar însemna să ridici un trinom la pătrat și să obții un
polinom de gradul al patrulea cu parametru — pentru nimic.

Nu ți se cere funcția compusă. Ți se cere **valoarea ei într-un singur punct**.

Iar compunerea se evaluează **dinăuntru în afară**:

$$
\left(f\circ f\right)\left(0\right)=f\left(f\left(0\right)\right)
$$

Deci calculezi întâi $f\left(0\right)$, obții un număr, și apoi aplici $f$ acelui număr.
Două înlocuiri, niciun calcul simbolic.

<div class="aside">

**Ce simplifică enunțul.** În $f\left(x\right)=ax^{2}+2ax-1$, ambii termeni cu $x$ au
factorul $a$. La $x=0$ se anulează amândoi, deci $f\left(0\right)=-1$ **indiferent de
$a$**. Parametrul intră în joc abia la a doua înlocuire. E motivul pentru care
problema are o singură soluție și nu un caz de discutat.

</div>

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Calculezi valoarea interioară, apoi pe cea exterioară** <span class="punct">3p</span>

$$
f\left(0\right)=a\cdot 0+2a\cdot 0-1=-1
$$

$$
\left(f\circ f\right)\left(0\right)=f\left(-1\right)=a\left(-1\right)^{2}+2a\left(-1\right)-1=a-2a-1=-a-1
$$

pentru orice număr real $a$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Pui condiția și rezolvi** <span class="punct">2p</span>

$$
-a-1=0 \iff a=-1
$$

<p class="rezultat">a = −1</p>

</div>
</div>

## Ce îți spune baremul

Trei puncte pentru cele două evaluări, două pentru ecuația de gradul I. Din nou,
partea grea după barem e să înțelegi ce înseamnă notația, nu să rezolvi.

Scrie ambele valori pe rânduri separate — $f\left(0\right)$ întâi, apoi $f\left(-1\right)$.
Dacă le comprimi într-un singur rând și greșești un semn, nu se mai vede că prima
era corectă.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$f\left(0\right)=-1$, deci $\left(f\circ f\right)\left(0\right)=f\left(-1\right)=a-2a-1=-a-1$,
pentru orice număr real $a$.

$$
-a-1=0 \Rightarrow a=-1
$$

</div>

## Unde se pierd puncte

<div class="greseala">

**Se desface compunerea simbolic.** $f\left(f\left(x\right)\right)$ cu $f$ de gradul al
doilea dă gradul al patrulea. Se poate, dar pierzi timpul și aduni greșeli de semn
pe drum. Evaluarea într-un punct nu cere niciodată asta.

</div>

<div class="greseala">

**Se confundă $f\circ f$ cu $f\cdot f$.** Compunerea nu e înmulțire:
$\left(f\circ f\right)\left(0\right)\ne \left(f\left(0\right)\right)^{2}=1$.

</div>

<div class="greseala">

**Se pierde semnul la $2a\left(-1\right)$.** Dă $-2a$, nu $+2a$. Cu semnul greșit
obții $3a-1=0$ și răspunsul $a=\dfrac{1}{3}$.

</div>

