$(document).ready(function(){
  /** fill xml data to html **/
  xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "index.xml", false);
  xmlhttp.send();
  xmlDoc = xmlhttp.responseXML;
  $("title").html(xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue);
  $("#image1").attr("src", xmlDoc.getElementsByTagName("image")[0].childNodes[0].nodeValue);
  $("#image2").attr("src", xmlDoc.getElementsByTagName("image")[1].childNodes[0].nodeValue);
  $("#image3").attr("src", xmlDoc.getElementsByTagName("image")[2].childNodes[0].nodeValue);
  $("#image4").attr("src", xmlDoc.getElementsByTagName("image")[3].childNodes[0].nodeValue);
  $("#image5").attr("src", xmlDoc.getElementsByTagName("image")[4].childNodes[0].nodeValue);

  $('#fullpage').fullpage({
    css3: true,
    verticalCentered: false,
    resize: false,
    responsive: 1,
    scrollBar: true,
    continuousVertical: true
  });
});
