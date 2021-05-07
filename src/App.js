import Main from "./components/main-content";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Subscribe from "./components/subscribe";
import CarouselComp from "./components/carousel";
import "./assets/css/styles.css";
import Review from "./components/review";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselComp />
      <Main />
      <Review />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
