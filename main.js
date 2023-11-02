function recordAttendance() {
  const name = document.getElementById("name").value;
  const className = document.getElementById("class").value;
  const seatNumber = document.getElementById("seat").value;

  if (name.trim() === "" || className.trim() === "" || seatNumber.trim() === "") {
    alert("Please fill in all fields.");
    return;
  }

  const listItem = document.createElement("li");
  listItem.innerText = name + " - Class: " + className + " - Seat: " + seatNumber;

  document.getElementById("list").appendChild(listItem);

  document.getElementById("name").value = "";
  document.getElementById("class").value = "";
  document.getElementById("seat").value = "";
}