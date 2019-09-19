<template>
	<view class="detail">


		<!-- <swiper>
			<swiper-item v-for="(item,index) in dt"> -->
				<view class="main" v-for="(item,index) in dt">
					<scroll-view scroll-y="true">
						<view class="title">
							<text>{{item.bookname}}</text>
							<text>{{item.author}}</text>
						</view>

						<view class="scrap">
							<text>{{item.titone}}，{{item.tittwo}}</text>
							<text>{{item.info}}</text>
						</view>
					</scroll-view>
				</view>
<!-- 			</swiper-item>

		</swiper> -->


		<view class="footer">

			<view class="download">
				<view class="iconfont icon-download"></view>
				<text>下载</text>
			</view>

			<view class="collect">
				<view class="iconfont icon-collect"></view>
				<text>收藏</text>
			</view>


			<button>畅听</button>
			<button @click="test">阅读</button>

		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				'dt': {}
			}
		},
		onLoad(option) {
			console.log(option.id)
			var that = this
			uni.request({
				url: 'http://localhost:8081/admin/list',
				method: 'GET',
				success: function(res) {
					console.log(res)
					that.dt = res.data
					
				}
			})
		},
		methods: {
			test(e) {
				uni.navigateTo({
					url: './readstory'
				});
			}
			
		}
	}
</script>

<style>
	swiper {
		height: 1100upx;
	}

	.iconfont {
		font-size: 42upx;
	}

	.detail {
		margin: 0 35upx;
		font: 28upx/1.5;

	}

	.title,
	.scrap {
		display: flex;
		flex-direction: column;
	}

	.title text:nth-child(1) {
		margin-top: 85upx;
		margin-bottom: 50upx;
		font-size: 55upx;
	}

	.scrap text:nth-child(1) {
		font-weight: bold;
		margin-top: 80upx;
		margin-bottom: 42upx;
	}


	.footer {
		width: 100%;
		border: 1upx solid #fff;
		box-shadow: 1upx 1upx 1upx grey;
		position: fixed;
		bottom: 0;
		display: flex;
		left: -2upx;
		background: #ffffff;
	}

	.download,
	.collect {
		font-size: 20upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-left: 45upx;
		margin-right: 5upx;
		margin-top: 20upx;
	}

	.download>view,
	.collect>view {
		margin: 5upx 0;
	}

	.footer>button {
		width: 218upx;
		margin: 20upx 0 20upx 40upx;
	}
</style>
