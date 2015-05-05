$(document).foundation(
);

$(function(){
  $("#work").find(".columns").click(function(){
    $(this).siblings(".columns").removeClass("active");
    $(this).addClass("active");
  });

  /** upload image **/
  $("#upload-image").click(function(e){
    $("#upload-image-input").click();
    e.preventDefault();
  });

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


/** upload file **/
function handleFiles(files){
  var file = files[0];
  var img = document.createElement("img");
  img.file = file;
  $("#upload-image").remove();
  $("#onepage").append(img);
  var reader = new FileReader();
  reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
  reader.readAsDataURL(file);
}
