<template>
	<header class="header">
		<div class="header__inner" v-bind:class="{ 'site-container': homePage }">
			<div class="header__content">
				<div class="header__logo">
					<router-link to="/home">
						<Kli1Logo/>
					</router-link>
				</div>
				<div class="header__nav">
					<div class="header__nav-item">
						<a href="#" class="header__nav-link">{{ $t("message.workers") }}</a>
					</div>
					<div class="header__nav-item">
						<a href="#" class="header__nav-link">{{ $t("message.projects") }}</a>
					</div>
					<div class="header__nav-item" v-show="!homePageHideElement()">
						<Btn class="header__nav-btn"
								 v-bind:btnName="btnName.publishsProject"
								 v-on:click.native="test"
						/>
						<div class="header__nav-dropdown">
							<div class="header__nav-dropdown-content">
								<div class="header__nav-dropdown-column">
									<a href="#" class="header__nav-dropdown-title">
										Category 1
									</a>
									<div class="header__nav-dropdown-list">
										<a href="#" class="header__nav-dropdown-link">
											Subcategory name
										</a>
										<a href="#" class="header__nav-dropdown-link">
											Subcategory
										</a>
										<a href="#" class="header__nav-dropdown-link">
											Select Subcategory
										</a>
										<a href="#" class="header__nav-dropdown-link">
											Subcategory name
										</a>
										<a href="#" class="header__nav-dropdown-link">
											Subcategory
										</a>
									</div>
								</div>
								<div class="header__nav-dropdown-column">
									<a href="#" class="header__nav-dropdown-title">
										Category 2
									</a>
									<div class="header__nav-dropdown-list">
										<a href="#" class="header__nav-dropdown-link">
											Subcategory name
										</a>
										<a href="#" class="header__nav-dropdown-link">
											Subcategory
										</a>
									</div>
								</div>
							</div>
							<div class="header__nav-dropdown-all">
								<a href="#" class="header__nav-dropdown-all-i">
									See all categories
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="header__search" v-show="!homePageHideElement()">
					<form action="#">
						<div class="ui-search">
							<div class="ui-search-body">
								<input type="text" class="ui-search-input">
								<div class="ui-search-select">
									<input type="text" value="All categories">
									<div class="ui-search-select-dropdown">
										<div class="ui-search-select-option" data-value="Name of category">
											Name of category
										</div>
									</div>
									<div class="ui-search-select-dropdown">
										<div class="ui-search-select-option" data-value="Name of category">
											Name of category
										</div>
									</div>
									<div class="ui-search-select-dropdown">
										<div class="ui-search-select-option" data-value="Name of category">
											Name of category
										</div>
									</div>
								</div>
								<button class="ui-search-btn">
									<img src="#" alt="search ico">
								</button>
							</div>
						</div>
					</form>
				</div>
				<div class="header__interactive">
					<div class="header__profile">
						<a href="#" class="header__profile-link">
							<span class="header__profile-count">9+</span>
							<span class="header__profile-txt">{{ $t("message.myProfile") }}</span>
							<div class="header__profile-ico">
								<ProfileIco/>
							</div>
						</a>
					</div>
					<div class="header__cart">
						<a href="#" class="header__cart-link">
							<span class="header__cart-count">2</span>
							<span class="header__cart-txt">{{ $t("message.cart") }}</span>
							<span class="header__cart-ico">
								<CartLogo/>
							</span>
						</a>
					</div>
					<div class="header__lang">
						<div class="header__lang-link" v-on:click="showLang = !showLang">
              <span class="header__lang-flag">
                <img src="../../assets/img/ico/flag-ua.png" alt="flag">
              </span>
							{{ $t("message.ukraine") }} / {{ nowLang}}
							<span class="header__lang-arrow">
                <RedArrowDown/>
              </span>
						</div>
						<div class="header__lang-dropdown"
								 id="header-lang-dropdown"
								 v-bind:class="{ 'show' : showLang === true} "
						>
							<div class="header__lang-dropdown-row">
								<label>Country</label>
								<multiselect
										v-model="selectCountry.value"
										:options="selectCountry.options"
										:show-labels="true"
										:select-label="``"
										:deselect-label="``"
										:selectedLabel="``"
										:searchable="false"
								>
									<template slot="singleLabel"
														slot-scope="props"
									>
										<img class="option__image"
												 :src="props.option.ico"
												 alt="ico">
										<span class="option__desc">
											<span class="option__title">
												{{ props.option.name }}
											</span>
										</span>
									</template>

									<template slot="option" slot-scope="props"
									>
										<img class="option__image"
												 :src="props.option.ico"
												 alt="ico"
										>
										<span class="option__title">
											{{ props.option.name  }}
										</span>
									</template>

								</multiselect>
							</div>
							<div class="header__lang-dropdown-row">
								<label>Language</label>
								<multiselect
										v-model="selectLanguage.value"
										:options="selectLanguage.options"
										track-by="name"
										:show-labels="true"
										@input="changeLanguage($event)"
										:select-label="``"
										:deselect-label="``"
										:selectedLabel="``"
										label="name"
										:searchable="false"
										:placeholder="`Choose language`"
								>
								</multiselect>
							</div>
						</div>
					</div>
				</div>

			</div>
			<div class="header__content-mobile">
				<div class="header__menu-btn">
					<div class="header__menu-btn-i"></div>
				</div>
				<div class="header__logo">
					<router-link to="/home">
						<Kli1Logo/>
					</router-link>
				</div>
			</div>
		</div>
		<div style="position:
      fixed;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
			display: none;"
		>
			<router-link to="/">Home page</router-link>
			<br>
			<router-link to="/catalog">Catalog</router-link>
			<br>
			<!--<select name="" id="" @change="changeLanguage($event)">-->
				<!--<option value="en">-->
					<!--en-->
				<!--</option>-->
				<!--<option value="he">-->
					<!--he-->
				<!--</option>-->
			<!--</select>-->
		</div>
	</header>
