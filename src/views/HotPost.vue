<template xmlns="http://www.w3.org/1999/html">
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-card class="box-card" id="header">
          <div>
            <span style="font-size: large">今日热榜 Top 20</span>
            <span style="float: right">{{ this.getTodayDate() }}</span>
          </div>
        </el-card>
      </el-header>
      <el-main>
        <el-card class="box-card">
          <el-card v-for="(post,index) in hotPostList" class="infinite-list-item"
                   style="margin-bottom: 20px"
                   id="body">
            <el-row>
              <p>{{ post.author }}</p>
            </el-row>
            <el-row>
              <p v-if="openArray[index]">{{ post.content.substr(0, 140) }}<a onclick=""> ...</a></p>
              <p v-else>{{ post.content }}</p>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <div style="float: left">
                  <el-tooltip content="点赞" placement="top">
                    <el-icon size="28px" style="cursor:pointer" @click="addLike(post.id)">
                      <Pointer style="width: 25px; height: 25px; margin-right: 4px"/>
                    </el-icon>
                  </el-tooltip>
                </div>
                <div style="float: left;">
                  {{ post.like }}
                </div>
              </el-col>
              <el-col :span="6">
                <div style="float: left">
                  <el-tooltip content="评论" placement="top">
                    <el-icon size="28px" style="cursor:pointer">
                      <ChatLineSquare style="width: 25px; height: 25px; margin-right: 4px"/>
                    </el-icon>
                  </el-tooltip>
                </div>
                <div style="float: left;">
                  {{ post.comments.length }}
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-card>
      </el-main>

      <el-footer class="footer">
        <div>
          底部的内容
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>

</script>
<script>


import {getTop20HotPost, addLike} from "@/api/hot_post";

export default {
  name: "HotPost",
  data() {
    return {
      hotPostList: [],
      openArray: new Array(20).fill(true),
    }
  },
  methods: {
    addLike(postId) {
      addLike(postId).then(

      )
    },
    getDataList() {
      getTop20HotPost().then(response => {
        this.hotPostList = response;
      })
    },
    getTodayDate() {
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth();
      let day = today.getDay();
      return year + " 年 " + month + " 月 " + day + " 日 ";
    }
  },
  created() {
    this.getDataList();
  },
  computed: {}
}
</script>
<style scoped>

.box-card {
  width: 60%;
  margin: auto;
}

.footer {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.infinite-list {
  height: 600px;
  padding: 0;
  margin: 0;
  /*list-style: none;*/
}

.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}

.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}

#header {
  background: url("../assets/hot_post/header_background.png");
}

#body {
  background: url("../assets/hot_post/body_background.png");
}

</style>