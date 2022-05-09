var y,m;
var flg = true;
function nowyymm(nowyy, nowmm) {
//HTMLから現在の西暦と月を読み込んで表示する
y=nowyy;
m=nowmm;
createManth();
	
//バックナンバーの画像と文字を作成する
	for(var listcount=1; listcount<13; listcount++){
		if(m===1){
				y=y-1;
				m=12;
		}else{
			m=m-1;
		}
			createImg();
	}
	
	/*スペシャルページをメインのHTMLに表示処理*/
	function createManth(){
	var man = new XMLHttpRequest(),
	method = "GET",
	url = "special/"+y+"/"+m+".htm";//読み込まれるHTMLを指定
	var box=document.getElementById("manth");//読み込みたい位置を指定
	man.open(method, url, true);
	man.onreadystatechange = function () {
	if(man.readyState === 4 && man.status === 200) {
	var restxt=man.responseText;//String型で取得
	box.innerHTML=restxt;
		createEnglish();
	}
	};
	man.send();
	}
	
	/*バックナンバー用のケーキ画像表示処理*/
	function createImg(){
		var backImg = new XMLHttpRequest();
				var backbox=document.querySelector("#list"+listcount+" > a");//読み込みたい位置を指定
				backImg.responseType="document";
				backImg.open("GET", "special/"+y+"/"+m+".htm", true);
				var backym = y+"/"+m;
				backImg.onreadystatechange = function () {
					if(backImg.readyState === 4 && backImg.status === 200) {
					var restxt=backImg.responseXML;		
					var int=restxt.getElementById("cakeImg").firstElementChild;
					backbox.innerHTML=int.outerHTML;
					backbox.insertAdjacentHTML('beforeend', backym);
					}
				};
				backImg.send();
	}
	
	
	/*月数字の下の文字表示処理*/
	var monthlyChara = ['none','January','February','March','April','May','June','July','August','September','October','November','December'];
	function createEnglish(){
			var newP = document.createElement("p"); // p要素作成
			newP.textContent = monthlyChara[m];
			var parentDiv = document.querySelector("#special > main > section > section");
			parentDiv.appendChild(newP);
	}
	
	//過去のページのh1タイトル名変更
	function titleChange(){
	var subtitle = document.querySelector("#special > main > section > h1 span");
	var newTitle = y + "年" + m + "月のコーヒー＆ケーキ";
	subtitle.innerHTML = newTitle;
	}

	/*バックナンバーのケーキ画像クリック時のページ更新処理*/
		document.getElementById("list1").onclick = function() {
		y=nowyy;
		m=nowmm;
		for(var j=0; j<1; j++){
		if(m===1){
				y=y-1;
				m=12;
		}else{
			m=m-1;
		}
		}
		document.getElementById("manth").innerHTML = createManth();
		titleChange();
		stopFlgTimer();
	};
		document.getElementById("list2").onclick = function() {
		y=nowyy;
		m=nowmm;
		for(var j=0; j<2; j++){
		if(m===1){
				y=y-1;
				m=12;
		}else{
			m=m-1;
		}
		}
		document.getElementById("manth").innerHTML = createManth();
		titleChange();
		stopFlgTimer();
	};
		document.getElementById("list3").onclick = function() {
		y=nowyy;
		m=nowmm;
		for(var j=0; j<3; j++){
		if(m===1){
				y=y-1;
				m=12;
		}else{
			m=m-1;
		}
		}
		document.getElementById("manth").innerHTML = createManth();
		titleChange();
		stopFlgTimer();
	};
	document.getElementById("list4").onclick = function() {
		y=nowyy;m=nowmm;
		for(var j=0; j<4; j++){if(m===1){y=y-1;m=12;}else{m=m-1;}
		}document.getElementById("manth").innerHTML = createManth();titleChange();stopFlgTimer();};
	document.getElementById("list5").onclick = function() {
		y=nowyy;m=nowmm;
		for(var j=0; j<5; j++){if(m===1){y=y-1;m=12;}else{m=m-1;}
		}document.getElementById("manth").innerHTML = createManth();titleChange();stopFlgTimer();};
	document.getElementById("list6").onclick = function() {
		y=nowyy;m=nowmm;
		for(var j=0; j<6; j++){if(m===1){y=y-1;m=12;}else{m=m-1;}
		}document.getElementById("manth").innerHTML = createManth();titleChange();stopFlgTimer();};
	document.getElementById("list7").onclick = function() {
		y=nowyy;m=nowmm;
		for(var j=0; j<7; j++){if(m===1){y=y-1;m=12;}else{m=m-1;}
		}document.getElementById("manth").innerHTML = createManth();titleChange();stopFlgTimer();};
	document.getElementById("list8").onclick = function() {
		y=nowyy;m=nowmm;
		for(var j=0; j<8; j++){if(m===1){y=y-1;m=12;}else{m=m-1;}
		}document.getElementById("manth").innerHTML = createManth();titleChange();stopFlgTimer();};
	document.getElementById("list9").onclick = function() {
		y=nowyy;m=nowmm;
		for(var j=0; j<9; j++){if(m===1){y=y-1;m=12;}else{m=m-1;}
		}document.getElementById("manth").innerHTML = createManth();titleChange();stopFlgTimer();};
	document.getElementById("list10").onclick = function() {
		y=nowyy;m=nowmm;
		for(var j=0; j<10; j++){if(m===1){y=y-1;m=12;}else{m=m-1;}
		}document.getElementById("manth").innerHTML = createManth();titleChange();stopFlgTimer();};
	document.getElementById("list11").onclick = function() {
		y=nowyy;m=nowmm;
		for(var j=0; j<11; j++){if(m===1){y=y-1;m=12;}else{m=m-1;}
		}document.getElementById("manth").innerHTML = createManth();titleChange();stopFlgTimer();};
	document.getElementById("list12").onclick = function() {
		y=nowyy;m=nowmm;
		for(var j=0; j<12; j++){if(m===1){y=y-1;m=12;}else{m=m-1;}
		}document.getElementById("manth").innerHTML = createManth();titleChange();stopFlgTimer();};
	
}


