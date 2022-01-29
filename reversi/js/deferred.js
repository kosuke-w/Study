$(function() {
		// 待機処理関数
		var wait = function(nm, tm) {
			var d = $.Deferred();

			setTimeout(function() {
				console.log("[end] " + nm);
				d.resolve();
			}, tm);

			return d.promise();
		}

		var demo = 2;

		if (demo == 0) {
			// 順に実行
			setTimeout(function() {
				console.log("[end] 1");

				setTimeout(function() {
					console.log("[end] 2");

					setTimeout(function() {
						console.log("[end] 3");
					}, 800);
				}, 900);
			}, 1000);
		}

		if (demo == 1) {
			// 順に実行（直列処理）
			wait("wait-1", 1000)
			.then(function() {
				return wait("wait-2", 1000);
			})
			.then(function() {
				return wait("wait-3", 1000);
			});
		}

		if (demo == 2) {
			// まとめて実行（並列処理）
			$.when(wait("wait-1", 1200), wait("wait-2", 1100), wait("wait-3", 1000))
			.then(function() {
				console.log("全て終了");
			});
		}

		if (demo == 3) {
			// まとめて実行（並列処理）配列
			var arr = [];
			arr.push(wait("wait-1", 1200));
			arr.push(wait("wait-2", 1100));
			arr.push(wait("wait-3", 1000));
			$.when.apply($, arr)
			.then(function() {
				console.log("全て終了");
			});
		}

	});