<template>
  <div class="yearly-container">
    <el-card class="filter-card">
      <!-- 路径 -->
      <div slot="header" class="clearfix">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/main' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/yearlyreview' }">Yearly Review</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/categorization' }">Categorization Strategy</el-breadcrumb-item>
          <el-breadcrumb-item>Action Plan</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 操作 -->
      <el-form ref="form" :model="form" label-width="200px">
        <!-- 输入 -->
        <el-form-item label="Material Group">
        <el-input v-model="form.materuakGroup" :disabled="true">{{form.materuakGroup}}</el-input>
        </el-form-item>
        <!-- 下拉复选 -->
        <el-form-item label="">
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Add</el-button>
        </el-form-item>
      </el-form>
      <!-- 表格 -->
      <el-table :data="tableData" style="width: 100%" stripe>
        <el-table-column type="selection" width="35">
        </el-table-column>
        <el-table-column prop="factor" label="Key Factor">
          <template>
            <el-select v-model="value" placeholder="Please select">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="task" label="Task Name">
          <el-input v-model="nameInput" placeholder="Please input"></el-input>
        </el-table-column>
        <el-table-column prop="description" label="Description">
          <el-input type="textarea" autosize placeholder="Please input" v-model="textarea1" maxlength="20" show-word-limit></el-input>
        </el-table-column>
        <el-table-column prop="owner" label="Owner">
          <el-input v-model="ownerInput" placeholder="Please input"></el-input>
        </el-table-column>
        <el-table-column label="Timing">
          <el-table-column prop="form" label="Form" width="240">
            <el-date-picker v-model="timeFrom" type="date" placeholder="Select date">
            </el-date-picker>
          </el-table-column>
          <el-table-column prop="to" label="To" width="240">
            <el-date-picker v-model="timeTo" type="date" placeholder="Select date">
            </el-date-picker>
          </el-table-column>
        </el-table-column>
        <el-table-column prop="action" label="Action" width="100%">
          <template>
            <el-button type="text" size="small">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 按钮 -->
        <el-button type="primary" @click="goNext" class="btn">Generate</el-button>
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
      timeFrom: '',
      timeTo: '',
      nameInput: '',
      form: {
        materuakGroup: 'Innenraumdekorteile'
      },
      options: [{
        value: 'val1',
        label: 'Innovative Collaboration '
      }, {
        value: 'val2',
        label: 'Quality Control'
      }, {
        value: 'val3',
        label: 'Cost Competitiveness'
      }, {
        value: 'val4',
        label: 'Delivery Stability'
      }],
      value: [],
      tableData: [{
        factor: 'Average Performance',
        innovative: '76.7',
        control: '75',
        cost: '73.3',
        delivery: '75',
        total: '74.83'
      }]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    goNext () {
      // this.$router.push('/categorization')
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
