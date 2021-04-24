import Vector from "./Vector";

export default class Particle {
  private x: number;
  private y: number;
  private color: string;
  private velocity: Vector;
  private lifetime: number;
  private size: number;

  public constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.velocity = this.randomVector(5);
    this.lifetime = 0;
    this.size = 3;
  }

  public update(): void {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.velocity.y += 0.03; // Gravity factor
    this.velocity.x *= 0.99;
    this.velocity.y *= 0.99;
    this.lifetime++;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.fillRect(~~this.x, ~~this.y, this.size, this.size);
  }

  public get getLifetime(): number {
    return this.lifetime;
  }

  private randomVector(max: number): Vector {
    const direction = Math.random() * Math.PI * 2;
    const speed = Math.random() * max;
    return new Vector(Math.cos(direction) * speed, Math.sin(direction) * speed);
  }
}
