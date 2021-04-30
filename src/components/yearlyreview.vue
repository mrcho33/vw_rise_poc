<template>
  <div class="yearly-container">
    <el-card class="filter-card">
      <!-- 路径 -->
      <div slot="header" class="clearfix">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/main' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item>Yearly Review</el-breadcrumb-item>
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
          <el-button type="primary" @click="onSubmit">Generate</el-button>
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
        prop="factor"
        label="Key Factor (Weighted)"
        width="180">
      </el-table-column>
      <el-table-column
        prop="innovative"
        label="Innovative Collaboratio (20%)"
        width="280">
      </el-table-column>
      <el-table-column
      prop="control"
      label="Quality Controln (25%)"
      width="280">
      </el-table-column>
      <el-table-column
      prop="cost"
      label="Cost Competitiveness (30%)"
      width="280">
      </el-table-column>
      <el-table-column
        prop="delivery"
        label="Delivery Stabilityr (25%)"
        width="280">
      </el-table-column>
      <el-table-column
        prop="total"
        label="Total (100%)">
      </el-table-column>
      </el-table>
      <!-- 按钮 -->
        <el-button type="primary" @click="goNext" class="btn">Material Group Strategy</el-button>
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
        factor: 'Average Performance',
        innovative: '76.7',
        control: '75',
        cost: '73.3',
        delivery: '75',
        total: '74.83'
      }, {
        factor: 'Supplier A',
        innovative: '75',
        control: '70',
        cost: '65',
        delivery: '70',
        total: '69.5'
      }, {
        factor: 'Supplier B',
        innovative: '80',
        control: '75',
        cost: '70',
        delivery: '75',
        total: '74.5'
      }, {
        factor: 'Supplier C',
        innovative: '75',
        control: '80',
        cost: '85',
        delivery: '80',
        total: '80.5'
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
