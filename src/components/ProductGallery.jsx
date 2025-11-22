import { useState } from "react";

const ProductGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="sm:max-w-sm max-w-full">
      <img
        className="object-cover w-full max-h-80 m-auto sm:rounded-xl"
        src="image-product-1.jpg"
        alt=""
      />
      <div className="grid grid-cols-4 *:max-w-20 gap-x-4 pt-6 items-center justify-center *:rounded-xl">
        <img
          src="image-product-1-thumbnail.jpg"
          alt=""
          onClick={() => setIsModalOpen(!isModalOpen)}
        />
        <img src="image-product-2-thumbnail.jpg" alt="" />
        <img src="image-product-3-thumbnail.jpg" alt="" />
        <img src="image-product-4-thumbnail.jpg" alt="" />
      </div>

      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-Black/75 z-40"></div>

          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="max-w-sm mx-auto">
              <button
                className="float-right"
                onClick={() => setIsModalOpen(false)}
              >
                <img className="invert sepia text-Orange brightness-110" src="icon-close.svg" alt="" />
              </button>
              <img src="image-product-1.jpg" alt="" />
              <div>
                <button></button>
                <button></button>
              </div>
              <div className="grid grid-cols-4 *:max-w-18">
                <img
                  src="image-product-1-thumbnail.jpg"
                  alt=""
                  onClick={() => setIsModalOpen(!isModalOpen)}
                />
                <img src="image-product-2-thumbnail.jpg" alt="" />
                <img src="image-product-3-thumbnail.jpg" alt="" />
                <img src="image-product-4-thumbnail.jpg" alt="" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductGallery;
