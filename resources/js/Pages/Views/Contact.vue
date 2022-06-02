<template>
  <Navigation>
    <div>
      <v-img :src="'images/about.jpg'" max-height="300">
        <div class="display-2 wait--text mt-[100px]">Contact Us</div>
      </v-img>
    </div>
    <v-container class="">
      <v-row no-gutters>
        <v-col>
          <v-card flat outlined max-width="500" color="mx-auto background2">
            <v-card-text>
              <v-form>
                <v-container class="">
                  <v-row no-gutters>
                    <v-col cols="12">
                      <div class="py-4">
                        <span> Get in Touch with us </span>
                      </div>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        color="blue "
                        placeholder="Your Name"
                        outlined
                        flat
                        v-model="contact.name"
                        :error-messages="errors.name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        color="blue "
                        placeholder="Your Email"
                        outlined
                        flat
                        v-model="contact.email"
                        :error-messages="errors.email"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        color="blue "
                        placeholder="Phone Number"
                        outlined
                        flat
                        v-model="contact.phone"
                        :error-messages="errors.phone"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        color="blue "
                        placeholder="Subject"
                        outlined
                        v-model="contact.subject"
                        :error-messages="errors.subject"
                        flat
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        color="blue "
                        placeholder="Write Message"
                        outlined
                        :error-messages="errors.message"
                        flat
                        v-model="contact.message"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-btn
                        large
                        @click="submit"
                        elevation=""
                        :disabled="loading"
                        color="secondary"
                        class="wait--text subtitle"
                        >Send a message</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Navigation>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import Navigation from "../Layouts/Navigation.vue";
export default {
  props: {
    errors: {
      required: false,
      type: Object,
    },
  },
  data() {
    return {
      loading: false,
      contact: {
        name: null,
        email: null,
        subject: null,
        message: null,
        phone: null,
      },
    };
  },
  methods: {
    submit() {
      Inertia.post("/contact", this.contact, {
        preserveScroll: true,
        preserveState: true,
        onStart: () => {
          this.loading === true;
        },
        onFinish: () => {
          this.loading === false;
        },
      });
    },
  },
  components: {
    Navigation,
  },
};
</script>

<style>
</style>