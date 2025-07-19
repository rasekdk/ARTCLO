export const asideColors = {
  transparent: {
    backgroundClass: 'bg-transparent',
    color: 'white',
    scrollBackgroundClass: 'bg-transparent',
    scrollBg: 'bg-theme-main',
  },
  main: {
    backgroundClass: 'bg-theme-main',
    color: 'white',
    scrollBackgroundClass: 'bg-theme-main',
    scrollBg: 'bg-theme-main',
  },
  white: {
    backgroundClass: 'bg-theme-white',
    color: 'main',
    scrollBackgroundClass: 'bg-theme-white',
    scrollBg: 'bg-theme-white',
  },
  pattern: {
    backgroundClass: 'bg-theme-white bg-[url(/svg/topography.svg)]',
    color: 'main',
    scrollBackgroundClass: 'bg-transparent',
    scrollBg: 'bg-theme-white',
  },
} as const;
