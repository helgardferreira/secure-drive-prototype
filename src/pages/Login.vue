<template>
  <q-page>
    <q-card flat bordered class="q-ma-sm q-mt-md">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-sm q-pa-lg">
        <q-input
          outlined
          v-model="email"
          label="Email"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please enter your email']"
        />
        <q-input
          outlined
          v-model="password"
          type="password"
          label="Password"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please enter your password']"
        />

        <div class="row">
          <q-btn label="Login" type="submit" color="primary full-width"/>
        </div>
        <div class="text-center q-mt-md">
          <q-btn
            flat
            label="Forgot Password?"
            @click="resetPassword"
            color="primary"
            class="full-width col"
          />
        </div>
      </q-form>
    </q-card>
    <div class="text-center q-mt-md">
      <p>
        Don't have an account?
        <router-link to="/registration">Register</router-link>
      </p>
    </div>

    <q-dialog v-model="alert" full-width ref="loginDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section>Login Successful</q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: 'PageLogin',

  data: () => ({
    // input fields
    email: null,
    password: null,

    accept: false,

    alert: false
  }),

  watch: {
    alert(newVal, currVal) {
      if (currVal && !newVal) this.closeLogin()
    }
  },

  methods: {
    onSubmit() {
      // TODO
      this.alert = true
    },

    onReset() {
      this.email = null
      this.password = null
      this.accept = false
    },

    resetPassword() {
      // TODO
    },

    closeLogin() {
      this.$refs.loginDialog.hide()
      setTimeout(() => void this.$router.push('/'), 100)
    }
  }
}
</script>
