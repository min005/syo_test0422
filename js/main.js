//横スクロール
$(function () {
	const scrollElement = document.querySelector("#slides-wrapper");

	scrollElement.addEventListener("wheel", (e) => {
		if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
		e.preventDefault();
		scrollElement.scrollLeft += e.deltaY;
	});
	
	scrollElement.addEventListener("touchmove", (e) => {
		if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
		e.preventDefault();
		scrollElement.scrollLeft += e.deltaY;
	});
});


// mydad　画像選択→拡大

$(function () {

	$(".mydad_sub_img").slick({
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 2,

		responsive: [{
			breakpoint: 960,
			settings: {
				arrows: false,
				autoplay: true,
				autoplaySpeed: 3000,
				slidesToScroll: 2,
				infinite: true,
			},
			breakpoint: 600,
			settings: {
				slidesToScroll: 1,
				slidesToShow: 3,
			},
		},
		]
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


