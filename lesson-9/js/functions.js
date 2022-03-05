const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const ListValues = [];



button.onclick = function() {
  let myItem = input.value;
  input.value = '';

  
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');
    const listIcon = document.createElement('img');
    let found = ListValues.find(element => element == myItem);
    if (found === undefined) {
        found = 0;
    }
  if (myItem.trim() != "" && found == 0) {
    ListValues.push(myItem);
    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.appendChild(listIcon);
    listIcon.src = "images/delete.png";
    listBtn.className = "delete"
    //listBtn.textContent = 'Delete';
    list.appendChild(listItem);
    
  } else {
      alert("You must Enter a Book Name or Item already exist...");
  }


  listBtn.onclick = function(e) {
    list.removeChild(listItem);
    ListValues.splice(found,1);
  }
  
  
  input.focus();
}