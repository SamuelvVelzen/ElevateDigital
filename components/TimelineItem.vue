<template>
	<b-container class="mb-5">
		<b-row>
			<b-col offset="2" offset-md="1" cols="10" md="11" class="p-0">
				<h5 class="font-weight-bold mb-0">Titel</h5>
			</b-col>
			<b-col md="12" class="position-relative p-0">
				<span class="circle-outer rounded-circle">
					<span class="circle-inner rounded-circle"></span>
				</span>
				<span class="line"></span>
			</b-col>
			<b-col offset="2" offset-md="1" cols="10" md="11" class="p-0">
				lorem ipsum lalallalalla lorem ipsum lalallalalla lorem ipsum
				lalallalalla lorem ipsum lalallalalla lorem ipsum lalallalalla
				lorem ipsum lalallalalla lorem ipsum lalallalalla lorem ipsum
				lalallalalla
			</b-col>
		</b-row>
	</b-container>
</template>

<style lang="scss" scoped>
.circle- {
	&outer {
		z-index: 100;
		display: block;
		position: relative;

		border: 2px solid var(--dark);
		background-color: var(--light);

		height: 26px;
		width: 26px;
	}

	&inner {
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		background-color: var(--dark);

		height: 13px;
		width: 13px;
	}
}

.line {
	display: block;
	position: absolute;
	width: calc(100% - 20px);
	margin-right: 5px;
	top: 50%;
	transform: translateY(-50%);

	height: 2px;
	background-color: var(--dark);
}
</style>
