<template>
	<div class="home">
		<div class="home-top">
			<div class="home-top__bg">
				<!--<Background/>-->
			</div>
			<div class="home-top__container site-container">
				<div class="home-top__body">
					<div class="home-top__txt">
						<div class="home-top__caption">
							{{ $t("message.homeCaption") }}
						</div>
						<div class="home-top__title">
							{{ $t("message.homeTitle") }}
						</div>
					</div>
					<div class="home-top__img">
						<!--<HomeMan/>-->
					</div>
				</div>
				<div class="home-top__bottom">
					<div class="home-top__btn">
						<Btn class="home-top__btn-i"
								 :btnName="btnName.publishsProject"
						/>
					</div>
					<div class="home-top__search">
						<Search class="home-top__search-i" v-bind:searchPlaseholder="searchPlaseholder.startTypingYourSearchQuery"/>
					</div>
				</div>
			</div>
		</div>
		<div class="top-categories">
			<div class="top-categories__inner site-container">
				<div class="top-categories__title site-title">
					{{ $t("message.topCategories") }}
				</div>

				<!--<img v-bind:src="require('../assets/img/ico/svg/top-categ01.svg')" alt="ico">-->

				<div class="top-categories__slider">
					<agile :dots="false"
								 :infinite="true"
								 :options="topCategoriesOption"
					>
						<div class="top-categories__slide"
								 v-for="(slide, index) in topCategories"
								 :key="slide[index]"
						>
							<div class="top-categories__slide-link">
								<div class="top-categories__slide-img">
									<img v-bind:src="$store.getters.getUrl + slide.slideIco" alt="ico">
								</div>
								<div class="top-categories__slide-name">
									{{ $t(slide.slideName) }}
								</div>
							</div>
						</div>
						<template slot="prevButton">
							<SliderBtnPrev/>
						</template>
						<template slot="nextButton">
							<SliderBtnNext/>
						</template>
					</agile>
				</div>
			</div>
		</div>


		<div class="how-it-works">
			<div class="how-it-works__inner site-container">
				<div class="how-it-works__title site-title">
					{{ $t("message.howItWorks") }}
				</div>
				<div class="how-it-works__content">
					<video width="400" poster="../../public/image/video-preview.jpg"
								 id="homeVideo"
					>
						<source src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4" type="video/mp4">
						Your browser does not support HTML video.
					</video>
				</div>
			</div>
		</div>

		<!--		<InlineSVG />-->
		<!--		<img :src="externalSVG" />-->
	</div>
</template>

<script>
	// import InlineSVG from '../../public/image/svg/top-categ01.svg?inline'; // Note the `?inline` query string
	// import ExternalSVG from '../../public/image/svg/top-categ01.svg';
	// import Background from '../assets/img/background.svg?inline'
	// import HomeMan from '../assets/img/home-man.svg?inline'

	import Btn from "./UI/Btn";
	import Search from "./UI/Search";
	import {VueAgile} from 'vue-agile';

	import SliderBtnPrev from '../assets/img/ico/slider-arrow-left.svg?inline'
	import SliderBtnNext from '../assets/img/ico/slider-arrow-right.svg?inline'

	export default {
		name: "Home",
		components: {
			// InlineSVG,
			// Background,
			// HomeMan,
			Btn,
			Search,
			agile: VueAgile,
			SliderBtnPrev,
			SliderBtnNext
		},

		computed: {
			// externalSVG() {
			//   return ExternalSVG
			// },
		},

		data: function () {
			return {
				btnName: {
					'publishsProject': "message.publishsProject"
				},

				searchPlaseholder: {
					'startTypingYourSearchQuery': "message.startTypingYourSearchQuery"
				},

				topCategoriesOption: {
					slidesToShow: 3,
					responsive: [
						{
							breakpoint: 750,
							settings: {
								slidesToShow: 5,
							}
						},
					]
				},

				topCategories: [
					{
						slideName: 'message.event',
						slideIco: 'image/svg/top-categ01.svg'
					},
					{
						slideName: 'message.food',
						slideIco: 'image/svg/top-categ02.svg'
					},
					{
						slideName: 'message.transportation',
						slideIco: 'image/svg/top-categ03.svg'
					},
					{
						slideName: 'message.repairWork',
						slideIco: 'image/svg/top-categ04.svg'
					},
					{
						slideName: 'message.polygraphy',
						slideIco: 'image/svg/top-categ05.svg'
					},
				]
			}
		},

		mounted() {
			let homeVideo = document.getElementById("homeVideo");

			homeVideo.onmouseenter = function(){
				toggleControls();
			};

			homeVideo.onmouseleave = function(){
				toggleControls();
			};

			function toggleControls() {
				if (homeVideo.hasAttribute("controls")) {
					homeVideo.removeAttribute("controls")
				} else {
					homeVideo.setAttribute("controls", "controls")
				}
			}
		},

		methods: {

		}
	}
</script>

