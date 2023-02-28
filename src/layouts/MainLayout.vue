<template>
  <q-layout view="hHh lpR fFf">
    <q-header 
      elevated 
      :class="$q.dark.isActive ? 'header_dark' : 'header_normal'"
    >
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="">
          <q-img src="../assets/incubator13_logo_vertical-139x50.png" width="139px"/>
          <span class="gt-xs"> Financial Dashboard</span>
        </q-toolbar-title>
        
        <q-card class="gt-sm" style="background-color: brown; max-height: 70px;">
          <q-card-section>
            <p class="q-mr-lg">Welcome, <br> {{ email }}</p>
          </q-card-section>
        </q-card>
        <q-btn
          class="q-mr-xs"
          flat
          round
          @click="$q.dark.toggle()"
          :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
        />
        <q-btn
          flat
          round
          dense
          icon="logout"
          @click="logout"
          title="Log out"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" overlay elevated>
      <q-list padding>
        <q-item
          to="/home"
          active-class="tab-active"
          exact
          class="q-ma-sm navigation-item"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            Home
          </q-item-section>
        </q-item>
        <!--
        <q-item
          to="/manageuser"
          active-class="tab-active"
          exact
          class="q-ma-sm navigation-item"
          clickable
          v-ripple
        >
            <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
            <q-item-section>
              <q-item-label>Manage Users</q-item-label>
            </q-item-section>
        </q-item>      
      -->                  
      </q-list>
    </q-drawer>


    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white" style="height: 5.5%;">
      <div class="q-mt-sm q-ml-md" style="font-size: x-large; text-align: center;">
        <span>Powered by  </span>
        <q-img src="../assets/charity13-white_horizontal-183x50px.png" style="max-width: 140px;"/>
        <!--<q-btn icon="img:../assets/charity13-white_horizontal-183x50px.png" width="100px" href="https://www.charity13.ca/" />-->
      </div>
    </q-footer>
  </q-layout>
</template>

<script>


import firebase from "firebase";

const linksData = [
  {
    title: 'Manage Users',
    icon: 'person',
    link: '../ManageUser'
  }
]
export default {
  name: 'MainLayout',

  data () {
    return {
      left: false,
      username: '',
      email: '',
      emailVerified: false
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.username = user.displayName
        this.email = user.email
        this.emailVerified = user.emailVerified
        console.log(user)
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

<style >
.q-drawer {
    background-color: beige;
    /**
    max-height: 50%;
    */
}

.header_normal {
  background: linear-gradient(
    145deg,
    rgb(32, 106, 80) 25%,
    rgb(21, 57, 102) 80%
  );
}

.header_dark {
  background: linear-gradient(145deg, rgb(61, 14, 42) 15%, rgb(14, 43, 78) 70%);
}
</style>