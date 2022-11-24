class engeneer{
    constructor(name,id,email, GitHubUser){
        this.name =name;
        this.id= id;
        this.email = email
        this.GitHubUser = GitHubUser
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getGithub(){
        return this.GitHubUser;
    }

    getRole(){
        return "engeneer"
    }
}

module.exports = engeneer;