import { createNoise2D, createNoise3D } from 'simplex-noise';

type Noise2D = ReturnType<typeof createNoise2D>;
type Noise3D = ReturnType<typeof createNoise3D>;

const mulberry32 = (seed: number): (() => number) => {
  let value = seed >>> 0;

  return () => {
    value += 0x6d2b79f5;
    let t = value;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

export class NoiseField {
  private readonly continental: Noise2D;
  private readonly erosionField: Noise2D;
  private readonly peaksField: Noise2D;
  private readonly hillsField: Noise2D;
  private readonly mountainRegionField: Noise2D;
  private readonly mountainRidgeField: Noise2D;
  private readonly plateauField: Noise2D;
  private readonly detailField: Noise2D;
  private readonly lakeField: Noise2D;
  private readonly pondField: Noise2D;
  private readonly riverField: Noise2D;
  private readonly temperatureField: Noise2D;
  private readonly moistureField: Noise2D;
  private readonly cavePrimaryField: Noise3D;
  private readonly caveSecondaryField: Noise3D;
  private readonly caveTunnelField: Noise3D;
  private readonly ore: Noise3D;

  public constructor(seed: number) {
    this.continental = createNoise2D(mulberry32(seed));
    this.erosionField = createNoise2D(mulberry32(seed + 1));
    this.peaksField = createNoise2D(mulberry32(seed + 2));
    this.hillsField = createNoise2D(mulberry32(seed + 3));
    this.mountainRegionField = createNoise2D(mulberry32(seed + 4));
    this.mountainRidgeField = createNoise2D(mulberry32(seed + 5));
    this.plateauField = createNoise2D(mulberry32(seed + 6));
    this.detailField = createNoise2D(mulberry32(seed + 7));
    this.temperatureField = createNoise2D(mulberry32(seed + 8));
    this.moistureField = createNoise2D(mulberry32(seed + 9));
    this.riverField = createNoise2D(mulberry32(seed + 10));
    this.lakeField = createNoise2D(mulberry32(seed + 11));
    this.pondField = createNoise2D(mulberry32(seed + 16));
    this.cavePrimaryField = createNoise3D(mulberry32(seed + 12));
    this.caveSecondaryField = createNoise3D(mulberry32(seed + 13));
    this.caveTunnelField = createNoise3D(mulberry32(seed + 14));
    this.ore = createNoise3D(mulberry32(seed + 15));
  }

  public continentalness(x: number, z: number): number {
    const broad = this.continental(x / 380, z / 380);
    const local = this.peaksField(x / 180, z / 180) * 0.2;
    return broad + local;
  }

  public erosion(x: number, z: number): number {
    return this.erosionField(x / 170, z / 170);
  }

  public peaks(x: number, z: number): number {
    return this.mountainRidge(x, z);
  }

  public hills(x: number, z: number): number {
    return this.hillsField(x / 120, z / 120);
  }

  public mountainRegion(x: number, z: number): number {
    const warpX = x + this.continental(x / 420, z / 420) * 52;
    const warpZ = z + this.erosionField(x / 420, z / 420) * 52;
    return (this.mountainRegionField(warpX / 520, warpZ / 520) + 1) * 0.5;
  }

  public mountainRidge(x: number, z: number): number {
    const warpX = x + this.hillsField(x / 180, z / 180) * 34;
    const warpZ = z + this.detailField(x / 180, z / 180) * 34;
    const ridge = 1 - Math.abs(this.mountainRidgeField(warpX / 210, warpZ / 210));
    return ridge * ridge * ridge;
  }

  public plateau(x: number, z: number): number {
    return this.plateauField(x / 260, z / 260);
  }

  public detail(x: number, z: number): number {
    return this.detailField(x / 58, z / 58);
  }

  public temperature(x: number, z: number): number {
    return this.temperatureField(x / 260, z / 260);
  }

  public moisture(x: number, z: number): number {
    return this.moistureField(x / 250, z / 250);
  }

  public river(x: number, z: number): number {
    const warpX = x + this.detailField(x / 140, z / 140) * 34;
    const warpZ = z + this.erosionField(x / 140, z / 140) * 34;
    return 1 - Math.abs(this.riverField(warpX / 210, warpZ / 210));
  }

  public lake(x: number, z: number): number {
    const warpX = x + this.temperatureField(x / 170, z / 170) * 20;
    const warpZ = z + this.moistureField(x / 170, z / 170) * 20;
    return (this.lakeField(warpX / 280, warpZ / 280) + 1) * 0.5;
  }

  public pond(x: number, z: number): number {
    const warpX =
      x +
      this.detailField(x / 90, z / 90) * 18 +
      this.moistureField(x / 150, z / 150) * 10;
    const warpZ =
      z +
      this.hillsField(x / 90, z / 90) * 18 +
      this.temperatureField(x / 150, z / 150) * 10;
    return (this.pondField(warpX / 120, warpZ / 120) + 1) * 0.5;
  }

  public cavePrimary(x: number, y: number, z: number): number {
    return this.cavePrimaryField(x / 34, y / 26, z / 34);
  }

  public caveSecondary(x: number, y: number, z: number): number {
    return this.caveSecondaryField(x / 18, y / 20, z / 18);
  }

  public caveTunnel(x: number, y: number, z: number): number {
    return Math.abs(this.caveTunnelField(x / 48, y / 22, z / 48));
  }

  public oreDensity(x: number, y: number, z: number): number {
    return this.ore(x / 12, y / 12, z / 12);
  }
}
