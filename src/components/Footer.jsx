"use client";

import { Footer } from "flowbite-react";

const Footter = () => {
  return (
    <div className="">
      <Footer container>
        <Footer.Copyright href="#" by="NewTech™" year={2024} />
        <Footer.LinkGroup>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
};

export default Footter;
