import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import PlaceIcon from "@mui/icons-material/Place";
import OurLogo from "./OurLogo";
import { Divider } from "@mui/material";

export default function FooterLayout() {
  return (
    <div className="gradient-light grid place-content-center bg-[--bg-dark] py-8">
      <div className="grid place-content-center w-[400px]">
        <Divider>
          <OurLogo className="w-full" />
        </Divider>
        <Divider>
          <PlaceIcon className="mt-4" />
        </Divider>
        <div className="py-4 text-center">current location</div>
        <div className="flex justify-between items-center">
          <TwitterIcon className="icon" />
          <FacebookIcon className="icon" />
          <InstagramIcon className="icon" />
          <WhatsAppIcon className="icon" />
          <TelegramIcon className="icon" />
        </div>
      </div>
    </div>
  );
}
