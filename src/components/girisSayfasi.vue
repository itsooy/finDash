<template>
    <div>
      <h2>Login Page for Passwordless Auth</h2>
      <form @submit.prevent="signInWithEmailLink">
        <label>E-mail:</label>
        <input type="email" v-model="email" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import firebase from 'firebase/app';
  import 'firebase/auth';
  
  export default {
    data() {
      return {
        email: ''
      };
    },
    methods: {
      signInWithEmailLink(event) {
        event.preventDefault();
        const actionCodeSettings = {
          // URL to redirect back to. The domain (www.example.com) for this
          // URL must be whitelisted in the Firebase Console.
          url: 'http://localhost:8080/home',
          // This must be true.
          handleCodeInApp: true
        };
        firebase.auth().sendSignInLinkToEmail(this.email, actionCodeSettings)
          .then(() => {
            // The link was successfully sent. Inform the user.
            // Save the email locally so you don't need to ask the user for it again
            // if they open the link on the same device.
            window.localStorage.setItem('emailForSignIn', this.email);
          })
          .catch(error => {
            // Some error occurred, you can inspect the code: error.code
          });
      }
    }
  };
  </script>
  