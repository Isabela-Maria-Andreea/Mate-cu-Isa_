import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* Capitolele din programa de bac M_mate-info, în ordinea în care apar
   pe subiecte. `capitol` din frontmatter trebuie să fie exact unul
   dintre șirurile de mai jos — altfel build-ul cade, cu numele
   fișierului în eroare. Asta ține etichetele curate: fără „Limite
   șiruri" alături de „Limite de șiruri". */
export const CAPITOLE = [
  // Subiectul I
  'Numere reale, puteri și logaritmi',
  'Progresii aritmetice și geometrice',
  'Funcții, ecuații și inecuații',
  'Combinatorică și binomul lui Newton',
  'Numere complexe',
  'Geometrie analitică în plan',
  'Trigonometrie',
  // Subiectul II
  'Matrice',
  'Determinanți',
  'Sisteme de ecuații liniare',
  'Legi de compoziție și grupuri',
  'Inele, corpuri și polinoame',
  // Subiectul III
  'Limite de șiruri',
  'Limite de funcții, continuitate și asimptote',
  'Derivate și monotonie',
  'Studiul funcției și reprezentarea grafică',
  'Primitive și integrala definită',
] as const;

const rezolvari = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/rezolvari' }),
  schema: z.object({
    titlu: z.string(),
    // Ce apare în <title> și în Google. Descriptiv, cu cuvintele căutate.
    titluSeo: z.string().optional(),
    descriere: z.string(),
    capitol: z.enum(CAPITOLE),
    sursa: z.string(),          // ex. "BAC 2026, sesiunea iunie, Subiectul II.1"
    // Id-ul variantei din src/variante.ts. Nesetat = problemă de tip,
    // scrisă de tine, care nu vine dintr-o variantă anume.
    varianta: z.string().optional(),
    subiect: z.enum(['I', 'II', 'III']),
    pozitie: z.number().int().min(1),
    // Doar la problemele cu a)/b)/c). Ordinea dă literele: a, b, c.
    // Titlurile sunt text simplu — apar în cuprinsul din capul paginii.
    subpuncte: z.array(z.string()).optional(),
    punctaj: z.number(),        // punctele din barem
    dificultate: z.number().min(1).max(5),
    data: z.coerce.date(),
    ciorna: z.boolean().default(false),
  }),
});

/* Enunțurile oficiale, transcrise exact. Un fișier per poziție.
   Stau separat de rezolvări ca să fie transcrise și verificate o
   singură dată pe variantă, nu o dată pe articol. */
const enunturi = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/enunturi' }),
  schema: z.object({
    varianta: z.string(),
    subiect: z.enum(['I', 'II', 'III']),
    pozitie: z.number().int().min(1),
    // Doar la problemele cu a)/b)/c). Ordinea dă literele: a, b, c.
    // Titlurile sunt text simplu — apar în cuprinsul din capul paginii.
    subpuncte: z.array(z.string()).optional(),
  }),
});

export const collections = { rezolvari, enunturi };

