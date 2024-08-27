let campoIdade;
let campoDrama;
let campoFantasia;
let campoAventura;
let campoAcao;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoDrama = createCheckbox("Gosta de drama?");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
  campoAcao = createCheckbox("Gosta de ação?");
}
function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeDrama = campoDrama.checked();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAcao = campoAcao.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeDrama, gostaDeFantasia, gostaDeAcao, gostaDeAventura);

  fill(color(255, 100, 50));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeDrama, gostaDeFantasia, gostaDeAcao, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 16) {
      return "Bad Boys";
    } else {
      if (idade >= 12) {
        if(gostaDeAcao || gostaDeAventura) {
          return "guardiões da galáxia";          
        } else{
         return "Planeta dos Macacos";
        }
      } else {
        if (gostaDeAventura || gostaDeAcao) {
          return "As aventuras de pi";
        } else {
          return "A fera do mar";
        }
      }
    }
  } else {
    if (gostaDeFantasia || gostaDeDrama) {
      return "kung fu panda";
    } else {
      return "o rei leão";
    }
  }
}
