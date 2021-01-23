
// load selected cases
loadSelection();
renderSelection();

function updateTitle() {
    document.getElementById("csi").innerHTML = window.selCases.length;
}
function itemClicked(i) {
    if (window.ollMap[i] == null) {
        console.error("is null");
        return;
    }

    var index = window.selCases.indexOf(i);
    var wasSelected = (index != -1);
    if (wasSelected)
        window.selCases.splice(index, 1);
    else
        window.selCases.push(i);

    document.getElementById("itemTd" + i).className = wasSelected ? "itemUnsel" : "itemSel" ;
    saveSelection();
    updateTitle();
}

function selectAllNone() {
    var nothingSelected = (window.selCases.length == 0);
    if (nothingSelected) {
        for (var i = 1; i <= 57; ++i)
            window.selCases.push(i);
    } else {
        window.selCases = [];
    }
    renderSelection();
    saveSelection();
}

/// \returns true if at least one case selected in group groupName
function isAtLeastOneSelected(groupName) {
    var indeces = algsGroups[groupName];
    for (var i in indeces) {
        if (selCases.indexOf(indeces[i]) != -1)
            return true;
    }
    return false;
}

// select or deselect all cases in the group
function selectOllGroup(name) {
    var aos = isAtLeastOneSelected(name);
    var indeces = algsGroups[name];
    for (i in indeces) {
        if (aos) { // need to delete
            var j = window.selCases.indexOf(indeces[i]);
            if (j != -1)
                window.selCases.splice(j, 1);
        } else { // need to add
            window.selCases.push(indeces[i]);
        }
    }
    renderSelection();
    saveSelection();
}

function makeTrNormal(groupname) {
    var s = "";
    var indeces = algsGroups[groupname];
    s += "<tr><td class='ollgrouptdUnsel' onclick='selectOllGroup(\""+groupname
        +"\")' colspan='"+indeces.length+"'><b>" + groupname + "</b></td></tr>";
    s += "<tr>";
    for (var j = 0; j < indeces.length; j++) {
        var i = indeces[j]; // case number
        var sel = (window.selCases.indexOf(i) != -1);
        s += "<td id='itemTd"+i+"' onclick='itemClicked("+i+")' class='"+(sel?"itemSel":"itemUnsel")+"' title='"+algsInfo[i]["name"]+"'>"+
        //"<img width='100px' id='sel"+i+"' src='pic/"+i+".svg' > <br>case #"+i+"</td>";
        "<img width='100px' id='sel"+i+"' src='pic/"+i+".svg' ></td>";
    }
    s += "</tr>";
    return s;
}

/// gn1 groupname with 4 cases, gn2 groupname with 2 cases
function makeTr42(gn1, gn2) {
    var s = '';
    var in1 = algsGroups[gn1], in2 = algsGroups[gn2];
    s += "<tr>"+
        "<td class='ollgrouptdUnsel' onclick='selectOllGroup(\""+gn1 +"\")' colspan='"+in1.length+"'><b>" + gn1 + "</b></td>"+
        "<td class='ollgrouptdUnsel' onclick='selectOllGroup(\""+gn2 +"\")' colspan='"+in2.length+"'><b>" + gn2 + "</b></td>"+
        "</tr>";
    s += "<tr>";
    for (var j = 0; j < in1.length; j++) {
        var i = in1[j]; // case number
        var sel = (window.selCases.indexOf(i) != -1);
        s += "<td id='itemTd"+i+"' onclick='itemClicked("+i+")' class='"+(sel?"itemSel":"itemUnsel")+"' title='"+algsInfo[i]["name"]+"'>"+
        //"<img width='100px' id='sel"+i+"' src='pic/"+i+".svg' > <br>case #"+i+"</td>";
        "<img width='100px' id='sel"+i+"' src='pic/"+i+".svg' ></td>";
    }
    for (var j = 0; j < in2.length; j++) {
        var i = in2[j]; // case number
        var sel = (window.selCases.indexOf(i) != -1);
        s += "<td id='itemTd"+i+"' onclick='itemClicked("+i+")' class='"+(sel?"itemSel":"itemUnsel")+"' title='"+algsInfo[i]["name"]+"'>"+
        //"<img width='100px' id='sel"+i+"' src='pic/"+i+".svg' > <br>case #"+i+"</td>";
        "<img width='100px' id='sel"+i+"' src='pic/"+i+".svg' ></td>";
    }
    s += "</tr>";
    return s;
}

/// iterates the ollMap and highlights HTML elements according to the selection
function renderSelection()
{
    var s="";

    s += "<table class='olllayout'>";
    //s += "<tr><a onclick='selectAllNone()'>select all or none</a>";
    s += "<tr><td class='ollgrouptdUnsel' onclick='selectAllNone()' colspan='6'><b>All Cases (57)</b> | selected: <span id='csi'></span></td></tr>";

    s += makeTr42("P-Shapes", "T-Shapes");
    s += makeTr42("I-Shapes", "Squares");
    s += makeTr42("Fish-Shapes", "C-Shapes");
    s += makeTr42("Knight Move Shapes", "W-Shapes");
    s += makeTr42("Awkward Shapes", "Corners Correct, Edges Flipped");
    s += makeTrNormal("L-Shapes");
    s += makeTrNormal("Lightning Bolts");
    s += makeTrNormal("All Edges Oriented Correctly");
    s += makeTrNormal("No Edges Flipped Correctly");

    s += "</table>";
    document.getElementById("cases_selection").innerHTML = s;
    updateTitle();
}

