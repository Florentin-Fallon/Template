import React from "react";

function Footer() {
  return (
    <div className="bg-green-600/20 backdrop-blur-md rounded-2xl border border-transparent shadow-lg py-7">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-black">Maison Burger</h1>
        <p className="text-sm text-black">
          Copyright © 2025 Maison Burger. Tous droits réservés.
        </p>
      </div>
    </div>
  );
}

export default Footer;
