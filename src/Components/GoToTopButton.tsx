import UpArrow from "../Images/Icons/UpArrow.svg";

type GoToTopButtonProps = {
  contetRef: React.RefObject<HTMLDivElement | null>;
};

function GoToTopButton({ contetRef }: GoToTopButtonProps) {
  function goToTop() {
    contetRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <button
      onClick={goToTop}
      style={{
        border: "0",
        backgroundColor: "transparent",
        zIndex: "1",
        position: "fixed",
        bottom: "20rem",
        right: "1rem",
        cursor: "pointer",
      }}
    >
      <img src={UpArrow} width={70} alt="No image found" />
      <p>Go to top</p>
    </button>
  );
}

export default GoToTopButton;
