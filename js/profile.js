function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function test() {
    var testDiv = document.createElement("div");
    testDiv.style.backgroundColor = "rgba(238, 238, 238, 0.2)";
    testDiv.style.height = "300px";
    testDiv.style.width = "200px";
    testDiv.style.marginTop = "40px";
    testDiv.style.marginRight = "auto";
    testDiv.style.marginLeft = "30px";
    testDiv.style.float = "left";
    testDiv.id = 'block';


    testDiv.style.fontFamily = "Arial, Helvetica, sans-serif";
    testDiv.style.fontSize = "20px";
    testDiv.style.color = "rgba(241, 241, 241, 1)";
    testDiv.style.textAlign = "center";

    var testImg = document.createElement("img");
    testImg.setAttribute("src", "./Keeper/img/self.jpg");
    testImg.setAttribute("height", "200");
    testImg.setAttribute("width", "200");

    testDiv.appendChild(testImg);

    var chName = document.createElement("div");
    var chNameNode = document.createTextNode("陳 鍾 逸");
    chName.appendChild(chNameNode);

    testDiv.appendChild(chName);

    var enName = document.createElement("div");
    var enNameNode = document.createTextNode("Danny");
    enName.appendChild(enNameNode);

    testDiv.appendChild(enName);

    var phone = document.createElement("div");
    var phoneNode = document.createTextNode("0926240268");
    phone.appendChild(phoneNode);

    testDiv.appendChild(phone);

    var email = document.createElement("div");
    var emailNode = document.createTextNode("dannyisadog10@gmail.com");
    email.style.fontSize = "15px";
    email.appendChild(emailNode);

    testDiv.appendChild(email);

    document.getElementById("my-profile").appendChild(testDiv);
}
