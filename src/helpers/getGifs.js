export const getGifs = async (category) => {
  /*Para poder insertar una funcion en una url necesitamos ponerla entre ``*/
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=A9VIiixiInvZRrGCi4zSIM8DDbs78sDq`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
