<template>
  <div class="hello">
    <h4>显示页面</h4>
    <div v-for='(item,index) in arr' :key='index'>{{item.username}}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'List',
  data () {
    return {
      arr:[]
    }
  },
  created(){
    axios.get('/api/list').then(res=>{
      console.log(res.data.result)
      this.arr=res.data.result
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
