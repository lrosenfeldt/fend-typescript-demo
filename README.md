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

TypeScript verbessert vor allem die Developer Experience👩‍💻

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

### Let's go!

1. Install TypeScript `yarn add --dev typescript`
2. Setup TypeScript config `yarn tsc --init`
3. Create [index.ts](./ts-intro/index.ts)

## Part II - React & TypeScript ❤️

1. Install TypeScript `yarn add --dev typescript`
2. Setup TypeScript config `yarn typescript --init`
3. Goto [index.ts](./ts-intro/index.ts)

## Ressourcen 📚

- [📘 🇬🇧 The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) -- Offizielles Tutorial von Microsoft
- [📹 🇬🇧 Fun with Conditional Types - Titian Cernicova-Dragomir](https://www.youtube.com/watch?v=27fL-rUXrJM) -- Tutorial zu **allen** fortgeschrittenen TypeScript-Themen (~3 h)
- [📹 🇩🇪 TypeScript lernen: Eine Einführung in 80 Minuten // deutsch](https://www.youtube.com/watch?v=_CaGUZNEobk) -- guter Einstieg auf deutsch

## Die Zukunft von TypeScript!

- [Deno](https://deno.land/) -- Node-Alternative mit Fokus auf Sicherheit, kann TypeScript nativ ausführen
- [A Proposal For Type Syntax in JavaScript](https://devblogs.microsoft.com/typescript/a-proposal-for-type-syntax-in-javascript/) -- Wird TypeScript ein fester Teil von JavaScript?
  - [A heroic new proposal for JavaScript // The Code Report](https://www.youtube.com/watch?v=O9F4K804XC8) -- Wem Videos lieber sind 😉
