export type UpdateBreadSoldoutRequest = {
  breads: {
    available: boolean;
    id: number;
  }[];
};

export type BakerySearchParams = {
  q?: string;
  sort: string;
  size?: string;
  offset?: string;
  filter?: string;
  loc?: string;
};
