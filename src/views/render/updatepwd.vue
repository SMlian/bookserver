<template>
  <div id="components-form-demo-vuex">
    <div class="block__from--div">
      <a-form :form="form" @submit="handleSubmit">
      <a-form-item label="账户名">
        <a-input
          v-decorator="[
            'username',
            {
              rules: [{ required: true, message: '请填写用户名' }],
            },
          ]"
        />
      </a-form-item>
      <a-form-item label="密码">
        <a-input type="password"
          v-decorator="[
            'pwd',
            {
              rules: [{ required: true, message: '请填写密码' }],
            },
          ]"
        />
      </a-form-item>
      <a-button type="primary" html-type="submit">
        确认
      </a-button>
    </a-form>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    username() {
      return this.$store.state.username;
    },
  },
  watch: {
    username(val) {
      console.log('this.$store.state.username: ', val);
      this.form.setFieldsValue({ username: val });
    },
  },
  created() {
    this.form = this.$form.createForm(this, {
      onFieldsChange: (_, changedFields) => {
        this.$emit('change', changedFields);
      },
      mapPropsToFields: () => {
        return {
          username: this.$form.createFormField({
            value: this.username,
          }),
        };
      },
      onValuesChange: (_, values) => {
        console.log(values);
        // Synchronize to vuex store in real time
        // this.$store.commit('update', values)
      },
    });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.$store.commit('update', values);
        }
      });
    },
  },
};
</script>
<style lang="less" scope>
#components-form-demo-vuex {
 padding: 20px;
  width: 100%;
  border-radius: 10px;
  background: #fff;
}
.block__from--div{
  width: 300px;
  margin:100px auto;
}
#components-form-demo-vuex .language-bash {
  max-width: 400px;
  border-radius: 6px;
  margin-top: 24px;
}
</style>