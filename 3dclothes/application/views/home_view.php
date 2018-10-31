<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>3D Cloth Simulator</title>

    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/style/font.css" />
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/style/style.css" />
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/style/colorpicker.css" />
	<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/style/jquery-ui.css" />
	<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/style/jquery.modal.css"/>
</head>

<script type="text/javascript" src="<?php echo base_url();?>assets/js/library/jquery.min.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/js/library/jquery-ui.min.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/js/library/SimpleAjaxUploader.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/js/library/colorpicker.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/js/library/jquery.modal.js"></script>

<script type="text/javascript" src="<?php echo base_url();?>assets/js/mine/main.js"></script>
<style>
/* section.slide:before {
    display: block;
    position: relative;
    content: ' ';
    background-image: url(http://127.0.0.1:8080/3dclothes_/assets/img/back.svg);
    background-size: 31px 50px;
    height: 50px;
    width: 28px;
    top: 35px;
    left: 0px;
}

section.slide:after {
    display: block;
    position: relative;
    content: ' ';
    background-image: url(http://127.0.0.1:8080/3dclothes_/assets/img/next.svg);
    background-size: 31px 50px;
    height: 50px;
    width: 28px;
    top: -101px;
    right: -510px;
}

section.slide:hover:before, section.slide:hover:after {
	background-color: #ccc;
} */
</style>
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
				<section class="slide">
					<h3>Dresses</h3>
					<ul class="dress_area">
						<?php 
						if (isset($data['Dresses'])){
						$products = $data['Dresses'];
							for ($i = 1; $i < count($products); $i++){
								$product = $products[$i];
								$filepath = 'uploaded/'. $product['name']."/". $product['thumbnail']."/".$product['modeltype']."/".$product['filedir'];
								?>
								<li style="display:none;"><img src="<?php echo base_url().$filepath; ?>"></li>
								<?php
							}
						}
						?>
					</ul>
				</section>
				<section class="slide">
					<h3>Top</h3>
					<ul class="top_area">
						<?php 
						if (isset($data['Top'])){
							$products = $data['Top'];
							for ($i = 1; $i < count($products); $i++){
								$product = $products[$i];
								$filepath = 'uploaded/'. $product['name']."/". $product['thumbnail']."/".$product['modeltype']."/".$product['filedir'];
								?>
								<li style="display:none;"><img src="<?php echo base_url().$filepath; ?>"></li>
								<?php
							}
						}
						?>
					</ul>
				</section>
				<section class="slide">
					<h3>Bottom</h3>
					<ul class="bottom_area">
						<?php 
						if (isset($data['Bottom'])){
							$products = $data['Bottom'];
							for ($i = 1; $i < count($products); $i++){
								$product = $products[$i];
								$filepath = 'uploaded/'. $product['name']."/". $product['thumbnail']."/".$product['modeltype']."/".$product['filedir'];
								?>
								<li style="display:none;"><img src="<?php echo base_url().$filepath; ?>"></li>
								<?php
							}
						}
						?>
					</ul>
				</section>
				<section class="slide">
					<h3>Shoes</h3>
					<ul class="shoes_area">
						<?php 
						if (isset($data['Shoes'])){
							$products = $data['Shoes'];
							for ($i = 1; $i < count($products); $i++){
								$product = $products[$i];
								$filepath = 'uploaded/'. $product['name']."/". $product['thumbnail']."/".$product['modeltype']."/".$product['filedir'];
								?>
								<li style="display:none;"><img src="<?php echo base_url().$filepath; ?>"></li>
								<?php
							}
						}
						?>
					</ul>
				</section>
			</div>	
			<input type="button" id="btn_upload" value="Upload file">			
		</div>
		<div id="btn_area">
			<input type="button" id="btn_view" value="View tightness">
			<input type="button" id="btn_view" value="Generate 3D file">
		</div>
	</div>

	<div id="upload_area" style="display:none;">
		<div class="login_section">
			<div class="title">Model Name :</div>
			<div class="input">
				<input type="text" name='name' id="name" value="<?php echo $userdata['username']; ?>" disabled>
			</div>
		</div>
		<div class="login_section">
			<div class="title">Model Thumbnail :</div>
			<div class="input">
				<!-- <input type="text" name='thumbnail' id="thumbnail"> -->
				<select name="thumbnail" id="thumbnail">
					<option value="Dresses">Dresses</option>
					<option value="Top">Top</option>
					<option value="Bottom">Bottom</option>
					<option value="Shoes">Shoes</option>
				</select>
			</div>
		</div>
		<div class="login_section">
			<div class="title">Model Type :</div>
			<div class="input">
				<!-- <input type="text" name='modeltype' id="modeltype"> -->
				<select name="modeltype" id="modeltype">
					<option value="XS">XS</option>
					<option value="S">S</option>
					<option value="M">M</option>
					<option value="L">L</option>
				</select>
			</div>
		</div>
		<div class="login_section">
			<div class="title">Model Files :</div>
			<div class="input">
				<input type="text" name='filename' id="filename">
				<input type="file" multiple="multiple" style="display:none;" accept=".png,.jpg">
			</div>
		</div>
    </div>
	
	<script>
		$(document).ready(function(){
			$("section.slide").each(function(){
				$parent = $(this);
				count = ($("li", $parent).length > 4)? 4 : $("li", $parent).length;
				for(i = 0; i < count; i++) {
					$($("li", $parent)[i]).show();
				}
			});
			back_html = '<img class="btn backbtn" src="http://127.0.0.1:8080/3dclothes_/assets/img/back.svg">';
			next_html = '<img class="btn nextbtn" src="http://127.0.0.1:8080/3dclothes_/assets/img/next.svg">';
			$("section.slide ul").each(function(){
				$(this).before($(back_html));
				$(this).after($(next_html));
			});

			$(".slide img.btn").each(function(){
				$(this).click(function(){
					$parent = $(this).closest(".slide");
					$showlis = $("li:visible", $parent);
					if ($showlis.length == 0)
					{
						return;
					}
					$before = $($showlis[0]).prev()[0];
					$after = $($showlis[$showlis.length-1]).next()[0];
					if ($(this).hasClass("backbtn")){
						if ($before){
							$($showlis[$showlis.length-1]).hide();
							$($before).show();
						}
					}else{
						if ($after) {
							$($showlis[0]).hide();
							$($after).show();
						}
						 
					}
				});
			});
			$(".slide img.btn.nextbtn").each(function(){
				$(this).click(function(){
					$parent = $(this).closest("ui");
					length = $("li:visible", $parent).length
				});
			});
		});
		$("#btn_upload").click(function(){
			modal({
				type: 'inverted', //Type of Modal Box (alert | confirm | prompt | success | warning | error | info | inverted | primary)
				title: 'Message', //Modal Title
				text: $("#upload_area").html(), //Modal HTML Content
				size: 'normal', //Modal Size (normal | large | small)
				buttons: [{
					text: 'Save', //Button Text
					val: 'ok', //Button Value
					eKey: true, //Enter Keypress
					addClass: 'btn-light-blue', //Button Classes (btn-large | btn-small | btn-green | btn-light-green | btn-purple | btn-orange | btn-pink | btn-turquoise | btn-blue | btn-light-blue | btn-light-red | btn-red | btn-yellow | btn-white | btn-black | btn-rounded | btn-circle | btn-square | btn-disabled)
					onClick: function(dialog) {
						// upload image.
						var formData = new FormData();
							formData.append('name', $(".modal-text input[name='name']").val());
							formData.append('thumbnail', $(".modal-text select[name='thumbnail']").val());
							formData.append('modeltype', $(".modal-text select[name='modeltype']").val());
							var ins = $(".modal-text input[type='file']")[0].files.length;
							for (var x = 0; x < ins; x++) {
								formData.append("files[]", $(".modal-text input[type='file']")[0].files[x]);
							}
						$.ajax({
							url: '<?php echo base_url();?>home/uploadData',
							type: 'POST',
							contentType:false,
							processData: false,
							data: formData,
								success: function(result) {
									if (result == "success"){
										window.location.reload();
									}else{
										alert(result);
									}
								},
							error: function(xhr, result, errorThrown){
								alert('Request failed.');
							}
						});
						
					}
				}, ],
				center: true, //Center Modal Box?
				autoclose: false, //Auto Close Modal Box?
				callback: null, //Callback Function after close Modal (ex: function(result){alert(result); return true;})
				onShow: function(r) {
					$(".modal-text input[name='filename']").focus(function(){
						$(".modal-text input[type='file']").click();
						$(this).blur();
					});
					$(".modal-text input[type='file']").change(function(){
							var filenames = '';
							length = $(this)[0].files.length;
							for (i = 0; i < length; i++) {
								filenames += $(this)[0].files[i].name + "; ";
							}
							
							$(".modal-text input[name='filename']").val(filenames);
					});
				}, //After show Modal function
				closeClick: true, //Close Modal on click near the box
				closable: true, //If Modal is closable
				theme: 'atlant', //Modal Custom Theme (xenon | atlant | reseted)
				animate: false, //Slide animation
				background: 'rgba(0,0,0,0.35)', //Background Color, it can be null
				zIndex: 1050, //z-index
				buttonText: {
					ok: 'OK',
					yes: 'Yes',
					cancel: 'Cancel'
				},
				template: '<div class="modal-box"><div class="modal-inner"><div class="modal-title"><a class="modal-close-btn"></a></div><div class="modal-text"></div><div class="modal-buttons"></div></div></div>',
				_classes: {
					box: '.modal-box',
					boxInner: ".modal-inner",
					title: '.modal-title',
					content: '.modal-text',
					buttons: '.modal-buttons',
					closebtn: '.modal-close-btn'
				}
			});
		});
	</script>
</body>