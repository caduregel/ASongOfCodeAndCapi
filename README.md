# A Song of Code and Capi

A Song of Code and Capi is een interface gebouwed boven op An API of Ice And Fire: een API die gegevens van personages, huizen, boeken uit de wereld van Game of Thrones: A Song of Ice and Fire. Het doel van dit project was om een zo simpel mogelijk UI te maken waarmee deze api te verkennen is.

Er is een live [vercel](https://a-song-of-code-and-capi.vercel.app/) demo beschikbaar

## Paginas

- [Landing Page/Houses Page](https://a-song-of-code-and-capi.vercel.app/)

  - Pagina om door huizen te filteren, is ook de landing page van de site.

- [Characters page](https://a-song-of-code-and-capi.vercel.app/characters)
  - Pagina om door personages te filteren.

## Leuke features

- Filters voor characters en Houses pagina
- Darkmode
- Skeleton Loaders

## Limitations

- Precies, hoofdletter gevoelige filters vanwege API limitaties
    - Mogelijk oplossing: meer paginas hun data cachen in de achtergrond, en deze gebruiken in een zelf gemaakte frontend fuzzy searcher

## Technische details

Het doel van dit project was om iets te maken dat:

- Compleet is
- Niet te veel tijd aan besteed hoeft te worden
- Nog leuk/interessant genoeg is voor toekomstig uitbreidings ideeën

Hiermee in gedachten zijn de volgende keuzes gemaakt:

### Technologie kezes

- [An Api of Ice and Fire](https://www.anapioficeandfire.com/)

  - Na het exploren van veel mogelijk API's om een project omheen te bouwen, sprak deze mij het meeste aan omdat de Game of Thrones series, een van mijn favoriete series is.

- React binnen de [vite](https://vite.dev/) framework

  - Hierbinnen heb ik de meeste ervaring in projecten maken, om zo makkelijk en snel mogelijk van start te gaan is dus deze framework gebruikt.

- [ShadCNUI](https://ui.shadcn.com/) / [TailwindCSS](https://tailwindcss.com/)

  - Net als bij Vite framework, heb ik in eerdere projecten (bv. [studyflows](https://studyflows.net/)) TailwindCSS en de ShadCN component library gebruikt. Hierdoor kon ik gemakkelijk components van oude projecten over kopiëren (Zoals de navbar die genomen is van studyflows), en hoeft er niet veel nagedacht worden over styling

- [Vitest](https://vitest.dev/guide/) component testing
  - Dit heb ik nog niet eerder gebruikt, hoewel ik wel eerder Unit testing, en E2E testing heb gedaan waar ik Jest heb gebruikt, leek het mij leuk om met iets nieuws een beetje te experimenteren

### Project Structuur

- `pages/`  
  Bevat de routable pagina’s van de applicatie:

  - `index.tsx` → Landing/Houses Page
  - `characters.tsx` → Characters Page

- `components/`  
  Alle herbruikbare componenten:

  - `HouseCard.tsx`, `CharacterCard.tsx`, `HousesFilterCard.tsx`, etc.

- `components/skeletonLayouts/`  
  Skeleton loader components voor een betere UX tijdens data fetches.

- `components/ui/`  
  UI componenten gebaseerd op ShadCN/TailwindCSS, herbruikbaar door de hele app.

- `interfaces/`  
  TypeScript interfaces voor huizen en personages.

- `lib/`  
  Utility functies zoals `swrFetcher` en `buildQueryString`.

## Installatie

1. Clone deze github Repo
2. Run `npm install` binnen deze project directory
3. Run `npm run dev` binnen deze project directory
4. De development server draait nu en is bereikbaar op de getoonde poort.
