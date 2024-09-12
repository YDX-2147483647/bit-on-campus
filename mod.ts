import { withTimeout } from "jsr:@es-toolkit/es-toolkit";

/**
 * Determine if on campus by trying to connect 10.0.0.55.
 * @param ms The timeout duration in milliseconds.
 * @returns On campus or not, a promise that is never rejected.
 */
export function on_campus(ms: number = 200): Promise<boolean> {
  return withTimeout(() => fetch("http://10.0.0.55/srun_portal_success"), ms)
    .then(() => true, () => false);
}

let cache: boolean | undefined;

/**
 * Determine if on campus by trying to connect 10.0.0.55.
 * @param ms The timeout duration in milliseconds, only used in the first time.
 * @returns On campus or not, a promise that is never rejected.
 */
export async function on_campus_cached(ms: number = 200): Promise<boolean> {
  // Modified from `once` of es-toolkit

  if (cache !== undefined) {
    return cache;
  }

  const result = await on_campus(ms);
  cache = result;
  return result;
}
