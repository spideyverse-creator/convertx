export default function Navbar() {
  return (
    <nav className="glass-nav" aria-label="Main navigation">
      <a href="#top" className="nav-logo">Convert<span>X</span></a>
      <ul className="nav-links">
        <li><a href="#converter">Converter</a></li>
        <li><a href="#formats">Formats</a></li>
        <li><a href="#how">How it Works</a></li>
      </ul>
    </nav>
  )
}