//ボタンクリック時のバックナンバー移動処理
var btnBack = document.querySelector(".btnBack");
var btnNext = document.querySelector(".btnNext");
var slideCount = 1;
var basisTime = 4500;
var moveTimer;

//バックナンバーエリアにスクロール時にスライド移動開始
$(function(){
	$(window).scroll(function (){
		$('.slide-area').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 8){
				if(flg){
					startTimer();
					flg = !flg;
				}else{
					stopTimer();
				}
			}
		});
	});
});


//スライド移動ストップ処理
function stopTimer(){
clearInterval(moveTimer);
startTimer();
}
function stopFlgTimer(){
	clearInterval(moveTimer);
	flg = !flg;
}

///*スライド移動スタート処理*/
function startTimer(){
moveTimer =setInterval(function(){
	if(slideCount===1){
			orderReset();
			btnBack.style.display = 'inline-block';
			document.getElementById("list"+(slideCount*3+1)).style.order = '-1';
			document.getElementById("list"+(slideCount*3+2)).style.order = '-1';
			document.getElementById("list"+(slideCount*3+3)).style.order = '-1';
			listcolor();
			fedeImg();
		}else if(slideCount===2) {
			orderReset();
			document.getElementById("list"+(slideCount*3+1)).style.order = '-1';
			document.getElementById("list"+(slideCount*3+2)).style.order = '-1';
			document.getElementById("list"+(slideCount*3+3)).style.order = '-1';
			listcolor();
			fedeImg();
		}else if(slideCount===3) {
			btnNext.style.display = 'none';
			orderReset();
			document.getElementById("list"+(slideCount*3+1)).style.order = '-1';
			document.getElementById("list"+(slideCount*3+2)).style.order = '-1';
			document.getElementById("list"+(slideCount*3+3)).style.order = '-1';
			listcolor();
			fedeImg();
		}else if(slideCount===4){
			btnNext.style.display = 'inline-block';
			btnBack.style.display = 'none';
			fedeImg();
			orderReset();
			document.getElementById("list1").style.order = '-1';
			document.getElementById("list2").style.order = '-1';
			document.getElementById("list3").style.order = '-1';
			slideCount=0;
			listcolor();
		}
		slideCount=slideCount+1;
	}, basisTime);
}



/*nextボタンクリック時の移動処理*/
btnNext.onclick = function(){
	if(slideCount===1){
		orderReset();
		btnBack.style.display = 'inline-block';
		document.getElementById("list"+(slideCount*3+1)).style.order = '-1';
		document.getElementById("list"+(slideCount*3+2)).style.order = '-1';
		document.getElementById("list"+(slideCount*3+3)).style.order = '-1';
		listcolor();
		fedeImg();
	}else if(slideCount===2) {
		orderReset();
		document.getElementById("list"+(slideCount*3+1)).style.order = '-1';
		document.getElementById("list"+(slideCount*3+2)).style.order = '-1';
		document.getElementById("list"+(slideCount*3+3)).style.order = '-1';
		listcolor();
		fedeImg();
	}else if(slideCount===3) {
		btnNext.style.display = 'none';
		orderReset();
		document.getElementById("list"+(slideCount*3+1)).style.order = '-1';
		document.getElementById("list"+(slideCount*3+2)).style.order = '-1';
		document.getElementById("list"+(slideCount*3+3)).style.order = '-1';
		listcolor();
		fedeImg();
	}
	stopTimer();
	slideCount=slideCount+1;
};

