<template>
  <Navigation>
    <v-container class="grey darken-3 pb-10">
      <v-row dense>
        <v-col class="" v-for="filters in data" :key="filters.filter">
          <Link
            preser
            :href="$page.url"
            replace
            preserve-state
            preserve-scroll
            :data="{ filter: filters.filter }"
          >
            <v-btn
              small
              class="secondary wait--text"
              elevation=""
              color=""
              v-text="filters.name"
            ></v-btn>
          </Link>
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
      data: [
        { filter: "deposited", name: "deposited" },
        { filter: "pending_loan", name: "pending loan" },
        { filter: "has_other_loans", name: "has other loans" },
        { filter: "has_crb", name: "has crb" },
        { filter: "is_admin", name: "is admin" },
        { filter: "is_super_admin", name: "super admin" },
        { filter: "is_guest", name: "guest" },
      ],
    };
  },
  watch: {},
};
</script>

<style>
</style>