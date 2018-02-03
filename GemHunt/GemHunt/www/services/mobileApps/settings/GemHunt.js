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
    document.getElementById("scoutNameD").innerHTML = document.getElementById("scoutName").value.toLowerCase();
    document.getElementById("teamNumD").innerHTML = document.getElementById("teams").value;
    document.getElementById("matchNumD").innerHTML = document.getElementById("matchNums").value;
    document.getElementById("allianceCatD").innerHTML = document.getElementById("allianceCat").value;

    if (document.getElementById("leftStart").checked) {
        document.getElementById("setupD").innerHTML = "left of exchange";
    }
    else if (document.getElementById("centerStart").checked) {
        document.getElementById("setupD").innerHTML = "center";
    }
    else if (document.getElementById("rightStart").checked) {
        document.getElementById("setupD").innerHTML = "right of exchange";
    } else {
        document.getElementById("setupD").innerHTML = "not in play";
    }

    var strAuton;
    var noAuto = '';
    var moveAuto = '';
    var switchAuto = '';
    var scaleAuto = '';

    if (document.getElementById("noAuto").checked) {
        noAuto = "no auton";
    }

    if (document.getElementById("moveAuto").checked) {
        moveAuto = "moved";
    }

    if (document.getElementById("switchAuto").checked) {
        switchAuto = "switch";
    }

    if (document.getElementById("scaleAuto").checked) {
        scaleAuto = "scale";
    }

    strAuton = noAuto + " " + moveAuto + " " + switchAuto + " " + scaleAuto;

    document.getElementById("autonD").innerHTML = strAuton;

    var strTwoCube;
    var noTwoCube = '';
    var pickup = '';
    var scale = '';
    var switchtwo = '';

    if (document.getElementById("tcNo").checked) {
        noTwoCube = 'none';
    }

    if (document.getElementById("tcSwitch").checked) {
        switchtwo = 'on switch';
    }

    if (document.getElementById("tcScale").checked) {
        scale = 'on scale';
    }

    if (document.getElementById("tcPickup").checked) {
        pickup = 'picked up';
    }

    strTwoCube = noTwoCube + " " + pickup + " " + scale + " " + switchtwo;
    document.getElementById("autonDosD").innerHTML = strTwoCube;

    if (document.getElementById("tcPC").checked) {
        document.getElementById("autonDosLocD").innerHTML = "pc zone";
    }

    if (document.getElementById("tcPlat").checked) {
        document.getElementById("autonDosLocD").innerHTML = "platform";
    }

    if (document.getElementById("tcAlli").checked) {
        document.getElementById("autonDosLocD").innerHTML = "alliance";
    }

    var climbType;
    var rampBot = ' ';
    var climber = ' ';
    var climbon = ' ';
    var rampon = ' ';
    var park = ' ';
    var levitate = ' ';
    var none = ' ';

    if (document.getElementById("rampClimb").checked) {
        rampBot = 'ramp bot';
    }

    if (document.getElementById("climber").checked) {
        climber = 'climber';
    }

    if (document.getElementById("climbOther").checked) {
        climbon = 'climb on other';
    }

    if (document.getElementById("rampOther").checked) {
        rampon = 'ramp on other';
    }

    if (document.getElementById("parkOther").checked) {
        park = 'park on other';
    }

    if (document.getElementById("leviOther").checked) {
        levitate = 'levitate';
    }

    if (document.getElementById("noClimb").checked) {
        none = 'no climb';
    }

    climbType = rampBot + ' ' + climber + ' ' + climbon + ' ' + rampon + ' ' + park + ' ' + levitate + ' ' + none;
    document.getElementById("climbD").innerHTML = climbType;

    if (document.getElementById("climbOther").checked || document.getElementById("rampOther").checked) {
        $('#teamClimbed').show();
    }
    else {
        $('#teamClimbed').hide();
    }

    document.getElementById("climbOnD").innerHTML = document.getElementById("otherTeamText").value;

