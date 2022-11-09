import PhotosList from "./components/PhotosList";
import strings from "../src/constants/strings";

const Home = () => {
  return (
    <div className="my-5 mx-auto max-w-screen-xl">
      <h1 className="text-4xl font-bold mt-8 mb-16">
        {strings.unsplashWallpapers}
      </h1>
      <PhotosList />
    </div>
  );
};

export default Home;
