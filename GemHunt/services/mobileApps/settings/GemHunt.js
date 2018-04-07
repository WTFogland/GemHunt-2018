var exported = false;

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
	$('input.chk').on('change', function() {
		$('input.chk').not(this).prop('checked', false);  
	});
	
	$('input.auton').on('change', function() {
		$('input.auton').not(this).prop('checked', false);  
	});

    document.getElementById("scoutNameD").innerHTML = document.getElementById("scoutName").value.toLowerCase();
    document.getElementById("weekNum").innerHTML = document.getElementById("week").value.toLowerCase();
    document.getElementById("teamNumD").innerHTML = document.getElementById("teams").value;
    document.getElementById("matchNumD").innerHTML = document.getElementById("matchNums").value;
    document.getElementById("allianceCatD").innerHTML = document.getElementById("allianceCat").value;

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

    var requiredLength = 15;

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
	 
    //                                        // "id" of selector    // format
    exportData = instance.getExportData()['dataTable']['csv'];
    //exportData2 = instance2.getExportData()['timeLogs']['txt'];
	//exportData3 = instance3.getExportData()['rawTime']['txt'];

    XLSbutton = document.getElementById('export');

    XLSbutton.addEventListener('click', exportTableStuff());
}

function exportTableStuff() {
    console.log("Exporting..");

    //                   // data          // mime              // name              // extension
    instance.export2file(exportData.data, exportData.mimeType, exportData.filename, exportData.fileExtension);
    //instance2.export2file(exportData2.data, exportData2.mimeType, exportData2.filename, exportData2.fileExtension);
	//instance3.export2file(exportData3.data, exportData3.mimeType, exportData3.filename, exportData3.fileExtension);
	
    $.notify("File Exported Successfully", "success");
    exported = true;
    clearFields();
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
    clearFields();
    $.notify("File Exported Successfully", "success");
	clearFields();
}

var switchcount = 0,
	scalecount = 0,
	vaultcount = 0,
	droppedcount = 0,
	enemycount = 0,
	knockedcount = 0;
	

var stopPoint;

function insertTime(logType) {
	stopPoint = logType.toLowerCase();
		
		if (stopPoint.indexOf("alliance") != -1) {
			console.log("switchcount increased");
			switchcount += 1;
		} else if (stopPoint.indexOf("scale") != -1) {
			console.log("scalecount increased");
			scalecount += 1;
		} else if (stopPoint.indexOf("vault") != -1 ) {
			console.log("vault increased");
			vaultcount += 1;
		} else if (stopPoint.indexOf("dropped") != -1) {
			console.log("Dropped increased");
			droppedcount += 1;
		} else if (stopPoint.indexOf("knocked") != -1) {
			console.log("Knocked increased");
			knockedcount += 1;
		} else if (stopPoint.indexOf("enemy") != -1) {
			console.log("Enemy increased");
			enemycount += 1;
		}
		
		document.getElementById("switchD").innerHTML = switchcount;
		document.getElementById("scaleD").innerHTML = scalecount;
		document.getElementById("vaultD").innerHTML = vaultcount;
		document.getElementById("droppedD").innerHTML = droppedcount;
		document.getElementById("knockedD").innerHTML = knockedcount;
		document.getElementById("enemyD").innerHTML = enemycount;
		
		document.getElementById("alliancec").value = switchcount;
		document.getElementById("scalec").value = scalecount;
		document.getElementById("vaultc").value = vaultcount;
		document.getElementById("droppedc").value = droppedcount;
		document.getElementById("knockedc").value = knockedcount;
		document.getElementById("enemyc").value = enemycount;
		
 }
 
 function deleted(logType) {
	 	stopPoint = logType.toLowerCase();
		
		if (stopPoint.indexOf("alliance") != -1) {
			console.log("switchcount decreased");
			switchcount -= 1;
			if (switchcount == -1) {
				switchcount = 0;
			}
		} else if (stopPoint.indexOf("scale") != -1) {
			console.log("scalecount decreased");
			scalecount -= 1;
			if (scalecount == -1) {
				scalecount = 0;
			}
		} else if (stopPoint.indexOf("vault") != -1 ) {
			console.log("vault decreased");
			vaultcount -= 1;
			if (vaultcount == -1) {
				vaultcount = 0;
			}
		} else if (stopPoint.indexOf("dropped") != -1) {
			console.log("Dropped decreased");
			droppedcount -= 1;
			if (droppedcount == -1) {
				droppedcount = 0;
			}
		} else if (stopPoint.indexOf("knocked") != -1) {
			console.log("Knocked decreased");
			knockedcount -= 1;
			if (knockedcount == -1) {
				knockedcount = 0;
			}
		} else if (stopPoint.indexOf("enemy") != -1) {
			console.log("Enemy decreased");
			enemycount -= 1;
			if (enemycount == -1) {
				enemycount = 0;
			}
		}
		
		document.getElementById("switchD").innerHTML = switchcount;
		document.getElementById("scaleD").innerHTML = scalecount;
		document.getElementById("vaultD").innerHTML = vaultcount;
		document.getElementById("droppedD").innerHTML = droppedcount;
		document.getElementById("knockedD").innerHTML = knockedcount;
		document.getElementById("enemyD").innerHTML = enemycount;
		
		document.getElementById("alliancec").value = switchcount;
		document.getElementById("scalec").value = scalecount;
		document.getElementById("vaultc").value = vaultcount;
		document.getElementById("droppedc").value = droppedcount;
		document.getElementById("knockedc").value = knockedcount;
		document.getElementById("enemyc").value = enemycount;
 }

function resetLog() {
}

function clearFields() {
	if (!exported) {
	confirm("Are you sure you want to reset? EXPORT FIRST.");
    $('input[type=checkbox]').each(function () {
        this.checked = false;
    });
	}
	
	exported = false;
    document.getElementById("otherTeamText").value = " ";
    document.getElementById("commentBox").value = " ";
    console.log("Clearing")
    var mainCells = 15;
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
	droppedcount = 0;
	knockedcount = 0;
	enemycount = 0;
	
	document.getElementById("switchD").innerHTML = switchcount;
	document.getElementById("scaleD").innerHTML = scalecount;
	document.getElementById("vaultD").innerHTML = vaultcount;
	document.getElementById("droppedD").innerHTML = droppedcount;
	document.getElementById("knockedD").innerHTML = knockedcount;
	document.getElementById("enemyD").innerHTML = enemycount;
	
	document.getElementById("alliancec").value = switchcount;
	document.getElementById("scalec").value = scalecount;
	document.getElementById("vaultc").value = vaultcount;
	document.getElementById("droppedc").value = droppedcount;
	document.getElementById("knockedc").value = knockedcount;
	document.getElementById("enemyc").value = enemycount;
	
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
		"67", "68", "70", "226", "245", "280", "308", "469", "818", "910", "1701", "2048", "2224", "2337", "2591", "2673", "2676", "2851",
		"2960", "3302", "3539", "3632", "4362", "4810", "4811", "4815", "4961", "5436", "5460", "5478", "5498", "5555", "5642", "5756",
		"6096", "6099", "6120", "6532", "6566", "7147", "7178", "7247"
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



