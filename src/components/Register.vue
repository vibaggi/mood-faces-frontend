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
                <cv-text-input id="login" label="Login" placeholder="digite seu nome de usuário"></cv-text-input>
                <cv-text-input id="senha" theme="" label="Senha" type="password" passwordHideLabel="Esconder Senha" passwordShowLabel="Exibir senha" placeholder="digite a senha"></cv-text-input>
                <cv-text-input id="confSenha" theme="" label="Confirmar Senha" type="password" passwordHideLabel="Esconder Senha" passwordShowLabel="Exibir senha" placeholder="digite a senha"></cv-text-input>
                <cv-button >Criar</cv-button>
            </cv-form>
            <div class="bx--col-md-3"></div>
        </div>
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Register extends Vue {

    form = {
        login: '',
        senha: '',
        confirmarSenha: ''
    }
    actionSubmit(evento){
        console.log(evento);
    }
    disabledButton(){
        return !(this.form.login != '' && this.form.senha != '' && this.form.senha == this.form.confirmarSenha)
    }
}

</script>

<style lang="scss">
@import 'src/styles/_carbon-utils';
h3{
    margin: $spacing-09 0;
}
</style>