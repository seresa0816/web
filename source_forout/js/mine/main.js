
jQuery(document).ready(function(){
								
	var initObj		= new initEnv();
	
	initObj.init();
});

var initEnv			= function()
{
	var main		= this;

	main.selname 	= "";

	main.init		= function()
	{
		main.initCSS();
		main.initEvent();
		main.initSlide();
		main.initUploader();

		main.maskArr = [];
		window.addEventListener( 'resize', main.initCSS );
	}

	main.initCSS 	= function()
	{
		
	}

	main.initUploader = function()
	{
		return;
		var btn = document.getElementById('btn_file_upload');
		var uploader = new ss.SimpleUpload(
		{
			button: btn,
			url: 'php/file_upload.php',
			name: 'uploadfile',
			multipart: true,
			hoverClass: 'hover',
			focusClass: 'focus',
			responseType: 'json',
		
			onComplete: function( filename, response ) 
			{
				var param = {src : "tmp/" + filename, selectable : true, isFront : 1, autofit : 1};

				main.twodObj.addImage(param);
			},
			onError: function() 
			{
				console.log('error');
			}
		});
	}

	main.initSlide 	= function()
	{
		$(".slider").each(function()
		{
			$(this).slider();
		})
	}

	main.initEvent 	= function()
	{
	
	}
}