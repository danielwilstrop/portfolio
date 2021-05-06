/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Portrait from 'assets/team/dan.png';

const data = [
  {
    id: 1,
    imgSrc: Portrait,
    altText: 'Dan Wilstrop',
    title: 'Dan Wilstrop',
    designation: 'Bsc. Computing and IT(software) Student',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/dan.wilstrop/',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'github',
        path: 'https://github.com/danielwilstrop',
        icon: <FaGithub />,
      },
      {
        id: 4,
        name: 'email',
        path: 'mailto:daniel.wilstrop@outlook.com',
        icon: <FaEnvelope />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/danwilstrop/',
        icon: <FaInstagram />,
      },
    ],
  },
];

export default function Contact() {
  return (
    <section id = 'profile'>
      <Container>
        <SectionHeader slogan = 'Contact'
                       title = 'Get in Touch through social media or email'
                       />
        <Grid sx = {styles.grid}>
          {data.map(item => (
            <TeamCard src = {item.imgSrc}
                      key = {item.id}
                      altText = {item.altText}
                      title = {item.title}
                      designation = {item.designation}
                      social = {item.socialProfile}/>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
  },
};
