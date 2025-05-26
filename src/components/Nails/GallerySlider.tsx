import type { JSX } from "react";
import { useState, memo } from "react"
import Lightbox from "yet-another-react-lightbox"
import { nailsGallery } from "@data/nailsGallery";
import "yet-another-react-lightbox/styles.css";
import { Captions, Download, Fullscreen, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import GalleryImages from "./GalleryImages";


const GallerySlider = (): JSX.Element => {

  const [index, setIndex] = useState<number>(-1)

  return (
    <>
      <h2 className="text-4xl text-center pt-15 text-pink-700">
        Nails Works Examples
      </h2>
      <GalleryImages
        data={nailsGallery}
        onClick={(currentIndex): void => setIndex(currentIndex)}
      />
      <Lightbox
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: 'end'
        }}
        index={index}
        slides={nailsGallery}
        open={index >= 0}
        close={(): void => setIndex(-1)}
      />
    </>
  )
}

export default memo(GallerySlider)