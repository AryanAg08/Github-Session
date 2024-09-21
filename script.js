let display = document.querySelector("tbody");
let button = document.querySelector("#submit_button");
let display_container = document.querySelector(".display_container");

button.addEventListener("click", () => {
  if (display_container.style.display === "none") {
    display_container.style.display = "block";
  }
  let name = document.querySelector("#member_name").value;
  let designation = document.querySelector("#designation").value;

  if (name === "" || designation === "") {
    alert("Write something");
  } else {
    let table_row = document.createElement("tr");
    let table_data_name = document.createElement("td");
    let table_data_designation = document.createElement("td");

    table_data_name.className = "column_1";
    table_data_designation.className = "column_2";

    table_data_name.innerHTML = name;
    table_data_designation.innerHTML = designation;

    table_row.appendChild(table_data_name);
    table_row.appendChild(table_data_designation);
    display.appendChild(table_row);

    document.querySelector("#member_name").value = "";
    document.querySelector("#designation").value = "";
  }
  // saveData();
});

// function saveData() {
//   localStorage.setItem("data", display.innerHTML);
// }

// function showTask() {
//   display.innerHTML = localStorage.getItem("data");
// }
// showTask();
