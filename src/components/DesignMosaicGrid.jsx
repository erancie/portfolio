import React from 'react'

/** Portrait: 2×2 checkerboard, 3:4 tiles, large:small = 1.6. Positions repeat every 4: tl, tr, bl, br. */
function getPortraitPlacement(index) {
  const block = Math.floor(index / 4)
  const pos = index % 4
  const row = block * 2 + (pos < 2 ? 1 : 2)
  const col = pos % 2 === 0 ? 1 : 2
  const size = pos === 0 || pos === 3 ? 'large' : 'small'
  return { row, col, size }
}

const LANDSCAPE_PATTERNS = ['wide', 'wide', 'normal', 'large', 'wide', 'normal', 'large', 'wide', 'normal', 'wide', 'normal']
const MIXED_PATTERNS = ['large', 'normal', 'normal', 'wide', 'tall', 'normal', 'wide', 'tall', 'large', 'normal', 'normal']

function getMosaicSizeClass(index, variant) {
  if (variant === 'portrait') return getPortraitPlacement(index).size
  const patterns = variant === 'landscape' ? LANDSCAPE_PATTERNS : MIXED_PATTERNS
  return patterns[index % patterns.length]
}

export default function DesignMosaicGrid({ designs = [], sectionId = 'design-mosaic', title = null, className = '', variant = 'mixed' }) {
  if (!designs.length) return null

  const variantClass = variant === 'portrait' ? 'design-mosaic--portrait' : variant === 'landscape' ? 'design-mosaic--landscape' : ''
  const isPortrait = variant === 'portrait'

  return (
    <div id={sectionId} className={`design design-mosaic dc ${variantClass} ${className}`.trim()}>
      {title && (
        <h2 className="design-mosaic__title main-color fade-in">{title}</h2>
      )}
      <div className="design-mosaic__grid">
        {designs.map((d, i) => {
          const placement = isPortrait ? getPortraitPlacement(i) : null
          const sizeClass = getMosaicSizeClass(i, variant)
          return (
            <div
              key={d.name}
              className={`design-mosaic__cell design-mosaic__cell--${sizeClass}`}
              style={placement ? { gridColumn: placement.col, gridRow: placement.row } : undefined}
            >
              <img
                src={d.src}
                alt=""
                className="design-mosaic__img"
                loading="lazy"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
