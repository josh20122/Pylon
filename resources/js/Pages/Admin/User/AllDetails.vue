<template>
  <Navigation>
    <v-container class="grey darken-3">
      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <Link :href="`${$page.url}/roles`">
                <v-btn class="secondary wait--text"> Update Roles </v-btn>
              </Link>
            </v-col>
            <v-col>
              <Link :href="`${$page.url}/applications`">
                <v-btn class="secondary wait--text">View Applications</v-btn>
              </Link>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-simple-table dark>
            <template v-slot:default>
              <thead>
                <tr>
                  <td>Column</td>
                  <td>Details</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(details, column) in user" :key="column">
                  <td>{{ column }}</td>

                  <td>{{ details }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </Navigation>
</template>

<script>
import Navigation from "../Navigation.vue";
export default {
  props: ["user", "roles"],

  components: { Navigation },
};
</script>

<style>
</style>