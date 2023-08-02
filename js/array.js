window.onload = () => {
    const numbers = [1, 2, 3, 4, 5];
    const numbers2 = numbers.map((n) => {
        return n * 2;
    });

    console.log(numbers.join(" "));
    console.log(numbers2);
    loadUserList();
}

const userList = new Array();
userList.push({username: "aaa", password: "1111"});
userList.push({username: "bbb", password: "2222"});
userList.push({username: "ccc", password: "3333"});
userList.push({username: "ddd", password: "4444"});
userList.push({username: "eee", password: "5555"});
userList.push({username: "fff", password: "6666"});

const loadUserList = () => {
    const userListTbody = document.querySelector(".user-list");
    // innerHTML : html 안에 코드 삽입
    // 문자열에 ${} 쓰면 변수 삽입 가능
    // userListTbody.innerHTML = `
    //     <tr>
    //         <td>${userList[0].username}</td>
    //         <td>${userList[0].password}</td>
    //     </tr>
    // `;

    // for(let i = 0; i < userList.length; i++) {
    //     // 기존 코드에 문자열을 이어서 적어줘야하기 때문에 +=으로 해줌
    //     // = 으로 하면 대입이 되어 덮어씌워짐.
    //     userListTbody.innerHTML += `
    //         <tr>
    //             <td>${userList[i].username}</td>
    //             <td>${userList[i].password}</td>
    //         </tr>
    //     `;
    // }

    const mapTest = userList.map((user) => {
        return `
            <tr>
                <td>${user.username}</td>
                <td>${user.password}</td>
            </tr>
        `;
    });

    userListTbody.innerHTML = mapTest.join("");
    console.log(mapTest.join(""));
};
