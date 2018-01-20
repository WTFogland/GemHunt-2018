function mainNav(control) {
    if (control === "home") {
        document.getElementById("navBar").innerHTML = "Home";
        document.getElementById("settings").style.display = "none";
        document.getElementById("settingsNav").className = '';
        document.getElementById("home").style.display = "block";
        document.getElementById("homeNav").className = 'nav-item active';
        document.getElementById("pitscout").style.display = "none";
        document.getElementById("pitNav").className = '';
        document.getElementById("matchscout").style.display = "none";
        document.getElementById("matchNav").className = '';
        document.getElementById("debug").style.display = 'none';
        document.getElementById("debugNav").className = '';
    } else if (control === "settings") {
        document.getElementById("navBar").innerHTML = "Settings";
        document.getElementById("settings").style.display = "block";
        document.getElementById("settingsNav").className = 'nav-item active';
        document.getElementById("home").style.display = "none";
        document.getElementById("homeNav").className = '';
        document.getElementById("pitscout").style.display = "none";
        document.getElementById("pitNav").className = '';
        document.getElementById("matchscout").style.display = "none";
        document.getElementById("matchNav").className = '';
        document.getElementById("debug").style.display = 'none';
        document.getElementById("debugNav").className = '';
    } else if (control === "pitscout") {
        document.getElementById("navBar").innerHTML = "Pit Scouting";
        document.getElementById("settings").style.display = "none";
        document.getElementById("settingsNav").className = '';
        document.getElementById("home").style.display = "none";
        document.getElementById("homeNav").className = '';
        document.getElementById("pitscout").style.display = "block";
        document.getElementById("pitNav").className = 'nav-item active';
        document.getElementById("matchscout").style.display = "none";
        document.getElementById("matchNav").className = '';
        document.getElementById("debug").style.display = 'none';
        document.getElementById("debugNav").className = '';
    } else if (control === "matchscout") {
        document.getElementById("navBar").innerHTML = "Match Scouting";
        document.getElementById("settings").style.display = "none";
        document.getElementById("settingsNav").className = '';
        document.getElementById("home").style.display = "none";
        document.getElementById("homeNav").className = '';
        document.getElementById("pitscout").style.display = "none";
        document.getElementById("pitNav").className = '';
        document.getElementById("matchscout").style.display = "block";
        document.getElementById("matchNav").className = 'nav-item active';
        document.getElementById("debug").style.display = 'none';
        document.getElementById("debugNav").className = '';
    } else if (control === "debug") {
        document.getElementById("navBar").innerHTML = "Debug";
        document.getElementById("settings").style.display = "none";
        document.getElementById("settingsNav").className = '';
        document.getElementById("home").style.display = "none";
        document.getElementById("homeNav").className = '';
        document.getElementById("pitscout").style.display = "none";
        document.getElementById("pitNav").className = '';
        document.getElementById("matchscout").style.display = "none";
        document.getElementById("matchNav").className = '';
        document.getElementById("debug").style.display = 'block';
        document.getElementById("debugNav").className = 'nav-item active';
    }
}


function fillData() {
    document.getElementById("scoutNameD").innerHTML = document.getElementById("scoutName").value;
    document.getElementById("teamNumD").innerHTML = document.getElementById("teams").value;
    document.getElementById("matchNumD").innerHTML = document.getElementById("matchNums").value;
    document.getElementById("allianceCatD").innerHTML = document.getElementById("allianceCat").value;

    if (document.getElementById("leftStart").checked) {
        document.getElementById("setupD").innerHTML = "Left of Exchange";
    }
    else if (document.getElementById("centerStart").checked) {
        document.getElementById("setupD").innerHTML = "Center";
    }
    else if (document.getElementById("rightStart").checked) {
        document.getElementById("setupD").innerHTML = "Right of Exchange";
    } else {
        document.getElementById("setupD").innerHTML = "Not in Play";
    }

    var strAuton;
    var noAuto = '';
    var moveAuto = '';
    var switchAuto = '';
    var scaleAuto = '';

    if (document.getElementById("noAuto").checked) {
        noAuto = "No Auton";
    }

    if (document.getElementById("moveAuto").checked) {
        moveAuto = "Moved";
    }

    if (document.getElementById("switchAuto").checked) {
        switchAuto = "Switch";
    }

    if (document.getElementById("scaleAuto").checked) {
        scaleAuto = "Scale";
    }

    strAuton = noAuto + " " + moveAuto + " " + switchAuto + " " + scaleAuto;

    document.getElementById("autonD").innerHTML = strAuton;
}

var ExportButtons;
var exportData;
var instance;

function saveTable() {
    ExportButtons = document.getElementsByTagName('table');

    instance = new TableExport(ExportButtons, {
        formats: ['csv'],
        headers: true,
        filename: 'Team ' + document.getElementById("teams").value + ' Match ' + document.getElementById("matchNums").value,
        exportButtons: false
    });

    //                                        // "id" of selector    // format
    exportData = instance.getExportData()['dataTable']['csv'];

    var XLSbutton = document.getElementById('export');

    XLSbutton.addEventListener('click', function (e) {
        //                   // data          // mime              // name              // extension
        instance.export2file(exportData.data, exportData.mimeType, exportData.filename, exportData.fileExtension);
    });
}

function exportTable() {
    console.log("Exporting..");
}

var counter,
    time = 0,
    sec = document.getElementById("sec"),
    min = document.getElementById("min"),
    start = document.getElementById("start"),
    reset = document.getElementById("reset"),
    stop = document.getElementById("stop");

start.addEventListener("click", function () {
    toggle();
    counter = setInterval(count, 1000);
});

stop.addEventListener("click", function () {
    toggle();
    clearInterval(counter);
});

reset.addEventListener("click", function () {
    time = 0;
    sec.innerHTML = time % 60;
    min.innerHTML = Math.floor(time / 60);
});

function count() {
    if (time === 150) {
        sec.innerHTML = 0;
        min.innerHTML = 0;
        toggle();
        clearInterval(counter);
    } else {
        time++;
        sec.innerHTML = time % 60;
        min.innerHTML = Math.floor(time / 60);
    }
}

function toggle() {
    if (start.disabled) {
        start.disabled = false;
        stop.disabled = true;
    } else {
        start.disabled = true;
        stop.disabled = false;
    }
};

function insertTime(logType) {

    document.getElementById("timeBody").innerHTML += '<td>' +
        logType +
        '</td><td>' +
        document.getElementById("min").innerHTML +
        ":" +
        document.getElementById("sec").innerHTML;

}

function clearFields() {
    $('input[type=checkbox]').each(function () {
        this.checked = false;
    });

    var mainCells = 10;
    var totalRows = document.getElementById("dataTable").rows.length;

        for (i = totalRows; i >= mainCells; i--) {
            document.getElementById("dataTable").deleteRow(i - 1);
        }
}
