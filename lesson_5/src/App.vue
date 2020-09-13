<template>
    <div>
    <nav>
      <router-link to="/" active-class="link--active" exact class="link">
        Home
      </router-link>
      <router-link to="/users" active-class="link--active" exact class="link">
        Users
      </router-link>
    </nav>
       <router-view>
       </router-view>
    </div>

</template>


<script>
</script>

<style>
  .link {
    margin-right: 10px;
  }

  .link--active {
    font-size: 20px;
  }
</style>