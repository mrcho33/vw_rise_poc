<template>
  <div class="yearly-container">
    <el-card class="filter-card">
      <!-- 路径 -->
      <div slot="header" class="clearfix">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/main' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/negotiation' }">Negotiation Recommendation</el-breadcrumb-item>
          <el-breadcrumb-item>Bidding Analysis</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 操作 -->
      <el-form ref="form" :model="form" label-width="200px">
        <!-- 下拉 -->
        <el-form-item label="Part Number">
          <el-select
          v-model="valueNum"
          placeholder="select supplier">
            <el-option
            v-for="item in optionsNum"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- 下拉 -->
        <el-form-item label="Supplier">
          <el-select
          v-model="value"
          placeholder="select supplier">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- 输入 -->
        <el-form-item label="Quotation">
          <el-input v-model="input" placeholder="Please input"></el-input>
        </el-form-item>
      </el-form>
      <!-- 表格 -->

      <!-- 按钮 -->
      <div class="btn">
        <el-button type="primary" @click="save" >Save</el-button>
        <el-button @click="ImportD">Import</el-button>
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
      input: 'Q20200601-2',
      form: {
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
      optionsNum: [{
        value: '4CG815077',
        label: '4CG815077'
      }, {
        value: '4CG819063',
        label: '4CG819063'
      }],
      value: [],
      valueNum: [],
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
</style>
