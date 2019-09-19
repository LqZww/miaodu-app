<template>
	<view>
		<view class="book" v-for="(item,index) in bookData">
			<view class="title">
				<view>
					{{item.titone}}
				</view>
				<view>
					{{item.tittwo}}
				</view>
			</view>
			<view class="intro">
				<view>
					{{item.bookname}}
				</view>
				<view>
					{{item.bookname}}
				</view>
				<view>
					{{item.bookname}}
				</view>
			</view>
			<image src="../../static/img/booklist1.jpg" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				'bookData': []
			}
		},
		onLoad() {
			var that = this
			uni.request({
				url: 'http://localhost:8081/admin/list',
				method: 'GET',
				success: function(res) {
					console.log(res)
					that.bookData = res.data
				}
			})
		},
		methods: {

		}
	}
</script>

<style>
	.book {
		border: 1upx solid rgb(228, 228, 228);
		width: 93%;
		height: 25%;
		margin: 35upx auto;
		background: #fff;
		padding: 25upx 0 25upx 19upx;
		box-shadow: 0 0 10upx 1upx rgba(0, 0, 0, 0.1);
		position: relative;
	}

	.title {
		width: 60%;
		/* border: 1upx solid red; */
		color: #282929;
		font-size: 35upx;
		margin: 45upx 312upx 35upx 25upx;
	}

	.intro {
		/* border: 1upx solid red; */
		width: 60%;
		font-size: 25upx;
		color: #828ea9;
		margin: 0 0 24upx 24upx;
	}
	image{
		width: 250upx;
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;
	}
</style>
