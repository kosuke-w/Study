	$(function() {
		// リソース（画像）の読み込み
		var r = [];
		r.push(resouce.image.load("bg",    "img/bg.png"));
		r.push(resouce.image.load("_tkn0", "img/token0.png"));
		r.push(resouce.image.load("_tkn1", "img/token1.png"));

		// $.when を利用して、$.Deferred の全処理が終わるのを待つ
		$.when.apply($, r).then(function() {
			var imgs = resouce.image.imgs;
			for (var key in imgs) {
				console.log(imgs[key]);
				$("body").append(key).append(imgs[key]);
			}
		});
	});