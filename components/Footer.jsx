import { Container, Logo } from "../components";

import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const date = new Date();
  return (
    <footer className="py-20 mt-10 text-sm dark:text-white">
      <Container>
        <div className="border-t border-orange-500 gap-10 sm:gap-20 flex flex-col sm:flex-row items-center justify-between py-10">
          <div className="invert  dark:invert-0 flex justify-center">
            <Logo />
          </div>

          <div className="grid grid-cols-2 gap-7">
            <div className="col-span-2 flex items-center gap-4">
              <Image
                src="/icons/location-pin.svg"
                width={20}
                height={20}
                alt="location-pin.svg"
              />

              <span>
                345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
              </span>
            </div>
            <div className="flex items-center col-span-2 sm:col-span-1 gap-4">
              <Image
                src="/icons/phone.svg"
                width={20}
                height={20}
                alt="location-pin.svg"
              />

              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center col-span-2 sm:col-span-1 gap-4">
              <Image
                src="/icons/printer.svg"
                width={20}
                height={20}
                alt="location-pin.svg"
              />

              <span>(123) 456-7890</span>
            </div>
            <div className="col-span-2 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10">
              <p>Social Media</p>

              <ul className="flex items-center gap-5 sm:gap-10 cursor-pointer">
                <li>
                  <Image
                    src="/icons/facebook.svg"
                    width={25}
                    height={25}
                    alt="facebook.svg"
                  />
                </li>
                <li>
                  <Image
                    src="/icons/twitter.svg"
                    width={25}
                    height={25}
                    alt="twitter.svg"
                  />
                </li>
                <li>
                  <Image
                    src="/icons/instagram.svg"
                    width={25}
                    height={25}
                    alt="instagram.svg"
                  />
                </li>
                <li>
                  <Image
                    src="/icons/google.svg"
                    width={25}
                    height={25}
                    alt="google.svg"
                  />
                </li>
                <li>
                  <Image
                    src="/icons/pinterest.svg"
                    width={25}
                    height={25}
                    alt="pinterest.svg"
                  />
                </li>
                <li>
                  <Image
                    src="/icons/RSS.svg"
                    width={25}
                    height={25}
                    alt="twitter.svg"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-500 pt-5 flex justify-center sm:gap-20 gap-10 flex-col sm:flex-row w-fit mx-auto mt-10 items-center sm:items-start">
          <ul className="flex gap-5 uppercase flex-wrap">
            <li>About us</li>
            <li>Contact us</li>
            <li>Help</li>
            <li>Privacy policy</li>
            <li>Privacy policy</li>
            <li>Disclaimer</li>
          </ul>

          <p>
            Copyright © {date.getFullYear()} Minimumlivingcost. All rights
            reserved
          </p>
        </div>

        <p className="mt-10 text-center">
          Made with 💖 by{" "}
          <Link href="https://twitter.com/dev_willman" legacyBehavior passHref>
            <a
              target="_blank"
              className="font-semibold"
              referrerPolicy="no-referrer"
            >
              William M. Tsikata
            </a>
          </Link>
        </p>
      </Container>
    </footer>
  );
};
