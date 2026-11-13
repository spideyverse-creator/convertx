export default function Hero() {
  return (
    <section style={{
      minHeight: '80vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '120px 20px 40px 20px',
      position: 'relative',
      zIndex: 10
    }}>
      
      {/* MAIN GLASS CARD */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '32px',
        padding: '60px 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '800px',
        width: '100%',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
        position: 'relative'
      }}>
        
        <p style={{
          color: '#c084fc',
          fontSize: '0.85rem',
          fontWeight: '600',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '24px',
          background: 'rgba(168, 85, 247, 0.1)',
          padding: '8px 16px',
          borderRadius: '50px',
          border: '1px solid rgba(168, 85, 247, 0.2)'
        }}>
          Private by Design · Free to Use
        </p>

        <h1 style={{
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          fontWeight: '900',
          lineHeight: '1.1',
          letterSpacing: '-0.03em',
          marginBottom: '24px',
          color: '#ffffff'
        }}>
          Images, meet their <br />
          <span style={{
            background: 'linear-gradient(to right, #818cf8, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>
            new format.
          </span>
        </h1>

        <p style={{
          fontSize: '1.1rem',
          color: '#94a3b8',
          maxWidth: '500px',
          marginBottom: '40px',
          lineHeight: '1.6'
        }}>
          Convert images between PNG, JPG, and WebP right in your browser. 
          Your files stay on your device.
        </p>

        <a 
          href="#converter" 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 40px',
            fontSize: '1.05rem',
            fontWeight: '600',
            color: '#ffffff',
            textDecoration: 'none',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '50px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.1)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(99, 102, 241, 0.4), inset 0 1px 1px rgba(255,255,255,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.1)';
          }}
        >
          Convert an image <span style={{ fontSize: '1.2rem' }}>↓</span>
        </a>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginTop: '32px',
          color: '#64748b',
          fontSize: '0.9rem',
          fontWeight: '500'
        }}>
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#10b981',
            boxShadow: '0 0 10px #10b981'
          }} />
          No uploads. No account. No surprises.
        </div>

      </div>
    </section>
  )
}