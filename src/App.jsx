import ImageGallery from "./components/ImageGallery/ImageGallery";
import { Counter } from "./redux/Counter";

import Test from "./components/Test/Test";
import ImgGallery from "./Sample/ImgGallery";

function App() {
  return (
    <>
      <div></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImageGallery />
        {/* <ImgGallery /> */}
        {/* <Test /> */}
      </div>
    </>
  );
}

export default App;
