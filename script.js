const dialog = [
    "Haii Adindaaa✨",
    "Hari iniii kamu ulang tahun yaaa???",
    "Ciee ciee udah 17 aja niich😆",
    "aku ada hadiah buat kamuu",
    "I know it's not much for you, but i try my best to give you a special Birthday gift:) hope you like it yaaa"
  ];

  let index = 0;
  let isTyping = false;

  const dialogText = document.getElementById("dialog-text");
  const nextBtn = document.getElementById("next-btn");

  function typeText(text, callback) {
    isTyping = true;
    nextBtn.disabled = true;
    dialogText.textContent = "";
    let i = 0;
    const typing = setInterval(() => {
      dialogText.textContent += text.charAt(i);
      i++;
      if (i >= text.length) {
        clearInterval(typing);
        isTyping = false;
        nextBtn.disabled = false;
        if (callback) callback();
      }
    }, 50);
  }

  function nextDialog() {
    if (isTyping) return;

    if (index < dialog.length) {
      typeText(dialog[index]);
      index++;
    } else if (index === dialog.length) {
      typeText("main minigames dulu ga siih, gas di sini broww!👇");
      index++;
    } else {
      window.location.href = "tictactoe.html";
    }
  }

  nextBtn.addEventListener("click", nextDialog);

  // Mulai pertama
  nextDialog();
  
  // Daftar lagu (bisa pakai link YouTube MP3 atau file lokal .mp3)
