(function(app){

  var list = null;

  function insertFirst(node) {
    if(list === null) {
      node.next = null;
      list = node;
    } else {
      node.next = list;
      list = node;
    }
    return node;
  }

  function deleteNode(node) {
    if(list === null || node === null) {
      throw new Error('List or node can not be empty');
    }
    var head = list;
    if(head === node) {
      list =head.next;
      return;
    }
    while(head.next) {
      if(head.next === node) {
        head.next = node.next;
        break;
      }
      head = head.next;
    }
  }

  app.tryWithTestData = function() {
    list = null;
    var node5 = insertFirst({
      id: 5
    });
    var node4 = insertFirst({
      id: 4
    });
    var node3 = insertFirst({
      id: 3
    });
    var node2 = insertFirst({
      id: 2
    });
    var node1 = insertFirst({
      id: 1
    });


    deleteNode(node1);
    deleteNode(node3);
    deleteNode(node5);

    var textArea = document.getElementById('list');
    textArea.value = JSON.stringify(list, null, 2);
  }
})(window.app = {});
