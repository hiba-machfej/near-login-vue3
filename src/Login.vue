<template>
  <div>
    <div v-if="accountId">
      <p>accountId</p>
      <button @click="signOut">
        {{ "Log out" }}
      </button>
    </div>

    <button v-else @click="signIn">
      {{ "Login with NEAR Wallet" }}
    </button>
  </div>
</template>

<script>
import { wallet, CONTRACT_ID } from "@/services.js";

export default {
  setup() {
    const accountId = wallet.getAccountId();
    return {
      accountId,
      signIn: () => wallet.requestSignIn(CONTRACT_ID),
      signOut: () => {
        wallet.signOut();
        window.location.reload();
      },
    };
  },
};
</script>

<style></style>
