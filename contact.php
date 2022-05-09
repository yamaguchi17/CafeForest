<?php
	session_start();
	
	error_reporting(E_ALL & ~E_NOTICE);
	$error = [];
	
	if ($_SERVER['REQUEST_METHOD'] === 'POST'){
		$post = filter_input_array(INPUT_POST, $_POST);
		
		if ($post['name'] === '') {
			$error['name'] = 'blank';
		}
		if ($post['mail1'] === '') {
			$error['mail1'] = 'blank';
		} else if (!filter_var($post['mail1'], FILTER_VALIDATE_EMAIL)) {
			$error['mail1'] = 'nomail';
		}
		if ($post['mail2'] === '') {
			$error['mail2'] = 'blank';
		} else if (!filter_var($post['mail2'], FILTER_VALIDATE_EMAIL)) {
			$error['mail2'] = 'nomail';
		} else if ($post['mail1'] !== $post['mail2']) {
			$error['mail2'] = 'nomail1';
		}
		if ($post['inquiry'] === '') {
			$error['inquiry'] = 'blank';
		}
		if (!isset($post['checkb'])) {
			$error['checkb'] = 'blank';
		}
		
		if (count($error) === 0) {
			$_SESSION['form'] = $post;
			header('Location: confirm.php');
			exit();
		}
	} else {
		if (isset($_SESSION['form'])) {
			$post = $_SESSION['form'];
		}
	}
	?>
<!DOCTYPE html>
<html lang="ja"><!-- InstanceBegin template="/Templates/PageTemplate.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
<!-- InstanceBeginEditable name="description" -->
<meta name="description" content="SEO対策用の説明文を入れる" />
<!-- InstanceEndEditable -->
<!-- InstanceBeginEditable name="doctitle" -->
<title>Contact - Cafe Forest（カフェフォレスト）｜板橋本町の自家焙煎コーヒーとケーキの喫茶店</title>
<!-- InstanceEndEditable -->
<link rel="shortcut icon" type="image/x-icon" href="images/design/favicon.ico"/>
<link rel="stylesheet" href="styles/common.css" />
<link rel="stylesheet" href="styles/page.css" />
<script src="scripts/jquery-3.5.1.js"></script>	
<script src="scripts/hamburgerMenu.js"></script>
<script src="scripts/upper.js"></script>
<!-- InstanceBeginEditable name="css" -->
<!-- InstanceEndEditable -->
</head>
<!-- InstanceBeginEditable name="body_Id" -->
<body id="contact">
<!-- InstanceEndEditable -->
<header>
	<h1><a href="index.htm"><span>Cafe Forest</span></a></h1>
	<nav>
		<h2>メニュー</h2>
		<div>
			<input id="my-parts-checkbox" class="my-parts-hidden" type="checkbox">
			<label id="my-parts-icon" for="my-parts-checkbox"><span></span></label>
		</div>
		<ul>
			<li id="navAbout"><a href="about.htm">About<br /><span>私たちのこだわり</span></a></li>
			<li id="navSpecial"><a href="special.htm">Special<br /><span>今月のコーヒー&ケーキ</span></a></li>
			<li id="navMenu"><a href="menu.htm">Menu<br /><span>メニュー</span></a></li>
			<li id="navCoupon"><a href="coupon.htm">Coupon<br /><span>クーポン</span></a></li>
			<li id="navShop"><a href="shop.htm">Shop<br /><span>販売</span></a></li>
			<li id="navAccess"><a href="access.htm">Access<br /><span>アクセス</span></a></li>
			<li id="navContact"><a href="contact.php">Contact<br /><span>お問い合わせ</span></a></li>
		</ul>
	</nav>
