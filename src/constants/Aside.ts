export const asideColors = {
  transparent: {
    backgroundClass: 'bg-transparent',
    color: 'white',
    scrollBg: 'main',
  },
  main: {
    backgroundClass: 'bg-theme-main',
    color: 'white',
    scrollBg: 'main',
  },
  white: {
    backgroundClass: 'bg-theme-white',
    color: 'main',
    scrollBg: 'white',
  },
  pattern: {
    backgroundClass: 'bg-[url(/svg/topography.svg)]',
    color: 'main',
    scrollBg: 'white',
  },
} as const;
