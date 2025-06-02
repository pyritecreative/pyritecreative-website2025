<script setup lang="ts"></script>

<template>
  <header>
    <NuxtImg
      src="/pyrite-creative-logo.png"
      alt="Pyrite Creative Logo"
      width="200"
    />
  </header>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </li>
    </ul>
  </nav>
  <main>
    <NuxtPage />
  </main>
  <footer>
    <h2 class="content w-full text-2xl text-zinc-200 bg-zinc-800">Get In Touch</h2>

    <div class="content bg-zinc-700 text-zinc-400 relative">
      <div
        class="bg-[url(/phone-white.png)] bg-contain p-50 absolute w-[200px] h-[400px] right-[4vw] bottom-[-10px]"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2391.2104783968744!2d-2.1967442236529067!3d51.7208082950912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48713dcaaa708069%3A0xa55057dc31593154!2sPyrite%20Creative%20Ltd!5e1!3m2!1sen!2suk!4v1738153138634!5m2!1sen!2suk"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          width="165"
          height="290"
          class="absolute top-[55px] left-[18px]"
        ></iframe>
      </div>

      <dl>
        <dt><Icon name="ion:ios-telephone" />Telephone </dt>
        <dd><a href="tel:+441453605006" target="_blank">(01453) 605006</a></dd>
        <dt>Email</dt>
        <dd>
          <a
            href="mailto:hello&#64;pyritecreative&#46;com?subject=Website Inquiry"
            target="_blank"
          >
            hello&#64;pyritecreative&#46;com
          </a>
        </dd>
        <dt>Address</dt>
        <dd>
          <address>
            Pyrite Creative<br />
            West Bay<br />
            Lakeside Depot<br />
            London Road<br />
            Stroud<br />
            GL5 2SA
          </address>
        </dd>
      </dl>
    </div>
    <div class="content text-zinc-800 flex items-stretch">
      <div class="flex-1">
        <NuxtImg
          src="/pyrite-creative-logo-black.png"
          alt="Pyrite Creative Logo"
          width="70"
        />
      </div>
      <div class="text-right m-auto flex-1 text-sm">
        &copy;<NuxtTime :datetime="Date.now()" year="numeric" /> Pyrite Creative
        Ltd. All rights reserved | Privacy Policy | Terms of Service
      </div>
    </div>
  </footer>
</template>

<style>
h1,
h2,
h3 {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
}
.content {
  padding: 30px 4vw;
}
</style>

<style scoped></style>
