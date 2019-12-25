$(function () {
	$('#username').blur(function () {
		var str = $('#username').val();
		isUsername(str);
	})
	$('#e-mail').blur(function () {
		var str = $('#e-mail').val();
		isEmail(str);

	})
	$('#psd').blur(function () {
		var str = $('#psd').val();
		isPsd(str);
	})

	$('#psdagin').blur(function () {
		var str = $('#psdagin').val();
		isPsdagin(str);
	})

	$('#idnum').blur(function () {
		var str = $('#idnum').val();
		isIdnum(str);
	})

	$('#phonenum').blur(function () {
		var str = $('#phonenum').val();
		isPhonenum(str);
	})

	$('#submit').click(function () {
		// body...
		var user_str = $('#username').val();
		var email_str = $('#e-mail').val();
		var psd_str = $('#psd').val();
		var psdagin_str = $('#psdagin').val();
		var idnum_str = $('#idnum').val();
		var phonenum_str = $('#phonenum').val();

		var error_str = '';
		var tag = 0;
		if(!isUsername(user_str)){
			tag = 1;
			error_str = error_str + '用户名输入不正确！\n';
		}

		if (!isEmail(email_str)) {
			tag = 1;
			error_str = error_str + '电子邮箱输入不正确！\n'
		}

		if (!isPsd(psd_str)) {
			tag = 1;
			error_str = error_str + '密码输入不正确！\n';

		}

		if (!isPsdagin(psdagin_str)) {
			error_str = error_str + '请再次输入密码！\n';
		}

		if (!isIdnum(idnum_str)) {
			error_str = error_str + '身份证号码格式不正确！\n';
		}

		if (!isPhonenum(phonenum_str)) {
			error_str = error_str + '电话号码格式不正确！';
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
		$('#username1').text('*只能以英文开头，4-16个英文、数字或下划线字符！');
		return false;
	}
}
}

function isEmail(str) {
	if (str == '') {
		$('#e-mail1').css('color','#c12317');
		$('#e-mail1').text('电子邮箱格式不正确！');
		return false;
	}else{
	var re = /^\w+((-\w+) | (\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	if(re.test(str)){
		$('#e-mail1').css('color','#000');
		$('#e-mail1').text('*');
		return true;
	}else{
		$('#e-mail1').css('color','#c12317');
		$('#e-mail1').text('*电子邮箱格式不正确！');
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

function isPsdagin(str) {
	if (str == '') {
		$('#psdagin1').css('color','#c12317');
		$('#psdagin1').text('*两次密码输入不一致！');
		return false;
	}
	else{
		var re = $('#psd').val();
		if(re != str){
			$('#psdagin1').css('color','#c12317');
			$('#psdagin1').text('*两次密码输入不一致！');
			return false;
		}
		else{
			$('#psdagin1').css('color','black');
			$('#psdagin1').text('*');
			return true;
		}
	}
}

function isIdnum(str){
	var re = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
	if (str == '') {
		$('#idnum1').css('color','#c12317');
		$('#idnum1').text('*身份证号码格式不正确！');
		return false;
	}
	else{
		if(re.test(str)){
		$('#idnum1').css('color','#000');
		$('#idnum1').text('*');
		return true;
	}else{
		$('#idnum1').css('color','#c12317');
		$('#idnum1').text('*身份证号码格式不正确！');
		return false;
}
}
}

function isPhonenum(str) {
	var re = /^(?:(?:\(0\d{2,3}\)[- ]?\d{7,8})|(?:(?:0\d{2,3}[- ]?)?\d{7,8})|(?:1\d{10}))$/;
	if (str == '') {
		$('#phonenum1').css('color','#c12317');
		$('#phonenum1').text('*电话号码格式不正确！');
		return false;
	}
	else{
	if(re.test(str)){
		$('#phonenum1').css('color','#000');
		$('#phonenum1').text('*');
		return true;
	}else{
		$('#phonenum1').css('color','#c12317');
		$('#phonenum1').text('*电话号码格式不正确！');
		return false;
    }
}
}
