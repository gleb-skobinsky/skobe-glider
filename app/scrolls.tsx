export function animateScrollTo(id: string) {
  const about = document.getElementById(id);
  if (about != null) {
    about.scrollIntoView({
      behavior: "smooth",
    });
  }
}
