import React, { useCallback } from 'react';
import {  useRecoilState } from 'recoil';
import { imagesStateAtom } from '../../store/atoms/imagesStateAtom';

export const ImageUploaderComp = () => {
  
  const [images, setImages] = useRecoilState(imagesStateAtom) 

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.slice(0, 5 - images.length).map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const removeImage = useCallback(
    (index) => {
      setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    },
    [setImages]
  ); 
  return (
    <div className="flex flex-col gap-4 p-4 bg-white  border rounded-sm">
      <input 
      type="file"
      accept='image/*'
      multiple
      onChange={handleImageChange}
      disabled={images.length >= 5} 
      className="file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      
      <div className="relative flex flex-wrap gap-4 ">
        {images.map((image, index) => (
            <div key={index} className="image-wrapper">
            <img src={image} alt={`Uploaded ${index + 1}`} className="w-24 h-24 object-cover rounded-md"  />
            <div className='absolute top-1 right-1 w-6 h-6'>
                <button onClick={() => removeImage(index)}
                className=" w-full h-full p-0  text-center text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none"
                >X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

