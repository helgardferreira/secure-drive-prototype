<template>
  <q-page>
    <q-card flat bordered class="q-ma-sm q-mt-md">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-sm q-pa-lg">
        <q-input
          outlined
          v-model="firstName"
          label="First name *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please enter your first name']"
        />
        <q-input
          outlined
          v-model="lastName"
          label="Last name *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please enter your last name']"
        />
        <q-select
          outlined
          v-model="personalCompany"
          :options="options"
          label="Personal/Company *"
          lazy-rules
          :rules="[val => typeof val === 'string' || 'Select either Personal OR Company']"
        />
        <q-input
          outlined
          v-model="email"
          label="Email *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please enter your email']"
        />
        <q-input
          outlined
          v-model="telephone"
          label="Telephone *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please enter your telephone']"
        />
        <q-input
          outlined
          v-model="password"
          type="password"
          label="Password *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please enter your password']"
        />
        <q-input
          outlined
          v-model="confirmPassword"
          type="password"
          label="Confirm Password *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please confirm your password']"
        />

        <div>
          <q-toggle v-model="accept" label/>
          <p style="display: inline">
            I accept
            <a href>the license and terms</a>
          </p>
        </div>

        <div class="row justify-between">
          <q-btn label="Submit" type="submit" color="primary" class="col-xs-5"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="col-xs-5"/>
        </div>
      </q-form>
    </q-card>
    <div class="text-center q-mt-md q-mb-xl">
      <p>
        Already have an account?
        <router-link to="/login">Log In</router-link>
      </p>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageRegistration',

  data: () => ({
    // select fields
    personalCompany: null,
    options: ['Personal', 'Company'],

    // input fields
    firstName: null,
    lastName: null,
    email: null,
    telephone: null,
    password: null,
    confirmPassword: null,

    accept: false
  }),

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: 'You need to accept the license and terms first'
        })
      } else {
        // TODO
        this.$router.push('/login')
      }
    },

    onReset() {
      this.firstName = null
      this.lastName = null
      this.personalCompany = null
      this.email = null
      this.telephone = null
      this.password = null
      this.confirmPassword = null
      this.accept = false
    }
  }
}
</script>
