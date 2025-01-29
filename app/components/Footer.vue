<template>
  <footer>
    <h2>Get In Touch</h2>
    <a href="tel:+441453605006" target="_blank">(01453) 605006</a>
    <a
      href="mailto:hello&#64;pyritecreative.com?subject=Website Inquiry"
      target="_blank"
    >
      hello&#64;pyritecreative.com
    </a>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2391.2104783968744!2d-2.1967442236529067!3d51.7208082950912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48713dcaaa708069%3A0xa55057dc31593154!2sPyrite%20Creative%20Ltd!5e1!3m2!1sen!2suk!4v1738153138634!5m2!1sen!2suk"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>

    <div class="copy">
      &copy;<NuxtTime :datetime="Date.now()" year="numeric" /> Pyrite Creative Ltd
    </div>
  </footer>
</template>

<style scoped>
map {
  border: 0;
  width: 400px;
  height: 300px;
}
</style>
