<template>
  <q-page>
    <div class="column">
      <div class="col row justify-around">
        <div class="col text-center">
          <h4>SECUREDRIVE</h4>
        </div>
      </div>

      <div class="col row justify-around">
        <div class="col text-center">
          <q-btn round label="Make Booking" color="primary" class="menu-btn"/>
        </div>

        <div class="col text-center">
          <q-btn round label="Make Payment" color="primary" class="menu-btn"/>
        </div>
      </div>

      <div class="col row justify-around">
        <div class="col text-center">
          <q-btn round label="Rate Our Services" color="primary" class="menu-btn"/>
        </div>
      </div>

      <div class="col row justify-around">
        <div class="col text-center">
          <q-btn round label="Update Profile" color="primary" class="menu-btn"/>
        </div>

        <div class="col text-center">
          <q-btn round label="Enquiry" color="primary" class="menu-btn"/>
        </div>

        <div class="col text-center">
          <q-btn round label="Call Now" color="primary" class="menu-btn"/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',

  methods: {
    test() {
      console.log('test')
    }
  }
}
</script>

<style scoped>
.column {
  min-height: 450px;
  height: calc(100vh - 50px);
}

.menu-btn {
  font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  min-width: 6em;
  min-height: 6em;
}
</style>
