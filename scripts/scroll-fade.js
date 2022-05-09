$(function(){
	//スクロール時に対象にクラスを付与しアニメーションを実行
	$(window).scroll(function (){
		$('.scroll-fade').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 75){
				$(this).addClass('scrollin');
			}
		});
	});

	//戻るボタン押下後、ページロード時にページ位置が一番上でない場合
	//スクロールするまで要素が表示されないための対処
	if($(window).scrollTop() != 0) {
		$('.scroll-fade').addClass('scrollin');
	}
});

