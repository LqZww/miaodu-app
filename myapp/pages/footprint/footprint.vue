<template>
	<view class="cont">
		<view class="title">
			足迹
		</view>
		<view class="info">
			<view class="tit">
				今日阅读
				<text>170</text>
				分钟
			</view>
			<view class="tips-cont">
				<text>我的积分220</text>
				<text>连续阅读55天</text>
				<text>积分加成2.5</text>
			</view>
			<view class="img">
				<image src="../../static/img/info_bg.png" mode=""></image>
			</view>

		</view>

		<view class="list-tit">
			<text class="fs-36">阅读记录</text>
			<!-- <view class="fs-26">
				<text class="iconfont icon-liebiao"></text>
				筛选排序
			</view> -->

			<view class="fs-26">
				<view class="selectBox_list" v-show="isShowSelect">
					<view class="selectBox_listLi" v-for="(item, index) in dataList" :key="index" @click.stop="select(item, index)">{{item.value}}</view>
				</view>
				<view class="right-date" @click="arrowDown">
					<view v-show="!isShowSelect">
						<text class="iconfont icon-liebiao"></text>
						筛选排序
					</view>
					<view v-show="isShowSelect">
						<text class="iconfont icon-close"></text>
						收起选项
					</view>
				</view>
			</view>




		</view>


		<view class="book-list" @click="test">
			<view class="book" v-for="(item,index) in footD">
				<image v-bind:src="item.bookimg" mode=""></image>
				<view class="intro">
					<text class="fs-26 color-black">{{item.bookname}}</text>
					<text class="fs-20 color-lightblue">{{item.author}}</text>
					<view>
						<view class="iconread">
							<text class="iconfont icon-dui color-blue" v-if="item.progress==100"></text>
							<text class="fs-20 color-lightblue" v-if="item.progress==100">已读完</text>
						</view>
						<text class="fs-20 color-lightblue" v-if="item.progress!=100">已读{{item.progress}}%</text>
					</view>
				</view>
			</view>
		</view>









	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShowSelect: false,
				dataList: [{
						key: 0,
						value: "全部显示"
					},
					{
						key: 1,
						value: "只看在读"
					},
					{
						key: 2,
						value: "只看读完"
					}
				],


				'footD':{}
			}
		},
		onLoad() {
			var that = this
			uni.request({
				url: 'http://localhost:8081/admin/list',
				method: 'GET',
				success: function(res) {
					console.log(res)
					that.footD = res.data
					console.log(that.footD)
				}
			})
		},
		methods:  {
			arrowDown() {
				this.isShowSelect = !this.isShowSelect;
			},
			select(item, index) {
				this.isShowSelect = false;
				this.unitName = item.value;
			},
			test(e) {
				uni.navigateTo({
					url: '../read/detail'
				});
			}
		}
	}
</script>

<style>
	.selectBox_list {
		color: #9fa8bd;
		transform: translate(-100px, 100px);
		display: inline-flex;
		height: 440upx;
		padding-top: -180upx;
		margin: -80upx -85upx -80upx -80upx;
	}

	.selectBox_listLi {
		padding-right: -20upx;
		width: 140upx;
	}




	.cont {
		padding: 0 30upx;
	}

	.title {
		font-size: 58upx;
		/* line-height: 180upx; */
		margin: 100upx 36upx 50upx 0;
	}

	.info {
		height: 350upx;
		border: 1upx solid #e5e5e5;
		border-radius: 8upx;
	}

	.info image {
		width: 444upx;
		height: 124upx;
	}

	.img {
		height: 146upx;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	.tit {
		text-align: center;
		font-size: 38upx;
		margin-top: 70upx;
		margin-bottom: 40upx;
		font-weight: 600;
	}

	.tit>text {
		color: #5c8ae6;
		font-size: 46upx;
	}

	.tit>text::after {
		content: '';
		margin-right: 18upx;
	}

	.tit>text::before {
		content: '';
		margin-left: 18upx;
	}

	.tips-cont {
		display: flex;
		justify-content: center;
		color: #425072;
		font-size: 24upx;
	}

	.tips-cont text {
		position: relative;
		margin: 0 14upx;
	}

	.tips-cont text::after {
		content: '';
		width: 8upx;
		height: 8upx;
		border-radius: 50%;
		background: #e2e3e6;
		margin: 14upx;
		position: absolute;
		top: 50%;
		right: -30upx;
		margin-top: -4upx;
	}

	.tips-cont text:last-child::after {
		height: 0;
	}

	.list-tit {
		border-top: 6upx solid #f5f6f7;
		line-height: 130upx;
		display: flex;
		justify-content: space-between;
		margin-top: 60upx;
	}

	.book {
		margin-bottom: 60upx;
		display: flex;

	}

	.book image {
		width: 230upx;
		height: 150upx;
		margin-right: 34upx;
	}

	.book .intro {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.fs-26 {
		display: flex;
		justify-content: center;
	}

	.list-tit .iconfont {
		margin-right: 15upx;
	}

	.book .intro .icon-dui {
		margin-right: 10upx;
	}

	.iconread {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
