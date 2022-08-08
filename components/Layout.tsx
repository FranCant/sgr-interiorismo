import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }: any) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
