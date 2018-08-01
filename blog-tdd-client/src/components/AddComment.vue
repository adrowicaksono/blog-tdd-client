<template>
    <div>
        <div class="input-field col s6" style="width:100%">
                <i class="material-icons prefix">mode_edit</i>
                <textarea id="icon_prefix3" class="materialize-textarea" v-model="name"></textarea>
                <label for="icon_prefix3">Name</label>
        </div>
        <div class="input-field col s6" style="width:100%">
                    <i class="material-icons prefix">mode_edit</i>
                    <textarea id="icon_prefix2" class="materialize-textarea" v-model="comment"></textarea>
                    <label for="icon_prefix2">Comments</label>
                <button class="btn waves-effect waves-light" type="submit" name="action" v-on:click="addComment">Submit
                    <i class="material-icons right">send</i>
                </button>
        </div>
    </div>
</template>

<script>
import swal from 'sweetalert2'
export default {
    props:['articleId'],
    data(){
        return{
            comment :'',
            name : '',
        }
    },
    methods:{
        addComment(){
            console.log(this.comment)
            if(localStorage.getItem("token") || this.name != '' ){
                var newPostKey = firebase.database().ref().child('comments').push().key;
                console.log(newPostKey)    
                firebase.database().ref('comments/' + this.articleId +'/'+ newPostKey).set({
                    aid : this.articleId,
                    cid : newPostKey,
                    comment: this.comment,
                    name : this.name,
                    createdAt : (new Date()).toString(),
                    umur : 19,
                });

                this.comment = ''
                this.name = ''
            }else{
                 swal({
                    title: 'info!',
                    text: "Please fill the name",
                    type: 'info!',
                    confirmButtonText: 'Cool'
                })
            }
        }
    }
}
</script>
