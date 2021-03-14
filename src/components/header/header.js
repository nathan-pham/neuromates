import React, { Component } from "react";
import "./header.css";

const HeaderLink = ({ title, onClick, className }) => {
  return (
    <button
      className={`link ${ className ? "active" : "" }`}
      onClick={ onClick }
    >
      { title }
    </button>
  );
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "overview",
    };

    this.scrollTo = this.scrollTo.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }
  scrollTo(title) {
    const section = document.querySelector(`section[id="${ title }"]`);
    if(section) {
      section.scrollIntoView();
    }
  }
  onScroll() {
    const sections = document.getElementsByClassName("section");
    [...sections].forEach(section => {
      const bound = section.getBoundingClientRect();
      if(window.scrollY >= bound.top) {
        this.setState({
          active: section.id
        });
        return;
      }
    })
  }
  componentDidMount() {
    document.body.addEventListener("scroll", this.onScroll);
  }
  componentWillUnmount() {
    document.body.removeEventListener("scroll", this.onScroll);
  }
  render() {
    const links = [
      "overview",
      "stages",
      "health",
      "games",
      "tips",
    ].map((title, i) => (
      <HeaderLink
        key={ i }
        title={ title }
        className={ this.state.active === title }
        onClick={ () => this.scrollTo(title) }
      />
    ));
    return (
      <header className="document-header flex align-center justify-between">
        <div className="logo-container flex align-center">
          <img src="/logo192.png" alt="Neuromates Logo" />
          <span className="beta">Beta</span>
        </div>
        <nav className="navigation">{links}</nav>
        <div className="menu"></div>
      </header>
    );
  }
}

export default Header;
