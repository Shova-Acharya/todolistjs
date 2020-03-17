 function todoList(){ 
    //1. Creating a new Div
    var newDiv = document.createElement('div');
    newDiv.id = "newTask";
    
    //2. Creating checklist
    var newItem = document.createElement('input');
    newItem.id = 'newToDo';
    newItem.type = 'checkbox';
    
    //3. creating text tag
    var span = document.createElement('label');
    span.className = "newText";
     console.log(span.className);
    
    //4. Creating delete button
    var del = document.createElement('button');
    del.innerHTML = "Delete"
    del.onclick = function(){
        var remove = document.activeElement.parentElement;
        remove.parentNode.removeChild(remove);
    };
    
    //5. Taking the text
    var item = document.getElementById("toDoText");
    var itemText = document.createTextNode(item.value);
    span.appendChild(itemText);
     
    //6. Creating a family
    newDiv.appendChild(newItem);
    newDiv.appendChild(span);
    newDiv.appendChild(del);
    
    //7. Adding new div 
    document.getElementById('add').appendChild(newDiv);
}





