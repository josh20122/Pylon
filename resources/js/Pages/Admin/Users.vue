<template>
  <Navigation>
    <v-container class="grey darken-4">
      <v-row no-gutters>
        <v-col>
          <v-text-field
            prepend-inner-icon="fa-thin fa-magnifying-glass"
            outlined
            dense
            dark
            v-model="search"
            placeholder="Search..."
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <v-simple-table>
            <template v-slot:default>
              <thead class="font-bold">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Time</th>
                  <th>Created at</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users.data" :key="user.id">
                  <td>
                    <v-btn
                      class="secondary wait--text"
                      v-text="user.id"
                      color=""
                      icon
                      @click="view(user.id)"
                      dark
                    >
                    </v-btn>
                  </td>
                  <td v-text="user.name"></td>
                  <td>
                    {{ user.phone_number }}
                  </td>
                  <td v-text="user.email"></td>
                  <td>
                    {{
                      new Date(user.created_at).getHours() +
                      " : " +
                      new Date(user.created_at).getMinutes()
                    }}
                  </td>
                  <td>
                    {{
                      new Date(user.created_at).getMonth() +
                      " - " +
                      new Date(user.created_at).getDate()
                    }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row> <Paginator :items="users" /> </v-row>
    </v-container>
  </Navigation>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import Paginator from "../Components/Paginator.vue";
import Navigation from "./Navigation.vue";
export default {
  props: {
    users: {
      required: false,
    },
    filters: {
      required: false,
    },
  },
  data() {
    return {
      search: this.$props.filters.search,
    };
  },
  components: {
    Navigation,
    Paginator,
  },
  methods: {
    view(id) {
      Inertia.get(`/admin/crud/user/${id}`);
    },
  },
  watch: {
    search(value) {
      Inertia.get(
        "/admin/crud/all",
        { search: value },
        {
          preserveScroll: true,
          preserveState: true,
          replace: true,
        }
      );
    },
  },
  directives: {},
};
</script>

<style>
</style>