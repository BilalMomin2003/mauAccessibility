function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <span className="logo">mauAccessibility</span>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;