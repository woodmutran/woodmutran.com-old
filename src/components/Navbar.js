import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Portfolio.
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>Trampos</button>
            <button onClick={() => scrollTo("#about")}>Sobre mim</button>
            <button onClick={() => scrollTo("#contact")}>Contato</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
