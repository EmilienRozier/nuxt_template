<template>
  <div>
    <button @click="signIn(undefined , {callbackUrl: '/'})">
      sign in
    </button>
    <!-- <button @click="signIn(undefined , {callbackUrl: '/'})">
      sign in (github)
    </button> -->
    <button @click="signOut()">
      signOut
    </button>
  </div>
</template>

<script setup lang="ts">

const { status, signIn, signOut } = useAuth()

console.log(status)

</script>