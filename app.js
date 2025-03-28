// Array to store student data (name and attendance)
let students = [];

// Add a student
function addStudent() {
    const studentName = document.getElementById('student-name').value;
    if (studentName) {
        const newStudent = {
            name: studentName,
            attendance: [] // Initialize empty attendance array for the student
        };
        students.push(newStudent);
        updateStudentList();
        document.getElementById('student-name').value = ''; // Clear input
    }
}

// Update the student list on the page
function updateStudentList() {
    const studentList = document.getElementById('students');
    studentList.innerHTML = ''; // Clear the current list
    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.textContent = student.name;
        li.onclick = () => showStudentAttendance(index); // Click to see attendance
        studentList.appendChild(li);
    });
}

// Show attendance details for selected student
function showStudentAttendance(index) {
    const student = students[index];
    const attendanceDetails = document.getElementById('attendance-details');
    attendanceDetails.innerHTML = `
        <h3>Attendance for ${student.name}</h3>
        <input type="date" id="attendance-date">
        <button onclick="markAttendance(${index})">Mark Attendance</button>
        <h4>Attendance Dates:</h4>
        <ul id="attendance-dates-${index}"></ul>
    `;
    updateAttendanceCount(index);
}

// Mark attendance for the selected student
function markAttendance(index) {
    const selectedDate = document.getElementById('attendance-date').value;
    const student = students[index];
    if (selectedDate && !student.attendance.includes(selectedDate)) {
        student.attendance.push(selectedDate);
        updateAttendanceList(index);
        updateAttendanceCount(index);
    }
}

// Update the list of attendance dates for the selected student
function updateAttendanceList(index) {
    const student = students[index];
    const attendanceList = document.getElementById(`attendance-dates-${index}`);
    attendanceList.innerHTML = ''; // Clear current list
    student.attendance.forEach(date => {
        const li = document.createElement('li');
        li.textContent = date;
        attendanceList.appendChild(li);
    });
}

// Update total attendance count for the selected student
function updateAttendanceCount(index) {
    const student = students[index];
    const totalAttendance = student.attendance.length;
    document.getElementById('total-attendance').textContent = totalAttendance;
}
