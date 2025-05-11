import FacebookLogo from "../Images/Icons/Facebook.png";
import InstagramLogo from "../Images/Icons/Instagram.png";
import GmailLogo from "../Images/Icons/Gmail.png";
import XLogo from "../Images/Icons/x.png";

import layoutStyle from "../Style/Layout.module.css";
import footerStyle from "../Style/FootterStyle.module.css";

function FooterSide() {
  return (
    <div className={layoutStyle["footer-section"]}>
      <div className={footerStyle.container}>
        <img
          className={footerStyle.icons}
          src={FacebookLogo}
          alt="No image found"
        />
        <img
          className={footerStyle.icons}
          src={InstagramLogo}
          alt="No image found"
        />
        <img
          className={footerStyle.icons}
          src={GmailLogo}
          alt="No image found"
        />
        <img className={footerStyle.icons} src={XLogo} alt="No image found" />
      </div>
    </div>
  );
}

export default FooterSide;
