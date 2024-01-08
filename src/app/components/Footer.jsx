import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
                <span>
                  <Image src="/images/logo.png" width={50} height={50} alt="Mr.Owl Studios" />
                  MR. OWL STUDIOS
        </span>
        <p className="text-slate-600">| &copy; 2024 Mr. Owl Studios - All rights reserved. |</p>
      </div>
    </footer>
  );
};

export default Footer;
