<template>
    <div class="mood-timeline-container">
        <div class="mood-timeline-data">
            <div class="mood-timeline-data-calendar">

               <div v-for="week in moodTimeData" :key="week" class="mood-timeline-data-calendar-week">
                   <div v-for="day in week" :key="day" :class="day.mood"></div>
               </div>
                
            
            </div>
            <div class="mood-timeline-data-days">
                <div>D</div>
                <div>S</div>
                <div>T</div>
                <div>Q</div>
                <div>Q</div>
                <div>S</div>
                <div>S</div>
            </div>
        </div>
        <div class="mood-timeline-legends">
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
    data: ()=>{
        return {
            moodTimeData: [
                [
                    { date: 1598238000000, averageScore: null, mood: 'NOTFOUND'},
                    { date: 1598238000000, averageScore: 1, mood: 'BAD'},
                    { date: 1598238000000, averageScore: 2, mood: 'NOTGOOD'},
                    { date: 1598238000000, averageScore: 4, mood: 'AMAZING'},
                    { date: 1598238000000, averageScore: 3, mood: 'HAPPY'},
                    { date: 1598238000000, averageScore: 2, mood: 'NOTGOOD'},
                    { date: 1598238000000, averageScore: null, mood: 'NOTFOUND'},
                ],
                [
                    { date: 1598238000000, averageScore: null, mood: 'NOTFOUND'},
                    { date: 1598238000000, averageScore: 3, mood: 'HAPPY'},
                    { date: 1598238000000, averageScore: 3, mood: 'HAPPY'},
                    { date: 1598238000000, averageScore: 2, mood: 'NOTGOOD'},
                    { date: 1598238000000, averageScore: 3, mood: 'HAPPY'},
                    { date: 1598238000000, averageScore: 3, mood: 'HAPPY'},
                    { date: 1598238000000, averageScore: null, mood: 'NOTFOUND'},
                ]
            ]
        }
    }

})
</script>

<style lang="scss">
    @import '../styles/_carbon';
    .mood-timeline-container{
        background-color: $carbon--cool-gray-10;
    }
    .mood-timeline-legends{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 12px;
        &-item{
            display: flex;
            flex-direction: row;
            :first-child{
                width: 12px;
                height: 12px;
                margin-right: 6px;
            }
            :last-child{
                font-weight: bold;
            }
            
        }
    }

    .mood-timeline-data{
        display: flex;
        flex-direction: row;
        &-calendar{
            display: flex;
            flex-direction: row-reverse;
            margin-left: auto;
            &-week{
                display: flex;
                flex-direction: column;
                
                div{
                    width: 12px;
                    height: 12px;
                    margin: 2px;
                }
                .HAPPY{ background-color: #78C1D3}
                .BAD{ background-color: #C8355D}
                .AMAZING{ background-color: #FDDE50}
                .NOTGOOD{ background-color: #8A55A2}
                .NOTFOUND{ background-color: #949598}
            }
        }
        &-days{
            div{
                height: 12px;
                margin: 2px 0;
            }
        }
    }
    #legend-color-efficient{ background-color: #FDDE50}
    #legend-color-productive{ background-color: #78C1D3}
    #legend-color-overflow{ background-color: #C8355D}
    #legend-color-improductive{ background-color: #8A55A2}
    #legend-color-notfound{ background-color: #949598}
</style>