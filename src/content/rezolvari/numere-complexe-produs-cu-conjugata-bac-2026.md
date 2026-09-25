---
titlu: "Produsul unui număr complex cu conjugatul lui"
titluSeo: "z(z+2i) = 10 pentru z = 3−i — rezolvare cu barem, BAC 2026 M_mate-info, Subiectul I.1"
descriere: "Cum recunoști conjugatul ascuns într-un enunț cu numere complexe și rezolvi din prima linie, în loc să desfaci pătratul. Subiectul I.1, BAC 2026 M_mate-info."
capitol: "Numere complexe"
sursa: "BAC 2026, Sesiunea I, Varianta 3 — Subiectul I.1"
varianta: "bac-2026-s1-v3"
subiect: "I"
pozitie: 1
punctaj: 5
dificultate: 2
data: 2026-09-17
ciorna: false
---

## Ce recunoști înainte să calculezi

Reflexul e să desfaci: $z(z+2i) = z^2 + 2zi$, apoi ridici la pătrat, apoi înmulțești. Funcționează și ia punctajul complet. Dar mai întâi uită-te la ce e în paranteză.

$$
z + 2i = (3 - i) + 2i = 3 + i
$$

Adică **exact conjugatul lui $z$**. Enunțul nu ți-a dat o paranteză oarecare — ți-a dat $\bar{z}$, deghizat într-o adunare.

Odată ce vezi asta, nu mai ai nimic de calculat, pentru că știi formula:

$$
z \cdot \bar{z} = |z|^2 = a^2 + b^2
$$

Pentru $z = a + bi$, produsul cu conjugatul e întotdeauna un **număr real**, egal cu suma pătratelor părții reale și părții imaginare. Nu apare niciun $i$ nicăieri.

<div class="aside">

**Cum îți dai seama în general?** Când într-un enunț cu numere complexe apare o adunare sau o scădere care schimbă semnul părții imaginare, verifică dacă rezultatul e conjugatul. Dacă produsul cerut iese real, aproape sigur asta se testa.

</div>

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Observi că paranteza e conjugatul** <span class="punct">2p</span>

$$
z + 2i = 3 - i + 2i = 3 + i = \bar{z}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Aplici formula produsului cu conjugatul** <span class="punct">3p</span>

$$
z(z + 2i) = z \cdot \bar{z} = 3^2 + (-1)^2 = 9 + 1 = 10
$$

<p class="rezultat">z(z + 2i) = 10</p>

</div>
</div>

## Dacă nu vezi conjugatul

Ruta directă e la fel de corectă și ia același punctaj. O scrii așa:

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Desfaci produsul**

$$
z(z + 2i) = z^2 + 2zi = (3-i)^2 + 2(3-i) \cdot i
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Calculezi fiecare termen**

$$
(3-i)^2 = 9 - 6i + i^2, \qquad 2(3-i)i = 6i - 2i^2
$$

</div>
</div>

<div class="pas">
<div class="pas-n">03</div>
<div class="pas-c">

**Înlocuiești $i^2 = -1$ și aduni**

$$
9 - 6i - 1 + 6i + 2 = 10
$$

Termenii cu $i$ se anulează între ei — $-6i + 6i = 0$ — ceea ce e semnalul că rezultatul trebuia să fie real de la bun început.

</div>
</div>

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

$$
z\left(z+2i\right)=\left(3-i\right)\left(3+i\right)=9-i^{2}=9-\left(-1\right)=10
$$

</div>

## Unde se pierd puncte

<div class="greseala">

**Semnul lui $-2i^2$.** Din $2(3-i)i$ iese $6i - 2i^2$, iar $-2i^2 = -2 \cdot (-1) = +2$. Două semne minus care se anulează, sub presiune de timp. E cea mai frecventă greșeală pe ruta lungă și singurul motiv serios să preferi conjugatul.

</div>

<div class="greseala">

**Se scrie $i^2 = -1$ fără să se folosească.** Se întâmplă să apară rândul „știm că $i^2 = -1$" și apoi calculul să continue cu $i^2$ nesubstituit. Substituie imediat ce ai scris-o.

</div>

<div class="greseala">

**Nu se încheie.** Cerința e „arată că", deci ultimul rând trebuie să fie egalitatea cerută, nu doar numărul 10 apărut pe o linie. Scrie explicit $z(z+2i) = 10$ la final.

</div>

