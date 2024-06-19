import { Route, Routes } from "react-router-dom";
import { HomePage } from "./page";
import NavComponents from "./components/Nav.components";
import NotFound from "./Not-found";

const App = () => {
  return (
    <div className=" container mx-auto h-screen">
      <NavComponents/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
};
export default App;
