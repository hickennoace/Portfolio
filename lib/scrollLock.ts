import { getLenis } from "@/lib/smoothScroll";

/**
 * Ref-counted page scroll lock shared by every overlay (Preloader, CommandPalette,
 * ContactModal, Nav mobile menu). Each component calls lockScroll() on open and
 * unlockScroll() on close/cleanup. Scrolling (and Lenis) is only restored once the
 * LAST open overlay releases its lock — so closing one overlay can never unlock the
 * page behind another that is still open.
 */
let count = 0;

export function lockScroll() {
  count += 1;
  if (count === 1) {
    document.body.style.overflow = "hidden";
    getLenis()?.stop();
  }
}

export function unlockScroll() {
  count = Math.max(0, count - 1);
  if (count === 0) {
    document.body.style.overflow = "";
    getLenis()?.start();
  }
}
