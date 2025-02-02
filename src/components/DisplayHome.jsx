import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Тренды</h1>
        <div className="flex overflow-auto">
          {songsData.map((song, index) => (
            <SongItem
              key={index}
              image={song.image}
              name={song.name}
              desc={song.desc}
              id={song.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
