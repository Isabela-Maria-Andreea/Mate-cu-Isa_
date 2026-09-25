/* ---------------------------------------------------------------
   Variantele de bac, cu structura lor pe poziții.

   O rezolvare se leagă de o variantă prin `varianta` (id-ul de aici)
   plus `subiect` și `pozitie` din frontmatter. Punctajul unei poziții
   stă aici, o singură dată, nu în fiecare articol.

   Structura M_mate-info: Subiectul I are 6 itemi a 5 puncte,
   Subiectul II și Subiectul III au câte 2 itemi a 15 puncte.
   90 de puncte din lucrare + 10 puncte din oficiu.
   --------------------------------------------------------------- */

export type Subiect = 'I' | 'II' | 'III';

export type Pozitie = {
  subiect: Subiect;
  pozitie: number;
  punctaj: number;
  /** Ce se cere la poziția asta, pe scurt. Se completează pe măsură
      ce scrii rezolvările — gol până atunci. */
  tema?: string;
};

export type Varianta = {
  id: string;
  titlu: string;
  an: number;
  sesiune: string;
  data: string;
  structura: Pozitie[];
};

/** Structura standard a unei variante M_mate-info, fără teme.
    O folosești ca punct de plecare când adaugi o variantă nouă. */
function structuraStandard(): Pozitie[] {
  return [
    { subiect: 'I', pozitie: 1, punctaj: 5, tema: '' },
    { subiect: 'I', pozitie: 2, punctaj: 5, tema: '' },
    { subiect: 'I', pozitie: 3, punctaj: 5, tema: '' },
    { subiect: 'I', pozitie: 4, punctaj: 5, tema: '' },
    { subiect: 'I', pozitie: 5, punctaj: 5, tema: '' },
    { subiect: 'I', pozitie: 6, punctaj: 5, tema: '' },
    { subiect: 'II', pozitie: 1, punctaj: 15, tema: '' },
    { subiect: 'II', pozitie: 2, punctaj: 15, tema: '' },
    { subiect: 'III', pozitie: 1, punctaj: 15, tema: '' },
    { subiect: 'III', pozitie: 2, punctaj: 15, tema: '' },
  ];
}

