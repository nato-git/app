function SAVE() {
    const sel1 = document.getElementById("se1");
    const sel2 = document.getElementById("se2");
    const sel3 = document.getElementById("se3");
    const sel4 = document.getElementById("se4");
    const sel5 = document.getElementById("se5");

    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    // 保存
    localStorage.setItem("sel1", sel1.value);
    localStorage.setItem("sel2", sel2.value);
    localStorage.setItem("sel3", sel3.value);
    localStorage.setItem("sel4", sel4.value);
    localStorage.setItem("sel5", sel5.value);
    localStorage.setItem("name", name);
    localStorage.setItem("comment", comment);

    // 表示用テキストを構築
    const display = `[${name}] ${comment}\n`;
    document.getElementById("texts").innerText = display;

    localStorage.setItem("texts", display);
}
