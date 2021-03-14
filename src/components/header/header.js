import React, { Component } from "react";

import "./header.css";

const HeaderLink = ({ hash, className }) => {
  return (
    <a
      className={`link ${className ? "active" : ""}`}
      href={"#" + hash.toLowerCase()}
    >
      {hash}
    </a>
  );
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: window.location.hash ? window.location.hash : "#overview",
    };

    this.handleHash = this.handleHash.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }
  scrollHash() {
    const section = document.querySelector(`section[id="${this.state.active.substring(1)}"]`);
    section
      ? section.scrollIntoView()
      : this.setState({
        active: "#overview"
      });
  }
  onScroll() {
    const sections = document.getElementsByClassName("section");
    [...sections].forEach(section => {
      const bound = section.getBoundingClientRect();
      if(window.scrollY >= bound.top) {
        this.setState({
          active: `#${section.id}`
        })
        return;
      }
    })
  }
  componentDidMount() {
    window.addEventListener("hashchange", this.handleHash);
    document.body.addEventListener("scroll", this.onScroll);
    this.scrollHash();
  }
  componentDidUpdate() {
    this.scrollHash();
  }
  componentWillUnmount() {
    window.removeEventListener("hashchange", this.handleHash);
    document.body.removeEventListener("scroll", this.onScroll);
  }
  handleHash() {
    this.setState({
      active: window.location.hash,
    });
  }
  render() {
    const links = [
      "overview",
      "stages",
      "health",
      "games",
      "tips",
    ].map((title) => (
      <HeaderLink
        key={title}
        hash={title}
        className={this.state.active === "#" + title}
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
