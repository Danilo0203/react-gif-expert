interface Gifs {
  id: string;
  title: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
}
export const getGif = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=8TgOKuxZEV1zsywLHdcV5IOPRsuAvPiy&q=${category}&limit=8`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(({ id, title, images }: Gifs) => ({
    id: id,
    title: title,
    url: images.downsized_medium.url,
  }));
  return gifs;
};
