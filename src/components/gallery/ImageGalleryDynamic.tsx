import dynamic from "next/dynamic";

export const ImageGalleryDynamic = dynamic(
  () => import("@/components/gallery/ImageGallery"),
  {
    ssr: false,
  }
);
