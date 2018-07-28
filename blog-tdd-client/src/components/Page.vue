<template>
    <div class="col l9">
        <h3>{{bacaan.title}}</h3>
        <a href="#!">
            <i class="material-icons" v-on:click="editArticle">
                create
            </i>
        </a>
        <a href="#!">
            <i class="material-icons" v-on:click="deleteArticle">
                delete_forever
            </i>
        </a>
        <div class="divider"></div>
        <p>{{bacaan.content}}</p>
        <p>{{bacaan.createdAt}}</p>
        <div class="row">              
            <div class="chip" v-for="i in bacaan.tag" :key="{i}">
                {{i}}
            </div>
        </div> 
        <button v-on:click="increment"  class="btn btn-flat orange waves-effect waves-light white-text">Click Me</button>
        <div v-show="isEdit" class="row">    
                <div id="modal1" class="modal" style="z-index: 1003; display: block; opacity: 1; top: 20%; transform: scaleX(1) scaleY(1);">
                    <div class="modal-content">
                        <div class="container">
                            <div class="row">
                                <h4>Edit Content</h4>
                            </div>
                            <div class="row">
                                <div class="input-field col m12 offset-m1 blue-text">
                                    <i class="mdi-action-account-circle prefix"></i>
                                    <input id="icon_prefix"  type="text" class="validate flow-text" v-model="title">
                                    <label for="icon_prefix"  >Title</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col m12 offset-m1">
                                    <wysiwyg id="editor" v-model="content"></wysiwyg>
                                </div>
                            </div>
                            
                            <div class="modal-footer">
                                <a href="#!" class="btn btn-flat orange waves-effect waves-light white-text" v-on:click="saveChanges" >Agree</a>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="modal-overlay" style="z-index: 1002; display: block; opacity: 0.5;" @click="hideModal" ></div> 
        </div>   
    </div>
</template>

<script>
import "vue-wysiwyg/dist/vueWysiwyg.css";
import { mapAction } from 'vuex'
import axios from 'axios'


export default {
    props:['bacaan'],
    
    data(){
        return{
            isEdit : false,
            isUpdated : false,
            title : '',
            content : '',
            tag : ''
        }
    },
    watch :{
        isEdit : function(){
            this.title = this.bacaan.title
            this.content = this.bacaan.content
            this.tag = this.bacaan.tag
        }
    },
    methods:{
         increment(){
                console.log("halooo")
                this.$store.dispatch('increment')
                console.log(this.article)
        },
         deleteArticle(){
             console.log("ini delete article")
             console.log(localStorage.getItem("token"))
             console.log(this.bacaan._id)
         },
         editArticle(){
             this.isEdit = true
         },
         hideModal(){
             this.isEdit = false
         },
         saveChanges(){
             console.log(this.bacaan.title, this.content, this.bacaan._id, this.bacaan.tag )
             axios.put(`http://35.198.243.67/articles?id=${this.bacaan._id}`,{
                 title : this.bacaan.title,
                 content : this.content,
                 tag : '#'
             },{
                 headers:{
                     token : localStorage.getItem("token")
                 }
             })
             .then((respons)=>{
                 console.log(respons)
                 this.isEdit = false
                 home.getArticles()
                 this.$router.replace('/home')
             })
             .catch(function(err){
                 console.log(err.message)
             })
         }
    },
    computed:{
        getContent(){
            this.content =  this.bacaan.content
            this.title = this.bacaan.title
        }
    }
}
</script>

