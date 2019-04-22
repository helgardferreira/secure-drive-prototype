<template>
  <q-layout>
    <q-header elevated class>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          v-if="$store.state.isLoggedIn"
        >
          <q-icon name="menu"/>
        </q-btn>

        <q-toolbar-title>SecureDrive</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-2">
      <q-list>
        <q-item clickable to="/" exact>
          <q-item-section avatar>
            <q-icon name="home"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/booking">
          <q-item-section avatar>
            <q-icon name="note_add"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Make Booking</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/" disable>
          <q-item-section avatar>
            <q-icon name="payment"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Make Payment</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/" disable>
          <q-item-section avatar>
            <q-icon name="star"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Rate Our Services</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/" disable>
          <q-item-section avatar>
            <q-icon name="person"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Update Profile</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/" disable>
          <q-item-section avatar>
            <q-icon name="question_answer"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Enquiry</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/" disable>
          <q-item-section avatar>
            <q-icon name="call"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Call Now</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data() {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
