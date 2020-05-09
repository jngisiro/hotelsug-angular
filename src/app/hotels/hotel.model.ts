export class Hotel {
  constructor(
    public name: string,
    public summary: string,
    public location: string,
    public address: string,
    public rating: number,
    public price: number,
    public coverImage: string,
    public amenities: string[],
    public isAvailable: boolean,
    public distFromCity?: number,
    public distFromEntebbe?: number
  ) {}
}
