<template>
  <section id="home" class="h-screen bg-gray-100 flex items-center">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <!-- Text Content -->
        <div class="w-full md:w-1/2 mb-12 md:mb-0">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
            Naton Lab: AI-Powered Solutions for a Smarter World.
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 mb-8">
            We innovate with artificial intelligence, robotics, and IoT to transform industries and solve real-world challenges.
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#projects" class="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300 text-center">
              Explore Our Projects
            </a>
            <a href="#contact" class="border border-blue-500 text-blue-500 px-6 py-3 rounded hover:bg-blue-100 transition duration-300 text-center">
              Contact Us
            </a>
          </div>
        </div>
        
        <!-- Image/Animation Placeholder -->
        <div class="w-full md:w-1/2 flex justify-center">
          <div class="rounded-lg bg-gray-200 w-full h-96 flex items-center justify-center">
            <svg class="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path>
            </svg>
            <p class="ml-2 text-gray-500">AI & Robotics Image</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>
