<template>
  <v-ons-toolbar>
    <div class="center" style="text-align: center;">{{ title }}</div>
    <div class="right">
      <v-ons-toolbar-button>
        <v-ons-icon icon="ion-log-out" @click="$auth.logout()"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
  </v-ons-toolbar>
</template>

<script>
export default {
  name: 'Header',
  props: ['title']
};
</script>
