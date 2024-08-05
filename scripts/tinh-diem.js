document.addEventListener("DOMContentLoaded", function() {
    var diemInputs = document.querySelectorAll('.diem-input');

    function tinhTongVaHienThi(idArray, resultId) {
        var tong = idArray.reduce((sum, id) => {
            var diem = parseFloat(document.getElementById(id)?.value || 0);
            return sum + (isNaN(diem) ? 0 : diem);
        }, 0);
        var resultElement = document.getElementById(resultId);
        if (resultElement) {
            tong = Math.round(tong * 2) / 2;
            resultElement.textContent = Number.isInteger(tong) ? tong.toFixed(0) : tong.toFixed(1);
        }
    }

    function tinhTongDiemPhan() {
        var tongPhanI = parseFloat(document.getElementById('I').textContent);
        var tongPhanII = parseFloat(document.getElementById('II').textContent);
        var tongPhanIII = parseFloat(document.getElementById('III').textContent);
        var tongPhanIV = parseFloat(document.getElementById('IV').textContent);
        var tongPhanV = parseFloat(document.getElementById('V').textContent);
        var tongDiem = tongPhanI + tongPhanII + tongPhanIII + tongPhanIV + tongPhanV;
        document.getElementById('totalPoints').textContent = Number.isInteger(tongDiem) ? tongDiem.toFixed(0) : tongDiem.toFixed(1);
    }

    function handleBlur() {
        tinhTongVaHienThi(['Ia1', 'Ia2'], 'Ia');
        tinhTongVaHienThi(['Ib1', 'Ib2', 'Ib3', 'Ib4'], 'Ib');
        tinhTongVaHienThi(['Ic1', 'Ic2', 'Ic3', 'Ic4', 'Ic5', 'Ic6', 'Ic7'], 'Ic');
        tinhTongVaHienThi(['Id1'], 'Id');
        tinhTongVaHienThi(['Ida1', 'Ida2', 'Ida3'], 'Ida');

        tinhTongVaHienThi(['IIa1', 'IIa2', 'IIa3', 'IIa4', 'IIa5', 'IIa6'], 'IIa');
        tinhTongVaHienThi(['IIb1', 'IIb2', 'IIb3'], 'IIb');

        tinhTongVaHienThi(['IIIa1', 'IIIa2', 'IIIa3', 'IIIa4'], 'IIIa');
        tinhTongVaHienThi(['IIIb1', 'IIIb2', 'IIIb3', 'IIIb4'], 'IIIb');
        tinhTongVaHienThi(['IIIc1', 'IIIc2'], 'IIIc');

        tinhTongVaHienThi(['IVa1', 'IVa2', 'IVa3', 'IVa4', 'IVa5', 'IVa6'], 'IVa');
        tinhTongVaHienThi(['IVb1', 'IVb2'], 'IVb');
        tinhTongVaHienThi(['IVc1', 'IVc2', 'IVc3', 'IVc4'], 'IVc');

        tinhTongVaHienThi(['Va1', 'Va2'], 'Va');
        tinhTongVaHienThi(['Vb1', 'Vb2'], 'Vb');
        tinhTongVaHienThi(['Vc1', 'Vc2'], 'Vc');
        tinhTongVaHienThi(['Vd1'], 'Vd');

        var tongI = ['Ia', 'Ib', 'Ic', 'Id', 'Ida'].reduce((sum, id) => sum + parseFloat(document.getElementById(id).textContent), 0);
        document.getElementById('I').textContent = Number.isInteger(tongI) ? tongI.toFixed(0) : tongI.toFixed(1);
        var tongII = ['IIa', 'IIb'].reduce((sum, id) => sum + parseFloat(document.getElementById(id).textContent), 0);
        document.getElementById('II').textContent = Number.isInteger(tongII) ? tongII.toFixed(0) : tongII.toFixed(1);
        var tongIII = ['IIIa', 'IIIb', 'IIIc'].reduce((sum, id) => sum + parseFloat(document.getElementById(id).textContent), 0);
        document.getElementById('III').textContent = Number.isInteger(tongIII) ? tongIII.toFixed(0) : tongIII.toFixed(1);
        var tongIV = ['IVa', 'IVb', 'IVc'].reduce((sum, id) => sum + parseFloat(document.getElementById(id).textContent), 0);
        document.getElementById('IV').textContent = Number.isInteger(tongIV) ? tongIV.toFixed(0) : tongIV.toFixed(1);
        var tongV = ['Va', 'Vb', 'Vc', 'Vd'].reduce((sum, id) => sum + parseFloat(document.getElementById(id).textContent), 0);
        document.getElementById('V').textContent = Number.isInteger(tongV) ? tongV.toFixed(0) : tongV.toFixed(1);

        tinhTongDiemPhan();
    }

    diemInputs.forEach(function(input) {
        input.addEventListener('blur', handleBlur);
    });

    handleBlur(); // Initial call on load
});
