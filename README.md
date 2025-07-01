# ARTCLO

This repository hosts a small website built with **Astro**, Preact and TailwindCSS. The aim is to provide a base for experimenting with a fictitious store called **Art & Clothing**.

It includes several sections (Collection, Clothing, Footwear, Culture) and reusable components written in Astro and Preact. Feel free to use it as inspiration or as the starting point for your own catalogue.

## Project structure

```text
/
├── public/
├── src/
│   ├── pages/
│   ├── layouts/
│   ├── components/
│   └── ...
└── package.json
```

## Usage

1. Install the dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   The project will be available at `http://localhost:4321`.
3. Generate the production build:
   ```bash
   npm run build
   ```
4. Preview the generated site before deploying:
   ```bash
   npm run preview
   ```

## Deployment

After running `npm run build`, the `dist/` folder will contain the final files. You can upload them to any static hosting service (Netlify, Vercel, GitHub Pages, etc.). If you need a specific adapter you can add it with:

```bash
npm run astro add <adapter>
```

Check the [official Astro documentation](https://docs.astro.build) for more details.
