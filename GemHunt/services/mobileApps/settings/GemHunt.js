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
    document.getElementById("weekNum").innerHTML = document.getElementById("week").value.toLowerCase();
    document.getElementById("teamNumD").innerHTML = document.getElementById("teams").value;
    document.getElementById("matchNumD").innerHTML = document.getElementById("matchNums").value;
    document.getElementById("allianceCatD").innerHTML = document.getElementById("allianceCat").value;

    if (document.getElementById("firstStart").checked) {
        document.getElementById("setupD").innerHTML = "1";
    }
    else if (document.getElementById("secondStart").checked) {
        document.getElementById("setupD").innerHTML = "2";
    }
    else if (document.getElementById("thirdStart").checked) {
        document.getElementById("setupD").innerHTML = "3";
    }
    else if (document.getElementById("fourthStart").checked) {
        document.getElementById("setupD").innerHTML = "4";
    } else {
        document.getElementById("setupD").innerHTML = "not in play";
    } 

    var strAuton = '',
        noAuto = '',
        moveAuto = '',
        switchAuto = '',
        scaleAuto = '',
        preloadAuto = '';

    if (document.getElementById("noAuto").checked) {
        noAuto = "no auton";
    }

    if (document.getElementById("moveAuto").checked) {
        moveAuto = "moved";
    }

    if (document.getElementById("preloadAuto").checked) {
        preloadAuto = "pre loaded cube"
    }

    strAuton = noAuto + " " + moveAuto + " " + switchAuto + " " + scaleAuto + " " + preloadAuto;

    document.getElementById("autonD").innerHTML = strAuton;

    var climbType = '',
        rampBot = '',
        climber = '',
        climbon = '',
        rampon = '',
        park = '',
        levitate = '',
        none = '';

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

    document.getElementById("commentD").innerHTML = document.getElementById("commentBox").value;

// Pit Stuff
    document.getElementById("pitTeamNum").innerHTML = document.getElementById("pitteams").value;
    document.getElementById("scoutNamePitD").innerHTML = document.getElementById("scoutName").value.toLowerCase();

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
        document.getElementById("driveType").innerHTML = document.getElementById("other").value;
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
	document.getElementById("commD").innerHTML = document.getElementById("impressions").value;
	
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

    var movea = '',
        smart = '',
        dumb = '',
        scale = '',
        nothing = '',
        pitAuto = '';

    if (document.getElementById("move").checked) {
        movea = "move";
    }

    if (document.getElementById("smartswitch").checked) {
        smart = "smart switch";
    }

    if (document.getElementById("dumbswitch").checked) {
        dumb = "dumb switch";
    }

    if (document.getElementById("scale").checked) {
        scale = "scale";
    }

    if (document.getElementById("nothing").checked) {
       nothing = 'no auton';
    }

    pitAuto = movea + " " + smart + " " + dumb + " " + scale + " " + nothing;
    document.getElementById("autonTypeD").innerHTML = pitAuto;

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
}

var ExportButtons;
var exportData;
var instance;
var instance2;
var instance3;
var exportData2;
var exportData3;
var XLSbutton;

function saveTable() {
    var i;
    var fullNum = 0;
    var avgVal;
    var counter = 0;
	
/*     for (i in avgData) {
        for (var j = 0; j < avgData[i].length; j++) {
            var array = avgData[i];

            fullNum += parseInt(array[j]);

            console.log("fullNum: " + fullNum);
            counter += 1;
        }

        console.log("fullAfter: " + fullNum);
        console.log("counter: " + counter);
        avgVal = parseInt(fullNum / counter);

        if (isNaN(avgVal)) {
            avgVal = 0;
        }

        var timeMin = parseInt(avgVal / 60);


        var timeSec = parseInt(avgVal % 60);

        if (timeSec <= 9) {
            timeSec = '0' + timeSec;
        }

        document.getElementById("titleName").innerHTML += '<td>' + i + '</td>';
        document.getElementById("userInputs").innerHTML += '<td>' + timeMin + ":" + timeSec + '</td>';
        fullNum = 0;
        counter = 0;
    } */

    var requiredLength = 90;

    if (document.getElementById('dataTable').rows[0].cells.length < requiredLength) {
        var neededLength = requiredLength - document.getElementById('dataTable').rows[0].cells.length;

        for (var i = 0; i < neededLength; i++) {
            document.getElementById("titleName").innerHTML += '<td style="display: none;"></td>';
            document.getElementById("userInputs").innerHTML += '<td style="display: none;"></td>';
        }

        console.log("Total Length: " + document.getElementById('dataTable').rows[0].cells.length);
    }

    ExportButtons = document.getElementsByTagName('table');

    instance = new TableExport(ExportButtons, {
        formats: ['csv'],
        headers: true,
        filename: 'Team ' + document.getElementById("teams").value + ' Match ' + document.getElementById("matchNums").value,
        exportButtons: false
    });

    instance2 = new TableExport(ExportButtons,{
        formats: ['txt'],
        headers: true,
        filename: 'Team ' + document.getElementById("teams").value + ' Match ' + document.getElementById("matchNums").value + " - Cycles", 
        exportButtons: false
     });
	 
	 instance3 = new TableExport(ExportButtons, {
		 formats: ['txt'],
		 headers: true,
		 filename: 'Team ' + document.getElementById("teams").value + ' Match ' + document.getElementById("matchNums").value + " - Raw",
		 exportButtons: false
	 });
	 
    //                                        // "id" of selector    // format
    exportData = instance.getExportData()['dataTable']['csv'];
    exportData2 = instance2.getExportData()['timeLogs']['txt'];
	exportData3 = instance3.getExportData()['rawTime']['txt'];

    XLSbutton = document.getElementById('export');

    XLSbutton.addEventListener('click', exportTableStuff());
}

