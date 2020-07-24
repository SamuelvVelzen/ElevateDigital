<template>
	<nav
		class="fixed w-full flex justify-between bg-primary items-center py-3 px-4 sm:px-16 md:px-20 lg:px-16 lg:max-w-3/4 lg:mx-auto z-50 opacity-95 flex-wrap lg:left-1/8"
		:class="([open ? 'open' : null, closing ? 'closing' : null])"
	>
		<span class="text-2xl font-bold">Samuel.</span>
		<label
			class="menu-icon sm:hidden cursor-pointer ml-auto pt-px-10 pb-px-10"
			@click="mobileNav"
		>
			<span class="menu-icon-line block"></span>
		</label>

		<div
			class="navLinks sm:block sm:w-auto sm:transition-none border-t-2 border-dark sm:border-t-0"
			:class="[
				open ? 'w-full flex justify-between' : '',
				closing ? 'w-full flex justify-between' : '',
			]"
		>
			<nuxt-link to="#" class="sm:ml-auto">Test</nuxt-link>
			<nuxt-link to="#" class="ml-4">Test</nuxt-link>
			<nuxt-link to="#" class="ml-4">Test</nuxt-link>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			open: true,
			closing: false,
		};
	},

	mounted() {
		if (window.innerWidth < 640) {
			this.open = false;
		}

		window.addEventListener("resize", this.checkMobileNav);
	},
	destroyed() {
		window.removeEventListener("resize", this.checkMobileNav);
	},
	methods: {
		mobileNav() {
			if (this.open) {
				this.open = false;

				this.closing = true;

				setTimeout(() => {
					this.closing = false;
				}, 500);
			} else {
				this.open = true;
			}
		},
		checkMobileNav() {
			if (window.innerWidth > 640) {
				this.open = true;
			} else {
				this.open = false;
			}
		},
	},
};
</script>
