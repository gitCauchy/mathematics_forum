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
          <div>
            <el-row>第一行内容</el-row>
            <el-row>第二行内容</el-row>
            <el-row>第三行内容</el-row>
          </div>
        </el-card>
      </el-main>
      <el-footer>
        <el-card class="box-card"></el-card>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home"
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


</style>