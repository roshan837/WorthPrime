import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
export default function ServiceCard({ service }) {
  return (
    <div className="grid-layout h-full w-full bg-[--bg-lighter] p-4 border border-[--border] rounded-[16px] shadow-[--bg] shadow-md">
      <img
        className="w-[80px] rounded-[8px]"
        src={service?.img}
        alt={service?.img}
      />
      <Typography variant="h6">{service.title}</Typography>
      <Typography variant="subtitle2">{service.subTitle}</Typography>
      <Typography variant="body1" className="text-center">
        {service.detail}
      </Typography>
      {service.link ? (
        <Link to={service.link} className="inline-flex">
          <Typography variant="subtitle2">Details</Typography>
          <KeyboardDoubleArrowRightIcon />
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}
