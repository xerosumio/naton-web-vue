<template>
  <section id="contact" class="py-16 bg-gray-900 text-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="mb-12 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Get in Touch with Naton Lab</h2>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name"
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
                required
              >
            </div>
            
            <div>
              <label for="email" class="block mb-2 text-sm font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email"
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
                required
              >
            </div>
            
            <div>
              <label for="company" class="block mb-2 text-sm font-medium">Company Name</label>
              <input 
                type="text" 
                id="company" 
                v-model="formData.company"
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your company"
              >
            </div>
            
            <div>
              <label for="message" class="block mb-2 text-sm font-medium">Message</label>
              <textarea 
                id="message" 
                v-model="formData.message"
                rows="5" 
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              class="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <!-- Contact Details and Map -->
        <div class="space-y-8">
          <!-- Contact Details -->
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4">Contact Details</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="text-blue-400 mr-3">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-gray-400">Phone</h4>
                  <p>+852 5938 3283</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="text-blue-400 mr-3">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-gray-400">Email</h4>
                  <p>info@natonlab.com</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="text-blue-400 mr-3">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-gray-400">Office Location</h4>
                  <p>Hong Kong Science Park, New Territories, Hong Kong</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Google Maps Iframe Placeholder -->
          <div class="bg-gray-800 rounded-lg overflow-hidden h-64">
            <!-- Replace this with an actual Google Maps embed -->
            <div class="w-full h-full bg-gray-700 flex items-center justify-center">
              <div class="text-center p-4">
                <svg class="w-10 h-10 text-gray-600 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                </svg>
                <p class="text-gray-400">Google Maps will be embedded here</p>
                <p class="text-gray-500 text-sm mt-2">Replace with: &lt;iframe src="https://maps.google.com/maps?q=hong+kong+science+park&t=&z=13&ie=UTF8&iwloc=&output=embed" class="w-full h-full border-0"&gt;&lt;/iframe&gt;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        company: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // This would typically send the form data to a server
      console.log('Form submitted with:', this.formData);
      // Reset form after submission
      this.formData = {
        name: '',
        email: '',
        company: '',
        message: ''
      };
      // Show success message (you'd implement this)
      alert('Thank you for your message! We will get back to you shortly.');
    }
  }
}
</script>
