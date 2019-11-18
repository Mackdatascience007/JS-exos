//* Fonctionnalité 1 :
//* On commence par un petit échauffement : lorsque l'utilisateur va cliquer sur le footer 
// (portant le tag <footer>), tu vas afficher le mot "clique" en console.
//* Cette fonctionnalité doit être codée avec un addEventListener("click", 
// function(){ } car c'est une bonne habitude à prendre ! 😇 

var foot = document.getElementsByTagName("footer");
var onFooterClick = function() {
    foot.textcontent = "Clique";
};
foot.addEventListener("click", function() {
    foot.textcontent = "Clique";
});