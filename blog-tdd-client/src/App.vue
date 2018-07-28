<template>
  <div id="app">   
      <div id="nav">
          <div class="navbar-fixed">
              <nav class="orange">
                  <div class="nav-wrapper container">
                      <router-link to="/">Auth</router-link> | <router-link to="/home">Home</router-link> | <router-link to="/editor">Editor</router-link>
                      <a href="#!" class="brand-logo">&nbsp;{{getOwner}}{{getCounter}}</a>
                      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="mdi-navigation-menu"></i></a> 
                      <ul class="right hide-on-med-and-down">
                          <li><a href="#" ><i class="mdi-action-perm-identity"></i></a></li>
                          <li><a href="#"><i class="mdi-navigation-refresh"></i></a></li>
                          <li><a href="#"><i class="mdi-navigation-more-vert"></i></a></li>
                      </ul>
                  </div>
              </nav>
          </div>
      </div>
      <nav class="orange lighten-2 flat hide-on-med-and-down">
        <div class="nav-wrapper container">
            <form>
                <div class="input-field">
                    <input id="search" type="search" required="">
                    <label for="search"><i class="mdi-action-search"></i></label>
                    <i class="mdi-navigation-close"></i>
                </div>
            </form>
        </div>
    </nav>
    <div id="push">
      <section class="orange valign-wrapper">
          <div class="container valign">
              <div class="row">
                  <div class="col l12">
                    <h2 class="center-align white-text">Be Your Self</h2>
                    <p class="center-align flow-text">on your own way</p>
                  </div>
              </div>
          </div>
      </section>
    </div>
      <router-view/>   
    <!--login modal-->
    

  </div>  
</template>


<script>
import { mapState } from 'vuex'
import { mapAction } from 'vuex'

export default {
    data(){
        return{
            modal : false
        }
    },
    computed:{
        getOwner(){
            console.log(this.$store.state.owner)
            return this.$store.state.owner
        },
        getCounter(){
            console.log(this.$store.state.count)
            return this.$store.state.count
        }
    },
    methods:{
        opennav(){
             console.log("haiii side")
             
        }
    }
}


</script>




<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
#nav {
  padding: 0;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>


