<template>
    <div class="pa-3 ml-10" :style=" belong == 'me' ? 'background-color: rgba(53, 75, 60, 0.5)' : 'background-color: #383838' ">
      <p class="commonStyle" :style="belong == 'me' ? 'text-align:right;' : 'text-align:left;'">
        <img :src="item.message.split('|')[0]" style=" width : 300px; " />
      </p>
      <label :style="belong == 'me' ? 'text-align:right' : 'text-align:left' " v-if="item.message.split('|')[3]">{{item.message.split('|')[3] && item.message.split('|')[3] }}</label>
    </div>
</template>


<script>
export default {
    
    props : ['item' , 'belong']

}
</script>

<style>
    .commonStyle{
        display: flex;
        flex-direction : row;
        justify-content : center;
    } 
</style>