<template>
  <Navigation>
    <v-container class="grey darken-4">
      <v-row>
        <v-col>
          <Link :href="`${$page.url}/update`">
            <v-btn small elevation="" color="secondary" class="wait--text">
              Update roles
            </v-btn>
          </Link>
        </v-col>
        <v-col>
          <v-simple-table dark>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(value, role) in roles" :key="value">
                  <td>{{ role }}</td>
                  <td>{{ value }}</td>
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
  components: { Navigation },
  props: ["roles"],
};
</script>

<style>
</style>