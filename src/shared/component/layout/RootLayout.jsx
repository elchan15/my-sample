import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { styled } from '@mui/material';

const RLayout = styled("div")((theme)=>({
  Padding:0,
  margin:0,
  boxSizing: "border-box"
})
)

function RootLayout({children}) {
  return (
    <RLayout className="root-main">
      <Header />
          {children}
      <Footer />
    </RLayout>
  );
}

export default RootLayout;
