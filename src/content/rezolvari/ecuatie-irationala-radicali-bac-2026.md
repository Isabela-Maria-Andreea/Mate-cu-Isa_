---
titlu: "Ecuație irațională cu radical de fiecare parte"
titluSeo: "√(x²+7) = 2√(x+1) — rezolvare cu barem, BAC 2026 M_mate-info, Subiectul I.3"
descriere: "Când poți ridica la pătrat fără să pierzi echivalența și de ce aici nu apar soluții false. Ecuație irațională, Subiectul I.3, BAC 2026, Sesiunea I, Varianta 3."
capitol: "Funcții, ecuații și inecuații"
sursa: "BAC 2026, Sesiunea I, Varianta 3 — Subiectul I.3"
varianta: "bac-2026-s1-v3"
subiect: "I"
pozitie: 3
punctaj: 5
dificultate: 3
data: 2026-09-17
ciorna: false
---

## Ce recunoști înainte să calculezi

Ai radical de ambele părți, deci reflexul e corect: ridici la pătrat. Dar
întrebarea care decide dacă iei toate punctele e alta — **ai voie?**

Ridicarea la pătrat nu e o operație echivalentă în general. Din $A = B$ rezultă
$A^2 = B^2$, dar invers nu: $A^2 = B^2$ înseamnă $A = B$ **sau** $A = -B$. De
aici apar soluțiile false, care verifică ecuația pătrată dar nu pe cea inițială.

Excepția e când **ambii membri au același semn**, și exact asta ai aici. Un
radical de ordin par e prin definiție nenegativ, deci $\sqrt{x^2+7} \ge 0$ și
$2\sqrt{x+1} \ge 0$. Cu ambele părți nenegative, ridicarea la pătrat devine
echivalență, și nu se pot strecura soluții false.

Rămâne un singur lucru de verificat: **domeniul**. Radicalii trebuie să existe.

$$
x^2 + 7 > 0 \text{ pentru orice } x, \qquad x + 1 \ge 0 \iff x \ge -1
$$

Deci condiția de existență e $x \ge -1$, și doar ea.

<div class="aside">

**Când chiar apar soluții false.** Dacă ecuația ar fi fost $\sqrt{2x+3} = x$,
membrul drept ar putea fi negativ, iar ridicarea la pătrat nu mai e echivalentă.
Acolo verificarea nu e formalitate — chiar elimină rădăcini. Regula scurtă:
radical = radical e sigur, radical = expresie cu $x$ cere grijă.

</div>

## Rezolvarea

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Ridici la pătrat și aduci la formă canonică** <span class="punct">2p</span>

$$
x^{2}+7 = 4\left(x+1\right) \iff x^{2}-4x+3 = 0
$$

Atenție la dreapta: se ridică la pătrat **tot** $2\sqrt{x+1}$, deci și
coeficientul $2$. Rezultă $4\left(x+1\right)$, nu $2\left(x+1\right)$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Rezolvi și verifici condiția** <span class="punct">3p</span>

$$
x^{2}-4x+3 = 0 \iff x = 1 \ \text{ sau } \ x = 3
$$

Ambele satisfac $x \ge -1$, deci ambele convin.

<p class="rezultat">x = 1 și x = 3</p>

</div>
</div>

## Ce îți spune baremul

Punctajul e 2 pentru ridicarea la pătrat și 3 pentru rădăcini **împreună cu
mențiunea că ele convin**. Baremul scrie explicit „care convin".

Adică nu e suficient să găsești $1$ și $3$. Trebuie să se vadă pe foaie că le-ai
confruntat cu condiția de existență. O propoziție — „ambele verifică $x \ge -1$"
— ia punctele pe care le pierde cineva care se oprește la rădăcinile ecuației de
gradul al doilea.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

Condiție de existență: $x+1\ge 0$, deci $x\ge -1$.

$$
x^{2}+7=4\left(x+1\right) \Rightarrow x^{2}-4x+3=0 \Rightarrow x=1 \text{ sau } x=3
$$

Ambele verifică $x\ge -1$, deci ambele convin.

</div>

## Unde se pierd puncte

<div class="greseala">

**Nu se ridică la pătrat coeficientul.** $\left(2\sqrt{x+1}\right)^2 = 4(x+1)$.
Dacă scrii $2(x+1)$, obții $x^2-2x+5=0$, care nu are soluții reale — și pierzi
tot exercițiul.

</div>

<div class="greseala">

**Nu se scriu condițiile de existență.** Chiar dacă aici nu elimină nicio
soluție, baremul cere să se vadă verificarea. E un punct luat aproape gratis.

</div>

<div class="greseala">

**Se verifică prin înlocuire în loc de condiție.** Nu e greșit, dar e lent:
înlocuirea lui $x=1$ și $x=3$ în radicali te costă un minut în plus. Compararea
cu $x \ge -1$ durează cinci secunde.

</div>

