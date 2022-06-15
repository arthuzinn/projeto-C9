var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","13f1d620-d791-47be-a573-0682705cf9c7","251617d2-391d-4552-bd3e-684ca9528851","818e65d8-8361-4543-bf56-ae36305b7601","89216ee4-2a39-42d3-b13e-b5e5fa6ec8a2","3596b6d2-a4d9-4058-8ce8-6fedc54c0a75"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"ezTXJ4rQT00PUZNSuWLnh_mZ2izXwMhi","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"robozin","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"pxxyDLCIlsB4c3KhsLFiAno0aUTF.T1t","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"4YtpcM26Xq6szjfma_fYTLRut6JMthXT","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"13f1d620-d791-47be-a573-0682705cf9c7":{"name":"selva","sourceUrl":null,"frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":12,"version":"d0CHDhmIMpzu1Xcp7tj3gkQmku0O0oQE","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/13f1d620-d791-47be-a573-0682705cf9c7.png"},"251617d2-391d-4552-bd3e-684ca9528851":{"name":"belha1","sourceUrl":null,"frameSize":{"x":63,"y":50},"frameCount":2,"looping":true,"frameDelay":12,"version":"BqlKhMq9jLM7ftvlSfFb0H0WtYEneFAy","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":100},"rootRelativePath":"assets/251617d2-391d-4552-bd3e-684ca9528851.png"},"818e65d8-8361-4543-bf56-ae36305b7601":{"name":"belha2","sourceUrl":null,"frameSize":{"x":63,"y":50},"frameCount":2,"looping":true,"frameDelay":12,"version":"cEzwsRYpZe1Ud0pJYoHI0gxrWh40dfK1","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":100},"rootRelativePath":"assets/818e65d8-8361-4543-bf56-ae36305b7601.png"},"89216ee4-2a39-42d3-b13e-b5e5fa6ec8a2":{"name":"belha3","sourceUrl":null,"frameSize":{"x":63,"y":50},"frameCount":2,"looping":true,"frameDelay":12,"version":"FTHdUl1JF8ehS9covtCRdQEYfG5KWsfH","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":100},"rootRelativePath":"assets/89216ee4-2a39-42d3-b13e-b5e5fa6ec8a2.png"},"3596b6d2-a4d9-4058-8ce8-6fedc54c0a75":{"name":"belha4","sourceUrl":null,"frameSize":{"x":63,"y":50},"frameCount":2,"looping":true,"frameDelay":12,"version":"H4oYuBVRdNh7tQ7Hgpv43uhOk5j5EbDj","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":100},"rootRelativePath":"assets/3596b6d2-a4d9-4058-8ce8-6fedc54c0a75.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var selva = createSprite(200,200);
selva.setAnimation("selva");

var robozin = createSprite(200,345,200,345);
robozin.shapeColor="black";

var belha1 = createSprite(200,250,10,10);
belha1.shapeColor="red";

var belha2 = createSprite(200,150,10,10);
belha2.shapeColor="red";

var belha3 = createSprite(200,50,10,10);
belha3.shapeColor="red";


var belha4 = createSprite(200,90,10,10);
belha4.shapeColor="red";

var net = createSprite(200,5,200,20);
net.shapeColor="red";


var goal =0;
var death = 0;


robozin.setAnimation("robozin");
robozin.scale=0.8;
belha1.setAnimation("belha1");
belha1.scale=0.8;
belha2.setAnimation("belha2");
belha2.scale=0.8;
belha3.setAnimation("belha3");
belha3.scale=0.8;
belha4.setAnimation("belha4");
belha4.scale=0.8;


 belha1.velocityX = -10;
 belha2.velocityX = 10;
 belha3.velocityX = -10;
 belha4.velocityX = 10;

function draw() {
  drawSprites();
//plano de fundo(b);

createEdgeSprites();



robozin.bounceOff(edges);
belha1.bounceOff(edges);
belha2.bounceOff(edges);
belha3.bounceOff(edges);
belha4.bounceOff(edges);

if(keyDown("up")){
  robozin.y=robozin.y-3;
}

if(keyDown("down")){
  robozin.y=robozin.y+3;
}


if(keyDown("left")){
  robozin.x=robozin.x-3;
}

if(keyDown("right")){
  robozin.x=robozin.x+3;
}

if(robozin.isTouching(belha1)|| robozin.isTouching(belha2)|| robozin.isTouching(belha3) ||robozin.isTouching(belha4)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
  robozin.x=200;
  robozin.y=350;
  death = death+1;
}
if(robozin.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  robozin.x=200;
  robozin.y=345;
  goal=goal+1;
}
textSize(20);
  fill("blue");
  text("Objetivos:"+goal,30,30);
  

textSize(20);
  fill("blue");
  text("mortes:"+death,30,50);
  

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
