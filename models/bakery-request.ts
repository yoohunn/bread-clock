export type UpdateBreadSoldoutRequest = {
  breads: AvailableBread[];
};

export type AvailableBread = {
  available: boolean;
  id: number;
};

export type SearchBakeryParams = BakeryParams & {
  q?: string;
};

export type BakeryParams = {
  sort?: string;
  size?: string;
  offset?: string;
  filter?: string;
  loc?: string;
};
