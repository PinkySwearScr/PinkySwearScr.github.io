var ctrl = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave'
  }
});

$("section").each(function() {

  var name = $(this).attr('id');
  
  new ScrollMagic.Scene({
    triggerElement: this
  })
  .setPin(this)
  .loglevel(3)
  .addTo(ctrl);
 
});





var ctrl2 = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: '0.3'
  }
});













$("section").each(function() {

  var name = $(this).attr('class');
  
  new ScrollMagic.Scene({
    triggerElement: this
  })
  // .setPin(this)
 //  .addIndicators({
 //    colorStart: "rgba(255,255,0,0.5)",
 //    colorEnd: "rgba(255,255,0,0.5)", 
 //    colorTrigger : "rgba(255,0,255,1)",
 //    name:name
	// })
  // .loglevel(3)
  .setClassToggle("section#actor1", "opacity")
  .addTo(ctrl2);
 
});