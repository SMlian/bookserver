<template>
  <div class="block__list--div">
    <a-list item-layout="horizontal" :data-source="data" :pagination="true">
    <!-- <a-list-item slot="renderItem" slot-scope="item"> -->
    <a-list-item v-for="(item,index) in 5" :key="index">
      <a-row class="row">
        <a-col class="flex__col" >
          <div class="row__left--div">
            <img src="http://static.zongheng.com/upload/cover/f8/72/f87275042dd99b3849b5f36dc3b2b603.jpeg" style="width:100%"/>
          </div>
          <div class="row__right--div">
            <p>书名：《前端大佬如何脱坑》</p>
            <div class="opera">
              <a-button type="primary">查看</a-button>
            </div>
          </div>
        </a-col>
      </a-row>
    </a-list-item>
  </a-list>
  </div>
</template>
<script>
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
export default {
  data() {
    return {
      data,
    };
  },
  methods: {
  }
};
</script>
<style lang="less" scope>
  .block__list--div{
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    background: #fff;
  }
  .row{
    width: 100%;
    display: flex;
  }
  .flex__col{
    display: flex;
    // flex-direction: column;  
    width: 100%;
    // background: red;
    padding-bottom:20px;
    .row__right--div{
      height: 50px;
      line-height: 50px;
      padding-left: 10px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      p{
        padding:0;
        margin: 0;
        height: 50px;
        line-height: 50px;
      }
      .opera{
        text-align: right
      }
    }
  }
  .row__left--div{
    width:40px;
    height: 50px;
    // background: red;
    text-align: center;
    line-height: 40px;
  }
</style>
