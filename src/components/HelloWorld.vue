<template>
  <div class="bx--grid">
    <div class="bx--row">
      <div class="bx--col-lg-3"></div>
      <div class="bx--col-lg-6">
        <h1>{{ msg }}</h1>
      </div>
      <div class="bx--col-lg-3"></div>
    </div>
    <div class="bx--row">
      <div class="bx--col-lg-3"></div>
      <div class="bx--col-lg-6">
        <p>Relate seu humor diário de trabalho e ajude sua equipe a construir um ambiente mais agradavel.</p>
      </div>
      <div class="bx--col-lg-3"></div>
    </div>
    <div class="bx--row">
      <div class="bx--col-lg-3"></div>
      <div class="bx--col-lg-6">
        <h3>Faça LOGIN</h3>
        <Login />
      </div>
      <div class="bx--col-lg-3"></div>
    </div>
    <div class="bx--row">
      <div class="bx--col-lg-3"></div>
      <div class="bx--col-lg-6">
        <h3>Novo por aqui?</h3>
        <ul>
          <li>
            <router-link to="/signup">
              <a>Criar Conta</a>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="bx--col-lg-3"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Login from "@/components/Login.vue";

@Component({
  components: {
    Login
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
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
}
</style>
