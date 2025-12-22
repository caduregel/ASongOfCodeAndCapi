# A Song of Code and Capi

A Song of Code and Capi is een interface gebouwed boven op An API of Ice And Fire: een API die gegevens van personages, huizen, boeken uit de wereld van Game of Thrones: A Song of Ice and Fire. Het doel van dit project was om een zo simpel mogelijk UI te maken waarmee deze api te verkennen.

## Paginas

* (Landing Page/Houses Page)[https://a-song-of-code-and-capi.vercel.app/]
    * Pagina om door huizen heen te filteren, is ook gelijk de landing page van de site.

* (Characters page)[https://a-song-of-code-and-capi.vercel.app/characters]
    * Pagina om door personages heen te filteren.

## Leuke features

* Filters voor characters en Houses pagina
* Darkmode
* Skeleton Loaders

## Limitations

* Precies, hoofdletter gevoelige filters vanwege API limitaties

## Technische details

Het doel van dit project was om iets te maken dat:
* Compleet is
* Niet te veel tijd aan besteed hoeft te worden
* Nog leuk/interessant genoeg is voor toekomstig uitbreidings ideeën
Hiermee in gedachten zijn de volgende keuzes gemaakt:

### Technologie kezes

* (An Api of Ice and Fire)[https://www.anapioficeandfire.com/]
    * Na het exploren van veel mogelijk API's om een project omheen te bouwen, sprak deze mij het meeste aan omdat de Game of Thrones series, een van mijn favoriete series is.

* React binnen de vite framework
    * Hierbinnen heb ik de meeste ervaring in projecten maken, om zo makkelijk en snel mogelijk van start te gaan is dus van deze framework gebruk gemaakt

* ShadCN UI/TailwindCSS
    * Net als bij Vite framework, heb ik in eerdere projecten gebruik gemaakt van TailwindCSS en de ShadCN component library [(studyflows)\[https://studyflows.net/\]](https://studyflows.net/). Hierdoor kon ik gemakkelijk components van oude projecten over kopiëren (Zoals de navbar die genomen is van studyflows), en hoefd er niet veel nagedacht worden over styling

* Vitest component testing
    * Hier heb ik nog geen gebruik van gemaakt, hoewel ik wel eerder Unit testing, en E2E testing heb gedaan waar ik gebruik heb gemaakt van Jest, leek het mij leuk om met iets nieuws een beetje te experimenteren

### Project Structuur

* pages/ 
    * Bevat de routable pagina’s van de applicatie:

* components/
    * Alle herbruikbare components
* components/skeletonLayotus
    * Bevat skeleton loader components voor paginas
* components/ui
    * Directory waar UI components van ShadCN geinstalleerd wordne 

* interfaces/
    * Typescript interfaces
* lib/
    * Utility functions. Fetcher function voor SWR

## Installatie

1. Clone deze github Repo
2. Run `npm install` binnen deze project directory
3. Run `npm run dev` binnen deze project directory
4. Als het goed is kan je nu zien op welke port er een development server gestart is