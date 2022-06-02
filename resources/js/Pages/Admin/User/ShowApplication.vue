<template>
  <Navigation>
    <v-container class="grey darken-3">
      <v-row>
        <v-col>
          <v-simple-table dense dark fixed-header height="1000">
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Quiz</th>
                  <th>Response</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(response, quiz) in application" :key="response">
                  <td>{{ quiz }}</td>
                  <td>{{ response }}</td>
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
  props: ["application"],
  components: { Navigation },
};
</script>

<style>
</style>