import React from "react";

function MenuSectionR({ name, price, description, burgerImage }) {
  return (
    <div className="py-auto bg-white flex items-center justify-center gap-56 py-16">
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
