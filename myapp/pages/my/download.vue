<template>
	<view class="main">
		<view class="download">
			<image src="../../static/img/img_wm_empty.png" mode=""></image>
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
	.download {
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
	.download text{
		color: #a1aabd;
	}
</style>
