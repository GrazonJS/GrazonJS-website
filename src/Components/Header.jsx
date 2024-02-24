import React from "react";

import { menu } from "./data.js";

function Header() {
  console.log("rendering");
  return (
    <>
      <nav className="flex flex-row py-5 text-lg justify-center items-center gap-20 font-casual text-base">
        {menu.map((data) => (
          <div key={data.id}>
            <button>{data.menuName}</button>
          </div>
        ))}
      </nav>
    </>
  );
}

export default Header;
