// Simulate fetching data from an API
const userData = [
    {
        userId: 581672,
        userName: 'John Doe',
        email: 'valliaravind@gmail.com',
        collegeName: 'NIT Puducherry',
        rollNumber: '98765',
        collegeYear: '4th Year',
        course: 'BTech',
        mobile: '9876543213',
        paymentProof: 'uploads/1726988005814.jpg',
        userTypeId: 1,
        tierName: 'Basic',
        price: 400
    },
    {
        userId: 678043,
        userName: 'John Doe',
        email: 'john.doe@example.com',
        collegeName: 'NIT Puducherry',
        rollNumber: '98766',
        collegeYear: '3rd Year',
        course: 'BTech',
        mobile: '9876543210',
        paymentProof: 'uploads/1726986336775.jpg',
        userTypeId: 1,
        tierName: 'Basic',
        price: 400
    },
    {
        userId: 872000,
        userName: 'Sai',
        email: 'sudhane8321@gmail.com',
        collegeName: 'NIT Puducherry',
        rollNumber: '98767',
        collegeYear: '2nd Year',
        course: 'BTech',
        mobile: '9898984582',
        paymentProof: 'uploads/1726988005814.jpg',
        userTypeId: 2,
        tierName: 'Basic + DJ + Pro',
        price: 750
    }
];

// Function to load users data into the table
function loadUsers() {
    const userTable = document.getElementById('userTable');
    userTable.innerHTML = ''; // Clear existing rows

    userData.forEach((user, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${user.userId}</td>
            <td>${user.userName}</td>
            <td>${user.email}</td>
            <td>${user.collegeName}</td>
            <td>${user.rollNumber}</td>
            <td>${user.collegeYear}</td>
            <td>${user.course}</td>
            <td>${user.mobile}</td>
            <td><a href="${user.paymentProof}" target="_blank">View</a></td>
            <td>${user.userTypeId}</td>
            <td>${user.tierName}</td>
            <td>${user.price}</td>
            <td>
                <button class="accept" onclick="acceptUser(${index})">Accept</button>
                <button class="reject" onclick="rejectUser(${index})">Reject</button>
            </td>
        `;

        userTable.appendChild(row);
    });
}

// Function to accept a user
function acceptUser(index) {
    const user = userData[index];
    // Simulate sending request to API to accept the user
    fetch('/api/accept', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: user.userId })
    })
    .then(response => response.json())
    .then(data => {
        alert(`User with email: ${user.email} has been accepted!`);
    })
    .catch(error => console.error('Error:', error));
}

// Function to reject a user and remove row from table
function rejectUser(index) {
    const user = userData[index];
    // Simulate sending request to API to reject the user
    fetch('/api/reject', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: user.userId })
    })
    .then(response => response.json())
    .then(data => {
        alert(`User with email: ${user.email} has been rejected!`);
        // Remove the user from the userData array and reload the table
        userData.splice(index, 1);
        loadUsers();
    })
    .catch(error => console.error('Error:', error));
}

// Load initial data
window.onload = loadUsers;
