<template>
  <q-page class="flex q-pa-md">
    
    <div>
      <iframe title="Dashboard_CharITy13" width="1880" height="850" src="https://app.powerbi.com/reportEmbed?reportId=ba118b36-0cee-4701-bf64-6dc94abef85d&autoAuth=true&ctid=08f58993-c397-417d-9a94-216e57a7546c" frameborder="0" allowFullScreen="true"></iframe>
      <br/>
<!--      
      Welcome Home {{ user }} <br> {{ email }}
    <q-space />
      <q-btn
        class="flex flex-center q-px-lg q-py-sm q-mb-md"
        size="md"
        label="Logout"
        @click="logout"
        color="primary"
      />
-->      
      
    </div>
   
  </q-page>
</template>

<script>
import firebase from "firebase";
export default {
name: "Home",
  data () {
    return {
      user: '',
      email: ''
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((auth) => {
      if (auth) {
        this.user = auth.displayName
        this.email = auth.email
      } else {
        console.log('user name is null')
      }
    })
  },
  methods: {
    logout() {
      firebase.auth().signOut()
      this.$router.push('/')
        .then(() => {
        this.$q.notify({message: 'Sign Out Success.'})
      })
      .catch(error =>  console.log('error',error))
    }
  }
}
</script>

<style scoped>

</style>
