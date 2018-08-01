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
                <img v-bind:src="imgUrl" v-if="isImage"  alt="" srcset="" width="500px" height="500px">
            </div>
            <div class="row">
                <label>File
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload($event)">
                </label>
            <button v-on:click="submitFile" type="submit">Submit</button>
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
import swal from 'sweetalert2'

export default {
    name: "editor",
    props :['status'],
    data(){
        return{
            title : '',
            myHTML:'',
            tag:'',
            imgUrl:'https://storage.googleapis.com/adrobucket/1533079976777anonymous.jpg',
            isImage :false
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
                swal({
                    title: 'Error!',
                    text: err.message,
                    type: 'error',
                    confirmButtonText: 'Cool'
                })
                 this.$router.replace('/home')
            })
            
        },
        handleFileUpload : function(e){
            this.file = e.target.files[0]
        },
        submitFile:function(){
            let formData = new FormData()
            formData.append('image', this.file)
            console.log(formData)
            axios
            .post('http://35.240.133.182/upload', formData)
            .then(function(data){
                console.log(data.data.link)
                this.imgUrl = data.data.link
                this.isImage = true
            })
            .catch(function(err){
                console.log(err.message)
            })
            
        }    
    },
}
</script>


<style scoped>

#editor{
    margin: 10px ;
    padding: 10px;
}

</style>
