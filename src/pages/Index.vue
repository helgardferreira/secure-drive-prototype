<template>
  <q-page>
    <div class="column q-mx-sm">
      <div class="col row justify-around">
        <div class="col text-center">
          <h5>LOGO PLACEHOLDER</h5>
        </div>
      </div>

      <div class="col row justify-around">
        <div class="col text-center q-mx-sm">
          <q-btn
            round
            label="Make Booking"
            color="primary"
            class="menu-btn-round"
            @click="goToBooking"
            v-if="isRound"
          />
          <q-btn
            label="Make Booking"
            color="primary"
            class="menu-btn-regular full-width"
            @click="goToBooking"
            v-else
          />
        </div>

        <div class="col text-center q-mx-sm">
          <q-btn
            round
            label="Make Payment"
            color="primary"
            class="menu-btn-round"
            v-if="isRound"
            disable
          />
          <q-btn
            label="Make Payment"
            color="primary"
            class="menu-btn-regular full-width"
            v-else
            disable
          />
        </div>
      </div>

      <div class="col row justify-around">
        <div class="col text-center q-mx-sm">
          <q-btn
            round
            label="Rate Our Services"
            color="primary"
            class="menu-btn-round"
            v-if="isRound"
            disable
          />
          <q-btn
            label="Rate Our Services"
            color="primary"
            class="menu-btn-regular full-width"
            v-else
            disable
          />
        </div>
      </div>

      <div class="col row justify-around">
        <div class="col text-center q-mx-sm">
          <q-btn
            round
            label="Update Profile"
            color="primary"
            class="menu-btn-round"
            v-if="isRound"
            disable
          />
          <q-btn
            label="Update Profile"
            color="primary"
            class="menu-btn-regular full-width"
            v-else
            disable
          />
        </div>

        <div class="col text-center q-mx-sm">
          <q-btn
            round
            label="Enquiry"
            color="primary"
            class="menu-btn-round"
            v-if="isRound"
            disable
          />
          <q-btn
            label="Enquiry"
            color="primary"
            class="menu-btn-regular full-width"
            v-else
            disable
          />
        </div>

        <div class="col text-center q-mx-sm">
          <q-btn
            round
            label="Call Now"
            color="primary"
            class="menu-btn-round"
            v-if="isRound"
            disable
          />
          <q-btn
            label="Call Now"
            color="primary"
            class="menu-btn-regular full-width"
            v-else
            disable
          />
        </div>
      </div>

      <div class="col row">
        <div class="col text-center q-mx-sm">
          <q-btn
            label="DEMO - ROUND VS REGULAR"
            color="black"
            class="full-width"
            @click="isRound = !isRound"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  data: () => ({
    isRound: false
  }),

  methods: {
    goToBooking() {
      setTimeout(() => void this.$router.push('/booking'), 250)
    }
  }
}
</script>

<style scoped>
.column {
  min-height: 450px;
  height: calc(100vh - 50px);
}

.menu-btn-regular {
  /* regular buttons */
  /* dynamic font-size */
  /* font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300))); */
  min-height: 4em;
}

.menu-btn-round {
  /* round buttons */
  font-size: calc(10px + (26 - 10) * ((100vw - 300px) / (1600 - 300)));
  width: 7em;
  height: 7em;
}
</style>
