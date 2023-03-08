<template>
  <q-page class="flex q-pa-md">

      <div id="powerbi-report-lg" class="lg">
        <!--<iframe title="Report Section" width="1400" height="836" src="https://app.powerbi.com/view?r=eyJrIjoiNDNhZDdjYzctYzA3OC00M2UxLWE4ZWEtNDhiZjNiZmVlOTZlIiwidCI6IjA4ZjU4OTkzLWMzOTctNDE3ZC05YTk0LTIxNmU1N2E3NTQ2YyJ9" frameborder="0" allowFullScreen="true"></iframe>-->
        <iframe title="Dashboard_CharITy13" width="1800" height="836" frameborder="0" allowFullScreen="false" src="https://app.powerbi.com/view?r=eyJrIjoiYTBmOTM2NTYtYzA1MS00NWIyLWE5NmQtZGIzOTNlNjQ5ZTJiIiwidCI6IjA4ZjU4OTkzLWMzOTctNDE3ZC05YTk0LTIxNmU1N2E3NTQ2YyJ9&pageName=ReportSection"></iframe>
        <!-- Osman <iframe title="deneme - Page 1" width="1800" height="836" src="https://app.powerbi.com/view?r=eyJrIjoiOWRhMWE3YjItYmFkOC00ZDlkLWI5YzQtNzI4ZjZiNmUyYTFjIiwidCI6IjA4ZjU4OTkzLWMzOTctNDE3ZC05YTk0LTIxNmU1N2E3NTQ2YyJ9" frameborder="0" allowFullScreen="true"></iframe>-->
        <!--AHMETABI<iframe title="test" width="1200" height="747" src="https://app.powerbi.com/view?r=eyJrIjoiNmJjMzUxODctZDQwNi00Yjk2LWJkNjktMDUxZDEyM2IwYjZlIiwidCI6IjA4ZjU4OTkzLWMzOTctNDE3ZC05YTk0LTIxNmU1N2E3NTQ2YyJ9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>-->
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
      <div id="powerbi-report-md" class="md" >
        <iframe title="Dashboard_CharITy13" width="1200" height="750" frameborder="0" allowFullScreen="false" src="https://app.powerbi.com/view?r=eyJrIjoiYTBmOTM2NTYtYzA1MS00NWIyLWE5NmQtZGIzOTNlNjQ5ZTJiIiwidCI6IjA4ZjU4OTkzLWMzOTctNDE3ZC05YTk0LTIxNmU1N2E3NTQ2YyJ9&pageName=ReportSection"></iframe>
      </div>
      <div id="powerbi-report-md" class="sm" >
        <iframe title="Dashboard_CharITy13" width="700" height="500" frameborder="0" allowFullScreen="false" src="https://app.powerbi.com/view?r=eyJrIjoiYTBmOTM2NTYtYzA1MS00NWIyLWE5NmQtZGIzOTNlNjQ5ZTJiIiwidCI6IjA4ZjU4OTkzLWMzOTctNDE3ZC05YTk0LTIxNmU1N2E3NTQ2YyJ9&pageName=ReportSection"></iframe>
      </div>
      <div id="powerbi-report-xs" class="xs">
        <iframe title="Dashboard_CharITy13" width="450" height="300" frameborder="0" allowFullScreen="false" src="https://app.powerbi.com/view?r=eyJrIjoiYTBmOTM2NTYtYzA1MS00NWIyLWE5NmQtZGIzOTNlNjQ5ZTJiIiwidCI6IjA4ZjU4OTkzLWMzOTctNDE3ZC05YTk0LTIxNmU1N2E3NTQ2YyJ9&pageName=ReportSection"></iframe>
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
