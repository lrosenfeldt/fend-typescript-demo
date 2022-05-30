# Con Cubo is hiring!

Homepage: [con-cubo.com/ueber-uns#career](https://www.con-cubo.com/ueber-uns#career)

Fullstack Development (f/m/d) <br/>
Werkstudent Fullstack Dev. (f/m/d)

Mail: bewerbung@con-cubo.com <br/>
Phone: <a href="tel:+4943164999296">0431 - 64 99 92 96</a>

## Techstack

React / Next, TypeScript, Styled Components, React Query, Node, Mongo DB, Express, Docker, AWS, Github

# TypeScript Crashkurs

## Was ist TypeScript?

> [TypeScript](https://www.typescriptlang.org) is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript

TypeScript ist eine Programmiersprache, die JavaScript um ein statisches Typ-System erweitert. TypeScript-Code kann nicht vom Browser oder von Node ausgeführt werden, stattdessen wird der Code auf korrekte Verwendung der Typen überprüft und anschließend zu JavaScript kompiliert.

## Warum TypeScript?

TypeScript verbessert vor allem die Developer Experience 👩‍💻 und findet nebenbei Bugs🐛!

- 🔥 Autocompletion
- 🔍 findet Fehler, damit ihr es nicht tun müsst
- 📄 "dokumentiert" euren Code

## Part I - Einführung in TypeScript 🚀

### JavaScript ist nicht perfekt

```js
function sum(arr) {
  return arr.reduce((currentSum, num) => currentSum + num);
}

// was kommt hier wohl raus?
const sumResult = sum([3, 3, "3"]);
console.log(sumResult);

// finde den Fehler
// wir wollen: "HI MUM!"
const shoutHi = "Hi Mum!   ".trimsEnd().toLocalUppercase();
console.log(shoutHi);
```

Check out the [TypeScript Playground](https://www.typescriptlang.org/play)!

## Part II - React & TypeScript ❤️

### Migration zu TypeScript

Eigentlich alle modernen Bundler (parcel, webpack, vite, ...) können ein Projekt direkt mit TypeScript aufsetzen. Nachträglich ist etwas mehr arbeitet erforderlich.

Wie man ein React + Vite Projekt zu TypeScript migriert:

1. Installiere TypeScript als Dev-Dependency: `yarn add -D typescript`

2. Füge die nötigen Config-Files hinzu. Diese können aus .config kopiert werden. ⚠️ `tsconfig.json` und `tsconfig.node.json` müssen im Root Verzeichnis landen (wo auch euer `package.json` liegt). `vite-env.d.ts` muss in `src/` liegen.

```sh
cp .configs/tsconfig.json .configs/tsconfig.node.json .
cp .configs/vite-env.d.ts src/
```

3. React ist nicht in TypeScript geschrieben. Die Types kann man sich aber manuell vom [Definitely Typed](https://github.com/DefinitelyTyped/DefinitelyTyped/) holen. `yarn add -D @types/react`

4. **Optional**: Die Vite-Config kann auch als TypeScript-File angelegt werden. Dazu die Endung von `.js` zu `.ts` ändern. Dann werden allerdings die Types für node benötigt: `yarn add --dev @types/node`.

### Let's Go!

Damit VS Code etwas als TypeScript-Code erkennt, muss die Datei-Endung geändert werden:

`.js` -> `.ts`<br/>
`.jsx` -> `.tsx`

### GraphQL Codegen

In GraphQL sind bereits definiert, sodass die Types für TypeScript (und weitere Programmiersprachen mit statistischen Typen) automatisch erzeugt werden können. Der Standard dafür ist inzwischen [GraphQL Code Generator](https://www.graphql-code-generator.com/). Ein Tutorial für React, Apollo, Typescript findet ihr auch auf [der Webseite](https://www.graphql-code-generator.com/plugins/typescript-react-apollo).

1. GraphQL-Code-Generator installieren für TypeScript, React, Apollo:

```sh
yarn add -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo @graphql-codegen/introspection
```

2. GraphQL-Code-Generator initialisieren:

```sh
yarn graphql-codegen init
# interaktiv
# ? What type of application are you building? Application built with React
# ? Where is your schema?: https://api-eu-central-1.graphcms.com/v2/cl3d189141hkk01xpcesz7a2l/master # hier muss euer GraphQL-Endpunkt rein
# ? Pick plugins: # einfach ja, die Plugins haben wir vorher schon ausgewählt
# ? Where to write the output: src/generated/graphql.tsx
# ? Do you want to generate an introspection file? Yes
# ? How to name the config file? codegen.yml
# ? What script in package.json should run the codegen? codegen
```

3. Füge einen `graphql/` mit `.graphql`-Files mit euren Queries hinzu. Alle eure Queries landen dann in diesen Files. Codegen generiert alle Types und Hooks. Ihr müsst nur noch importieren und nichts doppelt pflegen.

4. **Optional**: Fügt die GraphQL-Extension `mquandalle.graph`zu VS Code für Syntax-Highlighting in `.graphql`-Files hinzu.

## Ressourcen 📚

- [📘 🇬🇧 The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) -- Offizielles Tutorial von Microsoft
- [📹 🇬🇧 Fun with Conditional Types - Titian Cernicova-Dragomir](https://www.youtube.com/watch?v=27fL-rUXrJM) -- Tutorial zu **allen** fortgeschrittenen TypeScript-Themen (~3 h)
- [📹 🇩🇪 TypeScript lernen: Eine Einführung in 80 Minuten // deutsch](https://www.youtube.com/watch?v=_CaGUZNEobk) -- guter Einstieg auf deutsch

## Die Zukunft von TypeScript!

- [Deno](https://deno.land/) -- Node-Alternative mit Fokus auf Sicherheit, kann TypeScript nativ ausführen
- [A Proposal For Type Syntax in JavaScript](https://devblogs.microsoft.com/typescript/a-proposal-for-type-syntax-in-javascript/) -- Wird TypeScript ein fester Teil von JavaScript?
  - [A heroic new proposal for JavaScript // The Code Report](https://www.youtube.com/watch?v=O9F4K804XC8) -- Wem Videos lieber sind 😉
