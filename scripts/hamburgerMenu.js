$(function(){
	//ハンバーガーボタンクリック時
	$('header > nav > div > label').on('click', function() {
		if($('header > nav > ul').css('display') === 'block') {
	    	$('header > nav > ul').slideUp('1500');
		}else {
	    	$('header > nav > ul').slideDown('1500');
		}
	});
	//画面リサイズ時にメニュー表示
	$(window).resize(function() {
		if($(window).width()>768){
			$('header > nav > ul').css('display','flex');
		}else {
			$('header > nav > ul').css('display','none');
		}
		//リサイズ時にハンバーガーボタンのチェック外す
		$("#my-parts-checkbox").removeAttr('checked').prop('checked', false).change();
	});
});