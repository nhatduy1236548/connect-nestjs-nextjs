import React from 'react';
import styled from 'styled-components';

// Định nghĩa kiểu cho các phần tử trong trang web
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1em;
  font-family: sans-serif;
`;

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1em;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin-right: 1em;
  }

  li a {
    color: #fff;
    text-decoration: none;
  }
`;

const Main = styled.main`
  padding: 1em;
`;

const Section = styled.section`
  margin-bottom: 2em;
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 0.5em;
`;

const Paragraph = styled.p`
  line-height: 1.5;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1em;
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Header>
        <h1>My Website</h1>
        <Nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </Nav>
      </Header>
      <Main>
        <Section>
          <Title>Welcome to My Website</Title>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo velit eu malesuada vulputate.</Paragraph>
        </Section>
        <Section>
          <Title>About Us</Title>
          <Paragraph>Quisque id purus libero. Aliquam erat volutpat. In hac habitasse platea dictumst. Donec auctor bibendum magna, eget convallis elit vehicula eu.</Paragraph>
        </Section>
        <Section>
          <Title>Contact Us</Title>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo velit eu malesuada vulputate.</Paragraph>
        </Section>
      </Main>
      <Footer>
        <p>&copy; 2023 My Website</p>
      </Footer>
      <img src="https://vn.images.search.yahoo.com/images/view;_ylt=Awrx.y9_eSlkwwwovuC.LIpQ;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzNhYjcyMzlmN2Q3ZWY4ODU4ODQ1ODhlZDk5MzBjY2Q3BGdwb3MDNwRpdANiaW5n?back=https%3A%2F%2Fvn.images.search.yahoo.com%2Fyhs%2Fsearch%3Fp%3D3%2Bh%25C3%25ACnh%2B%25E1%25BA%25A3nh%2B%25C4%2591%25E1%25BA%25B9p%26ei%3DUTF-8%26type%3Dfc_ADDA49F0A8D_s58_g_e_d050421_n9998_c24%26fr%3Dyhs-fc-2461%26hsimp%3Dyhs-2461%26hspart%3Dfc%26param1%3D7%26param2%3DeJwti0EOgyAQRa8yS00MMgq0xGN01RgXVKkSEIza2vT0HZNmNu%252B%252F%252F2d0Q9t0tztyLiot2qKLlLXWV8Kz4pIKpNBTqM6BW4hQMFSaYS1ZJUmONpF9R8KXIZrT14VgSsk4ZIeLQzo2iDsgZ7wBEko08FEiB7MswR724d1eyvrCagWZn%252FY5FBCctzDa3qcc%252BmlNsy0RkfHzYDNPs7r%252Fyw%252FiBjrt%26tab%3Dorganic%26ri%3D7&w=1920&h=1280&imgurl=phunugioi.com%2Fwp-content%2Fuploads%2F2020%2F10%2Fhinh-anh-thien-nhien-buon.jpg&rurl=https%3A%2F%2Fwww.tpsearchtool.com%2Fimages%2F40-hinh-anh-dep-nhat-ve-phong-canh-trong-2020-phong-canh-canh-hinh-anh&size=334.2KB&p=3+h%C3%ACnh+%E1%BA%A3nh+%C4%91%E1%BA%B9p&oid=3ab7239f7d7ef885884588ed9930ccd7&fr2=&fr=yhs-fc-2461&tt=40+Hinh+Anh+Dep+Nhat+Ve+Phong+Canh+Trong+2020+Phong+Canh+Canh+Hinh+Anh+...&b=0&ni=240&no=7&ts=&tab=organic&sigr=FpyDzMkgQ9Q4&sigb=YwDgRHIC4lRK&sigi=NomUQLea0nfE&sigt=6Ck.d5PtPtkC&.crumb=TXkXjGzDP50&fr=yhs-fc-2461&hsimp=yhs-2461&hspart=fc&type=fc_ADDA49F0A8D_s58_g_e_d050421_n9998_c24&param1=7&param2=eJwti0EOgyAQRa8yS00MMgq0xGN01RgXVKkSEIza2vT0HZNmNu%2B%2F%2F2d0Q9t0tztyLiot2qKLlLXWV8Kz4pIKpNBTqM6BW4hQMFSaYS1ZJUmONpF9R8KXIZrT14VgSsk4ZIeLQzo2iDsgZ7wBEko08FEiB7MswR724d1eyvrCagWZn%2FY5FBCctzDa3qcc%2BmlNsy0RkfHzYDNPs7r%2Fyw%2FiBjrt" alt="Image 1" />
      <img src="https://vn.images.search.yahoo.com/images/view;_ylt=Awrx.y9_eSlkwwwouOC.LIpQ;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2RmMGE0NzlkM2Q1MjBlOTI2NWRmMzcyZDE4NTllNTk3BGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fvn.images.search.yahoo.com%2Fyhs%2Fsearch%3Fp%3D3%2Bh%25C3%25ACnh%2B%25E1%25BA%25A3nh%2B%25C4%2591%25E1%25BA%25B9p%26ei%3DUTF-8%26type%3Dfc_ADDA49F0A8D_s58_g_e_d050421_n9998_c24%26fr%3Dyhs-fc-2461%26hsimp%3Dyhs-2461%26hspart%3Dfc%26param1%3D7%26param2%3DeJwti0EOgyAQRa8yS00MMgq0xGN01RgXVKkSEIza2vT0HZNmNu%252B%252F%252F2d0Q9t0tztyLiot2qKLlLXWV8Kz4pIKpNBTqM6BW4hQMFSaYS1ZJUmONpF9R8KXIZrT14VgSsk4ZIeLQzo2iDsgZ7wBEko08FEiB7MswR724d1eyvrCagWZn%252FY5FBCctzDa3qcc%252BmlNsy0RkfHzYDNPs7r%252Fyw%252FiBjrt%26tab%3Dorganic%26ri%3D1&w=1772&h=1230&imgurl=thuthuatnhanh.com%2Fwp-content%2Fuploads%2F2019%2F08%2Fhinh-nen-3d-sieu-net-cho-may-tinh-dien-thoai-27.jpg&rurl=https%3A%2F%2Fthuthuatnhanh.com%2Fhinh-nen-3d-sieu-net-cho-may-tinh-dien-thoai%2F&size=461.8KB&p=3+h%C3%ACnh+%E1%BA%A3nh+%C4%91%E1%BA%B9p&oid=df0a479d3d520e9265df372d1859e597&fr2=&fr=yhs-fc-2461&tt=501%2B+H%C3%ACnh+%E1%BA%A3nh+%C4%91%E1%BA%B9p+3D+si%C3%AAu+n%C3%A9t+cho+m%C3%A1y+t%C3%ADnh+v%C3%A0+%C4%91i%E1%BB%87n+tho%E1%BA%A1i&b=0&ni=240&no=1&ts=&tab=organic&sigr=hs7_D963bdn5&sigb=GostdAX3kOWD&sigi=A6qXSvJ_2ZUn&sigt=EATNkMYwrVHP&.crumb=TXkXjGzDP50&fr=yhs-fc-2461&hsimp=yhs-2461&hspart=fc&type=fc_ADDA49F0A8D_s58_g_e_d050421_n9998_c24&param1=7&param2=eJwti0EOgyAQRa8yS00MMgq0xGN01RgXVKkSEIza2vT0HZNmNu%2B%2F%2F2d0Q9t0tztyLiot2qKLlLXWV8Kz4pIKpNBTqM6BW4hQMFSaYS1ZJUmONpF9R8KXIZrT14VgSsk4ZIeLQzo2iDsgZ7wBEko08FEiB7MswR724d1eyvrCagWZn%2FY5FBCctzDa3qcc%2BmlNsy0RkfHzYDNPs7r%2Fyw%2FiBjrt" alt="Image 2" />
      <img src="https://vn.images.search.yahoo.com/images/view;_ylt=Awrx.y9_eSlkwwwowOC.LIpQ;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2MwMGJiNjE0OTQxYTVkMGQ3NmViN2ZhMWY2MTM3ZGRjBGdwb3MDOQRpdANiaW5n?back=https%3A%2F%2Fvn.images.search.yahoo.com%2Fyhs%2Fsearch%3Fp%3D3%2Bh%25C3%25ACnh%2B%25E1%25BA%25A3nh%2B%25C4%2591%25E1%25BA%25B9p%26ei%3DUTF-8%26type%3Dfc_ADDA49F0A8D_s58_g_e_d050421_n9998_c24%26fr%3Dyhs-fc-2461%26hsimp%3Dyhs-2461%26hspart%3Dfc%26param1%3D7%26param2%3DeJwti0EOgyAQRa8yS00MMgq0xGN01RgXVKkSEIza2vT0HZNmNu%252B%252F%252F2d0Q9t0tztyLiot2qKLlLXWV8Kz4pIKpNBTqM6BW4hQMFSaYS1ZJUmONpF9R8KXIZrT14VgSsk4ZIeLQzo2iDsgZ7wBEko08FEiB7MswR724d1eyvrCagWZn%252FY5FBCctzDa3qcc%252BmlNsy0RkfHzYDNPs7r%252Fyw%252FiBjrt%26tab%3Dorganic%26ri%3D9&w=1024&h=689&imgurl=anhdep123.com%2Fwp-content%2Fuploads%2F2020%2F05%2Fh%25C3%25ACnh-n%25E1%25BB%2581n-h%25E1%25BB%2595-3d-%25C4%2591%25E1%25BA%25B9p-1024x689.jpg&rurl=https%3A%2F%2Fanhdep123.com%2F50-hinh-anh-con-ho-dep-dung-manh-moi-nhat-sieu-chat%2F&size=195.3KB&p=3+h%C3%ACnh+%E1%BA%A3nh+%C4%91%E1%BA%B9p&oid=c00bb614941a5d0d76eb7fa1f6137ddc&fr2=&fr=yhs-fc-2461&tt=50+h%C3%ACnh+%E1%BA%A3nh+con+h%E1%BB%95+%C4%91%E1%BA%B9p+v%C3%A0+h%C3%ACnh+n%E1%BB%81n+H%E1%BB%95+3d+d%C5%A9ng+m%C3%A3nh+m%E1%BB%9Bi+nh%E1%BA%A5t%2C+si%C3%AAu+ch%E1%BA%A5t&b=0&ni=240&no=9&ts=&tab=organic&sigr=bwEr93hPMvoc&sigb=mUhvgHUpkotY&sigi=6A_g7EquT7LI&sigt=lKx03D6svnps&.crumb=TXkXjGzDP50&fr=yhs-fc-2461&hsimp=yhs-2461&hspart=fc&type=fc_ADDA49F0A8D_s58_g_e_d050421_n9998_c24&param1=7&param2=eJwti0EOgyAQRa8yS00MMgq0xGN01RgXVKkSEIza2vT0HZNmNu%2B%2F%2F2d0Q9t0tztyLiot2qKLlLXWV8Kz4pIKpNBTqM6BW4hQMFSaYS1ZJUmONpF9R8KXIZrT14VgSsk4ZIeLQzo2iDsgZ7wBEko08FEiB7MswR724d1eyvrCagWZn%2FY5FBCctzDa3qcc%2BmlNsy0RkfHzYDNPs7r%2Fyw%2FiBjrt" alt="Image 3" />
    </Container>
  );
}

export default App;
