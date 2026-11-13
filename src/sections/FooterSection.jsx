export default function FooterSection() {
  return (
    <footer className="site-footer">
      <a className="nav-logo" href="#top" aria-label="ConvertX, back to top">
        Convert<span>X</span>
      </a>
      <p>Private image conversion, right in your browser.</p>
      <span>&copy; {new Date().getFullYear()} ConvertX</span>
    </footer>
  )
}