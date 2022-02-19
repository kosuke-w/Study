$(function() {
		// 縦横比固定でキャンバス作成
		var sz = game.core.getFitSz(10, 11);
		var c = game.canvas.initCnvs("reversi", sz.w, sz.h, 1);

		// アニメ追加
		game.anim.add("bg", function(tm) {
			// 全面色塗り
			c.cntx.fillStyle = "#faa";
			c.cntx.fillRect(0, 0, c.w, c.h);
		});

		// UI初期化
		game.ui.init(c);

		// ボタン追加1
		game.ui.addBtn("btn1", "Button1", 10, 10, 200, 50,
			function() {
				game.ui.rmvBtn("btn1");
			});

		// ボタン追加2
		game.ui.addBtn("btn2", "Button2", 10, 60, 200, 50,
			function() {
				game.ui.rmvBtn("btn1");
			});

		// アニメ開始
		game.anim.strt();
	});