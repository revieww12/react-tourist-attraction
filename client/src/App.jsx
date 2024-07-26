import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Homepage from "./pages/Homepage";
import KohChang from "./pages/KohChang";
import GreenLineBTS from "./pages/GreenLineBTS";
import KiriBuraphaSunFlower from "./pages/KiriBuraphaSunFlower";
import EtongPilok from "./pages/EtongPilok";
import ChiangmaiKoreaStyle from "./pages/ChiangmaiKoreaStyle";
import KohLipe from "./pages/KohLipe";
import AroundTaiwanFreeVisa from "./pages/AroundTaiwanFreeVisa";
import ViewsAroundFuji from "./pages/ViewsAroundFuji";
import AroundParisFrance from "./pages/AroundParisFrance";
import Finland from "./pages/Finland";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/koh-chang-trip" element={<KohChang />} />
          <Route path="/greenline-bts-trip" element={<GreenLineBTS />} />
          <Route
            path="/ki-ri-burapha-sun-flower-trip"
            element={<KiriBuraphaSunFlower />}
          />
          <Route path="/etong-pilok-trip" element={<EtongPilok />} />
          <Route
            path="/chiangmai-korea-style-trip"
            element={<ChiangmaiKoreaStyle />}
          />
          <Route path="/koh-lipe-trip" element={<KohLipe />} />
          <Route
            path="/around-taiwan-free-visa-trip"
            element={<AroundTaiwanFreeVisa />}
          />
          <Route path="/views-around-fuji-trip" element={<ViewsAroundFuji />} />
          <Route
            path="/around-paris-france-trip"
            element={<AroundParisFrance />}
          />
          <Route path="/finland-trip" element={<Finland />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
