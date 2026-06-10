# React useLayoutEffect Hook

`useLayoutEffect` is a version of `useEffect` that fires synchronously before the browser repaints the screen.

## Use Cases
- Measuring layout elements (like height, width, scroll position) to render tooltips or adjust styling.
- Preventing visual flicker by applying styles synchronously before layout paint.
- Comparing behavior between standard asynchronous `useEffect` and synchronous `useLayoutEffect` layout measurements.
