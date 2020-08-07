<template>
    <div id="register" class="bx--grid">
        <div class="bx--row">
            <div class="bx--col-md-3"></div>
            <div class="bx--col-md-2">
                <h3>Crie uma conta</h3>
            </div>
            <div class="bx--col-md-3"></div>
        </div>
        <div class="bx--row">
            <div class="bx--col-md-3"></div>
            <cv-form class="bx--col-md-2" @submit.prevent="actionSubmit">
                <cv-text-input v-model="login" id="login" label="Login" placeholder="digite seu nome de usuário" ></cv-text-input>
                <cv-text-input v-model="senha" id="senha" theme="" label="Senha" type="password" passwordHideLabel="Esconder Senha" passwordShowLabel="Exibir senha" placeholder="digite a senha"></cv-text-input>
                <cv-text-input v-model="confSenha" theme="" label="Confirmar Senha" type="password" passwordHideLabel="Esconder Senha" passwordShowLabel="Exibir senha" placeholder="digite a senha"></cv-text-input>
                <cv-text-input v-model="email" label="Email de Cadastro" placeholder="digite seu email"></cv-text-input>
                <cv-text-input v-model="apelido" label="Apelido" placeholder="O nome que aparecerá para os outros"></cv-text-input>
                <cv-button>Criar</cv-button>
            </cv-form>
            <div class="bx--col-md-3"></div>
        </div>
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { LoginService } from './../services/login.service'
@Component
export default class Register extends Vue {

    loginService: LoginService = new LoginService()
    login   = ''
    senha   = ''
    confSenha  = ''
    email   = ''
    apelido = ''

    actionSubmit(evento){
        LoginService.criarConta(this.login, this.senha, this.email, this.apelido).then((resp)=>{
            this.$router.push('/')
        })
    }
    disabledButton(){
        return !(this.login != '' && this.email != '' && this.apelido != '' && this.senha != '' && this.senha == this.confSenha)
    }
}

</script>

<style lang="scss">
@import 'src/styles/_carbon-utils';
h3{
    margin: $spacing-09 0;
}
</style>