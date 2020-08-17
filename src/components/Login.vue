<template>
    <cv-form @submit.prevent="fazerLogin">
        <cv-text-input v-model="username" id="username" label="Nome de Usuário"></cv-text-input>
        <cv-text-input v-model="password" id="password" label="Senha do Usuário" type="password"></cv-text-input>
        <cv-button :disabled="isLoading">
            <div v-if="!isLoading">Entrar</div>
            <cv-loading small :active="isLoading"  v-if="isLoading"></cv-loading>
        </cv-button>
    </cv-form>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { LoginService } from '../services/login.service';

@Component
export default class Login extends Vue {
    username = ''
    password = ''
    isLoading = false
    fazerLogin(){
        this.isLoading = true
        LoginService.login(this.username, this.password).then((resp)=>{
            this.$store.commit('LOGIN', resp.data)
            this.$router.push('/home/about')
            this.isLoading = false
        }, error=>{
            this.isLoading = false
        })
    }
    


}
</script>

<style>

</style>