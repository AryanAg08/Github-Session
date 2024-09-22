function display(event) {
    event.preventDefault(); 
    var n1 = document.getElementById("1n").value;
    var d1 = document.getElementById("1d").value;
    var n2 = document.getElementById("2n").value;
    var d2 = document.getElementById("2d").value;
    var n3 = document.getElementById("3n").value;
    var d3 = document.getElementById("3d").value;
    var n4 = document.getElementById("4n").value;
    var d4 = document.getElementById("4d").value;
    var show = document.getElementById("show");
    show.innerHTML = `
        <h3>Member Details:</h3>
        <p>Member 1: ${n1} - ${d1}</p>
        <p>Member 2: ${n2} - ${d2}</p>
        <p>Member 3: ${n3} - ${d3}</p>
        <p>Member 4: ${n4} - ${d4}</p>
    `;
}