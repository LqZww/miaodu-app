<template>
	<view>
		<swiper>
			<swiper-item v-for="(item,index) in readS">
				<view class="main">
					<scroll-view scroll-y="true">
						<view class="title">{{item.title}}</view>
						<view class="info">{{item.words}}</view>
					</scroll-view>
				</view>
			</swiper-item>

		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				'readS': {}
			}
		},
		onLoad(option) {
			console.log(option)
			var that = this
			uni.request({
				url: 'http://localhost:8081/admin/list',
				method: 'GET',
				success: function(res) {
					console.log(res)
					that.readS = res.data
				}
			})
		},
		methods: {

		}
	}
</script>

<style>
	swiper {
		height: 3000upx;
	}

	.main {
		word-wrap: break-word;
		margin: 200upx 60upx 0 40upx;
	}

	.title {
		font-size: 55upx;
		margin-bottom: 80upx;
	}

	.info {
		line-height: 70upx;
	}
</style>
