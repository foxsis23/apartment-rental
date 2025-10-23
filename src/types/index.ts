export interface Apartment {
  id: number;
  title: string;
  description: string;
  pricePerMonth: number; // грн/місяць
  totalPrice: number;
  address: string;
  district: string; // район
  roomsCount: number; // кількість кімнат
  floor: number;
  totalFloors: number;
  area: number; // площа (м²)
  furnished: boolean; // мебльована
  balcony: boolean;
  petsAllowed: boolean;
  availableFrom: string; // ISO-дата
  photos: string[]; // посилання на зображення
  createdAt: string;
  updatedAt: string;
}
