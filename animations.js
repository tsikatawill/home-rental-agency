export const scaleUp = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: { ease: [0.6, 0.05, 0.3, 0.99] },
};

export const slideY = (direction = "top") => ({
  initial: { y: direction === "bottom" ? 50 : -50 },
  animate: { y: 0 },
  transition: { ease: "[0.6, 0.05, 0.3, 0.99]", duration: 0.15 },
});
