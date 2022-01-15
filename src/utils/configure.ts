type Configuration = typeof config;

let config = {
  excludePadding: false,
  threshold: 0,
};

const configure = (opts: Partial<Configuration>) => {
  config = {
    ...config,
    ...opts,
  };
};

const getConfiguration: <T extends keyof Configuration>(
  key: T
) => Configuration[T] = (key) => config[key];

export { configure, getConfiguration };
