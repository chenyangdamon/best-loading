/*
 * @Author: chenyang_pc
 * @Date:   2017-10-28 22:08:02
 * @Last Modified by:   chenyang_pc
 * @Last Modified time: 2017-11-02 16:27:56
 */

$(function() {

	// 实例化Loading组件
	var loading = new Loading();
	var close = function() {
		var _this = this;
		setTimeout(function() {
			_this.close();
		}, 3000);
	}

	$(".example-btn-1").click(function() {
		loading.open({
			container: $(".example-container-local"),
		});
		close.call(loading);
	});

	$(".example-btn-2").click(function() {
		loading.open({
			container: $(".example-container-local"),
			show: false,
		});
		close.call(loading);
	});
	$(".example-btn-3").click(function() {
		loading.open({
			container: $(".example-container-local"),
			text: "正在打印车票..."
		});
		close.call(loading);
	});

	$(".example-btn-4").click(function() {
		loading.open({
			mode: "full",
		});
		close.call(loading);
	});

	$(".example-btn-5").click(function() {
		loading.open({
			mode: "full",
			show: false,
		});
		close.call(loading);
	});
	$(".example-btn-6").click(function() {
		loading.open({
			mode: "full",
			text: "正在打印车票..."
		});
		close.call(loading);
	});	

	$(".example-btn-7").click(function() {
		loading.open({
			mode: "full",
			effect:"flat"
		});
		close.call(loading);
	});

	$(".example-btn-8").click(function() {
		loading.open({
			mode: "full",
			effect:"flat",
			show: false,
		});
		close.call(loading);
	});
	$(".example-btn-9").click(function() {
		loading.open({
			mode: "full",
			effect:"flat",
			text: "正在打印车票..."
		});
		close.call(loading);
	});
});