//declaracao de objetos 
const link_linkedin_obj = document.querySelectorAll(".link_linkedin")
const link_github_obj = document.querySelector(".link_github")
const link_apps_obj = document.querySelector("link_app")
//variale maps for app : link_for_app
const app_map = {
    login : "https://github.com/dvof-aluno-ifnmg/app_login",
    portfolio : "https://github.com/dvof-aluno-ifnmg/MyPortfolio"
}


//declaracao de links de variáveis 
const link_linkedin = "https://br.linkedin.com/"
const link_github = "https://github.com/dvof-aluno-ifnmg"




//definicao de valores
for(const i of link_linkedin_obj){ 
i.href = link_linkedin
}

for(const i of link_github_obj){
    i.href = link_github
}

for(const i of link_apps_obj){
    i.href
}