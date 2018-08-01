<template>
  <div class="col s12 m7">
      <div v-for="(comment, i) in comments" v-bind:key="{i}">
        
        <div class="card horizontal">
        <div class="card-image">
            <img src="https://lorempixel.com/100/190/nature/6">
        </div>
        <div class="card-stacked">
            <div class="card-content">
            <h6 class="header">{{comment.name}}</h6>
            <p>{{comment.comment}}</p>
            </div>
        </div>
        </div>
      </div>
  </div>  
</template>

<script>
export default {
    props:['comments'],
}
</script>

