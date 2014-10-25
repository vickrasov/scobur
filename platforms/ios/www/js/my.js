/********************************************/
/*											*/
/*											*/
/*				POWER BY @TARUK				*/
/*					2014					*/
/*											*/
/********************************************/

$(function(){	
	$(document).on('keyup', function(e){
		if ((location.hash=='#chat')&&(e.keyCode==13)){
			$("#sendChat").click();
			//$("#textChat").blur();
		}
	});
	var win_width=$(window).width(),
		win_height=$(window).height();
		$(".page_one_user").css('height',(win_height-90)+'px');
		$("#chat").find(".page_one_user").css('height',(win_height-110)+'px');
		$(".page_chat").css('height',(win_height-55)+'px');
		$("#responce_user_load").css('height',(win_height-55)+'px');
		$(".page_setting").css('height',(win_height-125)+'px');
	
	setInterval(newSms, 2000);
	
	$(document).on("pagebeforeshow", function(event) {
		var loca=location.hash;
			if ((loca!='#chat')&&(window.sms!=undefined)){
				clearInterval(sms);
			} 
			
			if (loca=='#login'){
				$("#login_login").focus();
			}
			
			if (loca=='#chat'){
				setTimeout(function(){
					$("#chat").css('position','absolute');
				}, 1000);
			} else {
				$("#chat").css('position','fixed');
			}
			
			if (loca!=''){
				$(".back").css('visibility','visible');
			} else {
				$(".back").css('visibility','hidden');
			}
			
			if ((location.hash=='#map')&&(sessionStorage.mapView!='yes')){
				initialize(sessionStorage.lat, sessionStorage.lng);
				sessionStorage.mapView='yes';
			}
	});
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
				$.post("http://zonar.co/Zonar/register.php", {type: 1, z1:type_user, z2:login_user, z3:pass_user, z4:img, z5:name, z6:area, z7:phone, z8:other}, function(res){
					var rez=JSON.parse(res);
						if (rez[0].status==0){
							navigator.notification.alert(
							    rez[0].sms,  // message
							    alertDismissed,         // callback
							    'Error',            // title
							    'Done'                  // buttonName
							);
						} else {
							sessionStorage.login_app=login_user;
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
	
	//save 1
	$("#save_profile_1").click(function(){
		var img=$(".nophoto[data-role=img_1]").attr('data-img'),
			name=$("#Name").val(),
			area=$("#Area").val(),
			phone=$("#Phone_number").val(),
			other=$("#Other").val();
			
			if (name==''){
				$("#Name").focus();
			} else if (area==''){
				$("#Area").focus();
			} else {
				$.post("http://zonar.co/Zonar/save.php", {user:sessionStorage.login_app, type: 1, z1:img, z2:name, z3:area, z4:phone, z5:other}, function(res){
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
							    okToSave,         // callback
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
				$.post("http://zonar.co/Zonar/register.php", {type: 2, z1:type_user, z2:login_user, z3:pass_user, z4:img, z5:Expertise, z6:Tagline, z7:Business_name, z8:Own_name, z9:Areas_covered, z10:Working_hours, z11:Qualification, z12:GPS_radius, z13:Certification}, function(res){
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
							sessionStorage.login_app=login_user;
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
	
	
	//save 2
	$("#save_profile_2").click(function(){
		var img=$(".nophoto[data-role=img_2]").attr('data-img'),
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
			
			
			if (Qualification==''){
				$("#Qualification").focus();
			} else {
				$(".refa").fadeIn();
				$.post("http://zonar.co/Zonar/save.php", {user:sessionStorage.login_app, type: 2, z1:img, z2:Expertise, z3:Tagline, z4:Business_name, z5:Own_name, z6:Areas_covered, z7:Working_hours, z8:Qualification, z9:GPS_radius, z10:Certification}, function(res){
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
							    okToSave,         // callback
							    'Success',            // title
							    'Done'                  // buttonName
							);
						}
				});
			}
	});
	
	$("#login_app").click(function(){
		var login_user=$("#login_login").val(),
			pass_user=$("#pass_login").val(),
			member=$("#member").prop('checked');
			login_user=login_user.trim();
			if (login_user==''){
				$("#login_login").focus();
				return;
			}
			if (member==true){
				localStorage["login"]=login_user;
			}
			$.post("http://zonar.co/Zonar/login.php", {z1:login_user, z2:pass_user}, function(res){	
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
						sessionStorage.meter=rez[0].meter;
						localStorage["meter"]=rez[0].meter;
						$("span[data-meter="+rez[0].meter+"]").addClass('gol');
						$.post("http://zonar.co/Zonar/save_coords.php", {z1:sessionStorage.lat, z2:sessionStorage.lng, z3:sessionStorage.login_app}, function(res){
							window.location.replace("app.html");
							
						});
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
	
	$("#fileSend").change(function(){
		if ($(this).val()!=''){
			$(".refa").fadeIn();
			$(this).parents("form").submit();
		}
	});
	
	//download
	$(document).on('click', 'a[data-role=download]', function(e){
		e.preventDefault();
		$("body").append('<div class="gallery" style="background-image:url('+$(this).attr('href')+');background-repeat: no-repeat;background-position:center center;background-size:contain;"><a href="#" id="closeGallery">Close</a></div>');
	});
	
	$(document).on('click', '#closeGallery', function(){
		$(this).parent().remove();
	});
	
	$(".menu").click(function(){
		if ($(this).attr('data-role')==0){
			$(".menu_hover").animate({
				height: "19em"
			}, 500);
			$(this).animate({
				top: "18.9em"
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
	
	//logout
	$("#logout").click(function(){
		sessionStorage.login_app='';
		sessionStorage.logout='yes';
		localStorage.removeItem("login");
		window.location.replace('index.html');
	});
	
	/********************** app ******************/
	
	/* select user category */
	$("a[data-role=select_category_user]").click(function(){
		r_show();
		var category_id=$(this).attr('data-id');
			$.post("http://zonar.co/Zonar/select_category.php", {z1:category_id, z2:'no', z3:sessionStorage.lat, z4:sessionStorage.lng}, function(res){
				$("#responce_user_load").html(res);
				$.mobile.changePage("#all",{transition:"slide"});
				r_hide();
			});
	});
	
	$("#showSelectCategory").click(function(){
		$("#responce_user_load").html('');
		$(".menu_hover").animate({
			height: "0"
		}, 500);
		$(".menu").animate({
			top: "0"
		}, 500).attr('data-role','0');
		var mas=new Array();
			$(".menu_hover").find("input[type=checkbox]:checked").each(function(){
				mas.push($(this).val());
			});
			$.post("http://zonar.co/Zonar/select_category.php", {z1:mas, z2:'yes', z3:sessionStorage.lat, z4:sessionStorage.lng}, function(res){
				$("#responce_user_load").html(res);
				$.mobile.changePage("#all",{transition:"slide"});
				r_hide();
			});
			
	});
	
	/* показ всей информации */
	$(document).on('click', '#info_user_more', function(){
		if ($(this).attr('data-stan')==0){
			$(this).find(".info_user").animate({
				bottom: 0
			}, 500);
			$(this).attr('data-stan',1);
		} else {
			$(this).find(".info_user").animate({
				bottom: "-5.7em"
			}, 500);
			$(this).attr('data-stan',0);
		}
	});
	
	/* показ одного пользователя */
	$(document).on('click', 'a[data-role=view_one_user]', function(){
		var id=$(this).attr('data-id');
			$.post("http://zonar.co/Zonar/one_user.php", {z1:id}, function(res){
				var info=JSON.parse(res);		
					$(".page_one_user").css({'background':'url(http://zonar.co/Zonar/photo/'+info[0].img+')', 'background-size':'cover', 'background-position':'center top'});
					$(".title_info_user").html(info[0].Tagline);
					$(".info_user p:eq(0)").html(info[0].Business_name);
					$(".info_user p:eq(1)").html(info[0].Qualification);
					$(".info_user p:eq(2)").html(info[0].Areas_covered);
					$(".info_user p:eq(3)").html(info[0].Working_hours);
					$(".info_user p:eq(4)").html(info[0].Own_name);
					$(".info_user p:eq(5)").html(info[0].Expertise);
					sessionStorage.chatUser=id;
					$.mobile.changePage("#one_user",{transition:"slide"});
			});
	});
	
	$("#smsChat").click(function(){
		$("#bodyChat").html('');
		$.post("http://zonar.co/Zonar/smsChat.php", {uset_to:sessionStorage.login_app, user_from:sessionStorage.chatUser}, function(res){
			var ch=JSON.parse(res);
			for (i=0;i<ch.length-1;i++){
				$("#bodyChat").append(ch[i]);
			}
			sessionStorage.max_srt=ch[ch.length-1];
			$.mobile.changePage("#chat",{transition:"slide"});
			sms=setInterval(newChat, 1000);
			setTimeout(function(){
				var destination = $("#bodyChat div").last().offset().top;
				$("#bodyChat").animate({scrollTop: 99999}, 1000);
			}, 1000);
		});
	});
	
	//semd sms
	$("#sendChat").click(function(){
		$("#textChat").focus();
		var text=$("#textChat").val();
			text=text.trim();
			if (text==''){
				return;
			} else {
				$.post("http://zonar.co/Zonar/textChat.php", {uset_to:sessionStorage.login_app, user_from:sessionStorage.chatUser, text:$("#textChat").val(), srt:sessionStorage.max_srt}, function(res){
					$("#bodyChat").append('<div class="dialog_to" data-srt="'+sessionStorage.max_srt+'"><span>'+$("#textChat").val()+'</span><span class="dataChat">now <i class="fa fa-check fa-inverse"></i></span><img class="pin" src="./img/chat_orang.png"></div>');
					//$("#textChat").blur();
					$("#textChat").val('');
					sessionStorage.max_srt++;
					var destination = $("#bodyChat div").last().offset().top;
					$("#bodyChat").animate({scrollTop: 99999}, 1000);
					//$("#textChat").blur();
				});
				
		}
	});
	
	//main chat
	$("a[data-role=count_new_sms]").click(function(){
		$("#mainChat").html('');
		$.post("http://zonar.co/Zonar/main_chat.php", {user:sessionStorage.login_app}, function(res){
			var mainSms=JSON.parse(res);
				for (j=0;j<mainSms.length;j++){
					if (mainSms[j].status==1){
						$("#mainChat").append('<div class="one_main_chat clearfix"><a href="#" data-id="'+mainSms[j].userChat+'" data-role="view_one_user"><div class="photo_user_chat" style="background: url('+mainSms[j].img+') no-repeat;background-position: center top;background-size: cover;"></div></a><a href="#" data-role="log_chat" data-id="'+mainSms[j].userChat+'" data-img="'+mainSms[j].img+'"><div class="info_ch"><div class="title_ch"><font color="#FFBD00">NEW</font> MESSAGE</div><div class="data_ch">'+mainSms[j].data+'</div><div class="text_ch">'+mainSms[j].text+'</div><center><img src="./img/read.png" style="width:2.2em;"></center></div></a></div>');
					} else {
						$("#mainChat").append('<div class="one_main_chat clearfix"><a href="#" data-id="'+mainSms[j].userChat+'" data-role="view_one_user"><div class="photo_user_chat" style="background: url('+mainSms[j].img+') no-repeat;background-position: center top;background-size: cover;"></div></a><a href="#" data-role="log_chat" data-id="'+mainSms[j].userChat+'" data-img="'+mainSms[j].img+'"><div class="info_ch"><div class="title_ch"><font color="#FFBD00">LAST</font> MESSAGE</div><div class="data_ch">'+mainSms[j].data+'</div><div class="text_ch">'+mainSms[j].text+'</div><center><img src="./img/read.png" style="width:2.2em;"></center></div></a></div>');
					}
				}
				$.mobile.changePage("#main_chat",{transition:"slide"});
		});
	});
	
	$(document).on('click', 'a[data-role=log_chat]', function(){
		$(".page_one_user").css({'background':'url('+$(this).attr('data-img')+')', 'background-size':'cover', 'background-position':'center top'});
		$("#bodyChat").html('');
		sessionStorage.chatUser=$(this).attr('data-id');
		$.post("http://zonar.co/Zonar/smsChat.php", {uset_to:sessionStorage.login_app, user_from:sessionStorage.chatUser}, function(res){
			var ch=JSON.parse(res);
			for (i=0;i<ch.length-1;i++){
				$("#bodyChat").append(ch[i]);
			}
			sessionStorage.max_srt=ch[ch.length-1];
			$.mobile.changePage("#chat",{transition:"slide"});
			setTimeout(function(){
				var destination = $("#bodyChat div").last().offset().top;
				$("#bodyChat").animate({scrollTop: 99999}, 1000);
			}, 1000);
			sms=setInterval(newChat, 1000);
		});
	});
	
	//clear chat
	$("#clearAllChat").click(function(){
		$.post("http://zonar.co/Zonar/clear.php", {z1:sessionStorage.login_app}, function(res){
			navigator.notification.alert(
			    'Chat clear',  // message
			    alertDismissed,         // callback
			    'Success',            // title
			    'Done'                  // buttonName
			);
		});
	});
	
	//editUserProfile
	$("#editUserProfile").click(function(){
		$.post("http://zonar.co/Zonar/infoUser.php", {z1:sessionStorage.login_app}, function(res){
			var deb=JSON.parse(res);
				if (deb[0].type==1){
					if (deb[0].img!='none'){
						$("#edit_profile_one").find(".nophoto").css({'background':'url(http://zonar.co/Zonar/photo/'+deb[0].img+')', 'background-size':'cover', 'background-position':'left top', 'background-repeat':'no-repeat'}).attr('data-img',deb[0].img);
					}
					$("#edit_profile_one").find("#Name").val(deb[0].name);
					$("#edit_profile_one").find("#Area").val(deb[0].area);
					$("#edit_profile_one").find("#Phone_number").val(deb[0].phone);
					$("#edit_profile_one").find("#Other").val(deb[0].other);
					$.mobile.changePage("#edit_profile_one",{transition:"slide"});
				} else {
					$("#edit_profile_two").find("#Expertise").val(deb[0].Expertise);
					$("#edit_profile_two").find("#Tagline").val(deb[0].Tagline);
					$("#edit_profile_two").find("#Business_name").val(deb[0].Business_name);
					$("#edit_profile_two").find("#Own_name").val(deb[0].Own_name);
					$("#edit_profile_two").find("#Areas_covered").val(deb[0].Areas_covered);
					$("#edit_profile_two").find("#Working_hours").val(deb[0].Working_hours);
					$("#edit_profile_two").find("#GPS_radius").val(deb[0].GPS_radius);
					$("#edit_profile_two_2").find("#Qualification").val(deb[0].Qualification);
					if (deb[0].img!='none'){
						$("#edit_profile_two_2").find(".nophoto").css({'background':'url(http://zonar.co/Zonar/photo/'+deb[0].img+')', 'background-size':'cover', 'background-position':'left top', 'background-repeat':'no-repeat'}).attr('data-img',deb[0].img);
					}
					var ser=deb[0].img;
						ser=ser.split(',');
						for (n=0;n<ser.length;n++){
							$("#edit_profile_two_2").find("#rez_ser").append('<div class="one_us" style="background:url(http://zonar.co/Zonar/sertificat/'+ser[n]+');background-size:cover;background-position:center center" data-img="'+ser[n]+'"></div>');
						}
					$.mobile.changePage("#edit_profile_two",{transition:"slide"});
				}
		});
	});
	
	$("#Expertise").click(function(){
		$(".selectExp").fadeIn();
		$(this).blur();
		var valExp=$(this).val();
			if (/BUILDER/.test(valExp)==true){
				$(".selectExp").find("input").eq(0).attr('checked','true');
			}
			
			if (/PLUMBER/.test(valExp)==true){
				$(".selectExp").find("input").eq(1).attr('checked','true');
			}
			
			if (/HANDY MAN/.test(valExp)==true){
				$(".selectExp").find("input").eq(2).attr('checked','true');
			}
			
			if (/PAINTER/.test(valExp)==true){
				$(".selectExp").find("input").eq(3).attr('checked','true');
			}
	});
	
	$("#saveExp").click(function(){
		var mas=new Array();
			$(".selectExp input[type=checkbox]:checked").each(function(){
				mas.push($(this).val());
			});
		var new_mas=mas.join();
		$("#Expertise").val(new_mas);
		$(".selectExp").fadeOut();
	});
	
	$("#one_user").swipe(function(){
		$("#gallery_sertificat").find(".body_page").html('');
		$.post("http://zonar.co/Zonar/userSertificate.php", {z1:sessionStorage.login_app}, function(res){
			$("#gallery_sertificat").find(".body_page").html(res);
			$.mobile.changePage("#gallery_sertificat",{transition:"slide"});
		});
	});
	
	$("span[data-role=selectMetrik]").click(function(){
		$("span[data-role=selectMetrik]").removeClass('gol');
		$(this).addClass('gol');
		sessionStorage.meter=$(this).attr('data-meter');
		$.post("http://zonar.co/Zonar/saveMeter.php", {z1:$(this).attr('data-meter'), z2:sessionStorage.login_app}, function(){
			
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

function newChat(){
	$.post("http://zonar.co/Zonar/newChat.php", {uset_to:sessionStorage.login_app, user_from:sessionStorage.chatUser}, function(res){	
		var chat=JSON.parse(res);
			for (i=0;i<chat.length;i++){
				if (chat[i].pub==1){
					$("#bodyChat").append('<div class="dialog'+chat[i].type+'" data-srt="'+chat[i].srt+'"><span>'+chat[i].text+'</span><span class="dataChat">'+chat[i].data+' <i class="fa fa-check fa-inverse"></i><i class="fa fa-check fa-inverse"></i></span><img class="pin" src="./img/chat'+chat[i].pin+'.png"></div>');
					var destination = $("#bodyChat div").last().offset().top;
					$("#bodyChat").animate({scrollTop: 99999}, 1000);
				} else {
					$(".dialog"+chat[i].type+"[data-srt="+chat[i].srt+"]").find(".dataChat").html(chat[i].data+' <i class="fa fa-check fa-inverse"></i><i class="fa fa-check fa-inverse"></i>');
				}
				
			}
	});
}

function newSms(){
	$.post("http://zonar.co/Zonar/newSms.php", {uset_from:sessionStorage.login_app}, function(res){
		$("a[data-role=count_new_sms]").find("span").html(res);
	});
}

function initialize(x1, y1) {
	var mapOptions = {
	  center: new google.maps.LatLng(x1, y1),
	  zoom: 12,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  disableDefaultUI: true
	};
	
	var map = new google.maps.Map(document.getElementById("map_canvas"),
	    mapOptions);
	
	var marker = new google.maps.Marker({  
    	position: new google.maps.LatLng(x1, y1), 
		map: map, 
		title: 'I',
		icon: './img/male.png'
    });
	
	$.post("http://zonar.co/Zonar/user.php", function(res){
		var info=JSON.parse(res);
		for (i=0;i<info.length;i++){   
			if (info[i].x1!=null){ 
				var marker = new google.maps.Marker({  
			        	position: new google.maps.LatLng(info[i].x1, info[i].y1), 
						map: map, 
						title: info[i].name
			        }); 
			        
			        img=info[i].img;
			        size=info[i].size;
			        name=info[i].name;
			        id=info[i].id;
			        c1=info[i].x1;
			        c2=info[i].y1
			        
			        
			        $.ajax({
					  type: 'POST',
					  url: "http://maps.googleapis.com/maps/api/distancematrix/json?origins="+sessionStorage.lat+","+sessionStorage.lng+"&destinations="+c1+","+c2+"&mode=driving&sensor=false&units="+sessionStorage.meter,
					  data: '',
					  success: function(response){
						  if (response.rows[0].elements[0].status=='OK'){
							data='<div style="padding:10px;width:60%"><div style="width:50px;height:50px;background:url('+img+');background-position:center top;background-size:'+size+'"></div><div>'+name+'</div><div><font style="font-weight:bold">Distance:</font> '+response.rows[0].elements[0].distance.text+'</div><div><a href="#" data-id="'+id+'" data-role="view_one_user">More...</div></div></div>';
						} else {
							data='<div style="padding:10px;width:60%"><div style="width:50px;height:50px;background:url('+img+');background-position:center top;background-size:'+size+'"></div><div>'+name+'</div><div><font style="font-weight:bold">Distance:</font> --</div><div><a href="#" data-id="'+id+'" data-role="view_one_user">More...</div></div></div>';
						}
						makeInfoWin(marker, data);
					  },
					  dataType: 'json',
					  async:false
					});
			        
					/*
$.post("http://maps.googleapis.com/maps/api/distancematrix/json?origins="+sessionStorage.lat+","+sessionStorage.lng+"&destinations="+c1+","+c2+"&mode=driving&language=ru&sensor=false", function(res2){
						if (res2.rows[0].elements[0].status=='OK'){
							data='<div style="padding:10px;width:60%"><div style="width:50px;height:50px;background:url('+img+');background-position:center top;background-size:'+size+'"></div><div>'+name+'</div><div><font style="font-weight:bold">Distance:</font> '+res2.rows[0].elements[0].distance.text+'</div><div><a href="#" data-id="'+id+'" data-role="view_one_user">More...</div></div></div>';
						} else {
							data='<div style="padding:10px;width:60%"><div style="width:50px;height:50px;background:url('+img+');background-position:center top;background-size:'+size+'"></div><div>'+name+'</div><div><font style="font-weight:bold">Distance:</font> --</div><div><a href="#" data-id="'+id+'" data-role="view_one_user">More...</div></div></div>';
						}
						makeInfoWin(marker, data);
					});
*/
			}
		}
	});
	
	$(document).on('click', '#map_center', function(res){
		var center=new google.maps.LatLng(sessionStorage.lat, sessionStorage.lng);
		map.setCenter(center);
	});	
	
	$("#search_button").click(function(){
		var text=$("#search_text").val();
			$.post("http://maps.googleapis.com/maps/api/geocode/json?address="+text+"&sensor=true", function(res){
				var center=new google.maps.LatLng(res.results[0].geometry.location.lat, res.results[0].geometry.location.lng);
				map.setCenter(center);
			});
	});
	
	function makeInfoWin(marker, data) {
	  var infowindow = new google.maps.InfoWindow();
	
		  google.maps.event.addListener(marker, 'click', function() {
		    infowindow.setContent(data);
            infowindow.open(map, this);
		  });  
	}
		
}

function okToSave(){
	
}

function calcRoute(c1, c2) {
	var directionsService = new google.maps.DirectionsService();
	  var start = c1;
	  var end = c2;
	  var request = {
	      origin:start,
	      destination:end,
	      travelMode: google.maps.TravelMode.DRIVING
	  };

	  directionsService.route(request, function(response, status) {
		  showSteps(response);
	  });
	}
	
function showSteps(directionResult) {
  // For each step, place a marker, and add the text to the marker's
  // info window. Also attach the marker to an array so we
  // can keep track of it and remove it when calculating new
  // routes.
  var myRoute = directionResult.routes[0].legs[0];

  		sessionStorage.dist=myRoute.distance.text;
}