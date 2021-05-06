/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from 'theme-ui';
import { Link } from 'components/link';
import FooterLogo from 'assets/logo.svg';

export default function Footer() {
  return (
    <footer sx = {styles.footer}>
      <Container>
        <Box sx = {styles.footer.footerBottomArea}>
          <Link to = '/'>
            <Image src = {FooterLogo} alt = 'logo' />
          </Link>
          <Text sx = {styles.footer.copyight}>
            Copyright Daniel Wilstrop { new Date().getFullYear()} &copy;
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
  },
};
