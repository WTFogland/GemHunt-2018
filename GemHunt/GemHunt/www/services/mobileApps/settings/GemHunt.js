function mainNav(control) {
    if (control == "home") {
        document.getElementById("navBar").innerHTML = "Home";
        document.getElementById("settings").style.display = "none";
        document.getElementById("settingsNav").className = '';
        document.getElementById("home").style.display = "block";
        document.getElementById("homeNav").className = 'nav-item active';
        document.getElementById("pitscout").style.display = "none";
        document.getElementById("pitNav").className = '';
        document.getElementById("matchscout").style.display = "none";
        document.getElementById("matchNav").className = '';
    } else if (control == "settings") {
        document.getElementById("navBar").innerHTML = "Settings";
        document.getElementById("settings").style.display = "block";
        document.getElementById("settingsNav").className = 'nav-item active';
        document.getElementById("home").style.display = "none";
        document.getElementById("homeNav").className = '';
        document.getElementById("pitscout").style.display = "none";
        document.getElementById("pitNav").className = '';
        document.getElementById("matchscout").style.display = "none";
        document.getElementById("matchNav").className = '';
    } else if (control == "pitscout") {
        document.getElementById("navBar").innerHTML = "Pit Scouting";
        document.getElementById("settings").style.display = "none";
        document.getElementById("settingsNav").className = '';
        document.getElementById("home").style.display = "none";
        document.getElementById("homeNav").className = '';
        document.getElementById("pitscout").style.display = "block";
        document.getElementById("pitNav").className = 'nav-item active';
        document.getElementById("matchscout").style.display = "none";
        document.getElementById("matchNav").className = '';
        topBar();
    } else if (control == "matchscout") {
        document.getElementById("navBar").innerHTML = "Match Scouting";
        document.getElementById("settings").style.display = "none";
        document.getElementById("settingsNav").className = '';
        document.getElementById("home").style.display = "none";
        document.getElementById("homeNav").className = '';
        document.getElementById("pitscout").style.display = "none";
        document.getElementById("pitNav").className = '';
        document.getElementById("matchscout").style.display = "block";
        document.getElementById("matchNav").className = 'nav-item active';
    }
};

function topBar() {
    var str = '<div class="row"><div class="col">' +
        '<label for="teams" class="col-sm-2 col-form-label">Team</label><select id="teams" class="form-control">' +
        '<option> 1 </option>' +
        '<option> 70 </option>' +
        '<option> 245 </option>' +
        '<option> 322 </option>' +
        '<option> 468 </option>' +
        '<option> 894 </option>' +
        '<option> 1322 </option>' +
        '<option> 2145 </option>' +
        '<option> 3535 </option>' +
        '<option> 3568 </option>' +
        '<option> 4994 </option>' +
        '<option> 5067 </option>' +
        '<option> 5114 </option>' +
        '<option> 5150 </option>' +
        '<option> 5166 </option>' +
        '<option> 5214 </option>' +
        '<option> 5215 </option>' +
        '<option> 5224 </option>' +
        '<option> 5234 </option>' +
        '<option> 5251 </option>' +
        '<option> 5260 </option>' +
        '<option> 5282 </option>' +
        '<option> 5517 </option>' +
        '<option> 5524 </option>' +
        '<option> 5527 </option>' +
        '<option> 5561 </option>' +
        '<option> 5612 </option>' +
        '<option> 5641 </option>' +
        '<option> 5660 </option>' +
        '<option> 5697 </option>' +
        '<option> 6033 </option>' +
        '<option> 6081 </option>' +
        '<option> 6086 </option>' +
        '<option> 6091 </option>' +
        '<option> 6102 </option>' +
        '<option> 6610 </option>' +
        '<option> 7101 </option>' +
        '<option> 7211 </option>' +
        '<option> 7223 </option>' +
        '</select ></div>';
/*            '<div class="col"><select class="form-control">' +
            '<option> Default select</option>' +
            '</select >' + '</div></div>'; */
        document.getElementById("navBar").innerHTML += str;
}