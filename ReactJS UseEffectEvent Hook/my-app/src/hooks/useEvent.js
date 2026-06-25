import { useRef, useLayoutEffect, useCallback } from 'react';

/**
 * Polyfill for `useEffectEvent` since it is still experimental in some environments.
 * It lets you extract non-reactive logic from a `useEffect`.
 * The returned function will always have access to the *latest* props/state
 * but it won't re-trigger the effect if it's referenced in the dependency array (or called).
 */
export function useEffectEvent(fn) {
  const ref = useRef(fn);

  useLayoutEffect(() => {
    ref.current = fn;
  });

  return useCallback((...args) => {
    const latestFn = ref.current;
    return latestFn(...args);
  }, []);
}
