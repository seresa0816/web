<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>3D Cloth Simulator</title>

    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/style/font.css" />
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/style/style.css" />
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/style/colorpicker.css" />
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/style/jquery-ui.css" />
</head>

<script type="text/javascript" src="<?php echo base_url();?>assets/js/library/jquery.min.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/js/library/jquery-ui.min.js"></script>

<script type="text/javascript" src="<?php echo base_url();?>assets/js/library/SimpleAjaxUploader.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/js/library/colorpicker.js"></script>

<script type="text/javascript" src="<?php echo base_url();?>assets/js/mine/main.js"></script>

<body>
    <style>
        section span {
            float: right;
            margin-top: -11px;
            margin-right: 40px;
        }
        img.active {
            border: solid 2px green;
            box-sizing: border-box;
        }
    </style>
	<div id="main_area">
		<div id="left_area"></div>
        <form action='<?php echo base_url();?>adjust/process' method='post' name='process'>
		<div id="right_area">
			<div id="measure_area" class="block">
				<h2>Measures</h2>
				<section class="height">
                    <h3>Height</h3>
                    <div class="slider"></div>
                    <input id="height" name="height" value="50" type="hidden">
                    <span>50</span>
				</section>
				<section class="weight">
					<h3>Weight</h3>
                    <div class="slider"></div>
                    <input id="weight" name="weight" value="50" type="hidden">
                    <span>50</span>
				</section>
				<section class="chest">
					<h3>Chest</h3>
                    <div class="slider"></div>
                    <input id="chest" name="chest" value="50" type="hidden">
                    <span>50</span>
				</section>
				<section class="waist">
					<h3>Waist</h3>
                    <div class="slider"></div>
                    <input id="waist" name="waist" value="50" type="hidden">
                    <span>50</span>
				</section>
				<section class="hips">
					<h3>Hips</h3>
                    <div class="slider"></div>
                    <input id="hips" name="hips" value="50" type="hidden">
                    <span>50</span>
                    
				</section>
			</div>
			<div id="color_area" class="block">
                <h2>Skin colors</h2>
                <input id="skincolor" name="skincolor" value="1" type="hidden">
				<ul>
					<li><img skincolor="1" class="active" src="<?php echo base_url();?>assets/img/skin1.jpg"></li>
					<li><img skincolor="2" src="<?php echo base_url();?>assets/img/skin2.jpg"></li>
					<li><img skincolor="3" src="<?php echo base_url();?>assets/img/skin3.jpg"></li>
					<li><img skincolor="4" src="<?php echo base_url();?>assets/img/skin4.jpg"></li>
					<li><img skincolor="5" src="<?php echo base_url();?>assets/img/skin5.jpg"></li>
					<li><img skincolor="6" src="<?php echo base_url();?>assets/img/skin6.jpg"></li>
				</ul>
			</div>
			
			<input type="submit" value="Save" id="btn_save">
        </div>
        </form>
    </div>
    <script>
        $(".slider").each(function()
		{
			$(this).slider({
             values: [0],
                slide: function (event, ui) {
                    $parent = $(this).closest("section");
                    value = ui.values[0] * 2 + 50;
                    $("span",$parent).html(value);
                    $("input",$parent).val(value);
                    // $('.handle1').text(ui.values[0]);
                    // $('.handle2').text(ui.values[1]);
                }    
            });
        });
        $("#color_area img").each(function(){
            $(this).click(function(){
                $parent = $(this).closest("ul");
                $("img", $parent).each(function(){
                    $(this).removeClass("active");
                });
                $(this).addClass("active");
            });
        });
    </script>
</body>