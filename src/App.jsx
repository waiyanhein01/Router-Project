import { Route, Routes } from "react-router-dom";
import { DetailBookPage, HomePage } from "./page";
import NavComponents from "./components/Nav.components";
import NotFound from "./Not-found";
import { FooterComponent } from "./components";

const App = () => {
  return (
    <main className=" my-5">
      <div className="container mx-auto min-h-screen flex flex-col">
      <NavComponents/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/detail/:id" element={<DetailBookPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <FooterComponent/>
    </div>
    </main>
  );
};
export default App;
