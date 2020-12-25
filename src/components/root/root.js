import Header from "../header/header";
import Footer from "../footer/footer";

const rootStyle = {
  position: "relative",
  zIndex: "5",
  padding: "5.0625rem 0 0 0",
};

const Root = (props) => {
  return (
    <>
      <Header />
      <div
        className="root"
        id={"root-" + (props.title || "index").toLowerCase()}
        style={rootStyle}
      >
        {props.children}
      </div>
      <Footer />
    </>
  );
};

export default Root;
