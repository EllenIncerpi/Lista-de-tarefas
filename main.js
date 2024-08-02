function addNewTask() {
    var list = document.getElementById("list");
    var text = document.getElementById("task_name").value;
    var listItem = document.createElement("li");
  
    const textElement = document.createTextNode("text");
    listItem.appendChild(textElement);
    listItem.appendChild(listItem);
  
  }