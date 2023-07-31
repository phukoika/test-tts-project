import Banner from "./components/banner/Banner";
import TextScrolling from "./components/text/TextScrolling";
import AboutPage from "./pages/AboutPage";
import Footer from "./pages/Footer";
import HomePage from "./pages/HomePage";
import MemberPages from "./pages/MemberPages";
import News from "./pages/News";
import ServicePage from "./pages/ServicePage";

function App() {
  return (
    <div>
      <HomePage></HomePage>
      <Banner></Banner>
      <AboutPage></AboutPage>
      <TextScrolling
        text1="Offshore"
        text2="Energy"
        text3="installation"
      ></TextScrolling>
      <MemberPages></MemberPages>
      <ServicePage></ServicePage>
      <TextScrolling
        text1="Offshore"
        text2="Energy"
        text3="installation"
      ></TextScrolling>
      <News></News>
      <Footer></Footer>
    </div>
  );
}

export default App;
