document.querySelector("#btnDangKy").onclick = function () {
  var member = new Member();
  member.email = document.querySelector("#emailMember").value;
  member.password = document.querySelector("#passwordMember").value;
  member.name = document.querySelector("#nameMember").value;
  //   member.passwordConfirm = document.querySelector("#passwordMember").value;
  member.gender = document.querySelector("input[name=gender]:checked").value;
  member.phone = document.querySelector("#phoneMember").value;
  console.log("member", member);
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    // responseType: JSON,
    data: member,
  });
  promise.then(function (result) {
    console.log("result", result.data);
  });
  promise.catch(function (err) {
    console.log(err);
  });
};
