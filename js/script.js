document.getElementById("btnPP").addEventListener("click", function() {
    document.getElementById("ppanjang").style.display = "flex";
    persegi.style.display = "none";
});

document.getElementById("btnPr").addEventListener("click", function() {
    document.getElementById("persegi").style.display = "flex";
    ppanjang.style.display = "none";
});

document.getElementById("luasppanjang").addEventListener("click", function() {
    let panjang = document.getElementById("panjang").value;
    let lebar = document.getElementById("lebar").value;
    let luas = lebar * panjang;
    document.getElementById("luaspp").innerText = "Luas Persegi Panjang: " + luas + " (satuan)²";
});

document.getElementById("kelppanjang").addEventListener("click", function(){
        let panjang = parseFloat(document.getElementById("panjang").value);
        let lebar = parseFloat(document.getElementById("lebar").value);
        let keliling = (panjang + lebar) * 2;
        document.getElementById("kelpp").innerText = "Keliling Persegi Panjang: 2 * (" + panjang + " + " + lebar + " = " + keliling + ") (satuan)";   
    });

document.getElementById("luaspersegi").addEventListener("click", function() {
    let sisi = document.getElementById("sisi").value;
    let luas = sisi * sisi;
    document.getElementById("luaspr").innerText = "Luas Persegi: " + sisi + " * " + sisi + " = " + luas + " (satuan)²";
});

document.getElementById("kelpersegi").addEventListener("click", function(){
        let sisi = document.getElementById("sisi").value;
        let keliling = sisi * 4;
        document.getElementById("kelpr").innerText = "Keliling Persegi: 4 * " + sisi + " + " + keliling + " (satuan)";   
    });
