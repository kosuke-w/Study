"use strict";

$(function() {
  // 縦横比固定でキャンバス作成
  var id = "reversi";
  var sz = game.core.getFitSz(10, 11);
  var c = game.canvas.initCnvs(id, sz.w, sz.h);

  // 全面色塗り
  // fillStyle関数
  c.cntx.fillStyle = "#faa";
  // fillRect関数
  c.cntx.fillRect(0, 0, c.w, c.h);
});