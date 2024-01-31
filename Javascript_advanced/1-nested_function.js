var globalVariable = "Welcome";
function outer() {
  alert(globalVariable);
  var course = "Holberton";
  inner();
  function inner() {
    alert(globalVariable + " " + course);
    var exclamation = "!";
    inception();
  }
  function inception() {
    alert(globalVariable + " " + course + "!");
  }
}
outer();
