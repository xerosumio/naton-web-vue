<template>
  <section id="technology" class="py-16 bg-gray-900 text-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="mb-12 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Our Technology</h2>
      </div>
      
      <!-- Two-column layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <!-- Left Column: Technology List -->
        <div>
          <ul class="space-y-6">
            <li class="flex items-start">
              <div class="bg-blue-500 p-2 rounded-full mr-4 mt-1">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">AI Vision</h3>
                <p class="text-gray-300">Advanced image recognition and analysis.</p>
              </div>
            </li>
            
            <li class="flex items-start">
              <div class="bg-blue-500 p-2 rounded-full mr-4 mt-1">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Robotics</h3>
                <p class="text-gray-300">Autonomous navigation and task automation.</p>
              </div>
            </li>
            
            <li class="flex items-start">
              <div class="bg-blue-500 p-2 rounded-full mr-4 mt-1">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">IoT</h3>
                <p class="text-gray-300">Smart sensors for real-time data collection.</p>
              </div>
            </li>
            
            <li class="flex items-start">
              <div class="bg-blue-500 p-2 rounded-full mr-4 mt-1">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">RFID</h3>
                <p class="text-gray-300">Precise inventory and location tracking.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <!-- Right Column: Illustration/Diagram Placeholder -->
        <div class="flex justify-center items-center">
          <div class="bg-gray-800 rounded-lg p-6 w-full h-96 flex flex-col items-center justify-center border border-gray-700">
            <svg class="w-24 h-24 text-gray-600 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd"></path>
            </svg>
            <p class="text-gray-400 text-center">Illustration of AI-powered systems in action</p>
            <p class="text-gray-500 text-sm text-center mt-2">Add your technology diagram or animation here</p>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TechnologySection'
}
</script>
