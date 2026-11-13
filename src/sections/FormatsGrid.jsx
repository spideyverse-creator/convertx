const formats = [
  { name: 'PNG', description: 'Lossless quality with transparency', detail: 'PNG' },
  { name: 'JPG', description: 'Compact files for photos and sharing', detail: 'JPG' },
  { name: 'WebP', description: 'Modern images with smaller file sizes', detail: 'WEBP' },
]

export default function FormatsGrid() {
  return (
    <section className="content-section formats-section" id="formats">
      <div className="section-heading">
        <p className="eyebrow">SUPPORTED OUTPUTS</p>
        <h2>The right format for the job.</h2>
      </div>
      <div className="formats-grid">
        {formats.map((format) => (
          <article className="format-card glass-panel" key={format.name}>
            <span className="format-badge">{format.detail}</span>
            <h3>{format.name}</h3>
            <p>{format.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}