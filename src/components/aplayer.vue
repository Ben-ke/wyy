<template>
    <div>
         <aplayer :music="music"></aplayer>
    </div>
</template>
 
<script>
import aplayer from 'vue-aplayer'
    export default {
        components:{
            aplayer
        },
        data() {
            return {
                    music: {
                       title: '',
                       author: '',
                       url: '../../src/audio/刘惠毅花火.mp3',
                       lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
                   }
            }
        }
    }
</script>