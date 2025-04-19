const textInput = document.querySelector("#text");
    const wordCount = document.querySelector("#word");

    textInput.addEventListener("input", () => {
      const text = textInput.value.trim();
      
      const words = text.match(/\b\w+\b/g);
      wordCount.textContent = words ? words.length : 0;
    });
