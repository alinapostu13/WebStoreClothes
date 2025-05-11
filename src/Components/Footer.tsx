import homePageStyle from "../Style/HomePage.module.css";
import footerStyle from "../Style/FootterStyle.module.css";
import FacebookLogo from "../Images/Icons/Facebook.png";
import InstagramLogo from "../Images/Icons/Instagram.png";
import GmailLogo from "../Images/Icons/Gmail.png";
import XLogo from "../Images/Icons/x.png";
function FooterSide() {
  return (
    <div className={homePageStyle["footer-section"]}>
      <div className={footerStyle.container}>
        <img className={footerStyle.icons} src={FacebookLogo} />
        <img className={footerStyle.icons} src={InstagramLogo} />
        <img className={footerStyle.icons} src={GmailLogo} />
        <img className={footerStyle.icons} src={XLogo} />
      </div>
    </div>
  );
}

export default FooterSide;