// Pit Stuff

    document.getElementById("scoutNamePitD").innerHTML = document.getElementById("scoutName").value.toLowerCase();
    document.getElementById("pitTeamNum").innerHTML = document.getElementById("pitTeamText").value;

    if (document.getElementById("westcoast").checked) {
        document.getElementById("driveType").innerHTML = "west coast";
    }

    if (document.getElementById("mecanum").checked) {
        document.getElementById("driveType").innerHTML = "mecanum";
    }

    if (document.getElementById("tank").checked) {
        document.getElementById("driveType").innerHTML = "tank";
    }

    if (document.getElementById("swerve").checked) {
        document.getElementById("driveType").innerHTML = "swerve";
    }

    if (document.getElementById("othercheck").checked) {
        $("#otherdrive").show();
        document.getElementById("driveType").innerHTML = $("#other").value();
    } else {
        $("#otherdrive").hide();
    }

    if (document.getElementById("java").checked) {
        document.getElementById("languageType").innerHTML = "java";
    }

    if (document.getElementById("cpp").checked) {
        document.getElementById("languageType").innerHTML = "c++";
    }

    if (document.getElementById("python").checked) {
        document.getElementById("languageType").innerHTML = "python";
    }

    if (document.getElementById("labview").checked) {
        document.getElementById("languageType").innerHTML = "labview";
    }

    if (document.getElementById("otherchecklang").checked) {
        $("#otherlangdiv").show();
        document.getElementById("languageType").innerHTML = document.getElementById("otherlang").value;
    } else {
        $("#otherlangdiv").hide();
    }

    document.getElementById("weightD").innerHTML = document.getElementById("weight").value;
    document.getElementById("heightD").innerHTML = document.getElementById("height").value;
    document.getElementById("perimD").innerHTML = document.getElementById("perim").value;

    if (document.getElementById("park").checked) {
        document.getElementById("climbTypeD").innerHTML = "park";
    }

    if (document.getElementById("regclimb").checked) {
        document.getElementById("climbTypeD").innerHTML = "reg climb";
    }

    if (document.getElementById("curtiousclimb").checked) {
        document.getElementById("climbTypeD").innerHTML = "curtious climb";
    }

    if (document.getElementById("carryothers").checked) {
        document.getElementById("climbTypeD").innerHTML = "carry others";
    }

    if (document.getElementById("rampbot").checked) {
        document.getElementById("climbTypeD").innerHTML = "ramp bot";
    }

    if (document.getElementById("climbothers").checked) {
        document.getElementById("climbTypeD").innerHTML = "others climb on";
    } 

    if (document.getElementById("leftS").checked) {
        document.getElementById("startD").innerHTML = "left";
    }

    if (document.getElementById("rightS").checked) {
        document.getElementById("startD").innerHTML = "right";
    }

    if (document.getElementById("centerS").checked) {
        document.getElementById("startD").innerHTML = "center";
    }

    if (document.getElementById("move").checked) {
        document.getElementById("autonTypeD").innerHTML = "move";
    }

    if (document.getElementById("switch").checked) {
        document.getElementById("autonTypeD").innerHTML = "switch";
    }

    if (document.getElementById("scale").checked) {
        document.getElementById("autonTypeD").innerHTML = "scale";
    }

    if (document.getElementById("yesScale").checked) {
        document.getElementById("onScaleD").innerHTML = "yes";
    }

    if (document.getElementById("noScale").checked) {
        document.getElementById("onScaleD").innerHTML = "no";
    }

    if (document.getElementById("liftCube").checked) {
        document.getElementById("placeCubeD").innerHTML = "lift";
    }

    if (document.getElementById("shootCube").checked) {
        document.getElementById("placeCubeD").innerHTML = "shoot";
    }

    document.getElementById("driveSeasons").innerHTML = document.getElementById("driveExperience").value;
    document.getElementById("rotateInfo").innerHTML = document.getElementById("driveRotate").value;
}

var ExportButtons;
var exportData;
var instance;
var XLSbutton;

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

    XLSbutton = document.getElementById('export');

    XLSbutton.addEventListener('click', exportTableStuff());
}

function exportTableStuff() {
    console.log("Exporting..");

    //                   // data          // mime              // name              // extension
    instance.export2file(exportData.data, exportData.mimeType, exportData.filename, exportData.fileExtension);
}

var ExportPitButtons;
var exportPitData;
var instance2;
var XLSbutton2;

function savePitData() {
    ExportPitButtons = document.getElementsByTagName('table');

    instance2 = new TableExport(ExportPitButtons, {
        formats: ['csv'],
        filename: 'Team ' + document.getElementById("pitTeamText").value,
        exportButtons: false
    });

    //                                        // "id" of selector    // format
    exportPitData = instance2.getExportData()['pitTable']['csv'];

    XLSbutton2 = document.getElementById('exportPit');

    XLSbutton2.addEventListener('click', exportPitTableStuff());
}

function exportPitTableStuff() {
    console.log("Exporting..");

    //                   // data          // mime              // name              // extension
    instance2.export2file(exportPitData.data, exportPitData.mimeType, exportPitData.filename, exportPitData.fileExtension);
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
    document.getElementById("titleName").innerHTML += '<td>timelog</td>';
    document.getElementById("userInputs").innerHTML += '<td>' +
        logType.toLowerCase() + ' ' +
        document.getElementById("min").innerHTML +
        ":" +
        document.getElementById("sec").innerHTML + '</td>';
}

function clearFields() {
    $('input[type=checkbox]').each(function () {
        this.checked = false;
    });

    document.getElementById("otherTeamText").value = " ";

    var mainCells = 10;
    var totalRows = document.getElementById("dataTable").rows.length;

        for (i = totalRows; i >= mainCells; i--) {
            document.getElementById("dataTable").deleteRow(i - 1);
    }
}

function clearPitFields() {
    $('input[type=checkbox]').each(function () {
        this.checked = false;
    });

    document.getElementById("pitTeamText").value = " ";
    document.getElementById("weight").value = " ";
    document.getElementById("height").value = " ";
    document.getElementById("perim").value = " ";
    document.getElementById("driveExperience").value = " ";
    document.getElementById("driveRotate").value = " ";
    document.getElementById("other").value = " ";
    document.getElementById("otherlang").value = " ";
}

function idTeams() {
    var curTeams = [
        "48", "63", "128", "144", "234", "247", "279", "291", "302", "337", "379", "451",
        "554", "677", "1014", "1038", "1317", "1466", "1559", "1675", "2172", "2252", "2399", "2603", "3010",
        "3138", "3193", "3201", "3260", "3266", "3324", "3397", "3484", "3492", "3504", "3777", "3844",
        "3940", "4028", "4085", "4121", "4145", "4283", "4284", "4467", "4521", "4611", "5413", "5418",
        "5492", "5667", "5740", "5811", "6032", "6084", "6460", "6765", "6834", "6927", "6936", "7165"
    ];

    var matchTotal = 80;

    for (var i = 0; i < curTeams.length; i++) {
        var newTeam = document.createElement("option");
        var sel = document.getElementById('teams');
        newTeam.value = curTeams[i];
        newTeam.appendChild(document.createTextNode(curTeams[i]));

        sel.appendChild(newTeam);
    }

    for (var j = 1; j <= matchTotal; j++) {
        var selmatch = document.getElementById("matchNums");
        var newMatch = document.createElement("option");

        newMatch.value = j;
        newMatch.appendChild(document.createTextNode(j));

        selmatch.appendChild(newMatch);
    }
}

