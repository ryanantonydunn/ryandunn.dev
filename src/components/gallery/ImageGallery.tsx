"use client";

import { IconImage } from "../icons/Icons";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import React from "react";

interface ImageGalleryProps {
  images: string[];
  color: string;
}

export default function ImageGallery({ images, color }: ImageGalleryProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        <IconImage style={{ width: 24, height: 24 }} color={color} />
      </button>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((img) => ({ src: `/images/${img}` }))}
      />
    </>
  );
}
