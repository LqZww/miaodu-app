<template>
	<view>
		<view class="list">
			<view class="list-one">
				<text>商业经营</text>
				<text>历史文化</text>
				<text>励志成功</text>
				<text>社会心理</text>
				<text>传记纪实</text>
			</view>
			<view class="list-two">
				<text>科学新知</text>
				<text>艺术生活</text>
				<text>养育教育</text>
				<text>名家经典</text>
				<text>外国文学</text>
			</view>
		</view>

		<view class="book-list" @click="test">
			<view class="book" v-for="(item,index) in bookT">
				<image v-bind:src="item.bookimg" mode=""></image>
				<view class="intro">
					<text>{{item.bookname}}</text>
					<text>{{item.author}}</text>
					<text>{{item.titone}},{{item.tittwo}}</text>
				</view>
			</view>
		</view>

	</view>
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

		}
	}
</script>

<style>
	.list {
		font-size: 30upx;
		color: #a1aabd;
	}

	.list-one {
		display: flex;
		justify-content: space-evenly;
		margin: 10upx 0;
	}

	.list-one>text,
	.list-two>text {
		/* border: 1upx solid red; */
	}

	.list-two {
		display: flex;
		justify-content: space-evenly;
		margin: 20upx 0;
	}
.book-list{
	margin: 0 20upx;
}

	.book {
		margin-top: 30upx;
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
