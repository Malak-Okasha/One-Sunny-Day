window.onload= function(){
let btn= document.getElementById("tester");
let bck= document.getElementsByName("body");
let story= document.getElementById("title");
function waitClick(btn){
    return new Promise ( (resolve) =>{
         btn.addEventListener("click", ()=> {
            resolve()
        }
        )
        
    })
}
async function change(btn,p){
    const run= await waitClick(btn);
    $(story).fadeOut(500, function() {
          title.style.fontSize = "2em";
          story.innerText = "Hello! My name is Sara. I cannot wait to turn my computer on and play video games!";
          $(story).fadeIn(500);
        });
    const run2= await waitClick(btn);
    $(story).fadeOut(500, function() {
        document.body.style.backgroundImage = `url('sm.png')`;
          story.innerHTML = "Sara: Mom, my computer won't turn on. <br> Mom: It is not turning on because the power is out due to a solar storm.";
          $(story).fadeIn(500);
        });
    const run3= await waitClick(btn);
    $(story).fadeOut(500, function() {
          story.innerHTML = "Sara: What is a solar storm?";
          $(story).fadeIn(500);
        });
    const run4= await waitClick(btn);
    $(story).fadeOut(500, function() {
        document.body.style.backgroundImage = `url('aurora.png')`;
          story.innerHTML = "Mom: Sometimes the sun releases a lot of energy at once. This energy is so big that it causes a solar storm, which can’t hurt humans directly, but can damage equipment. It can also cause pretty colored lights in the night sky called aurora borealis!";
          $(story).fadeIn(500);
        });
    const run5= await waitClick(btn);
    $(story).fadeOut(500, function() {
          document.body.style.backgroundImage = `url('sat.png')`;
          story.innerHTML = "Sara: Wow, that’s so cool! But how are solar storms able to damage equipment when they cannot harm humans?<br>Mom: Solar storms release something called coronal mass ejections, or CMEs, which carry lots of radiation that can damage satellites that are in Earth’s orbit.";
          $(story).fadeIn(500);
        });
    const run6= await waitClick(btn);
    $(story).fadeOut(500, function() {
          document.body.style.backgroundImage = `url('sm.png')`;
          story.innerHTML = "Most radiation gets absorbed, so it doesn’t harm humans, but the storm disturbs something called the “magnetic field” around Earth, which causes damage to power station equipment.";
          $(story).fadeIn(500);
        });
    const run7= await waitClick(btn);
    $(story).fadeOut(500, function() {
          story.innerHTML = "Sara: So, since there is no power, can we play board games together?";
          $(story).fadeIn(500);
        });
    const run8= await waitClick(btn);
    $(story).fadeOut(500, function() {
          story.innerHTML = "Mom: Sure! My flight got delayed because of the solar storm as well, so I will be staying home.Your dad came home early from the farm so we can all play together.";
          $(story).fadeIn(500);
        });
    const run9= await waitClick(btn);
    $(story).fadeOut(500, function() {
          story.innerHTML = "Sara: Why was Dad early?<br>Mom: The tractor’s GPS was affected by the storm.";
          $(story).fadeIn(500);
        });
    const run10= await waitClick(btn);
    $(story).fadeOut(500, function() {
          story.innerHTML = "Sara: Ok, since it’s almost dark, I will get the flashlights we keep for emergencies.<br>Mom: And I will get the batteries.";
          $(story).fadeIn(500);
        });
    const run11= await waitClick(btn);
    $(story).fadeOut(500, function() {
          story.innerHTML = "Mom: Solar storms are very interesting! But we must always be prepared for them.";
          $(story).fadeIn(500);
        });
    const run12= await waitClick(btn);
    $(story).fadeOut(500, function() {
          $(btn).fadeOut()
          story.innerHTML = "The End";
          $(story).fadeIn(500);
        });
}
change(btn,story)
}