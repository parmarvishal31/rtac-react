import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
function Footer() {
  const phoneNumber = "+917778881058";
  const email = "mailto:rtacedu@gmail.com";
  const whatsup = "https://api.whatsapp.com/send?phone=7778881058";

  return (
    <div className="flex w-full justify-center items-center rounded-t-lg">
      <Link
        to={whatsup}
        className="bg-gray-700 w-full p-2 flex justify-center items-center gap-1 font-semibold border-r-2 border-black text-white"
      >
        <span className="text-green-700">
          <IoLogoWhatsapp />
        </span>
        <span>Whatsapp</span>
      </Link>

      <Link
        to={`tel:${phoneNumber}`}
        className=" w-full p-2 flex justify-center items-center gap-1 font-semibold border-r-2 border-black text-white bg-gray-700"
      >
        <span className="text-red-500">
          <PiPhoneCallFill />
        </span>
        <span>Call </span>
      </Link>

      <Link
        to={email}
        className="bg-gray-700 w-full p-2 flex justify-center items-center gap-1 font-semibold text-white"
      >
        <span className="text-yellow-500">
          <MdEmail />
        </span>
        <span>Mail</span>
      </Link>
    </div>
  );
}

export default Footer;
