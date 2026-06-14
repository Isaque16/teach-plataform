import global from "../../assets/icons/global.svg";
import euro from "../../assets/icons/euro.svg";
import accessibility from "../../assets/icons/accessibility.svg";

export default function FooterBottom() {
  return (
    <>
      <hr className="border-gray-700 mt-10 mb-5" />
      <div className="flex flex-wrap items-center justify-between gap-5">
        <p>uteach @ 2023. All rights reserved.</p>
        <ul className="flex flex-wrap items-center justify-between gap-5 py-3">
          <li>
            <a href="/terms" className="link-hover">
              Terms
            </a>
          </li>
          <li>
            <a href="/privacy" className="link-hover">
              Privacy
            </a>
          </li>
          <li>
            <a href="/contact" className="link-hover">
              Contact
            </a>
          </li>
          <li className="flex items-center gap-1">
            <img src={global} alt="Global" />
            EN
          </li>
          <li className="flex items-center gap-1">
            <img
              src={euro}
              alt="Global"
              className="hidden md:inline"
              width={20}
              height={20}
              loading="lazy"
            />
            EUR
          </li>
          <li>
            <img
              src={accessibility}
              alt="Global"
              width={30}
              height={30}
              loading="lazy"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