<style lang="scss">
	.home {
		margin-top: -157px;
		/*background-image: url("../assets/img/vector-bg.png");*/
		background-image: url("../assets/img/vector-bg.svg");
		background-position-y: 249px;
		background-repeat: no-repeat;
	}

	.home-top {
		height: 860px;
		position: relative;
		padding-top: 260px;

		&__bg {
			position: absolute;
			right: 0;
			top: 0;
			overflow: hidden;
			display: flex;
			justify-content: flex-end;
			width: 100%;
			height: 100%;

			background-image: url("../assets/img/background.svg");
			background-repeat: no-repeat;
			background-position: right center;
			background-size: contain;
		}

		&__container {
			position: relative;
			z-index: 2;
			display: flex;
			flex-direction: column;
			height: 100%;
			justify-content: space-between;
			padding-bottom: 50px;
		}

		&__body {
			display: flex;
			justify-content: space-between;
			margin-bottom: 70px;
		}

		&__txt {
			padding-bottom: 80px;
			position: relative;

			&:before {
				content: '';
				bottom: 0;
				left: 0;
				width: 130px;
				height: 5px;
				background: #141414;
				position: absolute;
			}
		}

		&__caption {
			font-size: 24px;
			line-height: 28px;
			color: #525252;
			margin-bottom: 10px;
		}

		&__title {
			font-size: 46px;
			line-height: 70px;
			color: #141414;
			font-weight: bold;
			max-width: 687px;
		}

		&__img {
			margin-right: -100px;
			width: 631px;
			height: 403px;
			background-image: url("../assets/img/home-man.svg");
			background-repeat: no-repeat;
			background-position: center;
			background-size: contain;
		}

		&__bottom {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		&__btn {
			/*margin-right: 100px;*/
		}

		&__btn-i {
			height: 76px;
			padding-left: 80px;
			padding-right: 80px;
			font-weight: 500;
			font-size: 20px;
		}

		&__search {
			max-width: 939px;
			width: 100%;
		}

		&__search-i {

		}
	}

	.top-categories {
		&__inner {
			padding-top: 145px;
			padding-bottom: 135px;
		}

		&__title {
			margin-bottom: 70px;
		}

		&__slider {
			position: relative;
		}

		&__slide {

		}

		&__slide-link {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		&__slide-img {
			margin-bottom: 30px;
		}

		&__slide-name {
			font-weight: 500;
			font-size: 20px;
			line-height: 24px;
			text-align: center;
			color: #525252;
		}


		button.agile__nav-button {
			border: none;
			background-color: transparent;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			svg path {
				transition: .3s;
			}

			&:hover {
				svg path {
					fill: #D23D20;
				}
			}
		}

		button.agile__nav-button--prev {
			left: 0;
		}

		button.agile__nav-button--next {
			right: 0;
		}
	}

	.how-it-works {

		&__inner {
			padding-bottom: 160px;
			padding-top: 60px;
		}

		&__title {
			margin-bottom: 60px;
		}

		&__content {
			max-width: 1314px;
			width: 100%;
			margin: 0 auto;

			video {
				width: 100%;
			}
		}

	}


	.rtl {

		.home {
			background-image: url("../assets/img/vector-bg-rtl.png");
		}

		.home-top {
			&__bg {
				right: auto;
				left: 0;
				transform: scale(-1, 1);

			}

			&__body {
				flex-direction: row-reverse;
			}

			&__img {
				margin-right: 0;
				margin-left: -100px;
				transform: scale(-1, 1);
			}

			&__caption {
				text-align: right;
			}

			&__title {
				text-align: right;
			}

			&__txt:before {
				left: auto;
				right: 0;
			}

			&__bottom {
				flex-direction: row-reverse;
			}

			&__btn {
				margin-right: 0;
				/*margin-left: 20px;*/
			}
		}
	}

	@media(max-width: 1630px){
		.home-top__img{
			margin-right: 0;
			margin-left: 0;
		}

		.home-top__bg{
			background-position-x: 35vw;
		}
	}

	@media(max-width: 1400px){
		/*.home-top__bg > svg{*/
			/*width: 70%;*/
		/*}*/

		.home-top__search{
			max-width: 768px;
			margin-right: 20px;
		}

		.home-top__caption{
			font-size: 18px;
			line-height: 24px;
		}

		.home-top__title{
			font-size: 38px;
			line-height: 54px;
			max-width: 500px;
		}

		.home-top__body{
			align-items: center;
			margin-bottom: 35px;
		}
	}

	@media(max-width: 1300px){

		.home-top{
			height: 687px;
		}

		.home-top__img{
			width: 400px;
			height: 250px;
		}
	}

	@media(max-width: 1240px){
		.home-top__img{
			margin-right: 0;
			margin-left: 0;
		}

		.home-top__search{
			max-width: 470px;
		}

		.home-top__btn-i{
			padding-left: 24px;
			padding-right: 24px;
			height: 56px;
		}

		.top-categories__inner,
		.how-it-works__inner{
			padding-top: 50px;
			padding-bottom: 50px;
		}
	}

	@media(max-width: 992px){
		.home-top__img{
			width: 297px;
			height: 190px;
		}
	}

	@media(max-width: 700px){
		.home-top{
			padding-top: 150px;
			height: auto;
		}
		.home-top__bg {
			background-position-x: 0;
			background-image: url('../assets/img/background-mobile.svg');
			background-size: cover;
		}

		.home-top__body{
			flex-direction: column;
			align-items: center;
			align-items: flex-end;
		}

		.home-top__txt{
			display: flex;
			flex-direction: column;

			&:before{
				display: none;
			}
		}

		.home-top__caption{
			color: #ffffff;
			text-align: center;
			font-size: 16px;
			line-height: 19px;
		}

		.home-top__title{
			text-align: center;
			color: #ffffff;
			font-size: 24px;
			line-height: 36px;
		}

		.home-top__btn{
			display: none;
		}

		.home-top__img{
			width: 252px;
			height: 161px;
			margin-left: 20px;
		}

		.home-top__search{
			margin-right: 0;
		}

	}



</style>