export const VARIANTE: Varianta[] = [
  {
    id: 'bac-2024-ss-v9',
    titlu: 'BAC 2024, Sesiunea specială — Varianta 9',
    an: 2024,
    sesiune: 'Sesiunea specială',
    data: '2024-05-21',
    structura: [
      { subiect: 'I', pozitie: 1, punctaj: 5, tema: 'Progresie aritmetică — al treilea termen' },
      { subiect: 'I', pozitie: 2, punctaj: 5, tema: 'Funcție de gradul I — ecuație cu parametru' },
      { subiect: 'I', pozitie: 3, punctaj: 5, tema: 'Ecuație logaritmică cu lg' },
      { subiect: 'I', pozitie: 4, punctaj: 5, tema: 'Probabilitate — radical natural' },
      { subiect: 'I', pozitie: 5, punctaj: 5, tema: 'Geometrie analitică — drepte paralele' },
      { subiect: 'I', pozitie: 6, punctaj: 5, tema: 'Triunghi dreptunghic — cateta din tangentă' },
      { subiect: 'II', pozitie: 1, punctaj: 15, tema: 'Matrice cu parametru — ecuație matriceală și inversabilitate' },
      { subiect: 'II', pozitie: 2, punctaj: 15, tema: 'Lege de compoziție asociativă — element neutru și ecuație' },
      { subiect: 'III', pozitie: 1, punctaj: 15, tema: 'Funcție rațională — asimptotă oblică și două soluții' },
      { subiect: 'III', pozitie: 2, punctaj: 15, tema: 'Integrale cu logaritm și volumul unui corp de rotație' },
    ],
  },
  {
    id: 'bac-2024-sm-v1',
    titlu: 'BAC 2024, Simulare clasa a XII-a',
    an: 2024,
    sesiune: 'Simulare',
    data: '2024-03-01',
    structura: [
      { subiect: 'I', pozitie: 1, punctaj: 5, tema: 'Logaritmi zecimali — calcul cu lg' },
      { subiect: 'I', pozitie: 2, punctaj: 5, tema: 'Compunerea unei funcții de gradul II cu ea însăși' },
      { subiect: 'I', pozitie: 3, punctaj: 5, tema: 'Ecuație exponențială — aducere la baza 2' },
      { subiect: 'I', pozitie: 4, punctaj: 5, tema: 'Probabilitate — radical natural' },
      { subiect: 'I', pozitie: 5, punctaj: 5, tema: 'Vectori — coordonatele unui punct dintr-o sumă' },
      { subiect: 'I', pozitie: 6, punctaj: 5, tema: 'Trigonometrie — valoarea unei expresii în π/3' },
      { subiect: 'II', pozitie: 1, punctaj: 15, tema: 'Matrice cu parametru — determinant și ecuație cu matrice 2×3' },
      { subiect: 'II', pozitie: 2, punctaj: 15, tema: 'Lege de compoziție cu fracție — element neutru și soluții naturale' },
      { subiect: 'III', pozitie: 1, punctaj: 15, tema: 'Funcție cu radical — monotonie și soluție unică pentru m întreg' },
      { subiect: 'III', pozitie: 2, punctaj: 15, tema: 'Integrale cu exponențială și o dublă inegalitate cu Iₙ' },
    ],
  },
  {
    id: 'bac-2024-model',
    titlu: 'BAC 2024, Model',
    an: 2024,
    sesiune: 'Model',
    data: '2023-12-01',
    structura: [
      { subiect: 'I', pozitie: 1, punctaj: 5, tema: 'Numere complexe — calcul cu i' },
      { subiect: 'I', pozitie: 2, punctaj: 5, tema: 'Punct pe graficul unei funcții de gradul II cu parametru' },
      { subiect: 'I', pozitie: 3, punctaj: 5, tema: 'Ecuație logaritmică cu aceeași bază' },
      { subiect: 'I', pozitie: 4, punctaj: 5, tema: 'Combinatorică — numere cu cifre distincte și cifra zecilor pară' },
      { subiect: 'I', pozitie: 5, punctaj: 5, tema: 'Vectori — suma a doi vectori de poziție' },
      { subiect: 'I', pozitie: 6, punctaj: 5, tema: 'Triunghi ascuțitunghic — latura din înălțime și unghiul de 45°' },
      { subiect: 'II', pozitie: 1, punctaj: 15, tema: 'Matrice cu parametru — produs și ecuație matriceală' },
      { subiect: 'II', pozitie: 2, punctaj: 15, tema: 'Lege de compoziție cu parametru — element neutru și morfism' },
      { subiect: 'III', pozitie: 1, punctaj: 15, tema: 'Funcție cu exponențială — asimptotă oblică și bijectivitate' },
      { subiect: 'III', pozitie: 2, punctaj: 15, tema: 'Integrale cu fracție rațională și o relație între Iₙ și Iₙ₊₄' },
    ],
  },
  {
    id: 'bac-2025-s1-v1',
    titlu: 'BAC 2025, Sesiunea I — Varianta 1',
    an: 2025,
    sesiune: 'Sesiunea I',
    data: '2025-06-10',
    structura: [
      { subiect: 'I', pozitie: 1, punctaj: 5, tema: 'Numere complexe — calcul cu i' },
      { subiect: 'I', pozitie: 2, punctaj: 5, tema: 'Compunerea unei funcții de gradul I cu ea însăși' },
      { subiect: 'I', pozitie: 3, punctaj: 5, tema: 'Ecuație irațională' },
      { subiect: 'I', pozitie: 4, punctaj: 5, tema: 'Probabilitate — divizori ai lui 2⁶' },
      { subiect: 'I', pozitie: 5, punctaj: 5, tema: 'Geometrie analitică — segmente cu același mijloc' },
      { subiect: 'I', pozitie: 6, punctaj: 5, tema: 'Triunghi dreptunghic — ipotenuza din tangentă' },
      { subiect: 'II', pozitie: 1, punctaj: 15, tema: 'Matrice cu parametru — produs și ecuație matriceală' },
      { subiect: 'II', pozitie: 2, punctaj: 15, tema: 'Polinom de gradul III — împărțire și relațiile lui Viète' },
      { subiect: 'III', pozitie: 1, punctaj: 15, tema: 'Funcție cu logaritm — asimptotă oblică și bijectivitate' },
      { subiect: 'III', pozitie: 2, punctaj: 15, tema: 'Integrale cu fracții raționale și o arie cu exponențială' },
    ],
  },
  {
    id: 'bac-2025-ss-v3',
    titlu: 'BAC 2025, Sesiunea specială — Varianta 3',
    an: 2025,
    sesiune: 'Sesiunea specială',
    data: '2025-05-20',
    structura: [
      { subiect: 'I', pozitie: 1, punctaj: 5, tema: 'Progresie geometrică — primul termen din b₂ și b₃' },
      { subiect: 'I', pozitie: 2, punctaj: 5, tema: 'Două funcții de gradul I cu aceeași valoare' },
      { subiect: 'I', pozitie: 3, punctaj: 5, tema: 'Ecuație exponențială — aducere la baza 3' },
      { subiect: 'I', pozitie: 4, punctaj: 5, tema: 'Probabilitate — radical natural par' },
      { subiect: 'I', pozitie: 5, punctaj: 5, tema: 'Geometrie analitică — drepte paralele' },
      { subiect: 'I', pozitie: 6, punctaj: 5, tema: 'Triunghi dreptunghic isoscel — cateta din arie' },
      { subiect: 'II', pozitie: 1, punctaj: 15, tema: 'Matrice cu parametru — produs și ecuație matriceală' },
      { subiect: 'II', pozitie: 2, punctaj: 15, tema: 'Lege de compoziție — element neutru și simetric' },
      { subiect: 'III', pozitie: 1, punctaj: 15, tema: 'Funcție cu logaritm — limită și cea mai mare valoare întreagă' },
      { subiect: 'III', pozitie: 2, punctaj: 15, tema: 'Integrale cu exponențială și o inegalitate cu Iₙ' },
    ],
  },
  {
    id: 'bac-2025-sm-v1',
    titlu: 'BAC 2025, Simulare clasa a XII-a',
    an: 2025,
    sesiune: 'Simulare',
    data: '2025-03-01',
    structura: [
      { subiect: 'I', pozitie: 1, punctaj: 5, tema: 'Progresie geometrică — primul termen din b₃ și b₄' },
      { subiect: 'I', pozitie: 2, punctaj: 5, tema: 'Grafic care taie Ox în două puncte — discriminant pozitiv' },
      { subiect: 'I', pozitie: 3, punctaj: 5, tema: 'Ecuație exponențială cu factor comun' },
      { subiect: 'I', pozitie: 4, punctaj: 5, tema: 'Probabilitate — pătrate de trei cifre' },
      { subiect: 'I', pozitie: 5, punctaj: 5, tema: 'Vectori — mijlocul unui segment și un punct D' },
      { subiect: 'I', pozitie: 6, punctaj: 5, tema: 'Triunghi ascuțitunghic — aria din înălțime și o distanță' },
      { subiect: 'II', pozitie: 1, punctaj: 15, tema: 'Sistem cu parametru — soluție unică și sistem nedeterminat' },
      { subiect: 'II', pozitie: 2, punctaj: 15, tema: 'Lege de compoziție cu radical — parte stabilă' },
      { subiect: 'III', pozitie: 1, punctaj: 15, tema: 'Funcție cu logaritm — asimptotă și ecuație fără soluții' },
      { subiect: 'III', pozitie: 2, punctaj: 15, tema: 'Integrale cu radical și o relație de recurență' },
    ],
  },
  {
    id: 'bac-2025-model',
    titlu: 'BAC 2025, Model',
    an: 2025,
    sesiune: 'Model',
    data: '2024-12-01',
    structura: [
      { subiect: 'I', pozitie: 1, punctaj: 5, tema: 'Numere complexe — calcul cu i' },
      { subiect: 'I', pozitie: 2, punctaj: 5, tema: 'Punct pe graficul unei funcții de gradul II' },
      { subiect: 'I', pozitie: 3, punctaj: 5, tema: 'Ecuație logaritmică cu log în bază x' },
      { subiect: 'I', pozitie: 4, punctaj: 5, tema: 'Probabilitate — multipli impari ai lui 9' },
      { subiect: 'I', pozitie: 5, punctaj: 5, tema: 'Geometrie analitică — drepte paralele' },
      { subiect: 'I', pozitie: 6, punctaj: 5, tema: 'Trigonometrie — aria triunghiului cu sinus' },
      { subiect: 'II', pozitie: 1, punctaj: 15, tema: 'Matrice — determinant, inversă și ecuație matriceală' },
      { subiect: 'II', pozitie: 2, punctaj: 15, tema: 'Lege de compoziție — factorizare și soluții întregi' },
      { subiect: 'III', pozitie: 1, punctaj: 15, tema: 'Funcție cu logaritm — asimptotă și mulțimea valorilor' },
      { subiect: 'III', pozitie: 2, punctaj: 15, tema: 'Integrale cu exponențială și o inegalitate' },
    ],
  },
  {
    id: 'bac-2026-sm-v1',
    titlu: 'BAC 2026, Simulare clasa a XII-a',
    an: 2026,
    sesiune: 'Simulare',
    data: '2026-03-01',
    structura: [
      { subiect: 'I', pozitie: 1, punctaj: 5, tema: 'Numere complexe — sumă și produs cu conjugatul' },
      { subiect: 'I', pozitie: 2, punctaj: 5, tema: 'Grafice cu un singur punct comun — discriminant nul' },
      { subiect: 'I', pozitie: 3, punctaj: 5, tema: 'Ecuație logaritmică cu schimbare de bază' },
      { subiect: 'I', pozitie: 4, punctaj: 5, tema: 'Probabilitate — produsul cifrelor divizibil cu 5' },
      { subiect: 'I', pozitie: 5, punctaj: 5, tema: 'Geometrie analitică — dreaptă perpendiculară' },
      { subiect: 'I', pozitie: 6, punctaj: 5, tema: 'Triunghi dreptunghic — distanța de la un vârf la mediană' },
      { subiect: 'II', pozitie: 1, punctaj: 15, tema: 'Matrice cu parametru și sistem compatibil nedeterminat' },
      { subiect: 'II', pozitie: 2, punctaj: 15, tema: 'Lege de compoziție cu radical — asociativitate' },
      { subiect: 'III', pozitie: 1, punctaj: 15, tema: 'Funcție cu exponențială și radical — limită și număr de soluții' },
      { subiect: 'III', pozitie: 2, punctaj: 15, tema: 'Integrale cu logaritm și primitivă tangentă la Ox' },
    ],
  },
  {
    id: 'bac-2026-ss-v2',
    titlu: 'BAC 2026, Sesiunea specială — Varianta 2',
    an: 2026,
    sesiune: 'Sesiunea specială',
    data: '2026-05-19',
    structura: [
      { subiect: 'I', pozitie: 1, punctaj: 5, tema: 'Progresie aritmetică — termenul din mijloc' },
      { subiect: 'I', pozitie: 2, punctaj: 5, tema: 'Compunerea unei funcții de gradul II cu ea însăși' },
      { subiect: 'I', pozitie: 3, punctaj: 5, tema: 'Ecuație logaritmică' },
      { subiect: 'I', pozitie: 4, punctaj: 5, tema: 'Combinatorică — numere pare cu cifre distincte' },
      { subiect: 'I', pozitie: 5, punctaj: 5, tema: 'Vectori — coordonatele unui punct' },
      { subiect: 'I', pozitie: 6, punctaj: 5, tema: 'Trigonometrie — raza cercului circumscris' },
      { subiect: 'II', pozitie: 1, punctaj: 15, tema: 'Matrice cu parametru — parte stabilă' },
      { subiect: 'II', pozitie: 2, punctaj: 15, tema: 'Polinom cu parametru și relațiile lui Viète' },
      { subiect: 'III', pozitie: 1, punctaj: 15, tema: 'Funcție cu exponențială — tangentă și monotonie' },
      { subiect: 'III', pozitie: 2, punctaj: 15, tema: 'Integrale cu logaritm și calcul de arie' },
    ],
  },
  {
    id: 'bac-2026-s1-v3',
    titlu: 'BAC 2026, Sesiunea I — Varianta 3',
    an: 2026,
    sesiune: 'Sesiunea I',
    data: '2026-07-01',
    structura: [
      { subiect: 'I', pozitie: 1, punctaj: 5, tema: 'Numere complexe — produs cu conjugatul' },
      { subiect: 'I', pozitie: 2, punctaj: 5, tema: 'Funcție de gradul I — ecuație cu parametru' },
      { subiect: 'I', pozitie: 3, punctaj: 5, tema: 'Ecuație irațională' },
      { subiect: 'I', pozitie: 4, punctaj: 5, tema: 'Combinatorică — submulțimi cu element impus' },
      { subiect: 'I', pozitie: 5, punctaj: 5, tema: 'Geometrie analitică — drepte paralele' },
      { subiect: 'I', pozitie: 6, punctaj: 5, tema: 'Trigonometrie — valoarea unei expresii' },
      { subiect: 'II', pozitie: 1, punctaj: 15, tema: 'Matrice cu parametru și sistem liniar' },
      { subiect: 'II', pozitie: 2, punctaj: 15, tema: 'Lege de compoziție asociativă' },
      { subiect: 'III', pozitie: 1, punctaj: 15, tema: 'Studiul unei funcții raționale' },
      { subiect: 'III', pozitie: 2, punctaj: 15, tema: 'Integrale și o limită cu primitivă' },
    ],
  },
];

export const VARIANTE_DUPA_ID = new Map(VARIANTE.map((v) => [v.id, v]));
