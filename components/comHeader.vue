<template>
  <header class="header py-3 fixed w-full bg-indigo-600 text-white dark:text-white ">
    <div class="header-inner container mx-auto flex justify-between items-center">
      <div class="header-logo"><a href="/" class="mb-4 text-2xl font-extrabold md:text-3xl lg:text-4xl uppercase">
        Logo</a></div>
      <div class="header-nav">
        <ul class="flex gap-5 text-l uppercase font-bold">
          <li>
            <nuxt-link to="/post">Column</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">About</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>