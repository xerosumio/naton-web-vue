<template>
  <header class="sticky top-0 bg-gray-900 text-white shadow-lg z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#home">
            <!-- Inline SVG Logo (no external file dependency) -->
            <svg width="120" height="40" viewBox="0 0 200 80" class="h-10">
              <rect width="200" height="80" fill="#2d3748"/>
              <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">Naton Lab</text>
            </svg>
          </a>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <a href="#home" class="hover:text-blue-400 transition duration-300">Home</a>
          <a href="#about" class="hover:text-blue-400 transition duration-300">About Us</a>
          <a href="#projects" class="hover:text-blue-400 transition duration-300">Our Projects</a>
          <a href="#technology" class="hover:text-blue-400 transition duration-300">Our Technology</a>
          <a href="#contact" class="hover:text-blue-400 transition duration-300">Contact</a>
        </nav>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="text-white focus:outline-none">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 space-y-3">
        <a href="#home" class="block hover:text-blue-400 transition duration-300 py-2">Home</a>
        <a href="#about" class="block hover:text-blue-400 transition duration-300 py-2">About Us</a>
        <a href="#projects" class="block hover:text-blue-400 transition duration-300 py-2">Our Projects</a>
        <a href="#technology" class="block hover:text-blue-400 transition duration-300 py-2">Our Technology</a>
        <a href="#contact" class="block hover:text-blue-400 transition duration-300 py-2">Contact</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    }
  }
}
</script>
