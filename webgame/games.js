$(document).ready(function() {


  $("button[name='penguin_peril']").click(function(){

    var playing = $("#320de7e01b386eda1d66a5bf44deef4d").attr("id");

    if (typeof playing == 'undefined') {
      var unityInstance = UnityLoader.instantiate("unityContainer", "Build/webgame.json", {onProgress: UnityProgress});
    }  
  });

  
  

  $("#lang").click(function(){
    $language= $("#lang").attr("name");
    if ($language == "dutch"){
      $("#lang").attr({"name": "english", "src": "..//Images\\english.png"});
    } else {
      $("#lang").attr({"name": "dutch", "src": "..//Images\\dutch.png"});
    }

    lang = {
      dutch : {
          title : "Spellen",
          language:"Taal",
          home:"Hoofdpagina",
          projecten_nav:"Mijn projecten",
          projecten:"Mijn projecten",
          games_nav:"Spellen",
          projecten_text:"Op deze pagina staat een verzameling van de projecten die ik heb gemaakt tijdens of na mijn omscholing via Young Capital. " 
          + " De meeste projecten zullen bestaan uit videogames omdat dit mijn grote hobby is en een leuke manier om te leren programmeren. " 
          + "<br><br> Deze pagina is nog onvolledig en zal ter zijner tijd worden aangevuld met meer projecten. "
          + "<br><br>",
          penguin_peril_text:" Penguin Peril is een simpel spelletje gemaakt in Unity. Het volgt hetzelfde principe als een populair spelletje genaamd \"Flappy Bird\". " 
          + "<br><br> De besturing is erg eenvouding en werkt door middel van achtereenvolgend klikken met de muis of het gebruiken van de spatiebalk. " 
          + "Het doel is om de pinguin zo ver mogelijk te laten zwemmen in het steeds moeilijker wordende level. " 
          + "<br><br>",
          game2:"Meer spellen in de toekomst...",
        },
      english : {
          title : "Games",
          language:"language", 
          home:"Main Page",
          projecten_nav:"My projects", 
          projecten:"My projects", 
          games_nav:"Games", 
          projecten_text:"This page will display a collection of the different projects that I have made during or after my traineeship at Young Capital. " 
          + " Most of these projects will be small videogames, as videogames are a big hobby of mine and are a fun way to learn programming. " 
          + "<br><br> This page is currently incomplete and will be expanded over time. "
          + "<br><br>",
          penguin_peril_text:" Penguin Peril is a simple game made in Unity. It follows the same design as the popular game called \"Flappy Bird\". " 
            + "<br><br> The controls are simple and function by continuous clicking with the mouse or by tapping the space bar. " 
            + "The goal is to get the penguin to swim as far as possible in the progressively more difficult level. " 
            + "<br><br>",
          game2:"More games in the future...",
        }
    }

    $language= $("#lang").attr("name");


    $("#title").html(lang[($language.toString())]["title"]);
    $("#language").html(lang[($language.toString())]["language"]);
    $("#home").html(lang[($language.toString())]["home"]);
    $("#projecten_nav").html(lang[($language.toString())]["projecten_nav"]);
    $("#projecten").html(lang[($language.toString())]["projecten"]);
    $("#games_nav").html(lang[($language.toString())]["games_nav"]);
    $("#projecten_text").html(lang[($language.toString())]["projecten_text"]);
    $("#penguin_peril_text").html(lang[($language.toString())]["penguin_peril_text"]);
    $("#game2").html(lang[($language.toString())]["game2"]);
 

  });

  // Voorkom klik-text selectie op de pagina tijdens spelen van games 
  document.addEventListener('mousedown', function (event) {
    if (event.detail > 1) {
      event.preventDefault();
    }
  }, false);

});




