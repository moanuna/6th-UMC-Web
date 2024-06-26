import React from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트를 임포트합니다.
import styled from "styled-components";

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  max-height: 70px;
  border-bottom: 1px solid black;
  background-color: #1a237e;
  color: white;
`;

const MainLogo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: medium;
  font-weight: bold;
  padding: 10px;
  height: 100%;
  box-sizing: border-box;
  color: white;

  &:hover {
    text-decoration: none;
    color: white;
    font-size: larger;
    transition: font-size 0.2s ease;
  }
`;

const MovieCategory = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const CategoryList = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  //Link 컴포넌트 스타일링 따로해줌
  margin-right: 20px;
  color: white;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: none;
    color: white;
    font-size: larger;
    transition: font-size 0.2s ease;
  }
`;

export default function Header() {
  return (
    <HeaderBox>
      <MainLogo to="/popular">UMC MOVIE</MainLogo>
      <MovieCategory>
        <CategoryList>
          <StyledLink to="/">회원가입</StyledLink>
          <StyledLink to="/popular">Popular</StyledLink>
          <StyledLink to="/now-playing">Now Playing</StyledLink>
          <StyledLink to="/top-rated">Top Rated</StyledLink>
          <StyledLink to="/upcoming">Upcoming</StyledLink>
        </CategoryList>
      </MovieCategory>
    </HeaderBox>
  );
}
