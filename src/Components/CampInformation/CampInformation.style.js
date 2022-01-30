import styled from 'styled-components';

const Title = styled.title`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  margin-bottom: 21px;
`;

const Intro = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
  padding-bottom: 16px;
`;

const ImageNoticeWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageNotice = styled.div`
  width: 70%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  margin: 20px 0 50px 0;
`;

const SliderWrap = styled.div`
  width: 480px;
  margin-bottom: 50px;

  .slick-prev {
    left: -57px;
  }

  .slick-next {
    right: -37px;
  }

  .slick-next:before {
    content: '→';
  }

  .slick-prev:before,
  .slick-next:before {
    color: #c2c2c2;
    font-size: 30px;
    opacity: 1;
  }
`;

const SlideImage = styled.div`
  width: 150px;
  height: 150px;
  /* background: url(1:1.png); */
  margin-right: 14px;
  border: 0.1px solid black;
`;

const NoticeWrap = styled.div`
  width: 482px;
  height: 93px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  margin-bottom: 37px;
`;

const Notice = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
`;

const CampInfoWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const Table = styled.table`
  width: 100%;
  padding-bottom: 60px;
`;

const Th = styled.th`
  display: flex;
  justify-content: flex-start;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
`;

const Td = styled.td`
  width: 70%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  padding-bottom: 18px;
`;

export const style = {
  Title,
  Intro,
  ImageNoticeWrap,
  ImageNotice,
  SliderWrap,
  SlideImage,
  NoticeWrap,
  Notice,
  CampInfoWrap,
  Table,
  Th,
  Td,
};