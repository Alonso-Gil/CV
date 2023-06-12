// Common utility functions
export const splideConfig = (showSideMenu: boolean, direction?: boolean) => ({
  type: "loop",
  autoWidth: true,
  drag: "free",
  gap: "1rem",
  arrows: false,
  pagination: false,
  direction: direction ? "rtl" : "ltr",
  autoScroll: {
    pauseOnHover: false,
    pauseOnFocus: false,
    rewind: true,
    speed: 0.4,
  },
  breakpoints: showSideMenu
    ? {
        2000: { width: 920 },
        1410: { width: 820 },
        1310: { width: 720 },
        1210: { width: 620 },
        1110: { width: 520 },
        1010: { width: 420 },
        910: { width: 320 },
        810: { width: 240 },
      }
    : {
        2000: { width: 920 },
        1080: { width: 820 },
        980: { width: 720 },
        880: { width: 620 },
        780: { width: 520 },
        680: { width: 420 },
        580: { width: 320 },
        480: { width: 220 },
        380: { width: 200 },
      },
});
