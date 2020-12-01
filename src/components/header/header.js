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
  }
  scrollHash() {
    const element = document.querySelector(`section[id="${this.state.active.substring(1)}"]`)
    element.scrollIntoView();
  }
  componentDidMount() {
    window.addEventListener("hashchange", this.handleHash);
    this.scrollHash();
  }
  componentDidUpdate() {
    this.scrollHash();
  }
  componentWillUnmount() {
    window.removeEventListener("hashchange", this.handleHash);
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
