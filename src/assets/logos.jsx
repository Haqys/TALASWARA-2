import React from 'react';
import talaswaraLogoBlue from './talaswara-logo-blue.png';
import talaswaraLogoWhite from './talaswara-logo-white.png';

export { talaswaraLogoBlue, talaswaraLogoWhite };

/**
 * TALASWARA Leaf Motif Logo Component (Image Asset)
 */
export const TalaswaraLogoImage = ({ isDark = false, className = "w-16 h-16 md:w-20 md:h-20", alt = "TALASWARA Logo" }) => (
  <img 
    src={isDark ? talaswaraLogoWhite : talaswaraLogoBlue} 
    alt={alt}
    className={`object-contain transition-all duration-300 ${className}`}
  />
);

/**
 * TALASWARA Leaf Motif Logo Component (SVG Vector)
 */
export const TalaswaraLogoIcon = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg 
    viewBox="0 0 500 500" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="TALASWARA Leaf Motif"
  >
    <g fill={color}>
      {/* Top Left Segment */}
      <path d="M230 145 C200 160 165 210 150 255 L180 255 C190 220 215 175 230 145 Z" />
      <path d="M195 265 L150 265 C145 285 142 305 142 320 L185 320 L185 280 L195 265 Z" />
      <path d="M205 155 L205 245 L225 245 L225 150 C218 152 211 153 205 155 Z" />
      <path d="M205 260 L205 320 L225 320 L225 260 Z" />
      <path d="M175 195 L145 240 L160 240 L185 200 Z" />
      
      {/* Main Diagonal Stem / Midrib Axis */}
      <path d="M135 365 C175 365 230 330 250 290 L240 270 C220 310 170 345 135 345 Z" />
      <path d="M245 130 C270 180 320 230 355 260 L365 245 C330 220 285 170 260 125 Z" />
      <path d="M132 368 L245 255 L260 270 L145 380 Z" />

      {/* Top Right Triangular Segments */}
      <path d="M255 130 C280 130 330 150 365 190 L345 200 C315 170 275 150 255 145 Z" />
      <path d="M285 160 L360 220 L360 195 L295 148 Z" />
      <path d="M255 165 L255 240 L280 240 L280 180 Z" />
      <path d="M295 185 L350 235 L335 245 L290 205 Z" />

      {/* Middle Right Cross-Hatch Batik Block */}
      <path d="M270 255 L355 255 L355 270 L270 270 Z" />
      <path d="M270 280 L355 280 C345 295 330 310 315 320 L270 320 Z" />
      <path d="M295 255 L275 275 L285 275 L300 260 Z" />
      <path d="M320 255 L285 290 L295 290 L328 257 Z" />
      <path d="M345 258 L305 298 L315 298 L350 263 Z" />
      <path d="M275 258 L315 298 L305 298 L270 263 Z" />
      <path d="M295 258 L335 298 L325 298 L290 263 Z" />

      {/* Bottom Right Chevron & Triangle Motifs */}
      <path d="M245 310 L340 310 C320 345 290 370 255 385 L255 350 L285 350 L285 335 L245 335 Z" />
      <path d="M260 320 L270 330 L280 320 L290 330 L300 320 L310 330 L320 320 L320 325 L310 335 L300 325 L290 335 L280 325 L270 335 L260 325 Z" />
      <path d="M295 340 L315 340 L305 355 Z" />
      <path d="M320 335 L335 335 L325 350 Z" />

      {/* Bottom Left Triangular & Concentric Squares */}
      <path d="M145 375 C175 410 220 425 275 425 L275 405 C230 405 190 395 160 365 Z" />
      <path d="M175 370 L210 405 L200 410 L168 375 Z" />
      <path d="M195 365 L240 405 L230 410 L188 370 Z" />
      <path d="M215 360 L260 400 L255 408 L210 365 Z" />
      <path d="M255 365 L275 365 L275 390 L255 390 Z" />
      <path d="M262 372 L268 372 L268 382 L262 382 Z" fill={color} />
      <path d="M185 335 L235 380 L225 385 L180 340 Z" />
      <path d="M150 330 L200 375 L190 380 L145 335 Z" />
    </g>
  </svg>
);

/**
 * Full TALASWARA Brand Logo (Image + Typography + Slogan)
 * Automatically adapts according to active theme
 */
export const TalaswaraLogo = ({ isDark = false, className = "h-10", showSlogan = false, useImage = true }) => {
  const brandColor = isDark ? "#FFFFFF" : "#1E2050";
  const subColor = isDark ? "rgba(255,255,255,0.75)" : "rgba(30,32,80,0.75)";

  return (
    <div className={`flex items-center gap-3 select-none cursor-pointer group ${className}`}>
      {/* Brand Icon */}
      <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
        {useImage ? (
          <img 
            src={isDark ? talaswaraLogoWhite : talaswaraLogoBlue} 
            alt="TALASWARA Logo" 
            className="w-16 h-16 md:w-20 md:h-20 object-contain transition-all duration-300"
          />
        ) : (
          <TalaswaraLogoIcon 
            className="w-10 h-10 md:w-11 md:h-11 transition-all duration-300" 
            color={brandColor} 
          />
        )}
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <span 
          className="text-xl md:text-2xl font-black tracking-wider uppercase transition-colors duration-300"
          style={{ color: brandColor, letterSpacing: '0.12em' }}
        >
          TALASWARA
        </span>
        {showSlogan && (
          <span 
            className="text-[9px] md:text-[10px] font-semibold tracking-widest uppercase mt-0.5"
            style={{ color: subColor, letterSpacing: '0.18em' }}
          >
            Where Heritage Meets Sustainability
          </span>
        )}
      </div>
    </div>
  );
};
