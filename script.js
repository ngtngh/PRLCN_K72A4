const scriptURL = 'https://script.google.com/macros/s/AKfycbzg3xLgthS4h3Sx0GUwONl4KVmrMeS5FJhAdjthHjyycoMS78vwAqIGAQuGkZBX6sqMWw/exec'
const form = document.getElementById('studentForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Lấy giá trị từ các thẻ span
    const studentId = document.getElementById('studentId').value;
    const studentName = document.getElementById('studentName').innerText;
    const studentDOB = document.getElementById('studentDOB').innerText;

    /// Lấy ngày giờ hiện tại
    const currentDate = new Date();
    const formattedDateTime = formatDate(currentDate);

    // Tạo đối tượng FormData và thêm các giá trị
    const formData = new FormData();
    formData.append('dateTime', formattedDateTime);
    formData.append('studentId', studentId);
    formData.append('studentName', studentName);
    formData.append('studentDOB', studentDOB);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => alert("Thông tin Phiếu Rèn luyện Cá nhân của bạn đã được gửi thành công!\nCán bộ lớp sẽ xuất file PDF và gửi để bạn in sau.\nCảm ơn bạn! ☀️"))
      .then(() => { window.location.reload(); })
      .catch(error => console.error('Lỗi!', error.message, "\nVui lòng báo lại cho cán bộ lớp."))
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