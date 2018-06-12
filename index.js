var SocialProfile = /** @class */ (function () {
    function SocialProfile(profileName, age, dateofBirth, noOfFriends, livesIn, works) {
        var _this = this;
        this.profileName = profileName;
        this.age = age;
        this.dateofBirth = dateofBirth;
        this.noOfFriends = noOfFriends;
        this.livesIn = livesIn;
        this.works = works;
        this.getnoOfFriends = function () {
            return _this.noOfFriends;
        };
        this.setnoOfFriends = function () {
            _this.noOfFriends = 70;
        };
        this.getnumberOfFriends = function () {
            return _this.setnoOfFriends();
        };
        this.getdateOfBirth = function () {
            return _this.dateofBirth;
        };
        this.profileName = profileName;
        this.age = age;
        this.dateofBirth = dateofBirth;
        this.noOfFriends = noOfFriends;
        this.livesIn = livesIn;
        this.works = works;
    }
    return SocialProfile;
}());
var profile = new SocialProfile("Priyankareddykarri", 23, "15 Apr 1994", 120, "Hyderabad");
console.log("DateOfBirth:" + profile.getdateOfBirth());
var friends = profile.getnumberOfFriends();
console.log("Priyanka New Friends:" + profile.getnoOfFriends());
