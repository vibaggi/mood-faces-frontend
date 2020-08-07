<template>
    <cv-form @submit.prevent="fazerLogin">
        <cv-text-input v-model="username" id="username" label="Nome de Usuário"></cv-text-input>
        <cv-text-input v-model="password" id="password" label="Senha do Usuário" type="password"></cv-text-input>
        <cv-button>Entrar</cv-button>
    </cv-form>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { LoginService } from '../services/login.service';

@Component
export default class Login extends Vue {
    username = ''
    password = ''

    fazerLogin(){
        LoginService.login(this.username, this.password).then((resp)=>{
            this.$router.push('/home')
        })
    }
    


}
</script>

<style>

</style>