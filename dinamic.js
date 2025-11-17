//declaracao de objetos 
const link_linkedin_obj = document.querySelectorAll(".link_linkedin");
const link_github_obj = document.querySelectorAll(".link_github");
const link_apps_obj = document.querySelectorAll("link_app");
4//variale maps for app : link_for_app


//declaracao de links de variáveis 
const link_linkedin = "https://br.linkedin.com/";
const link_github = "https://github.com/dvof-aluno-ifnmg";

class MyProjects {
    constructor(name, link){
        this.name = name;
        this.link = link;
    }
}

const appLogin = new MyProjects("app_login", "https://github.com/dvof-aluno-ifnmg/app_login");


const appsListLink = [appLogin.link];

//definicao de valores
for(const i of link_linkedin_obj){ 
    i.href = link_linkedin;
}

for(const i of link_github_obj){
    i.href = link_github;
}

for(const i of link_apps_obj){
    i.href = appsListLink[0];
}