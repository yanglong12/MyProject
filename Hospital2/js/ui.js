
// 搜索内容选择
$.fn.search = function(){
	var ui = $(this);
	$('.selected',ui).on('click',function(){
		$('.box').show();
		return false;
	})

	$('.box p',ui).on('click',function(){
		$('.selected').text($(this).text());
		$('.box').hide();
		return false;
	})

	$(document).on('click',function(){
		$('.box').hide();
	})
}

// 点击医院系统大标题，切换内容
$.fn.uiTab = function(header,content){

	var ui = $(this);
	var tabs = $(header,ui);
	var cons = $(content,ui);
	tabs.on('click',function(){
		var index = $(this).index();
		tabs.removeClass('focuse').eq(index).addClass('focuse');
		cons.hide().eq(index).show();
		return false;
	})

}

// 点击预约挂号里面的科室表格内容，切换到排班表
$.fn.schedule = function(content1,content2,button){

	var ui = $(this);
	var system = $(content1,ui);
	var schedule = $(content2,ui);
	var button =$(button,ui);
	button.on('click',function(){
		system.hide();
		schedule.show();
		return false;
	})

}

// 点击排班表里面返回科室列表，返回到预约挂号
$.fn.backTo = function(content1,content2,button){

	var ui = $(this);
	var system = $(content1,ui);
	var schedule = $(content2,ui);
	var button =$(button,ui);
	button.on('click',function(){
		system.show();
		schedule.hide();
		return false;
	})

}

// 点击排班表左右按钮，切换不同日期的排班表


// 函数调用		
$(function(){
	$(".search").search();
	$('.system').uiTab('.system-title > .item','.block > .item');
	$('body').schedule('.system','.schedule','.block a');
	$('body').backTo('.system','.schedule','.schedule-caption span');
	

})

var week = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
		$('schedule_box_wrap').empty();
	var pageCount = 7,
		days = pageCount * 7,
		date = new Date(),
		time = date.getTime();
	for (var i = 0; i < days; i++) {
		var _t = time + i*86400*1000;
		var _d = new Date(_t);
		var html = [];

		var w = week[_d.getDay()];
		var y = _d.getFullYear();
		var m = _d.getMonth()+1;
		m = m < 10 ? '0' + m : m;
		var d =_d.getDate();
		d = d < 10 ? '0' + d : d;
		// console.log(d);
		html.push('<div class="schedule_box_item"> <div class="date">'+w+'<br>'+y+'-'+m+'-'+d+'</div>');
		html.push('<div class="status"></div>');
		html.push('<div class="status status_full">约满</div>');
		html.push('<div class="status"></div></div>');
		$('#schedule_box_wrap').append(html.join(''));

	};

var currentPage = 0;
$('.schedule_tool_left .icon').on('click',function(){
	currentPage--;
	if(currentPage<0){
		currentPage = 0;
	}
	$('#schedule_box_wrap').css('left',-658*currentPage);
	return false;
});
$('.schedule_tool_right .icon').on('click',function(){
	currentPage++;
	if(currentPage>6){
		currentPage = 6;
	}
	$('#schedule_box_wrap').css('left',-658*currentPage);
	return false;
});