const scriptURL = 'https://script.google.com/macros/s/AKfycbyu3I-Bl0tPkK86ws5bRH-9qNDh7ReCAU7_ekdIF2WkYkVeHKBnEFdOenK1HSvHf5xEuw/exec'
const form = document.getElementById('studentForm');
const messageDiv = document.getElementById('message');
const submitButton = document.getElementById('submitButton');

document.addEventListener("DOMContentLoaded", function() {
    var diemInputs = document.querySelectorAll('.diem-input');
    function checkTotalPoints() {
        if (document.getElementById('totalPoints').innerText === document.getElementById('studentPoints').innerText) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }   
    }
    diemInputs.forEach(function(input) {
        input.addEventListener('blur', checkTotalPoints);
    });
});

form.addEventListener('submit', async e => {
    e.preventDefault();

    // Ẩn nút Submit và hiển thị tin nhắn "Vui lòng chờ..."
    submitButton.style.display = 'none';
    messageDiv.textContent = 'Đang lưu thông tin và tạo tệp PDF, vui lòng chờ...';
    messageDiv.classList.remove('error');
    
    // Lấy giá trị từ các thẻ
    const studentId = document.getElementById('studentId').value;
    const studentName = document.getElementById('studentName').innerText;
    const studentDOB = document.getElementById('studentDOB').innerText;
    const number = document.getElementById('number').innerText;
    const activities = document.getElementById('activities').innerText;

    /// Lấy ngày giờ hiện tại
    const currentDate = new Date();
    const formattedDateTime = formatDate(currentDate);

    // Tạo đối tượng FormData và thêm các giá trị
    const formData = new FormData();
    formData.append('dateTime', formattedDateTime);
    formData.append('studentId', studentId);
    formData.append('studentName', studentName);
    formData.append('studentDOB', studentDOB);
    formData.append('number', number);
    formData.append('activities', activities);

    try {
        const response = await fetch(scriptURL, { method: 'POST', body: formData });
        const base64PDF = await response.text();

        // Tạo link tải xuống
        const link = document.createElement('a');
        link.href = 'data:application/pdf;base64,' + base64PDF;
        link.download = 'PRLCN.pdf';
        link.click();

        messageDiv.textContent = 'Lưu thông tin thành công!';
        
        setTimeout(() => {
            window.location.reload();
        }, 5000);
    } catch (error) {
        messageDiv.textContent = 'Lỗi khi lưu thông tin!';
        messageDiv.classList.add('error');
        submitButton.style.display = 'block';
    }
});

// Hàm định dạng ngày giờ
function formatDate(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = date.getFullYear();
    
    return `${hours}:${minutes}:${seconds} - ${day}/${month}/${year}`;
}