</template>

<script>
	import Kli1Logo from '@/assets/img/kli1-logo.svg?inline';
	import CartLogo from '@/assets/img/ico/cart-ico.svg?inline';
	import ProfileIco from '@/assets/img/ico/profile-ico.svg?inline';
	import RedArrowDown from '@/assets/img/ico/red-arrow-down.svg?inline';
	import Btn from "../UI/Btn";
	import Multiselect from 'vue-multiselect'
	// import { mixin as clickaway } from 'vue-clickaway';

	export default {
		name: "Header",
		components: {
			Kli1Logo,
			CartLogo,
			ProfileIco,
			RedArrowDown,
			Btn,
			Multiselect
		},

		// mixins: [ clickaway ],

		data: function () {
			return {
				lang: '',
				btnName: {
					'publishsProject': "message.publishsProject"
				},
				homePage: '',

				selectCountry: {
					value: {
						name: 'Ukraine', ico: '../image/ico/flag-ua.png'
					},
					options: [
						{name: 'Ukraine', ico: '../image/ico/flag-ua.png'},
						{name: 'Ukraine', ico: '../image/ico/flag-ua.png'}
					]
				},

				selectLanguage: {
					value: null,
					options: [
						{name: 'English', language: 'en'},
						{name: 'עִברִית', language: 'he'},
					]
				},
				showLang: false,
				nowLang: '',
			}
		},

		mounted() {
			this.lang = this.langClass(this.$store.getters.getLang);
			this.selectLanguage.value = this.selectLanguage.options.find(option => option.language === this._i18n.locale);
			this.nowLang = this._i18n.locale;
		},

		methods: {
			changeLanguage(event) {
				this._i18n.locale = event.language;
				this.$store.commit('setLang', event.language);
				this.lang = this.langClass(event.language);
				this.nowLang = this._i18n.locale;
				// this._i18n.locale = event.target.value;
				// this.$store.commit('setLang', event.target.value);
				// this.lang = this.langClass(event.target.value);
			},

			// hideLang(){
				// console.log(1111);
				// if(this.showLang === true) {
				// 	this.showLang = false;
				// }
			// },

			langClass(lang) {
				if (lang === 'he') {
					return 'rtl'
				} else {
					return 'ltr'
				}
			},

			test() {
				console.log(1);
			},

			homePageHideElement() {
				if (this.$route.path == "/" || this.$route.path == "/home") {
					this.homePage = true;
					return true;
				} else {
					this.homePage = false;
					return false;
				}
			}
		}

	}

</script>

