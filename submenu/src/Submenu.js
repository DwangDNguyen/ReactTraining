import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Submenu = () => {
  const { isSubmenuOpen, location, pageList } = useGlobalContext();
  const [length, setLength] = useState("col-2");

  console.log(pageList);
  const submenuContainer = useRef(null);
  useEffect(() => {
    const menuSub = submenuContainer.current;
    const { center, bottom } = location;
    menuSub.style.left = `${center}px`;
    menuSub.style.top = `${bottom}px`;
    setLength(`col-${pageList.links.length}`);
  }, [location]);
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={submenuContainer}
    >
      <section>
        <h4>{pageList.page}</h4>
        <div className={`submenu-center ${length}`}>
          {pageList.links.map((link, index) => {
            return (
              <a href={link.url} key={index}>
                {link.icon}
                {link.label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
