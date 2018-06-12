class SocialProfile{
    
    constructor(public profileName:string, private age:number, private dateofBirth:string,
        private noOfFriends:number, public livesIn:string, public works?:string)
    { 
        this.profileName=profileName;
        this.age=age;
        this.dateofBirth=dateofBirth;
        this.noOfFriends=noOfFriends;
        this.livesIn=livesIn;
        this.works=works;
    }


    getnoOfFriends=()=>{
        return this.noOfFriends;
    }
    setnoOfFriends=()=>{
         this.noOfFriends=70;
    }

    getnumberOfFriends=()=>{
        return this.setnoOfFriends();
    }


    getdateOfBirth =():string=>{
        return this.dateofBirth;
    }
}

let profile = new SocialProfile("Priyankareddykarri",23,"15 Apr 1994",120,"Hyderabad");
console.log("DateOfBirth:"+profile.getdateOfBirth());
let friends=profile.getnumberOfFriends();
console.log("Priyanka New Friends:"+profile.getnoOfFriends());