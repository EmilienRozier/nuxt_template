<template>
  <div>
    <button @click="signIn(undefined , {callbackUrl: '/'})">
      sign in
    </button>
    <button @click="signIn(undefined , {callbackUrl: '/'})">
      sign in (github)
    </button>
    <button @click="signOut()">
      signOut
    </button>

    <h2>
      token: {{ token }}
    </h2>
    <h2>
      csrf token : {{ csrfToken }}
    </h2>
    <h2>
      providers : {{ providers }}
    </h2>
  </div>
</template>

<script setup lang="ts">

const { status, signIn, signOut, getProviders, getCsrfToken } = useAuth()

const providers = await getProviders()
const csrfToken = await getCsrfToken()

const headers = useRequestHeaders(['cookie']) as HeadersInit
const { data: token } = await useFetch('/api/token', { headers })

console.log(token)

</script>