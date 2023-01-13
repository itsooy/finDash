<template>
  <q-layout view="hHh lpR fFf">
    <q-header 
      elevated 
      :class="$q.dark.isActive ? 'header_dark' : 'header_normal'"
    >
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-img src="../assets/incubator13_logo_vertical-139x50.png" width="139px"/>
          Financial Dashboard
        </q-toolbar-title>
        
        <q-card class="welcomeCard" style="background-color: brown; max-height: 70px;">
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
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>


    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

import firebase from "firebase";

const linksData = [
  {
    title: 'Manage Users',
    icon: 'person',
    link: '../ManageUser'
  },
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]
export default {
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  data () {
    return {
      left: false,
      user: '',
      email: '',
      essentialLinks: linksData
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

<style >
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