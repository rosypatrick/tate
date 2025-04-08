// Marketing Integration Scripts

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  initChatFunctionality();
  initPopupFunctionality();
  initFormsTracking();
  initNewsletterFunctionality();
});

// Live Chat Functionality
function initChatFunctionality() {
  const chatButton = document.getElementById('chat-button');
  const chatPopup = document.getElementById('chat-popup');
  const closeChat = document.getElementById('close-chat');
  const chatInput = document.getElementById('chat-input');
  const sendMessage = document.getElementById('send-message');
  const chatMessages = document.querySelector('.chat-messages');
  
  if (!chatButton || !chatPopup) return;
  
  // Toggle chat window
  chatButton.addEventListener('click', function() {
    chatPopup.style.display = chatPopup.style.display === 'block' ? 'none' : 'block';
    if (chatPopup.style.display === 'block') {
      chatInput.focus();
      
      // Log chat open event
      logMarketingEvent('chat_opened', {
        page: window.location.pathname
      });
    }
  });
  
  // Close chat
  closeChat.addEventListener('click', function() {
    chatPopup.style.display = 'none';
    
    // Log chat closed event
    logMarketingEvent('chat_closed', {
      chat_duration: Math.floor(Math.random() * 120) // Simulated duration in seconds
    });
  });
  
  // Send message functionality
  sendMessage.addEventListener('click', sendChatMessage);
  chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendChatMessage();
    }
  });
  
  function sendChatMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Create user message element
    const userMessageEl = document.createElement('div');
    userMessageEl.className = 'message user-message';
    userMessageEl.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(userMessageEl);
    
    // Log message sent event
    logMarketingEvent('chat_message_sent', {
      message_length: message.length
    });
    
    // Clear input
    chatInput.value = '';
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Simulate response after delay
    setTimeout(function() {
      const responseMessage = document.createElement('div');
      responseMessage.className = 'message system-message';
      responseMessage.innerHTML = `<p>Thanks for your message. A member of our team will respond shortly. For immediate assistance, please call our support line at +44 (0) 1482 781701.</p>`;
      chatMessages.appendChild(responseMessage);
      
      // Scroll to bottom again
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
  }
}

// Popup Lead Form Functionality
function initPopupFunctionality() {
  const popupOverlay = document.getElementById('lead-popup-overlay');
  const closePopup = document.getElementById('close-popup');
  const leadForm = document.querySelector('.lead-form');
  
  if (!popupOverlay || !closePopup) return;
  
  // Set timer for popup appearance
  let popupShown = sessionStorage.getItem('popupShown');
  
  if (!popupShown) {
    setTimeout(function() {
      popupOverlay.style.display = 'flex';
      
      // Log popup shown event
      logMarketingEvent('lead_popup_shown', {
        page: window.location.pathname,
        time_on_page: '30 seconds'
      });
      
      // Store in session to avoid showing again in this session
      sessionStorage.setItem('popupShown', 'true');
    }, 30000); // Show after 30 seconds
  }
  
  // Close popup
  closePopup.addEventListener('click', function() {
    popupOverlay.style.display = 'none';
    
    // Log popup closed event
    logMarketingEvent('lead_popup_closed', {
      form_filled: false
    });
  });
  
  // Submit form
  if (leadForm) {
    leadForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const name = document.getElementById('popup-name').value;
      const email = document.getElementById('popup-email').value;
      
      // Log form submission
      logMarketingEvent('lead_form_submitted', {
        name_provided: !!name,
        email_provided: !!email
      });
      
      // Display thank you message
      this.innerHTML = `
        <div class="thank-you-message">
          <i class="fas fa-check-circle" style="font-size: 3rem; color: #10b981; margin-bottom: 1rem;"></i>
          <h3>Thank You!</h3>
          <p>We've received your request and will contact you within 24 hours with a personalized quote.</p>
        </div>
      `;
      
      // Close popup after delay
      setTimeout(function() {
        popupOverlay.style.display = 'none';
      }, 3000);
    });
  }
}

// Forms Tracking
function initFormsTracking() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      if (this.classList.contains('newsletter-form')) return; // Handled separately
      if (this.classList.contains('lead-form')) return; // Handled separately
      
      e.preventDefault();
      
      // Identify form type
      let formType = 'unknown';
      if (this.closest('.content-offer')) {
        formType = 'content_download';
      } else if (this.closest('#contact')) {
        formType = 'contact_form';
      }
      
      // Log form submission
      logMarketingEvent(`${formType}_submitted`, {
        page: window.location.pathname
      });
      
      // Show success message
      const submitButton = this.querySelector('button[type="submit"]');
      const originalText = submitButton.innerText;
      submitButton.innerText = 'Submitted!';
      
      // Reset form
      this.reset();
      
      // Reset button text after delay
      setTimeout(() => {
        submitButton.innerText = originalText;
      }, 2000);
    });
  });
}

// Newsletter Functionality
function initNewsletterFunctionality() {
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (!newsletterForm) return;
  
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    const consent = this.querySelector('#newsletter-consent').checked;
    
    // Log newsletter signup
    logMarketingEvent('newsletter_signup', {
      marketing_consent: consent
    });
    
    // Change button text
    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.innerText = 'Subscribed!';
    
    // Reset form
    this.reset();
    
    // Reset button text after delay
    setTimeout(() => {
      submitButton.innerText = 'Subscribe';
    }, 2000);
  });
}

// Analytics Helper Function
function logMarketingEvent(eventName, params) {
  console.log(`Marketing Event: ${eventName}`, params);
  
  // In a real implementation, this would send data to your analytics platform
  // Example for Google Analytics 4:
  // gtag('event', eventName, params);
  
  // Example for marketing automation platform (integration code would be provided by the platform)
  // window.ma_tracker.trackEvent(eventName, params);
}

// Exit Intent Popup (shown when user tries to leave the site)
function initExitIntentPopup() {
  let hasShownExitPopup = false;
  
  document.addEventListener('mouseleave', function(e) {
    // Only trigger when mouse leaves at the top of the page
    if (!hasShownExitPopup && e.clientY < 10) {
      hasShownExitPopup = true;
      
      // In a real implementation, this would show a popup with a lead form
      console.log('Exit intent detected - would show popup');
      
      // Log exit intent event
      logMarketingEvent('exit_intent_triggered', {
        page: window.location.pathname,
        scroll_percentage: getScrollPercentage()
      });
    }
  });
  
  function getScrollPercentage() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return Math.round((scrollTop / scrollHeight) * 100);
  }
}

// Initialize exit intent popup
initExitIntentPopup();
