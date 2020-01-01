const contact = () => {
    var documentNode = document.getElementById('content');

    var headingDIV = document.createElement('div');
    documentNode.appendChild(headingDIV);
    var headingTitle = document.createElement('h3');
    headingDIV.appendChild(headingTitle);
    var headingText = document.createTextNode('Contact Us');
    headingTitle.appendChild(headingText);

    var firstHeading = document.createElement('p');
    headingDIV.appendChild(firstHeading);
    var address1 = document.createTextNode('Victor\'s Restaurant')
    firstHeading.appendChild(address1);
    
    var addressTwoHeading = document.createElement('p');
    headingDIV.appendChild(addressTwoHeading);
    var address2 = document.createTextNode('1000 Berkeley Way, Berkeley, CA 94704');
    addressTwoHeading.appendChild(address2);

    var secondHeading = document.createElement('h3');
    headingDIV.appendChild(secondHeading);
    var contactPhone = document.createTextNode('By Phone:');
    secondHeading.appendChild(contactPhone);
    var phoneStyle = document.createElement('p');
    headingDIV.appendChild(phoneStyle);
    var phoneNumber = document.createTextNode('(510) 555-5555');
    phoneStyle.appendChild(phoneNumber);

    var thirdHeading = document.createElement('h3');
    headingDIV.appendChild(thirdHeading);
    var contactEmail = document.createTextNode('By Email:');
    thirdHeading.appendChild(contactEmail);
    var emailStyle = document.createElement('p');
    headingDIV.appendChild(emailStyle);
    var emailAdd = document.createTextNode('email@emailaddress.com');
    emailStyle.appendChild(emailAdd);

    // var imageNode = document.createElement('img');
    // documentNode.appendChild(imageNode);
    // imageNode.src = 'https://cdn.vox-cdn.com/thumbor/FP91hWPMtwqrgFMIlWi4z7MxwKY=/0x0:1762x1174/1200x900/filters:focal(843x447:1123x727)/cdn.vox-cdn.com/uploads/chorus_image/image/63047503/Nama.0.jpg';
    // // imageNode.appendChild(img);

    // var copyNode = document.createElement('p');
    // documentNode.appendChild(copyNode);
    // var copyText = document.createTextNode('Good place to eat');
    // copyNode.appendChild(copyText);
    // documentNode.appendChild(textNode);
}

export { contact };

// var documentNode = document.getElementById('content');

// var headingNode = document.createElement('h1');
// var textNode = document.createTextNode('Victor\s Restaurant');
// var restaurantName = headingNode.appendChild(textNode);

// documentNode.appendChild(restaurantName);