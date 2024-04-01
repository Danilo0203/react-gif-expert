import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = (category: string) => {
  interface Gif {
    id: string;
    title: string;
    url: string;
  }
  const [images, setImages] = useState<Gif[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const newGifs = async () => {
    const newImg = await getGif(category);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    setImages(newImg);
  };
  useEffect(() => {
    newGifs();
  });
  return {
    images,
    isLoading,
  };
};
