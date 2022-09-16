// Triangle Perimeter Assignment Start Code

// When Calculate is Clicked
document.getElementById("calculate").addEventListener("click", calculate);

function calculate() {
    // Get Coordinates
    let xA = document.getElementById("xA").value;
    let yA = document.getElementById("yA").value;
    let xB = document.getElementById("xB").value;
    let yB = document.getElementById("yB").value;
    let xC = document.getElementById("xC").value;
    let yC = document.getElementById("yC").value;
    
    // Calculate Side Lengths
    var AB = dist(xA, yA, xB, yB);
    var AC = dist(xA, yA, xC, yC);
    var BC = dist(xB, yB, xC, yC);

    // Give Side Lengths
    // Side AB Length
    document.getElementById("AB").innerHTML = AB;

    // Side AC Length
    document.getElementById("AC").innerHTML = AC;

    // Side BC Length
    document.getElementById("BC").innerHTML = BC;

    // Give Perimeter
    document.getElementById("perimeter").innerHTML = (AB + AC + BC);

    // Calculate Side Lengths
    function dist(x1, y1, x2, y2) {
    let distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    return distance;
    }
}
