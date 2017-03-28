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
  }

  app.tryWithTestData = function() {
    insertFirst({
      id: 1
    });
    insertFirst({
      id: 2
    });
    insertFirst({
      id: 3
    });
    var textArea = document.getElementById('list');
    textArea.value = JSON.stringify(list, null,2);
  }
})(window.app = {});
