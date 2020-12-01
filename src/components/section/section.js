import "./section.css";

const Section = (props) => {
  return (
    <section className="section" id={props.hash || ""}>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </section>
  );
};

const Subsection = (props) => {
  return (
    <div className="sub-section">
      {props.children}
    </div>
  )
}

export {
  Section,
  Subsection
};
