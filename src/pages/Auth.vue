<template>
  <q-layout>
    <q-page-container id="login">
      <q-page class="flex flex-center">
        <q-card v-bind:style="
                $q.platform.is.mobile ? { width: '80%' } : { width: '40%' }
              "
            >
            <q-img src="../assets/incubator13_logo_vertical.svg"></q-img>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="login" label="Login" />

          </q-tabs>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="login">
              <AuthComponent :tab="tab" />
            </q-tab-panel>
          </q-tab-panels>
          <div class="text-center q-my-md">
            Powered by &nbsp;&nbsp;&nbsp;<q-img src="../assets/charity13-horizantal_V3.png" style="max-width: 160px;"></q-img>
          </div>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import AuthComponent from "components/AuthComponent";
export default {
  components: { AuthComponent },
  data () {
    return {
      tab: 'login'
    }
  }
}
</script>

<style >
#login {
  background: url("../assets/background.jpg") center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
