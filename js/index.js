document.addEventListener("DOMContentLoaded", function () {
  const Text = [
    "Hello there👋, I'm Kenneth"
  ];
  const autoTyping = new AutoTyping(".h2", Text, {
    typeSpeed: 150,
    deleteSpeed: 150,
    waitBeforeDelete: 200000,
    waitBetweenWords: 500,
  });
    autoTyping.start();
    


    const Text2 = [
        "This is my portfolio card website. I hope you enjoy it! I'm a WEB DEVELOPER and WEB DESIGNER I'm currently working on my Web Development portfolio, and this is my first website 💻"
      ];
      const autoTyping2 = new AutoTyping(".p", Text2, {
        typeSpeed: 50,
        deleteSpeed: 50,
        waitBeforeDelete: 20000,
        waitBetweenWords: 500,
      });
      autoTyping2.start();
});
