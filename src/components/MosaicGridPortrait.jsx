import React from 'react'

// 1 grid, 8 columns. Row 2: 3fr, 5fr (2 tiles). Row 3: 1fr empty, 4fr, 3fr (2 tiles). Row 1 optional title above col 4.
const PLACEMENT = [
  { col: '1 / span 3', row: 2 },
  { col: '4 / span 5', row: 2 },
  { col: '2 / span 4', row: 3 },
  { col: '6 / span 3', row: 3 },
]

export default function MosaicGridPortrait({ designs = [], variant = 'portrait', title = null }) {
  const items = designs.slice(0, 4)

  if (!items.length) return null

  const isLandscape = variant === 'landscape'

  return (
    <div className={`mosaic-grid-portrait ${isLandscape ? 'mosaic-grid-portrait--landscape' : ''} ${title ? 'mosaic-grid-portrait--has-title' : ''}`}>
      <div className="mosaic-grid-portrait__grid">
        {title && (
          <div className="mosaic-grid-portrait__title" style={{ gridColumn: '4 / -1', gridRow: 1 }}>
            <h2>{title}</h2>
          </div>
        )}
        {items.map((d, i) => (
          <div
            key={d.name}
            className="mosaic-grid-portrait__cell"
            style={{ gridColumn: PLACEMENT[i].col, gridRow: PLACEMENT[i].row }}
          >
            <img
              src={d.src}
              alt=""
              className="mosaic-grid-portrait__img"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
