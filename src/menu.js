const menu = () => {
    var documentNode = document.getElementById('content');

    // HEADING DOM
    var headingDIV = document.createElement('div');
    documentNode.appendChild(headingDIV);
    var headingTitle = document.createElement('h1');
    headingDIV.appendChild(headingTitle);
    var headingText = document.createTextNode('Our Menu');
    headingTitle.appendChild(headingText);

    // MENU ITEM 1 DOM

    var menuItemOneDiv = document.createElement('div');
    documentNode.appendChild(menuItemOneDiv);    
    var menuItemOneHeading = document.createElement('h2');
    menuItemOneDiv.appendChild(menuItemOneHeading);
    var menuItemOne = document.createTextNode('Filet Mignon');
    menuItemOneHeading.appendChild(menuItemOne);
    var menuItemOneP = document.createElement('p');
    menuItemOneDiv.appendChild(menuItemOneP);
    var itemOneDescription = document.createTextNode('It is meat');
    menuItemOneP.appendChild(itemOneDescription);

    // MENU ITEM 2 DOM

    var menuItemTwoDiv = document.createElement('div');
    documentNode.appendChild(menuItemTwoDiv);    
    var menuItemTwoHeading = document.createElement('h2');
    menuItemTwoDiv.appendChild(menuItemTwoHeading);
    var menuItemTwo = document.createTextNode('Salmon');
    menuItemTwoHeading.appendChild(menuItemTwo);
    var menuItemTwoP = document.createElement('p');
    menuItemTwoDiv.appendChild(menuItemTwoP);
    var itemTwoDescription = document.createTextNode('It is fish');
    menuItemTwoP.appendChild(itemTwoDescription);

    // MENU ITEM 3 DOM, CHANGE NAMING TOO LONG AND TEDIOUS

    var itemThreeDiv = document.createElement('div');
    documentNode.appendChild(itemThreeDiv);    
    var itemThreeHead = document.createElement('h2');
    itemThreeDiv.appendChild(itemThreeHead);
    var itemThree = document.createTextNode('Lamb');
    itemThreeHead.appendChild(itemThree);
    var itemThreeP = document.createElement('p');
    itemThreeDiv.appendChild(itemThreeP);
    var itemThreeDesc = document.createTextNode('It is lamb');
    itemThreeP.appendChild(itemThreeDesc);
}

export { menu };