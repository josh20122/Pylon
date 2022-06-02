<template>
  <Navigation>
    <Couresel class="" id="top">
      <Calculator class="" />
    </Couresel>
    <LoanServices class="" />
    <GetToKnow class="" />
  </Navigation>
</template>

<script>
import Navigation from "../Layouts/Navigation.vue";
import Couresel from "../Components/Couresel.vue";
import Calculator from "../Components/Calculator.vue";
import LoanServices from "../Components/LoanServices.vue";
import GetToKnow from "../Components/GetToKnow.vue";
export default {
  components: {
    Navigation,
    Couresel,
    Calculator,
    GetToKnow,
    LoanServices,
  },
};
</script>

<style>
</style>