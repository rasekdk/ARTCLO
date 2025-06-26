import type { FunctionalComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { COLORS } from '~/constants/Colors';
import MENU_ITEMS from '~/constants/MenuItems';

const MenuIsland: FunctionalComponent = () => {
  // 1) Arrancamos en SSR con cadena vacía (no hay window allí)
  const [pathname, setPathname] = useState<string>('');

  useEffect(() => {
    // 2) En cliente, fija la ruta actual inmediatamente
    setPathname(window.location.pathname);

    // 3) Cada vez que Astro haga SPA-navigate, lo actualizamos
    const onNavigate = () => {
      setPathname(window.location.pathname);
    };
    window.addEventListener('astro:navigate', onNavigate);

    // 4) Cleanup al desmontar
    return () => {
      window.removeEventListener('astro:navigate', onNavigate);
    };
  }, []); // ← solo en montaje

  return (
    <nav class="m-0 flex h-full w-full flex-col items-start justify-end overflow-hidden p-0">
      {MENU_ITEMS.map(({ url, id, label }) => {
        const isActive = pathname === url;
        return (
          <a
            key={id}
            href={url}
            className={`font-anton hover:text-theme-main m-0 p-0 leading-none uppercase transition-all duration-300 ease-in-out hover:text-[clamp(3rem,23cqw,6.5rem)] ${
              isActive
                ? 'text-theme-main text-[clamp(3rem,23cqw,6.5rem)]'
                : 'text-theme-white text-[clamp(2rem,22cqw,6rem)]'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            {label}
          </a>
        );
      })}
    </nav>
  );
};

export default MenuIsland;
