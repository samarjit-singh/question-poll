declare module "canvas-confetti" {
  interface ConfettiOptions {
    angle?: number;
    spread?: number;
    startVelocity?: number;
    elementCount?: number;
    dragFriction?: number;
    duration?: number;
    stagger?: number;
    width?: string;
    height?: string;
    colors?: string[];
  }

  function confetti(options?: ConfettiOptions): void;

  export default confetti;
}
