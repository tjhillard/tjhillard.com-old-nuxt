<template>
  <section class="h-screen topograph">
    <transition name="fade-extra-slow">
      <navbar
        v-if="showNavbar"
      />
    </transition>

    <main class="container grid">
      <!-- hero -->
      <div class="main-hero sm:col-12 py-lg">
        <transition name="fade-extra-slow">
          <div v-if="showHello">
            <transition name="slide-in-from-left-extra-slow">
              <h1 v-if="showHelloHeading" class="mt-3xl font-size-4xl font-weight-bold" style="margin-bottom: 0; margin-left: -1px;">
                Hello! 👋
              </h1>
            </transition>
            <h2 class="user-select-none">
              My name is TJ Hillard, I'm a
              <span class="underline leading-lg text-secondary font-weight-medium cursor-pointer" @click="rotateTitle">{{ titles[currentTitleIndex] }}.</span>
            </h2>
            <div class="pt-sm">
              <button
                class="button button-primary button-big hover:rise-md hover:shadow-md"
                @click="scrollToProjects()"
              >
                View projects
              </button>
            </div>
          </div>
        </transition>
      </div>
    </main>

    <!-- projects -->
    <transition name="fade-extra-slow">
      <div v-if="showProjects" id="projects" class="col-12 mt-md diagonal min-h-screen md:min-h-auto py-3xl">
        <div class="container">
          <h2 class="text-white">
            Projects
          </h2>

          <p class="text-white font-size-md">
            The majority of my code is written at work, but I always try to find time to make things for fun in my free time.
          </p>

          <div class="grid pt-sm">
            <project-card v-if="showProjects" name="steller-css" emoji="⛰️" link="https://github.com/tjhillard/steller-css">
              <span>
                Steller is a functional (aka "atomic" or "utility-first") CSS framework for serving as the foundation of your application's design system.
                It includes several built-in smart defaults for building responsive, accesible, and usable user interfaces.
                Unlike other CSS frameworks, Steller has no opinion on the actual end appearance of your application,
                it is simply a bridge for your design system and your application's styling.
                <span>
                  Fun fact, it's named after my favorite bird from the PNW, the
                  <a href="https://www.audubon.org/field-guide/bird/stellers-jay" target="_blank">Steller's Jay</a>.
                </span>
              </span>
            </project-card>
            <project-card name="nest-nuxt-boilerplate" emoji="🐈" link="https://github.com/tjhillard/nest-nuxt-boilerplate">
              <span>
                This project is a production-ready boilerplate for a modern, API driven, fullstack web application.
                Using my two favorite frameworks on the backend and frontend,
                <a href="https://nestjs.com/" target="_blank">Nest.js</a> and
                <a href="https://nuxtjs.org/" target="blank">Nuxt.js</a> respectively.
                This template offers,
                type safety and an awesome development experience with TypeScript,
                SEO friendly server-side rendering from Nuxt,
                <a href="https://en.wikipedia.org/wiki/SOLID" target="_blank">SOLID</a> backend architecture,
                webpack HMR, caching with Redis, and more. It is also powering this very site!
              </span>
            </project-card>
            <project-card name="npr-volume" emoji="📻" link="https://github.com/tjhillard/npr-volume">
              <span>
                A few years ago while listening to NPR at work, I got frustrated
                that their web player didn't (and still doesn't) have basic volume controls to independently
                manage the volume level, so, I made my frist ever
                <a href="https://chrome.google.com/webstore/detail/npr-volume/dhhiahjlllgdfmlofacelhlikdnnalan" target="_blank">chrome extension</a>! It has received hundreds of installs
                and even
                <a href="https://medium.com/@scottstroud/thanks-deborah-efc115e945d9" target="_blank">received praise from the Lead UX Strategist at NPR</a>.
                30 minutes on a Friday night well spent.
              </span>
            </project-card>
            <project-card name="3DTileMapGenerator-Unity" emoji="🎮" link="https://github.com/tjhillard/3DTileMapGenerator-Unity">
              <span>
                To expand my programming skills outside of the realm of web development,
                I decided I wanted to learn some C#, and since I love video games,
                I chose to learn some Unity development. This project is a demo for a
                basic 3D tilemap generator where through noise map procedural generation,
                you can adjust fields such as "tree density", "rock density", "bush density", etc,
                and even add your own custom landscape items with configurable desnsities.
              </span>
            </project-card>

            <div class="sm:col-12 mt-xl text-center">
              <a href="https://github.com/tjhillard" target="_blank">
                <button class="button button-primary button-big hover:shift-right-lg hover:shadow-md">
                  View all
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- codepens -->
    <div v-if="showWriting" class="py-3xl flex flex-col justify-center bg-primary">
      <div class="container pb-2xl">
        <h2 class="text-white">
          Codepens
        </h2>
        <div class="grid">
          <project-card name="12 column grid with CSS Grid" emoji="📏" link="https://codepen.io/tjhillard/pen/WmYEJG">
            <span>
              This pen demonstrates how you can recreate the Bootsgtrap grid system with CSS Grid in only ~40 lines of code.
            </span>
          </project-card>

          <project-card name="CSS is awesome" emoji="🎉" link="https://codepen.io/tjhillard/pen/mgGdOV">
            <span>
              Just like the meme.
            </span>
          </project-card>

          <project-card name="Konami Code" emoji="🕹" link="https://codepen.io/tjhillard/pen/pmPadG">
            <span>
              up, down, up, down, left, right, left, right, b, a, enter
            </span>
          </project-card>
        </div>
      </div>
    </div>

    <!-- contact -->
    <div v-if="showWriting" class="py-3xl pattern-triangles">
      <div class="container font-size-lg">
        <div>
          <h2>
            Get in touch
          </h2>
          <p>
            <strong>Email:</strong> <a href="mailto:tjhillard@gmail.com" target="_blank">tjhillard@gmail.com</a>
          </p>
          <p>
            <strong>Twitter:</strong> <a href="https://twitter.com/_tjhillard" target="_blank">@_tjhillard</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/base/navbar';
import ProjectCard from '@/components/application/project-card';

import OnScrolledTo from '@/directives/on-scrolled-to';

export default {
  components: {
    ProjectCard,
    Navbar,
  },
  directives: {
    OnScrolledTo,
  },
  data() {
    return {
      showNavbar: false,
      showHello: false,
      showHelloHeading: false,
      showProjects: false,
      showWriting: false,
      currentTitleIndex: 0,
      titles: [
        'software engineer',
        'sports fan',
        'coffee addict',
        '90s music fan',
        'self-taught coder',
        'wannabe whiskey snob',
        'cat dad',
        'fan of The Office',
        'casual hiker',
      ],
    };
  },
  created() {
    setTimeout(() => {
      this.showNavbar = true;
    }, 20);

    setTimeout(() => {
      this.showHello = true;
    }, 70);

    setTimeout(() => {
      this.showHelloHeading = true;
    }, 90);

    setTimeout(() => {
      this.showProjects = true;
    }, 120);

    setTimeout(() => {
      this.showWriting = true;
    }, 160);
  },
  methods: {
    rotateTitle() {
      if (this.currentTitleIndex === this.titles.length - 1) {
        this.currentTitleIndex = 0;
      } else {
        this.currentTitleIndex++;
      }
    },
    scrollToProjects() {
      document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth',
      });
    },
  },
};
</script>
