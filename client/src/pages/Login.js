import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Layout from "../components/Layout";
import styled from "styled-components";

const Login = ({ history }) => {
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");

  // useEffect(() => {
  //   window.Kakao.init("950d9cb4afd925ae08aeb0fc8924baf8");

  //   window.Kakao.Auth.createLoginButton({
  //     container: "#kakao-login-btn",
  //     success: function (authObj) {
  //       alert(JSON.stringify(authObj));
  //     },
  //     fail: function (err) {
  //       alert(JSON.stringify(err));
  //     },
  //   });
  // });

  const handleID = (e) => {
    setID(e.target.value);
  };

  const handlePW = (e) => {
    setPW(e.target.value);
  };

  function loginFetch() {
    window.sessionStorage.setItem("id", ID);
    history.push("/");
    fetch("http://16535b06.ngrok.io/member/login/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        user_id: ID,
        user_pw: PW,
      }),
    }).then((response) => {
      if (response.status === 200) {
        alert("정상 로그인 되었습니다");
        history.push("/");
        console.log(response);
      } else {
        alert("응, 틀렸어~");
      }
    });
  }
  const goRegister = () => {
    history.push("/register");
  };

  return (
    <Layout>
      <StyledLogin>
        <div className="contents">
          <div className="login-top">로그인</div>
          <div className="input-area">
            <input
              className="id"
              placeholder="아이디를 입력해주세요"
              onChange={handleID}
            ></input>
          </div>
          <div className="input-area">
            <input
              className="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={handlePW}
            ></input>
          </div>
          <div>
            <div className="finding">
              <span>아이디찾기</span>
              <span className="line"></span>
              <span>비밀번호찾기</span>
            </div>
          </div>
          <div className="button">
            <div className="login-button" onClick={loginFetch}>
              로그인
            </div>
          </div>
          <div className="button">
            <div className="register-button" onClick={goRegister}>
              회원가입
            </div>
          </div>
        </div>
      </StyledLogin>
    </Layout>
  );
};

export default withRouter(Login);

const StyledLogin = styled.div`
  div,
  span,
  p,
  label {
    border: unset;
  }

  .contents {
    width: 340px;
    margin: 12rem auto;
  }

  .login-top {
    font-size: 20px;
    font-weight: 800;
    display: flex;
    justify-content: center;

    margin: 35px 0;
  }
  .input-area {
    display: flex;
    justify-content: center;
  }
  .id,
  .password {
    width: 340px;
    height: 54px;
    border-radius: 4px;
    border: 1px solid #cfcccf;
    margin-bottom: 10px;
    text-indent: 20px;
    ::placeholder {
      font-weight: bold;
      color: #cfcccf;
    }
  }
  .line {
    border-right: 1px solid black;
    height: 10px;
    margin: auto 4px;
  }
  .finding {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    margin-top: 5px;
    margin-bottom: 30px;
    font-size: 12px;
  }
  .button {
    display: flex;
    justify-content: center;
  }
  .login-button,
  .register-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 340px;
    height: 52px;
    margin-bottom: 10px;
    background-color: #ff8a3d;
    color: #fff;
    cursor: pointer;
  }
  .register-button {
    color: #ff8d3d;
    background-color: unset;
    border: 1px solid #ff8a3d;
  }
  input {
    &:focus {
      border: 1px solid #000;
      outline: none;
    }
  }
`;
