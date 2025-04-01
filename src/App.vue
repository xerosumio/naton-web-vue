<template>
  <div id="app" class="font-sans">
    <Header />
    <main>
      <HeroSection id="home" />
      <AboutSection id="about" />
      <ProjectsSection id="projects" />
      <TechnologySection id="technology" />
      <ContactSection id="contact" />
    </main>
    <FooterSection />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import TechnologySection from './components/TechnologySection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    Header,
    HeroSection,
    AboutSection,
    ProjectsSection,
    TechnologySection,
    ContactSection,
    FooterSection
  },
  mounted() {
    // Add smooth scrolling behavior
    this.initSmoothScrolling();
  },
  methods: {
    initSmoothScrolling() {
      // Get all links with anchors
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return; // Skip if it's just "#"
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            // Smooth scroll to the element
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            
            // Close mobile menu if open
            const mobileMenuOpen = document.querySelector('.md\\:hidden:not(.hidden)');
            if (mobileMenuOpen) {
              // Find the button to toggle the mobile menu and click it
              const menuToggleButton = document.querySelector('button[class*="text-white focus:outline-none"]');
              if (menuToggleButton) {
                menuToggleButton.click();
              }
            }
          }
        });
      });
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  @apply bg-white text-gray-900;
}
</style>
