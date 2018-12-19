var tree = {
  id: 0,
  name: 'root',
  left: {
    id: 1,
    name: 'Simon',
    left: {
      id: 3,
      name: 'Carl',
      left: {
        id: 7,
        name: 'Lee',
        left: {
          id: 11,
          name: 'Fate'
        }
      },
      right: {
        id: 8,
        name: 'Annie',
        left: {
          id: 12,
          name: 'Saber'
        }
      }
    },
    right: {
      id: 4,
      name: 'Tony',
      left: {
        id: 9,
        name: 'Candy'
      }
    }
  },
  right: {
    id: 2,
    name: 'right',
    left: {
      id: 5,
      name: 'Carl'
    },
    right: {
      id: 6,
      name: 'Carl',
      right: {
        id: 10,
        name: 'Kai'
      }
    }
  }
};

// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name) {
  var name;
  function find(obj) {
    if (obj != null) {
      if (obj.name == name) {
        id = obj.id;
      }
      find(obj.left);
      find(obj.right);
    }
  }
  find(tree);
  return id;
}

// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(id) {
  var id;
  function find(obj) {
    if (obj != null) {
      if (obj.id == id) {
        name = obj.name;
      }
      find(obj.left);
      find(obj.right);
    }
  }
  find(tree);
  return name;
}

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR() {
  function pretraversal(obj) {
    if (obj != null) {
      console.log(obj.name);
      pretraversal(obj.left);
      pretraversal(obj.right);
    }
  }
}

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR() {
  function midtraversal(obj) {
    if (obj != null) {
      midtraversal(obj.left);
      console.log(obj.name);
      midtraversal(obj.right);
    }
  }
}

// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD() {
  function posttraversal(obj) {
    if (obj != null) {
      posttraversal(obj.left);
      posttraversal(obj.right);
      console.log(obj.name);
    }
  }
}
console.log(findIdByName('Kai'));
console.log(findNameById(10));
