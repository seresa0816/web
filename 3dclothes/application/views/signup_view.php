<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>3D Cloth Simulator</title>

    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/style/style.css" />
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/style/colorpicker.css" />
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/style/jquery-ui.css" />
</head>

<script type="text/javascript" src="<?php echo base_url();?>assets/js/library/jquery.min.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/js/library/jquery-ui.min.js"></script>

<body>
	<form action='<?php echo base_url();?>login/signupprocess' method='post' name='process'>
	<div id="login_area">
		<h3>Please input your signup information</h3>
		<?php if(! is_null($msg)) echo $msg;?>
		<div class="login_section">
			<div class="title">Full Name :</div>
			<div class="input">
				<input type="text" name="name" id="name">
			</div>
		</div>
		<div class="login_section">
			<div class="title">Email Address :</div>
			<div class="input">
				<input type="text" name="email" id="email">
			</div>
		</div>
		<div class="login_section">
			<div class="title">Password :</div>
			<div class="input">
				<input type="password" name="password" id="password">
			</div>
		</div>
		<div class="login_section">
			<div class="title">Confirm :</div>
			<div class="input">
				<input type="password" name="confirm" id="confirm">
			</div>
		</div>
		<div class="login_section" id="login_btnarea">
			<input type="button" value="Login" id="btn_login">
			<input type="submit" value="Signup" id="btn_signup">
		</div>
	</div>
	</form>
    <script>
        $("#btn_login").click(function(){
            window.location = "<?php echo base_url();?>login";
        });   
    </script>
	<!--  -->
</body>