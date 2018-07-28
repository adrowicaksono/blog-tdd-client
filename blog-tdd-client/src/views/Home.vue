<template>
  <div class="home">
      <div class="contaier" id="main">    
          <div class="row">
            <div class="col l9 m12">
              <div class="row">
                 <Page v-bind:bacaan="article" v-on:updated="getArticles"/>
              </div>
              
              <div class="row">
                <ul class="pagination" style="padding-right:300px;">
                  <li class="waves-effect"><a href="#!"><i class="material-icons" v-on:click="prevPage" >chevron_left</i></a></li>
                  <li v-for="i in pages" :key="{i}"  class="waves-effect" >
                    <a href="#!" v-show="i == activePage" class="waves-effect waves-light  orange darken-4 btn white-text">{{i}}</a>
                    <a href="#!" v-show="i !== activePage" class="waves-effect">{{i}}</a>
                  </li>
                  <li class="waves-effect"><a href="#!"><i class="material-icons" v-on:click="nextPage">chevron_right</i></a></li>
                </ul>
              </div>  
            </div>
            <div>
              <AsideCard/>
            </div>
          </div>
      </div>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// @ is an alias to /src

import HelloWorld from '@/components/HelloWorld.vue'
import Page from '@/components/Page.vue'
import AsideCard from '@/components/AsideCard.vue'
import { mapAction } from 'vuex'
import axios from 'axios' 

export default {
  name: 'home',
  components: {
    HelloWorld,
    Page,
    AsideCard,
  },
  data(){
        return{
            articles : [],
            pages : '',
            article : '',
            activePage: 1,
            isEdit : false,
        }
    },
    mounted(){
        this.getArticles()
        this.getComments()
    },
    methods:{
            getArticles(){
                axios
                .get('http://35.198.243.67/articles',{
                    headers:{
                        token:localStorage.getItem("token")
                    }
                })
                .then((articles)=>{
                    console.log(articles.data.length)
                    this.articles = articles.data
                    this.pages = articles.data.length
                    this.article = articles.data[0]
                    console.log(this.article.title)
                })
                .catch(function(err){
                    console.log(err.message)
                })
            },
            getComments(){
                //query articleId
                axios
                .get(`http://35.198.243.67/comments?article_id=5b55a0786d0d6a38bf3a1202`,{
                    headers:{
                        token:localStorage.getItem("token")
                    }
                })
                .then(function(comments){
                    // console.log(comments.data)
                })
                .catch(function(err){
                    console.log(err.message)
                })
            },
            nextPage(){
              if(this.activePage < this.pages){
                this.activePage += 1
                console.log("next page", this.activePage)
                this.showPage()
              }
            },
            prevPage(){
              if(this.activePage > 1){
                this.activePage -= 1
                console.log("prev page", this.activePage)
                this.showPage()
              }
            },
            showPage(){
              let idx = this.activePage - 1
              this.article = this.articles[idx]
            }
    },
    computed:{
         
    }
}
</script>


