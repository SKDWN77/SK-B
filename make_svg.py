# Create pristine /public/logo.svg and render /public/logo.png
svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <!-- Red Rounded Diamond Background (Rotated 45 degrees) -->
  <g id="sk-logo-group">
    <!-- Diamond Base -->
    <rect
      x="146"
      y="146"
      width="220"
      height="220"
      rx="48"
      ry="48"
      fill="#FF0000"
      transform="rotate(45 256 256)"
    />

    <!-- Protruding Bottom Red Lobe (Lower bowl of the S) -->
    <path
      d="M 214 290
         C 208 325 212 360 250 360
         C 288 360 292 325 286 290
         Z"
      fill="#FF0000"
    />

    <!-- Stylized White "S" Shape -->
    <!--
      Modeled carefully from the uploaded graphic:
      - Top terminal on the right side of upper loop
      - Thick upper curve arching over top-left
      - Dynamic spine through the center
      - Sweeping lower loop exiting through bottom-right
      - Inner red counters preserved
    -->
    <path
      d="M 292 208
         C 292 172 264 152 232 152
         C 192 152 162 182 162 226
         C 162 264 188 286 226 300
         C 264 314 282 328 282 350
         C 282 374 260 392 230 392
         C 196 392 172 372 158 350
         L 118 376
         C 140 416 182 440 232 440
         C 288 440 332 402 332 350
         C 332 308 298 284 258 270
         C 224 258 210 246 210 228
         C 210 212 224 198 244 198
         C 262 198 278 208 288 222
         Z"
      fill="#FFFFFF"
    />

    <!-- Lower white sweep extending past the right border -->
    <path
      d="M 276 338
         C 296 322 322 304 354 288
         C 362 304 358 322 342 340
         C 324 360 298 372 272 378
         L 264 354
         C 278 348 294 340 306 330
         Z"
      fill="#FFFFFF"
    />

    <!-- Circled 'B' Badge at Bottom Left -->
    <g id="badge-b" transform="translate(172, 354)">
      <!-- White separation / border -->
      <circle cx="0" cy="0" r="25" fill="#FFFFFF" />
      <!-- Red inner circle -->
      <circle cx="0" cy="0" r="21" fill="#FF0000" />
      <!-- White Letter 'B' -->
      <text
        x="0"
        y="7.5"
        text-anchor="middle"
        font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        font-size="22"
        font-weight="900"
        fill="#FFFFFF"
      >B</text>
    </g>
  </g>
</svg>
"""

with open("public/logo.svg", "w") as f:
    f.write(svg)
print("Saved public/logo.svg")
