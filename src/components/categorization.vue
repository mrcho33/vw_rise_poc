<template>
  <div class="yearly-container">
    <el-card class="filter-card">
      <!-- 路径 -->
      <div slot="header" class="clearfix">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/main' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/yearlyreview' }">Yearly Review</el-breadcrumb-item>
          <el-breadcrumb-item>Categorization Strategy</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 操作 -->
      <el-form ref="form" :model="form" label-width="200px">
        <!-- 输入 -->
        <el-form-item label="Material Group">
        <el-input v-model="form.materuakGroup">{{form.materuakGroup}}</el-input>
        </el-form-item>
        <!-- 下拉复选 -->
        <el-form-item label="Supplier">
          <el-input
          v-model="input"
          :disabled="true">
          </el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item>
        </el-form-item>
      </el-form>
      <!-- 表格 -->
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        border>
      <el-table-column
        prop="factor"
        label="Key Factor"
        width="280px">
      </el-table-column>
      <el-table-column
        prop="rating"
        label="Rating"
        width="280px">
      </el-table-column>
      <el-table-column
        prop="strategy"
        label="Strategy - Supplier A">
        <template>
          <el-input
          type="textarea"
          autosize
          placeholder="Please input"
          v-model="textarea1">
          </el-input>
        </template>
      </el-table-column>
      </el-table>
      <!-- 按钮 -->
        <el-button type="primary" @click="goNext" class="btn">Action Plan</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      textarea1: '',
      input: 'Supplier A',
      form: {
        materuakGroup: 'Innenraumdekorteile',
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      value: [],
      tableData: [{
        factor: 'Innovative Collaboration',
        rating: 'H',
        strategy: ''
      },
      {
        factor: 'Quality Control',
        rating: 'M',
        strategy: ''
      },
      {
        factor: 'Cost Competitiveness',
        rating: 'L',
        strategy: ''
      },
      {
        factor: 'Delivery Stability',
        rating: 'M',
        strategy: ''
      }
      ]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    goNext () {
      this.$router.push('/plan')
    }
  }
}
</script>

<style scoped lang="less">
.el-input{
  width: 225px;
}
.el-form{
  display: flex;
  justify-content: space-between;
}
.btn{
  float: right;
  margin-top: 20px;
  margin-bottom: 20px;
}
.el-table__header{
  background-color: #f5f7fa;
}
</style>
