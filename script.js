function showStart(){
  const nameInput = document.getElementById("playerName").value.trim()
  if(nameInput===""){
    alert("Please enter your name to start the game!")
    return
  }
  displayName.innerText = nameInput
  instructions.classList.add("hidden")
  startPage.classList.remove("hidden")
}
