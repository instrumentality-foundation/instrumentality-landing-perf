<template>
  <div id="app">
    <header>
      <Navbar />
    </header>

    <main>
        <router-view />
    </main>

  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

// Importing UIkit
import { UIkit } from "uikit";

export default {
  name: "App",
  components: {
    Navbar  
  }
};
</script>

<style lang="less">
@import url("../node_modules/uikit/dist/css/uikit.min.css");
@import (css)
  url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap");
</style>
