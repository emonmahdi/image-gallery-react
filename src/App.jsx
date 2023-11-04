import ImageGallery from "./components/ImageGallery/ImageGallery";
import { Counter } from "./redux/Counter";

import Test from "./components/Test/Test";

function App() {
  return (
    <>
      <div>
        <Counter />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImageGallery />
        {/* <Test /> */}
      </div>
    </>
  );
}

export default App;
