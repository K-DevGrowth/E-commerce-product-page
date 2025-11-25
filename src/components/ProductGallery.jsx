import { useState } from "react";

const ProductGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const mainSrc = `image-product-${currentIndex + 1}.jpg`;

  const thumbnails = [
    "image-product-1-thumbnail.jpg",
    "image-product-2-thumbnail.jpg",
    "image-product-3-thumbnail.jpg",
    "image-product-4-thumbnail.jpg",
  ];

  return (
    <div className="sm:max-w-sm max-w-full">
      <img
        className="object-cover w-full max-h-80 m-auto sm:block hidden sm:rounded-xl"
        src={mainSrc}
        alt=""
        onClick={() => setIsModalOpen(!isModalOpen)}
      />
      <img
        className="object-cover w-full max-h-80 m-auto block sm:hidden sm:rounded-xl"
        src={mainSrc}
        alt=""
      />
      <div className="sm:grid grid-cols-4 hidden *:max-w-20 gap-x-4 pt-6 items-center justify-center *:rounded-xl">
        {thumbnails.map((thumbnail, index) => (
          <img
            key={thumbnail}
            src={thumbnail}
            onClick={() => setCurrentIndex(index)}
            className={`${
              currentIndex === index && "border-2 border-Orange opacity-50"
            }`}
          />
        ))}
      </div>
      <div className="absolute block sm:hidden left-1/2 -translate-1/2 top-1/2 w-full">
        <div className="flex justify-between items-center m-2">
          <button
            type="button"
            onClick={() =>
              setCurrentIndex(
                (currentIndex - 1 + thumbnails.length) % thumbnails.length
              )
            }
            className="bg-White w-12 h-12 rounded-full"
          >
            <img className="mx-auto" src="icon-previous.svg" alt="" />
          </button>
          <button
            type="button"
            onClick={() =>
              setCurrentIndex((currentIndex + 1) % thumbnails.length)
            }
            className="bg-White w-12 h-12 rounded-full"
          >
            <img className="mx-auto" src="icon-next.svg" alt="" />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-Black/75 z-40"></div>

          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="relative max-w-sm mx-auto">
              <button
                className="float-right"
                onClick={() => setIsModalOpen(false)}
              >
                <img
                  className="brightness-200 mb-2 text-Orange hover:brightness-100 hover:invert-100 hover:sepia-100"
                  src="icon-close.svg"
                  alt=""
                />
              </button>
              <img src={mainSrc} alt="" />
              <div className="absolute top-1/2 left-1/2 -translate-1/2 w-full">
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentIndex(
                        (currentIndex - 1 + thumbnails.length) %
                          thumbnails.length
                      )
                    }
                    className="bg-White w-12 h-12 rounded-full"
                  >
                    <img className="mx-auto" src="icon-previous.svg" alt="" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentIndex((currentIndex + 1) % thumbnails.length)
                    }
                    className="bg-White w-12 h-12 rounded-full"
                  >
                    <img className="mx-auto" src="icon-next.svg" alt="" />
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center *:max-w-18 gap-4 mt-4">
                {thumbnails.map((thumbnail, index) => (
                  <img
                    key={thumbnail}
                    src={thumbnail}
                    onClick={() => setCurrentIndex(index)}
                    className={`rounded-xl ${
                      currentIndex === index &&
                      "border-2 border-Orange opacity-50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductGallery;
