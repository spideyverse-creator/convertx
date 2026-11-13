import Navbar from './Navbar'
import FooterSection from '../../sections/FooterSection'

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main>{children}</main>
      <FooterSection />
    </div>
  )
}