<template>
  <div class="test-container">
    <div class="position-relative">
      <input type="text" class="input-effect" name="log" />
      <label>Username or Email Address</label>
      <span class="focus-border"></span>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
::-webkit-input-placeholder {
  color: #8a949f;
  font-size: 13px;
  font-weight: 300;
}

::-moz-input-placeholder {
  color: #8a949f;
  font-size: 13px;
  font-weight: 300;
}

::-o-input-placeholder {
  color: #8a949f;
  font-size: 13px;
  font-weight: 300;
}

::-moz-selection {
  background-color: #1da0f9;
  color: #fff;
}

::selection {
  background-color: #1da0f9;
  color: #fff;
}

body {
  color: #8a949f;
  font-family: roboto, sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 26px;
  position: relative;
  background: #161e26;
}
.test-container {
  width: 100vw;
  height: 100vh;
  padding: 10%;
  margin: 0 auto;
  .position-relative {
    width: 300px;
    position: relative !important;
    box-sizing: border-box;
  }
}
.input-effect {
  width: 100%;
  border: 0;
  padding: 4px 0;
  border-bottom: 1px solid rgba(138, 148, 159, 0.25);
  background-color: transparent;
  color: #586779;
  font-weight: 300;
  overflow: visible;
}

.input-effect:focus {
  outline: none;
}

.input-effect ~ .focus-border {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #49c0fc;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.input-effect:focus ~ .focus-border,
.has-content.input-effect ~ .focus-border {
  width: 100%;
  transition: 0.4s;
  left: 0;
}

.input-effect ~ label {
  position: absolute;
  left: 0;
  width: 100%;
  top: 9px;
  color: #38f509;
  font-size: 13px;
  line-height: 18px;
  text-transform: capitalize;
  transition: 0.3s;
  z-index: 1;
  letter-spacing: 0.5px;
  pointer-events: none;
}

.input-effect:focus ~ label,
.has-content.input-effect ~ label {
  top: -20px;
  font-size: 10px;
  text-transform: uppercase;
  color: #ccc;
  transition: 0.3s;
}
</style>
<style scoped lang='postcss'>
html,
body {
  background: #e2f6ff; /* Old browsers */
  /* IE9 #pc svg, needs conditional override of 'filter' to 'none' */
  background: url(data:image/#pc svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPHJhZGlhbEdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNzUlIj4KICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZTJmNmZmIiBzdG9wLW9wYWNpdHk9IjEiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogIDxyZWN0IHg9Ii01MCIgeT0iLTUwIiB3aWR0aD0iMTAxIiBoZWlnaHQ9IjEwMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    #ffffff 0%,
    #e2f6ff 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, #ffffff),
    color-stop(100%, #e2f6ff)
  ); /* Chrome,Safari4+ */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    #ffffff 0%,
    #e2f6ff 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-radial-gradient(
    center,
    ellipse cover,
    #ffffff 0%,
    #e2f6ff 100%
  ); /* Opera 12+ */
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    #ffffff 0%,
    #e2f6ff 100%
  ); /* IE10+ */
  background: radial-gradient(
    ellipse at center,
    #ffffff 0%,
    #e2f6ff 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e2f6ff',GradientType=1 ); /* IE6-8 fallback on horizontal gradient */
}
</style>
