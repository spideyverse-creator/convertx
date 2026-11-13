const steps = [
  {
    number: '01',
    title: 'Choose an image',
    description: 'Drop an image into the converter or browse for a file on your device.',
  },
  {
    number: '02',
    title: 'Pick a format',
    description: 'Choose PNG, JPG, or WebP as the format you want to use.',
  },
  {
    number: '03',
    title: 'Convert and download',
    description: 'Convert your image, then download the finished file to your device.',
  },
]

export default function HowItWorks() {
  return (
    <section className="content-section" id="how">
      <div className="section-heading">
        <p className="eyebrow">HOW IT WORKS</p>
        <h2>Convert an image in three simple steps.</h2>
        <p>Your images are converted right in your browser and stay on your device.</p>
      </div>

      <ol className="steps-grid">
        {steps.map((step) => (
          <li className="step-card glass-panel" key={step.number}>
            <span className="step-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
