import scrollIntoViewIfNeeded from "scroll-into-view-if-needed";

export function animateScrollTo(id: string) {
  const el = document.getElementById(id);
  if (el != null) {
    scrollIntoViewIfNeeded(el, { duration: 1000 });
  }
}
