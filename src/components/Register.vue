<template>
    <div id="register">
        <h3>Crie uma conta</h3>
        <div id="form">
            <input type="text" placeholder="login">
            <input type="password" placeholder="senha">
            <input type="password" placeholder="confirmar senha">
            <button v-bind:disabled="disabledButton">Criar</button>
        </div>
    </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Register extends Vue {

    disabledButton = true

}

</script>