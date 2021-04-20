/**
 * Limits the rate at which a function can fire.
 */
export const debounce = (delay: number, fn: () => void): (() => void) => {
	let timer;

	return (...argList) => {
		if (timer) clearTimeout(timer);

		timer = setTimeout(() => {
			fn(...argList);
			timer = null;
		}, delay);
	};
};
