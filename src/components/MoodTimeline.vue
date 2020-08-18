<template>
    <div class="mood-timeline-container">
        <div id="mood-timeline-data">
            <div id="mood-timeline-data-calendar">
                {{timeLineData}}
            </div>
        </div>
        <div id="mood-timeline-legends">
            <div class="mood-timeline-legends-item">
                <div id="legend-color-notfound"></div>
                <div>Não Informado</div>
            </div>
            <div class="mood-timeline-legends-item">
                <div id="legend-color-improductive"></div>
                <div>Improdutivo/Desmotivado</div>
            </div>
            <div class="mood-timeline-legends-item">
                <div id="legend-color-overflow"></div>
                <div>Estressado/Sobrecarregado</div>
            </div>
            <div class="mood-timeline-legends-item">
                <div id="legend-color-productive"></div>
                <div>Produtivo</div>
            </div>
            <div class="mood-timeline-legends-item">
                <div id="legend-color-efficient"></div>
                <div>Eficiente</div>
            </div>
        </div>
    </div>

  
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

    props:{
        timeLineData: new Array<any>()
    },

})
</script>

<style lang="scss">
    #legend-color-efficient{ background-color: #FDDE50}
    #legend-color-productive{ background-color: #78C1D3}
    #legend-color-overflow{ background-color: #C8355D}
    #legend-color-improductive{ background-color: #8A55A2}
    #legend-color-notfound{ background-color: #949598}
</style>