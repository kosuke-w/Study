$(function() {
		// 縦横比固定でキャンバス作成
		var sz = game.core.getFitSz(10, 11)
		var c = game.canvas.initCnvs("reversi", sz.w, sz.h);

		// アニメ追加
		game.anim.add("bg", function(tm) {
			// 全面色塗り
			c.cntx.fillStyle = "#faa";
			c.cntx.fillRect(0, 0, c.w, c.h);
		});
		game.anim.add("rct1", function(tm) {
			// 矩形色塗り1
			c.cntx.fillStyle = "#aaf";
			c.cntx.fillRect(
				tm.sum % c.w, tm.sum % c.w,
				c.w * 0.2, c.h * 0.2);
		});
		game.anim.add("rct2", function(tm) {
			// 矩形色塗り2
			c.cntx.fillStyle = "#afa";
			c.cntx.fillRect(
				tm.sum * 0.5 % c.w, tm.sum * 0.5 % c.w,
				c.w * 0.15, c.h * 0.15);
		});

		// アニメ開始
		game.anim.strt();

		// アニメ削除
		setTimeout(function() {game.anim.rmv("rct2")}, 1000);

		// アニメ停止
		setTimeout(function() {game.anim.stp()}, 2000);
	});