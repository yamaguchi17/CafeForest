$(function () {
	/*******special*****start***************************************/
	//今月のコーヒーの読み込み先のURLを設定
	var y="";
	var m="";
	var urlSp="";
	$.ajax({
		type: 'GET',
		url: 'special.htm',
		dataType: 'html',
		success: function (data1) {
			var htmlText = $(data1).text();
			var scriptPos = htmlText.indexOf('nowyymm(');
			var scriptMonth = htmlText.substr(scriptPos+8, 8);
			var yyyydd = scriptMonth.replace(/[^0-9]/g, '');
			y = yyyydd.substr(0,4);
			if(yyyydd.length < 6){
				m = yyyydd.substr(4,1);
			}else{
				m = yyyydd.substr(4,2);
				m = Number(m);
			}
			urlSp = "special/"+y+"/"+m+".htm";
			getEle();
		},
		error: function () {
			alert('問題が発生しました。');
		}
	});
	//今月のコーヒーのhtmlファイルからtopへ表示する要素を取得
	function getEle(){
		$.ajax({
			type: 'GET',
			url: urlSp,
			dataType: 'html',
			success: function (data) {
				$('#specialMonth').html(m);
				var monthlyNameArray = ['none','January','February','March','April','May','June','July','August','September','October','November','December'];
				$('#specialMonthName').html(monthlyNameArray[m]);
				var h3 = $(data).find('h3');
				var p = $(data).find('p');
				var img = $(data).find('img');				
				$('#specialCoffee h3').html($(h3[0]).text());
				$('#specialCoffee p').html($(p[1]).text());
				$('#specialCoffee img:nth-of-type(2)').attr('src',$(img[5]).attr('src'));
				$('#specialCake h3').html($(h3[1]).text());
				$('#specialCake p').html($(p[7]).text());
				$('#specialCake img').attr('src',$(img[6]).attr('src'));
			},
			error: function () {
				alert('問題が発生しました。');
			}
		});
	}
	/*******special*****end***************************************/


	/*******news*****start***************************************/
	//ページを表示させる場所の設定
	var $content = "";
	//newsリンクをクリックした時の処理
	$(document).on('click', '#news a', function (event) {
		//.gnavi aのhrefにあるリンク先を保存
		var link = $(this).attr("href");
		//new以外のリンク場合は遷移させるため処理をスキップ
		if (link.indexOf("news/") !== 0) {
			return;
		}
		//ページ遷移を止める
		event.preventDefault();
		//全画面表示させる要素を追加（cssはstyleシートに記入)
		var divTag = $('<div />').attr({
			id: 'newsDisplay'
		});
		$('body').append(divTag);
		$('#newsDisplay').append('<div />');
		$content = $('#newsDisplay > div');
		//閉じるボタンを配置
		//領域下に表示させるボタン
		var btnTag = $('<a>戻る</a>').attr({
			id: 'closeBtn1',
			class: 'closeBtn btn01'
		});
		$('#newsDisplay > div').append(btnTag);
		//ページ取得を実行
		getPage(link);
	});

	//HTMLページを取得
	function getPage(elm) {
		$.ajax({
			type: 'GET',
			url: elm,
			dataType: 'html',
			success: function (data) {
				$content.prepend(data).fadeIn(600);
			},
			error: function () {
				alert('問題が発生しました。');
			}
		});
	}
	//戻るボタン処理　news画面を閉じる
	$(document).on('click', '#closeBtn1, #closeBtn2', function () {
		$("#newsDisplay").remove();
	});
	//外枠クリックで閉じる
	$(document).on('click', '#newsDisplay', function (event) {
		if($('#newsDisplay > div').length){
			if(!$(event.target).closest('#newsDisplay > div').length) {
				$("#newsDisplay").remove();
			  }
		}
	  });
	/*******news*****end***************************************/
});
