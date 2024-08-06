const scriptURL = 'https://script.google.com/macros/s/AKfycbwea9yqQ1KncAvxL_jChkAtf-WdGlI2yViiIRIXBvxagpf7lUUZWClGuX_t8ZVlUPpdHQ/exec'
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

    const I = document.getElementById('I').innerText;
    const II = document.getElementById('II').innerText;
    const III = document.getElementById('III').innerText;
    const IV = document.getElementById('IV').innerText;
    const V = document.getElementById('V').innerText;

    const Ia = document.getElementById('Ia').innerText;
    const Ib = document.getElementById('Ib').innerText;
    const Ic = document.getElementById('Ic').innerText;
    const Id = document.getElementById('Id').innerText;
    const Ida = document.getElementById('Ida').innerText;
    const IIa = document.getElementById('IIa').innerText;
    const IIb = document.getElementById('IIb').innerText;
    const IIIa = document.getElementById('IIIa').innerText;
    const IIIb = document.getElementById('IIIb').innerText;
    const IIIc = document.getElementById('IIIc').innerText;
    const IVa = document.getElementById('IVa').innerText;
    const IVb = document.getElementById('IVb').innerText;
    const IVc = document.getElementById('IVc').innerText;
    const Va = document.getElementById('Va').innerText;
    const Vb = document.getElementById('Vb').innerText;
    const Vc = document.getElementById('Vc').innerText;
    const Vd = document.getElementById('Vd').innerText;

    const Ia1 = document.getElementById('Ia1').value;
    const Ia2 = document.getElementById('Ia2').value;
    const Ib1 = document.getElementById('Ib1').value;
    const Ib2 = document.getElementById('Ib2').value;
    const Ib3 = document.getElementById('Ib3').value;
    const Ib4 = document.getElementById('Ib4').value;
    const Ic1 = document.getElementById('Ic1').value;
    const Ic2 = document.getElementById('Ic2').value;
    const Ic3 = document.getElementById('Ic3').value;
    const Ic4 = document.getElementById('Ic4').value;
    const Ic5 = document.getElementById('Ic5').value;
    const Ic6 = document.getElementById('Ic6').value;
    const Ic7 = document.getElementById('Ic7').value;
    const Id1 = document.getElementById('Id1').value;
    const Ida1 = document.getElementById('Ida1').value;
    const Ida2 = document.getElementById('Ida2').value;
    const Ida3 = document.getElementById('Ida3').value;

    const IIa1 = document.getElementById('IIa1').value;
    const IIa2 = document.getElementById('IIa2').value;
    const IIa3 = document.getElementById('IIa3').value;
    const IIa4 = document.getElementById('IIa4').value;
    const IIa5 = document.getElementById('IIa5').value;
    const IIa6 = document.getElementById('IIa6').value;
    const IIb1 = document.getElementById('IIb1').value;
    const IIb2 = document.getElementById('IIb2').value;
    const IIb3 = document.getElementById('IIb3').value;

    const IIIa1 = document.getElementById('IIIa1').value;
    const IIIa2 = document.getElementById('IIIa2').value;
    const IIIa3 = document.getElementById('IIIa3').value;
    const IIIa4 = document.getElementById('IIIa4').value;
    const IIIb1 = document.getElementById('IIIb1').value;
    const IIIb2 = document.getElementById('IIIb2').value;
    const IIIb3 = document.getElementById('IIIb3').value;
    const IIIb4 = document.getElementById('IIIb4').value;
    const IIIc1 = document.getElementById('IIIc1').value;
    const IIIc2 = document.getElementById('IIIc2').value;

    const IVa1 = document.getElementById('IVa1').value;
    const IVa2 = document.getElementById('IVa2').value;
    const IVa3 = document.getElementById('IVa3').value;
    const IVa4 = document.getElementById('IVa4').value;
    const IVa5 = document.getElementById('IVa5').value;
    const IVa6 = document.getElementById('IVa6').value;
    const IVb1 = document.getElementById('IVb1').value;
    const IVb2 = document.getElementById('IVb2').value;
    const IVc1 = document.getElementById('IVc1').value;
    const IVc2 = document.getElementById('IVc2').value;
    const IVc3 = document.getElementById('IVc3').value;
    const IVc4 = document.getElementById('IVc4').value;

    const Va1 = document.getElementById('Va1').value;
    const Va2 = document.getElementById('Va2').value;
    const Vb1 = document.getElementById('Vb1').value;
    const Vb2 = document.getElementById('Vb2').value;
    const Vc1 = document.getElementById('Vc1').value;
    const Vc2 = document.getElementById('Vc2').value;
    const Vd1 = document.getElementById('Vd1').value;

    const totalPoints = document.getElementById('totalPoints').innerText;

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

    formData.append('I', I);
    formData.append('II', II);
    formData.append('III', III);
    formData.append('IV', IV);
    formData.append('V', V);

    formData.append('Ia', Ia);
    formData.append('Ib', Ib);
    formData.append('Ic', Ic);
    formData.append('Id', Id);
    formData.append('Ida', Ida);
    formData.append('IIa', IIa);
    formData.append('IIb', IIb);
    formData.append('IIIa', IIIa);
    formData.append('IIIb', IIIb);
    formData.append('IIIc', IIIc);
    formData.append('IVa', IVa);
    formData.append('IVb', IVb);
    formData.append('IVc', IVc);
    formData.append('Va', Va);
    formData.append('Vb', Vb);
    formData.append('Vc', Vc);
    formData.append('Vd', Vd);

    formData.append('Ia1', Ia1);
    formData.append('Ia2', Ia2);
    formData.append('Ib1', Ib1);
    formData.append('Ib2', Ib2);
    formData.append('Ib3', Ib3);
    formData.append('Ib4', Ib4);
    formData.append('Ic1', Ic1);
    formData.append('Ic2', Ic2);
    formData.append('Ic3', Ic3);
    formData.append('Ic4', Ic4);
    formData.append('Ic5', Ic5);
    formData.append('Ic6', Ic6);
    formData.append('Ic7', Ic7);
    formData.append('Id1', Id1);
    formData.append('Ida1', Ida1);
    formData.append('Ida2', Ida2);
    formData.append('Ida3', Ida3);

    formData.append('IIa1', IIa1);
    formData.append('IIa2', IIa2);
    formData.append('IIa3', IIa3);
    formData.append('IIa4', IIa4);
    formData.append('IIa5', IIa5);
    formData.append('IIa6', IIa6);
    formData.append('IIb1', IIb1);
    formData.append('IIb2', IIb2);
    formData.append('IIb3', IIb3);

    formData.append('IIIa1', IIIa1);
    formData.append('IIIa2', IIIa2);
    formData.append('IIIa3', IIIa3);
    formData.append('IIIa4', IIIa4);
    formData.append('IIIb1', IIIb1);
    formData.append('IIIb2', IIIb2);
    formData.append('IIIb3', IIIb3);
    formData.append('IIIb4', IIIb4);
    formData.append('IIIc1', IIIc1);
    formData.append('IIIc2', IIIc2);

    formData.append('IVa1', IVa1);
    formData.append('IVa2', IVa2);
    formData.append('IVa3', IVa3);
    formData.append('IVa4', IVa4);
    formData.append('IVa5', IVa5);
    formData.append('IVa6', IVa6);
    formData.append('IVb1', IVb1);
    formData.append('IVb2', IVb2);
    formData.append('IVc1', IVc1);
    formData.append('IVc2', IVc2);
    formData.append('IVc3', IVc3);
    formData.append('IVc4', IVc4);

    formData.append('Va1', Va1);
    formData.append('Va2', Va2);
    formData.append('Vb1', Vb1);
    formData.append('Vb2', Vb2);
    formData.append('Vc1', Vc1);
    formData.append('Vc2', Vc2);
    formData.append('Vd1', Vd1);

    formData.append('totalPoints', totalPoints);

    try {
        const response = await fetch(scriptURL, { method: 'POST', body: formData });
        const base64PDF = await response.text();

        // Tạo link tải xuống
        const link = document.createElement('a');
        link.href = 'data:application/pdf;base64,' + base64PDF;
        link.download = 'PRLCN.pdf';
        link.click();

        messageDiv.textContent = 'Đã xong! Tải xuống tệp PDF và bạn có thể đóng trang này.';

    } catch (error) {
        messageDiv.textContent = 'Lỗi khi lưu thông tin! Báo cáo CBL để kiểm tra.';
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
    
    return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
}
