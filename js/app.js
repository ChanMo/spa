$(document).foundation(
);

$(function(){

  /** set height **/
  $("#main").css({"height":window.innerHeight-45+"px", "max-height":window.innerHeight-45+"px"});


  /** make qrcode **/
  var qrcode_link = $("#qrcode").data("link");
  $("#qrcode").qrcode(qrcode_link);

  /** select the template **/
  $("#work").find(".columns").click(function(){
    $(this).siblings(".columns").removeClass("active");
    $(this).addClass("active");
  });

  /** make link for upload image **/
  $("#upload-image").click(function(e){
    $("#image1").click();
    e.preventDefault();
  });

  /** make link for color picker **/
  $("#onepage").find("div").load('../templates/base/edit.html', function(){
    var length = $("#onepage .page").length;
    var i = 1;
    var html = '';
    for(i; i<=length; i++){
      html += '<li>'+i+'</li>';
    }
    $("#page_index").html(html);
    page_init();
  });
  var position = $("#onepage").find("div").position();
  $("#page_tool").css({left:position.left+400,top:position.top});
  $("#page_index").css({left:position.left-40,top:position.top});

  $("#color_picker").click(function(){
    $("#color").click();
    e.preventDefault();
  });
  $("#color").change(function(){
    var color = $(this).val();
    $("#onepage").find(".page:visible").css("background-color", color);
  });

  /** make the wysiwyg edit **/
  $(".content").wysiwyg({
    toolbar: 'selection',
    // 'selection'|'top'|'top-selection'|'bottom'|'bottom-selection'
    buttons: {
      bold: {
        title: 'Bold (Ctrl+B)',
        image: '\uf032', // <img src="path/to/image.png" width="16" height="16" alt="" />
        hotkey: 'b'
      },
      italic: {
        title: 'Italic (Ctrl+I)',
        image: '\uf033', // <img src="path/to/image.png" width="16" height="16" alt="" />
        hotkey: 'i'
      },
      underline: {
        title: 'Underline (Ctrl+U)',
        image: '\uf0cd', // <img src="path/to/image.png" width="16" height="16" alt="" />
        hotkey: 'u'
      },
      strikethrough: {
        title: 'Strikethrough (Ctrl+S)',
        image: '\uf0cc', // <img src="path/to/image.png" width="16" height="16" alt="" />
        hotkey: 's'
      },
      forecolor: {
        title: 'Text color',
        image: '\uf1fc' // <img src="path/to/image.png" width="16" height="16" alt="" />
      },
      highlight: {
        title: 'Background color',
        image: '\uf043' // <img src="path/to/image.png" width="16" height="16" alt="" />
      }
    }
  });

});

/** test xml **/
function readXml(){
  xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "1.xml", false);
  xmlhttp.send();
  xmlDoc = xmlhttp.responseXML;
  //alert(xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue);
}

/** upload file **/
function handleFiles(files){
  var file = files[0];
  var img = document.createElement("img");
  img.file = file;
  //$("#upload-image").remove();
  $("#onepage").find(".page:visible").html(img);
  var reader = new FileReader();
  reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
  reader.readAsDataURL(file);
}

function page_init(){
  $("#page_index").find("li").click(function(){
    var index = $(this).index();
    $("#onepage").find(".page").hide();
    $("#onepage").find(".page:eq("+index+")").show();
  });
}
