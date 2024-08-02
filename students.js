// let students = {};

// fetch('students.json')
//     .then(response => response.json())
//     .then(data => {
//         students = data;
//     })
//     .catch(error => console.error('Error fetching student data:', error));

const students = {
    "001": { "name": "Nguyen Van A", "dob": "01/01/2000", "points": "80" },
    "002": { "name": "Tran Thi B", "dob": "02/02/2001", "points": "81" },
    "003": { "name": "Le Van C", "dob": "03/03/2002", "points": "82" },
    "725101187": { "name": "Trần Thị Phương Linh", "dob": "16/02/2004", "points": "84.5" },
    "725101188": { "name": "Vũ Phan Diệu Linh", "dob": "26/03/2003", "points": "90" },
    "725101189": { "name": "Vũ Thị Mỹ Linh", "dob": "02/11/2003", "points": "79.5" },
    "725101190": { "name": "Lê Bích Loan", "dob": "21/06/2004", "points": "80" },
    "725101191": { "name": "Lèo Văn Lợi", "dob": "28/01/2004", "points": "76.5" },
    "725101192": { "name": "Lê Tuấn Long", "dob": "16/11/2003", "points": "77.5" },
    "725101193": { "name": "Lý A Lùng", "dob": "12/12/2004", "points": "85" },
    "725101194": { "name": "Lò Hoàng Nhật Ly", "dob": "10/10/2004", "points": "81" },
    "725101195": { "name": "Nguyễn Khánh Ly", "dob": "23/05/2004", "points": "79.5" },
    "725101196": { "name": "Nguyễn Thị Hương Ly", "dob": "10/03/2003", "points": "82" },
    "725101197": { "name": "Nguyễn Thị Phương Ly", "dob": "20/01/2004", "points": "82" },
    "725101199": { "name": "Lê Thị Lý", "dob": "11/10/2004", "points": "86.5" },
    "725101200": { "name": "Nguyễn Thị Lý", "dob": "05/07/2004", "points": "83" },
    "725101201": { "name": "Đoàn Nguyễn Xuân Mai", "dob": "28/08/2004", "points": "82" },
    "725101202": { "name": "Hoàng Thị Ngọc Mai", "dob": "24/09/2004", "points": "82" },
    "725101203": { "name": "Lại Ngọc Mai", "dob": "26/07/2004", "points": "83.5" },
    "725101204": { "name": "Lê Phương Mai", "dob": "18/11/2004", "points": "87" },
    "725101205": { "name": "Ngô Thị Mai", "dob": "10/11/2004", "points": "87.5" },
    "725101206": { "name": "Nguyễn Thị Mai", "dob": "21/03/2004", "points": "82.5" },
    "725101207": { "name": "Vũ Hiền Mai", "dob": "18/03/2004", "points": "82.5" },
    "725101208": { "name": "Vương Nhật Mai", "dob": "19/10/2004", "points": "82" },
    "725101209": { "name": "Nguyễn Tiến Mạnh", "dob": "04/07/2004", "points": "79.5" },
    "725101210": { "name": "Nguyễn Xuân Mạnh", "dob": "23/02/2004", "points": "82.5" },
    "725101211": { "name": "Trần Dương Mạnh", "dob": "31/08/2004", "points": "84.5" },
    "725101212": { "name": "Ngân Sắc Mây", "dob": "26/12/2004", "points": "82" },
    "725101213": { "name": "Bùi Thị Minh", "dob": "10/02/2004", "points": "84.5" },
    "725101214": { "name": "Lại Vũ Minh", "dob": "28/09/2004", "points": "80.5" },
    "725101215": { "name": "Nghiêm Nguyệt Minh", "dob": "05/03/2004", "points": "82" },
    "725101216": { "name": "Nguyễn Thu Minh", "dob": "08/12/2004", "points": "81" },
    "725101218": { "name": "Trần Ánh Minh", "dob": "23/10/2004", "points": "83" },
    "725101219": { "name": "Trần Đức Minh", "dob": "10/10/2004", "points": "79.5" },
    "725101220": { "name": "Vũ Nguyễn Bảo Minh", "dob": "26/08/2004", "points": "82.5" },
    "725101221": { "name": "Hoàng Thị Trà My", "dob": "28/02/2004", "points": "86.5" },
    "725101223": { "name": "Đỗ Hải Nam", "dob": "01/01/2003", "points": "83" },
    "725101224": { "name": "Hoàng Hải Nam", "dob": "27/07/2004", "points": "85" },
    "725101225": { "name": "Triệu Hà Nam", "dob": "10/01/2004", "points": "82.5" },
    "725101226": { "name": "Trịnh Nhật Nam", "dob": "10/11/2004", "points": "87.5" },
    "725101227": { "name": "Vũ Hoài Nam", "dob": "20/03/2004", "points": "81.5" },
    "725101228": { "name": "Đặng Thị Nga", "dob": "19/03/2004", "points": "88.5" },
    "725101229": { "name": "Nguyễn Thị Nga", "dob": "07/09/2004", "points": "80.5" },
    "725101230": { "name": "Nguyễn Thị Nga", "dob": "28/02/2003", "points": "82" },
    "725101232": { "name": "Nguyễn Thị Thúy Nga", "dob": "22/07/2003", "points": "83" },
    "725101233": { "name": "Nguyễn Thúy Nga", "dob": "19/08/2004", "points": "84.5" },
    "725101234": { "name": "Phạm Thu Nga", "dob": "05/05/2004", "points": "80.5" },
    "725101235": { "name": "Tạ Quỳnh Nga", "dob": "03/02/2004", "points": "87.5" },
    "725101236": { "name": "Lò Thị Kim Ngân", "dob": "11/01/2004", "points": "82" },
    "725101237": { "name": "Nguyễn Thị Ngân", "dob": "21/05/2004", "points": "83.5" },
    "725101239": { "name": "Trịnh Thị Hoàng Ngân", "dob": "09/08/2004", "points": "82" },
    "725101240": { "name": "Lê Kim Nghĩa", "dob": "24/10/1996", "points": "85" },
    "725101241": { "name": "Nguyễn Tuấn Nghĩa", "dob": "06/03/2004", "points": "97" },
    "725101242": { "name": "Đậu Thị Bích Ngọc", "dob": "08/03/2004", "points": "80" },
    "725101243": { "name": "Kiều Bích Ngọc", "dob": "23/09/2004", "points": "83.5" },
    "725101244": { "name": "Lê Ánh Ngọc", "dob": "13/04/2004", "points": "83.5" },
    "725101245": { "name": "Nguyễn Bảo Ngọc", "dob": "09/11/2004", "points": "83.5" },
    "725101246": { "name": "Nguyễn Đoàn Bích Ngọc", "dob": "20/09/2004", "points": "77.5" },
    "725101247": { "name": "Nguyễn Thị Hồng Ngọc", "dob": "01/12/2004", "points": "83.5" },
    "725101248": { "name": "Nguyễn Thị Minh Ngọc", "dob": "25/10/2004", "points": "84" },
    "725101375": { "name": "Đinh Trọng Nghĩa", "dob": "19/03/2001", "points": "87.5" },
};

function lookupStudent() {
    const studentId = document.getElementById('studentId').value.toUpperCase();
    const student = students[studentId] || { name: '', dob: '', points: '' };
    document.getElementById('studentName').innerText = student.name;
    document.getElementById('studentDOB').innerText = student.dob;
    document.getElementById('studentPoints').innerText = student.points;
}