function exportTableStuff() {
    console.log("Exporting..");

    //                   // data          // mime              // name              // extension
    instance.export2file(exportData.data, exportData.mimeType, exportData.filename, exportData.fileExtension);
    instance2.export2file(exportData2.data, exportData2.mimeType, exportData2.filename, exportData2.fileExtension);
	instance3.export2file(exportData3.data, exportData3.mimeType, exportData3.filename, exportData3.fileExtension);
	
    $.notify("File Exported Successfully", "success");
}

var ExportPitButtons;
var exportPitData;
var instance2;
var XLSbutton2;

function savePitData() {
    ExportPitButtons = document.getElementsByTagName('table');

    instance2 = new TableExport(ExportPitButtons, {
        formats: ['csv'],
        filename: 'Team ' + document.getElementById("pitteams").value,
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
    $.notify("File Exported Successfully", "success");
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
    sec.innerHTML = '0' + time % 60;
    min.innerHTML = Math.floor(time / 60);
});

function count() {
    if (time === 150) {
        min.innerHTML = '0';
        sec.innerHTML = '00';
        toggle();
        clearInterval(counter);
    } else {
        time++;

        if (time % 60 <= 9) {
            sec.innerHTML = '0' + time % 60;
        }
        else {
            sec.innerHTML = time % 60;
        }
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
}

var switchcount = 0,
	scalecount = 0,
	vaultcount = 0;

var startTime,
    stopTime,
    startPoint,
    stopPoint,
    logPoint = 0,
    totCycle;

var avgData = new Object();
avgData['portal 1_switch 1'] = new Array();
avgData['portal 1_switch 2'] = new Array();
avgData['portal 1_switch 3'] = new Array();
avgData['portal 1_switch 4'] = new Array();
avgData['portal 1_scale 1'] = new Array();
avgData['portal 1_scale 2'] = new Array();
avgData['portal 1_exchange zone'] = new Array();
avgData['portal 2_switch 1'] = new Array();
avgData['portal 2_switch 2'] = new Array();
avgData['portal 2_switch 3'] = new Array();
avgData['portal 2_switch 4'] = new Array();
avgData['portal 2_scale 1'] = new Array();
avgData['portal 2_scale 2'] = new Array();
avgData['portal 2_exchange zone'] = new Array();
avgData['portal 3_switch 1'] = new Array();
avgData['portal 3_switch 2'] = new Array();
avgData['portal 3_switch 3'] = new Array();
avgData['portal 3_switch 4'] = new Array();
avgData['portal 3_scale 1'] = new Array();
avgData['portal 3_scale 2'] = new Array();
avgData['portal 3_exchange zone'] = new Array();
avgData['portal 4_switch 1'] = new Array();
avgData['portal 4_switch 2'] = new Array();
avgData['portal 4_switch 3'] = new Array();
avgData['portal 4_switch 4'] = new Array();
avgData['portal 4_scale 1'] = new Array();
avgData['portal 4_scale 2'] = new Array();
avgData['portal 4_exchange zone'] = new Array();
avgData['exchange zone_switch 1'] = new Array();
avgData['exchange zone_switch 2'] = new Array();
avgData['exchange zone_switch 3'] = new Array();
avgData['exchange zone_switch 4'] = new Array();
avgData['exchange zone_scale 1'] = new Array();
avgData['exchange zone_scale 2'] = new Array();
avgData['cube zone 1_scale 1'] = new Array();
avgData['cube zone 1_scale 2'] = new Array();
avgData['cube zone 1_switch 1'] = new Array();
avgData['cube zone 1_switch 2'] = new Array();
avgData['cube zone 1_switch 3'] = new Array();
avgData['cube zone 1_switch 4'] = new Array();
avgData['cube zone 1_exchange zone'] = new Array();
avgData['cube zone 2_scale 1'] = new Array();
avgData['cube zone 2_scale 2'] = new Array();
avgData['cube zone 2_switch 1'] = new Array();
avgData['cube zone 2_switch 2'] = new Array();
avgData['cube zone 2_switch 3'] = new Array();
avgData['cube zone 2_switch 4'] = new Array();
avgData['cube zone 2_exchange zone'] = new Array();
avgData['competitive cubes 1_switch 1'] = new Array();
avgData['competitive cubes 1_switch 2'] = new Array();
avgData['competitive cubes 1_switch 3'] = new Array();
avgData['competitive cubes 1_switch 4'] = new Array();
avgData['competitive cubes 1_scale 1'] = new Array();
avgData['competitive cubes 1_scale 2'] = new Array();
avgData['competitive cubes 1_exchange zone'] = new Array();
avgData['competitive cubes 2_switch 1'] = new Array();
avgData['competitive cubes 2_switch 2'] = new Array();
avgData['competitive cubes 2_switch 3'] = new Array();
avgData['competitive cubes 2_switch 4'] = new Array();
avgData['competitive cubes 2_scale 1'] = new Array();
avgData['competitive cubes 2_scale 2'] = new Array();
avgData['competitive cubes 2_exchange zone'] = new Array();
avgData['preloaded_switch 1'] = new Array();
avgData['preloaded_switch 2'] = new Array();
avgData['preloaded_switch 3'] = new Array();
avgData['preloaded_switch 4'] = new Array();
avgData['preloaded_scale 1'] = new Array();
avgData['preloaded_scale 2'] = new Array();
avgData['preloaded_exchange zone'] = new Array();
avgData['disabled_disabled'] = new Array();
avgData['cube dropped_switch 1'] = new Array();
avgData['cube dropped_switch 2'] = new Array();
avgData['cube dropped_switch 3'] = new Array();
avgData['cube dropped_switch 4'] = new Array();
avgData['cube dropped_scale 1'] = new Array();
avgData['cube dropped_scale 2'] = new Array();
avgData['cube dropped_exchange zone'] = new Array();
avgData['floor cube_switch 1'] = new Array();
avgData['floor cube_switch 2'] = new Array();
avgData['floor cube_switch 3'] = new Array();
avgData['floor cube_switch 4'] = new Array();
avgData['floor cube_scale 1'] = new Array();
avgData['floor cube_scale 2'] = new Array();
avgData['feelsbadman_feelsbadman'] = new Array();

function insertTime(logType) {
    logPoint += 1;

    if (logPoint == 1) {
        startTime = time;
        startPoint = logType.toLowerCase();
        totCycle = logType.toLowerCase();
        console.log("starttime: " + startTime + " startpoint: " + startPoint);
		
		document.getElementById("rawTimeName").innerHTML += '<td>' + startPoint + '</td>';
		document.getElementById("rawTimeCounts").innerHTML += '<td>' + startTime + '</td>';
		
        $.notify("Started Cycle", "success");
        return;
    }

    if (logPoint == 2) {
        stopTime = time;
        stopPoint = logType.toLowerCase();
        totCycle += "_" + logType.toLowerCase();
        console.log("stoptime: " + stopTime + " stoppoint: " + stopPoint);
		
		document.getElementById("rawTimeName").innerHTML += '<td>' + stopPoint + '</td>';
		document.getElementById("rawTimeCounts").innerHTML += '<td>' + stopTime + '</td>';
		
        logPoint = 0;

        var totTime = stopTime - startTime;
        var timeSec, timeMin;
        if (totTime % 60 <= 9) {
            timeSec = '0' + totTime % 60;
        }
        else {
            timeSec = totTime % 60;
        }

        timeMin = Math.floor(totTime / 60);

        avgData[totCycle].push(parseInt(totTime));
		
		if (stopPoint.includes("switch")) {
			console.log("switchcount increased");
			switchcount += 1;
		} else if (stopPoint.includes("scale")) {
			console.log("scalecount increased");
			scalecount += 1;
		} else if (stopPoint.includes("exchange zone")) {
			console.log("vault increased");
			vaultcount += 1;
		}
		
		document.getElementById("switchD").innerHTML = switchcount;
		document.getElementById("scaleD").innerHTML = scalecount;
		document.getElementById("vaultD").innerHTML = vaultcount;

        document.getElementById("timeName").innerHTML += '<td>' +  startPoint + '_' + stopPoint + '</td>';
        document.getElementById("timeCounts").innerHTML += '<td>' +
            timeMin +
            ":" +
            timeSec + '</td>';

        $.notify("Added Log/Ended Cycle", "success");
    }
}

function resetLog() {
    if (logPoint == 1) {
        startTime = 0;
        startPoint = '';
        logPoint = 0;

        $.notify("Removed Last Start Point", "warn");
    }
}

function clearFields() {
    $('input[type=checkbox]').each(function () {
        this.checked = false;
    });

    document.getElementById("otherTeamText").value = " ";
    document.getElementById("commentBox").value = " ";
    console.log("Clearing")
    var mainCells = 13;
    var totalRows = document.getElementById('dataTable').rows[0].cells.length;
    var titleRow = document.getElementById("titleName");
    var inputRow = document.getElementById("userInputs");

    console.log("Total Columns: " + totalRows);

    for (var i = totalRows; i > mainCells; i--) {
        titleRow.deleteCell(i-1);
        inputRow.deleteCell(i-1);
    }
	
	var totalLogRows = document.getElementById('timeLogs').rows[0].cells.length;
	var titleLogRow = document.getElementById("timeName");
	var inputLogRow = document.getElementById("timeCounts");
	
	for (var i = totalLogRows; i > 0; i--) {
		titleLogRow.deleteCell(i-1);
		inputLogRow.deleteCell(i-1);
	}

	var totalRawRows = document.getElementById('rawTime').rows[0].cells.length;
	var titleRawRow = document.getElementById('rawTimeName');
	var inputRawRow = document.getElementById('rawTimeCounts');
	
	for (var i = totalRawRows; i > 0; i--) {
		titleRawRow.deleteCell(i-1);
		inputRawRow.deleteCell(i-1);
	}
	
    logPoint = 1;
	switchcount = 0;
	scalecount = 0;
	vaultcount = 0;
	
	document.getElementById("switchD").innerHTML = switchcount;
	document.getElementById("scaleD").innerHTML = scalecount;
	document.getElementById("vaultD").innerHTML = vaultcount;
	
    resetLog();
    fillData();

}

function clearPitFields() {
    $('input[type=checkbox]').each(function () {
        this.checked = false;
    });

    document.getElementById("weight").value = " ";
    document.getElementById("height").value = " ";
    document.getElementById("perim").value = " ";
    document.getElementById("other").value = " ";
    document.getElementById("otherlang").value = " ";

    fillData();
}

function idTeams() {
    var curTeams = [
		"27", "33", "51", "67", "201", "308", "503", "548", "1701", "2145", "2612", "2960", "3536", "3568", "3668",
		"3707", "4362", "4776", "4994", "5215", "5460", "5524", "5561", "5641", "5685", "6078", "6117", "6190", "6559",
		"6583", "7178", "7191", "7192", "7195", "7196", "7220", "7223", "7225", "7232", "7254"
    ];

    var matchTotal = 80;

    for (var i = 0; i < curTeams.length; i++) {
        var newTeam = document.createElement("option");
        var sel = document.getElementById('teams');
        newTeam.value = curTeams[i];
        newTeam.appendChild(document.createTextNode(curTeams[i]));

        sel.appendChild(newTeam);
    }

    for (var j = 0; j <= matchTotal; j++) {
        var selmatch = document.getElementById("matchNums");
        var newMatch = document.createElement("option");

        newMatch.value = j;
        newMatch.appendChild(document.createTextNode(j));

        selmatch.appendChild(newMatch);
    }

    for (var k = 0; k < curTeams.length; k++) {
        var newTeam = document.createElement("option");
        var sel = document.getElementById("pitteams");
        newTeam.value = curTeams[k];
        newTeam.appendChild(document.createTextNode(curTeams[k]));

        sel.appendChild(newTeam);
    }
}



