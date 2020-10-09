


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
    document.getElementById("sunsetOut").innerHTML = `${count}`;
    document.getElementById("buildingCnt").innerHTML = `${newArray.join(', ')}`;
}

function clearText() {
    document.getElementById("sunsetIn1").value = '';
    document.getElementById("sunsetIn2").value = '';
    document.getElementById("sunsetIn3").value = '';
    document.getElementById("sunsetIn4").value = '';
    document.getElementById("sunsetIn5").value = '';

    document.getElementById("sunsetOut").innerHTML = "";
    document.getElementById("buildingCnt").innerHTML = "";
}





//Graphing function 

document.getElementById("btnSunset").addEventListener('click', function () {
    var bldgHeight1 = parseInt(document.getElementById("sunsetIn1").value);
    var bldgHeight2 = parseInt(document.getElementById("sunsetIn2").value);
    var bldgHeight3 = parseInt(document.getElementById("sunsetIn3").value);
    var bldgHeight4 = parseInt(document.getElementById("sunsetIn4").value);
    var bldgHeight5 = parseInt(document.getElementById("sunsetIn5").value);

    //var bldgArray = [bldgHeight1, bldgHeight2, bldgHeight3, bldgHeight4, bldgHeight5];

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        //theme: "light2", // "light1", "light2", "dark1", "dark2"
        backgroundColor: "",
        axisX: {
            gridColor: "transparent",
            lineColor: "transparent",
            tickColor: "transparent",
            labelFontColor: "transparent"
        },
        axisY: {
            gridColor: "transparent",
            lineColor: "transparent",
            tickColor: "transparent",
            labelFontColor: "transparent"
        },
        data: [
            {
                type: "column",
                color: "grey",
                bevelEnabled: true,
                dataPoints: [
                    { y: (bldgHeight1), label: "Building #1" },
                    { y: (bldgHeight2), label: "Building #2" },
                    { y: (bldgHeight3), label: "Building #3" },
                    { y: (bldgHeight4), label: "Building #4" },
                    { y: (bldgHeight5), label: "Building #5" },
                ],
            },
            {
                markerColor: "transparent",
                markerSize: 0,
                type: "area",
                color: "black",
                lineThickness: 0,
                fillOpacity: .5, //**Try various Opacity values **//
                dataPoints: [
                    { x: 0, y: (bldgHeight1) },
                    { x: 1, y: (bldgHeight2) },
                    { x: 2, y: (bldgHeight3) },
                    { x: 3, y: (bldgHeight4) },
                    { x: 4, y: (bldgHeight5) },
                ]
            }],
    });

    chart.render();

});



