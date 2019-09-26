<template>
  <div class="hello">
    <h4>登陆页面</h4>
    <p><input type="text" placeholder="请输入用户名" v-model="username"/></p>
    <p><input type="password" placeholder="请输入密码" v-model="password"/></p>
    <p><input type="button" value="登陆" @click="change"/></p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Login',
  data () {
    return {
      username:"",
      password:""
    }
  },
  methods:{
    change(){
        axios.post('/api/login',{
          username:this.username,
          password:this.password
        }).then(res=>{
         console.log(res)
         if(res.data.code==1){
            alert(res.data.msg)
            this.$router.push('/list')
         }else{
           alert(res.data.msg)
            this.$router.push('/registry')
         }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
