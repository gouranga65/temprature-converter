const submit = document
  .getElementById("submit")
  .addEventListener("click", function () {
    var number = document.getElementById("number").value;
    document.querySelector(".result").innerHTML = number;
    const tempSelected = document.getElementById("temp-diff");
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;
    // console.log(valueTemp);
    
  });
