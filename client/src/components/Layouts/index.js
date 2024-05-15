import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router";

const Layouts = () => {
  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header />
        <Outlet/>
      </div>
      <Footer />
    </>
  );
};

export default Layouts;
