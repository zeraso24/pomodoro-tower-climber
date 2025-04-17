// Main functionality
document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const frogIcon = document.querySelector('.frog-icon');
    const topSection = document.querySelector('.top-section');
    const middleSection = document.querySelector('.middle-section');
    const bottomSection = document.querySelector('.bottom-section');
    const animationContainer = document.querySelector('.animation-container');
    const settingsIcon = document.querySelector('.settings-icon');
    const settingsModal = document.querySelector('.settings-modal');
    const closeButton = document.querySelector('.settings-modal .close-button');
    const modalOverlay = document.querySelector('.modal-overlay');
    const tabs = document.querySelectorAll('.tab');
    const addGoalIcon = document.querySelector('.add-goal-icon');
    const goalModal = document.querySelector('.goal-modal');
    const goalCloseButton = document.querySelector('.goal-modal .close-button');
    const createGoalButton = document.querySelector('.create-goal-button');
    const goalNameInput = document.querySelector('.goal-input');
    const colorOptions = document.querySelectorAll('.color-option');
    const goalPrevArrow = document.querySelector('.goal-arrow.prev');
    const goalNextArrow = document.querySelector('.goal-arrow.next');
    const goalName = document.querySelector('.goal-name');
    const appContainer = document.querySelector('.app-container');

    // Goal management
    let goals = [
        { name: 'FINISH UI', color: '#aff3af' },
        { name: 'LEARN JS', color: '#ffce9d' },
        { name: 'READ BOOK', color: '#a7c5eb' }
    ];
    let currentGoalIndex = 0;
    let selectedColor = '#aff3af';

    // Initialize color selection
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            this.classList.add('selected');
            
            // Update selected color
            selectedColor = this.getAttribute('data-color');
        });
    });

    // Select the first color option by default
    colorOptions[0].classList.add('selected');

    // Toggle interface visibility when frog icon is clicked
    frogIcon.addEventListener('click', function() {
        const isVisible = !middleSection.classList.contains('hidden');
        
        if (isVisible) {
            // Hide all interface elements except minimal top section
            topSection.classList.add('minimal');
            middleSection.classList.add('hidden');
            bottomSection.classList.add('hidden');
            
            // Add a class to completely hide the timer and calendar
            appContainer.classList.add('background-only');
            
            // Show animation
            animationContainer.style.display = 'block';
            
            // Show the clean background
            document.body.classList.add('hide-overlay');
        } else {
            // Show all interface elements
            topSection.classList.remove('minimal');
            middleSection.classList.remove('hidden');
            bottomSection.classList.remove('hidden');
            
            // Remove the class that hides the timer and calendar
            appContainer.classList.remove('background-only');
            
            // Hide animation
            animationContainer.style.display = 'none';
            
            // Show the overlay
            document.body.classList.remove('hide-overlay');
        }
    });

    // Open settings modal
    settingsIcon.addEventListener('click', function() {
        settingsModal.style.display = 'block';
        modalOverlay.style.display = 'block';
    });

    // Close settings modal
    closeButton.addEventListener('click', function() {
        settingsModal.style.display = 'none';
        modalOverlay.style.display = 'none';
    });

    // Open goal creation modal
    addGoalIcon.addEventListener('click', function() {
        goalModal.style.display = 'block';
        modalOverlay.style.display = 'block';
        goalNameInput.focus();
    });

    // Close goal modal
    goalCloseButton.addEventListener('click', function() {
        goalModal.style.display = 'none';
        modalOverlay.style.display = 'none';
        resetGoalForm();
    });

    // Close modals when clicking overlay
    modalOverlay.addEventListener('click', function() {
        settingsModal.style.display = 'none';
        goalModal.style.display = 'none';
        modalOverlay.style.display = 'none';
        resetGoalForm();
    });

    // Tab switching in settings
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Update content based on selected tab
            // This would be implemented based on the content for each tab
        });
    });

    // Create new goal
    createGoalButton.addEventListener('click', function() {
        const name = goalNameInput.value.trim();
        if (name) {
            // Add new goal to the array
            goals.push({
                name: name.toUpperCase(),
                color: selectedColor
            });
            
            // Switch to the new goal
            currentGoalIndex = goals.length - 1;
            updateGoalDisplay();
            
            // Close the modal
            goalModal.style.display = 'none';
            modalOverlay.style.display = 'none';
            resetGoalForm();
        }
    });

    // Navigate to previous goal
    goalPrevArrow.addEventListener('click', function() {
        if (goals.length > 1) {
            currentGoalIndex = (currentGoalIndex - 1 + goals.length) % goals.length;
            updateGoalDisplay();
        }
    });

    // Navigate to next goal
    goalNextArrow.addEventListener('click', function() {
        if (goals.length > 1) {
            currentGoalIndex = (currentGoalIndex + 1) % goals.length;
            updateGoalDisplay();
        }
    });

    // Update the goal display
    function updateGoalDisplay() {
        const currentGoal = goals[currentGoalIndex];
        goalName.textContent = currentGoal.name;
        goalName.style.color = currentGoal.color;
        
        // Update navigation arrows visibility
        if (goals.length <= 1) {
            goalPrevArrow.style.visibility = 'hidden';
            goalNextArrow.style.visibility = 'hidden';
        } else {
            goalPrevArrow.style.visibility = 'visible';
            goalNextArrow.style.visibility = 'visible';
        }
    }

    // Reset the goal creation form
    function resetGoalForm() {
        goalNameInput.value = '';
        colorOptions.forEach(opt => opt.classList.remove('selected'));
        colorOptions[0].classList.add('selected');
        selectedColor = colorOptions[0].getAttribute('data-color');
    }

    // Initialize goal display
    updateGoalDisplay();
    // Initialize animation container (hidden by default)
    document.querySelector('.animation-container').style.display = 'none';

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
