<template>
  <div class="main-container">
    <div class="main-row">
    <el-card class="filter-card">
      <h3>Inquiry</h3>
      <div class="mainIco">
        <i class="el-icon-s-order"></i>
      </div>
      <ul class="nominationlist">
        <li v-for="item in inquiryList" :key="item.message">
          <p>{{item.message}}</p>
        </li>
      </ul>
    </el-card>
    <el-card class="filter-card">
      <h3>Nomination</h3>
      <div class="mainIco">
        <i class="el-icon-s-check"></i>
      </div>
      <ul class="nominationlist">
        <li v-for="item in nominationList" :key="item.message">
          <p>{{item.message}}</p>
        </li>
      </ul>
    </el-card>
    <el-card class="filter-card">
      <h3>Contract</h3>
      <div class="mainIco">
        <i class="el-icon-s-comment"></i>
      </div>
      <ul class="nominationlist">
        <li v-for="item in contractList" :key="item.message">
          <p>{{item.message}}</p>
        </li>
      </ul>
    </el-card>
    <el-card class="filter-card">
      <h3>Notice</h3>
      <ul class="noticelist">
        <li v-for="item in listObj" :key="item.message">
          <a href="javascript:;">{{item.message}}</a><p>{{item.date}}</p>
        </li>
      </ul>
    </el-card>
    </div>
    <div class="main-row-sec">
      <el-card class="filter-card main-calendar">
        <h3>Calendar</h3>
        <el-calendar v-model="value">
        </el-calendar>
        </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      listObj: [
        {
          message: 'Received suppliers quotation',
          date: '2020-08-04 09:00'
        },
        {
          message: 'Received Supplier A Quotation',
          date: '2020-07-31 08:00'
        },
        {
          message: 'Review 2020 supplier performance under Category: Innenraumdekorteile',
          date: '2020-07-27 19:02'
        }
      ],
      nominationList: [
        {
          message: 'Expected to expire: 30'
        },
        {
          message: 'Expired-unapproved: 1'
        },
        {
          message: 'Approval pending: 12'
        },
        {
          message: 'Approved: 20'
        }
      ],
      inquiryList: [
        {
          message: 'Expected to expire: 5'
        },
        {
          message: 'Expired: 2'
        },
        {
          message: 'To be scheduled: 6'
        },
        {
          message: 'Scheduled: 20'
        }
      ],
      contractList: [
        {
          message: 'Expected to expire: 5'
        },
        {
          message: 'Expired-unapproved: 7'
        },
        {
          message: 'Approval pending: 20'
        },
        {
          message: 'Approved: 8'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.main-container{
  width: 100%;
}
.main-row{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.main-calendar{
  width: 80%;
}
.main-row-sec{
display: flex;
  width: 100%;
  float: left;
}
.filter-card{
    width: 100%;
    margin-right: 20px;
}
.filter-card:last-child{
    margin-right: 0px;
}
.mainIco{
  width: 80px;
  height: 80px;
  background-color:#EBEEF5;
  border-radius: 40px;
  float: left;
  margin-top: 20px;
}
.mainIco i{
  font-size: 30px;
  float: left;
  margin-left: 25px;
  margin-top: 25px;
  color: #606266;
}
.noticelist{
  list-style: none;
  float: left;
}
.noticelist a{
  font-size: 14px;
  color: #606266;
}
.noticelist p{
  font-size: 12px;
  color: #909399;
}
.nominationlist{
  list-style: none;
  height: 100%;
  float: left;
}
.nominationlist p{
  width: 100%;
  font-size: 14px;
  color: #606266;
  float: left;
}
</style>
