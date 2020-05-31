<template>
  <div class="block__book--div">
    <a-table :columns="columns" :data-source="data">
    <a slot="name" slot-scope="text">{{ text }}</a>
  </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true,
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 3 Lake Park',
    tags: ['cool', 'teacher'],
  }, {
    key: '4',
    name: 'Lou Jia',
    age: 12,
    address: 'Sidney No. 1 Lake Park, Sidney No. 4 Lake Park',
    tags: ['cool', 'teacher'],
  }, {
    key: '5',
    name: 'Skokn Bli',
    age: 18,
    address: 'Sidney No. 1 Lake Park, Sidney No. 5 Lake Park',
    tags: ['cool', 'teacher'],
  }, {
    key: '6',
    name: 'Mon Zila',
    age: 30,
    address: 'Sidney No. 1 Lake Park, Sidney No. 6 Lake Park',
    tags: ['cool', 'teacher'],
  }, {
    key: '7',
    name: 'Na Jaiy',
    age: 24,
    address: 'Sidney No. 1 Lake Park, Sidney No. 7 Lake Park',
    tags: ['cool', 'teacher'],
  }, {
    key: '8',
    name: 'Coa Lj',
    age: 29,
    address: 'Sidney No. 1 Lake Park, Sidney No. 8 Lake Park',
    tags: ['cool', 'teacher'],
  }, {
    key: '9',
    name: 'Pro Mink',
    age: 37,
    address: 'Sidney No. 1 Lake Park, Sidney No. 9 Lake Park',
    tags: ['cool', 'teacher'],
  }, {
    key: '10',
    name: 'Skou Kila',
    age: 49,
    address: 'Sidney No. 1 Lake Park, Sidney No. 10 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
<style lang="less" scoped>
.block__book--div{
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background: #fff;
}
</style>