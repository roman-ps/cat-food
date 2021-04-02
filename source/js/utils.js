const getNodes = (parent, selectors) => {
  let nodes = {};
  const keys = Object.entries(selectors);
  console.log(keys);
  console.log(selectors);
  for (let [key, value] of keys) {
    console.log('key: ', key)
    console.log('value: ', value)
    nodes[key] = parent.querySelector(value);
    console.log(nodes[key])
  }
  console.log(nodes);

};

export {getNodes}
