

    
    const text = "I am  recent Mechanical Engineering graduate with a strong foundation in web development and database management. Proficient in HTML, CSS, and MongoDB, Biswajit has a solid understanding of webpage layout design, CSS positioning, and database operations, including CRUD and data aggregation. Known for punctuality, effective communication, and a proactive approach to learning, I brings a dedicated and team-oriented mindset. With a proven educational background in engineering, he is eager to leverage his skills in a dynamic environment to contribute effectively to team goals.";
    const textContainer = document.querySelector("#para");
    let index = 0;

    function typeLetter() {
      if (index < text.length) {
        textContainer.textContent += text[index];
        index++;
        setTimeout(typeLetter, 10); // Adjust the delay as needed
      }
    }

    typeLetter(); 







    const contact = document.querySelector(".contact")
    function contactbox() {
      
      
    }
   