<template>
  <div>
    
    <template v-if="tab === 'register'">
      <p class="text-center">Sign up with credentials</p>
    </template>
    <template v-if="tab === 'login'">
      <p class="text-center">Please, sign in with credentials</p>
    </template>

    <q-form @submit="submitForm">
      <q-input
        v-model="formData.email"
        outlined
        class="q-mb-md"
        type="email"
        label="Email" />
      <q-input
        v-model="formData.password"
        outlined
        class="q-mb-md"
        type="password"
        label="Password" />
      <div class="row">
        <q-space />
        <q-btn
          type="submit"
          color="primary"
          :label="tab"
        />
      </div>
    </q-form>
    <div class="text-center q-my-md">
      <q-btn
        v-if="tab === 'login'"
        flat
        @click="forgotPassword"
        label="Forgot Password?"
        color="orange"
        class="text-capitalize rounded-borders"
      />
    </div>
    <q-dialog v-model="resetPwdDialog">
      <ForgotPassword />
    </q-dialog>
  </div>
</template>

<script>
import firebase from "firebase";
import ForgotPassword from "components/ForgotPassword";
export default {
  name: "AuthComponent",
  props: ['tab'],
  components: { ForgotPassword },
  data (){
    return {
      formData: {
        email: '',
        password: '',
      },
      resetPwdDialog: false
    }
  },
  methods: {
    submitForm () {
      if (this.tab === 'login') {
        this.signInExistingUser(this.formData.email, this.formData.password)
      }
    },
    signInExistingUser (email, password) {
      console.log(email, password)
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          this.$q.notify({message: 'Sign In Success.'})
          this.$router.push('/home')
        })
        .catch(error => { console.log(error)})
    },
    forgotPassword () {
      this.resetPwdDialog = true
    }
  }
}
</script>

<style scoped>

</style>
