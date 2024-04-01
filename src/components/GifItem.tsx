interface PropsGif {
  title: string;
  url: string;
}
export const GifItem = ({ title, url }: PropsGif) => {
  return (
    <div className="bg-zinc-800 overflow-hidde group relative m-5 h-80 w-full cursor-pointer p-5 text-blue-600 hover:text-white">
      <div>
        <img
          className="h-60 w-full rounded-xl duration-500 group-hover:scale-110"
          src={url}
        ></img>
        <div className="absolute -bottom-5 left-0 w-full p-5 duration-500 group-hover:-translate-y-12 ">
          <div className="absolute left-0 -z-10 h-28  w-full rounded-xl opacity-0 duration-500  group-hover:bg-blue-600  group-hover:opacity-50"></div>
          <span className="text-xl font-bold">
            {title === " " ? "Sin Titulo" : title}
          </span>
        </div>
      </div>
    </div>
  );
};
