export interface TreeNode {
  id: number;
  type: 'Device' | 'Folder';
  parentId: number | undefined;
  children?: Array<TreeNode>;
  indentation?: number;
}

// Data example :
// // ElementList[0]= Folder
// // ElementList[1]= Device
// // ElementList[2]= Device
// // ElementList[3]= Folder

// // -> Action Click on ElementList[0].

// // ElementListUpdated.

// // ElementList[0]=Folder
// // ElementList[0][0]=Device
// // ElementList[0][1]=Device
// // ElementList[0][2]=Folder
// // ElementList[1] = Device
// // ElementList[2] = Device
// // ElementList[3] = Folder

// // -> Action Click on ElementList[0][2].

// // ElementList[0]=Folder
// // ElementList[0][0]=Device
// // ElementList[0][1]=Device
// // ElementList[0][2]=Folder
// // ElementList[0][2][1]=Folder
// // ElementList[0][2][2]=Folder
// // ElementList[1] = Device
// // ElementList[2] = Device
// // ElementList[3] = Folder

// // -> Action Click on ElementList[3].

// // ElementList[0]=Folder
// // ElementList[0][0]=Device
// // ElementList[0][1]=Device
// // ElementList[0][2]=Folder
// // ElementList[0][2][1]=Folder
// // ElementList[0][2][2]=Folder
// // ElementList[1] = Device
// // ElementList[2] = Device
// // ElementList[3] = Folder
// // ElementList[3][0]=Device
// // ElementList[3][1]=Device
// // ElementList[3][2]= Device

const topologyCustomBaseNode: Array<TreeNode> = [
  {
    id: 9999,
    parentId: null,
    type: 'Folder',
  },
];

const firstNode: Array<TreeNode> = [
  {
    id: 0,
    parentId: 9999,
    type: 'Folder',
  },
  {
    id: 1,
    parentId: 9999,
    type: 'Device',
  },
  {
    id: 2,
    parentId: 9999,
    type: 'Device',
  },
  {
    id: 3,
    parentId: 9999,
    type: 'Folder',
  },
];

const secondNode: Array<TreeNode> = [
  {
    id: 4,
    parentId: 0,
    type: 'Device',
  },
  {
    id: 5,
    parentId: 0,
    type: 'Device',
  },
  {
    id: 6,
    parentId: 0,
    type: 'Folder',
  },
];

const thirdNode: Array<TreeNode> = [
  {
    id: 7,
    parentId: 6,
    type: 'Device',
  },
  {
    id: 8,
    parentId: 6,
    type: 'Device',
  },
];

const fourthNode: Array<TreeNode> = [
  {
    id: 9,
    parentId: 3,
    type: 'Device',
  },
  {
    id: 10,
    parentId: 3,
    type: 'Device',
  },
  {
    id: 11,
    parentId: 3,
    type: 'Folder',
  },
];

const expand = (clickedNode: TreeNode): Array<TreeNode> => {
  const result: Array<TreeNode> = [];

  if (!clickedNode.parentId) {
    clickedNode.indentation = 0;
  }
  result.push(clickedNode);

  switch (clickedNode.id) {
    case 9999: // Custom topo
      clickedNode.children = firstNode;
      clickedNode.children.map(
        (c) => (c.indentation = clickedNode.indentation + 1)
      );
      break;
    case 0:
      clickedNode.children = secondNode;
      clickedNode.children.map(
        (c) => (c.indentation = clickedNode.indentation + 1)
      );
      break;
    case 3:
      clickedNode.children = fourthNode;
      clickedNode.children.map(
        (c) => (c.indentation = clickedNode.indentation + 1)
      );
      break;
    case 6:
      clickedNode.children = thirdNode;
      clickedNode.children.map(
        (c) => (c.indentation = clickedNode.indentation + 1)
      );
      break;
    default:
      break;
  }

  return result.concat(clickedNode.children);
};

export {
  expand,
  topologyCustomBaseNode,
  firstNode,
  secondNode,
  thirdNode,
  fourthNode,
};
