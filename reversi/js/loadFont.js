$(function() {
		// リソース（フォント）の読み込み
		var r = [];
		r.push(resouce.font.load("serif", "ArchivoBlack, serif"));

		// $.when を利用して、$.Deferred の全処理が終わるのを待つ
		$.when.apply($, r).then(function() {
			// 縦横比固定でキャンバス作成
			var sz = game.core.getFitSz(10, 11);
			var c = game.canvas.initCnvs("reversi", sz.w, sz.h);

			// 文字描画
			c.cntx.fillStyle = "#000";
			c.cntx.textAlign = "center";
			c.cntx.textBaseline = "middle";
			c.cntx.font = (c.w * 0.1 | 0) + "px 'ArchivoBlack'";
			c.cntx.fillText("Abcdefghijklmn", c.w / 2, c.h / 2);
	  });
});