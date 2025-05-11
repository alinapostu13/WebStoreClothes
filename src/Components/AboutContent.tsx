import aboutPageStyle from "../Style/AboutPage.module.css";
import FounderPicture from "../Images/Founder.png";
import Signature from "../Images/signature.png";
function AboutContent() {
  return (
    <div>
      <div className={aboutPageStyle["content"]}>
        <div className={aboutPageStyle["our-story"]}>
          <div className={aboutPageStyle["founder-and-signrature"]}>
            <img
              src={FounderPicture}
              style={{ width: "20vw", borderRadius: "20px" }}
            />
            <img src={Signature} style={{ width: " 10vw" }} />
          </div>
          <p className={aboutPageStyle["story"]}>
            Founded in 2025 in the heart of Iasi,Romania, our tailoring house
            was born from a singular vision: to redefine men’s elegance through
            precision, intention, and quiet luxury. Every thread we sew, every
            button we place, and every silhouette we sculpt is a reflection of
            our belief that true style lies not in extravagance, but in mastery
            of detail.
            <br />
            Inspired by the heritage of classic menswear and driven by
            contemporary refinement, our atelier bridges tradition and
            modernity. We create garments that speak softly but command
            attention—tailored pieces that move with grace, empower confidence,
            and endure through time. <br />
            At the core of our philosophy is an unwavering commitment to
            craftsmanship. We work only with premium textiles, ethically sourced
            from the finest mills across Europe and Japan. Each suit, jacket, or
            shirt is individually cut and shaped to fit—not only the body but
            the personality of the man wearing it. Our master tailors, trained
            in old-world techniques, blend artisanal handwork with discreet
            innovations, ensuring both comfort and exacting quality. <br />
            But beyond fabric and fit, our purpose is to elevate how a man feels
            in his own skin. In a world chasing trends, we choose timeless
            design. In a culture of haste, we value patience and perfection. We
            believe every man deserves a garment that feels personal—an
            extension of who he is and who he strives to become.
            <br />
            This isn’t just tailoring. It’s a form of expression. <br />
            Whether you seek the perfect suit for a pivotal moment or everyday
            pieces that quietly define your presence, we are here to guide you.
            With discretion, with care, and always with an eye for the
            extraordinary hidden in the understated. Welcome to [Store
            Name]—where character is stitched into every seam.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
