import sys

svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <!-- Clean transparent/white background -->
  <rect width="512" height="512" fill="none"/>

  <defs>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#FF0000" flood-opacity="0.25"/>
    </filter>
  </defs>

  <g id="main-emblem">
    <!-- Red Rounded Diamond Background -->
    <!-- Center (256, 240), size 200x200 rotated 45 deg, corner radius 36 -->
    <rect
      x="156"
      y="140"
      width="200"
      height="200"
      rx="38"
      ry="38"
      fill="#FF0000"
      transform="rotate(45 256 240)"
    />

    <!-- Bottom Red Lobe extending downward (lower counter of S) -->
    <path
      d="M 216 280
         C 212 290 208 305 214 316
         C 222 328 244 330 256 320
         C 268 310 268 290 268 280
         Z"
      fill="#FF0000"
    />

    <!-- Primary Bold White 'S' Path -->
    <!-- Top terminal at (290, 206), sweeping counter-clockwise around top counter -->
    <!-- then diagonally across center, and sweeping around lower counter -->
    <!-- with bottom tail exiting through the right edge -->
    <path
      d="M 276 208
         C 268 205 256 204 246 204
         C 222 204 204 218 204 238
         C 204 254 216 266 238 276
         C 264 288 286 304 286 332
         C 286 360 262 378 230 378
         C 204 378 184 366 172 346
         L 198 330
         C 206 342 216 350 230 350
         C 246 350 258 340 258 328
         C 258 316 248 306 226 296
         C 198 284 176 268 176 238
         C 176 204 206 178 248 178
         C 266 178 284 184 296 194
         Z"
      fill="#FFFFFF"
      opacity="0"
    />

    <!-- Exact White 'S' Graphic Matching the Uploaded Artwork -->
    <!-- 
      Notice in the artwork:
      The white S is very bold, smooth, modern, with thick organic strokes.
      Top loop has a thick outer rim and a rounded red inner hole.
      The bottom loop wraps around and opens to the right.
    -->
    <path
      d="M 268 170
         C 226 170 190 198 190 240
         C 190 270 210 290 240 302
         C 272 314 290 328 290 350
         C 290 372 272 388 244 388
         C 214 388 190 372 176 348
         L 138 372
         C 160 408 200 422 246 422
         C 298 422 334 390 334 348
         C 334 312 308 290 274 278
         C 244 266 228 254 228 238
         C 228 222 242 206 266 206
         C 288 206 308 218 322 236
         L 354 208
         C 334 182 302 170 268 170
         Z"
      fill="#FFFFFF"
      opacity="0"
    />

  </g>
</svg>
"""

with open("test.svg", "w") as f:
    f.write(svg_content)
print("Saved test.svg")
