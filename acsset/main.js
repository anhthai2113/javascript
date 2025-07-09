const title = document.getElementById("main__title");
    title.innerText = "Chào Mừng Bạn Đến Với Khóa Học JavaScript!";
    const description = document.querySelector(".description");
    description.innerHTML = "Bạn sẽ học về <strong>DOM, Events</strong>";
    function showGreeting() {
      const name = document.getElementById("student__name").value;
      const greeting = document.getElementById("greeting");
      greeting.innerText = `Xin chào, ${name}!`;
    }