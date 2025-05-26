import type { FunctionComponent, JSX } from "react";
import type { IGalleryImages } from "@interfaces/IGalleryImages";


const GalleryImages: FunctionComponent<IGalleryImages> = (props): JSX.Element => {

  const { data, onClick } = props

  const handleClickImage = (index: number): void => {
    onClick(index)
  }

  const handleKeyDownImage = (
    event: React.KeyboardEvent<HTMLElement>,
    index: number,
    onClick: (index: number) => void
  ): void => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      onClick(index)
    }
  }

  return (
    <section
      className="gallery-wrapper px-5 py-10"
      aria-label="Diverse gallery of images"
      role="region"
    >
      {data.map((slide, index)=> (
        <figure
          role="button"
          tabIndex={0}
          onClick={()=> handleClickImage(index)}
          key={index}
          onKeyDown={(e) => handleKeyDownImage(e, index, handleClickImage)}
          className="gallery-fig"
          aria-label={`Open image: ${slide.title || 'Untitled image'}`}
        >
          <img
            src={slide.src}
            alt={slide.description}
            title={slide.title}
            loading="lazy"
          />
        </figure>
      ))}
    </section>
  )
}

export default GalleryImages