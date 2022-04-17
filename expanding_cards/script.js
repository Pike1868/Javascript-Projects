//Variables
// Putting each panel div into an array
let panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
      removeActiveClasses();
    panel.classList.add("active");
  });
  console.log(panel);
});

let removeActiveClasses = ()=>{
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}