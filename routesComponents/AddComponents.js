
let AddComponents = $("main");

title = "C-Link ";

var routes = [
    // changement de page
    {path: "#/notfound", name: "notfound", component: "errorPage.html"},
    {path: "#/", name: "step1", component: "step1.html"},
    {path: "#/step2", name: "step2", component: "step2.html"},
    {path: "#/step3", name: "step3", component: "step3.html"},
    {path: "#/step4", name: "step4", component: "step4.html"},
];

let viewsFolder = "views/components/";

var HashChange = function(){
var hash = window.location.hash;
var hashRoutes;
var hashComponent;
console.log(hash)
    if (hash.startsWith("#/") && hash.length>2){
        // hash = hash.replace("#/", "");

        for (let ind = 0; ind < routes.length; ind++) {
            const route = routes[ind];
            if (window.location.hash == route["path"]) {
                hashRoutes = route["name"];
                hashComponent = route["component"];
            }
        }
        if (hashRoutes) {
            title = "HugoClavinas | " + hashRoutes;
            $("title").html(title);
            AddComponents.load( viewsFolder +hashComponent );
        }else{
            window.location = "#/notfound";
        }
    }else if(hash.startsWith("#") && hash.length>2){

        for (let ind = 0; ind < routes.length; ind++) {
            const route = routes[ind];
            if (window.location.hash == route["path"]) {
                hashRoutes = route["name"];
                hashComponent = route["component"]
            }
        }
        if (hashRoutes) {
            AddComponents.load( viewsFolder +hashComponent );
            window.location = hashRoutes;
        }else{
            window.location = "#/notfound";
        }
    }
    else{
        title = "HugoClavinas | Accueil";
        $("title").html(title);
        hashComponent = "step1.html";
        AddComponents.load( viewsFolder +hashComponent );
    }
}

window.onhashchange = HashChange
HashChange();