const menu = () => {
    var documentNode = document.getElementById('content');

    // HEADING DOM
    var headingDIV = document.createElement('div');
    documentNode.classList.add('menu')
    documentNode.appendChild(headingDIV);
    var headingTitle = document.createElement('h3');
    headingDIV.appendChild(headingTitle);
    var headingText = document.createTextNode('Our Menu');
    headingTitle.appendChild(headingText);
    headingDIV.setAttribute('id', 'our-menu');

    // MENU ITEM 1 DOM

    var menuItemOneDiv = document.createElement('div');
    documentNode.appendChild(menuItemOneDiv);    
    var menuItemOneHeading = document.createElement('h4');
    menuItemOneDiv.appendChild(menuItemOneHeading);
    var menuItemOne = document.createTextNode('Omakase');
    menuItemOneHeading.appendChild(menuItemOne);
    var menuItemOneP = document.createElement('p');
    menuItemOneDiv.appendChild(menuItemOneP);
    var itemOneDescription = document.createTextNode('The chef\'s selection, a variety of seasonal fish and wagyu prepared in multiple ways.');
    menuItemOneP.appendChild(itemOneDescription);
    var itemOneParaPrice = document.createElement('p');
    menuItemOneDiv.appendChild(itemOneParaPrice);
    var itemOnePrice = document.createTextNode('$120.00 pp.');
    itemOneParaPrice.appendChild(itemOnePrice);
    menuItemOneDiv.setAttribute('id', 'menuItemOne');

    // MENU ITEM 2 DOM

    var menuItemTwoDiv = document.createElement('div');
    documentNode.appendChild(menuItemTwoDiv);    
    var menuItemTwoHeading = document.createElement('h4');
    menuItemTwoDiv.appendChild(menuItemTwoHeading);
    var menuItemTwo = document.createTextNode('Wagyu Filet Mignon');
    menuItemTwoHeading.appendChild(menuItemTwo);
    var menuItemTwoP = document.createElement('p');
    menuItemTwoDiv.appendChild(menuItemTwoP);
    var itemTwoDescription = document.createTextNode('The most tender and juicy thick cut seasoned and seared. Served with a side of roasted asparagus and mashed potatoes.');
    menuItemTwoP.appendChild(itemTwoDescription);

    var itemTwoParaPrice = document.createElement('p');
    menuItemTwoDiv.appendChild(itemTwoParaPrice);
    var itemTwoPrice = document.createTextNode('$87.00');
    itemTwoParaPrice.appendChild(itemTwoPrice);
    menuItemTwoDiv.setAttribute('id', 'menuItemTwo');

    // MENU ITEM 3 DOM, CHANGE NAMING TOO LONG AND TEDIOUS

    var itemThreeDiv = document.createElement('div');
    documentNode.appendChild(itemThreeDiv);    
    var itemThreeHead = document.createElement('h4');
    itemThreeDiv.appendChild(itemThreeHead);
    var itemThree = document.createTextNode('King Salmon');
    itemThreeHead.appendChild(itemThree);
    var itemThreeP = document.createElement('p');
    itemThreeDiv.appendChild(itemThreeP);
    var itemThreeDesc = document.createTextNode('A salmon filet seared on the grill served with rosemary and a lemon au jus. Accompanied with a side of honey roasted brussel sprouts.');
    itemThreeP.appendChild(itemThreeDesc);
    var itemThreeParaPrice = document.createElement('p');
    itemThreeDiv.appendChild(itemThreeParaPrice);
    var itemThreePrice = document.createTextNode('Market Price');
    itemThreeParaPrice.appendChild(itemThreePrice);
    itemThreeDiv.setAttribute('id', 'menuItemThree');
}

export { menu };