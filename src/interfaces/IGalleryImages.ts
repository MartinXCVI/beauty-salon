export interface IGalleryImages {
  data: {
    src: string;
    title: string;
    description: string;
  }[];
  onClick: (index: number) => void
}