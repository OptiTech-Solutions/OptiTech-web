import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

/**
 * useParallax — returns scroll-driven motion values for an element.
 *
 * @param {object} opts
 * @param {number[]} opts.inputRange  - scroll progress range [start, end]  (defaults [0,1])
 * @param {number[]} opts.yRange      - translateY range in px  (e.g. [0, -80])
 * @param {number[]} opts.opacityRange - opacity range  (e.g. [1, 0.4])
 * @param {number[]} opts.scaleRange   - scale range    (e.g. [1, 1.05])
 * @param {string}   opts.offset       - IntersectionObserver-style offset
 * @returns {{ ref, y, opacity, scale }}
 */
const useParallax = ({
    inputRange = [0, 1],
    yRange = [0, -60],
    opacityRange = null,
    scaleRange = null,
    offset = ['start end', 'end start'],
} = {}) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset,
    });

    const y = useTransform(scrollYProgress, inputRange, yRange);
    const opacity = opacityRange
        ? useTransform(scrollYProgress, inputRange, opacityRange)
        : null;
    const scale = scaleRange
        ? useTransform(scrollYProgress, inputRange, scaleRange)
        : null;

    return { ref, y, opacity, scale };
};

export default useParallax;
