const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');

function addtask(){
  if(inputbox.value == '')
  {
    alert("Please enter a task.");
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputbox.value = '';
}
listcontainer.addEventListener("click",function(taskchack){
  if(taskchack.target.tagName === "LI"){
    taskchack.target.classList.toggle("checked");
  }
  if(taskchack.target.tagName === "SPAN"){
    taskchack.target.parentNode.remove();
  }
})

