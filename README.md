# Vite React Calculator

Jednostavna web aplikacija kalkulatora napravljena pomoću React, Vite i TypeScript.

## Live demo

https://vite-react-calculator-pi.vercel.app/

## Opis projekta

Aplikacija omogućava unos dva broja i izvršavanje osnovnih aritmetičkih operacija:

- sabiranje
- oduzimanje
- množenje
- deljenje

Kalkulator ima proveru unosa, poruku za grešku i zaštitu od deljenja nulom.

## Funkcionalnosti

- unos dva broja
- četiri dugmeta za operacije
- prikaz aktivne operacije
- prikaz rezultata
- validacija praznih i neispravnih unosa
- reset dugme
- responzivan dizajn za mobilne uređaje

## Tehnologije

- React
- Vite
- TypeScript
- CSS
- Vercel

## Pokretanje lokalno

### Preduslovi

Potrebno je instalirati Node.js i npm.

### Koraci

```bash
git clone https://github.com/YOUR_USERNAME/vite-react-calculator.git
cd vite-react-calculator
npm install
npm run dev
```

Aplikacija se pokreće na:

```txt
http://localhost:5173
```

## Build komanda

```bash
npm run build
```

## Struktura projekta

```txt
src/
├── components/
│   └── Calculator/
│       ├── Calculator.tsx
│       ├── Calculator.css
│       └── calculatorLogic.ts
├── types/
│   └── Calculator.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Deployment

Projekat je deploy-ovan na Vercel preko GitHub integracije. Svaki novi push na `main` branch može automatski ažurirati live verziju aplikacije.
