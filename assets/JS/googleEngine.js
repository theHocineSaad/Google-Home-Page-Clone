function setFocus(){
    document.getElementById('searchField').focus();
};

function setShadow(){
    document.getElementsByClassName('searchBar')[0].setAttribute('class', 'searchBar shadow');
}
function removeShadow(){
    document.getElementsByClassName('searchBar')[0].setAttribute('class', 'searchBar');
}

function setFocusAndShadow(){
    setFocus();
    setShadow();
}

document.getElementById('searchField').addEventListener('focusin', function(){setShadow()});
document.getElementById('searchField').addEventListener('focusout', function(){removeShadow()});


