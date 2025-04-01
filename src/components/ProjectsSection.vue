<template>
  <section id="projects" class="py-16 bg-gray-100">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="mb-12 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Projects</h2>
      </div>
      
      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Project Card 1: Agile Robot -->
        <div class="bg-gray-800 text-white rounded-lg p-6 hover:shadow-lg transition duration-300 flex flex-col h-full">
          <!-- Project Image Placeholder -->
          <div class="bg-gray-700 rounded-lg h-48 mb-6 flex items-center justify-center overflow-hidden">
            <svg class="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
            </svg>
          </div>
          
          <!-- Project Content -->
          <h3 class="text-xl font-bold mb-3">Agile Robot</h3>
          <p class="text-gray-300 flex-grow">
            An AI-powered inventory robot with RFID and real-time tracking.
          </p>
          
          <!-- Project Link -->
          <button class="mt-4 text-blue-400 hover:text-blue-300 inline-flex items-center">
            Learn more
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
        
        <!-- Project Card 2: Smart Fish -->
        <div class="bg-gray-800 text-white rounded-lg p-6 hover:shadow-lg transition duration-300 flex flex-col h-full">
          <!-- Project Image Placeholder -->
          <div class="bg-gray-700 rounded-lg h-48 mb-6 flex items-center justify-center overflow-hidden">
            <svg class="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
            </svg>
          </div>
          
          <!-- Project Content -->
          <h3 class="text-xl font-bold mb-3">Smart Fish</h3>
          <p class="text-gray-300 flex-grow">
            A robotic fish that detects microplastics and monitors water quality.
          </p>
          
          <!-- Project Link -->
          <button class="mt-4 text-blue-400 hover:text-blue-300 inline-flex items-center">
            Learn more
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
        
        <!-- Project Card 3: AI Vision Solutions -->
        <div class="bg-gray-800 text-white rounded-lg p-6 hover:shadow-lg transition duration-300 flex flex-col h-full">
          <!-- Project Image Placeholder -->
          <div class="bg-gray-700 rounded-lg h-48 mb-6 flex items-center justify-center overflow-hidden">
            <svg class="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          
          <!-- Project Content -->
          <h3 class="text-xl font-bold mb-3">AI Vision Solutions</h3>
          <p class="text-gray-300 flex-grow">
            Advanced AI-powered facial and hand gesture recognition systems.
          </p>
          
          <!-- Project Link -->
          <button class="mt-4 text-blue-400 hover:text-blue-300 inline-flex items-center">
            Learn more
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection'
}
</script>
