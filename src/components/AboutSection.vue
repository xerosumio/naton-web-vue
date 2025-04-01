<template>
  <section id="about" class="bg-gray-900 text-white py-16">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="mb-12 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">About Naton Lab</h2>
        <p class="max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
          Naton Lab Limited is a leader in AI-powered solutions, specializing in robotics, IoT, and AI vision technologies. 
          Our mission is to create innovative solutions that transform industries and solve real-world challenges.
        </p>
      </div>
      
      <!-- Core Values - Three Column Layout -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Innovation Column -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div class="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white mb-6 mx-auto">
            <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-center mb-3">Innovation</h3>
          <p class="text-center text-gray-300">
            Pioneering the latest advancements in AI and robotics.
          </p>
        </div>
        
        <!-- Expertise Column -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div class="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white mb-6 mx-auto">
            <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-center mb-3">Expertise</h3>
          <p class="text-center text-gray-300">
            Decades of experience in retail, manufacturing, and industrial sectors.
          </p>
        </div>
        
        <!-- Collaboration Column -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div class="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white mb-6 mx-auto">
            <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-center mb-3">Collaboration</h3>
          <p class="text-center text-gray-300">
            Partnering with businesses to deliver tailored solutions.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>
