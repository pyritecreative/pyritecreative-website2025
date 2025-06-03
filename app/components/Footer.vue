<template>
  <footer>
    <h2 class="content w-full text-2xl text-zinc-200 bg-zinc-800">
      Get In Touch
    </h2>

    <div class="content gradient-overlay bg-zinc-700 text-zinc-400 relative">
      <div
        class="bg-[url(/images/phone-white.png)] bg-contain p-50 absolute w-[200px] h-[400px] right-[4vw] bottom-[-10px]"
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

      <dl class="grid grid-cols-[auto,1fr] gap-2">
        <dt>
          <Icon name="ion:ios-telephone" size="20" />
          <span class="sr-only">Telephone</span>
        </dt>
        <dd><a href="tel:+441453605006" target="_blank">(01453) 605006</a></dd>
        <dt>
          <Icon name="ion:at" size="20" /><span class="sr-only">Email</span>
        </dt>
        <dd>
          <a
            href="mailto:hello&#64;pyritecreative&#46;com?subject=Website Inquiry"
            target="_blank"
          >
            hello&#64;pyritecreative&#46;com
          </a>
        </dd>
        <dt>
          <Icon name="ion:ios-mail" size="20" /><span class="sr-only"
            >Address</span
          >
        </dt>
        <dd>
          <address class="not-italic">
            Pyrite Creative<br />
            West Bay<br />
            Lakeside Depot<br />
            London Road<br />
            Stroud<br />
            GL5 2SA
          </address>
        </dd>
        <dt>
          <Icon name="ion:ios-location" size="20" /><span class="sr-only"
            >What3Words</span
          >
        </dt>
        <dd>
          <a href="https://w3w.co/scenes.pine.expressed" target="_blank"
            >///scenes.pine.expressed</a
          >
        </dd>
        <dt>
          <Icon name="ion:logo-instagram" size="20" /><span class="sr-only"
            >Instagram</span
          >
        </dt>
        <dd>
          <a href="http://www.instagram.com/pyritecreative" target="_blank">
            @pyritecreative
          </a>
        </dd>
      </dl>

      <dl>
        <dt></dt>
      </dl>
    </div>
    <div class="content text-zinc-800 flex items-stretch">
      <div class="flex-1">
        <NuxtLink to="/">
          <NuxtImg
            src="/images/pyrite-creative-logo-black.png"
            alt="Pyrite Creative Logo"
            width="70"
          />
        </NuxtLink>
      </div>
      <div class="text-right m-auto flex-1 text-sm">
        &copy;<NuxtTime :datetime="Date.now()" year="numeric" /> Pyrite Creative
        Ltd. All rights reserved | Privacy Policy | Terms of Service
      </div>
    </div>
  </footer>
</template>

<style scoped>
a:hover {
  color: whitesmoke;
}

.gradient-overlay {
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background: url(/images/stock/paint-surface.jpg);
  z-index: 1;
}

.gradient-overlay:before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-image: linear-gradient(
    rgba(60, 60, 60, 0.8),
    rgba(60, 60, 60, 0.8)
  );
  backdrop-filter: blur(3px);
  z-index: -1;
}
</style>
