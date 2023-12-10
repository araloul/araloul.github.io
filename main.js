let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #ad30de;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: ;">Diseñadora y Desarrolladora Front-end</span>')
  .pauseFor(400)
  .deleteChars(20)
  .start();
