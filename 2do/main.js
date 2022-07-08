let modalBox,
  openModal,
  closeModal,
  addBtn,
  updateBtn,
  form,
  msg,
  titleInput,
  dateInput,
  textArea,
  main1,
  taskid;
  

function initUI() {
  taskid = document.getElementById("taskid");
  addBtn = document.getElementById("addBtn");
  updateBtn = document.getElementById("updateBtn");
  
  form = document.getElementById("main1");
  msg = document.getElementById("msg");
  titleInput = document.getElementById("titleInput");
  dateInput = document.getElementById("dateInput");
  textArea = document.getElementById("description");
  main1 = document.getElementById("main1");
  modalBox = document.getElementById("modal-box");
  openModal = document.getElementById("popup-modal");
  openModal.addEventListener("click", () => {
    modalBox.style.display = "block";
  });
  closeModal = document.getElementById("close-modal");
  closeModal.addEventListener("click", () => {
    modalBox.style.display = "none";
  });
  updateBtn.style.display = "none";

  addBtn.addEventListener("click", () => modalValidation());
  refreshDisplay();
}

/* let editTask2 = document.getElementById("edit").addEventListener("click",()=>{
  modalBox.style.display="block";
},editTask) */

let modalValidation = () => {
  if (
    titleInput.value === "" ||
    dateInput.value === "" ||
    textArea.value === ""
  ) {
    msg.innerHTML = "Please fill all input fields ";
  } else {
    msg.innerHTML = "";
    collectData(taskid.value);
  }
};
/* addBtn.addEventListener('click', modalValidation) */
let data = [];

let collectData = (id) => {
  // Collect and Save user data to localStorage
  if (!id) {
    data.push({
      title: titleInput.value,
      date: dateInput.value,
      description: textArea.value,
      id: new Date().valueOf(),
    });
  } else {
    let myind = null;
    let toupdate = {};
    /* let toupdate = data.filter((item,index)=>{if(item.id===id){return item}else{myind=== index}})
    data.push(toupdate) */
    let update = data.filter((item, i) => {
      if (item.id === id) {
        myind = i;
        toupdate = {
          ...item,
          title: titleInput.value,
          date: dateInput.value,
          description: textArea.value,
        };
      }
    });
    data[myind] = toupdate;
  }

  localStorage.setItem("data", JSON.stringify(data));

  if (!id) createTasks();
  modalBox.style.display = "none";
  window.location.reload();
};

let createTasks = () => {
  //Dynamically create and display new task on page
  tasks.innerHTML += "";
  data.map((x, y) => {
    return (tasks.innerHTML += `
        <div id =${y}>
        <span><h4> ${x.title}</h4></span>
        <span>${x.date}</span>
        <p>${x.description}</p>
          <span class="options">
            
            <i  onClick ="editTask(${x.id})"  class="fas fa-edit"></i>
            <i  onClick ="deleteTask(this)" class="fas fa-trash-alt"></i>
            
            
          </span>
    </div>`);
  });

  resetForm();
};
let deleteTask = (e) => {
  e.parentElement.parentElement.remove(); // Target element(span,then div)

  data.splice(e.parentElement.parentElement.id, 1); // Remove task from array

  localStorage.setItem("data", JSON.stringify(data)); // Update array
};

let resetForm = () => {
  // Refresh inputs after creating new task
  titleInput.value = "";
  dateInput.value = "";
  textArea.value = "";
  taskid.value = "";
};

let refreshDisplay = () => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  createTasks();
};

// Edit tasks after getting previous inputs
let editTask = (id) => {
  modalBox.style.display = "block";
  let selectedTask = data.filter((item) => id === item.id);
  titleInput.value = selectedTask[0].title;
  dateInput.value = selectedTask[0].date;
  textArea.value = selectedTask[0].description;
  taskid.value = id;
  updateBtn.style.display = "block";
  addBtn.style.display = "none";
  updateBtn.addEventListener("click", (e) => {
    collectData(id);
  });
};




