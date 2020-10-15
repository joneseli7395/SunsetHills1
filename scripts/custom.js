


//Or var array = newArray();
//array.push(1);
//array.push(2);
//array.push(3);
// etc.

//loop over array

//Collecting input into array
function seeTheSun() {

    var bldgHeight1 = parseInt(document.getElementById("sunsetIn1").value);
    var bldgHeight2 = parseInt(document.getElementById("sunsetIn2").value);
    var bldgHeight3 = parseInt(document.getElementById("sunsetIn3").value);
    var bldgHeight4 = parseInt(document.getElementById("sunsetIn4").value);
    var bldgHeight5 = parseInt(document.getElementById("sunsetIn5").value);

    var bldgArray = [bldgHeight1, bldgHeight2, bldgHeight3, bldgHeight4, bldgHeight5];
    var max = bldgArray[0];
    var count = 1;
    var newArray = [1];
    //newArray.push(max);

    for (var i = 1; i < bldgArray.length; i++) {

        if (bldgArray[i] > max) {
            count++;
            newArray.push(i + 1);
            max = bldgArray[i];
        }
    }
    document.getElementById("sunsetOut").innerHTML = `${count}`;
    document.getElementById("buildingCnt").innerHTML = `#${newArray.join(', #')}`;
}

//Clear function 
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

    var bldgArray = [bldgHeight1, bldgHeight2, bldgHeight3, bldgHeight4, bldgHeight5];
    var max = bldgArray[0];
    var count = 1;
    var newArray = [1];

    for (var i = 1; i < bldgArray.length; i++) {

        if (bldgArray[i] > max) {
            count++;
            newArray.push(i + 1);
            max = bldgArray[i];
        }
    }
    document.getElementById("sunsetOut").innerHTML = `${count}`;
    document.getElementById("buildingCnt").innerHTML = `#${newArray.join(', #')}`;




    //var bldgArray = [bldgHeight1, bldgHeight2, bldgHeight3, bldgHeight4, bldgHeight5];

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        //theme: "light2", // "light1", "light2", "dark1", "dark2"
        backgroundColor: "",
        axisX: {
            gridColor: "transparent",
            lineColor: "transparent",
            tickColor: "transparent",
            labelFontWeight: "bold",
        },
        axisY: {
            gridColor: "transparent",
            lineColor: "transparent",
            tickColor: "transparent",
            labelFontColor: "transparent"
        },
        data: [
            {                                                //Two graphs overlaid 
                type: "column",
                bevelEnabled: true,
                color: "grey",
                dataPoints: [
                    { y: (bldgHeight1), label: "Building #1" },
                    { y: (bldgHeight2), label: "Building #2" },
                    { y: (bldgHeight3), label: "Building #3" },
                    { y: (bldgHeight4), label: "Building #4" },
                    { y: (bldgHeight5), label: "Building #5" },
                ],

            }],
    });

    chart.render();
});





document.getElementById("sunsetIn1").addEventListener('keydown', function (evt) {

    var character = (evt.which) ? evt.which : evt.keycode;
    if (character >= 48 && character <= 57 ||
        character === 8 || character === 9) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
})

document.getElementById("sunsetIn2").addEventListener('keydown', function (evt) {

    var character = (evt.which) ? evt.which : evt.keycode;
    if (character >= 48 && character <= 57 ||
        character === 8 || character === 9) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
})

document.getElementById("sunsetIn3").addEventListener('keydown', function (evt) {

    var character = (evt.which) ? evt.which : evt.keycode;
    if (character >= 48 && character <= 57 ||
        character === 8 || character === 9) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
})

document.getElementById("sunsetIn4").addEventListener('keydown', function (evt) {

    var character = (evt.which) ? evt.which : evt.keycode;
    if (character >= 48 && character <= 57 ||
        character === 8 || character === 9) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
})

document.getElementById("sunsetIn5").addEventListener('keydown', function (evt) {

    var character = (evt.which) ? evt.which : evt.keycode;
    if (character >= 48 && character <= 57 ||
        character === 8 || character === 9) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
})

