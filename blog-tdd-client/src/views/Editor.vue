<template>
    <div>
    <h1>Edit</h1>
    <div class="row">
        <div class="container">
            <wysiwyg v-model="myHTML" id="editor">{{getEditedArticle}}</wysiwyg>
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
import { mapState } from 'vuex'
import "vue-wysiwyg/dist/vueWysiwyg.css";

export default {
    props :['status'],
    data(){
        return{
            myHTML:'',
        }
    },
    methods:{
        submitEditor(){
            console.log("direct lah")
            this.$router.replace('/home')
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
