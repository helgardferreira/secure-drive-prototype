<template>
  <q-page>
    <q-card flat bordered class="q-ma-sm q-mt-md">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-sm q-pa-lg">
        <q-select
          outlined
          v-model="booking"
          :options="bookingOptions"
          label="Booking Type"
          lazy-rules
          :rules="[val => typeof val === 'string' || 'Select either Personal OR Company']"
        />
        <q-select
          outlined
          v-model="trip"
          :options="tripOptions"
          label="Trip Type"
          lazy-rules
          :rules="[val => typeof val === 'string' || 'Please select a trip type']"
        />

        <div class="row justify-between">
          <q-btn label="Cancel" type="reset" color="primary" flat class="col-xs-5"/>
          <q-btn label="Next" type="submit" color="primary" class="col-xs-5"/>
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageBooking',

  data: () => ({
    bookingOptions: ['Personal', 'Company'],
    tripOptions: ['Full Day', 'Point To Point', 'Airport Transfer'],

    booking: null,
    trip: null
  }),

  methods: {
    onSubmit() {
      // TODO
    },

    onReset() {
      this.booking = null
      this.trip = null
    }
  }
}
</script>
