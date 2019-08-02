let app = new PIXI.Application({
  antialias: true,
  transparent: false,
  resolution: 1
});

document.body.appendChild(app.view);

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";

let maxWidth = window.innerWidth;
let maxHeight = maxWidth/1.78;

app.renderer.autoResize = true;
app.renderer.resize(maxWidth, maxHeight);

let stage = new PIXI.Container();
let cloudManager;
let player;

PIXI.loader.add([
    "../assets/cloud_1.png",
    "../assets/cloud_2.png",
    "../assets/misha.png",
    "../assets/rocket.png"
]).load(init);

function init()
{
    app.renderer.backgroundColor = 0x22A7F0;

    cloudManager = new CloudManager();
    player = new Player();

    app.renderer.render(stage);

    loop();
}

function loop()
{
    cloudManager.update();
    player.update();

    Rocket.list.map((element) =>
    {
        element.update();
    });

    requestAnimationFrame(loop);
    app.renderer.render(stage);
}
