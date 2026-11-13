export default function ContactSection() {
  const socials = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/aman_905__/", // Apna link daal dena
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      color: "#E1306C" // Instagram Pink
    },
    {
      name: "GitHub",
      url: "https://github.com/spideyverse-creator", // Apna link daal dena
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
      color: "#ffffff" // GitHub White
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aman-maniyar-374608300/", // Apna link daal dena
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      color: "#0077b5" // LinkedIn Blue
    }
  ];

  return (
    <section id="contact" style={{ padding: '80px 20px 40px 20px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
      
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        padding: '50px 30px',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
      }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '10px' }}>Let's Connect</h2>
        <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Feel free to reach out on any of these platforms.</p>
        
        {/* Social Icons Container */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              style={{ '--hover-color': social.color }}
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        <p style={{ marginTop: '40px', color: '#475569', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} ConvertX. All rights reserved.
        </p>
      </div>
    </section>
  )
}