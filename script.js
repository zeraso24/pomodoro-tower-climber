// Main functionality
document.addEventListener('DOMContentLoaded', function() {
    const settingsIcon = document.querySelector('.settings-icon');
    const closeButton = document.querySelector('.close-button');
    const settingsModal = document.querySelector('.settings-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const frogIcon = document.querySelector('.frog-icon');
    const appContainer = document.querySelector('.app-container');
    const topSection = document.querySelector('.top-section');
    const middleSection = document.querySelector('.middle-section');
    const bottomSection = document.querySelector('.bottom-section');
    let interfaceVisible = true;
    
    // Settings modal toggle
    settingsIcon.addEventListener('click', function() {
        settingsModal.style.display = 'block';
        modalOverlay.style.display = 'block';
    });
    
    closeButton.addEventListener('click', function() {
        settingsModal.style.display = 'none';
        modalOverlay.style.display = 'none';
    });
    
    modalOverlay.addEventListener('click', function() {
        settingsModal.style.display = 'none';
        modalOverlay.style.display = 'none';
    });
    
    // Tab switching
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            // In a real app, you would show/hide the corresponding content here
        });
    });
    
    // Toggle interface visibility when clicking the frog icon
    frogIcon.addEventListener('click', function() {
        interfaceVisible = !interfaceVisible;
        
        if (interfaceVisible) {
            // Show interface with transparent backgrounds
            document.body.classList.remove('hide-overlay');
            
            middleSection.style.display = 'flex';
            middleSection.style.opacity = '1';
            middleSection.style.background = 'transparent';
            middleSection.style.backdropFilter = 'blur(8px)';
            middleSection.style.webkitBackdropFilter = 'blur(8px)';
            
            bottomSection.style.display = 'block';
            bottomSection.style.opacity = '1';
            bottomSection.style.background = 'transparent';
            bottomSection.style.backdropFilter = 'blur(8px)';
            bottomSection.style.webkitBackdropFilter = 'blur(8px)';
            
            topSection.style.background = 'transparent';
            topSection.style.backdropFilter = 'blur(8px)';
            topSection.style.webkitBackdropFilter = 'blur(8px)';
            
            // Add slight blur to background
            document.querySelector('.background').style.filter = 'blur(3px)';
            
            // Background zoomed element has been removed
        } else {
            // Hide interface completely to reveal background for animations
            document.body.classList.add('hide-overlay');
            
            middleSection.style.display = 'none';
            middleSection.style.opacity = '0';
            
            bottomSection.style.display = 'none';
            bottomSection.style.opacity = '0';
            
            topSection.style.backdropFilter = 'none';
            topSection.style.webkitBackdropFilter = 'none';
            topSection.style.background = 'transparent';
            
            // Remove blur from background
            document.querySelector('.background').style.filter = 'none';
            
            // Background zoomed element has been removed
        }
    });
    
    // Background zoomed element has been removed

    // Generate progress bars
    const progressContainer = document.querySelector('.progress-container');
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleDateString('en-US', { month: 'long' });
    const currentYear = currentDate.getFullYear();
    const daysInMonth = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate();
    
    // Update the date label
    document.querySelector('.date-label').textContent = currentMonth + ' ' + currentYear;
    
    // Create day numbers container
    const dayNumbersContainer = document.createElement('div');
    dayNumbersContainer.className = 'day-numbers';
    
    // Create bars container
    const barsContainer = document.createElement('div');
    barsContainer.className = 'bars-container';
    
    // First day
    const firstDayNumber = document.createElement('div');
    firstDayNumber.className = 'day-number';
    firstDayNumber.textContent = '1';
    firstDayNumber.style.marginLeft = '2px';
    dayNumbersContainer.appendChild(firstDayNumber);
    
    // Middle day
    const middleDayNumber = document.createElement('div');
    middleDayNumber.className = 'day-number';
    middleDayNumber.textContent = Math.ceil(daysInMonth / 2);
    middleDayNumber.style.position = 'absolute';
    middleDayNumber.style.left = '50%';
    middleDayNumber.style.transform = 'translateX(-50%)';
    dayNumbersContainer.appendChild(middleDayNumber);
    
    // Last day
    const lastDayNumber = document.createElement('div');
    lastDayNumber.className = 'day-number';
    lastDayNumber.textContent = daysInMonth;
    lastDayNumber.style.marginRight = '2px';
    dayNumbersContainer.appendChild(lastDayNumber);
    
    // Generate progress bars for each day
    for (let i = 1; i <= daysInMonth; i++) {
        const bar = document.createElement('div');
        bar.className = 'progress-bar';
        
        const indicator = document.createElement('div');
        indicator.className = 'progress-indicator';
        
        // For each day, create up to 16 cubes (max Pomodoro sessions per day)
        // For demo purposes, we'll randomly generate between 0-16 completed sessions for past days
        const maxPomodoros = 16;
        let completedPomodoros = 0;
        
        // Days up to current day have some completed Pomodoros
        if (i <= 17) { // Using 17 as example of "today" for the demo
            // Random number of completed Pomodoros for past days
            completedPomodoros = Math.floor(Math.random() * (maxPomodoros + 1));
        }
        
        // Create all 16 potential Pomodoro cubes in normal order
        for (let j = 0; j < maxPomodoros; j++) {
            const cube = document.createElement('div');
            cube.className = 'cube';
            
            // Mark completed cubes (from bottom up)
            // With flex-direction: column-reverse, the first cubes added will be at the bottom
            if (j < completedPomodoros) {
                cube.classList.add('completed');
            }
            
            indicator.appendChild(cube);
        }
        
        // Create tooltip with day information
        const tooltip = document.createElement('div');
        tooltip.className = 'progress-tooltip';
        
        // Create date object for this day
        const dayDate = new Date(currentYear, currentDate.getMonth(), i);
        
        // Format day as "Mon 21"
        const dayOfWeek = dayDate.toLocaleDateString('en-US', { weekday: 'short' });
        const dayOfMonth = dayDate.getDate();
        const formattedDate = `${dayOfWeek} ${dayOfMonth}`;
        
        // Add completed/total info
        tooltip.textContent = `${formattedDate}: ${completedPomodoros}/${maxPomodoros} sessions`;
        
        bar.appendChild(tooltip);
        bar.appendChild(indicator);
        barsContainer.appendChild(bar);
    }
    
    // Add both containers to the progress container
    progressContainer.appendChild(dayNumbersContainer);
    progressContainer.appendChild(barsContainer);
});
