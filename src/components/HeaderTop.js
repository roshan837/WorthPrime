import MenuIcon from "@mui/icons-material/Menu";
import { ListItemIcon, Menu } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import OurLogo from "./OurLogo";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import CalculateIcon from "@mui/icons-material/Calculate";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

function HeaderTop() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navList = [
    {
      path: "/audit",
      name: "Audit",
      icon: <VerifiedUserIcon />,
    },
    {
      path: "/book-keeping",
      name: "Book Keeping",
      icon: <CollectionsBookmarkIcon />,
    },
    {
      path: "/vat-consulting",
      name: "VAT Consulting",
      icon: <BusinessCenterIcon />,
    },
    {
      path: "/tax",
      name: "TAX Agent",
      icon: <CalculateIcon />,
    },
    {
      path: "/corporate-tax",
      name: "Corporate TAX",
      icon: <CorporateFareIcon />,
    },
    {
      path: "/internal-audit",
      name: "Internal Audit",
      icon: <VerifiedUserIcon />,
    },
  ];

  return (
    <>
      <div className="bg-[--bg-dark] py-[16px] font-semibold text-[--text-light]">
        <span className="grid grid-cols-[auto_1fr] px-1 md:px-6 text-[0.75rem] md:text-[1rem]">
          <span className="self-center underline underline-offset-4 whitespace-nowrap">
            Our Office:
          </span>
          <span className="px-[8px] lg:px-[100px] flex justify-between gap-[16px]">
            <span>Phone No: 0588124755</span>
            <span>Landline No: +971-588124755</span>
            <span>
              Email:{" "}
              <a
                href="mailto:gulftax@worthprime.ae"
                className="hover:text-[--text-hover] hover:underline">
                gulftax@worthprime.ae
              </a>
            </span>
          </span>
        </span>
      </div>
      <div className="bg-[--bg] py-2 md:px-6 flex w-full justify-between z-10 sticky top-0">
        <OurLogo />
        <MenuIcon
          className="!text-[50px] cursor-pointer"
          onClick={handleClick}
        />
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} className="rounded-[16px]">
          {navList.map((nav) => (
            <Link
              key={nav.path}
              onClick={handleClose}
              to={nav.path}
              className="block px-[32px] py-[12px] hover:bg-[--bg-light] flex item-center">
              <ListItemIcon>{nav.icon}</ListItemIcon>
              {nav.name}
            </Link>
          ))}
        </Menu>
      </div>
    </>
  );
}

export default HeaderTop;
