export interface ShoppingList {
  id: string;
  title: string;
  ownerId: string;
  sharedWith: string[];
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  updatedAt: {
    seconds: number;
    nanoseconds: number;
  };
  _shared?: boolean;
}
