<template>

<div class="content">
  <h1 class="uk-heading-line"><span>Languages</span></h1>

    <dl v-for="language in languages">
      <dt>
        <i class="icon">{{getFlag(language.icon)}}</i> {{language.name}}
      </dt>
      <dd>
        {{language.description}}
      </dd>
    </dl>
</div>
</template>

<script>
var Flags = require('emoji-flags')
export default {
  data () {
    return {
      languages: this.$store.getters.getSection('languages')
    }
  },
  methods: {
    getFlag (icon) {
      return Flags.countryCode(icon).emoji
    }
  }
}
</script>

<style scoped>

</style>
