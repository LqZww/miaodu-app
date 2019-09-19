<template>
	<view class="book">

		<view class="header">
			<text>妙读</text>
			<view class="iconfont icon-search"></view>
		</view>

		<swiper next-margin="88upx" previous-margin="50upx">
			<swiper-item v-for="(item,index) in readR">
				<!-- style="background-image: url('../../static/img/share_cover_11.jpg');" -->
				<view class="main" @click="test" v-bind:style="{backgroundImage: 'url(' + img + ')'}">
					<text class="fs-45">{{item.titone}}</text>
					<text class="fs-45">{{item.tittwo}}</text>
					<text class="fs-26">{{item.bookname}}</text>
					<text class="fs-24">{{item.author}}</text>

					<view class="read">
						<text class="iconfont icon-listen"></text>
						<view class="once fs-24">马上畅读</view>
					</view>
				</view>
			</swiper-item>
		</swiper>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: require('../../static/img/dpcq.jpg'),
				'readR': {}
			}
		},
		onLoad() {
			var that = this
			uni.request({
				url: 'http://localhost:8081/admin/list',
				method: 'GET',
				success: function(res) {
					console.log(res)
					that.readR = res.data
				}
			})
		},
		methods: {
			test(e) {
				uni.navigateTo({
					url: './detail'
				});
			}
		}
	}
</script>

<style>
	swiper {
		height: 980upx;
		width: 100%;
	}

	.header {
		font-size: 62upx;
		margin: 100upx 36upx 50upx 36upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.iconfont {
		font-size: 60upx;
	}

	.main {
		color: #fff;
		background-size: cover;
		width: 95%;
		border: 1upx solid grey;
		border-radius: 20upx;
		height: 920upx;
		margin: 45upx 30upx 30upx 10upx;
		position: relative;
	}

	.main>text {
		margin: 24upx 0 0 38upx;
		display: flex;
	}

	.main>text:nth-child(1) {
		margin-top: 65upx;
	}

	.main>text:nth-child(2) {
		margin-top: 20upx;
	}

	.main>text:nth-child(3) {
		margin-top: 44upx;
	}

	.main>text:nth-child(4) {
		margin-top: 28upx;
	}

	.read {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 0 42upx 0 0;
		position: absolute;
		right: 0;
		bottom: 42upx;
	}

	.icon-listen {
		border: 16upx solid #000000;
		border-radius: 50%;
		font-size: 40upx;
		width: 40upx;
		height: 40upx;
		margin-right: 25upx;
		color: #fff;
		background: #000000;
	}

	.once {
		border: 20upx solid #050504;
		border-radius: 35upx;
		background: #050504;
		color: #fff;
	}
</style>
