<template>
  <Navigation>
    <v-img :src="'images/about.jpg'" max-height="300">
      <div>
        <h1 class="display-2 wait--text mt-[150px]">
          Frequently Asked Questions
        </h1>
      </div>
    </v-img>
    <v-container class="">
      <v-row>
        <v-col cols="12" md="6" sm="6">
          <v-expansion-panels focusable>
            <v-expansion-panel v-for="panel in panels" :key="panel.header">
              <v-expansion-panel-header ripple="true">
                {{ panel.header }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ panel.content }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="12" md="6" sm="6">
          <div class="mx-auto grid justify-center min-w-full">
            <v-img
              :src="'images/aboutlady.jpg'"
              class="rounded-md mx-auto"
              max-width="300"
            ></v-img>
            <div class="mt-n10">
              <v-card color="deepblue" width="400" elevation="22">
                <v-card-text>
                  <div class="grid">
                    <span class="wait--text uppercase font-bold"
                      >Call anytime</span
                    >
                    <span class="text-xl wait--text font-bold">
                      {{ $page.props.settings.contact }}
                    </span>
                  </div>
                </v-card-text>
              </v-card>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </Navigation>
</template>

<script>
import Navigation from "../Layouts/Navigation.vue";
export default {
  components: {
    Navigation,
  },
  data() {
    return {
      panels: [
        {
          header: "How much can I borrow?",
          content:
            " Applicants can apply for a Loan of up to their maximum eligibleloan amount, which depends on creditworthiness and other factors.Your maximum eligible loan amount will be displayed when you view your offer on the application page.",
        },
        {
          header: "  How long does it take to apply for a loan?",
          content:
            "Filling out a loan application online takes approximately 2 - 5 minutes to complete.",
        },
        {
          header: " How long does it take for Ollie to disburse my loan funds?",
          content:
            " Loan approval can occur within 1 - 20 minutes. Loan disbursement is done immediately one has save the required minimum deposit of the loan approved. (Normally 15% of the approved loan)",
        },
        {
          header: " What is the difference between interest rate and APR?",
          content:
            "The interest rate is the cost to borrow money from your line of credit. The APR (annual percentage rate) adds in some of the upfront costs of getting the line of credit in addition to the interest, including any lender fees.",
        },
        {
          header: "Do I need collateral for a Personal Loan?",
          content:
            " No, personal loans are unsecured and do not require collateral.",
        },
        {
          header: "How much do I have to pay each month?",
          content:
            " Loans are payable in fixed monthly installments. The amount of your monthly payment will depend on the amount you borrow, the repayment period you select, and the total interest charged on your Personal Loan (based on the interest rate that applies). ",
        },
        {
          header: "How long will I have to pay off my Loan?",
          content:
            "On your application, you can choose your repayment period from the options shown. Keep in mind that a longer repayment period may result in a lower monthly payment but more total interest than if you choose a shorter repayment period for the same loan amount.",
        },
        {
          header:
            " Can I make additional payments or pay off my Personal Loan early without any penalties?",
          content:
            " Yes. There are no pre-payment penalties with any type of Loan. Additionally, you can make as many payments as you wish with no  associated penalties. To pay off your Loan early, you can pay the  Outstanding Loan Balance that appears in your online account or on  your current Loan invoice. Payment must be received before the  Next Invoice Date shown on your Loan invoice for your account to be deemed paid in full; otherwise, you will owe any additional interest that may post to your account after the Next Invoice Date.",
        },
        {
          header: " How do I review information about my Loan?",
          content:
            " You can access information about your Loan, including the outstanding balance, monthly payment amounts, payment due dates,  prior payments, and credits, through your American Express online  account.",
        },
        {
          header: " Can I change my payment due date?",
          content:
            "No. Your payment due date will be set at the time you are approved for your Loan and will be the same date of each month during your Loan repayment period (for example, the 15th of each month). You will not be able to change this date.",
        },
        {
          header:
            "  I’m seeing a different offer today compared to one I saw earlier. Why?",
          content:
            "  Offers are based on your creditworthiness and other factors at the time you check for an offer. As a result, the offer you receive  may be different from an earlier offer due to changes in your creditworthiness or other eligibility factors since the time you last checked.",
        },
        {
          header: "How does interest work on a loan?",
          content:
            "Paying interest is the cost of taking out a loan. Personal Loans have a simple, fixed interest rate on the principal of the loan. To calculate how much interest you will pay over time, multiply your loan principal by your annual interest rate and by the number of years it will take to pay off the loan. You will pay interest as part of your monthly payment. Use our monthly payment calculator to determine how much interest you will pay based on the interest rate and terms of your loan.",
        },
        {
          header: "Am I eligible for a Personal Loan?",
          content:
            "When reviewing your application information, a Consumer Lending underwriter at the bank reviews several factors to assess whether  you qualify for the loan or line of credit, including your credit score and the amount of debt you have compared to your total income. You must be at least 18 years old.",
        },
      ],
    };
  },
};
</script>

<style>
</style>