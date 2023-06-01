<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      I am a Software Developer and Digital Artist specialized on pixel art <br>
      check out one of my current projects: 
      <a href="https://www.kickstarter.com/projects/1163975700/fictionsphere-platformer-beat-em-up/description" target="_blank" rel="noopener">FictionSphere</a>.
    </p>
    <h3>Social Media</h3>
    <ul>
      <li><a href="https://www.linkedin.com/in/johan-barradas/" target="_blank" rel="noopener">
        <el-button color="#626aef" round>LinkedIn</el-button>
      </a></li>

      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">
        <el-button type="primary" round>Twitter</el-button>
      </a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
  <el-row class="mb-4" justify="center">
    <el-button round>Round</el-button>
    

    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </el-row>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    msg: String
  }
}

</script>


<style scoped>
/* moved to App.vue to handle styling */
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
