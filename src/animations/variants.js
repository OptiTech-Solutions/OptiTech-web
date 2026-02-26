/**
 * Shared Framer Motion animation variants for the OptiTech portfolio.
 * Import these in each section component for consistent, premium animations.
 */

// Generic viewport config — triggers whenever 15% of element is visible.
// once: false means entrance animations replay each time the element scrolls back into view.
export const defaultViewport = { once: false, amount: 0.15 };

// ─────────────────────────────────────────
// ENTRANCE VARIANTS
// ─────────────────────────────────────────

/** Fade + big rise from below */
export const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

/** Dramatic slide in from left */
export const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

/** Dramatic slide in from right */
export const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

/** Zoom + fade in with spring */
export const zoomIn = {
    hidden: { opacity: 0, scale: 0.7, y: 40 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 120, damping: 14 },
    },
};

/** Flip card in from top with perspective tilt */
export const flipIn = {
    hidden: { opacity: 0, rotateX: -30, y: 60, scale: 0.95 },
    visible: {
        opacity: 1,
        rotateX: 0,
        y: 0,
        scale: 1,
        transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
};

/** Scale up from nothing with spring */
export const popIn = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 200, damping: 18 },
    },
};

/** Pure fade */
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
};

// ─────────────────────────────────────────
// STAGGER CONTAINERS
// ─────────────────────────────────────────

/** Stagger container — wraps children that each have their own variant */
export const staggerContainer = (stagger = 0.15, delayChildren = 0.1) => ({
    hidden: {},
    visible: {
        transition: {
            staggerChildren: stagger,
            delayChildren,
        },
    },
});

/** Fast stagger for many items */
export const staggerContainerFast = staggerContainer(0.08, 0.05);

/** Slow stagger for big, dramatic reveals */
export const staggerContainerSlow = staggerContainer(0.25, 0.2);
