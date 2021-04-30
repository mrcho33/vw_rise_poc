<template>
  <div class="costsa-container">
    <el-card class="filter-card">
      <!-- 路径 -->
      <div slot="header" class="clearfix">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/main' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/pricea' }">Price Analysis</el-breadcrumb-item>
          <el-breadcrumb-item>Cost Structure Analysis</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 操作 -->
      <el-form ref="form" :model="form" label-width="200px">
        <!-- 输入 -->
        <el-form-item label="Part Number" >
        <el-input v-model="form.materuakGroup" placeholder="4CG815077" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="Quotation" >
        <el-input v-model="form.materuakGroup" placeholder="Q20200601-1" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item>
        </el-form-item>
      </el-form>
      <!-- 表格 -->
      <el-table
    :data="tableData"
    style="width: 100%;margin-bottom: 20px;"
    row-key="id"
    border
    stripe
    default-expand-all
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column
      prop="mName"
      label="">
    </el-table-column>
    <el-table-column
      prop="history"
      label="History Structure">
    </el-table-column>
    <el-table-column
      label="Supplier A">
      <el-table-column
      prop="amount"
      label="Amount">
      </el-table-column>
      <el-table-column
      prop="ratio"
      label="Ratio">
      </el-table-column>
    </el-table-column>
  </el-table>
      <!-- 按钮 -->
      <div class="btn">
        <el-button type="primary">Import HL Report</el-button>
        <el-button @click="goBack">Back</el-button>
      </div>
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
        id: 1,
        mName: 'Material Cost',
        history: '68.6%',
        amount: '97.44',
        ratio: '64.8%',
        children: [{
          id: 11,
          mName: 'SVW Specified Components',
          history: '59.1%',
          amount: '76.60',
          ratio: '● 50.9%'
        }, {
          id: 12,
          mName: 'Supplier Selected Components',
          history: '9.5%',
          amount: '20.84',
          ratio: '● 13.9%'
        }]
      }, {
        id: 2,
        mName: 'Process Cost',
        history: '15.0%',
        amount: '22.10',
        ratio: '14.7%',
        children: [{
          id: 21,
          mName: 'Machine Cost',
          history: '11.2%',
          amount: '15.93',
          ratio: '10.6%'
        }, {
          id: 22,
          mName: 'Labor Cost',
          history: '3.8%',
          amount: '6.17',
          ratio: '4.1%'
        }]
      }, {
        id: 3,
        mName: 'Scrap',
        history: '3.4%',
        amount: '6.50',
        ratio: '● 4.3%'
      }, {
        id: 4,
        mName: 'General Overhead',
        history: '10.5%',
        amount: '20.50',
        ratio: '● 13.6%'
      }]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    goNext () {
      this.$router.push('/categorization')
    },
    goBack () {
      this.$router.go(-1)
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
