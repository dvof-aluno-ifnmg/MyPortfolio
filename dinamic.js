    class MyProjects {
        constructor(name, link){
            this.name = name;
            this.link = link;
        }
    }
    //declaracao de objetos 
    const link_linkedin_obj = document.querySelectorAll(".link_linkedin");
    const link_github_obj = document.querySelectorAll(".link_github");
    const link_apps_obj = document.querySelectorAll(".link_app");
    const autor_obj = document.querySelectorAll(".autor");
    const profissao_obj = document.querySelectorAll(".profissao");
    //variale maps for app : link_for_app

    //declaracao de links de variáveis 
    const link_linkedin = "https://br.linkedin.com/";
    const link_github = "https://github.com/dvof-aluno-ifnmg";
    const autor = "Daniel";
    const profissao = "Programador"


    const appLogin = new MyProjects("app_login", "https://github.com/dvof-aluno-ifnmg/app_login");
    const appPortfolio = new MyProjects("Portfolio", "https://github.com/dvof-aluno-ifnmg/MyPortfolio")
    const appsListLink = [appLogin.link, appPortfolio.link];

    //definicao de valores
    for(const i of link_linkedin_obj){ 
        i.href = link_linkedin;
    }

    let iterator = 0;
    for(const i of link_apps_obj){
        i.href = appsListLink[iterator];
        iterator++;
    }

    for(const i of link_github_obj){
        i.href = link_github;
    }

    for(const i of autor_obj){
        i.textContent = autor;
        if(i.tagName == "TITLE"){
            i.textContent = `Portfolio - ${autor}`
        }
    }
      for(const i of profissao_obj){
        i.textContent = profissao;
        i. = "blue";
    }