import { Title } from "../components";
import { PhotosFilter, PhotosList, LoadMoreButton } from "./components";
import strings from "../src/consts/strings";

const Home = () => {
  return (
    <main className="mx-auto max-w-screen-xl">
      <Title title={strings.unsplashWallpapers} />
      {/* <PhotosFilter /> */}
      <PhotosList />
      <LoadMoreButton />
    </main>
  );
};

export default Home;
