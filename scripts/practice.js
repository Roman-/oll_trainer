/// \param m = mode: 0 = selection, 1 = practicing, 2 = recap
function changeMode(m)
{
    var pr = document.getElementsByClassName("practice_layout");
    for (var i = 0; i < pr.length; i++)
        pr[i].style.display = (m != 0) ? 'initial' : 'none';

    var se = document.getElementsByClassName("selection_layout");
    for (var i = 0; i < se.length; i++)
        se[i].style.display = (m == 0) ? 'initial' : 'none';

    if (m == 2) {
        // recap
        var casesAmount = window.selCases.length;
        window.recapArray = window.selCases.slice();

        showScramble();
    }
    else if (m == 1) {
        // practice
        recapArray = [];
        var casesAmount = window.selCases.length;
        showScramble();
    }
    else if (m == 0) {
        // select
        recapArray = [];
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

