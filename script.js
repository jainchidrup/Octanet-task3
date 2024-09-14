// script.js
function addWorkout() {
    const workoutType = document.getElementById('workoutType').value;
    const duration = document.getElementById('duration').value;

    if (workoutType && duration) {
        const workoutList = document.getElementById('workoutList');
        const workoutItem = document.createElement('li');
        workoutItem.textContent = `${workoutType} - ${duration} minutes`;
        workoutList.appendChild(workoutItem);

        // Clear input fields
        document.getElementById('workoutType').value = '';
        document.getElementById('duration').value = '';
    } else {
        alert('Please enter both workout type and duration.');
    }
}
