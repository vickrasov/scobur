/********************************************/
/*											*/
/*											*/
/*				POWER BY @TARUK				*/
/*					2014					*/
/*											*/
/********************************************/

$(function(){	
	$("a[data-role=pages_load]").click(function(){
		var ident=$(this).attr('data-id');
			$("#"+ident).load('../modules/'+ident+'.html');
	});
	
	/* регистрация */
	$("#final_1").click(function(){
		var type_user=sessionStorage.type_user,
			login_user=$("#login_user").val(),
			pass_user=$("#pass_user").val(),
			pass_user_2=$("#pass_user_2").val(),
			img=$(".nophoto[data-role=img_1]").attr('data-img'),
			name=$("#Name").val(),
			area=$("#Area").val(),
			phone=$("#Phone_number").val(),
			other=$("#Other").val();
			
			if (pass_user!=pass_user_2){
				navigator.notification.alert(
				    'Passwords do not match',  // message
				    alertDismissed,         // callback
				    'Error',            // title
				    'Done'                  // buttonName
				);
			} else if (name==''){
				$("#Name").focus();
			} else if (area==''){
				$("#Area").focus();
			} else {
				$.post("http://devpl.net/register.php", {type: 1, z1:type_user, z2:login_user, z3:pass_user, z4:img, z5:name, z6:area, z7:phone, z8:other}, function(res){
					var rez=JSON.parse(res);
						if (rez[0].status==0){
							navigator.notification.alert(
							    rez[0].sms,  // message
							    alertDismissed,         // callback
							    'Error',            // title
							    'Done'                  // buttonName
							);
						} else {
							navigator.notification.alert(
							    rez[0].sms,  // message
							    reloadToLogin,         // callback
							    'Success',            // title
							    'Done'                  // buttonName
							);
						}
				});
			}
	});
	
	$("#final_2").click(function(){
		var type_user=sessionStorage.type_user,
			login_user=$("#login_user").val(),
			pass_user=$("#pass_user").val(),
			pass_user_2=$("#pass_user_2").val(),
			img=$(".nophoto[data-role=img_2]").attr('data-img'),
			Expertise=$("#Expertise").val(),
			Tagline=$("#Tagline").val(),
			Business_name=$("#Business_name").val(),
			Own_name=$("#Own_name").val(),
			Areas_covered=$("#Areas_covered").val(),
			Working_hours=$("#Working_hours").val(),
			Qualification=$("#Qualification").val(),
			GPS_radius=$("#GPS_radius").val();
		var Certification=new Array();
			$("#rez_ser").find(".one_us").each(function(){
				Certification.push($(this).attr('data-img'));
			});
			
			if (pass_user!=pass_user_2){
				navigator.notification.alert(
				    'Passwords do not match',  // message
				    alertDismissed,         // callback
				    'Error',            // title
				    'Done'                  // buttonName
				);
			} else if (Qualification==''){
				$("#Qualification").focus();
			} else {
				$(".refa").fadeIn();
				$.post("http://devpl.net/register.php", {type: 2, z1:type_user, z2:login_user, z3:pass_user, z4:img, z5:Expertise, z6:Tagline, z7:Business_name, z8:Own_name, z9:Areas_covered, z10:Working_hours, z11:Qualification, z12:GPS_radius, z13:Certification}, function(res){
					$(".refa").fadeOut();
					var rez=JSON.parse(res);
						if (rez[0].status==0){
							navigator.notification.alert(
							    rez[0].sms,  // message
							    alertDismissed,         // callback
							    'Error',            // title
							    'Done'                  // buttonName
							);
						} else {
							navigator.notification.alert(
							    rez[0].sms,  // message
							    reloadToLogin,         // callback
							    'Success',            // title
							    'Done'                  // buttonName
							);
						}
				});
			}
	});
	
	$("#login_app").click(function(){
		var login_user=$("#login_login").val(),
			pass_user=$("#pass_login").val();
			
			$.post("http://devpl.net/login.php", {z1:login_user, z2:pass_user}, function(res){
				var rez=JSON.parse(res);
					if (rez[0].status==0){
						navigator.notification.alert(
						    rez[0].sms,  // message
						    alertDismissed,         // callback
						    'Error',            // title
						    'Done'                  // buttonName
						);
					} else {
						sessionStorage.login_app=rez[0].login;
						window.location.replace("app.html");
					}
			});
	});
	
	$("#step2").click(function(){
		if ($("#login_user").val()==''){
			$("#login_user").focus();
		} else if ($("#pass_user").val()==''){
			$("#pass_user").focus();
		} else if ($("#pass_user_2").val()==''){
			$("#pass_user_2").focus();
		} else if ($("#pass_user").val()!=$("#pass_user_2").val()){
			navigator.notification.alert(
			    'Passwords do not match',  // message
			    alertDismissed,         // callback
			    'Error',            // title
			    'Done'                  // buttonName
			);
		} else {
			if (sessionStorage.type_user==1){
				$.mobile.changePage("#register_step_3_1",{transition:"slide"});
			} else {
				$.mobile.changePage("#register_step_3",{transition:"slide"});
			}
		}
	});
	
	$("#step3").click(function(){
		if ($("#Expertise").val()==''){
			$("#Expertise").focus();
		} else if ($("#Business_name").val()==''){
			$("#Business_name").focus();
		} else if ($("#Areas_covered").val()==''){
			$("#Areas_covered").focus();
		} else if ($("#Working_hours").val()==''){
			$("#Working_hours").focus();
		} else if ($("#GPS_radius").val()==''){
			$("#GPS_radius").focus();
		} else {
			$.mobile.changePage("#register_step_4",{transition:"slide"});
		}
	});
	
	/* load photo */
	$("#file").change(function(){
		if ($(this).val()!=''){
			$(".refa").fadeIn();
			$(this).parents("form").submit();
		}
	});
	
	$("#file_2").change(function(){
		if ($(this).val()!=''){
			$(".refa").fadeIn();
			$(this).parents("form").submit();
		}
	});
	
	$("#file_ser").change(function(){
		if ($(this).val()!=''){
			$(".refa").fadeIn();
			$(this).parents("form").submit();
		}
	});
	
	$(".menu").click(function(){
		if ($(this).attr('data-role')==0){
			$(".menu_hover").animate({
				height: "12em"
			}, 500);
			$(this).animate({
				top: "11.9em"
			}, 500).attr('data-role','1');
		} else {
			$(".menu_hover").animate({
				height: "0"
			}, 500);
			$(this).animate({
				top: "0"
			}, 500).attr('data-role','0');
		}
	});
	
	
	/********************** app ******************/
	
	/* select user category */
	$("a[data-role=select_category_user]").click(function(){
		r_show();
		var category_id=$(this).attr('data-id'),
			lim=12;
			$.post("http://devpl.net/select_category.php", {z1:category_id, z2:lim}, function(res){
				$("#responce_user_load").html(res);
				$.mobile.changePage("#all",{transition:"slide"});
				r_hide();
			});
	});
	
	/* показ всей информации */
	$(document).on('click', '.info_user', function(){
		if ($(this).attr('data-stan')==0){
			$(this).animate({
				bottom: 0
			}, 500)
			.attr('data-stan',1);
		} else {
			$(this).animate({
				bottom: "-5.4em"
			}, 500)
			.attr('data-stan',0);
		}
	});
	
	/* показ одного пользователя */
	$(document).on('click', 'button[data-role=view_one_user]', function(){
		var id=$(this).attr('data-id');
			$.post("http://devpl.net/one_user.php", {z1:id}, function(res){
				var info=JSON.parse(res);		
					$(".page_one_user").css({'background':'url(http://devpl.net/photo/'+info[0].img+')', 'background-size':'cover', 'background-position':'center top'});
					$(".title_info_user").html(info[0].Tagline);
					$(".info_user p:eq(0)").html(info[0].Business_name);
					$(".info_user p:eq(1)").html(info[0].Qualification);
					$(".info_user p:eq(2)").html(info[0].Areas_covered);
					$(".info_user p:eq(3)").html(info[0].Working_hours);
					$(".info_user p:eq(4)").html(info[0].Own_name);
					$(".info_user p:eq(5)").html(info[0].Expertise);
					$.mobile.changePage("#one_user",{transition:"slide"});
			});
	});
	
});

function alertDismissed() {
    // do something
}

function reloadToLogin(){
	window.location.replace("#login");
}

function r_show(){
	$(".refa").fadeIn();
}

function r_hide(){
	$(".refa").fadeOut();
}

function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
} catch (e) {
    return false;
  }
}