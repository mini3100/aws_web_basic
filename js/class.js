const user = {
    username: null,     //변수
    password: null,
    name: null,
    email: null,
    toString: () => {   //함수
        return "user(" + user.username + ", " + user.password + ", " + user.name + ", " + user.email + ")";
    }
}

user.username = "aaa";
user.password = "1234";
user.name = "정가영";
user.email = "aaa@gmail.com";

console.log(user.toString());
console.log(user);

class User {
    username;
    password;

    //생성자
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    usernameAndPasswordCheck(username, password) {
        console.log("입력한 아이디: " + username);
        console.log("입력한 비밀번호 : " + password);
        if(username !== this.username || password !== this.password){
            alert("로그인 실패");
            return;
        }
        alert("로그인 성공");
    }
}

const bbb = new User("bbb", "1234");
bbb.usernameAndPasswordCheck("ccc", "1234");