import MenuIcon from "@mui/icons-material/Menu";
import { Menu } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import OurLogo from "./OurLogo";

function HeaderTop() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="gradient-dark py-2 font-semibold text-[--text-light]">
        <span className="grid grid-cols-[auto_1fr] px-1 md:px-6">
          <span className="self-center">Our Office:</span>
          <span className="grid grid-cols-1 px-2">
            <span>0588124755</span>
            <a
              href="mailto:gulftax@worthprime.ae"
              className="hover:text-[--text-hover] hover:underline">
              gulftax@worthprime.ae
            </a>
          </span>
        </span>
      </div>
      <div className="gradient-light py-2 md:px-6 flex w-full justify-between z-10 sticky top-0">
        <OurLogo />
        <MenuIcon
          className="!text-[50px] cursor-pointer"
          onClick={handleClick}
        />
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <Link
            onClick={handleClose}
            to="/audit"
            className="block p-1 hover:bg-[--bg-light]">
            Audit
          </Link>
          <Link
            onClick={handleClose}
            to="/book-keeping"
            className="block p-1 hover:bg-[--bg-light]">
            Book Keeping
          </Link>
          <Link
            onClick={handleClose}
            to="/vat-consulting"
            className="block p-1 hover:bg-[--bg-light]">
            VAT Consulting
          </Link>
          <Link
            onClick={handleClose}
            to="/tax"
            className="block p-1 hover:bg-[--bg-light]">
            TAX Agent
          </Link>
          <Link
            onClick={handleClose}
            to="/corporate-tax"
            className="block p-1 hover:bg-[--bg-light]">
            Corporate Tax
          </Link>
          <Link
            onClick={handleClose}
            to="/internal-audit"
            className="block p-1 hover:bg-[--bg-light]">
            Internal Audit
          </Link>
        </Menu>
      </div>
    </>
  );
}

export default HeaderTop;
