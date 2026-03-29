/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $vlinks_persist_tail = $vlinks.children("*.persist.tail");
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

// Measure total width of visible-links children (intrinsic content width)
// Use outerWidth(false) to exclude margins — margin-right:auto on the
// first flex child would inflate outerWidth(true) to the full container width.
function getContentWidth() {
  var w = 0;
  $vlinks.children().each(function () {
    w += $(this).outerWidth(false);
  });
  return w;
}

function updateNav() {

  // If breaks is empty but items are in hidden-links, move them all back first
  if (breaks.length === 0 && $hlinks.children().length > 0) {
    while ($hlinks.children().length > 0) {
      if ($vlinks_persist_tail.length > 0) {
        $hlinks.children().first().insertBefore($vlinks_persist_tail);
      } else {
        $hlinks.children().first().appendTo($vlinks);
      }
    }
    $btn.addClass('hidden');
    closeMenu();
  }

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;
  var contentWidth = getContentWidth();

  // The visible list is overflowing the nav
  if (contentWidth > availableSpace) {

    while (contentWidth > availableSpace && $vlinks.children("*:not(.persist)").length > 0) {
      // Record the content width
      breaks.push(contentWidth);

      // Move item to the hidden list
      $vlinks.children("*:not(.persist)").last().prependTo($hlinks);

      availableSpace = $btn.hasClass("hidden") ? $nav.width() : $nav.width() - $btn.width() - 30;
      contentWidth = getContentWidth();

      // Show the dropdown btn
      $btn.removeClass("hidden");
    }

    // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    while (breaks.length > 0 && availableSpace > breaks[breaks.length - 1]) {
      // Move the item to the visible list
      if ($vlinks_persist_tail.children().length > 0) {
        $hlinks.children().first().insertBefore($vlinks_persist_tail);
      } else {
        $hlinks.children().first().appendTo($vlinks);
      }
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if (breaks.length < 1) {
      $btn.addClass('hidden');
      closeMenu();
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // update masthead height and the body/sidebar top padding
  var mastheadHeight = $('.masthead').height();
  $('body').css('padding-top', mastheadHeight + 'px');
  if ($(".author__urls-wrapper button").is(":visible")) {
    $(".sidebar").css("padding-top", "");
  } else {
    $(".sidebar").css("padding-top", mastheadHeight + "px");
  }

}

// Window listeners

$(window).on('resize', function () {
  updateNav();
});
screen.orientation.addEventListener("change", function () {
  updateNav();
});

function openMenu() {
  $hlinks.removeClass('hidden');
  $btn.addClass('close');
  // Disable backdrop-filter so position:fixed escapes masthead containing block
  var masthead = document.querySelector('.masthead');
  masthead.style.backdropFilter = 'none';
  masthead.style.webkitBackdropFilter = 'none';
  document.querySelector('.mobile-nav-overlay').classList.add('is-visible');
  document.body.classList.add('nav-open');
}

function closeMenu() {
  $hlinks.addClass('hidden');
  $btn.removeClass('close');
  var masthead = document.querySelector('.masthead');
  masthead.style.backdropFilter = '';
  masthead.style.webkitBackdropFilter = '';
  document.querySelector('.mobile-nav-overlay').classList.remove('is-visible');
  document.body.classList.remove('nav-open');
}

$btn.on('click', function () {
  if ($hlinks.hasClass('hidden')) {
    openMenu();
  } else {
    closeMenu();
  }
});

document.querySelector('.mobile-nav-overlay').addEventListener('click', function () {
  closeMenu();
});

// Close menu on link click (mobile)
$hlinks.on('click', 'a', function () {
  closeMenu();
});

updateNav();