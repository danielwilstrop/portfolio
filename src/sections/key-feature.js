/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import React from 'assets/key-feature/reactjs-icon.svg';
import NodeJS from 'assets/key-feature/nodejs.svg';
import Javascript from 'assets/key-feature/javascript.svg';
import MongoDB from 'assets/key-feature/mongodb.svg';

const data = [
  {
    id: 1,
    imgSrc: React,
    altText: 'React',
    text:
      'Lightning fast web applications and pages, with the latest frameworks and packages from React, NextJs and NPM',
  },
  {
    id: 2,
    imgSrc: MongoDB,
    altText: 'mongoDB',
    text:
      'Easy to use noSQL databases, with simpke queries and access utilising MongoDb and mongoose',
  },
  {
    id: 3,
    imgSrc: NodeJS,
    altText: 'node and express',
    text:
      'Simple and effective server side coding using NodeJS, Express Router and NPM packages',
  },
  {
    id: 4,
    imgSrc: Javascript,
    altText: 'Javascript',
    text:
      'Fully versed in javascript, from data structures and alogorithms, through to DOM manipulation',
  },
];

export default function KeyFeature() {
  return (
    <section sx ={{variant: 'section.keyFeature'}} id = 'tech-stack'>
      <Container>
        <SectionHeader slogan = 'Key Tech Used' title = "My current tech stack for web apps, pages and development is the 'MERN' stack"/>
        <Grid sx = {styles.grid}>
          {data.map(item => (
            <FeatureCardColumn 
              key = {item.id}
              src = {item.imgSrc}
              alt = {item.altText}
              text = {item.text}/>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
