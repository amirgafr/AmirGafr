import { useRef } from "react";

function Navbar({ navOpen }) {
  const lastActiveLink = useRef();

  console.log(lastActiveLink.current);

  const activeCurrentLink = (e) => {
    lastActiveLink.current.classList.remove("active");
    e.target.classList.toggle("active");
    lastActiveLink.current = e.target;
  };

  const navItem = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Skills",
      link: "#skills",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link",
    },
  ];

  return (
    <nav className={"navbar" + (navOpen ? "active" : "")}>
      {navItem.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          className={className}
          key={key}
          ref={ref}
          onClick={(e) => activeCurrentLink(e)}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