<style lang="scss">
	.header {
		position: relative;
		z-index: 5;

		&__inner {
			padding: 0 15px;
		}

		&__content {
			display: flex;
			padding-top: 24px;
		}

		&__logo {
			margin-right: 45px;
		}

		&__nav {
			display: flex;
			margin-top: 8px;
			height: 32px;
		}

		&__nav-item {
			margin: 0 35px;
		}

		&__nav-link {
			font-size: 16px;
			line-height: 30px;
			color: #141414;
			padding-bottom: 4px;
			padding-left: 4px;
			padding-right: 4px;
			border-bottom: 2px solid transparent;
			transition: .3s;

			&:hover {
				border-color: #D23D20;
			}
		}

		&__interactive {
			display: flex;
			margin-left: auto;
			margin-top: 8px;
			height: 32px;
		}

		&__profile {
			margin: 0 20px;
		}

		&__profile-link {
			display: flex;
			align-items: center;
			color: white;
			font-size: 16px;
			text-align: right;
			transition: .3s;
		}

		&__profile-link:hover &__profile-txt {
			text-decoration: underline;
		}

		&__profile-count {
			background: #D23D20;
			width: 28px;
			height: 28px;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			border-radius: 50%;
			color: white;
			font-size: 14px;
			margin-right: 8px;
			line-height: initial;
		}

		&__profile-ico {
			margin-left: 10px;

			svg {

				path {
					fill: #ffffff;
				}
			}
		}

		&__profile-link:hover &__profile-ico {
			svg {

				path {
					fill: #D23D20;
				}
			}
		}

		&__cart {
			margin: 0 20px;
		}

		&__cart-link {
			display: flex;
			align-items: center;
			color: white;
			font-size: 16px;
			text-align: right;
		}

		&__cart-link:hover &__cart-txt {
			text-decoration: underline;
		}

		&__cart-count {
			background: #D23D20;
			width: 28px;
			height: 28px;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			border-radius: 50%;
			color: white;
			font-size: 14px;
			margin-right: 8px;
			line-height: initial;
		}

		&__cart-ico {
			margin-left: 10px;

			svg {

				path {
					fill: #ffffff;
				}
			}
		}

		&__cart-link:hover &__cart-ico {
			svg {

				path {
					fill: #D23D20;
				}
			}
		}

		&__lang {
			margin-left: 30px;
			position: relative;
		}

		&__lang-link {
			display: flex;
			align-items: center;
			color: #ffffff;
			min-height: 32px;
			cursor: pointer;
		}

		&__lang-flag {
			margin-right: 9px;
		}

		&__lang-arrow {
			margin-left: 7px;
			position: relative;
			top: -2px;
		}

		&__lang-dropdown{
			position: absolute;
			top: 70px;
			right: 0;
			width: 300px;
			background: #FFFFFF;
			box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
			border-radius: 6px;
			padding: 20px;
			transition: .3s;
			opacity: 0;
			visibility: hidden;
			z-index: -1;

			&.show{
				z-index: 1;
				visibility: visible;
				opacity: 1;
			}
		}

		&__lang-dropdown-row{
			margin-bottom: 15px;
		}

		&__lang-dropdown-row label{
			font-size: 14px;
			line-height: 17px;
			color: #525252;
			margin-bottom: 8px;
			display: block;
		}

		.multiselect__single img{
			margin-right: 9px;
		}

		.multiselect__option img{
			margin-right: 9px;
		}


	}


	.rtl {
		.header {
			&__content {
				flex-direction: row-reverse;
			}

			&__logo {
				margin-right: 0;
				margin-left: 45px;
			}

			&__interactive {
				margin-right: auto;
				margin-left: 0;
				flex-direction: row-reverse;
			}

			&__profile-link,
			&__cart-link {
				flex-direction: row-reverse;
			}

			&__profile-ico,
			&__cart-ico {
				margin-left: 0;
				margin-right: 10px;
			}

			&__cart-ico {
				transform: scale(-1, 1);
			}

			&__profile-count,
			&__cart-count {
				margin-right: 0;
				margin-left: 8px;
			}

			&__lang-dropdown{
				left: 0;
				right: auto;
			}

		}
	}

	@media(max-width: 992px){
		.header__logo{
			margin-right: 20px;
		}

		.header__nav-item{
			margin: 0 15px;
		}

		.header__profile,
		.header__cart{
			margin: 0 10px;
		}

		.header__lang{
			margin-left: 15px;
		}
	}

	.header__content-mobile{
		display: none;
	}

	@media(max-width: 768px){
		.header__content{
			display: none;
		}

		.header__content-mobile{
			display: flex;
		}
	}

</style>
