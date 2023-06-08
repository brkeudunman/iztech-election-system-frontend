export function getLeafNodes(data) {
  let leafNodes = [];

  for (let item of data) {
    if (!item.superOrganization) {
      leafNodes.push(item);
    } else {
      leafNodes.push(...getLeafNodes([item.superOrganization]));
    }
  }

  return leafNodes;
}
