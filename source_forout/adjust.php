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
			<div id="measure_area" class="block">
				<h2>Measures</h2>
				<section>
					<h3>Height</h3>
					<div class="slider"></div>
				</section>
				<section>
					<h3>Weight</h3>
					<div class="slider"></div>
				</section>
				<section>
					<h3>Chest</h3>
					<div class="slider"></div>
				</section>
				<section>
					<h3>Waist</h3>
					<div class="slider"></div>
				</section>
				<section>
					<h3>Hips</h3>
					<div class="slider"></div>
				</section>
			</div>
			<div id="color_area" class="block">
				<h2>Skin colors</h2>
				<ul>
					<li><img src="img/skin1.jpg"></li>
					<li><img src="img/skin2.jpg"></li>
					<li><img src="img/skin3.jpg"></li>
					<li><img src="img/skin4.jpg"></li>
					<li><img src="img/skin5.jpg"></li>
					<li><img src="img/skin6.jpg"></li>
				</ul>
			</div>
			
			<input type="button" value="Save" id="btn_save">
		</div>
	</div>
</body>