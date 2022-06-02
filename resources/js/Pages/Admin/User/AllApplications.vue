<template>
  <Navigation>
    <v-container class="">
      <v-row dense>
        <v-col
          v-for="application in applications"
          :key="application.id"
          cols="12"
        >
          <v-card color="secondary" max-width="500">
            <v-card-text>
              <v-row justify="space-between">
                <div>
                  <Link :href="`${$page.url}/${application.id}`">
                    <div class="grid space-y-2">
                      <v-btn
                        elevation=""
                        class="wait font-bold secondary--text"
                        :href="`${$page.url}/${application.id}`"
                        color=""
                        icon
                      >
                        {{ application.id }}
                      </v-btn>
                      <div class="pl-2 wait--text">
                        {{ application.loan_purpose }}
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="mt-3">
                  <Link
                    :href="`${$page.url}/${application.id}`"
                    method="delete"
                  >
                    <v-btn large elevation="" depressed color="error">
                      Delete</v-btn
                    >
                  </Link>
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Navigation>
</template>

<script>
import Navigation from "../Navigation.vue";
export default {
  props: ["applications"],
  components: { Navigation },
};
</script>

<style>
</style>