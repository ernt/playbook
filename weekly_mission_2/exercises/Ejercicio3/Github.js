class Repository {
    constructor(name, author, language, stars){
     this.name = name
     this.author = author
     this.language = language
     this.stars = stars
    }
  
    getInfo(){ // es una función que ejecutará cualquier objeto instanciado de esta clase
      return `Repository ${this.name} has ${this.stars} stars`
    }
  }
 
  const myRepo = new Repository("LaunchX", "ernt", "js", 100)
  console.log(myRepo.getInfo())

  class PullRequest {
    constructor(repo, title, lines_changed){
      this.repo = repo
      this.title = title
      this.lines_changed = lines_changed
      this.status = "OPEN"
      this.dateCreated = new Date() // esto guardará la fecha actual en que se instancia el objeto
      }
      getStatus(){
        return this.status;
    }
  
    getInfo(){
      return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
    }
  }

  class issue{
      constructor(title,repositoryNameAssociated,status,numberOfComments,labels,author){
        this.title=title;
        this.repositoryNameAssociated=repositoryNameAssociated;
        this.status=status;
        this.numberOfComments=numberOfComments;
        this.labels=labels;
        this.author=author;
        this.dateCreated=new Date();
        this.lastUpdate=new Date();
      }

    getTitleAndAuthor(){
         return `The Issue is ${this.title}, Author: ${this.author},`
    }
 
}
  
  const myPR1 = new PullRequest("LaunchX", "Mi Primer PR", 100)
  console.log(myPR1.getInfo())
  
  const myPR2 = new PullRequest("LaunchX", "Mi segundo PR", 99)
  console.log(myPR2.getInfo())