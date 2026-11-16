//addButton
let draggedItem = null;
const activityForm = document.getElementById('activity-form');
const activityInput = document.getElementById('activity-input');
const activitiesContainer = document.getElementById('activities-container');

activityForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const activityText = activityInput.value.trim();

    if (!activityText) {
        activityInput.setCustomValidity('Enter an activity name.');
        activityInput.reportValidity();
        activityInput.setCustomValidity('');
        return;
    }

    const newActivity = document.createElement('div');
    newActivity.classList.add('activity-item');
    newActivity.setAttribute('draggable', 'true');

    const activityLabel = document.createElement('p');
    activityLabel.classList.add('activity-text');
    activityLabel.textContent = activityText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.setAttribute('aria-label', `Delete ${activityText}`);
    deleteBtn.addEventListener('click', function() {
        newActivity.remove();
    });

    newActivity.addEventListener('dragstart', function() {
        draggedItem = newActivity;
        setTimeout(() => newActivity.style.opacity = '0.5', 0);
    });

    newActivity.addEventListener('dragend', function(){
        draggedItem = null;
        newActivity.style.opacity = '1';
    })

    newActivity.appendChild(activityLabel);
    newActivity.appendChild(deleteBtn);
    activitiesContainer.appendChild(newActivity);

    activityInput.value = '';
    activityInput.focus();
})

//droping the activity containers in the drop zones
const dropZones = document.querySelectorAll('.drop-zone');

dropZones.forEach(zone => {

    zone.addEventListener('dragover', function(e) {
        e.preventDefault();
    });
    zone.addEventListener('dragenter', function(e) {
        e.preventDefault();
        zone.style.backgroundColor = '#f0f0f0';
        zone.style.borderColor = '#000';
    });
    zone.addEventListener('dragleave', function() {
        zone.style.backgroundColor = '';
        zone.style.borderColor = '';
    });
    zone.addEventListener('drop', function() {
        if (draggedItem) {
            zone.appendChild(draggedItem);
            zone.style.backgroundColor = '';
            zone.style.borderColor = '';
        }
    });
})

//save and print buttons
const savePdfBtn = document.getElementById('save-pdf-btn');
savePdfBtn.addEventListener('click', function() {
    window.print();
});