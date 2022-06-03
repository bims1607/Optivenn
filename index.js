let myinp;
let wiringDiagram;
let generalOutline;
let panelOutline;
let enclosuerSize, chamberDia, chamberDia_l;
let numberOfLamps,
  panelType,
  panelType_l,
  voltage,
  voltage_l,
  certification,
  certification_l,
  lampLength_l,
  lampLength;
const fixNo = "52963-";
document.getElementById("input").addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    document.getElementById("submit").click();
  }
});

document.getElementById("submit").onclick = () => {
  myinp = document.getElementById("input").value.toUpperCase();
  const myarray = myinp.split("-")[2];
  switch (myarray[12]) {
    case "1":
      enclosuerSize = "S";
      panelOutline = "53332";
      break;
    case "2":
      enclosuerSize = "M";
      panelOutline = "52957";
      break;
    case "3":
      enclosuerSize = "L";
      panelOutline = "52958";
      break;
  }
  numberOfLamps = parseInt(myarray[0] + myarray[1]);
  let packNum =
    numberOfLamps >= 1 && numberOfLamps <= 4
      ? "04"
      : numberOfLamps > 4 && numberOfLamps <= 8
      ? "08"
      : numberOfLamps >= 9 && numberOfLamps <= 12
      ? "12"
      : null;
  switch (myarray[11]) {
    case "1":
      panelType = "Type 1";
      panelType_l = "1";
      break;
    case "2":
      panelType = "Type 12";
      panelType_l = "2";
      break;
    case "3":
      panelType = " Type 4X with Fan";
      panelType_l = "4";
      break;
    case "4":
      panelType = "type 4X with A/C";
      panelType_l = "4";
      break;
  }
  let voltage_l = myarray[13] === "1" ? "1" : "2";
  let certification_l = myarray[18] === "U" ? "1" : "2";
  let lampLength_l = myarray[4] === "S" ? "1" : "2";
  wiringDiagram =
    fixNo +
    enclosuerSize +
    packNum +
    panelType_l +
    voltage_l +
    certification_l +
    lampLength_l;
  switch (myarray[2]) {
    case "C":
      chamberDia = "6 inch";
      chamberDia_l = "52951";
      break;
    case "D":
      chamberDia = "8 inch";
      chamberDia_l = "52952";
      break;
    case "E":
      chamberDia = "10 inch";
      chamberDia_l = "52953";
      break;
    case "F":
      chamberDia = "12 inch";
      chamberDia_l = "52954";
      break;
    case "G":
      chamberDia = "14 inch";
      chamberDia_l = "52955";
      break;
    case "H":
      chamberDia = "16 inch";
      chamberDia_l = "52956";
      break;
  }
  document.getElementById("wiring-d").innerHTML = wiringDiagram;
  document.getElementById("wiring-d-a").href =
    "http://portal.tuv.ewqg.com/rdocs/Released%20Documents/" +
    wiringDiagram +
    ".pdf";
  document.getElementById("general-o").innerHTML = chamberDia_l;
  document.getElementById("general-o-a").href =
    "http://portal.tuv.ewqg.com/rdocs/Released%20Documents/" +
    chamberDia_l +
    ".pdf";
  document.getElementById("panel-o").innerHTML = panelOutline;
  document.getElementById("panel-o-a").href =
    "http://portal.tuv.ewqg.com/rdocs/Released%20Documents/" +
    panelOutline +
    ".pdf";
};
