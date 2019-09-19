<template>
	<view>
		<view class="booklist-collect">
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
	.booklist-collect {
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

	.booklist-collect text {
		color: #a1aabd;
	}
</style>
