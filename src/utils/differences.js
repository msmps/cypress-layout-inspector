const calculateDifferences = (source, target) => ({
    top: source.top - target.top,
    left: source.left - target.left,
    right: -(source.right - target.right),
    bottom: -(source.bottom - target.bottom),
});

export default calculateDifferences;
