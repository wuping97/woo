$(function () {
	$('#username').blur(function () {
		var str = $('#username').val();
		isUsername(str);
	})
	
	$('#psd').blur(function () {
		var str = $('#psd').val();
		isPsd(str);
	})

	$('#submit').click(function () {
		// body...
		var user_str = $('#username').val();
		var psd_str = $('#psd').val();

		var error_str = '';
		var tag = 0;
		if(!isUsername(user_str)){
			tag = 1;
			error_str = error_str + '用户名输入不正确！\n';
		}

		
		if (!isPsd(psd_str)) {
			tag = 1;
			error_str = error_str + '密码输入不正确！\n';

		}

		alert(error_str);
	})
})

function isUsername(str) {
	if (str == '') {
		$('#username1').css('color','#c12317');
		$('#username1').text('用户名输入不能为空！');
		return false;
	}else{
		var re = /^[a-zA-Z]\w{5,11}$/;
	if(re.test(str)){
		$('#username1').css('color','#000');
		$('#username1').text('*');
		return true;
	}else{
		$('#username1').css('color','#c12317');
		$('#username1').text('*以英文开头，4-16个英文、数字或下划线字符！');
		return false;
	}
}
}


function isPsd(str) {
	if (str == '') {
		$('#psd1').css('color','#c12317');
		$('#psd1').text('*必须为英文、数字、下划线，且长度在6-24个字符！');
		return false;
	}else{
	var re = /^\w{6,24}$/;
	if(re.test(str)){
		$('#psd1').css('color','#000');
		$('#psd1').text('*');
		return true;
	}else{
		$('#psd1').css('color','#c12317');
		$('#psd1').text('*必须为英文、数字、下划线，且长度在6-24个字符！');
		return false;
}
}
}
