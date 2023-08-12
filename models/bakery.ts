export type Bakery = {
  breads: Bread[];
  coordinates: string;
  favorite: boolean;
  id: number;
  name: string;
  photoUrls: string[];
};

export type BakeryDetail = {
  address: string;
  breads: Bread[];
  latitude: number;
  longitude: number;
  favorite: boolean;
  id: number;
  name: string;
  openingHours: OpeningHour[];
  photoUrls: string[];
};

export type OpeningHour = {
  close: string;
  open: string;
};

export type Bread = {
  available: boolean;
  availableHours: string[];
  id: number;
  photoUrl: string;
  name: string;
};
