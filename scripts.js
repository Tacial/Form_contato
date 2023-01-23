 $(function(){
		$('input.purple_button[type="submit"]').click(function(){
			$('#success_message').html('Aguarde um instante...').show();
				var fields = $('form').serialize();
				$.ajax({
					url: 'http://servicemail/',
					dataType: 'json',
					type:'POST',
					data: fields,
					success: function( data ) {			
						$('#success_message').html('Sua mensagem foi enviada com sucesso!').show();
					}
				});
			$('#contact_form').hide();
			return false;    
		});  
	})

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-56932919-5', 'auto');
  ga('send', 'pageview');
