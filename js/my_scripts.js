
$(document).ready(function() {
	 let btn = $('.button');  
     let item = $('.cat_price')
	 let result = $("#result")
	 $('.topmenu a').click(function(e){
		 e.preventDefault()
	 })
 function Decrease () {
	  item.sortElements(function(a, b){
	  return parseInt($(a).text()) < parseInt($(b).text()) ? -1 : 1; 
	  }	)
	}
	const Increase =() => 
	
	item.sortElements(function(a, b){
	   return parseInt($(a).text()) < parseInt($(b).text()) ? 1 : -1; 
	   
	  })

	
    function validateEmail(email) {
		const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		return re.test(String(email).toLowerCase());
	}
	const defaultConst =(a)=>{
		result.css({'display' : 'flex'}).fadeIn()
		result.text(a)
		result.append ("<a class='close' href='#'><i class='fas fa-times'></i></a>")
		$('.close').click(function () {
			result.fadeOut(100);
			return false;
		})
		return false
	}
	function sendForm() {
	   defaultConst("Заявка отправлена")
		$(".form-block__input").val('')
	}
	function validate() {
		let email = $("#email").val();
		if (validateEmail(email)) {
		sendForm();
		result.fadeOut(2500);	
		  } 
		else if (email===''){
			defaultConst("Ошибка!Введите Email")
			result.fadeOut(2500);	
		}
		else {	
		defaultConst("Ошибка!Введите Email заново")
		result.fadeOut(2500);	
		  }
	  return false;

	  }

	 $(window).scroll(function() {     
	   if ($(window).scrollTop() > 300) {
		  btn.addClass('show');
		} else {
		  btn.removeClass('show');
		}
	  });
	
	  btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '300');
	  });
	 
	 
	  $(".form-block__button").on("click", validate);
	  $('#PriceLow').on('click', Decrease)
	  $('#PriceHiger').on('click', Increase)
	  $('#AgeLow').on('click',Decrease)
	  $('#AgeHigher').on('click',Increase)	
	 
	function TheBest(){
		let items = $(".svg")
		for(let x= 0;x < items.length;x++){
			let item = items[x]
			$(item).on('click', function(fn)
			{
				$(item).toggleClass('svg_2')
				if ($(item).hasClass('svg_2')){
					defaultConst("Кот добавлен в избранное")
				}
				else {
				defaultConst("Вы удалили кота:(")
				
				}		
			});
		  }
		}
	TheBest()
})





