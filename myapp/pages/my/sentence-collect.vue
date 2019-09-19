<template>
	<view>
		<view class="collect">
			<image src="../../static/img/img_empty_collect.png" mode=""></image>
			<text class="fs-26">收藏暂无内容</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.collect {
		display: flex;
		height: 100vh;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	image {
		width: 480upx;
		height: 480upx;
	}
	.collect text{
		color: #a1aabd;
	}
</style>
