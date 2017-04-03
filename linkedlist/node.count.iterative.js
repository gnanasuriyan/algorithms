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

  var getCount = function() {
    var head = list;
    var count = 0;
    while(head.next) {
      ++count;
      head = head.next;
      if(!head.next) {
        ++count;
      }
    }
    document.getElementById('count').innerText=count;
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
    var textArea = document.getElementById('list');
    textArea.value = JSON.stringify(list, null, 2);
    getCount();
  }
})(window.app = {});
