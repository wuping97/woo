$(function () {
	$('#year').val('2020');
	$('#mon').val('1');
	$('#day').val('24');

	$('#tYear').text('2020');
	$('#tMon').text('1');
	$('#tDay').text('24');

	$('.t_input').blur(function () {
		var y = $('#year').val();
		var m = $('#mon').val();
		var d = $('#day').val();

		$('#tYear').text(y);
		$('#tMon').text(m);
		$('#tDay').text(d);
	})

	var tm = null;

	$('#start').click(function () {
		tm = setInterval(updateTime,1000);
		updateTime();
	})

	function updateTime() {
		var y = $('#tYear').text();
		var m = $('#tMon').text()-1;
		var d = $('#tDay').text();

		var target_time = new Date(y,m,d);
		var now_time = new Date();

		var n_time = (target_time.getTime() - now_time.getTime())/1000;

		if (n_time<0) {
			if (tm != null) {
				clearInterval(tm);
			}
			n_time = 0;
			alert('日期已过！');
		}
		var nDay = parseInt(n_time/(24*60*60));
		n_time = n_time%(24*60*60);

		var nHour = parseInt(n_time/(60*60));
		n_time = n_time%(60*60);

		var nMin = parseInt(n_time/60);
		n_time = n_time%60;

		var nSec =parseInt(n_time);
	

		$('#nDay').text(fillZero(nDay,3));
		$('#nHour').text(fillZero(nHour,2));
		$('#nMin').text(fillZero(nMin,2));
		$('#nSec').text(fillZero(nSec,2));

	}

	function fillZero(num,digit) {
		num = num+'';
		while(num.length < digit){
			num = '0' + num;
		}
		return num;
	}
})