$(document).ready(function() {
  'use strict';

  var slider = new Slider('#slider'),
      imageSearch = new ImageSearch('#slider', slider.formatSlider);

  $('#search-btn').on('click', function() {
    var imageQuery = $('#search-query').val();
    if (imageQuery) {
      imageSearch.search(imageQuery);
    }
  });

  $('#prev-slide').on('click', slider.prevImage);
  $('#next-slide').on('click', slider.nextImage);

});

<!-- ********************************************************************* -->

var ImageSearch = (function() {
  'use strict';
  var imageSearch,
      container,
      isContainerProvided,
      formatFuncCallback;

  google.load("search", "1");
  google.setOnLoadCallback(init);

  function init() {
    imageSearch = new google.search.ImageSearch();
    imageSearch.setSearchCompleteCallback(null, onSearchComplete, null);
  }

  function onSearchComplete() {
    if (imageSearch.results && imageSearch.results.length > 0) {
      imageSearch.results.forEach(function(result) {
        var img = document.createElement('img');
        img.src = result.url;
        container.appendChild(img);
      });

      formatFuncCallback();
    }
  }

  function search(query) {
    if (isContainerProvided) {
      imageSearch.execute(query);
    } else {
      throw new Error('A container must be provided where the search results will be appended.');
    }
  }

  function ImageSearch(selector, outputFormatFunc) {
    container = document.querySelector(selector);
    formatFuncCallback = outputFormatFunc;

    if (container) {
      isContainerProvided = true;
    } else {
      throw new Error('The provided selector is invalid.');
    }
  }

  ImageSearch.prototype.search = search;

  return ImageSearch;

}());

<!-- ********************************************************************* -->

var Slider = (function($) {
  'use strict';

  var $slider;

  function Slider(selector) {
    if (!(this instanceof Slider)) {
      return new Slider(selector);
    }

    $slider = $(selector);
  }

  Slider.prototype.formatSlider = function formatSlider() {
    var $images = $slider.find('img');

    $images.hide();
    $images.first().addClass('current-slide').show();
  };

  Slider.prototype.nextImage = function nextImage() {
    var $nextSlide = $slider.find('img.current-slide').next('img');

    if ($nextSlide.length > 0) {
      $slider.find('img.current-slide')
        .removeClass('current-slide').fadeOut(function() {
          $nextSlide.addClass('current-slide').fadeIn();
        });
    }
  };

  Slider.prototype.prevImage = function prevImage() {
    var $prevSlide = $slider.find('img.current-slide').prev('img');

    if ($prevSlide.length > 0) {
      $slider.find('img.current-slide')
        .removeClass('current-slide').fadeOut(function() {
          $prevSlide.addClass('current-slide').fadeIn();
        });
    }
  };

  return Slider;

}(jQuery));
