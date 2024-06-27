$(function() {
  'use strict';

  //Tinymce editor
  if ($("#team-bio").length) {
    tinymce.init({
      selector: '#team-bio',
      height: 400,
      theme: 'silver',
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
      ],
      toolbar1: 'undo redo | insert | styleselect | forecolor bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      // toolbar2: 'print preview media |  backcolor emoticons | codesample help',
      image_advtab: true,
      templates: [{
          title: 'Test template 1',
          content: 'Test 1'
        },
        {
          title: 'Test template 2',
          content: 'Test 2'
        }
      ],
      content_css: []
    });
  }
  
});

$(function() {
  'use strict';

  //Tinymce editor
  if ($("#commentEdit").length) {
    tinymce.init({
      selector: '#commentEdit',
      height: 200,
      theme: 'silver',
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
      ],
      toolbar2: ' forecolor bold italic | bullist numlist | link image',
      // toolbar2: 'print preview media |  backcolor emoticons | codesample help',
      image_advtab: true,
      
      content_css: []
    });
  }
  
});