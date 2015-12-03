var clock = new clock();
$(document).ready(function() {
    clock.startclock();
});

var stopwatch = new stopwatch();

$('#stopwatch_start').click(function(){
  stopwatch.start();
});

$('#stopwatch_pause').click(function(){
  stopwatch.pause();
});

$('#stopwatch_reset').click(function(){
  stopwatch.reset();
});

var alarm = new alarm();

$('#alarm_start').click(function(){
  var min = $('#alarm_minute').val();
  var sec = $('#alarm_second').val();
  alarm.setalarm(min,sec);
  alarm.start();
});

$('#alarm_cancel').click(function(){
  alarm.cancel();
});