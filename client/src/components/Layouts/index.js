import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../../context/UserDetailContext";
import {  useEffect } from "react";
import { useMutation } from "react-query";
import { createUser } from "../../utils/api";

const Layouts = () => {
  const { user, isAuthenticated, getAccessTokenWithPopup} = useAuth0();

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => createUser(user?.email, token),
  });

  useEffect(() => {
    const getToken = async() => {
      
      const token = await getAccessTokenWithPopup(
        {
          audience: "http://localhost:8000",
        }
      );
      console.log(token);
      mutate(token);
    }
    isAuthenticated && getToken();
  }, [isAuthenticated, mutate, getAccessTokenWithPopup]);
  

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
