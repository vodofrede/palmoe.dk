function load_effects(names) {
    return names.map(name => {
        let audio = document.createElement("audio");
        audio.src = `/assets/effects/${name}.wav`;
        audio.volume = 0.1;
        return audio;
    });
}

function play_random(effects) {
    let index = Math.floor(Math.random() * effects.length);
    effects[index].pause();
    effects[index].play().catch(() => { });
}

document.addEventListener("DOMContentLoaded", () => {
    let click_effects = load_effects(["click_1"]);
    let hover_effects = load_effects(["hover_1", "hover_2", "hover_3", "hover_4", "hover_5", "hover_6"]);
    let links = [...document.getElementsByTagName("a")];
    links.forEach(link => {
        link.addEventListener("mouseover", () => play_random(hover_effects));
        link.addEventListener("mousedown", () => play_random(click_effects));
    });
})

