document.addEventListener('DOMContentLoaded', (): void => {
  // Get all nail service cards
  const cards = document.querySelectorAll('[data-nail-card]') as NodeListOf<HTMLElement>
  
  // Global click handler to close expanded cards when clicking outside
  const handleOutsideClick = (e: Event): void => {
    cards.forEach((card): void => {
      const toggleBtn = card.querySelector('.toggle-btn') as HTMLButtonElement
      const isExpanded = toggleBtn?.getAttribute('aria-expanded') === 'true'
      
      if(isExpanded && !card.contains(e.target as Node)) {
        // Find and trigger the card's collapse function
        const collapseEvent = new CustomEvent('collapse')
        card.dispatchEvent(collapseEvent);
      }
    })
  }
  
  // Add single global click listener
  document.addEventListener('click', handleOutsideClick)
  
  cards.forEach((card): void => {
    const toggleBtn = card.querySelector('.toggle-btn') as HTMLButtonElement
    const description = card.querySelector('.description') as HTMLParagraphElement
    const arrowIcon = toggleBtn?.querySelector('i') as HTMLElement
    const labelSpan = toggleBtn?.querySelector('.label') as HTMLSpanElement
    
    if(!toggleBtn || !description || !arrowIcon || !labelSpan) {
      console.warn('Required elements not found in nail service card')
      return
    }
    
    // Set initial state
    let isExpanded = false;
    
    const updateCardState = (expanded: boolean) => {
      isExpanded = expanded;
      
      // Update ARIA attributes
      toggleBtn.setAttribute('aria-expanded', expanded.toString());
      
      if(expanded) {
        description.style.overflow = 'hidden'
        description.style.maxHeight = '0' // Reset first
        void description.offsetHeight // Force reflow
        const height = description.scrollHeight
        description.style.maxHeight = `${height}px`

        labelSpan.textContent = 'Show less'
        arrowIcon.style.transform = 'rotate(180deg)'
        card.classList.add('expanded')

        setTimeout((): void => {
          description.setAttribute('aria-live', 'polite')
        }, 300)
      } else {
        // Collapse the description
        description.style.maxHeight = '0'
        // Update button text and icon
        labelSpan.textContent = 'Learn more'
        arrowIcon.style.transform = 'rotate(0deg)'
        // Remove expanded class
        card.classList.remove('expanded')
        // Hide after transition completes
        setTimeout((): void => {
          description.removeAttribute('aria-live')
        }, 500) // Match the CSS transition duration
      }
    } // End of updateCardState function
    
    // Handle button click
    toggleBtn.addEventListener('click', (e: MouseEvent): void => {
      e.preventDefault()
      e.stopPropagation() // Prevent event bubbling
      updateCardState(!isExpanded)
    })
    
    // Handle keyboard navigation (Enter and Space)
    toggleBtn.addEventListener('keydown', (e: KeyboardEvent): void => {
      if(e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        e.stopPropagation() // Prevent event bubbling
        updateCardState(!isExpanded)
      }
    })
    
    // Handle escape key to collapse when expanded
    toggleBtn.addEventListener('keydown', (e: KeyboardEvent): void => {
      if(e.key === 'Escape' && isExpanded) {
        updateCardState(false)
      }
    })
    
    // Listen for collapse events from outside click handler
    card.addEventListener('collapse', (): void => {
      if(isExpanded) {
        updateCardState(false)
      }
    })
  }) // End of forEach loop on cards elements

})