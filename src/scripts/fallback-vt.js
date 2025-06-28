export function initVTFallback() {
  if ("startViewTransition" in document) return;   // VT nativa => salimos

  document.addEventListener("click", (ev) => {
    const a = ev.target.closest("a[href^='/'"]:not([target])) ;
    if (!a || ev.metaKey || ev.ctrlKey) return;    // abrir nueva pestaña, etc.

    ev.preventDefault();                           // detenemos nav normal

    // añadimos clase que dispara el fade-out (CSS arriba)
    document.documentElement.classList.add("page-fade-out");

    // cuando termina la anim → navegamos
    setTimeout(() => (location.href = a.href), 300); // = CSS 0.3 s
  });
}