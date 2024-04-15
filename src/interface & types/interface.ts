export interface FetchedProps {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number | string;
    rating: { rate: number; count: number };
    title: string;
  }