export const scaleUp = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: { ease: "easeOut" },
};

export const slideY = (direction = "top") => ({
  initial: { y: direction === "bottom" ? 50 : -50 },
  animate: { y: 0 },
  transition: { ease: "easeOut", duration: 0.2 },
});

export const slideX = (direction = "left") => ({
  initial: { x: direction === "right" ? 50 : -50 },
  animate: { x: 0 },
  transition: { duration: 0.2, ease: "easeOut" },
});

export const click = {
  initial: { scale: 1 },
  animate: { scale: 0.95 },
  transition: { duration: 0.05 },
};
