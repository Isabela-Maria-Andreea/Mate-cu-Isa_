---
titlu: "Matrice cu parametru: o lege de compoziție ascunsă"
titluSeo: "A(a)·A(b) = A(a+b−3ab) — rezolvare cu barem, BAC 2026 M_mate-info, Subiectul II.1"
descriere: "De ce familia A(a) e o lege de compoziție deghizată, cum scrii A(a) = I + aN și de ce asta rezolvă singură subpunctul c). Subiectul II.1, BAC 2026, Sesiunea specială, Varianta 2."
capitol: "Matrice"
sursa: "BAC 2026, Sesiunea specială, Varianta 2 — Subiectul II.1"
varianta: "bac-2026-ss-v2"
subiect: "II"
pozitie: 1
subpuncte:
  - "Determinantul pentru a = 1"
  - "Produsul A(a)·A(b)"
  - "Ecuația cu A(1), A(4) și A(5)"
punctaj: 15
dificultate: 4
data: 2026-09-17
ciorna: false
---

## Ce recunoști înainte să calculezi

Subpunctul b) îți spune, de fapt, ce este familia $A\left(a\right)$: o **lege de
compoziție deghizată**. Produsul a două matrice din familie dă tot o matrice din
familie, iar parametrul nou se obține din vechii doi prin $a+b-3ab$.

Cu alte cuvinte, mulțimea acestor matrice e închisă la înmulțire — e o *parte stabilă*
— iar operația indusă pe parametri e exact legea $a*b=a+b-3ab$, de tipul pe care îl
întâlnești la Subiectul II în alte variante.

**A doua observație, cea care rezolvă c):** fiecare matrice din familie se scrie ca
identitatea plus parametrul înmulțit cu o matrice fixă.

$$
A\left(a\right)=I_{3}+a\cdot N, \qquad
N=\begin{pmatrix}-2 & 1 & 0\\ 2 & -1 & 0\\ 0 & 0 & -3\end{pmatrix}
$$

Verifici imediat: pe fiecare poziție, coeficientul lui $a$ e chiar elementul
corespunzător din $N$, iar partea fără $a$ e identitatea.

Consecința e că $A$ e **afină în parametru**, deci combinațiile liniare se comportă
previzibil. De exemplu $2A\left(4\right)-A\left(5\right)=2I+8N-I-5N=I+3N=A\left(3\right)$.
Subpunctul c) se reduce la o ecuație de gradul I, fără să înmulțești nicio matrice.

<div class="aside">

**Cum îți dai seama singură.** Când toate elementele unei matrice cu parametru sunt de
forma „constantă plus ceva·$a$", matricea e afină în $a$. E o verificare de zece
secunde care schimbă complet felul în care ataci subpunctele următoare.

</div>

<div class="subpunct" id="a"><span class="subpunct-l">a)</span><span class="subpunct-p">5 puncte</span></div>

## Determinantul pentru $a=1$

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Scrii matricea și determinantul** <span class="punct">2p</span>

$$
A\left(1\right)=\begin{pmatrix}-1 & 1 & 0\\ 2 & 0 & 0\\ 0 & 0 & -2\end{pmatrix}
\;\Longrightarrow\;
\det\left(A\left(1\right)\right)=\begin{vmatrix}-1 & 1 & 0\\ 2 & 0 & 0\\ 0 & 0 & -2\end{vmatrix}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Calculezi** <span class="punct">3p</span>

$$
\det\left(A\left(1\right)\right)=0+0+0-0-0-\left(-4\right)=4
$$

<p class="rezultat">det(A(1)) = 4</p>

Ultima linie și ultima coloană au doar un element nenul, deci dezvoltarea după ele e
și mai scurtă: $\left(-2\right)\cdot\begin{vmatrix}-1 & 1\\ 2 & 0\end{vmatrix}=\left(-2\right)\left(-2\right)=4$.

</div>
</div>

<div class="subpunct" id="b"><span class="subpunct-l">b)</span><span class="subpunct-p">5 puncte</span></div>

## Produsul $A\left(a\right)\cdot A\left(b\right)$

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Înmulțești matricele** <span class="punct">3p</span>

Matricele sunt bloc-diagonale: colțul din dreapta-jos nu interacționează cu blocul
$2\times 2$ din stânga-sus, deci se înmulțesc separat.

$$
A\left(a\right)\cdot A\left(b\right)=
\begin{pmatrix}
1-2a-2b+6ab & a+b-3ab & 0\\
2a+2b-6ab & 1-a-b+3ab & 0\\
0 & 0 & 1-3a-3b+9ab
\end{pmatrix}
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Recunoști forma** <span class="punct">2p</span>

Notând $t=a+b-3ab$, fiecare element devine:

