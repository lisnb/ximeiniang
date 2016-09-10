/**
* @Author: lisnb
* @Date:   2016-09-10T17:58:16+08:00
* @Email:  lisnb.h@hotmail.com
* @Last modified by:   lisnb
* @Last modified time: 2016-09-10T23:04:35+08:00
*/
(function($) {
$(document).ready(function() {
  var dbpath = './db/dishes.json'
  var tmpl_single_dish = $.templates('#tmpl-single-dish')
  var tmpl_single_slide = $.templates('#tmpl-single-slide')
  var tmpl_section = $.templates('#tmpl-section')
  function getDBData(callback) {
    $.get(dbpath, function(data){
      // console.log(data);
      // console.log(typeof(data))
      // var dishes = JSON.parse(data);
      callback(data['dishes'])
    })
  }
  function initFullpage(dishes) {
    var dishesArray = []
    var currentDishHTML = ''
    $.each(dishes, function(index, dish) {
      // console.log(dish)
      if (dish['multislide']) {
        currentDishHTML = tmpl_single_slide.render(dish['slides'])
      } else {
        currentDishHTML = tmpl_single_dish.render(dish['slide'])
      }
      dishesArray.push({
        'slides': currentDishHTML
      })
    })
    // console.log(dishesArray)
    var fullpageHTML = tmpl_section.render(dishesArray)
    // console.log(fullpageHTML)
    $('#fullpage').html(fullpageHTML)
    $('#fullpage').fullpage({
        afterRender: function(){
            $.adaptiveBackground.run({
              parent: '.section',
              defaultColor: '#000'
            })
        }
    })
  }
  function init() {
    getDBData(initFullpage);
  }

  init();
})
})(jQuery)
