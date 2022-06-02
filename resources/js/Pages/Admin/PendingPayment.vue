<template>
  <Navigation>
    <v-container class="grey darken-3">
      <v-row>
        <v-col>
          <v-text-field
            prepend-inner-icon="fa-thin fa-magnifying-glass"
            outlined
            dark
            dense
            v-model="search"
            placeholder="Search..."
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-simple-table dark>
            <template v-slot:default>
              <thead>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
              </thead>
              <tbody>
                <tr v-for="role in users.data" :key="role.id">
                  <td>{{ role.user.name }}</td>
                  <td>{{ role.user.phone_number }}</td>
                  <td>{{ role.user.email }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row>
        <Paginator :items="users" />
      </v-row>
    </v-container>
  </Navigation>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import Paginator from "../Components/Paginator.vue";
import Navigation from "./Navigation.vue";
export default {
  components: { Navigation, Paginator },
  props: ["users", "filters"],
  data() {
    return {
      search: this.filters,
    };
  },
  watch: {
    search(value) {
      Inertia.get(
        "/admin/pending",
        { search: value },
        {
          preserveScroll: true,
          preserveState: true,
        }
      );
    },
  },
};
</script>

<style>
</style>