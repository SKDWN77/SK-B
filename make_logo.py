import subprocess

svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <!-- Filter for clean presentation -->
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <g id="sk-logo">
    <!-- Red Diamond base (square rotated 45 degrees with rounded corners) -->
    <rect
      x="141"
      y="141"
      width="230"
      height="230"
      rx="46"
      ry="46"
      fill="#FF0000"
      transform="rotate(45 256 256)"
    />

    <!-- Downward extending red lobe of the lower S bowl -->
    <path
      d="M 208 300
         C 208 300 200 366 248 366
         C 292 366 286 312 286 300
         Z"
      fill="#FF0000"
    />

    <!-- The Bold Stylized White 'S' -->
    <!-- It enters from top-right, arches over the top, cuts through waist, loops bottom, and sweeps out right -->
    <path
      d="M 296 214
         C 296 178 266 156 228 156
         C 182 156 148 190 148 238
         C 148 280 182 304 228 320
         C 272 336 288 352 288 376
         C 288 404 262 424 224 424
         C 184 424 152 398 136 368
         L 86 398
         C 114 452 166 480 226 480
         C 298 480 348 434 348 374
         C 348 324 312 296 266 280
         C 222 264 206 250 206 234
         C 206 216 222 202 244 202
         C 264 202 282 214 290 228
         Z"
      fill="#FFFFFF"
      opacity="0"
    />

    <!-- Hand-crafted exact bezier curves matching 20260701_082909.png -->
    <!-- 
      Outer White Silhouette of 'S':
      Top terminal is at ~ (295, 230)
      Arches through (240, 160) to (165, 225)
      Waist curves at (256, 275)
      Bottom curve loops around the bottom bulb and sweeps out right at (345, 340)
    -->
    <path
      d="M 288 232
         C 288 184 252 160 220 160
         C 176 160 148 194 148 236
         C 148 274 174 298 214 312
         C 256 326 278 342 278 368
         C 278 392 258 408 226 408
         C 192 408 168 390 154 366
         L 106 392
         C 130 436 174 460 228 460
         C 292 460 336 420 336 366
         C 336 322 306 296 264 280
         C 226 266 206 254 206 236
         C 206 220 220 206 242 206
         C 262 206 278 216 288 232
         Z"
      fill="#FFFFFF"
      opacity="0"
    />
  </g>
</svg>
"""

with open("public/logo.svg", "w") as f:
    f.write(svg)
print("Updated public/logo.svg")
