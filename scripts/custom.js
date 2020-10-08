


//Or var array = newArray();
//array.push(1);
//array.push(2);
//array.push(3);
// etc.

//loop over array


function seeTheSun() {

    let bldgHeight1 = parseInt(document.getElementById("sunsetIn1").value);
    let bldgHeight2 = parseInt(document.getElementById("sunsetIn2").value);
    let bldgHeight3 = parseInt(document.getElementById("sunsetIn3").value);
    let bldgHeight4 = parseInt(document.getElementById("sunsetIn4").value);
    let bldgHeight5 = parseInt(document.getElementById("sunsetIn5").value);

    let bldgArray = [bldgHeight1, bldgHeight2, bldgHeight3, bldgHeight4, bldgHeight5];
    let newArray = [];
    let count = 1;
    let max = bldgArray[0];
        newArray.push(max);

    for (let i = 0; i < bldgArray.length; i++) {

        if (bldgArray[i] > max) {
            count++;
            newArray.push(bldgArray[i]);
            max = bldgArray[i];
        }
    }
    document.getElementById("sunsetOut").innerHTML = `${count} These get sun: [${newArray.join(', ')}]`;
}






//Graphing function 

document.getElementById("btnSunset").addEventListener('click', function () {
    let bldgHeight1 = parseInt(document.getElementById("sunsetIn1").value);
    let bldgHeight2 = parseInt(document.getElementById("sunsetIn2").value);
    let bldgHeight3 = parseInt(document.getElementById("sunsetIn3").value);
    let bldgHeight4 = parseInt(document.getElementById("sunsetIn4").value);
    let bldgHeight5 = parseInt(document.getElementById("sunsetIn5").value);

    //var bldgArray = [bldgHeight1, bldgHeight2, bldgHeight3, bldgHeight4, bldgHeight5];

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        //theme: "light2", // "light1", "light2", "dark1", "dark2"
        backgroundColor: "",
        title: {
            text: "Building Heights"
        },
        axisY: {
            title: "",
            color: "",

        },
        data: [{
            type: "column",
            color: "transparent",
            showInLegend: false,
            dataPoints: [
                { y: (bldgHeight1), label: "Building #1" },
                { y: (bldgHeight2), label: "Building #2" },
                { y: (bldgHeight3), label: "Building #3" },
                { y: (bldgHeight4), label: "Building #4" },
                { y: (bldgHeight5), label: "Building #5" },
            ],
        }]
    });
    chart.render();

});



