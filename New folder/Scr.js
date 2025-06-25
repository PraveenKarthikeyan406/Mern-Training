function Click(){
        alert('Hello boss')
    }

function showName() {
    alert("Hello, " +document.getElementById("nameInput").value+ "!");
}

function updateTime() {
    var now = new Date();
    var time = now.toLocaleTimeString();
    document.getElementById("clock").innerHTML = time;
}

// Update the time every 1 second
setInterval(updateTime, 1000);

// Show time immediately on load
updateTime(); 

function dum(){
    let a=10;
    return 10
}
dum();


