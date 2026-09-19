import os

# We will generate a high-res SVG that replicates the user's uploaded logo exactly.
# The user's logo has:
# 1. Vibrant red rounded diamond (square rotated 45 degrees, rounded corners).
# 2. Distinctive white 'S' cutting through it:
#    - Upper loop: curved over the top, rounded/flat terminal at middle-right.
#    - Upper inner counter: smooth red shape.
#    - Central spine: bold, flowing down-right.
#    - Lower loop: curves around the red inner core and exits at bottom-right past the diamond border.
#    - Bottom red lobe: protrudes downward past the diamond corner.
# 3. Circled 'B' badge at bottom-left:
#    - Red circle with white letter 'B'.
#    - Positioned at lower-left with a crisp separation.

svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <!-- Optional soft shadow -->
    <filter id="logo-shadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#FF0000" flood-opacity="0.3"/>
    </filter>
  </defs>

  <g id="sk-brand-logo">
    <!-- Main Red Diamond Base -->
    <!-- Center at (300, 290) -->
    <rect
      x="170"
      y="160"
      width="260"
      height="260"
      rx="56"
      ry="56"
      fill="#FF0000"
      transform="rotate(45 300 290)"
    />

    <!-- Lower Red Lobe (extends the bottom point smoothly for the lower S counter) -->
    <path
      d="M 240 330
         C 240 330 236 400 286 400
         C 336 400 330 330 330 330
         Z"
      fill="#FF0000"
    />

    <!-- The Bold White Stylized 'S' -->
    <!-- We draw the complete outer contour of the white S -->
    <path
      d="M 314 246
         C 314 212 288 190 252 190
         C 206 190 178 222 178 266
         C 178 304 204 326 244 338
         C 282 350 300 366 300 392
         C 300 422 274 446 234 446
         C 192 446 162 422 148 392
         L 96 422
         C 120 472 172 506 236 506
         C 312 506 364 456 364 388
         C 364 336 326 306 278 290
         C 240 278 228 268 228 252
         C 228 238 240 226 258 226
         C 278 226 294 238 304 254
         Z"
      fill="#FFFFFF"
      opacity="0"
    />

    <!-- White 'S' Glyph modeled after the uploaded artwork -->
    <!--
      Notice:
      The top hook starts at the right, sweeps over top to left.
      The spine slopes diagonally down to right.
      The bottom stroke sweeps out to bottom-right, breaking the diamond contour!
    -->
    <path
      d="M 312 250
         C 312 195 275 168 228 168
         C 168 168 138 212 138 272
         C 138 322 175 352 225 368
         L 248 375
         C 278 385 292 398 292 418
         C 292 442 268 458 235 458
         C 198 458 172 440 158 412
         L 100 440
         C 126 492 174 518 238 518
         C 308 518 356 472 356 414
         C 356 358 316 328 266 312
         L 242 305
         C 214 295 200 282 200 262
         C 200 240 216 226 238 226
         C 258 226 276 236 288 255
         Z"
      fill="#FFFFFF"
      opacity="0"
    />

    <!-- Let's construct the exact positive white shape on top of the red background: -->
    <!--
      Top loop:
        Outer curve: from (310, 240) up through (230, 160) to (140, 230)
        Spine: through (240, 310)
        Lower loop: curves through (150, 410) under (240, 460) and sweeps out right to (360, 370)
    -->
    <path
      d="M 312 254
         C 302 205 264 172 218 172
         C 162 172 128 216 128 276
         C 128 328 166 360 216 376
         C 260 390 282 408 282 434
         C 282 462 254 482 216 482
         C 176 482 144 456 130 424
         L 72 454
         C 98 510 150 540 218 540
         C 292 540 344 494 344 430
         C 344 366 298 336 248 320
         C 208 308 190 292 190 268
         C 190 242 208 224 232 224
         C 256 224 274 238 286 262
         Z"
      fill="#FFFFFF"
      opacity="0"
    />

    <!-- Streamlined clean SVG representation matching the logo graphic -->
    <!-- 1. Top white arc of S -->
    <path
      d="M 285 240
         C 285 190 250 162 208 162
         C 152 162 118 206 118 268
         C 118 318 152 346 200 362
         C 245 376 270 394 270 424
         C 270 454 242 474 206 474
         C 168 474 138 450 124 420
         L 70 448
         C 94 502 144 532 208 532
         C 280 532 332 488 332 422
         C 332 360 290 328 242 312
         C 202 298 182 282 182 258
         C 182 232 200 216 222 216
         C 244 216 260 228 270 248
         Z"
      fill="#FFFFFF"
      opacity="0"
    />

  </g>
</svg>
"""

# Let's inspect the exact SVG that matches the uploaded image visually
