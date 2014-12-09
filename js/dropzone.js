var imageWrapper = document.getElementById('images-wrapper');

function handleFileSelect(evt) {
  for (var i = 0; i < evt.target.files.length; i++) {
    var reader = new FileReader();
    
    reader.readAsDataURL(evt.target.files[i]);

    reader.onload = function(event) {
      var image = '<img src="' + event.target.result + '" style="' +
        'max-width: 300px;' +
        'max-height: 300px;' +
        'display: inline-block;' +
        'vertical-align: middle;' +
         'margin-left: 15px;' +
         'margin-bottom: 15px;' +
      '">';
      console.log(image);
      imageWrapper.insertAdjacentHTML('beforeend', image);
    }
  }
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);