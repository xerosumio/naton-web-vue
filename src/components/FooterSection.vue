<template>
  <footer class="bg-gray-900 text-gray-400">
    <!-- Main Footer Content -->
    <div class="container mx-auto px-4 py-10">
      <div class="flex flex-col md:flex-row justify-between">
        <!-- Logo and Description -->
        <div class="mb-8 md:mb-0 md:w-1/3">
          <h3 class="text-xl font-bold text-white mb-4">Naton Lab</h3>
          <p class="mb-4">AI-powered solutions for a smarter world. Specialists in robotics, IoT, and AI vision technologies.</p>
          <!-- Social Media Links -->
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div class="md:w-1/4 mb-8 md:mb-0">
          <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-white transition-colors duration-300">Home</a></li>
            <li><a href="#about" class="hover:text-white transition-colors duration-300">About Us</a></li>
            <li><a href="#projects" class="hover:text-white transition-colors duration-300">Our Projects</a></li>
            <li><a href="#technology" class="hover:text-white transition-colors duration-300">Our Technology</a></li>
            <li><a href="#contact" class="hover:text-white transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
        
        <!-- Contact Information -->
        <div class="md:w-1/3">
          <h3 class="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <address class="not-italic mb-4">
            <p>Hong Kong Science Park</p>
            <p>New Territories, Hong Kong</p>
          </address>
          <p class="mb-2">Phone: +852 5938 3283</p>
          <p>Email: info@natonlab.com</p>
        </div>
      </div>
    </div>
    
    <!-- Copyright Bar -->
    <div class="border-t border-gray-800 py-6">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p>© 2025 Naton Lab Limited. All rights reserved.</p>
        <div class="mt-4 md:mt-0">
          <a href="#" class="text-gray-400 hover:text-white mx-2 transition-colors duration-300">Privacy Policy</a>
          <a href="#" class="text-gray-400 hover:text-white mx-2 transition-colors duration-300">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>