/*バックボタンクリック時の移動処理*/
btnBack.onclick = function(){
	slideCount=slideCount-1;
	if(slideCount===1){
		btnBack.style.display = 'none';
		orderReset();
		document.getElementById("list1").style.order = '-1';
		document.getElementById("list"+(slideCount+1)).style.order = '-1';
		document.getElementById("list"+(slideCount+2)).style.order = '-1';
		relistcolor();
		fedeImg();
	}else if(slideCount===2) {
		orderReset();
		document.getElementById("list"+(slideCount*2)).style.order = '-1';
		document.getElementById("list"+(slideCount*2+1)).style.order = '-1';
		document.getElementById("list"+(slideCount*2+2)).style.order = '-1';
		relistcolor();
		fedeImg();
	}else if(slideCount===3) {
		orderReset();
		btnNext.style.display = 'inline-block';
		document.getElementById("list"+(slideCount*2+1)).style.order = '-1';
		document.getElementById("list"+(slideCount*2+2)).style.order = '-1';
		document.getElementById("list"+(slideCount*2+3)).style.order = '-1';
		relistcolor();
		fedeImg();
	}
	stopTimer();
};

/*バックナンバーリストのflexのオーダー値リセット*/
function orderReset(){
	for(var i=1;i<13;i++){
	document.getElementById("list"+i).style.order = '0';
	}
}
/*下の●のカラーとサイズリセット*/
function colorReset(){
	for(var j=1;j<5;j++){
	var cr = document.querySelector(`#special > main > section > section > div > ul li:nth-of-type(${j})`);
	cr.style.backgroundColor = 'var(--strgRed)';
	cr.style.height = '1.2rem';
	cr.style.width = '1.2rem';
	}
}

/*nextボタンクリック時の●の大きさとカラーの移動*/
function listcolor(){
	var licountup=	document.querySelector(`#special > main > section > section > div > ul li:nth-of-type(${slideCount+1})`);
	colorReset();
	licountup.style.backgroundColor = 'rgba(185,105,75,0.2)';
	licountup.style.height = '1.7rem';
	licountup.style.width = '1.7rem';
}

/*バックボタンクリック時の●の大きさとカラーの移動*/
function relistcolor(){
	var licount= document.querySelector(`#special > main > section > section > div > ul li:nth-of-type(${slideCount})`);
	colorReset();
	licount.style.backgroundColor = 'rgba(185,105,75,0.2)';
	licount.style.height = '1.7rem';
	licount.style.width = '1.7rem';
}






/*下の●クリック時の移動処理*/

var clicOne = document.querySelector("#special > main > section > section > div > ul li:nth-of-type(1)");
var clicTwo = document.querySelector("#special > main > section > section > div > ul li:nth-of-type(2)");
var clicThree = document.querySelector("#special > main > section > section > div > ul li:nth-of-type(3)");
var clicFour = document.querySelector("#special > main > section > section > div > ul li:nth-of-type(4)");

clicOne.onclick = function(){
	btnNext.style.display = 'inline-block';
	btnBack.style.display = 'none';
		orderReset();
		colorReset();
		document.getElementById("list1").style.order = '-1';
		document.getElementById("list2").style.order = '-1';
		document.getElementById("list3").style.order = '-1';
		clicOne.style.height = '1.7rem';
		clicOne.style.width = '1.7rem';
		clicOne.style.backgroundColor = 'rgba(185,105,75,0.2)';
		slideCount=1;
		fedeImg();
		stopTimer();
};
clicTwo.onclick = function(){
	btnNext.style.display = 'inline-block';
	btnBack.style.display = 'inline-block';
		orderReset();
		colorReset();
		document.getElementById("list4").style.order = '-1';
		document.getElementById("list5").style.order = '-1';
		document.getElementById("list6").style.order = '-1';
		clicTwo.style.height = '1.7rem';
		clicTwo.style.width = '1.7rem';
		clicTwo.style.backgroundColor = 'rgba(185,105,75,0.2)';
		slideCount=2;
		fedeImg();
		stopTimer();
};
clicThree.onclick = function(){
	btnNext.style.display = 'inline-block';
	btnBack.style.display = 'inline-block';
		orderReset();
		colorReset();
		document.getElementById("list7").style.order = '-1';
		document.getElementById("list8").style.order = '-1';
		document.getElementById("list9").style.order = '-1';
		clicThree.style.height = '1.7rem';
		clicThree.style.width = '1.7rem';
		clicThree.style.backgroundColor = 'rgba(185,105,75,0.2)';
		slideCount=3;
		fedeImg();
		stopTimer();
};
clicFour.onclick = function(){
	btnNext.style.display = 'none';
	btnBack.style.display = 'inline-block';
		orderReset();
		colorReset();
		document.getElementById("list10").style.order = '-1';
		document.getElementById("list11").style.order = '-1';
		document.getElementById("list12").style.order = '-1';
		clicFour.style.height = '1.7rem';
		clicFour.style.width = '1.7rem';
		clicFour.style.backgroundColor = 'rgba(185,105,75,0.2)';
		slideCount=4;
		fedeImg();
		stopTimer();
};


/*フェードインアニメーション*/
function fedeImg(){
	for(var i=1;i<13;i++){
		var d = document.getElementById('list'+i);
		d.animate([{opacity: '0.1'}, {opacity: '1'}], 2000);
	}
}


