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
        topBar();
    }
};

function topBar() {
    var str = '<div class="row"><div class="col">' +
        '<label for="teams" class="col-sm-2 col-form-label">Team</label><select id="teams" class="form-control">' +
        '<option value="1"> 1 </option>' +
        '<option value="70"> 70 </option>' +
        '<option value="245"> 245 </option>' +
        '<option value="322"> 322 </option>' +
        '<option value="468"> 468 </option>' +
        '<option value="894"> 894 </option>' +
        '<option value="1322"> 1322 </option>' +
        '<option value="2145"> 2145 </option>' +
        '<option value="3535"> 3535 </option>' +
        '<option value="3568"> 3568 </option>' +
        '<option value="4994"> 4994 </option>' +
        '<option value="5067"> 5067 </option>' +
        '<option value="5114"> 5114 </option>' +
        '<option value="5150"> 5150 </option>' +
        '<option value="5166"> 5166 </option>' +
        '<option value="5214"> 5214 </option>' +
        '<option value="5215"> 5215 </option>' +
        '<option value="5224"> 5224 </option>' +
        '<option value="5234"> 5234 </option>' +
        '<option value="5251"> 5251 </option>' +
        '<option value="5260"> 5260 </option>' +
        '<option value="5282"> 5282 </option>' +
        '<option value="5517"> 5517 </option>' +
        '<option value="5524"> 5524 </option>' +
        '<option value="5527"> 5527 </option>' +
        '<option value="5561"> 5561 </option>' +
        '<option value="5612"> 5612 </option>' +
        '<option value="5641"> 5641 </option>' +
        '<option value="5660"> 5660 </option>' +
        '<option value="5697"> 5697 </option>' +
        '<option value="6033"> 6033 </option>' +
        '<option value="6081"> 6081 </option>' +
        '<option value="6086"> 6086 </option>' +
        '<option value="6091"> 6091 </option>' +
        '<option value="6102"> 6102 </option>' +
        '<option value="6610"> 6610 </option>' +
        '<option value="7101"> 7101 </option>' +
        '<option value="7211"> 7211 </option>' +
        '<option value="7223"> 7223 </option>' +
        '</select ></div>';
/*            '<div class="col"><select class="form-control">' +
            '<option value="1"> Default select</option>' +
            '</select >' + '</div></div>'; */
    document.getElementById("navBar").innerHTML += str;
}