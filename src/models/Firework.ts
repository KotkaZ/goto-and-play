import Particle from "./Particle";

export default class Firework {
  private x: number;
  private y: number;
  private isBlown: boolean;
  private color: string;
  private size: number;
  private MAX_PARTICLES: number;

  public constructor(x: number, height: number) {
    this.x = x;
    this.y = height;
    this.isBlown = false;
    this.color = this.randomColor();
    this.size = 3;
    this.MAX_PARTICLES = 75;
  }

  public update(particles: Array<Particle>): boolean {
    this.y -= 5;

    if (this.y < 350 - Math.sqrt(Math.random() * 500) * 40) {
      this.isBlown = true;
      for (let i = 0; i < this.MAX_PARTICLES; i++) {
        particles.push(new Particle(this.x, this.y, this.color));
      }
    }
    return this.isBlown;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.fillRect(~~this.x, ~~this.y, this.size, this.size);
  }

  private randomColor(): string {
    return `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
  }
}
