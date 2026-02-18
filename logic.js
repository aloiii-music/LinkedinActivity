let Connection_Count_El = document.getElementById("Connection_Count")
let Connection_Count = 0;
function AddConnnection(){
    Connection_Count +=1
    Connection_Count_El.textContent = Connection_Count
}

// Toggle Button
const toggleBtn = document.getElementById('toggle-mode');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});