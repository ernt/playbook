const repo = {
    name: "LaunchX",
    author: "ernt",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }


   const issue =  {
       title:"new Issue",
       repositoryNameAssociated: "RepoLaunchX",
       status:"Open",
       numberOfComments:23,
       labels:"fix",
       author:"ernt",
       dateCreated: new Date(),
       lastUpdated: new Date(),
       getTitleAndAuthor(){
            return `The Issue is ${this.title}, Author: ${this.author},`
       }
      /* getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
       }
       */
   }

   const pull_request = {
       title:"new Issue",
       branchName:"Fix/branch",
       dateCreated: new Date(),
       status:"Open",
       repositoryNameAssociated:"RepoLaunchX",
       getStatus(){
           return this.status;
       }
      /*
       getTitleAndAuthor(){
        return `The Issue is ${this.title}, Author: ${this.author},`
            }
            */
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())
   