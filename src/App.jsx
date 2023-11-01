import ImageGallery from "./components/ImageGallery/ImageGallery";
// import Test from "./components/Test/Test";

function App() {
  return (
    <>
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
