import { Route, Routes } from "react-router-dom";
import { BlogPage, DashboardPage, DetailBookPage, HomePage, InventoryPage, LoginPage, UserPage } from "./page";
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
        {/* <Route path="/detail/:id" element={<DetailBookPage/>}/> */}
        <Route path="/detail/:slug" element={<DetailBookPage/>}/>
        <Route path="*" element={<NotFound/>}/>

        {/* dashboard */}
        <Route path="/dashboard" element={<DashboardPage/>}>
          <Route index element={<InventoryPage/>} />
          <Route path="blog" element={<BlogPage/>} />
          <Route path="user" element={<UserPage/>} />
        </Route>

        {/* admin */}
        <Route path="/admin" element={<LoginPage/>}/>
      </Routes>
      <FooterComponent/>
    </div>
    </main>
  );
};
export default App;
