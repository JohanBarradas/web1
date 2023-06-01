<template>
  <!-- Menu bar for website -->
  <div class="menubar">
    <MenuBar msg="Welcome to my webpage"/>
  </div>
  <!-- <div class="card"> -->
    <input
      @change="toggleTheme"
      id="checkbox"
      type="checkbox"
      class="switch-checkbox"
    />
    <label for="checkbox" class="switch-label">
      <span>🌙</span>
      <span>☀️</span>
      <div
        class="switch-toggle"
        :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
      ></div>
    </label>
  <!-- </div> -->


  <img alt="Main picture" src="./assets/duck.gif"
  width="180" height="285">
  <div class="titlemsg">
    <MainPage msg="Johan Barradas"/>
  </div>
 
</template>

<script>
import MainPage from './components/MainPage.vue'
import MenuBar from './components/MenuBar.vue'
export default {
  
  name: 'App',
  mounted() {
    const initUserTheme = this.getMediaPreference();
    this.setTheme(initUserTheme);
  },
  data() {
    return{
      userTheme: "light-theme"
    };
  },
  components: {
    MainPage, MenuBar
  },
  methods: {
    setTheme(theme) {
    localStorage.setItem("user-theme", theme);
    this.userTheme = theme;
    document.documentElement.className = theme;
   },
   toggleTheme() {
    const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
      this.setTheme("dark-theme");
      } else {
      this.setTheme("light-theme");
      }
    },
    getMediaPreference() {
    const hasDarkPreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (hasDarkPreference) {
      return "dark-theme";
    } else {
      return "light-theme";
    }
},
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --hyperlink-color: #b542b9;  
  --element-size: 4rem;
}

:root.dark-theme {
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
  --hyperlink-color: #42b983; 
}

/* .card {
  padding: 1rem 2rem;
  height: 30px;
  width: 65px;
  text-align: center;
  border: 1px solid var(--accent-color);
  border-radius: 2px;
  background-color: var(--background-color-secondary);
} */

.switch-checkbox {
  display: none;
}
.switch-toggle-checked {
  transform: translateX(calc(var(--element-size) * 0.6)) !important;
}

.switch-label {
  /* for width, use the standard element-size */
  padding: 1rem 2rem;
  width: var(--element-size); 

  /* for other dimensions, calculate values based on it */
  border-radius: var(--element-size);
  border: calc(var(--element-size) * 0.025) solid var(--accent-color);
  padding: calc(var(--element-size) * 0.1);
  font-size: calc(var(--element-size) * 0.3);
  height: calc(var(--element-size) * 0.35);

  align-items: center;
  background: var(--text-primary-color);
  cursor: pointer;
  display: flex;
  position: relative;
  transition: background 0.5s ease;
  justify-content: space-between;
  z-index: 1;
} 

.switch-toggle {
  position: absolute;
  background-color: var(--background-color-primary);
  border-radius: 50%;
  top: calc(var(--element-size) * 0.07);
  left: calc(var(--element-size) * 0.07);
  height: calc(var(--element-size) * 0.4);
  width: calc(var(--element-size) * 0.4);
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}

.titlemsg{
  color: var(--text-primary-color);
}

h3 {
  margin: 40px 0 0;
  color: var(--text-primary-color);
}
ul {
  color: var(--text-primary-color);
  list-style-type: none;
  padding: 0;
}

li {
  color: var(--text-primary-color);
  display: inline-block;
  margin: 0 10px;
}

a {
  color: var(--hyperlink-color);
}

p {
  color: var(--text-primary-color);
}

html {background-color: var(--background-color-primary);}

</style>
