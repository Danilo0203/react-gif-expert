import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { Skeleton } from "./Skeleton";

export const GifGrid = ({ category }: { category: string }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3 className="pt-5 text-4xl font-bold"> {category} </h3>
      <div className="grid grid-cols-card justify-items-center gap-3 pb-10">
        {isLoading
          ? images.map((image) => <Skeleton key={image.id} {...image} />)
          : images.map((image) => <GifItem key={image.id} {...image} />)}
      </div>
    </>
  );
}
