const data = [
  {
    folder: true,
    title: 'Pictures',
    children: [
      {
        title: 'logo.png'
      },
      {
        folder: true,
        title: 'Vacations',
        children: [
          {
            title: 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    folder: true,
    title: 'Desktop',
    children: [
      {
        folder: true,
        title: 'screenshots',
        children: null
      }
    ]
  },
  {
    folder: true,
    title: 'Downloads',
    children: [
      {
        folder: true,
        title: 'JS',
        children: null
      },
      {
        title: 'nvm-setup.exe'
      },
      {
        title: 'node.exe'
      }
    ]
  },
  {
    title: 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

function createTree(root, arr) {
  root.append(createTreeDom(arr));
}

function createTreeDom(arr) {
  let ul = document.createElement('ul');
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = arr[i].title;
    if (Array.isArray(arr[i].children)) {
      let childrenUl = createTreeDom(arr[i].children);
      if (childrenUl) {
        li.append(childrenUl);
      }
    }
    ul.append(li);
  }

  return ul;
}

createTree(rootNode, data);