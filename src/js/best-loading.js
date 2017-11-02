/*!
 * JavaScript Components best-loading
 * @author : chenyangdamon
 * @email  : 645230634@qq.com
 * @github : https://github.com/chenyangdamon
 * @Date   : 2017-02-28 22:08:02
 */
;
(function(root, factory) {
	if (typeof define === "function" && define.amd) {
		// AMD模式
		define(["jquery"], function() {
			factory.apply(root, arguments)
		});
	} else {
		// 全局模式
		factory.call(root, root.$);
	}
})(window, function($) {
	/**
	 * Loading组件
	 * [Loading description]
	 */
	var Loading = function() {
		/**
		 * [defaultOption description]
		 * @type {Object}
		 */
		this.defaultOption = {
			// loading动画依附的容器
			container: $("body"),
			skin: "",
			//effect:loading的动画类型 默认提供了3种动画，可以通过url属性自定义动画
			effect: "micrsoft", // micrsoft,recycle,flat
			//loading动画的地址
			url: "",
			//是否显示文本信息，默认显示
			show: true,
			//文本信息，用户可以自定义，默认是Being processed...
			text: "Being processed..."
		};
		this.init.apply(this, arguments);
	};

	/**
	 * [prototype description]
	 * @type {Object}
	 */
	Loading.prototype = {
		/**
		 * [constructor description]
		 * @type {String}
		 */
		constructor: "Loading",
		/**
		 * [init description]
		 * @return {[type]} [description]
		 */
		init: function() {
			var _this = this;
			//内置的loading动效
			_this.urls = {
				micrsoft: "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibGRzLW1pY3Jvc29mdCIgd2lkdGg9IjgwcHgiICBoZWlnaHQ9IjgwcHgiICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMCkiPjxjaXJjbGUgY3g9IjgxLjczNDEzMzYxMTY0OTQxIiBjeT0iNzQuMzUwNDU3MTYwMzQ4ODIiIGZpbGw9IiNGM0Y5RkQiIHI9IjUiIHRyYW5zZm9ybT0icm90YXRlKDM0MC4wMDEgNDkuOTk5OSA1MCkiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiB0aW1lcz0iMDsxIiBrZXlTcGxpbmVzPSIwLjUgMCAwLjUgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS41cyIgYmVnaW49IjBzIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvY2lyY2xlPjxjaXJjbGUgY3g9Ijc0LjM1MDQ1NzE2MDM0ODgyIiBjeT0iODEuNzM0MTMzNjExNjQ5NDEiIGZpbGw9IiNFNkY0RkEiIHI9IjUiIHRyYW5zZm9ybT0icm90YXRlKDM0OC4zNTIgNTAuMDAwMSA1MC4wMDAxKSI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIHRpbWVzPSIwOzEiIGtleVNwbGluZXM9IjAuNSAwIDAuNSAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjVzIiBiZWdpbj0iLTAuMDYyNXMiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iNjUuMzA3MzM3Mjk0NjAzNiIgY3k9Ijg2Ljk1NTE4MTMwMDQ1MTQ3IiBmaWxsPSIjRDBFQkY2IiByPSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzNTQuMjM2IDUwIDUwKSI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIHRpbWVzPSIwOzEiIGtleVNwbGluZXM9IjAuNSAwIDAuNSAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjVzIiBiZWdpbj0iLTAuMTI1cyI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI1NS4yMjEwNDc2ODg4MDIwNyIgY3k9Ijg5LjY1Nzc5NDQ1NDk1MjQxIiBmaWxsPSIjQjlFMUYzIiByPSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzNTcuOTU4IDUwLjAwMDIgNTAuMDAwMikiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiB0aW1lcz0iMDsxIiBrZXlTcGxpbmVzPSIwLjUgMCAwLjUgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS41cyIgYmVnaW49Ii0wLjE4NzVzIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjQ0Ljc3ODk1MjMxMTE5NzkzIiBjeT0iODkuNjU3Nzk0NDU0OTUyNDEiIGZpbGw9IiNBM0Q3RUYiIHI9IjUiIHRyYW5zZm9ybT0icm90YXRlKDM1OS43NiA1MC4wMDY0IDUwLjAwNjQpIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIgdGltZXM9IjA7MSIga2V5U3BsaW5lcz0iMC41IDAgMC41IDEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNXMiIGJlZ2luPSItMC4yNXMiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iMzQuNjkyNjYyNzA1Mzk2NDE1IiBjeT0iODYuOTU1MTgxMzAwNDUxNDciIGZpbGw9IiM3OUMzRTciIHI9IjUiIHRyYW5zZm9ybT0icm90YXRlKDAuMTgzNTUyIDUwIDUwKSI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIHRpbWVzPSIwOzEiIGtleVNwbGluZXM9IjAuNSAwIDAuNSAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjVzIiBiZWdpbj0iLTAuMzEyNXMiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iMjUuNjQ5NTQyODM5NjUxMTc2IiBjeT0iODEuNzM0MTMzNjExNjQ5NDEiIGZpbGw9IiM1MUIwRTAiIHI9IjUiIHRyYW5zZm9ybT0icm90YXRlKDEuODY0NTcgNTAgNTApIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIgdGltZXM9IjA7MSIga2V5U3BsaW5lcz0iMC41IDAgMC41IDEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNXMiIGJlZ2luPSItMC4zNzVzIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjE4LjI2NTg2NjM4ODM1MDYiIGN5PSI3NC4zNTA0NTcxNjAzNDg4NCIgZmlsbD0iIzJmYTZlMCIgcj0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoNS40NTEyNiA1MCA1MCkiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiB0aW1lcz0iMDsxIiBrZXlTcGxpbmVzPSIwLjUgMCAwLjUgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS41cyIgYmVnaW49Ii0wLjQzNzVzIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvY2lyY2xlPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjAgNTAgNTA7MCA1MCA1MCIgdGltZXM9IjA7MSIga2V5U3BsaW5lcz0iMC41IDAgMC41IDEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNXMiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2c+PC9zdmc+",
				recycle: "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibGRzLXJlY3ljbGUiIHdpZHRoPSI4MHB4IiAgaGVpZ2h0PSI4MHB4IiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLDUwKSI+CjxnIHRyYW5zZm9ybT0ic2NhbGUoMC43MzMzMzMzMzMzMzMzMzMzKSI+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01MCwtNTApIj4KPGcgdHJhbnNmb3JtPSJyb3RhdGUoMzUuMjY2MSA1MCA1MCkiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC43IDAgMC4zIDEiIGNhbGNNb2RlPSJzcGxpbmUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICA8cGF0aCBmaWxsPSIjMmZhNmUwIiBkPSJNMTIuMiwyNS43QzE5LjQsMTQuNCwzMS41LDYuNiw0NS42LDUuMmwzLjgsNy43bC00LjIsOC4zYy04LjEsMS4zLTE1LDYtMTkuNCwxMi41bC00LjktNy41TDEyLjIsMjUuN3oiPjwvcGF0aD4KICA8cGF0aCBmaWxsPSIjNkRDMUU5IiBkPSJNNTYsMTIuOWwtNCw4YzguMiwwLjYsMTUuNSw0LjYsMjAuNSwxMC42bDkuMy0wLjZsNC43LTcuMkM3OC44LDEzLDY2LjMsNS43LDUyLjEsNS4xTDU2LDEyLjl6Ij48L3BhdGg+CiAgPHBhdGggZmlsbD0iI0FDREJGMyIgZD0iTTg1LjEsMzYuN2wtOC45LDAuNWMzLjUsNy4yLDMuOSwxNS42LDEuMSwyMy4xbDUuMSw3LjdsOC42LDAuNWM1LjYtMTIuNCw1LjMtMjcuMS0xLTM5LjJMODUuMSwzNi43eiI+PC9wYXRoPgogIDxwYXRoIGZpbGw9IiMyZmE2ZTAiIGQ9Ik03OS4xLDczLjhsLTQuOS03LjVjLTQuNCw2LjUtMTEuNCwxMS4xLTE5LjQsMTIuNWwtNC4yLDguM2wzLjgsNy43YzE0LTEuNCwyNi4xLTkuMiwzMy40LTIwLjVMNzkuMSw3My44eiI+PC9wYXRoPgogIDxwYXRoIGZpbGw9IiM2REMxRTkiIGQ9Ik0xNC45LDYzLjNsOC45LTAuNWMtMy41LTcuMi0zLjktMTUuNi0xLjEtMjMuMUwxNy42LDMyTDksMzEuNWMtNS42LDEyLjQtNS4zLDI3LjEsMSwzOS4yTDE0LjksNjMuM3oiPjwvcGF0aD4KICA8cGF0aCBmaWxsPSIjQUNEQkYzIiBkPSJNNDQsODcuMWw0LThjLTguMi0wLjYtMTUuNS00LjYtMjAuNS0xMC42bC05LjMsMC42bC00LjcsNy4yQzIxLjIsODcsMzMuNyw5NC4zLDQ3LjksOTQuOUw0NCw4Ny4xeiI+PC9wYXRoPgo8L2c+PC9nPjwvZz48L2c+PC9zdmc+",
				flat: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgY2xhc3M9Imxkcy1mbGF0LXJpbmciPgogICAgPGRlZnM+CiAgICAgIDxtYXNrIG5nLWF0dHItaWQ9Int7Y29uZmlnLmNwaWR9fSIgaWQ9Imxkcy1mbGF0LXJpbmctMmQyNzU2YjE4ODUyMSI+CiAgICAgICAgPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDUiIG5nLWF0dHItZmlsbD0ie3tjb25maWcuYmFzZX19IiBmaWxsPSJub25lIj48L2NpcmNsZT4KICAgICAgPC9tYXNrPgogICAgPC9kZWZzPgogICAgPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDUiIG5nLWF0dHItZmlsbD0ie3tjb25maWcuYmFzZX19IiBmaWxsPSJub25lIj48L2NpcmNsZT4KICAgIDxwYXRoIG5nLWF0dHItZD0ie3tjb25maWcuZH19IiBuZy1hdHRyLWZpbGw9Int7Y29uZmlnLmRhcmt9fSIgbmctYXR0ci1tYXNrPSJ1cmwoI3t7Y29uZmlnLmNwaWR9fSkiIGQ9Ik0yNS45NTgzNjk0Mzk2NTczODIgNzQuMDQxNjMwNTYwMzQyNjEgQTM0IDM0IDAgMCAxIDc0LjA0MTYzMDU2MDM0MjYxIDI1Ljk1ODM2OTQzOTY1NzM4NSBMMTc0LjA0MTYzMDU2MDM0MjYgMTI1Ljk1ODM2OTQzOTY1NzM5IEwxMjUuOTU4MzY5NDM5NjU3MzkgMTc0LjA0MTYzMDU2MDM0MjYgWiIgZmlsbD0icmdiKDc0LCAxNDksIDc0KSIgbWFzaz0idXJsKCNsZHMtZmxhdC1yaW5nLTJkMjc1NmIxODg1MjEpIj48L3BhdGg+CiAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiBuZy1hdHRyLXI9Int7Y29uZmlnLnJhZGl1c319IiBuZy1hdHRyLXN0cm9rZT0ie3tjb25maWcuc3Ryb2tlMn19IiBuZy1hdHRyLXN0cm9rZS13aWR0aD0ie3tjb25maWcud2lkdGh9fSIgZmlsbD0ibm9uZSIgcj0iMzAiIHN0cm9rZT0iIzJmYTZlMCIgc3Ryb2tlLXdpZHRoPSI4Ij48L2NpcmNsZT4KICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIG5nLWF0dHItcj0ie3tjb25maWcucmFkaXVzfX0iIG5nLWF0dHItc3Ryb2tlPSJ7e2NvbmZpZy5zdHJva2V9fSIgbmctYXR0ci1zdHJva2Utd2lkdGg9Int7Y29uZmlnLmlubmVyV2lkdGh9fSIgbmctYXR0ci1zdHJva2UtbGluZWNhcD0ie3tjb25maWcubGluZWNhcH19IiBmaWxsPSJub25lIiByPSIzMCIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDUwIDUwKSI+CiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ibGluZWFyIiB2YWx1ZXM9IjAgNTAgNTA7MTgwIDUwIDUwOzcyMCA1MCA1MCIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMS43cyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UtZGFzaGFycmF5IiBjYWxjTW9kZT0ibGluZWFyIiB2YWx1ZXM9IjE4Ljg0OTU1NTkyMTUzODc2IDE2OS42NDYwMDMyOTM4NDg4Mjs5NC4yNDc3Nzk2MDc2OTM4IDk0LjI0Nzc3OTYwNzY5Mzc3OzE4Ljg0OTU1NTkyMTUzODc2IDE2OS42NDYwMDMyOTM4NDg4MiIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMS43IiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+CiAgICA8L2NpcmNsZT4KICA8L3N2Zz4="
			};
			_this.option = $.extend({}, _this.defaultOption);
		},
		/**
		 * [open description]
		 * @return {[type]} [description]
		 */
		open: function() {
			var _this = this;
			if (_this.loading) {
				return;
			}
			_this._renderHTML.call(_this, arguments[0] || {});
		},
		/**
		 * [close description]
		 * @return {[type]} [description]
		 */
		close: function() {
			var _this = this;
			_this.loading.remove();
			delete _this.loading;
		},
		/**
		 * [_renderHTML description]
		 * @param  {[type]} conf [description]
		 * @return {[type]}      [description]
		 */
		_renderHTML: function(conf) {
			var _this = this,
				loadingHTML = [],
				/**
				 * mode:loading有2种展示模式
				 * normal: 局部 (默认)
				 * full  : 满屏
				 */
				bFull = conf.mode === "full",
				sBg = conf.url || _this.urls[conf.effect || _this.option.effect],
				sText = (conf.show === false ? conf.show : _this.option.show) ? ("<p class='best-loading-text'>" + (conf.text || _this.option.text) + "</p>") : "";

			// 是否全屏展示
			loadingHTML.push("<div class='best-loading " + (conf.skin ? conf.skin : "") + "" + (bFull ? " fullscreen" : "") + "'>");
			// 是否有遮罩层
			loadingHTML.push(bFull ? "<div class='best-loading-mask'></div>" : "");
			loadingHTML.push("<div class='best-loading-container'><div class='best-loading-image' style='background-image:url(" + sBg + ")'></div>" + sText + "</div></div>");
			_this.loading = $(loadingHTML.join(""));
			//获取loading追加的DOM节点
			_this.container = (conf.container && (conf.container instanceof jQuery)) ? conf.container : _this.option.container;
			if (bFull) {
				_this.container.append(_this.loading);
			} else {
				_this.container.html(_this.loading);
			}
		}
	};
	/**
	 * [Loading description]
	 * @type {[type]}
	 */
	this.Loading = Loading;
});