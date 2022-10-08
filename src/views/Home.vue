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
          <el-card v-for="i in list" :key="i" class="infinite-list-item">
            <el-row>
              <p>123456789</p>
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


export default {
  name: "Home",
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    }
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
  background: aqua;
  position: fixed;
  bottom: 0;
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