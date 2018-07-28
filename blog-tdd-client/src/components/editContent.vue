<template>
    <div>
        
    </div>
</template>

<script>
import "vue-wysiwyg/dist/vueWysiwyg.css";
   
export default {
    props : ['article'],
    data(){
        return{
            title : this.article.title,
            content : this.article.content,
            // id : '',
            // tag : '',
        }
    },
    methods: {
        addModel(){
            this.title = this.article.title
            this.content = this.article.content
            // this.id =  this.article.id
            // this.tag = this.article.tag
        },
        hideModal(){
            console.log("haduuhhh")
            this.$emit('hide')
        },
        saveChanges(){
            console.log(this.article)
            this.$emit('hide')  
            this.$router.replace('/home')
        }
    },
    computed:{
        
    }
}
</script>
