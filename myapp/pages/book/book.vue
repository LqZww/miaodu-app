<template>
	<view>
		<view class="header">
			<text>书馆</text>
			<view class="iconfont icon-search"></view>
		</view>

		<swiper autoplay="true" circular="true">
			<swiper-item>
				<image src="../../static/img/share_cover_2.jpg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/img/share_cover_3.jpg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/img/share_cover_4.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>

		<view class="main">
			<view class="sort" @click="allbook">
				<text>全部分类</text>
				<text>发现你要的书</text>
			</view>

			<view class="list" @click="list">
				<text>书单中心</text>
				<text>全新书单已升级</text>
			</view>
		</view>

		<view class="footer">
			<view class="list-tit">
				<text class="fs-36">热门推荐</text>
			</view>

			<view class="book-list">
				<view class="book" v-for="(item,index) in bookT" @tap="handleDetail(item.id)">
					<image v-bind:src="item.bookimg" mode=""></image>
					<view class="intro">
						<text>{{item.bookname}}</text>
						<text>{{item.author}}</text>
						<text>{{item.titone}},{{item.tittwo}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
	<!-- @tap="handleDetail(item,id)" -->
	<!-- handleDetail(id){
		uni.navigateTo({
			url:'booklist?id='+id
		})
	} -->
	
	<!-- onLoad(option){
		console.log(option)
	} -->
	
	
</template>

<script>
	export default {
		data() {
			return {
				'bookT': {}
			}
		},
		onLoad() {
			var that = this
			uni.request({
				url: 'http://localhost:8081/admin/list',
				method: 'GET',
				success: function(res) {
					console.log(res)
					that.bookT = res.data
				}
			})
		},
		methods: {
			// test(e) {
			// 	uni.navigateTo({
			// 		url: '../read/detail'
			// 	});
			// },
			handleDetail(id){
				uni.navigateTo({
					url:"../read/detail?id="+ id
				})
			},
			list(e) {
				uni.navigateTo({
					url: './booklist'
				});
			},
			allbook(e) {
				uni.navigateTo({
					url: './allbook'
				});
			}
		}
	}
</script>

<style>
	.header {
		font-size: 62upx;
		margin: 100upx 36upx 50upx 30upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.iconfont {
		font-size: 60upx;
	}

	swiper-item image {
		width: 100%;
	}

	.main {
		display: flex;
	}

	.sort,
	.list {
		width: 340upx;
		height: 120upx;
		display: flex;
		flex-direction: column;
		padding-left: 26upx;
		color: #FFFFFF;
	}

	.sort {
		background: #4db9d6;
		margin: 45upx 10upx 45upx 20upx;
	}

	.list {
		background: #e9b360;
		margin: 45upx 20upx 45upx 10upx;
	}

	.sort text:nth-child(1),
	.list text:nth-child(1) {
		font-size: 28upx;
		padding-top: 30upx;
		padding-bottom: 8upx;
	}

	.sort text:nth-child(2),
	.list text:nth-child(2) {
		font-size: 22upx;
	}

	.footer {
		margin: 0 25upx;
	}

	.list-tit {
		font-weight: bold;
		line-height: 130upx;
		display: flex;
		justify-content: space-between;
		margin-top: -10upx;
	}

	.book {
		margin-bottom: 60upx;
		display: flex;
	}

	.book image {
		width: 295upx;
		height: 185upx;
		margin-right: 34upx;
	}

	.book .intro {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.intro text {
		font-size: 22upx;
		width: 350upx;
		color: #8692ab;
	}

	.intro text:nth-child(1) {
		font-size: 28upx;
		color: #000000;
	}

	.intro text:nth-child(3) {
		font-size: 28upx;
	}
</style>
