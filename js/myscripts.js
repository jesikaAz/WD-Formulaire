
$('.button').click(function(){
  var $btn = $(this),
      $step = $btn.parents('.form-body'),
      stepIndex = $step.index(),
      $pag = $('.form-header span').eq(stepIndex);

  if(stepIndex === 0 || stepIndex === 1) { step1($step, $pag); }
  else { step3($step, $pag); }
  
});


function step1($step, $pag){
  
  // animation de sortie de l'écran
  $step.addClass('animate-out');
  
  // Animer l'apparition de l'étape
  setTimeout(function(){
    $step.removeClass('animate-out is-showing')
         .next().addClass('animate-in');
    $pag.removeClass('is-active')
          .next().addClass('is-active');
  }, 600);
  
  // Après l'animation, ajuster les classes
  setTimeout(function(){
    $step.next().removeClass('animate-in')
          .addClass('is-showing');
    
  }, 1200);
}


function step3($step, $pag){

  // Animer la fin de l'étape 
  $step.parents('.form-wrap').addClass('animate-up');

  setTimeout(function(){
    $('.rerun-button').css('display', 'inline-block');
  }, 300);
}
// Bouton recommencer
$('.rerun-button').click(function(){
 $('.form-wrap').removeClass('animate-up')
                  .find('.form-body')
                  .first().addClass('is-showing')
                  .siblings().removeClass('is-showing');

  $('.form-header span').first().addClass('is-active')
                          .siblings().removeClass('is-active');
 $(this).hide();
});



