<template>
  <canvas ref="canvas"></canvas>
</template>

<script lang="ts">
import Firework from "@/models/Firework";
import Particle from "@/models/Particle";
import { Vue } from "vue-class-component";

export default class Fireworks extends Vue {
  private canvas!: HTMLCanvasElement;
  private width!: number;
  private height!: number;
  private ctx!: CanvasRenderingContext2D;
  private fireworks: Array<Firework> = [];
  private particles: Array<Particle> = [];

  private gameLoop(): void {
    this.ctx.globalAlpha = 0.1;
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.globalAlpha = 1;

    for (let i = 0; i < this.fireworks.length; i++) {
      const done = this.fireworks[i].update(this.particles);
      this.fireworks[i].draw(this.ctx);
      if (done) this.fireworks.splice(i, 1);
    }

    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
      this.particles[i].draw(this.ctx);
      if (this.particles[i].getLifetime > 80) this.particles.splice(i, 1);
    }

    // Probabilty for new firework on each turn.
    if (Math.random() < 1 / 20) {
      this.fireworks.push(
        new Firework(Math.random() * (this.width - 200) + 100, this.height)
      );
    }

    window.requestAnimationFrame(this.gameLoop);
  }

  private setCanvasSize(canvas: HTMLCanvasElement): void {
    canvas.style.width = innerWidth + "px";
    canvas.style.height = innerHeight + "px";
    this.width = innerWidth;
    this.height = innerHeight;

    canvas.width = innerWidth * window.devicePixelRatio;
    canvas.height = innerHeight * window.devicePixelRatio;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (ctx != null)
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  private onClick(e: MouseEvent): void {
    this.fireworks.push(new Firework(e.clientX, this.height));
  }

  private windowResized(): void {
    this.setCanvasSize(this.canvas);
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  mounted(): void {
    this.canvas = this.$refs.canvas as HTMLCanvasElement;
    this.setCanvasSize(this.canvas);
    const ctx = this.canvas.getContext("2d", { alpha: false });

    if (!ctx || !(ctx instanceof CanvasRenderingContext2D)) {
      throw new Error("Failed to get 2D context");
    }

    this.ctx = ctx;

    window.addEventListener("resize", this.windowResized);
    document.addEventListener("click", this.onClick);

    window.requestAnimationFrame(this.gameLoop);
  }
}
</script>

<style></style>
