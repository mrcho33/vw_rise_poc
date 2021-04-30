<template>
  <div class="costsa-container">
    <el-card class="filter-card">
      <!-- 路径 -->
      <div slot="header" class="clearfix">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/main' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item>Price Analysis</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 操作 -->
      <el-form ref="form" :model="form" label-width="200px">
        <!-- 输入 -->
        <el-form-item label="Carline">
        <el-input v-model="form.materuakGroup" placeholder="Please input"></el-input>
        </el-form-item>
        <!-- 输入 -->
        <el-form-item label="Project">
        <el-input v-model="form.materuakGroup" placeholder="Please input"></el-input>
        </el-form-item>
        <!-- 输入 -->
        <el-form-item label="Part Number">
        <el-input v-model="form.materuakGroup" placeholder="Please input"></el-input>
        </el-form-item>
      </el-form>
      <el-form ref="form" :model="form" label-width="200px">
        <!-- 输入 -->
        <el-form-item label="Supplier">
        <el-input v-model="form.materuakGroup" placeholder="Please input"></el-input>
        </el-form-item>
        <!-- 下拉复选 -->
        <el-form-item label="Quotation">
          <el-select
          v-model="value"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="select supplier">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Search</el-button>
          <el-button>Reset</el-button>
        </el-form-item>
      </el-form>
      <!-- 表格 -->
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        border>
      <el-table-column
        prop="carline"
        label="Carline"
        >
      </el-table-column>
      <el-table-column
        prop="project"
        label="Project"
        >
      </el-table-column>
      <el-table-column
      prop="partNum"
      label="Part Number"
      >
      </el-table-column>
      <el-table-column
      prop="operation"
      label="Operation"
      >
        <template>
          <el-button type="text" size="small" @click="view">View</el-button>
        </template>
      </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="10"
      layout="prev, pager, next"
      :total="100">
    </el-pagination>
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
      form: {
        materuakGroup: '',
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      options: [{
        value: 'Supplier A',
        label: 'Supplier A'
      }, {
        value: 'Supplier B',
        label: 'Supplier B'
      }, {
        value: 'Supplier C',
        label: 'Supplier C'
      }],
      value: [],
      tableData: [{
        carline: 'C-SUV',
        project: 'MQB',
        partNum: '4CG815077',
        operation: ''
      }, {
        carline: 'C-SUV',
        project: 'MQB',
        partNum: '4CG819063',
        operation: ''
      }, {
        carline: 'C-SUV',
        project: 'MQB',
        partNum: '4CG813277',
        operation: ''
      }, {
        carline: 'C-SUV',
        project: 'MQB',
        partNum: '4CG815072',
        operation: ''
      }, {
        carline: 'C-SUV',
        project: 'MQB',
        partNum: '4CG815017',
        operation: ''
      }]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    view () {
      this.$router.push('/costsa')
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
.el-pagination{
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
</style>
