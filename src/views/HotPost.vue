<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-card class="box-card">
          <el-row>
            <el-col id="search_input_col">
              <el-input placeholder="Search"/>
            </el-col>
            <el-col id="search_button_col">
              <el-button>搜索</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-header>
      <el-main>
        <el-card class="box-card">
          <!--          <div v-infinite-scroll="load" class="infinite-list" style="overflow: auto">-->
          <el-card v-for="post in hotPostList" :key="post" class="infinite-list-item">
            <el-row>
              <p>{{ post.author }}</p>
            </el-row>
            <el-row>
              <p>{{ post.content }}</p>
            </el-row>
            <el-row>
              <el-col>
                <el-icon>
                  <Edit style="width: 5em; height: 5em; margin-right: 8px"/>
                </el-icon>
              </el-col>
              <el-col>{{ post.like }}</el-col>
            </el-row>
          </el-card>
          <!--          </div>-->
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


import {getTop20HotPost} from "@/api/hot_post";

export default {
  name: "HotPost",
  data() {
    return {
      hotPostList: []
    }
  },
  methods: {
    getDataList() {
      getTop20HotPost().then(response => {
        this.hotPostList = response;
      })
    }
  },
  created() {
    this.getDataList();
  }
}
</script>
<style scoped>
#search_input_col {
  max-width: 50%;
}

#search_button_col {
  max-width: 50%;
}

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

</style>