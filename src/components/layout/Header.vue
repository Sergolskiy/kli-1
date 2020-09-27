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
						<div href="#" class="header__lang-link">
              <span class="header__lang-flag">
                <img src="../../assets/img/ico/flag-ua.png" alt="flag">
              </span>
							{{ $t("message.ukraine") }} / EN
							<span class="header__lang-arrow">
                <RedArrowDown/>
              </span>
						</div>
					</div>
				</div>

			</div>
		</div>
		<div style="position:
      fixed;
      top: 50%;
      left: 0;
      transform: translateY(-50%)"
		>
			<router-link to="/">Home page</router-link>
			<br>
			<router-link to="/catalog">Catalog</router-link>
			<br>
			<select name="" id="" @change="changeLanguage($event)">
				<option value="en">
					en
				</option>
				<option value="he">
					he
				</option>
			</select>
		</div>
	</header>
</template>

<script>
	import Kli1Logo from '@/assets/img/kli1-logo.svg?inline';
	import CartLogo from '@/assets/img/ico/cart-ico.svg?inline';
	import ProfileIco from '@/assets/img/ico/profile-ico.svg?inline';
	import RedArrowDown from '@/assets/img/ico/red-arrow-down.svg?inline';
	import Btn from "../UI/Btn";

	export default {
		name: "Header",
		components: {
			Kli1Logo,
			CartLogo,
			ProfileIco,
			RedArrowDown,
			Btn
		},

		data: function () {
			return {
				lang: '',
				btnName: {
					'publishsProject': "message.publishsProject"
				},
				homePage: '',
			}
		},

		mounted() {
			this.lang = this.langClass(this.$store.getters.getLang);
		},

		methods: {
			changeLanguage(event) {
				this._i18n.locale = event.target.value;
				this.$store.commit('setLang', event.target.value);
				this.lang = this.langClass(event.target.value);
			},

			langClass(lang) {
				if (lang === 'he') {
					return 'rtl'
				} else {
					return 'ltr'
				}
			},

			test() {
				console.log(123);
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
		}

		&__lang-link {
			display: flex;
			align-items: center;
			color: #ffffff;
			min-height: 32px;
		}

		&__lang-flag {
			margin-right: 9px;
		}

		&__lang-arrow {
			margin-left: 7px;
			position: relative;
			top: -2px;
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

		}
	}

</style>
