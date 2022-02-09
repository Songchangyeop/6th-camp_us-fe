import React, { useEffect, useState } from 'react';
import * as campService from '../../Service/camps';
import { useLocation } from 'react-router';
import SearchLocation from '../../Components/SearchLocation/SearchLocation';
import styled from 'styled-components';
import SearchBar from '../../Components/SearchBar/SearchBar';

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [campList, setCampList] = useState([]);
  const { state } = useLocation();

  async function getCampList() {
    // 백엔드 api 완성되면 Search api 사용 예정
    setIsLoading(true);
    const response = await campService.getCamp();
    setCampList(response);
    setIsLoading(false);
  }

  useEffect(() => {
    getCampList();
  }, []);

  return (
    <Container>
      <SearchBar />
      {!isLoading && <SearchLocation campList={campList} />}
    </Container>
  );
};
export default SearchPage;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px 58px 22px 38px;
  width: 100%;
  height: calc(100vh - 65px);
`;
