$(function() {
		// リソース（音声）の読み込み
		var r = [];
		r.push(resouce.sound.load("se0",   "snd/se0", "se"));
		r.push(resouce.sound.load("se1",   "snd/se1", "se"));
		r.push(resouce.sound.load("bgm0",  "snd/bgm0"));
		r.push(resouce.sound.load("bgm1",  "snd/bgm1"));
		r.push(resouce.sound.load("win",   "snd/win"));
		r.push(resouce.sound.load("lose",  "snd/lose"));

		// $.when を利用して、$.Deferred の全処理が終わるのを待つ
		$.when.apply($, r).then(function() {
			// ボタンの作成
			var css = {width: "200px", height: "50px", display: "block"};

			// 通常の開始、停止、一時停止
			$("<button>").text("開始").click(function() {
				resouce.sound.play("bgm0");
			}).css(css).appendTo("body");

			$("<button>").text("停止").click(function() {
				resouce.sound.stop("bgm0");
			}).css(css).appendTo("body");

			$("<button>").text("一時停止").click(function() {
				resouce.sound.pause("bgm0");
			}).css(css).appendTo("body");

			$("<hr>").appendTo("body");

			// ループ開始、停止
			$("<button>").text("ループ開始").click(function() {
				resouce.sound.playLoop("se0-0");
			}).css(css).appendTo("body");

			$("<button>").text("停止").click(function() {
				resouce.sound.stop("se0-0");
			}).css(css).appendTo("body");

			$("<hr>").appendTo("body");

			// SE開始、BGM開始/切り替え
			$("<button>").text("SE開始").click(function() {
				resouce.sound.playSE("se1");
			}).css(css).appendTo("body");

			var cnt = 0;
			$("<button>").text("BGM開始/切り替え").click(function() {
				if (cnt == 0) resouce.sound.playBGM("bgm0");
				else          resouce.sound.playBGM("bgm1");
				cnt = 1 - cnt;
			}).css(css).appendTo("body");

		});
	});