</header>
<main>
	<!-- InstanceBeginEditable name="main" -->
	<section>
		<h1>
			Contact <span>お問い合わせ</span>
		</h1>
		<form action="" method="POST" novalidate>
			<section>
				<h2>進捗</h2>
				<?php if (count($error) !== 0): ?>
					<p class="error_msg">※入力に誤りがございます。今一度入力内容をご確認ください。</p>
				<?php endif; ?>
				<ul>
					<li >情報の入力</li>
					<li>入力内容の確認</li>
					<li>送信完了</li>
				</ul>
			</section>
			<section>
				<h2>お問い合わせ内容を入力してください</h2>
				<p>お問い合わせ内容</p>
				<?php if ($error['inquiry'] === 'blank'): ?>
					<p class="error_msg">※お問い合わせ内容をご記入ください。</p>
				<?php endif; ?>
				<textarea name="inquiry" value="" placeholder="お問い合わせ内容を入力してください。"><?php echo htmlspecialchars($post['inquiry']); ?></textarea>
			</section>
			<section>
				<h2>お客様情報を入力してください</h2>
				<p>お名前</p>
				<?php if ($error['name'] === 'blank'): ?>
					<p class="error_msg">※お名前をご記入ください。</p>
				<?php endif; ?>
				<input type="text" name="name" value="<?php echo htmlspecialchars($post['name']); ?>" placeholder="東京　太郎">
				
				
				
				<p>メールアドレス</p>
				<?php if ($error['mail1'] === 'blank'): ?>
					<p class="error_msg">※メールアドレスをご記入ください。</p>
				<?php endif; ?>
				<?php if ($error['mail1'] === 'nomail'): ?>
					<p class="error_msg">※メールアドレスを正しくご記入ください。</p>
				<?php endif; ?>	
				<input type="text" name="mail1" value="<?php echo htmlspecialchars($post['mail1']); ?>" placeholder="xxxxxx@xx.xx">
				
					
				<p>念のため再度ご入力をお願いします</p>
				<?php if ($error['mail2'] === 'blank'): ?>
					<p class="error_msg">※確認用のメールアドレスをご記入ください。</p>
				<?php endif; ?>
				<?php if ($error['mail2'] === 'nomail'): ?>
					<p class="error_msg">※メールアドレスを正しくご記入ください。</p>
				<?php endif; ?>
				<?php if ($error['mail2'] === 'nomail1'): ?>
					<p class="error_msg">※確認用のメールアドレスが間違っています。</p>
				<?php endif; ?>
				<input type="text" name="mail2" value="<?php echo htmlspecialchars($post['mail2']); ?>" placeholder="xxxxxx@xx.xx">
			</section>
			<section>
				<h2>個人情報の取り扱いについて</h2>
				<p><a href="privacy-policy.htm">プライバシーポリシーの確認ページへ</a></p>
				<?php if ($error['checkb'] === 'blank'): ?>
					<p class="error_msg">※プライバシーポリシーの同意にチェックをしてください。</p>
				<?php endif; ?>
				<p><label><input type="checkbox" name="checkb">個人情報の取り扱いについて同意します</label></p>
			</section>
				<button type="submit" value="送信" class="btn01">確認画面へ</button>
		</form>
	</section>
	<!-- InstanceEndEditable -->
	<p class="upper" ><a href="#">▲</a></p>
</main>
<footer>
	<p><img alt="サイトロゴ画像" loading="lazy" src="images/design/logo_art.svg" /></p>
	<ul>
		<li><a href="index.htm">トップ</a></li>
		<li><a href="privacy-policy.htm">プライバシー ポリシー</a></li>
		<li><a href="transaction.htm">特定商取引法に基づく表記</a></li>
		<li><a href="contact.php">お問い合わせ</a></li>
		<li><a href="sitemap.htm">サイトマップ</a></li>
	</ul>
	<p><a href="https://www.instagram.com/"><img src ="images/design/instagram.png" alt="instagram_icon"></a></p>
	<p><small>Copyright 2020 Cafe Forest All Rights Reserved.</small></p>
</footer>
</body>
<!-- InstanceEnd --></html>