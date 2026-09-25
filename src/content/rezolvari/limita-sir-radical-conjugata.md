---
titlu: "Limită de șir cu radical: metoda conjugatei"
titluSeo: "Limită de șir cu radical — metoda conjugatei, rezolvat pas cu pas (bac M_mate-info)"
descriere: "Cum recunoști nedeterminarea ∞−∞ la un șir cu radical, de ce se amplifică cu conjugata și unde se pierd puncte la barem. Rezolvare completă pentru bacalaureat, M_mate-info."
capitol: "Limite de șiruri"
sursa: "Tip de problemă — Subiectul III"
subiect: "III"
pozitie: 1
punctaj: 5
dificultate: 3
data: 2026-09-17
ciorna: false
---

<div class="enunt">

<p class="enunt-eticheta">Ce se cere</p>

Ți se dă un șir care e diferența dintre un radical și un termen liniar, și trebuie să-i calculezi limita la infinit.

$$
a_n = \sqrt{n^2 + 3n + 2} - n, \quad n \ge 1
$$

</div>

## Ce recunoști înainte să calculezi

Primul lucru pe care îl faci nu e să calculezi, ci să identifici **forma nedeterminată**.

Aici $\sqrt{n^2+3n+2} \to +\infty$ și $n \to +\infty$, deci ai $\infty - \infty$. Nu poți trece limita prin scădere.

Al doilea lucru: ce *fel* de $\infty - \infty$ e. Când diferența conține exact un radical, metoda standard e amplificarea cu conjugata. Motivul e mecanic: înmulțind $(A - B)$ cu $(A + B)$ obții $A^2 - B^2$, iar pătratul distruge radicalul. Nedeterminarea se mută într-o formă $\frac{\infty}{\infty}$, pe care știi s-o rezolvi.

Ăsta e raționamentul întreg. Restul e calcul.

<div class="aside">

**De ce nu altceva?** Ai putea încerca factor comun forțat sau dezvoltări asimptotice. Funcționează, dar sunt mai lungi și, la un examen cronometrat, mai riscante. Conjugata e reflexul corect aici.

</div>

## Rezolvarea, pas cu pas

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Amplifici cu conjugata** <span class="punct">2p</span>

$$
a_n = \left(\sqrt{n^2+3n+2} - n\right) \cdot \frac{\sqrt{n^2+3n+2} + n}{\sqrt{n^2+3n+2} + n} = \frac{3n+2}{\sqrt{n^2+3n+2} + n}
$$

Numitorul e nenul pentru orice $n \ge 1$, deci operația e legitimă. Radicalul a dispărut de la numărător și ai acum $\frac{\infty}{\infty}$.

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Dai factor comun $n$ sus și jos** <span class="punct">2p</span>

Atenție la numitor: scoți $n$ *de sub* radical. Cum $n > 0$, avem $\sqrt{n^2+3n+2} = n\sqrt{1 + \frac{3}{n} + \frac{2}{n^2}}$.

$$
a_n = \frac{n\left(3 + \frac{2}{n}\right)}{n\left(\sqrt{1 + \frac{3}{n} + \frac{2}{n^2}} + 1\right)} = \frac{3 + \frac{2}{n}}{\sqrt{1 + \frac{3}{n} + \frac{2}{n^2}} + 1}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">03</div>
<div class="pas-c">

**Treci la limită** <span class="punct">1p</span>

Toți termenii de forma $\frac{c}{n^k}$ tind la $0$:

$$
\lim_{n \to \infty} a_n = \frac{3 + 0}{\sqrt{1} + 1} = \frac{3}{2}
$$

<p class="rezultat">Limita este 3/2</p>

</div>
</div>

## Cum verifici în zece secunde

Pentru $\sqrt{n^2 + bn + c} - n$ limita este întotdeauna $\dfrac{b}{2}$. Aici $b = 3$, deci $\dfrac{3}{2}$. Termenul liber nu contează deloc.

Nu învăța formula în locul metodei. Dacă apare un coeficient în fața lui $n^2$ sau un radical de ordin 3, formula te lasă baltă și ai nevoie de raționament. Dar ca verificare rapidă, e utilă.

## Unde se pierd puncte

<div class="greseala">

**Se scoate $n$ din radical fără modul.** Corect e $\sqrt{n^2+3n+2} = |n|\sqrt{\dots}$. Aici $n \to +\infty$ deci $|n| = n$ și nu se vede problema — dar corectorul se uită după justificare, nu după rezultat. Scrie modulul, apoi justifică-l într-o propoziție.

</div>

<div class="greseala">

**Se trece limita prin scădere.** Egalitatea $\lim(A_n - B_n) = \lim A_n - \lim B_n$ e valabilă doar dacă ambele limite sunt finite. Aici nu sunt. Dacă scrii $\infty - \infty = 0$, pierzi tot subiectul, nu un punct.

</div>

<div class="greseala">

**Se aproximează prea devreme.** $\sqrt{n^2+3n+2} \approx n$ e adevărat, dar inutilizabil: diferența celor doi termeni e exact ce cauți. Nu poți arunca informație înainte să scapi de nedeterminare.

</div>

<div class="greseala">

**Se amplifică greșit.** Conjugata lui $A - B$ este $A + B$, nu $B - A$. Un semn greșit îți dă $-\frac{3}{2}$.

</div>

