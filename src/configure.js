let config = {
    excludePadding: false,
};

const configure = opts => {
    config = {
        ...config,
        ...opts,
    };
};

const getConfiguration = (key = undefined) => {
    if (key !== undefined) return config[key];
    return config;
};

export { configure, getConfiguration };
