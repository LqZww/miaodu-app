<template>
	<view class="content">
		<view class="head clearfix">
			<text @tap="handleDetail(item)">跳过登录</text>
		</view>

		<view class="main">
			<text>妙读</text>
			<text>一刻钟读世界万千</text>
		</view>



		<view class="enter1">
			<text>淘宝登录</text>
			<text>微信登录</text>
		</view>


		<view class="enter2">
			<text>支付宝登录</text>
			<text style="color: grey;">|</text>
			<text>微博登录</text>
		</view>

		<view class="footer">
			<view class="iconfont icon-dui"></view>
			<text>已阅读并同意《妙读软件用户协议》及《妙读用户隐私协议》
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			handleDetail(item) {
				uni.switchTab({
					url: '/pages/read/read'
				});
			}
		}
	}
</script>

<style>
	.clearfix::after {
		content: '';
		display: block;
		clear: both;
	}

	.content {
		color: #ffffff;
		background-image: url('../../static/img/img_read_finish_bg_night.png');
		background-size: cover;
		height: 100vh;
	}


	.head>text {
		color: #757b84;
		margin: 45upx 38upx;
		font-size: 24upx;
		float: right;
	}

	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.main text:nth-child(1) {
		font-size: 90upx;
		margin-top: 70upx;
		margin-bottom: 45upx;
	}

	.main text:nth-child(2) {
		font-size: 35upx;
		margin-bottom: 45upx;
	}

	.enter1 {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 56upx 0;
	}

	.enter1>text {
		border: 1upx solid #797f84;
		height: 100upx;
		width: 500upx;
		margin-bottom: 56upx;
		border-radius: 10upx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #303841;
		opacity: 0.7;
	}

	.enter2 {
		display: flex;
		justify-content: center;

	}

	.enter2>text {
		height: 40upx;
		margin: 0 40upx;
		font-size: 22upx;
	}

	.footer {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		margin: 190upx 0;
	}

	.footer>text {
		font-size: 18upx;
	}

	.footer .iconfont {
		color: grey;
		margin-bottom: -5upx;
	}
</style>
