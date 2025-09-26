# ARTCLO

This repository hosts a small website built with **Astro** and TailwindCSS.

The aim is to provide a base for experimenting with a fictitious store called
**ARTCLO**, Art & Clothing.

It includes several sections (Collection, Clothing, Footwear, Culture) and
reusable components written in Astro.

Feel free to use it as inspiration.

## Project structure

```text
/
├── public/             # Static assets (fonts, images, svg)
├── src/
│   ├── assets/         # Images, icons, etc.
│   ├── atoms/          # Small reusable UI pieces
│   ├── components/     # Larger components
│   ├── constants/      # Static values
│   ├── content/        # Markdown/MDX content
│   ├── layouts/        # Layout wrappers
│   ├── pages/          # Astro/MD pages → routes
│   ├── sections/       # Page-specific sections
│   ├── services/       # API / utils
│   ├── styles/         # Global CSS & Tailwind config
│   └── types/          # TypeScript types
├── configuration files
├── README.md
├── images-credits.md
└── package.json

```

## Usage

All commands are run from the project root:

| Command           | Action                                            |
| ----------------- | ------------------------------------------------- |
| `npm install`     | Install dependencies                              |
| `npm run dev`     | Start local dev server at `http://localhost:4321` |
| `npm run build`   | Build the production site into `./dist/`          |
| `npm run preview` | Preview the build locally before deploying        |

## Deployment

After running `npm run build`, the `dist/` folder will contain the final files.

You can deploy them to any static hosting provider.

Check the [official Astro documentation](https://docs.astro.build) for more
details.

## Credits

All images are from [Unsplash](https://unsplash.com) Full credits are listed in
`images-credits.md`
