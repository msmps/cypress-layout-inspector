import { getConfiguration } from '../configure';

const withinThreshold = (actual, target) => {
    const threshold = getConfiguration('threshold');
    return actual >= target - threshold && actual <= target + threshold;
};

export default withinThreshold;
