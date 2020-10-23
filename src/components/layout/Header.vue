<template>
	<header class="header"  v-bind:class="{ 'home-page' : homePage === true, 'default-page' : homePage === false}">
		<div class="header__inner" v-bind:class="{ 'site-container': homePage }">
			<div class="header__content">
				<div class="header__logo">
					<router-link to="/">
						<Kli1Logo/>
					</router-link>
				</div>
				<div class="header__nav">
					<div class="header__nav-item">
						<router-link :to="$store.getters.getUrl + 'catalog'" class="header__nav-link">
							{{ $t("message.workers") }}
						</router-link>
					</div>
					<div class="header__nav-item">
						<router-link :to="$store.getters.getUrl + 'projects'" class="header__nav-link">
							{{ $t("message.projects") }}
						</router-link>
					</div>
					<div class="header__nav-item" v-show="!homePageHideElement()">
						<Btn class="header__nav-btn"
								 v-bind:btnName="btnName.publishsProject"
								 v-on:click.native="showCategoryBlock()"
								 id="headerCategory"

						/>
						<div class="header__nav-dropdown"
								 v-show="showCategory"
								 v-on-clickaway="hideCategody"
						>
							<div class="header__nav-dropdown-content">
								<div class="header__nav-dropdown-column">
									<a href="#" class="header__nav-dropdown-title">
										Category 1
									</a>
									<div class="header__nav-dropdown-list">
										<router-link class="header__nav-dropdown-link"
																 :to=" $store.getters.getUrl + `catalog`">
											Polygraphy
										</router-link>
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
								<router-link :to="$store.getters.getUrl + `categories`"
														 class="header__nav-dropdown-all-i">
									See all categories
								</router-link>
							</div>
						</div>
					</div>
				</div>
				<div class="header__search" v-show="!homePageHideElement()">
					<Search searchPlaseholder="Start typing your search query"/>
				</div>
				<div class="header__interactive">
					<div class="header__profile" v-bind:class="{open: isOpenProfileDropdown}" v-if="ifAuth()">
						<a href="#" class="header__profile-link">
							<span class="header__profile-count">9+</span>
							<span class="header__profile-txt">{{ $t("message.myProfile") }}</span>
							<div class="header__profile-ico">
								<ProfileIco/>
							</div>
							<span class="header__profile-link-arrow" @click="toggleProfileDropdown()">
                <RedArrowDown/>
              </span>
						</a>

						<div class="header__profile-dropdown">
							<div class="header__profile-dropdown-item">
								<a href="#" class="header__profile-dropdown-link" @click="toggleProfileDropdown">
									Freelancer profile
								</a>
								<a href="#" class="header__profile-dropdown-link" @click="toggleProfileDropdown">
									Customer profile
								</a>
								<a href="#" class="header__profile-dropdown-link" @click="logOut">
									Log out
								</a>
							</div>
						</div>
					</div>
					<div class="header__profile header__profile--unauthorized" v-if="!ifAuth()">
						<a href="#" class="header__profile-link" @click="singIn">
							<span class="header__profile-txt">{{ $t("message.singIn") }}</span>
							<div class="header__profile-ico">
								<ProfileIco/>
							</div>
						</a>
					</div>



					<Auth @close="closeAuthModal" v-if="isModalAuth" />



					<div class="header__cart">
						<div class="header__cart-link"
								 v-on:click="showCarthandler"
						>
							<!--<span class="header__cart-count">2</span>-->
							<span class="header__cart-txt">{{ $t("message.cart") }}</span>
							<span class="header__cart-ico">
								<CartLogo/>
							</span>
						</div>
					</div>
					<div class="header__lang">
						<div class="header__lang-link" v-on:click="showLang = !showLang">
              <span class="header__lang-flag">
                <img :src="$store.getters.getUrl + '/image/ico/flag-ua.png'" alt="flag">
              </span>
							{{ $t("message.ukraine") }} / {{ nowLang}}
							<span class="header__lang-arrow">
                <RedArrowDown/>
              </span>
						</div>
						<div class="header__lang-dropdown"
								 id="header-lang-dropdown"
								 v-bind:class="{ 'show' : showLang === true}"
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
												 :src="$store.getters.getUrl + props.option.ico"
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
												 :src=" $store.getters.getUrl + props.option.ico"
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


			<div class="header-mobile" v-bind:class="{show : mobileMenuFlag}">
				<div class="header-mobile__content">
					<div class="header-mobile__menu-btn"
							 v-on:click="showMobileMenu"
					>
						<div class="header-mobile__menu-btn-i" id="menuBtn"></div>
					</div>
					<div class="header-mobile__logo">
						<router-link to="/home">
							<img  v-bind:src="$store.getters.getUrl + 'image/menu/kli1-logo.svg'" alt="logo" width="36">
						</router-link>
					</div>
					<div class="header-mobile__search">
						<div class="header-mobile__search-ico">
							<SearchIco/>
						</div>
					</div>
					<div class="header-mobile__logo-cart">
						<span class="header-mobile__cart-count">2</span>
						<span class="header-mobile__cart-ico">
								<CartLogo/>
						</span>
					</div>
					<Btn class="header-mobile__nav-btn"
							 v-bind:btnName="btnName.publishsProject"
							 v-on:click.native="test"
					/>

					<div class="header__search" v-show="!homePageHideElement()">
						<Search/>
					</div>

					<div class="header-mobile__menu">
						<div class="header-mobile__menu-head">
							<div class="header-mobile__menu-head-col">
								<div class="header-mobile__menu-head-btn">
									<div class="header-mobile__menu-head-btn-i"
											 id="menuBtnClose"
											 v-on:click="hideMobileMenu"
									></div>
								</div>
								<div class="header-mobile__menu-head-title">
									Menu
								</div>
							</div>
							<div class="header-mobile__menu-head-col">
								<div class="header__lang">
									<div class="header__lang-link" v-on:click="showLang = !showLang">
								<span class="header__lang-flag">
									<img :src="$store.getters.getUrl + 'image/ico/flag-ua.png'" alt="flag">
								</span>
										{{ $t("message.ukraine") }} / {{ nowLang}}
										<span class="header__lang-arrow">
									<RedArrowDown/>
								</span>
									</div>
									<div class="header__lang-dropdown"
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
															 :src="$store.getters.getUrl + props.option.ico"
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
															 :src="$store.getters.getUrl + props.option.ico"
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



						<div class="header-mobile__menu-content">
							<div class="header-mobile__menu-content-inner">
								<div class="header-mobile__menu-item"
										 v-for="(item, index) in mobileMenu"
										 :key="item[index]"
								>
									<div class="header-mobile__menu-item-ico">
										<img v-bind:src="$store.getters.getUrl + item.ico" alt="ico">
									</div>
									<div class="header-mobile__menu-item-txt">
										{{ item.name }}
									</div>
									<div class="header-mobile__menu-item-count"
											v-if="item.count.length > 0 "
									>
										{{ item.count }}
									</div>
								</div>
								<div class="header-mobile__menu-link-wrap">
									<span class="header-mobile__menu-link">
										<span>></span> Workers
									</span>
									<span class="header-mobile__menu-link">
										<span>></span> Projects
									</span>
									<span class="header-mobile__menu-link">
										<span>></span> Privacy Policy
									</span>
									<span class="header-mobile__menu-link">
										<span>></span> Terms of Use
									</span>
									<span class="header-mobile__menu-link">
										<span>></span> Contact Form
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="header-cart">
			<Cart/>
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
	import SearchIco from '@/assets/img/ico/search-ico.svg?inline';
	import Search from "../UI/Search";
	import { mixin as clickaway } from 'vue-clickaway';
	import Cart from "../Cart";
	import Auth from '../Popups/Auth.vue'

	export default {
		name: "Header",
		components: {
			Search,
			Kli1Logo,
			CartLogo,
			ProfileIco,
			RedArrowDown,
			Btn,
			Multiselect,
			SearchIco,
			Auth,
			Cart
		},

		mixins: [ clickaway ],

		data: function () {
			return {
				lang: '',
				homePage: '',
				showLang: false,
				nowLang: '',
				mobileMenuFlag: false,
				showCategory: false,

				isModalAuth: false,
				isOpenProfileDropdown: false,


				btnName: {
					'publishsProject': "message.publishsProject"
				},
				selectCountry: {
					value: {
						name: 'Ukraine', ico: 'image/ico/flag-ua.png'
					},
					options: [
						{name: 'Ukraine', ico: 'image/ico/flag-ua.png'},
						{name: 'Ukraine', ico: 'image/ico/flag-ua.png'}
					]
				},
				selectLanguage: {
					value: null,
					options: [
						{name: 'English', language: 'en'},
						{name: 'עִברִית', language: 'he'},
					]
				},
				mobileMenu:[
					{
						ico: 'image/menu/messagesIco.svg',
						name: 'Messages',
						count: '4'
					},
					{
						ico: 'image/menu/requestsForExecutionIco.svg',
						name: 'Requests for execution',
						count: ''
					},
					{
						ico: 'image/menu/projectsInWorkIco.svg',
						name: 'Projects in work',
						count: '2'
					},
					{
						ico: 'image/menu/projectsInWorkIco.svg',
						name: 'Completed projects',
						count: ''
					},
					{
						ico: 'image/menu/reviewsIco.svg',
						name: 'Reviews',
						count: ''
					},
					{
						ico: 'image/menu/portfolioIco.svg',
						name: 'Portfolio',
						count: ''
					},
					{
						ico: 'image/menu/resumeIco.svg',
						name: 'Resume',
						count: ''
					},
					{
						ico: 'image/menu/profileManagementIco.svg',
						name: 'Profile management',
						count: ''
					},
				]
			}
		},

		mounted() {
			this.lang = this.langClass(this.$store.getters.getLang);
			this.selectLanguage.value = this.selectLanguage.options.find(option => option.language === this._i18n.locale);
			this.nowLang = this._i18n.locale;


			document.addEventListener('click', (e) => {
				if(!e.target.classList.contains('header__profile-dropdown') && e.target.closest(".header__profile-dropdown") === null && !e.target.closest('.header__profile-link-arrow')){
					this.isOpenProfileDropdown = false;
					console.log(24);
				}
			})
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

			ifAuth() {
				return this.$store.getters.getAuth
			},

			singIn() {
				this.isModalAuth = !this.isModalAuth
			},

			logOut() {
				this.$store.dispatch('logOut')
				this.toggleProfileDropdown();
			},

			toggleProfileDropdown() {
				this.isOpenProfileDropdown = !this.isOpenProfileDropdown
			},

			closeAuthModal() {
				this.isModalAuth = !this.isModalAuth
			},

			// hideLang(){
				// console.log(1111);
				// if(this.showLang === true) {
				// 	this.showLang = false;
				// }
			// },

			showMobileMenu(){
				this.mobileMenuFlag = true;
			},

			hideMobileMenu(){
				this.mobileMenuFlag = false;
			},

			langClass(lang) {
				if (lang === 'he') {
					return 'rtl'
				} else {
					return 'ltr'
				}
			},

			showCategoryBlock() {
				this.showCategory = true;
			},

			hideCategody(){
				if (event.target.id === 'headerCategory'){
					return;
				} else {
					this.showCategory = false;
				}
			},

			homePageHideElement() {
				if (this.$route.path ===  '/' || this.$route.path === this.$store.getters.getUrl || this.$route.path === (this.$store.getters.getUrl + "/home")) {
					this.homePage = true;
					return true;
				} else {
					this.homePage = false;
					return false;
				}
			},

			showCarthandler(){
				this.$store.commit('setCart', true);
			},
		}

	}

