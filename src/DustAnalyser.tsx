import { useEffect, useState } from "react";
import { ImagesModel } from "./types";

export const DustAnalyser: React.FC = () => {
  const [images, setImages] = useState<ImagesModel[]>([
    { imageSrc: "/images/1.png", imageId: 1, visible: false },
    { imageSrc: "/images/2.png", imageId: 2, visible: false },
    { imageSrc: "/images/3.png", imageId: 3, visible: false },
    { imageSrc: "/images/4.png", imageId: 4, visible: false },
  ]);

  const onHideImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imagesToUpdate = images;
    const imageIndex = imagesToUpdate.findIndex(
      (x) => x.imageId === parseInt(event.target.value)
    );
    imagesToUpdate[imageIndex].visible = !imagesToUpdate[imageIndex].visible;
    setImages(imagesToUpdate);
  };

  useEffect(() => {}, [images]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            {images.map((img) => {
              return (
                <div>
                  <pre>Image {img.imageId}</pre>
                  <input
                    type={"checkbox"}
                    onChange={onHideImage}
                    value={img.imageId}
                    checked={img.visible}
                  />
                </div>
              );
            })}
          </div>
          <div className="col-md-10 imageOnTop">
            {images.map((img) => {
              return (
                <div className="card imageClass">
                  <img
                    className="card-img-top"
                    src={window.location.origin + img.imageSrc}
                    alt="Card image cap"
                    style={{ display: img.visible ? "block" : "none" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
