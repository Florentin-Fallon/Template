import React from "react";

function MenuSectionR({ name, price, description, burgerImage }) {
  return (
    <div className="py-auto bg-white flex items-center justify-center gap-56 py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-24 w-32 h-3 bg-red-400/30 rounded-full blur-sm transform rotate-12"></div>
        <div className="absolute top-28 left-32 w-24 h-2 bg-red-500/25 rounded-full blur-sm transform -rotate-6"></div>
        <div className="absolute bottom-32 right-20 w-28 h-2 bg-red-300/35 rounded-full blur-sm transform rotate-8"></div>

        <div className="absolute top-36 right-24 w-20 h-20 bg-purple-300/20 rounded-full blur-sm"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-purple-400/25 rounded-full blur-sm"></div>

        <div className="absolute top-44 left-36 w-16 h-8 bg-green-400/30 rounded-full blur-sm transform rotate-45"></div>
        <div className="absolute bottom-24 right-32 w-12 h-6 bg-green-500/25 rounded-full blur-sm transform -rotate-30"></div>

        <div className="absolute top-52 right-16 w-8 h-12 bg-orange-400/35 rounded-full blur-sm transform rotate-30"></div>
        <div className="absolute bottom-36 left-28 w-6 h-10 bg-orange-500/30 rounded-full blur-sm transform -rotate-45"></div>

        <div className="absolute top-60 left-12 w-24 h-12 bg-brown-400/25 rounded-lg blur-sm transform rotate-15"></div>
        <div className="absolute bottom-44 right-24 w-20 h-10 bg-brown-500/20 rounded-lg blur-sm transform -rotate-20"></div>
      </div>
      <div
        className="relative overflow-hidden "
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 85%, 95% 90%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 5% 90%, 0% 85%)",
        }}
      >
        <img
          src={burgerImage}
          alt="burger"
          className="w-full h-96 object-cover transform scale-110 translate-x-2 translate-y-1"
        />
      </div>
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-4xl font-bold text-red-500 flex items-center gap-4">
          <div className="w-6 h-6 bg-red-500 rounded-sm transform rotate-45"></div>
          {name}
          <div className="relative">
            <div
              className="absolute inset-0 bg-[#f76d6d] transform rotate-2 shadow-2xl"
              style={{
                clipPath:
                  "polygon(0% 8%, 12% 0%, 25% 5%, 40% 2%, 55% 8%, 70% 3%, 85% 10%, 95% 5%, 100% 12%, 100% 25%, 95% 35%, 100% 45%, 95% 55%, 100% 65%, 95% 75%, 100% 85%, 95% 95%, 85% 100%, 70% 95%, 55% 100%, 40% 95%, 25% 100%, 12% 95%, 0% 100%, 0% 85%, 8% 75%, 0% 65%, 8% 55%, 0% 45%, 8% 35%, 0% 25%, 8% 15%)",
              }}
            ></div>
            <span className="relative z-10 text-4xl font-bold text-white px-6 py-3">
              {price}
            </span>
          </div>
        </h1>
        <p className="text-black text-lg ml-10">{description}</p>
      </div>
    </div>
  );
}

export default MenuSectionR;
