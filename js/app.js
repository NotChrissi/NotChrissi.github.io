function change(){
  var link = document.getElementById("link")
  var blockEl = document.getElementById("block")
  var spieltagEl = document.getElementById("spieltag")
  var anzahlEl = document.getElementById("anzahl")

  var block = blockEl.value;
  var spieltag = spieltagEl.value;
  var anzahl = anzahlEl.value;

  var href = "https://mainaqila.github.io/?";

  if(block > 0){
    href += "&block=" + block
  }
  if(spieltag > 0){
    href += "&spieltag=" + spieltag
  }
  if(anzahl > 0){
    href += "&anzahl=" + anzahl
  }

  link.href = href;
  link.innerHTML = href;

}
