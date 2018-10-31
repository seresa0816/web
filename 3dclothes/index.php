<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>3D Cloth Simulator</title>

    <link rel="stylesheet" type="text/css" href="style/font.css" />
    <link rel="stylesheet" type="text/css" href="style/style.css" />
    <link rel="stylesheet" type="text/css" href="style/colorpicker.css" />
    <link rel="stylesheet" type="text/css" href="style/jquery-ui.css" />
</head>

<script type="text/javascript" src="js/library/jquery.min.js"></script>
<script type="text/javascript" src="js/library/jquery-ui.min.js"></script>

<script type="text/javascript" src="js/library/SimpleAjaxUploader.js"></script>
<script type="text/javascript" src="js/library/colorpicker.js"></script>


<script type="text/javascript" src="js/mine/main.js"></script>

<body>
	<div id="main_area">
		<div id="left_area"></div>

		<div id="right_area">
			<div id="config_area">
				<section>
					<h3>Size</h3>
					<ul class="size_area">
						<li>XS</li>
						<li>S</li>
						<li>M</li>
						<li>L</li>
					</ul>
				</section>
				<section>
					<h3>Dresses</h3>
					<ul class="dress_area">
						<li><img src="uploaded/dress1.jpg"></li>
						<li><img src="uploaded/dress2.jpg"></li>
						<li><img src="uploaded/dress3.jpg"></li>
					</ul>
				</section>
				<section>
					<h3>Top</h3>
					<ul class="dress_area">
						<li><img src="uploaded/top1.jpg"></li>
						<li><img src="uploaded/top2.jpg"></li>
						<li><img src="uploaded/top3.jpg"></li>
						<li><img src="uploaded/top4.jpg"></li>
					</ul>
				</section>
				<section>
					<h3>Bottom</h3>
					<ul class="dress_area">
						<li><img src="uploaded/bottom1.jpg"></li>
						<li><img src="uploaded/bottom2.jpg"></li>
						<li><img src="uploaded/bottom3.jpg"></li>
						<li><img src="uploaded/bottom4.jpg"></li>
						<li><img src="uploaded/bottom5.jpg"></li>
					</ul>
				</section>
				<section>
					<h3>Shoes</h3>
					<ul class="dress_area">
						<li><img src="uploaded/shoes1.jpg"></li>
						<li><img src="uploaded/shoes2.jpg"></li>
						<li><img src="uploaded/shoes3.jpg"></li>
						<li><img src="uploaded/shoes4.jpg"></li>
					</ul>
				</section>
			</div>				
		</div>
		<div id="btn_area">
			<input type="button" id="btn_view" value="View tightness">
			<input type="button" id="btn_view" value="Generate 3D file">
		</div>
	</div>
</body>