<template>

<div class="content">
  <h1 class="uk-heading-line"><span>Skills</span></h1>

    <dl v-for="skill in skills">
      <dt>
        <i class="icon fa" v-bind:class="skill.icon"></i> {{skill.name}}
      </dt>
      <dd>
        {{skill.description}}
      </dd>
    </dl>
</div>
</template>

<script>
export default {
  props: ['skills']
}
</script>

<style scoped>

</style>
