"use strict";

//# switch_2_5

function check(){
  const input = document.querySelector("#bundeslandInfo").value.toLowerCase();
  let output;
  switch(input){
    case "baden-württemberg":
      output = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
      break;
      case "bayern":
      output = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
      break;
      case "berlin":
      output = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
      break;
      case "brandenburg":
      output = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
      break;
      case "bremen":
      output = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
      break;
      case "hamburg":
      output = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
      break;
      case "hessen":
      output = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
      break;
      case "mecklenburg-vorpommern":
      output = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
      break;
      case "niedersachsen":
      output = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
      break;
      case "nordrhein-westfalen":
      output = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
      break;
      case "rheinland-pfalz":
      output = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
      break;
      case "saarland":
      output = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
      break;
      case "sachsen":
      output = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
      break;
      case "sachsen-anhalt":
      output = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
      break;
      case "schleswig-holstein":
      output = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
      break;
      case "thüringn":
      output = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
      break;
      default:
        output = "Ein solches Bundesland gibt es in Deutschland nicht."
  }

  document.querySelector("#bundeslandInfoErgebnis").innerHTML = output;
}

//# Switch_2_7

function showTxt() {
  const inputValue = document.querySelector("#mylist").value;
  let outputValue;

  switch(inputValue){
    case "0":
      outputValue = "<b>Brief und Postkarte</b> <br>L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm";
      break;
      case "1":
      outputValue = "<b>DHL Paket 2 kg</b> <br>bis 60 x 30 x 15 cm";
      break;
      case "2":
      outputValue = "<b>DHL Paket 5 kg</b> <br>bis 120 x 60 x 60 cm";
      break;
      case "3":
      outputValue = "<b>DHL Paket 10 kg</b> <br>bis 120 x 60 x 60 cm";
      break;
      default:
        outputValue = "<b>Extra große Größe</b>";
  }
  document.querySelector("#masse").innerHTML = outputValue;
}