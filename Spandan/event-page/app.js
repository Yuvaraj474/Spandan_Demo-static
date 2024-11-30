function showNextForm(formId) {
    document.querySelectorAll('.form-container').forEach(form => {
        form.classList.add('hidden');
    });
    document.getElementById(formId).classList.remove('hidden');
}

function generateDelegateFields() {
    const count = parseInt(document.getElementById('delegate-count').value);
    const delegateDetails = document.getElementById('delegate-details');
    
    delegateDetails.innerHTML = ''; // Clear previous fields

    for (let i = 1; i <= count; i++) {
        // Create a container for each delegate
        const delegateContainer = document.createElement('div');
        delegateContainer.classList.add('delegate-container');

        const delegateRow = document.createElement('div');
        delegateRow.classList.add('delegate-row');

        const nameField = document.createElement('input');
        nameField.type = 'text';
        nameField.name = `delegate-name-${i}`;
        nameField.placeholder = `Delegate ${i} Name`;
        nameField.required = true;
        nameField.addEventListener('change', moveToNextField);  // Move to next

        const emailField = document.createElement('input');
        emailField.type = 'email';
        emailField.name = `delegate-email-${i}`;
        emailField.placeholder = `Delegate ${i} Email`;
        emailField.required = true;

        const contactField = document.createElement('input');
        contactField.type = 'tel';
        contactField.name = `delegate-contact-${i}`;
        contactField.placeholder = `Delegate ${i} Contact`;
        contactField.pattern = '[0-9]{10}';
        contactField.required = true;

        // Append the fields to the row
        delegateRow.appendChild(nameField);
        delegateRow.appendChild(emailField);
        delegateRow.appendChild(contactField);

        // Append the row to the container
        delegateContainer.appendChild(delegateRow);

        // Append the container to the delegate details section
        delegateDetails.appendChild(delegateContainer);
    }
}

function moveToNextField(event) {
    const nextField = event.target.nextElementSibling;
    if (nextField) {
        nextField.focus();
    }
}
