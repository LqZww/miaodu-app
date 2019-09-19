<template>
	<view class="my">
		<view class="info">
			<view class="name">
				<text>Hi !</text>
				<text>Yooye</text>
			</view>
			<image src="../../static/img/icon_account_head.png" mode=""></image>
		</view>

		<view class="intro">
			<text>积分商城</text>
			<text class="iconfont icon-right"></text>
		</view>
		<view class="intro" @click="download">
			<text>下载中心</text>
			<text class="iconfont icon-right"></text>
		</view>
		<view class="intro" @click="booksCollect">
			<text>书籍收藏</text>
			<text class="iconfont icon-right"></text>
		</view>
		<view class="intro" @click="booklistCollect">
			<text>书单收藏</text>
			<text class="iconfont icon-right"></text>
		</view>
		<view class="intro" @click="sentenceCollect">
			<text>金句收藏</text>
			<text class="iconfont icon-right"></text>
		</view>
		<view class="intro" @click="commend">
			<text>推荐好友</text>
			<text class="iconfont icon-right"></text>
		</view>
		<view class="intro">
			<text>设置</text>
			<text class="iconfont icon-right"></text>
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
			download(e) {
				uni.navigateTo({
					url: './download'
				});
			},
			commend(e) {
				uni.navigateTo({
					url: './commend'
				});
			},
			sentenceCollect(e) {
				uni.navigateTo({
					url: './sentence-collect'
				});
			},
			booksCollect(e) {
				uni.navigateTo({
					url: './books-collect'
				});
			},
			booklistCollect(e) {
				uni.navigateTo({
					url: './booklist-collect'
				});
			}
		}
	}
</script>

<style>
	.my {
		font-family: '黑宋';
		margin: auto 42upx;
		position: relative;
	}

	.info {
		padding: 95upx 0 45upx 0;
		display: flex;
		align-items: center;
	}

	.info text:nth-child(1) {
		font-weight: 500;
		font-size: 46upx;
	}

	.info text:nth-child(2) {
		font-weight: 500;
		font-size: 36upx;
	}

	.name {
		width: 100px;
		display: flex;
		flex-direction: column;
	}

	image {
		width: 142upx;
		height: 142upx;
		border-radius: 50%;
		position: absolute;
		right: 0;
	}

	.intro {
		border-bottom: 1upx solid #f5f6f7;
		padding: 62upx 0 62upx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.iconfont {
		color: #8d98af;
	}
</style>
