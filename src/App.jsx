import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import Home from "./page/home/home";
import Teachers from "./page/teachers";
import Center from "./page/center";
import Contacts from "./page/contacts";
import AboutUs from "./page/About-Us";
import NodFound from "./page/nod-found/nod-found";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="Center" element={<Center />} />
          <Route path="Teachers" element={<Teachers />} />
          <Route path="Contacts" element={<Contacts />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="*" element={<NodFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
