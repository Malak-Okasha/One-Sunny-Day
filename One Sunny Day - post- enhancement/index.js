window.onload= function(){
let btn= document.getElementById("continuation");
let bck= document.getElementsByName("body");
let story= document.getElementById("title");

const FADE_TIME = 900; // Increased from 500ms for smoother transitions

function waitClick(btn){
    return new Promise ( (resolve) =>{
         btn.addEventListener("click", ()=> {
            resolve()
        }
        )
        
    })
}

async function transitionText(newText, isHTML = false) {
    return new Promise((resolve) => {
        $(story).fadeOut(FADE_TIME, function() {
            if (isHTML) {
                story.innerHTML = newText;
            } else {
                story.innerText = newText;
            }
            $(story).fadeIn(FADE_TIME, resolve);
        });
    });
}

async function transitionWithBackground(newText, backgroundImage, isHTML = true) {
    return new Promise((resolve) => {
        $(story).fadeOut(FADE_TIME, function() {
            document.body.style.backgroundImage = `url('${backgroundImage}')`;
            if (isHTML) {
                story.innerHTML = newText;
            } else {
                story.innerText = newText;
            }
            $(story).fadeIn(FADE_TIME, resolve);
        });
    });
}

async function change(btn,p){
    // Scene 1: Introduction
    const run= await waitClick(btn);
    await new Promise((resolve) => {
        $(story).fadeOut(FADE_TIME, function() {
            title.style.fontSize = "2em";
            story.innerHTML = "Hello! My name is Sara. I cannot wait to turn my computer on and play video games!";
            $(story).fadeIn(FADE_TIME, resolve);
        });
    });

    // Scene 2: Power outage
    const run2= await waitClick(btn);
    await transitionWithBackground("Sara: Mom, my computer won't turn on. <br> Mom: It is not turning on because the power is out due to a solar storm.", "sm.png");

    // Scene 3: What is a solar storm?
    const run3= await waitClick(btn);
    await transitionText("Sara: What is a solar storm?");

    // Scene 4: Aurora explanation
    const run4= await waitClick(btn);
    await transitionWithBackground("Mom: Sometimes the sun releases a lot of energy at once. This energy is so big that it causes a solar storm, which can't hurt humans directly, but can damage equipment. It can also cause pretty colored lights in the night sky called aurora borealis!", "aurora.png");

    // Scene 5: CMEs and satellites
    const run5= await waitClick(btn);
    await transitionWithBackground("Sara: Wow, that's so cool! But how are solar storms able to damage equipment when they cannot harm humans?<br>Mom: Solar storms release something called coronal mass ejections, or CMEs, which carry lots of radiation that can damage satellites that are in Earth's orbit.", "sat.png");

    // Scene 6: Magnetic field explanation
    const run6= await waitClick(btn);
    await transitionWithBackground("Most radiation gets absorbed, so it doesn't harm humans, but the storm disturbs something called the \"magnetic field\" around Earth, which causes damage to power station equipment.", "sm.png");

    // Scene 7: Board games
    const run7= await waitClick(btn);
    await transitionText("Sara: So, since there is no power, can we play board games together?");

    // Scene 8: Mom's plans
    const run8= await waitClick(btn);
    await transitionText("Mom: Sure! My flight got delayed because of the solar storm as well, so I will be staying home. Your dad came home early from the farm so we can all play together.");

    // Scene 9: Dad's tractor
    const run9= await waitClick(btn);
    await transitionText("Sara: Why was Dad early?<br>Mom: The tractor's GPS was affected by the storm.", true);

    // Scene 10: Flashlights and batteries
    const run10= await waitClick(btn);
    await transitionText("Sara: Ok, since it's almost dark, I will get the flashlights we keep for emergencies.<br>Mom: And I will get the batteries.", true);

    // Scene 11: Final wisdom
    const run11= await waitClick(btn);
    await transitionText("Mom: Solar storms are very interesting! But we must always be prepared for them.");

    // Scene 12: The End
    const run12= await waitClick(btn);
    btn.style.pointerEvents = "none";
    await new Promise((resolve) => {
        let faded = 0;
        const onFadeOut = () => {
            if (++faded < 2) return;
            story.innerHTML = "The End";
            $(story).fadeIn(FADE_TIME, resolve);
        };
        $(story).fadeOut(FADE_TIME, onFadeOut);
        $(btn).fadeOut(FADE_TIME, onFadeOut);
    });

    // Show restart button with smooth opacity transition
    const restartBtn = document.getElementById("restart");
    restartBtn.classList.add("visible");
}

// Handle restart button
document.getElementById("restart").addEventListener("click", function() {
    location.reload();
});

change(btn,story)
}
