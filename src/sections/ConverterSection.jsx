import { useEffect, useState } from 'react'

const outputTypes = {
  png: 'image/png',
  jpg: 'image/jpeg',
  webp: 'image/webp',
}

const supportedInputTypes = new Set([
  'image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/bmp', 'image/avif',
])

function formatBytes(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default function ConverterSection() {
  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState('')
  const [outputFormat, setOutputFormat] = useState('png')
  const [converted, setConverted] = useState(null)
  const [error, setError] = useState('')
  const [isConverting, setIsConverting] = useState(false)

  useEffect(() => {
    if (!previewUrl) return undefined
    return () => URL.revokeObjectURL(previewUrl)
  }, [previewUrl])

  useEffect(() => {
    if (!converted?.url) return undefined
    return () => URL.revokeObjectURL(converted.url)
  }, [converted])

  function chooseFile(nextFile) {
    if (isConverting) return
    setConverted(null)
    setError('')

    if (!supportedInputTypes.has(nextFile.type)) {
      setFile(null)
      setPreviewUrl('')
      setError('Choose a PNG, JPG, WebP, GIF, BMP, or AVIF image.')
      return
    }
    setFile(nextFile)
    setPreviewUrl(URL.createObjectURL(nextFile))
  }

  function handleFileChange(event) {
    const [nextFile] = event.target.files ?? []
    if (nextFile) chooseFile(nextFile)
    event.target.value = ''
  }

  function handleDrop(event) {
    event.preventDefault()
    if (isConverting) return
    const [nextFile] = event.dataTransfer.files
    if (nextFile) chooseFile(nextFile)
  }

  async function convertImage() {
    if (!file) return
    setIsConverting(true)
    setConverted(null)
    setError('')
    let bitmap

    try {
      bitmap = await createImageBitmap(file)
      const canvas = document.createElement('canvas')
      canvas.width = bitmap.width
      canvas.height = bitmap.height

      const context = canvas.getContext('2d')
      if (!context) throw new Error('Your browser could not start the image converter.')

      if (outputFormat === 'jpg') {
        context.fillStyle = '#ffffff'
        context.fillRect(0, 0, canvas.width, canvas.height)
      }

      context.drawImage(bitmap, 0, 0)
      const blob = await new Promise((resolve) => {
        canvas.toBlob(resolve, outputTypes[outputFormat], 0.92)
      })

      if (!blob) throw new Error('The image could not be converted. Please try another file.')
      if (blob.type !== outputTypes[outputFormat]) {
        throw new Error(`${outputFormat.toUpperCase()} export is not supported by this browser.`)
      }

      const baseName = file.name.replace(/\.[^.]+$/, '') || file.name
      setConverted({
        url: URL.createObjectURL(blob),
        name: `${baseName}.${outputFormat}`,
        size: blob.size,
      })
    } catch (conversionError) {
      setError(conversionError instanceof Error ? conversionError.message : 'Conversion failed.')
    } finally {
      bitmap?.close()
      setIsConverting(false)
    }
  }

  return (
    <section id="converter" style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
      
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p style={{ color: '#a855f7', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 'bold' }}>THE CONVERTER</p>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '10px 0' }}>One image. A format that fits.</h2>
        <p style={{ color: '#94a3b8' }}>Drop in an image, choose an output, and download the result.</p>
      </div>

      {/* CONVERTER GLASS CARD */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        padding: '40px',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.15)'
      }}>
        
        {/* DROP ZONE */}
        <label
          htmlFor="image-file"
          onDragOver={(event) => event.preventDefault()}
          onDrop={handleDrop}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            padding: '50px 20px', border: '2px dashed rgba(255, 255, 255, 0.2)', borderRadius: '16px',
            cursor: 'pointer', transition: 'all 0.3s ease', background: 'rgba(255,255,255,0.02)'
          }}
        >
          <input
            accept="image/png,image/jpeg,image/webp,image/gif,image/bmp,image/avif"
            style={{ display: 'none' }}
            disabled={isConverting}
            id="image-file"
            onChange={handleFileChange}
            type="file"
          />
          {previewUrl ? (
            <img src={previewUrl} alt="Selected" style={{ maxHeight: '150px', borderRadius: '10px', marginBottom: '20px' }} />
          ) : (
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '15px' }}>+</div>
          )}
          <span style={{ fontSize: '1.2rem', fontWeight: '600', color: '#fff' }}>
            {file ? file.name : 'Drop your image here'}
          </span>
          <span style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '8px' }}>
            {file ? `${formatBytes(file.size)} · Click to choose another` : 'or click to browse · PNG, JPG, WebP, GIF, BMP, AVIF'}
          </span>
        </label>

        {/* CONTROLS */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ color: '#94a3b8', fontWeight: '500' }}>Convert to</span>
            <select
              disabled={isConverting}
              value={outputFormat}
              onChange={(e) => { setOutputFormat(e.target.value); setConverted(null); setError(''); }}
              style={{
                background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)',
                padding: '10px 20px', borderRadius: '10px', outline: 'none', fontSize: '1rem', cursor: 'pointer'
              }}
            >
              <option value="png" style={{ color: 'black' }}>PNG</option>
              <option value="jpg" style={{ color: 'black' }}>JPG</option>
              <option value="webp" style={{ color: 'black' }}>WebP</option>
            </select>
          </div>

          <button
            disabled={!file || isConverting}
            onClick={convertImage}
            style={{
              padding: '14px 32px', fontSize: '1rem', fontWeight: '600', color: '#fff',
              background: !file ? 'rgba(255,255,255,0.1)' : 'linear-gradient(135deg, #6366f1, #a855f7)',
              border: 'none', borderRadius: '10px', cursor: !file ? 'not-allowed' : 'pointer',
              boxShadow: !file ? 'none' : '0 0 20px rgba(168, 85, 247, 0.4)', transition: 'all 0.3s'
            }}
          >
            {isConverting ? 'Converting…' : 'Convert Image'}
          </button>
        </div>

        {/* ERROR MESSAGE */}
        {error && <p style={{ color: '#ef4444', marginTop: '20px', textAlign: 'center' }}>{error}</p>}

        {/* RESULT */}
        {converted && (
          <div style={{
            marginTop: '30px', padding: '20px', background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '12px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center'
          }}>
            <div>
              <strong style={{ display: 'block', color: '#10b981', fontSize: '1.1rem' }}>{converted.name}</strong>
              <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{formatBytes(converted.size)} · Ready</span>
            </div>
            <a href={converted.url} download={converted.name} style={{
              padding: '10px 24px', background: '#10b981', color: 'white', borderRadius: '8px',
              fontWeight: '600', textDecoration: 'none'
            }}>
              Download
            </a>
          </div>
        )}
      </div>
    </section>
  )
}