$$
\begin{pmatrix}
1-2t & t & 0\\
2t & 1-t & 0\\
0 & 0 & 1-3t
\end{pmatrix}=A\left(t\right)
$$

<p class="rezultat">A(a)·A(b) = A(a + b − 3ab)</p>

pentru orice numere reale $a$ și $b$.

</div>
</div>

<div class="subpunct" id="c"><span class="subpunct-l">c)</span><span class="subpunct-p">5 puncte</span></div>

## Ecuația cu $A\left(1\right)$, $A\left(4\right)$ și $A\left(5\right)$

<div class="pas">
<div class="pas-n">01</div>
<div class="pas-c">

**Reduci ambii membri la câte o singură matrice din familie** <span class="punct">2p</span>

Din b), cu $a=1$:

$$
A\left(1\right)\cdot A\left(a\right)=A\left(1+a-3a\right)=A\left(1-2a\right)
$$

Iar din liniaritatea în parametru:

$$
2A\left(4\right)-A\left(5\right)=A\left(3\right)
$$

</div>
</div>

<div class="pas">
<div class="pas-n">02</div>
<div class="pas-c">

**Egalezi parametrii** <span class="punct">3p</span>

Ecuația devine $A\left(1-2a\right)=A\left(3\right)$. Cum două matrice din familie sunt
egale doar când au același parametru (se vede pe poziția $\left(1,2\right)$, unde stă
chiar $a$):

$$
1-2a=3 \iff a=-1
$$

<p class="rezultat">a = −1</p>

</div>
</div>

## Ce îți spune baremul

La **a)**, două puncte se dau doar pentru scrierea matricei particularizate și a
determinantului, înainte de orice calcul. E cel mai ieftin punctaj din tot subiectul.

La **b)**, trei puncte merg pe înmulțirea propriu-zisă și doar două pe rescrierea
rezultatului ca $A\left(a+b-3ab\right)$. Calculul e partea grea; recunoașterea formei
e scurtă, dar fără ea nu ai demonstrat nimic.

La **c)**, două puncte se acordă pentru cele două reduceri —
$A\left(1\right)A\left(a\right)=A\left(1-2a\right)$ și $2A\left(4\right)-A\left(5\right)=A\left(3\right)$
— și trei pentru finalizare. Observația importantă: dacă scrii aceste două egalități
și te oprești, ai deja aproape jumătate din subpunct.

<div class="pe-foaie">

<p class="pe-foaie-eticheta">Ce scrii efectiv pe foaie</p>

**a)** $A\left(1\right)=\begin{pmatrix}-1 & 1 & 0\\ 2 & 0 & 0\\ 0 & 0 & -2\end{pmatrix}$,
$\det\left(A\left(1\right)\right)=0+0+0-0-0-\left(-4\right)=4$

**b)** $A\left(a\right)\cdot A\left(b\right)=\begin{pmatrix}1-2t & t & 0\\ 2t & 1-t & 0\\ 0 & 0 & 1-3t\end{pmatrix}=A\left(t\right)$,
unde $t=a+b-3ab$, pentru orice numere reale $a$ și $b$.

**c)** $A\left(1\right)\cdot A\left(a\right)=A\left(1-2a\right)$ și
$2A\left(4\right)-A\left(5\right)=A\left(3\right)$, deci $A\left(1-2a\right)=A\left(3\right)$,
de unde $1-2a=3$, adică $a=-1$.

</div>

## Unde se pierd puncte

<div class="greseala">

**Se înmulțesc matricele la c).** Subpunctul c) nu cere niciun produs efectiv: b) ți-a
dat deja regula. Cine reia înmulțirea pe componente pierde cinci minute și riscă erori
de semn.

</div>

<div class="greseala">

**Se mută $A\left(5\right)$ greșit.** Din $A\left(1\right)A\left(a\right)+A\left(5\right)=2A\left(4\right)$
rezultă $A\left(1\right)A\left(a\right)=2A\left(4\right)-A\left(5\right)$. Semnul minus
se aplică întregii matrice, deci parametrul devine $8-5=3$, nu $8+5$.

</div>

<div class="greseala">

**Se presupune că $A\left(s\right)+A\left(t\right)=A\left(s+t\right)$.** Nu e adevărat:
suma a două matrice din familie are $2$ pe diagonală acolo unde ar trebui $1$. Doar
combinația $2A\left(4\right)-A\left(5\right)$ funcționează, pentru că sumele
coeficienților identității se anulează corect: $2-1=1$.

</div>

<div class="greseala">

**Nu se justifică egalitatea parametrilor.** Din $A\left(1-2a\right)=A\left(3\right)$
trebuie spus de ce rezultă $1-2a=3$ — de exemplu comparând elementul de pe poziția
$\left(1,2\right)$, care e chiar parametrul.

</div>

