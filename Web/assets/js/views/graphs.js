"use strict";

var Graph = {
	'category' : {
		'init' : function(selector, importLabels, importSeries){
			new Chartist.Line(selector, {
				labels: importLabels,
				series: importSeries
			}, {
				low: 0,
				showArea: true
			});

			var $categoryGraph = $(selector);

			var $toolTip = $categoryGraph
				.append('<div class="tooltip"></div>')
				.find('.tooltip')
				.hide();

			$categoryGraph.on('mouseenter', '.ct-point', function() {
				var $point = $(this),
					value = $point.attr('ct:value'),
					seriesName = $point.parent().attr('ct:series-name');
				$toolTip.html(seriesName + '<br>' + value).show();
			});

			$categoryGraph.on('mouseleave', '.ct-point', function() {
				$toolTip.hide();
			});

			$categoryGraph.on('mousemove', function(event) {
				$toolTip.css({
					left: (event.offsetX || event.originalEvent.layerX) - $toolTip.width() / 2 - 10,
					top: (event.offsetY || event.originalEvent.layerY) - $toolTip.height() - 40
				});
			});
		}
	},

	'snippet' : {
		init : function(selector, importLabels, importSeries){
			var data = {
				labels: importLabels,
				series: importSeries
			};

			var options = {
				seriesBarDistance: 10
			};

			/*var responsiveOptions = [
				['screen and (max-width: 640px)', {
					seriesBarDistance: 5,
					axisX: {
						labelInterpolationFnc: function (value) {
							return value[0];
						}
					}
				}]
			];*/

			new Chartist.Bar(selector, data, options);
		}
	},
	'clickRate' : {
		init : function(selector, importSeries){
			var data = {
				series: importSeries
			};

			var options = {
				donut: true,
				donutWidth: 40,
				total: 100,
				labelInterpolationFnc: function(value) {
					return value + '%';
				}
			};

			new Chartist.Pie(selector, data, options);
		}
	}
}


