const submit = document
  .getElementById("submit")
  .addEventListener("click", function () {
    var number = document.getElementById("number").value;
    const tempSelected = document.getElementById("temp-diff");
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;
    if (valueTemp == "celcious") {
      let farenheight = ((number - 32) * 5) / 9;
      document.querySelector(".result").innerHTML = `${farenheight}°C`;
    } else {
      let celcious = (number * 9) / 5 + 32;
      document.querySelector(".result").innerHTML = `${celcious}°F`;
    }
  });
