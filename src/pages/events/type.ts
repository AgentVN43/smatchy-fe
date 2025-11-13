export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  type: string;
  level: number | string;
  price: number | null;
  image: string;
  iconType: string;
  iconLevel: string;
}
