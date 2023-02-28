$(document).ready(function() {

  

  $("#lang").click(function(){
    $language= $("#lang").attr("name");
    if ($language == "dutch"){
      $("#lang").attr({"name": "english", "src": "Images\\english.png"});
    } else {
      $("#lang").attr({"name": "dutch", "src": "Images\\dutch.png"});
    }
    


    lang = {
      dutch : {
          title : "Guido's profielpagina",
          guido_info_nav:"Wie ben ik?",
          hobbies_nav:"Hobbies",
          fotografie_nav:"Fotografie",
          gaming_nav:"Gaming",
          studie_nav:"Studie",
          werk_nav:"Werk",
          werkervaring_nav:"Werkervaring",
          droombaan_nav:"Mijn droombaan",
          projecten_nav:"Projecten",
          webgame_nav:"Browser spellen",
          overzicht_nav:"Overzicht",
          contact_nav:"Contact",
          language:"Taal",
          guido_info:"Wie ben ik?",
          wie_ben_ik_text: "Mijn naam is Guido Smit. " 
            + " Ik ben afgestudeerd Master of Science in de biologie en d.m.v omscholing ook junior software developer en testspecialist. " 
            + "<br> <br> Ik heb altijd een grote passie voor natuur en natuurfotografie gehad en in mijn vrije tijd ben ik vaak met een camera in de buitenlucht te vinden. " 
            + "<br> <br> Verder besteed ik graag tijd aan videogames en bordspellen, vaak samen met vrienden. " 
            + "Uit de voorliefde voor videogames is ook mijn interesse in IT voortgekomen. " 
            + "<br> <br> Mijn omscholing heeft plaatsgevonden tijdens een traineeship van Young Capital en een traineeship van KZA."
            + "<br> <br> Ik heb sinds mijn omscholing al een half jaar gewerkt als software developer en ben momenteel werkzaam bij de Rabobank, via KZA, in de AML (Anti Money Laundering) afdeling. " 
            + "<br> <br> Door middel van deze website kunt u kennismaken met mij en mijn skills. " 
            + "<br> <br> <br> <a href='https://www.linkedin.com/in/guido-smit-zandvoort/' class='linkedin'><i class='fa fa-linkedin'></i></a> <a href='https://www.facebook.com/GuidoSmitPhotography/' class='facebook'><i class='fa fa-facebook'></i></a>",
          hobbies:"Hobbies",
          studie:"Studie",
          bachelor_text:"Mijn studie begon met een Bachelor biologie aan de universiteit van Leiden. "
          + "Tijdens deze bachelor heb ik mij verdiept in de macrobiologische kant van de biologie. "
          + "<br> <br> De meest memorable onderdelen van de Bachelor waren de veldwerk dagen, zoals een  onderzoek in het waddengebied of een flora excursie om planten te leren herkennen. "
          + "<br> <br> Mijn stage was ook erg bijzonder en interresant omdat ik deze heb mogen uitvoeren bij het Naturalis Biodiversity Center, waar ik onderzoek deed naar insectivoren uit het mioceen. "
          + "<br> <br>",
          master_text: "Voor mijn Master ben ik van de Universiteit van Leiden naar de universiteit van Wageningen overgestapt. "
          + "In Wageningen was een betere aansluiting op de macrobiologische kant van de biologie, waar mijn interesse lag. " 
          + "<br> <br> Tijdens mijn Master heb ik mijzelf gefocused op diergedrag en ecologie. Dit kwam voornamelijk naar voren tijdens de 2 grote projecten in de master: de stage en de thesis. " 
          + "<br> <br> Mijn stage vond plaats in Malawi (Afrika). Hier heb ik onderzoek verricht naar de samenstelling van de vogelpopulatie in het bergregenwoud van Ntchisi, en het omliggende Miombo savanne gebied. " 
          + "<br> <br> Mijn thesis vond in Nederland plaats en betrof een onderzoek aan 2 soorten rivierkreeften en hun persoonlijkheid en gedrag bij verschillende concentraties van zuurstof in hun leefomgeving. " 
          + "<br> <br>",
          fotografie:"Fotografie",
          fotografie_text: "Ik ben al sinds kind af aan een grote fan geweest van fotografie. " 
            + "Vroeger toen ik klein was liep ik al rond met wegwerpcameraatjes en later de camera van mijn oma om zo veel mogelijk foto's te maken. " 
            + "<br> <br> Mijn favoriete fotografie onderwerp is de natuur en alles wat daarin te vinden is, met name de wilde dieren. " 
            + "Ik ben vaak te vinden in de Amsterdamse waterleiding duinen omdat je daar heerlijk van de paden af mag lopen. " 
            + "<br> <br> Ik heb ook de hele stage van mijn Master studie gebaseerd op fotografie, door een onderzoek te doen naar vogelpopulaties in een berg-oerwoud in Malawi d.m.v fotografie en foto analyse. " 
            + "<br><br> <-- Blader gerust door enkele van mijn favoriete foto's. " 
            + "<button class='button_left' onclick='plusDivs(-1)'>&#10094;</button> <button class='button_right' onclick='plusDivs(+1)'>&#10095;</button> <br> <br>",
          gaming:"Gaming",
          gaming_text: "Naast fotografie gaat veel van mijn vrije tijd zitten in games en bordspelletjes spelen met vrienden. " 
            + "Ook deze hobby begon al op jonge leeftijd, toen ik mijn 1ste gameboy kreeg met een Pokémon spelletje, en is nooit meer weggegaan. " 
            + "<br> <br> In de weekenden spreek ik vaak met vrienden af voor het spelen van bordspelletjes, waar ik inmiddels ook een kast vol van verzameld heb (zie foto). " 
            + "<br> <br> Dankzij games werd mijn interesse in computers en programmeren al vroeg gewekt, mede door het leren opzetten van multiplayer servers voor gamen op afstand met vrienden in de tijd dat online multiplayer nog niet zo vanzelfsprekend was. " 
            + "<br> <br>",
          werk:"Werk",
          werkervaring:"Werkervaring",
          werk_text:"Mijn 1ste baan was als afwasser en bediende bij Theater de Krocht in Zandvoort. " 
            + "Dit theater verzorgt feesten, muziekshows en vele andere evenementen en het werk hier was altijd erg sociaal en gezellig. " 
            + "<br> <br> Na mijn studie heb ik gewerkt als monsternemer bij het bedrijf Aquon. " 
            + "Bij deze functie kwam ik veel buiten en heb ik veel rijervaring opgedaan in een werkbusje, maar uiteindelijk voelde ik mij er toch niet geheel op mijn plek. " 
            + "<br> <br> Tijdens mijn omscholing via Young Capital heb ik een half jaar lang gewerkt als software developer voor de website van gereedschapbeheer.nl, bij het bedrijf Mecona IT. " 
            + "Het software programmeren is mij goed bevallen en ik ben nu op zoek naar een nieuwe plek om mijn opgedane programmeer skills voort te zetten. " 
            + "<br> <br> Ik heb tot nu toe gewerkt met Python3, PHP, Javascript, HTML, CSS en in mindere mate SQL en Java.",
          droombaan:"Mijn droombaan",
          droombaan_text:"Ik ben momenteel op zoek naar een leuke en uitdagende nieuwe werkplek. " 
            + "Daarvoor ben ik op zoek naar een plek voor 32-40 uur in de week, binnen bereik per auto of openbaar vervoer van Zandvoort aan Zee. " 
            + "<br> <br> Het ontwikkelen en programmeren, zowel front-end als back-end, is mij erg goed bevallen sinds mijn omscholing en ik zie mijzelf in de toekomst ook graag een functie bekleden waarbij ontwikkelen onderdeel is van het takenpakket. " 
            + "<br> <br> Ik ben een sociaal ingesteld persoon en ik houd van het werken in teamverband en het maken van een praatje en overleggen met collega's. " 
            + "Ik hoop een plek te vinden waar vragen stellen wordt aangemoedigd, teamwork gestimuleerd wordt en gezelligheid ook belangrijk is op het werk. " 
            + "<br> <br> Herkennen u en uw bedrijf zich in mijn droom werkplek? En heeft u interesse in mij als werknemer? "
            + "Dan kunt u contact opnemen via de contactgegvens onder het kopje 'contact'. " 
            + "<br> <br> U kunt ook mijn CV spelletje spelen als u een Windows pc bezit, om spelenderwijs op een leuke manier kennis te maken met mijn CV. ",
          CV_game:"Mijn CV spel",
          instructions:"<img src='Images\\Instructions.png' alt='Instructions' class='image'>",
          CV_game_text1:"Ik heb van mijn CV een videogame gebouwd in de programmeertaal Python3. " 
            + "In deze videogame speelt u mij (Guido) en moet u van bovenaf gezien door een fictieve stad wandelen en delen van mijn cv zien te vinden. " 
            + "Het zoeken is gelimiteerd door een timer en u moet, nadat u alle CV delen heeft gevonden of uw tijd op dreigt te raken, praten met een fictieve baas als 'sollicitatie'. " 
            + "U zult aan het eind een score te zien krijgen hoe goed u het spel heeft gespeeld. " 
            + "<br> <br> Deze CV game is bedoeld om op een leuke manier kennis te maken met mij en mijn CV, en als een voorbeeld van wat ik kan maken in Python3. " 
            + "<br> <br> Klik op deze knop om Guido's CV te downloaden voor Windows OS. "
            + "<br> <span class='highlight'> Let op: macOS (Macbooks), Chrome OS (Chromebooks) en linux zijn niet supported! </span> " 
            + "<br> <a href='CV V0.5.exe' download> <button class='button' >Download CV game</button> </a> </div> ",
          CV_game_text2:"<div class='text'> Wanneer u een waarschuwing krijgt van Windows Defender tijdens het downloaden van het bestand kunt u het bestand alsnog openen door de weergeven instructies op de afbeelding te volgen. " 
            + "<br> <br> <span class='highlight'> Let op: Deze instructies werken alleen mits windows defender smartscreen op uw pc niet ingesteld staat op 'blokkeren'. </span> " 
            + "<br> <br> Excuses voor dit ongemak maar het certificaat benodigd voor het digitaal ondertekenen van mijn videogame om deze waarschuwing weg te halen kost helaas 500 euro per jaar :( " 
            + "<br> <br> Naast Windows Defender Smartscreen kunt u ook nog een aparte waarschuwing krijgen van eventueel eigen geinstalleerde virusprogramma's. " 
            + "Vaak kunt u tijdens deze waarschuwing meteen aangeven of u het bestand alsnog wilt openen.",
          overzicht:"Snel overzicht",
          overzicht_text:"<ul> <li> Ik heb een rijbewijs B en ben in het bezit van een auto voor woon-werk reizen. " 
            + "</li> <br> <br> <li> Tijdens mijn vrije tijd ben ik aan het gamen, speel ik bordspelletjes of maak ik foto's in de natuur. " 
            + "</li> <br> <br> <li> Ik ben NIET LANGER op zoek naar een nieuwe baan!! " 
            + "</li> <br> <br> <li> Mijn favoriete dier is de pinguin, mijn favoriete game serie is Pokémon en mijn favoriete kleur is blauw. " 
            + "</li> </ul>",
          // contact:"Contactgegevens",
          // contact_text: "U kunt hier uw naam, email en een kort berichtje achterlaten als u mij wilt contacteren. "
          // + "<br> <br>"
          // + "<form action='' method='post'> Naam: <input type='text' name='naam'> "
          // + "<br> <br> "
          // + "Email: <input type='text' name='bezoeker-email'> "
          // + "<br> <br> "
          // + "Bericht:<br><textarea rows='5' name='message' cols='30'></textarea><br> "
          // + "<input type='submit' name='submit' value='Versturen' id='verstuurknop'> "
          // + "</form>"
          // + "<br>",
          // mail_confirmation: "Uw mail is succesvol verzonden, een antwoord volgt zo spoedig mogelijk."
        },
      english : {
        title : "Guido's profile page", 
        guido_info_nav:"Who am i?", 
        hobbies_nav:"Hobbies",
        fotografie_nav:"Photography",
        gaming_nav:"Gaming",
        studie_nav:"Study",
        werk_nav:"Work",
        werkervaring_nav:"Work Experience",
        droombaan_nav:"My dream job",
        projecten_nav:"Projects",
        webgame_nav:"Browser games",
        overzicht_nav:"Summary",
        contact_nav:"Contact",
        language:"Language",
        guido_info:"Who am I?",
        wie_ben_ik_text: "My name is Guido Smit. "
          + "I have graduated as a Master of Science in biology and have also learned how to work as a software developer and testspecialist. " 
          + " <br> <br> I have always had a great passion for nature and nature-photography and in my free time you can often find me outdoors with a camera around my neck. " 
          + "<br> <br> If I am not outside you can often find me playing videogames or boardgames together with my friends. "
          + "The love for videogames was also what sparked my interest in computers and IT. <br> <br> I have been trained as a software developer, by Young Capital, and as a testspecialist by KZA. "
          + "<br> <br> Since my traineeships I have spend half a year working as a software developer and am currently working at the Rabobank, via KZA, in the AML (Anti money Laundering) departement. " 
          + "<br> <br> Through this website I aim to provide an quick introduction to me and my skills. " 
          + "<br> <br> <br> <a href='https://www.linkedin.com/in/guido-smit-zandvoort/' class='linkedin'><i class='fa fa-linkedin'></i></a> <a href='https://www.facebook.com/GuidoSmitPhotography/' class='facebook'><i class='fa fa-facebook'></i></a>",
        hobbies:"Hobbies",
        studie:"Study",
        bachelor_text:"My study started with a Bachelor in biology at Leiden University. "
        + "During this Bachelor I focused myself on the macrobiological side of biology. "
        + "<br> <br> The most memorable parts of the Bachelor were the fieldwork projects, such as a study of the Wadden area in the Netherlands or a flora excursion to learn how to identify plants. "
        + "<br> <br> My internship was really exciting and special, as I was allowed to work at Naturalis Biodiversity Center on fossil insectivores from the Miocene era. "
        + "<br> <br>",
        master_text: "For my Master I moved from Leiden University to Wageningen University. "
          + "The reason for this change of university was that Wageningen University matched my interest for the macrobiological side of biology more so than Leiden. " 
          + "<br> <br> During my Master I have specialised myself in animal behaviour and ecology. These specialisations played a big part in the 2  major projects of the Master: the internship and thesis. " 
          + "<br> <br> My internship took place in Malawi (Afrika). There, I studied the bird species composition of the mountainous rainforest of Ntchisi, and the surrounding Miombo savannah. " 
          + "<br> <br> My thesis took place in the Netherlands and consisted of a study on 2 different species of crayfish and their personality and behaviour at different oxygen levels in their environment. " 
          + "<br> <br>",
        fotografie:"Photography",
        fotografie_text: "I have been a big fan of photography since a very young age. " 
          + "When I was still little I already walked around with cheap 1-time use cameras, and later on I walked in the dunes together with my grandma using her camera. " 
          + "<br> <br> My favorite subject is nature and everything it encompasses, especially wildlife. " 
          + "I can often be found in the dunes surrounding Zandvoort and Amsterdam, as there you are allowed to hike off-trail and truly explore the area. " 
          + "<br> <br> I also used photography during my Master study, in a research on bird species populations residing within the mountain rainforest of Ntchisi (Malawi) " 
          + "<br><br> <-- Feel free to browse through some of my favorite photos. " 
          + "<button class='button_left' onclick='plusDivs(-1)'>&#10094;</button> <button class='button_right' onclick='plusDivs(+1)'>&#10095;</button> <br> <br>",
        gaming:"Gaming",
        gaming_text: "Besides photography, much of my free time goes into playing videogames and boardgames with my friends. " 
          + "This hobby also started at a young age, when I got my first Gameboy with a Pokémon game, and has continued to be my hobby ever since. " 
          + "<br> <br> During the weekends I often meet with my friends to play some boardgames, of which I have obtained quite the collection already (see picture). " 
          + "<br> <br> Thanks to games and gaming my interest for IT was sparked early on. Partially due to having to learn how to set up multiplayer servers for gaming with friends online during the time period where many games did not inherently have this feature. " 
          + "<br> <br>",
        werk:"Work",
        werkervaring:"Work Experience",
        werk_text:"My first job was as a dishwasher and waiter at Theater de Krocht in Zandvoort. " 
          + "This theater hosts parties, music shows and many other events making it so that working here was always exciting and very socially interactive. " 
          + "<br> <br> After my study I became a sample collector at Aquon. " 
          + "This function meant that I was outside most of the time and it has given me lots of driving experience in a work-van, but in the end it just wasn't the right place for me. " 
          + "<br> <br> During my traineeship at Young Capital I have worked for half a year as a software developer on the website gereedschapbeheer.nl, at the company Mecona IT. " 
          + "I have taken a liking to software development and I am now on the lookout for a new place to continue utilizing my new found programming skills. " 
          + "<br> <br> Currently, I have worked with Python3, PHP, Javascript, HTML, CSS and in lesser amounts SQL en Java.",
        droombaan:"My dream job",
        droombaan_text:"I am currently looking for a new job via Young Capital. " 
          + "The job I am looking for would be 40 hour/week, within reasonable range of Zandvoort aan Zee via car or public transportation. " 
          + "<br> <br> Developing software and programming, both front-end and back-end, has really been to my liking since I have completed my bootcamp, and I would really like to fullfill a position which encompasses at least some form of development. " 
          + "<br> <br> I am a social person and I like working in teams or groups and to have a nice chat with the colleagues. " 
          + "I hope to find a workplace that encourages asking questions, stimulates teamwork and has a nice and friendly work atmosphere. " 
          + "<br> <br>Do you and/or your company recognize yourself in the description of my dream job? If you are interested in me as an employee you can contact my manager at Young Capital. " 
          + "My contact info and that of Young Capital can be found at the bottom of the page at the contact section, or you can jump to it quickly by clicking on contact in the navigation bar. " 
          + "<br> <br> Furthermore, if you have a pc running on Windows OS, you can play my self-made CV game to get to know more about my skills and me in a fun way. ",
        CV_game:"My CV game",
        instructions:"<img src='Images\\Instructions2.png' alt='Instructions' class='image'>",
        CV_game_text1:"I have turned my CV into a videogame programmed in Python3. " 
          + "In this videogame you are playing as me (Guido) and you have a top-down view of a fictive town in which you can walk around and search for parts of my CV. " 
          + "The searching is limited by a timer and you have to, after  collecting all CV parts or when you are close to running out of time, speak with a fictive 'boss' character as a way of applying for a job. " 
          + "At the end at the game you will be given a score to show how well you have played the game. " 
          + "<br> <br> This CV game is meant as a fun and interactive way to get to know me and my CV, and as an example of what I can create in Python3. " 
          + "<br> <br> Click this button below to download my CV game for Windows OS. "
          + "<br> <span class='highlight'> Attention: macOS (Macbooks), Chrome OS (Chromebooks) and linux are not supported! </span> " 
          + "<br> <a href='CV V0.5.exe' download> <button class='button' >Download CV game</button> </a> </div> ",
        CV_game_text2:"<div class='text'> When you are getting a warning from Windows Defender while downloading the file you can still run the file by following the instructions as seen on the screenshot on the left. " 
          + "<br> <br> <span class='highlight'> Attention: These instructions only work when Windows Defender is not set to 'block'. </span> " 
          + "<br> <br> My excuses for the inconvenience but the certificate needed to digitally sign my videogame to remove this warning costs around 500 euros a year :( " 
          + "<br> <br> Besides Windows Defender you might get additional warning from your own antivirus. " 
          + "These programms often have an option to choose 'run anyway' to keep on opening the file.",
        overzicht:"Quick summary",
        overzicht_text:"<ul> <li> I have a dutch drivers license (B) and I own a car for easier travelling to and from work. " 
          + "</li> <br> <br> <li> In my spare time I play videogames, play boardgames or make photos outside. " 
          + "</li> <br> <br> <li> I am NO LONGER looking for new job position!!! " 
          + "</li> <br> <br> <li> My favorite animal is the penguin, my favorite game series is Pokémon and my favorite color is blue. " 
          + "</li> </ul>"
        // contact:"Contact info",
        // contact_text: "If you wish to contact me you can fill in your name, email and a short message here. "
        //   + "<br> <br>"
        //   + "<form action='' method='post'> Name: <input type='text' name='naam'> "
        //   + "<br> <br> "
        //   + "Email: <input type='text' name='bezoeker-email'> "
        //   + "<br> <br> "
        //   + "Message:<br><textarea rows='5' name='message' cols='30'></textarea><br> "
        //   + "<input type='submit' name='submit' value='Send Message' id='verstuurknop'> "
        //   + "</form>"
        //   + "<br>",
        // mail_confirmation: "Your mail has been sent succesfully, a reply will follow as soon as possible."
        }
    }

    $language= $("#lang").attr("name");


    $("#title").html(lang[($language.toString())]["title"]);
    $("#guido_info_nav").html(lang[($language.toString())]["guido_info_nav"]);
    $("#hobbies_nav").html(lang[($language.toString())]["hobbies_info_nav"]);
    $("#fotografie_nav").html(lang[($language.toString())]["fotografie_nav"]);
    $("#gaming_nav").html(lang[($language.toString())]["gaming_nav"]);
    $("#studie_nav").html(lang[($language.toString())]["studie_nav"]);
    $("#werk_nav").html(lang[($language.toString())]["werk_nav"]);
    $("#werkervaring_nav").html(lang[($language.toString())]["werkervaring_nav"]);
    $("#droombaan_nav").html(lang[($language.toString())]["droombaan_nav"]);
    $("#projecten_nav").html(lang[($language.toString())]["projecten_nav"]);
    $("#webgame_nav").html(lang[($language.toString())]["webgame_nav"]);
    $("#overzicht_nav").html(lang[($language.toString())]["overzicht_nav"]);
    $("#contact_info_nav").html(lang[($language.toString())]["contact_nav"]);
    $("#language").html(lang[($language.toString())]["language"]);
    $("#guido_info").html(lang[($language.toString())]["guido_info"]);
    $("#wie_ben_ik_text").html(lang[($language.toString())]["wie_ben_ik_text"]);
    $("#hobbies").html(lang[($language.toString())]["hobbies"]);
    $("#bachelor_text").html(lang[($language.toString())]["bachelor_text"]);
    $("#master_text").html(lang[($language.toString())]["master_text"]);
    $("#studie").html(lang[($language.toString())]["studie"]);
    $("#fotografie").html(lang[($language.toString())]["fotografie"]);
    $("#fotografie_text").html(lang[($language.toString())]["fotografie_text"]);
    $("#gaming").html(lang[($language.toString())]["gaming"]);
    $("#gaming_text").html(lang[($language.toString())]["gaming_text"]);
    $("#werk").html(lang[($language.toString())]["werk"]);
    $("#werkervaring").html(lang[($language.toString())]["werkervaring"]);
    $("#werk_text").html(lang[($language.toString())]["werk_text"]);
    $("#droombaan").html(lang[($language.toString())]["droombaan"]);
    $("#droombaan_text").html(lang[($language.toString())]["droombaan_text"]);
    $("#CV_game").html(lang[($language.toString())]["CV_game"]);
    $("#instructions").html(lang[($language.toString())]["instructions"]);
    $("#CV_game_text1").html(lang[($language.toString())]["CV_game_text1"]);
    $("#CV_game_text2").html(lang[($language.toString())]["CV_game_text2"]);
    $("#overzicht").html(lang[($language.toString())]["overzicht"]);
    $("#overzicht_text").html(lang[($language.toString())]["overzicht_text"]);
    // $("#contact").html(lang[($language.toString())]["contact"]);
    // $("#contact_text").html(lang[($language.toString())]["contact_text"]);
    // $("#mail_confirmation").html(lang[($language.toString())]["mail_confirmation"]);



  });
});

// foto slider
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
};

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  (x[slideIndex-1]).style.display = "block";
};



