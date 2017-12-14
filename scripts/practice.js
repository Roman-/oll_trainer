var currentNum;

/// \param m = mode: 1 = practicing, 0 = selection
function changeMode(m)
{
    var pr = document.getElementsByClassName("practice_layout");
    for (var i = 0; i < pr.length; i++)
        pr[i].style.display = m == 1 ? 'initial' : 'none';

    var se = document.getElementsByClassName("selection_layout");
    for (var i = 0; i < se.length; i++)
        se[i].style.display = m == 0 ? 'initial' : 'none';

    if (m == 1) // practice
    {
        // display how many cases selected
        var casesAmount = window.selCases.length;
        document.getElementById("casesBox").innerHTML =
			"<a id='selectBtn' onclick='changeMode(0)'>select cases</a><span id='selInfo'></span>" +
            (casesAmount == 0 ? "" : " | cases selected: " + casesAmount);
        showScramble();
    }
    else // select
    {
        renderSelection();
    }
}

/// \returns random integer from 0 to h
function randomNum(h) {
    return Math.floor(Math.random() * h);
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