</script>

<style lang="scss">
	.header {
		position: relative;
		z-index: 5;

		&__inner {
			padding: 0 15px;
      height: 92px;
		}

		&__content {
			display: flex;
			align-items: center;
			height: 100%;
		}

		&__logo {
			margin-right: 45px;
		}

		&__nav{
			display: flex;
			/*margin-top: 8px;*/
			height: 32px;
      align-items: center;
		}

		&__nav-item {
			margin: 0 35px;
      position: relative;
			white-space: nowrap;
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
			/*margin-top: 8px;*/
			height: 32px;
		}

		&__profile {
			position: relative;
			margin: 0 20px;
			padding-right: 30px;


			&.open{
				.header__profile-dropdown{
					opacity: 1;
					z-index: 10;
					visibility: visible;
				}

				.header__profile-link-arrow{
					opacity: 1;
					transform: rotate(180deg);
				}
			}
		}

		&__profile-link {
			display: flex;
			align-items: center;
			/*color: white;*/
			font-size: 16px;
			text-align: right;
			transition: .3s;
      color: #141414;
			white-space: nowrap;
		}

		&__profile-link:hover &__profile-txt {
			text-decoration: underline;
		}

		&__profile-dropdown{
			position: absolute;
			top: 100%;
			margin-top: 20px;
			background: #FFFFFF;
			border: 2px solid #FFFFFF;
			box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
			border-radius: 6px;
			width: 190px;
			left: -10px;

			opacity: 0;
			z-index: -2;
			visibility: hidden;
			transition: 0.3s;
		}

		&__profile-dropdown-item{
			display: flex;
			flex-direction: column;
			width: 100%;
			border-radius: 6px;
			overflow: hidden;
		}

		&__profile-dropdown-link{
			font-size: 16px;
			line-height: 40px;
			padding: 0 15px;
			color: #141414;
			transition: 0.3s;

			&:hover{
				background: #F0F0F0;
			}
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
					/*fill: #ffffff;*/
          fill: #141414;
				}
			}
		}

		&__profile-link:hover {
			.header__profile-link-arrow{
				opacity: 1;
			}

			.header__profile-ico {
				svg {

					path {
						fill: #D23D20;
					}
				}
			}
		}


		&__profile-link-arrow{
			margin-left: 15px;
			opacity: 0;
			transition: 0.3s;
		}

		&__cart {
			margin: 0 20px;
		}

		&__cart-link {
			display: flex;
			align-items: center;
			/*color: white;*/
			font-size: 16px;
			text-align: right;
      color: #141414;
			white-space: nowrap;
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
					/*fill: #ffffff;*/
          fill: #141414;
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
			white-space: nowrap;
		}

		&__lang-link {
			display: flex;
			align-items: center;
			/*color: #ffffff;*/
			min-height: 32px;
			cursor: pointer;
      fill: #141414;
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

    &__nav-btn{
      /*max-width: 154px;*/
      width: 100%;
      height: 46px;
      padding: 0 20px;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__nav-dropdown{
      position: absolute;
      top: 79px;
      left: 0;
			background: #FFFFFF;
			box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
			border-radius: 6px;
			display: flex;
			flex-direction: column;
			padding: 20px;
    }

		&__nav-dropdown-content{
			display: flex;
		}

		&__nav-dropdown-column{
			width: 200px;
		}

		&__nav-dropdown-title{
			font-weight: 500;
			font-size: 20px;
			line-height: 26px;
			color: #141414;
		}

		&__nav-dropdown-list{
			display: flex;
			flex-direction: column;
			padding-left: 11px;
			padding-top: 8px;
			padding-bottom: 15px;
		}

		&__nav-dropdown-link{
			font-size: 16px;
			line-height: 28px;
			color: #525252;

			&:hover{
				text-decoration-line: underline;
				color: #141414;
			}
		}

		&__nav-dropdown-all{
			display: flex;
			justify-content: flex-end;
		}

		&__nav-dropdown-all-i{
			font-weight: 500;
			font-size: 20px;
			line-height: 26px;
			text-decoration-line: underline;
			color: #5353FF;
			transition: .3s;

			&:hover{
				color: #D23D20;
			}
		}


    &__search{
      max-width: 640px;
      width: 100%;
      margin-top: -1px;

			.ui-search-select{
				display: flex;
			}

			.ui-search-hints__item{
				font-size: 16px;
				line-height: 30px;
			}

      .ui-search-content{
        height: 58px;
        background: #FFFFFF;
        border: 6px solid rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        box-shadow: none;
      }

      .ui-search-btn{
				min-width: 60px;
      }

      .ui-search-input{
        font-size: 16px;
        line-height: 24px;
      }
    }

	}

  .home-page{
    .header__profile-txt,
    .header__cart-txt{
      color: white;
    }

    .header__profile-ico,
    .header__cart-ico{

      svg path{
        fill: white;
      }
    }

    .header__lang-link{
      color: #ffffff
    }

		.header__nav,
		.header__interactive{
			margin-top: 8px
		}
  }
  .header:not(.home-page){
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
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

			&__lang{
				margin-left: 0;
			}

			&__lang-dropdown{
				left: 0;
				right: auto;
			}

		}
	}


	.header-mobile{
		&__content{
			display: none;
			height: 70px;
			align-items: center;
			/*background: #FFFFFF;*/
			/*box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);*/
		}
		&__menu-btn{
			margin-right: 15px;
		}
		&__menu-btn-i{
			width: 26px;
			height: 26px;
			background-image: url("../../assets/img/ico/menu/burger-ico.svg");
			background-position: center;
			background-size: contain;
			background-repeat: no-repeat;
			position: relative;

			&:before{
				content: '';
				position: absolute;
				left: -15px;
				top: -15px;
				width: calc(100% + 30px);
				height: calc(100% + 30px);
			}
		}
		&__logo{
			width: 36px;
			height: 55px;
			margin-right: 30px;

			svg{
				width: 100%;
			}
		}
		&__search{
			margin-right: 25px;
		}
		&__search-ico{

			svg path{
				fill: #141414;
			}
		}
		&__logo-cart{
			position: relative;
		}
		&__cart-count{
			position: absolute;
			background: #D23D20;
			width: 22px;
			height: 22px;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			border-radius: 50%;
			color: white;
			font-size: 14px;
			line-height: initial;
			left: 7px;
			top: -12px;
		}
		&__cart-ico{
			position: relative;
			z-index: 2;
		}
		&__nav-btn{
			font-size: 12px;
			padding-left: 15px;
			padding-right: 15px;
			margin-left: auto;
			height: 40px;
		}
		&__menu{
			position: fixed;
			left: -100%;
			top: 0;
			width: 100%;
			height: 100%;
			background: white;
			z-index: 15;
			transition: .3s;

			.header__lang-dropdown{
				top: 40px;
			}
		}
		&.show &__menu{
			left: 0;
		}
		&__menu-head{
			display: flex;
			height: 62px;
			justify-content: space-between;
			align-items: center;
			padding: 0 15px;
			border-bottom: 1px solid #F0F0F0;
		}
		&__menu-head-col{
			display: flex;
			align-items: center;
		}
		&__menu-head-btn{
			margin-right: 20px;
		}
		&__menu-head-btn-i{
			width: 28px;
			height: 28px;
			background-image: url("../../assets/img/ico/menu/cross-red-ico.svg");
			background-position: center;
			background-size: contain;
			background-repeat: no-repeat;
			position: relative;

			&:before{
				content: '';
				position: absolute;
				left: -15px;
				top: -15px;
				width: calc(100% + 30px);
				height: calc(100% + 30px);
			}
		}
		&__menu-head-title{
			font-weight: 500;
			font-size: 24px;
			line-height: 26px;
			display: flex;
			align-items: center;
			color: #141414;
		}
		&__menu-head-col{

			.header__lang-link{
				color: #141414;
			}
		}
		&__menu-content{
			position: relative;
		}
		&__menu-content-inner{
			height: calc(100vh - 70px);
			overflow: scroll;
			position: relative;
		}
		&__menu-item{
			height: 70px;
			display: flex;
			align-items: center;
			padding-left: 15px;
			padding-right: 15px;
			position: relative;
			border-bottom: 1px solid #F0F0F0;
		}
		&__menu-item-ico{

		}
		&__menu-item-txt{
			padding-right: 35px;
			width: 100%;
			padding-left: 20px;
		}
		&__menu-item-count{
			position: absolute;
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
			line-height: initial;
			right: 15px;
			top: 50%;
			transform: translateY(-50%);
		}
		&__menu-link-wrap{
			display: flex;
			flex-direction: column;
			margin-top: 15px;
		}
		&__menu-link{
			height: 45px;
			display: flex;
			width: 100%;
			padding-left: 15px;
			padding-right: 15px;
			align-items: center;


			span{
				font-size: 16px;
				color: #D23D20;
				transform: scaleX(0.8);
				display: inline-flex;
				line-height: 32px;
				margin-right: 5px;
			}
		}
	}

	@media(max-width: 1600px){
		.header__nav-item {
			margin: 0 15px;
		}

		.header__logo{
			margin-right: 20px;
		}

		.rtl .header__logo{
			margin-left: 20px;
		}
	}

	@media(max-width: 1300px){
		.default-page .header__cart,
		.default-page .header__profile{
			margin: 0 10px;
		}
		.default-page .header__cart-link,
		.default-page .header__profile-link,
		.default-page .header__lang{
			font-size: 14px;
		}
		.default-page .header__nav-item {
			margin: 0 5px;
		}
		.default-page .header__nav-link,
		.default-page .header__nav-btn{
			font-size: 14px;
		}
	}


	@media(max-width: 992px){
		.header__content {
			/*padding-top: 15px;*/
			display: none;
		}

		.home-page .header__content {
			display: flex;
		}

		.header-mobile{
			display: flex;
			align-items: center;
			height: 100%;
		}

		.home-page .header-mobile{
			display: none;
		}

		.header-mobile__content{
			display: flex;
			width: 100%;
		}

		.header__inner{
			height: 92px;
			background: #FFFFFF;
			box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
		}

		.home-page .header__inner{
			background: transparent;
			box-shadow: none;
		}

		.header__logo{
			margin-right: 20px;

			svg{
				width: 43px;
				height: 66px;
			}
		}

		.header__nav-item{
			margin: 0 15px;
		}

		.header__profile,
		.header__cart{
			margin: 0 12px;
		}

		.header__lang{
			margin-left: 15px;
		}

		.header__nav-link,
		.header__lang-link,
		.header__cart-link,
		.header__profile-link{
			font-size: 14px;
		}

		.header__lang-flag img{
			width: 22px;
			height: 16px;
		}

		.header__lang-arrow{
			top: 0px;
		}

		.rtl .header__lang-dropdown{
			right: auto;
			left: 0;
		}

	}

	@media (min-width: 701px) and (max-width: 992px) {
		.default-page .header-mobile__content .header-mobile__search{
			display: none;
		}

		.default-page .header-mobile__content .header-mobile__nav-btn{
			margin-left: 0;
			order: 3;
			white-space: nowrap;
		}

		.default-page .header-mobile__content .header__search{
			margin-left: 30px;
			margin-right: 30px;
			order: 5;
		}

		.default-page .header-mobile__content .header-mobile__logo-cart{
			margin-left: auto;
			order: 6;
		}
	}


	@media(max-width: 700px){
		.home-page .header__inner{
			height: 70px;
			background: #FFFFFF;
			box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
		}

		.home-page .header__content{
			display: none;
		}

		.home-page .header-mobile{
			display: flex;
		}

		.rtl .header__lang-dropdown{
			right: 0;
			left: auto;
		}

		.rtl .home-top__body {
			flex-direction: column !important;
			align-items: flex-start !important;
		}

		.rtl .home-top__caption,
		.rtl .home-top__title{
			text-align: center !important;
		}

		.rtl .footer__logo{
			justify-content: flex-end;
			display: flex;
		}

		.rtl .footer__bottom-item{
			text-align: center!important;
		}

		.rtl .footer__bottom-item:before{
			display: none;
		}

		.default-page .header-mobile__content .header__search{
			display: none;
		}
	}

	@media(max-width: 350px){
		.header-mobile__nav-btn {
			font-size: 12px;
			padding-left: 4px;
			padding-right: 4px;
		}
	}

</style>
