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
          <a
            href="https://www.google.com/maps/dir/12.959744,77.6568832/Al+Huda+Building+Deira+Al+Murrar+-+56+18B+St+-+Dubai+-+United+Arab+Emirates/@25.2765772,55.311067,19.62z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3e5f434daf3869fb:0x951031753d16eb7d!2m2!1d55.3111723!2d25.2767111?entry=ttu"
            className="py-4 text-center hover:text-[--text-hover]">
            <PlaceIcon className="mt-4" />
          </a>
        </Divider>
        <a
          href="https://www.google.com/maps/dir/12.959744,77.6568832/Al+Huda+Building+Deira+Al+Murrar+-+56+18B+St+-+Dubai+-+United+Arab+Emirates/@25.2765772,55.311067,19.62z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3e5f434daf3869fb:0x951031753d16eb7d!2m2!1d55.3111723!2d25.2767111?entry=ttu"
          className="py-4 text-center hover:text-[--text-hover]">
          Al Huda Building 208, Deidra Dubai UAE
        </a>
        <div className="flex justify-between items-center">
          <TwitterIcon className="icon" />
          <FacebookIcon className="icon" />
          <InstagramIcon className="icon" />
          <a
            href="https://wa.me/+971588124755"
            target="_blank"
            className="hover:text-[--text-hover]">
            <WhatsAppIcon className="icon" />
          </a>
          <TelegramIcon className="icon" />
        </div>
      </div>
      <a
        href="https://wa.me/+971588124755"
        target="_blank"
        className="fixed bottom-10 left-10">
        <WhatsAppIcon className="whatsapp-float" />
      </a>
    </div>
  );
}
