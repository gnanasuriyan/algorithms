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

  function insertAfterNode(prevNode, node) {
    if(!prevNode) {
      return new Error('Prev node can not be null');
    }
    var head = list;
    var findNode = null;
    if(head === prevNode) {
      findNode = head;
    }
    while(head.next && !findNode) {
      if(head.next === prevNode) {
        findNode = head.next;
      }
      head = head.next;
    }
    if(!findNode) {
      throw new Error('Unable to find previous node');
    }
    //Make a pointer connection between node and next of findNode
    node.next = findNode.next;
    //Now change the next pointer of findNode...
    findNode.next = node;
    return node;
  }

  app.tryWithTestData = function() {
    list = null;
    var node1 = insertFirst({
      id:5
    });

    var node2 = insertFirst({
      id:4
    });

    var node3 = insertFirst({
      id:1
    });

    var node4 = insertAfterNode(node3, {
      id: 2
    });

    var node5 = insertAfterNode(node4, {
      id: 3
    });

    var node6 = insertAfterNode(node1, {
      id: 6
    });
     var node7 = insertAfterNode(node6, {
      id: 7
    });

    var textArea = document.getElementById('list');
    textArea.value = JSON.stringify(list, null,2);
  }
})(window.app = {});
