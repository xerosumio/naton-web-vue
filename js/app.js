function chatApp() {
    return {
        messages: [],
        userInput: '',
        isLoading: false,
        defaultMode: true,
        defaultMessages: [
            { text: "What is Naton Lab?", sender: "user" }, // Removed (Robot) prefix for cleaner look
            { text: "Naton Lab is an AI-powered company focused on utilizing the power of AI and machine learning to transform industries, automate workflows, and solve real-world problems.", sender: "bot" },
            { text: "What services do you offer?", sender: "user" },
            { text: "We offer AI consulting, custom ML model development, automation solutions, data analytics, and AI integration services tailored to your business needs.", sender: "bot" },
            { text: "How can AI benefit my business?", sender: "user" },
            { text: "AI can enhance efficiency, reduce costs, improve decision-making, automate repetitive tasks, and provide valuable insights from your data—ultimately giving you a competitive edge.", sender: "bot" }
        ],
        defaultMessageIndex: 0,
        typingSpeed: 30, // Increased from 25ms to 70ms for slower typing
        messageDelay: 1000, // Increased from 1000ms to 1500ms
        botThinkingDelay: 1000, // Increased from 1000ms to 1500ms
        userTypingIndex: 0,
        isTyping: false,
        apiResponseDelay: 3000, // Added explicit API response delay
        
        init() {
            // Clear any existing messages
            this.messages = [];
            
            // Start default conversation after a delay
            setTimeout(() => {
                this.startDefaultConversation();
            }, 1500);

            // Set up scroll handler
            this.$nextTick(() => {
                this.setupScrollHandler();
            });
        },
        
        setupScrollHandler() {
            const chatContainer = document.getElementById('chat-container');
            if (!chatContainer) return;
            
            // Use a throttled mutation observer to avoid excessive scrolling
            let scrollTimeout = null;
            const observer = new MutationObserver(() => {
                // Clear previous timeout to prevent rapid firing
                if (scrollTimeout) clearTimeout(scrollTimeout);
                
                // Set a new timeout to scroll after changes settle
                scrollTimeout = setTimeout(() => {
                    this.scrollToBottom();
                }, 100);
            });
            
            observer.observe(chatContainer, { 
                childList: true, 
                subtree: true,
                characterData: true
            });
        },
        
        startDefaultConversation() {
            this.defaultMode = true;
            this.defaultMessageIndex = 0;
            this.messages = []; // Clear any existing messages
            this.simulateNextDefaultMessageTyping();
        },
        
        // Simulate typing for default user messages in the input box
        simulateNextDefaultMessageTyping() {
            if (!this.defaultMode || this.defaultMessageIndex >= this.defaultMessages.length) {
                return;
            }
            
            const nextMessage = this.defaultMessages[this.defaultMessageIndex];
            
            // Only simulate typing for user messages
            if (nextMessage.sender === "user") {
                this.isTyping = true;
                this.userInput = '';
                this.userTypingIndex = 0;
                
                // Start typing animation for user input
                this.typeUserMessage(nextMessage.text);
            } else {
                // For bot messages, add directly with typing animation
                this.addBotMessageWithTyping(nextMessage.text);
            }
        },
        
        // Type user message character by character in input box
        typeUserMessage(message) {
            // Set a small initial delay before starting to type
            if (this.userTypingIndex === 0) {
                setTimeout(() => {
                    this.continueTypingUserMessage(message);
                }, 500); // Small delay before starting to type
            } else {
                this.continueTypingUserMessage(message);
            }
        },
        
        continueTypingUserMessage(message) {
            if (this.userTypingIndex < message.length) {
                // Add next character to input
                this.userInput += message.charAt(this.userTypingIndex);
                this.userTypingIndex++;
                
                // Schedule next character with more variability for natural typing
                const randomVariation = Math.random() * 50; // Add 0-50ms random variation
                
                // Add longer pause after punctuation
                const lastChar = message.charAt(this.userTypingIndex - 1);
                let delay = this.typingSpeed + randomVariation;
                if (['.', '!', '?', ',', ';', ':'].includes(lastChar)) {
                    delay += 200; // Extra pause after punctuation for user too
                }
                
                setTimeout(() => {
                    this.typeUserMessage(message);
                }, delay);
            } else {
                // Finished typing, schedule send action
                setTimeout(() => {
                    this.sendDefaultMessage();
                }, this.messageDelay);
            }
        },
        
        // Send the default message after typing animation
        sendDefaultMessage() {
            // Add the message to chat
            this.messages.push({
                text: this.userInput,
                sender: "user",
                id: Date.now() + this.defaultMessageIndex
            });
            
            // Clear input and update state
            this.userInput = '';
            this.isTyping = false;
            this.scrollToBottom();
            
            // Increment to the next message (which should be a bot message)
            this.defaultMessageIndex++;
            
            // Schedule bot response after thinking delay
            setTimeout(() => {
                // Process the next message (should be a bot message)
                if (this.defaultMessageIndex < this.defaultMessages.length) {
                    const botMessage = this.defaultMessages[this.defaultMessageIndex];
                    if (botMessage.sender === "bot") {
                        this.addBotMessageWithTyping(botMessage.text);
                    }
                }
            }, this.botThinkingDelay);
        },
        
        // Add bot message with typing animation
        addBotMessageWithTyping(messageText) {
            // Add empty bot message with typing indicator
            const botMessageIndex = this.messages.length;
            this.messages.push({
                text: "",
                sender: "bot",
                typing: true,
                id: Date.now() + this.defaultMessageIndex
            });
            
            this.scrollToBottom();
            
            // Add extra delay before bot starts typing to simulate thinking
            setTimeout(() => {
                // Animate typing the message character by character
                let charIndex = 0;
                const typeNextChar = () => {
                    if (charIndex < messageText.length) {
                        if (botMessageIndex < this.messages.length) {
                            // Add next character to the message
                            this.messages[botMessageIndex].text += messageText.charAt(charIndex);
                            charIndex++;
                            
                            // Add natural typing rhythm with pauses
                            let delay = this.typingSpeed;
                            
                            // Add longer pause after punctuation
                            const lastChar = messageText.charAt(charIndex - 1);
                            if (['.', '!', '?', ',', ';', ':'].includes(lastChar)) {
                                delay += 300; // Extra pause after punctuation
                            }
                            
                            // Add some randomness to typing speed
                            delay += Math.random() * 30;
                            
                            // Schedule next character
                            setTimeout(typeNextChar, delay);
                        }
                    } else {
                        // Done typing, remove typing indicator
                        if (botMessageIndex < this.messages.length) {
                            this.messages[botMessageIndex].typing = false;
                        }
                        
                        // Schedule next default message after delay
                        this.defaultMessageIndex++;
                        setTimeout(() => {
                            this.simulateNextDefaultMessageTyping();
                        }, this.messageDelay * 3); // Much longer pause after bot finishes (adjusted from 2x to 3x)
                    }
                    this.scrollToBottom();
                };
                
                // Start typing animation
                typeNextChar();
            }, this.botThinkingDelay);
        },
        
        // Modified to work with the new typing system
        sendMessage() {
            if (!this.userInput.trim() || this.isTyping) return;
            
            // Stop default conversation mode
            this.defaultMode = false;
            
            // Add user message
            this.messages.push({
                text: this.userInput,
                sender: "user",
                id: Date.now()
            });
            
            const userQuestion = this.userInput;
            this.userInput = '';
            this.isLoading = true;
            this.scrollToBottom();
            
            // Add bot message placeholder with an initial delay
            setTimeout(() => {
                // Add bot message placeholder
                const botMessageIndex = this.messages.length;
                this.messages.push({
                    text: "",
                    sender: 'bot',
                    typing: true,
                    id: Date.now() + 1
                });
                
                this.scrollToBottom();
                
                // Call API
                this.callOllamaApi(userQuestion)
                    .then(response => {
                        // Type out the bot response character by character
                        let responseText = response;
                        let charIndex = 0;
                        
                        const typeResponse = () => {
                            if (charIndex < responseText.length) {
                                if (botMessageIndex < this.messages.length) {
                                    // Add next character
                                    this.messages[botMessageIndex].text += responseText.charAt(charIndex);
                                    charIndex++;
                                    
                                    // Add natural typing rhythm with pauses
                                    let delay = this.typingSpeed;
                                    
                                    // Add longer pause after punctuation
                                    const lastChar = responseText.charAt(charIndex - 1);
                                    if (['.', '!', '?', ',', ';', ':'].includes(lastChar)) {
                                        delay += 300; // Extra pause after punctuation
                                    }
                                    
                                    // Add some randomness for natural feel
                                    delay += Math.random() * 30;
                                    
                                    setTimeout(typeResponse, delay);
                                }
                            } else {
                                // Done typing
                                if (botMessageIndex < this.messages.length) {
                                    this.messages[botMessageIndex].typing = false;
                                }
                                this.isLoading = false;
                            }
                            this.scrollToBottom();
                        };
                        
                        // Start typing the response
                        setTimeout(typeResponse, this.typingSpeed * 2);
                    })
                    .catch(error => {
                        console.error("Error calling Ollama API:", error);
                        if (botMessageIndex < this.messages.length) {
                            this.messages[botMessageIndex].text = "Sorry, I encountered an error. Please try again later.";
                            this.messages[botMessageIndex].typing = false;
                        }
                        this.scrollToBottom();
                        this.isLoading = false;
                    });
            }, this.botThinkingDelay * 1.5); // Increased thinking delay for custom messages
        },
        
        callOllamaApi(question) {
            // Fallback to simulated responses with increased delay
            return new Promise((resolve) => {
                setTimeout(() => {
                    if (question.toLowerCase().includes("naton") || question.toLowerCase().includes("company")) {
                        resolve("Naton Lab specializes in developing cutting-edge AI solutions tailored to business needs. Our team of experts combines deep technical knowledge with industry insights to deliver transformative AI technologies.");
                    } else if (question.toLowerCase().includes("service") || question.toLowerCase().includes("offer")) {
                        resolve("Our services include AI consulting, custom machine learning model development, process automation, predictive analytics, natural language processing solutions, and AI system integration.");
                    } else {
                        resolve("Thank you for your question. At Naton Lab, we're committed to providing AI excellence. Our team would be happy to discuss this in more detail. Would you like to schedule a consultation?");
                    }
                }, this.apiResponseDelay); // Using configurable API response delay
            });
        },
        
        scrollToBottom() {
            setTimeout(() => {
                const container = document.getElementById('chat-container');
                if (container) {
                    container.scrollTop = container.scrollHeight + 1000;
                }
            }, 100);
        }
    };
}

// Add utility function for debugging
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    // Create helper function to debug the chat window state
    window.debugChat = function() {
        const container = document.getElementById('chat-container');
        console.log('Chat container:', container);
        console.log('Messages:', container ? container.querySelectorAll('.chat').length : 0);
        console.log('scrollHeight:', container ? container.scrollHeight : 'N/A');
        console.log('clientHeight:', container ? container.clientHeight : 'N/A');
        console.log('scrollTop:', container ? container.scrollTop : 'N/A');
    };
    
    // Helper to force scroll
    window.forceScroll = function() {
        const container = document.getElementById('chat-container');
        if (container) {
            const messages = container.querySelectorAll('.chat');
            if (messages.length > 0) {
                const lastMessage = messages[messages.length - 1];
                lastMessage.scrollIntoView({ behavior: 'smooth', block: 'end' });
                return 'Scrolled to last message';
            } else {
                container.scrollTop = container.scrollHeight;
                return 'No messages found, scrolled container';
            }
        }
        return 'Container not found';
    };
});
