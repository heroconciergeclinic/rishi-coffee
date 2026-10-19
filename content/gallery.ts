/**
 * Community photo grid.
 *
 * Swap a photo: replace the file in public/images, or change `src`.
 * Add a photo: put the file in public/images and add a block to this list.
 * Set wide: true for a landscape photo that should span two columns.
 */

export type GalleryPhoto = {
  src: string;
  alt: string;
  wide?: boolean;
};

export const gallery: GalleryPhoto[] = [
  {
    src: "/images/pour-milk.jpg",
    alt: "Milk poured from a glass bottle into a Rishi Coffee bottle of espresso.",
  },
  {
    src: "/images/fridge-shelf.jpg",
    alt: "A refrigerator shelf filled with Rishi Coffee bottles.",
  },
  {
    src: "/images/boxes-packed.jpg",
    alt: "Open boxes on a wooden floor, packed with Rishi Coffee bottles.",
    wide: true,
  },
  {
    src: "/images/bottle-lake-counter.jpg",
    alt: "A Rishi Coffee bottle on a kitchen counter, with lake-view windows behind it.",
  },
  {
    src: "/images/bottle-by-window.jpg",
    alt: "A Rishi Coffee bottle with the vanilla latte label, set by a bright window.",
  },
  {
    src: "/images/chicago-cooler.jpg",
    alt: "Rishi Coffee bottles in a cooler by the Chicago river, next to a branded cup.",
  },
  {
    src: "/images/poster-real-ingredients.jpg",
    alt: "A sunlit Rishi Coffee still life with the line real ingredients, real good coffee.",
  },
  {
    src: "/images/boxes-in-hand.jpg",
    alt: "Hands holding an open box of Rishi Coffee bottles.",
  },
];
