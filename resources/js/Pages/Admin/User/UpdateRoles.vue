<template>
  <Navigation>
    <v-container class="">
      <v-row>
        <v-col>
          <v-card>
            <v-card-text>
              <v-form>
                <v-container class="">
                  <v-row no-gutters>
                    <v-col cols="12">
                      <v-checkbox
                        label="Can Refer"
                        v-model="form.canrefer"
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="12">
                      <v-checkbox
                        label="Is Admin"
                        v-model="form.isadmin"
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="12">
                      <v-checkbox
                        label="Is Super Admin"
                        v-model="form.issuperadmin"
                      ></v-checkbox>
                    </v-col>
                  </v-row>
                  <v-row justify="space-between">
                    <div>
                      <v-btn
                        small
                        elevation=""
                        class="wait--text grey darken-2"
                        color=""
                        @click="reset()"
                        >Reset</v-btn
                      >
                    </div>
                    <div>
                      <v-btn
                        small
                        elevation=""
                        @click="update()"
                        class="wait--text"
                        color="secondary"
                        >Update</v-btn
                      >
                    </div>
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
import Navigation from "../Navigation.vue";
export default {
  components: { Navigation },
  props: ["roles"],
  data() {
    return {
      form: {
        canrefer: this.roles.can_refer,
        isadmin: this.roles.is_admin,
        issuperadmin: this.roles.is_super_admin,
      },
    };
  },
  methods: {
    reset() {
      this.form.canrefer = this.roles.can_refer;
      this.form.isadmin = this.roles.is_admin;
      this.form.issuperadmin = this.roles.is_super_admin;
    },
    update() {
      Inertia.put(`${this.$page.url}`, this.form, {
        preserveScroll: true,
        preserveState: true,
      });
    },
  },
};
</script>

<style>
</style>