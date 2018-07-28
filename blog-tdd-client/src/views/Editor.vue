<template>
    <div>
    <h1>Edit</h1>
    <div class="row">
        <div class="container">
            <div class="row">
                <div class="input-field col m10 offset-m1 blue-text">
                    <i class="mdi-action-account-circle prefix"></i>
                    <input id="icon_prefix" type="text" class="validate" v-model="title">
                    <label for="icon_prefix">Title</label>
                </div>
            </div>
            <div class="row">
                <wysiwyg v-model="myHTML" id="editor"></wysiwyg>
            </div>
            <div class="row">
                <div class="input-field col m10 offset-m1 blue-text ">
                    <i class="mdi-action-lock-open prefix"></i>
                    <input id="icon_password" type="text" class="validate" placeholder="#some tag" v-model="tag">
                    <label for="icon_password">Tag</label>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
         <button  v-on:click="submitEditor" class="btn waves-effect waves-light" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
        </button>
    </div>

    </div>
</template>


<script>
import axios from 'axios'
import { mapState } from 'vuex'
import "vue-wysiwyg/dist/vueWysiwyg.css";

export default {
    props :['status'],
    data(){
        return{
            title : '',
            myHTML:'',
            tag:''
        }
    },
    methods:{
        submitEditor(){
            console.log("direct lah")
            console.log(this.title, this.myHTML, this.tag)
            axios
            .post('http://35.198.243.67/articles',{
                title: this.title,
                content : this.myHTML,
                tag: this.tag
            }, {
                headers : {
                    token : localStorage.getItem("token")
                }
            })
            .then((respon)=>{
                console.log(respon)
                this.title  = ''
                this.myHTML = ''
                this.tag = ''
                this.$router.replace('/home')
            })
            .catch(function(err){
                console.log(err.message)
            })
            
        },    
    },
}
</script>


<style scoped>

#editor{
    margin: 10px ;
    padding: 10px;
}

</style>
