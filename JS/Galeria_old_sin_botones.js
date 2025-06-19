	

// CODIGO PARA LA GALERIA

$(document).ready(function() {
  // Crear el lightbox
  var $lightbox = $("<div class='lightbox'></div>");
  var $img = $("<img>");
  var $caption = $("<p class='caption'></p>");

  // Añadir imagen y caption al lightbox
  $lightbox.append($img).append($caption);

  // Añadir lightbox al documento
  $('body').append($lightbox);

  // Acción al hacer clic en una imagen de la galería
  $('.lightbox-gallery img').click(function(e) {
    e.preventDefault();

    // Obtener el enlace de la imagen y la descripción
    var src = $(this).attr("data-image-hd");
    var cap = $(this).attr("alt");

    // Añadir datos al lightbox
    $img.attr('src', src);
    $caption.text(cap);

    // Mostrar el lightbox
    $lightbox.fadeIn('fast');
	$('body').addClass('no-scroll');
  });

  // Acción al hacer clic en el lightbox para cerrarlo
	$lightbox.click(function() {
		$lightbox.fadeOut('fast', function() {
		  $('body').removeClass('no-scroll');
		});
	  });
});


