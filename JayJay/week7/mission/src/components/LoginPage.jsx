import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginInputField from "./LoginInputField";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 20px 0;
  border-radius: 20px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  width: 500px;
  max-width: 500px;
  box-sizing: border-box;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const LoginPage = () => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const inputFields = [
    { type: "text", placeholder: "아이디를 입력해주세요", name: "id" },
    {
      type: "password",
      placeholder: "비밀번호를 입력해주세요",
      name: "password",
    },
  ];

  const validateField = (field, value) => {
    let errMsg = "";
    switch (field) {
      case "id":
        errMsg = !value ? "아이디를 입력해주세요." : "";
        break;
      case "password":
        errMsg = !value ? "비밀번호를 입력해주세요." : "";
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [field]: errMsg }));
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Object.values(errors).every((error) => error === "") &&
      Object.values(formData).every((value) => value !== "")
    ) {
      console.log("Form data is valid and was submitted:", formData);
      alert("로그인이 성공적으로 완료되었습니다.");
    } else {
      alert("유효성 검사를 모두 통과해야 합니다.");
    }
  };

  return (
    <Container>
      <h2 style={{ color: "#fff" }}>로그인 페이지</h2>
      <Form onSubmit={handleSubmit}>
        {inputFields.map((field) => (
          <LoginInputField
            key={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            error={errors[field.name]}
          />
        ))}
        <Button
          type="submit"
          disabled={!Object.values(errors).every((error) => error === "")}
        >
          로그인
        </Button>
      </Form>
      <Link to="/signup" style={{ color: "#fff", marginTop: "10px" }}>
        회원가입이 필요하신가요? 회원가입 페이지로 이동하기
      </Link>
    </Container>
  );
};

export default LoginPage;
