import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../../context/UserDetailContext";
import { useContext, useEffect } from "react";
import { useMutation } from "react-query";
import { createUser } from "../../utils/api";

const Layouts = () => {
  const { isAuthenticated, user } = useAuth0();
  const { setUserDetails } = useContext(UserDetailContext);

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: () => {
      createUser(user?.email);
    },
  });

  useEffect(() => {
    isAuthenticated && mutate();
  }, [isAuthenticated, mutate]);

  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layouts;
