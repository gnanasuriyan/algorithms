(function(app){

  var list = null;

  function insertLast(node) {
    if(list === null) {
      node.next = null;
      list = node;
    } else {
      //traverse the list and find the last node
      var lastNode = list;

      while(lastNode.next) {
        lastNode = lastNode.next;
      }
      //set node next as null;
      node.next = null;
      //point last node next to new node.
      lastNode.next = node;
    }
  }

  app.tryWithTestData = function() {
    insertLast({
      id: 1
    });
    insertLast({
      id: 2
    });
    insertLast({
      id: 3
    });
    var textArea = document.getElementById('list');
    textArea.value = JSON.stringify(list, null,2);
  }
})(window.app = {});
