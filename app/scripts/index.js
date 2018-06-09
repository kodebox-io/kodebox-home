import './../styles/common.scss'
import './../styles/header.scss'
import './../styles/footer.scss'
import './../styles/main.scss'

// import js
import 'bootstrap'
import 'babel-polyfill'

import $ from 'jquery'

if (process.env.NODE_ENV !== 'production') {
  require('./../index.pug')
}

$('nav').find('a').click(function (e) {
  e.preventDefault()
  var section = $(this).attr('href')
  $('html, body').animate({
    scrollTop: $(section).offset().top
  })
})

$(window).on('scroll', function () {
  $('.scroll-target').each(function () {
    if ($(window).scrollTop() >= $(this).offset().top) {
      var id = $(this).attr('id')
      $('nav li').removeClass('active')
      $('nav li a').blur()
      $('nav a[href="#' + id + '"]').parent().addClass('active')
    }
  })
})
