export interface Apartment {
  id: string;
  description: string;
  price: number;
  district: string;
  street: string;
  buildingNum: string;
  roomsCount: number;
  furnitureType: string;
  isPetFriendly: boolean;
  isChildFriendly: boolean;
  floor: number;
  buildingFloorCount: number;
  area: number;
  isActive: boolean;
  publishingDate: string;
  photosUrls: string[];

  phoneNumber: string;
  ownerName: string;
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
