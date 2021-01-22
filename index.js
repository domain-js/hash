function Main(cnf, deps) {
  const {
    hash: { key: REDIS_KEY }
  } = cnf;
  const { redis } = deps;

  const get = async key => {
    const num = await redis.hget(REDIS_KEY, key);

    return num | 0;
  };

  const set = (key, value) => redis.hset(REDIS_KEY, key, value);
  const del = key => redis.hdel(REDIS_KEY, key);

  return { get, set, del };
}

Main.Deps = ["redis"];

module.exports = Main;
