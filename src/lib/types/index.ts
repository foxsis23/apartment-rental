export interface Apartment {
  id?: number;
  description: string;
  price: number;
  district: number;
  street: string;
  buildingNum: string;
  roomsCount: number;
  furnitureType: number;
  isPetFriendly: boolean;
  isChildFriendly: boolean;
  floor: number;
  buildingFloorCount: number;
  area: number;
  isActive?: boolean;
  publishingDate?: string;
  photosUrls: string[];
  photoUrl?: string;

  ownerNumber: string;
  phoneNumber: string;
  ownerName: string;

  suggestions?: Apartment[];
}

export interface Realtor {
  id: string;
  fullName: string;
  phoneNumber: string;
  description: string;
  rating: number;
  isVerified: boolean;
  feedbackCount: number;
}
