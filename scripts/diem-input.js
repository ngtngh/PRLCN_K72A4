document.addEventListener("DOMContentLoaded", function() {
    var diemInputs = document.querySelectorAll('.diem-input');
    diemInputs.forEach(function(input) {
        var diemQuyDinh = parseFloat(input.parentElement.previousElementSibling.textContent);

        input.addEventListener('input', function() {
            var diem = parseFloat(input.value);
            handleInputChange(input, diem, diemQuyDinh);
            handleDisplayChange(input);
            input.value = input.value.replace(',', '.');
        });

        input.addEventListener('blur', function() {
            formatDiemInput(input);
        });
    });
});

function handleInputChange(input, diem, diemQuyDinh) {
    if (input.id === 'IIa5' || input.id === 'IIa6') {
        if (diem === "-") {
            input.value = "-"
        } else if ((diem === 0)) {
            diem = 0;
            input.value = "";
        }
        if (diem > 0 && diem <= 25) {
            diem = -diem;
            input.value = diem;
        } else if (diem < -25) {
            diem = -25;
            input.value = diem;
        }
    } else {
        if (isNaN(diem) || (diem < 0)) {
            diem = 0;
            input.value = "";
        }
        if (diem > diemQuyDinh) {
            diem = diemQuyDinh;
            input.value = diemQuyDinh;
        }
    }
}

function handleDisplayChange(input) {
    var ids = ['Ida1', 'Ida2', 'Ida3'];
    ids.forEach(function(id) {
        if (input.id === id && input.value !== "") {
            ids.filter(i => i !== id).forEach(i => document.getElementById(i).style.display = 'none');
            ids.filter(i => i !== id).forEach(i => document.getElementById(i).required = false);
        } else if (input.id === id && input.value === "") {
            ids.filter(i => i !== id).forEach(i => document.getElementById(i).style.display = 'inline-block');
            ids.filter(i => i !== id).forEach(i => document.getElementById(i).required = true);
        }
    });
}

function formatDiemInput(input) {
    var diem = parseFloat(input.value);
    if (!isNaN(diem)) {
        if (input.id === 'IIa5' || input.id === 'IIa6') {
            if (diem < 0 && diem >= -5) {
                diem = 0;
                input.value = "";
            } if (diem < -5 && diem >= -10) {
                diem = -10;
                input.value = diem;
            } if (diem < -10 && diem >= -12.5) {
                diem = -10;
                input.value = diem;
            } if (diem < -12.5 && diem >= -15) {
                diem = -15;
                input.value = diem;
            } if (diem < -15 && diem >= -20) {
                diem = -15;
                input.value = diem;
            } if (diem < -20 && diem >= -25) {
                diem = -25;
                input.value = diem;
            }
        } else {
            diem = Math.round(diem * 2) / 2;
            input.value = Number.isInteger(diem) ? diem.toFixed(0) : diem.toFixed(1);
        }
    } else {
        input.value = "";
    }
}
