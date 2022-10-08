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
          <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
            <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
          </ul>
        </el-card>
      </el-main>
      <el-footer class="footer">
        <div style="text-align: center">
          底部的内容
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      retrun() {

      }
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
.footer{
  background: aqua;
}

</style>