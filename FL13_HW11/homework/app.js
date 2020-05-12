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
    let container = document.createElement('span');
    let icon = document.createElement('i');
    if (arr[i].folder !== true) {
      icon.innerHTML = 'insert_drive_file';
      icon.className = 'material-icons file-icon';
    } else {
      icon.innerHTML = 'folder';
      icon.className = 'material-icons folder-icon';
    }
    container.append(icon, arr[i].title);
    let li = document.createElement('li');
    if (arr[i].folder !== true) {
      li.className = 'file';
    } else {
      li.className = 'folder';
      container.addEventListener('click', function () {
        arr[i].opened = !arr[i].opened;
        if (arr[i].opened === true) {
          icon.innerHTML = 'folder_open';
          if (li.lastChild.nodeName === 'UL' || li.lastChild.nodeName === 'DIV') {
            li.lastChild.classList.remove('hidden');
          }
        } else {
          icon.innerHTML = 'folder';
          if (li.lastChild.nodeName === 'UL' || li.lastChild.nodeName === 'DIV') {
            li.lastChild.classList.add('hidden');
          }
        }
      })
    }
    let menuBlock = document.createElement('div');
    menuBlock.classList.add('menu-block')
    const renameButton = document.createElement('button');
    renameButton.append('Rename')
    const deleteButton = document.createElement('button');
    deleteButton.append('Delete item')
    menuBlock.append(renameButton)
    menuBlock.append(deleteButton)
    container.append(menuBlock);
    container.addEventListener('contextmenu', event => {
      event.preventDefault();
      event.stopPropagation();
      menuBlock.classList.toggle('active')
    }, false);

    menuBlock.addEventListener('click', function (e) {
      e.stopPropagation();
    })

    document.addEventListener('click', event => {
      if (!event.target !== menuBlock) {
        menuBlock.classList.remove('active');
      }
    }, false);

    li.append(container);
    if (Array.isArray(arr[i].children)) {
      let childrenUl = createTreeDom(arr[i].children);
      childrenUl.classList.add('hidden')
      if (childrenUl) {
        li.append(childrenUl);
      }
    } else if (arr[i].folder === true && arr[i].children === null) {
      let folderIsEmpty = document.createElement('div');
      folderIsEmpty.classList.add('hidden')
      folderIsEmpty.innerHTML = 'Folder is empty';
      folderIsEmpty.classList.add('text');
      li.append(folderIsEmpty);
    }

    ul.append(li);

  }

  return ul;
}

createTree(rootNode, data);