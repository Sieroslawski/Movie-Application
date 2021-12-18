import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavs from '../pages/PageFavs';
import PageSingleMovie from '../pages/PageSingleMovie';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<PageHome sort='popular'/>} exact/>
          <Route path="/sort/popular" element={<PageHome sort='popular'/>} />
          <Route path="/sort/top-rated" element={<PageHome sort='top_rated'/>} />
          <Route path="/sort/now-playing" element={<PageHome sort='now_playing'/>} />
          <Route path="/sort/upcoming" element={<PageHome sort='upcoming'/>} />
          <Route path="/movie/:id" element={<PageSingleMovie />}  />
          <Route path="about" element={<PageAbout />} />
          <Route path="favs" element={<PageFavs />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

/* <Route path="/movie/:id" element={<PageSingleMovie />}  /> */