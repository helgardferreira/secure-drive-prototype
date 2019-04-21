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

        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
        </div>
      </q-form>
    </q-card>

    <q-dialog v-model="alert" full-width ref="loginDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section>Login Successful</q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" @click="closeLogin"/>
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

    closeLogin() {
      this.$refs.loginDialog.hide()
      setTimeout(() => void this.$router.push('/'), 100)
    }
  }
}
</script>
