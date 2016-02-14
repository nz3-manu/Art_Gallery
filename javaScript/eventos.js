function Gallery () {
  this.information = [  {
      "name": "Royal Red And Blue",
      "artist": "Mark Rothko",
      "price": "$75.1",
      "about": "The majestic canvas was one of eight works hand-selected by Rothko for his landmark solo show of the same year at the Art Institute of Chicago.",
      "imageurl": "assets/images/royal_red_and_blue.jpg"
    },
    {
      "name": "False Start",
      "artist": "Jasper Johns",
      "price": "$80",
      "about": "Another painting formerly owned by Geffen and allegedly sold to CEO of the Citadel Investment Group, Kenneth C. Griffin, making it the most expensive painting to be sold by a living artist, the iconic Jasper Johns.",
      "imageurl": "assets/images/false_start.jpg"
    },
    {
      "name": "Portrait of Dr. Gachet",
      "artist": "Vincent van Gogh",
      "price": "$82.5",
      "about": "Up for auction in 1990 and purchased by Japanese businessman Ryoei Saito, this was – at the time- the most expensive painting in the world. Saito (then 75) caused controversy at the time, stating that when he died, he’d have the painting cremated along with him. This was later cleared up as he claimed that he was only using the expression to show his intense affection for it.",
      "imageurl": "assets/images/portrait_of_dr_gachet.jpg"
    },
    {
      "name": "Portrait of Adele Bloch-Bauer II",
      "artist": "Gustav Klimt",
      "price": "$87.9",
      "about": "The only model to be painted twice by Klimt and sold a few months after the first version, this portrait of Bloch-Bauer was part of a lot in 2006 of four Klimt paintings that went on to fetch a total of $192 million. Buyer unknown. Click Here and go compare other paintings by Gustav Klimt.",
      "imageurl": "assets/images/portrait_of_adele_bloch-bauer_2.jpg"
    },
    {
      "name": "Dora Maar au Chat",
      "artist": "Pablo Picasso",
      "price": "$95.2",
      "about": "Another Picasso, the second highest price ever fetched at auction, and another anonymous buyer. Auctioned in 2006, a mysterious Russian bidder took this home (along with a Monet and a Chagall, spending over $100 million) and no one has since found out who he was. The ownership of the painting has still not been made public.",
      "imageurl": "assets/images/dora_maar_au_chat.jpg"
    },
    {
      "name": "Nude, Green Leaves and Bust",
      "artist": "Pablo Picasso",
      "price": "$106.5",
      "about": "This sensual and colorful masterpiece is the most expensive work by Picasso ever sold at auction. The work, formerly in the collection of Mrs. Sidney F. Brody, had been never exhibited in public since 1961.",
      "imageurl": "assets/images/nude_green_leaves_and_bust.jpg"
    },
    {
      "name": "Portrait of Adele Bloch-Bauer I",
      "artist": "Gustav Klimt",
      "price": "$135",
      "about": "This was sold by Maria Altmann, who – after a lengthy and complicated court battle – was deemed rightful owner of this Klimt and several others. Altmann was named as an inheritor of the painting in the will of by the widowed husband of the model herself, despite the efforts of the Austrian State, as Adele Bloch-Bauer had originally left the painting to the State Gallery in her own will. The painting was bought by Ronald Lauder for his Neue Galerie in New York, to be the centerpiece of a collection of Jewish-owned art rescued from the Nazi looting that took place in the Second World War.",
      "imageurl": "assets/images/portrait_of_adele_bloch-bauer_1.jpg"
    },
    {
      "name": "No 5",
      "artist": "Jackson Pollock",
      "price": "$140",
      "about": "It is claimed by the New York Times that this painting was sold by David Geffen (of Geffen Records), to David Martinez (managing partner of Fintech Advisory). However, a press release issued on behalf of Martinez states that he didn’t actually purchase the painting. So the truth is shrouded in mystery, and it can only be rumored to have sold for a record-breaking $140 million.",
      "imageurl": "assets/images/number_5.jpg"
    },
    {
      "name": "The Dream",
      "artist": "Pablo Picasso",
      "price": "$155",
      "about": "The Dream (La Rêve) is one of Picasso’s most sensual and famous paintings, depicting her lover Marie-Therese Walter sitting on a red armchair with her eyes closed. In 2006, Steve Wynn agreed to sell the painting to Steven Cohen for $139 million, but the sale was cancelled when Mr. Wynn accidentally damaged the work.",
      "imageurl": "assets/images/the_dream.jpg"
    }]
  this.init = function(){
    var sumObject = " ";
    var sumTotal = " ";
    var eachThree = " ";
    var full = " ";
    var elements = "";

   for (var i=0; i<this.information.length; i++) {
     var name = this.information[i].name;
     var artist = this.information[i].artist;
     var price = this.information[i].price;
     var about = this.information[i].about;
     var imageurl = this.information[i].imageurl;
          full = name + artist + price + about;
          sumObject=  sumObject + `<div class = 'box__photo'> <img src = "${imageurl}">
           <div class='box__footer  box__footer--style'>  <h1>${name}</h1> <p>${artist}<br>${about}
          <br>${price}</p> </div></div>`;

         if (0 == (i+1)%3) {
           eachThree = eachThree + "<div class='wrapPhotos__box'>" + sumObject + "</div>";
           sumObject = "";
         }
   }
   var target = document.getElementsByClassName('wrapPhotos')[1];
        target.innerHTML = eachThree;
 };
}

var Gallery = new Gallery
Gallery.init();
