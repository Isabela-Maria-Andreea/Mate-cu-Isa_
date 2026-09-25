---
titlu: "Suma și produsul cu conjugatul"
titluSeo: "z + z̄ + z·z̄ = 9 pentru z = 2 + i — numere complexe, rezolvare cu barem, Simulare BAC 2026 M_mate-info, Subiectul I.1"
descriere: "De ce z + z̄ și z·z̄ ies întotdeauna numere reale și cum folosești asta ca să verifici calculul. Subiectul I.1 de la Simularea BAC 2026, clasa a XII-a."
capitol: "Numere complexe"
sursa: "BAC 2026, Simulare clasa a XII-a — Subiectul I.1"
varianta: "bac-2026-sm-v1"
subiect: "I"
pozitie: 1
punctaj: 5
dificultate: 1
data: 2026-09-18
ciorna: false
---

## Ce recunoști înainte să calculezi

Expresia e făcută din două bucăți pe care le știi deja ca rezultat, nu doar ca
calcul:

- $z+\overline{z}$ este **de două ori partea reală**. Partea imaginară se
  reduce, pentru că în $\overline{z}$ apare cu semn schimbat.
- $z\cdot\overline{z}$ este **pătratul modulului**, $\left|z\right|^{2}=a^{2}+b^{2}$
  pentru $z=a+bi$. Tot un număr real.

Deci înainte de orice calcul știi că rezultatul e real, și știi aproximativ cât
iese: $2\cdot 2+\left(4+1\right)$. Calculul de pe foaie doar confirmă asta.

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii conjugatul și înlocuiești** <span class="punct">2p</span>

Pentru $z=2+i$, conjugatul este $\overline{z}=2-i$ (se schimbă semnul părții
imaginare). Înlocuind:

$$
z+\overline{z}+z\cdot\overline{z}=2+i+2-i+\left(2+i\right)\left(2-i\right)
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Reduci și folosești $i^{2}=-1$** <span class="punct">3p</span>

În prima parte, $i$ se reduce cu $-i$, deci $2+i+2-i=4$.

Produsul e o diferență de pătrate, $\left(a+b\right)\left(a-b\right)=a^{2}-b^{2}$,
cu $a=2$ și $b=i$:

$$
\left(2+i\right)\left(2-i\right)=2^{2}-i^{2}=4-i^{2}
$$

<span class="atentie">**Semnul.** $-i^{2}=-\left(-1\right)=+1$, deci produsul e $4+1=5$, nu $4-1=3$. E singurul loc din exercițiu unde se poate greși.</span>

$$
z+\overline{z}+z\cdot\overline{z}=4+4-i^{2}=8+1=9
$$

<p class="rezultat">z + z̄ + z·z̄ = 9</p>

</div>
</div>

<div class="alternativa">

**Cu formulele, fără desfacerea produsului.** Pentru $z=a+bi$ ai
$z+\overline{z}=2a$ și $z\cdot\overline{z}=a^{2}+b^{2}$. Cu $a=2$, $b=1$:
$4+\left(4+1\right)=9$. Baremul acceptă orice soluție corectă, dar scrie
formulele explicit, ca să se vadă de unde vin numerele.

</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$$
z+\overline{z}+z\cdot\overline{z}=2+i+2-i+\left(2+i\right)\left(2-i\right)=4+4-i^{2}=8+1=9
$$

</div>

## Unde se pierd puncte

<!-- SCHIȚĂ: greșelile de mai jos sunt propuse, nu verificate pe lucrări reale. De confirmat de Isa. -->

<div class="greseala">

**Se scrie $i^{2}=1$.** Produsul iese $3$, totalul $7$, și cum rezultatul e dat
în enunț, se ajunge la „ajustări" care costă tot punctajul pe al doilea pas.

</div>

<div class="greseala">

**Se conjugă greșit.** $\overline{2+i}=2-i$, nu $-2+i$ și nici $-2-i$. Se
schimbă semnul doar la partea imaginară.

</div>
