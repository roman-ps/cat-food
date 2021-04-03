const getNodes = (parent, selectors) => {
  const keys = Object.entries(selectors);
  let nodes = {};

  for (let [key, value] of keys) {
    nodes[key] = parent.querySelector(value);
  }

  return nodes;
};

export {getNodes}
