//横スクロール
$(function () {
	const scrollElement = document.querySelector("#slides-wrapper");
	let touchStartY = 0;
	let touchStartX = 0;
	let isScrolling = false;
	let requestId;

	// タッチデバイス用のイベントリスナー
	scrollElement.addEventListener("touchstart", (e) => {
		touchStartY = e.touches[0].clientY;
		touchStartX = e.touches[0].clientX;
		isScrolling = true;
	});

	scrollElement.addEventListener("touchmove", (e) => {
		if (!isScrolling) return;

		const touchMoveY = e.touches[0].clientY;
		const touchMoveX = e.touches[0].clientX;
		const deltaY = touchMoveY - touchStartY;
		const deltaX = touchMoveX - touchStartX;

		// 縦スクロールよりも横スクロールの方が多い場合は、縦スクロールを無視する
		if (Math.abs(deltaY) < Math.abs(deltaX)) return;

		e.preventDefault();
		// 移動量をスケール調整
		const scrollAmount = deltaY * 1.5; // スクロール速度を調整
		scrollElement.scrollLeft -= scrollAmount;

		// タッチ開始位置を更新
		touchStartY = touchMoveY;
		touchStartX = touchMoveX;
	});

	scrollElement.addEventListener("touchend", () => {
		isScrolling = false;
	});

	// PC用のマウスホイールイベントリスナー
	scrollElement.addEventListener("wheel", (e) => {
		e.preventDefault();
		scrollElement.scrollLeft += e.deltaY;
	});

	// スムーズなスクロール関数
	function smoothScroll() {
		scrollElement.scrollLeft += (targetScroll - scrollElement.scrollLeft) / 8; // 8はスムージング係数
		if (Math.abs(targetScroll - scrollElement.scrollLeft) < 1) {
			cancelAnimationFrame(requestId);
		} else {
			requestId = requestAnimationFrame(smoothScroll);
		}
	}

	// タッチデバイスとマウスホイールのスクロール処理を統一して、スムーズなスクロールを行う
	let targetScroll = 0;
	scrollElement.addEventListener("wheel", (e) => {
		e.preventDefault();
		targetScroll += e.deltaY;
		if (!requestId) {
			requestId = requestAnimationFrame(smoothScroll);
		}
	});
});


// mydad　画像選択→拡大

$(function () {

	$(".mydad_sub_img").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 8000,
		cssEase: 'linear',
		slidesToShow: 4,
		responsive: [{
			breakpoint: 960,
			settings: {
				arrows: false,
				autoplay: true,
				autoplaySpeed: 0,
				speed: 8000,
				cssEase: 'linear',
				infinite: true
			}
		}, {
			breakpoint: 600,
			settings: {
				arrows: false,
				autoplay: true,
				autoplaySpeed: 0,
				speed: 8000,
				cssEase: 'linear',
				slidesToShow: 3,
				infinite: true
			}
		}]
	});

	$(".mydad_sub_img li").eq(0).addClass("select");

	$(".mydad_sub_img img").click(function () {
		var img = $(this).attr("src");

		$(".mydad_sub_img li").removeClass("select");
		$(this).parent().addClass("select");

		$(".mydad_main img").fadeOut(500, function () {
			$(this).attr("src", img),
				$(this).fadeIn(500)
		});
	});
});


//gallery　画像選択→拡大

$(function () {
	if (window.matchMedia("(max-width: 767px)").matches) {
		// windowのサイズが767px以下
		$(".gallery_zoom").css('display', 'none');


		$(".item").click(function () {
			var img = $(this).children("img").attr("src");
			var text = $(this).children("p").text();

			$(".gallery_zoom").fadeOut(500, function () {
				$(this).children("img").attr("src", img),
					$(this).children("p").text(text),
					$(this).fadeIn(300)
			});

			$(".gallery_zoom").addClass("open");
			$("#js-overlay").addClass("open");
		});

		$("#js-close").click(function () {
			$(".gallery_zoom").hide().removeClass("open");
			$(".gallery_zoom").css('display', 'none');
			$("#js-overlay").removeClass("open");
		});


	} else {
		// windowのサイズが768px以上
		$(".item").click(function () {
			var img = $(this).children("img").attr("src");
			var text = $(this).children("p").text();

			$(".gallery_zoom").fadeOut(500, function () {
				$(this).children("img").attr("src", img),
					$(this).children("p").text(text),
					$(this).fadeIn(300)
			});

			$(".gallery_zoom").addClass("open");
		});
	}
});


