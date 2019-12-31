import React from 'react';
import { Link } from 'gatsby';
import styles from './header.module.scss';


// HeaderLink component
const HeaderLink = (props) => (
  <Link className={styles.link} to={props.to}>{props.text}</Link>
)

//HomeButton component
const HomeButton = (props) => (
  <Link to={props.to}>
    <div className={styles.button}>{props.text}</div>
  </Link>
)

//SocialButton component
const SocialButton = (props) => {
  let style = '';
  let url = '';

  if (props.site === 'twitter') {
    style = styles.buttonTwitter;
    url = "https://twitter.com/" + props.username;
  }
  else if (props.site === 'linkedin') {
    style = styles.buttonLinkedin;
    url = "https://www.linkedin.com/in/" + props.username;
  }
  else if (props.site === 'github') {
    style = styles.buttonGithub;
    url = "https://www.github.com/" + props.username;
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={style}>{props.children}&nbsp;</div>
    </a>
  )
}

export default () => (
  <header className={styles.container}>
    <div className={styles.row}>
        <HomeButton to='/' text={data.site.siteMetadata.title} />
        <SocialButton site="github" username="einnor"></SocialButton>
        <SocialButton site="linkedin" username="ronnie-nyaga-83467b89"></SocialButton>
        <SocialButton site="twitter" username="Ronnie_Nyaga"></SocialButton>
    </div>
    <div className={styles.row}>
        <HeaderLink to='/' text='ARTICLES' />
        <HeaderLink to='/about' text='ABOUT' />
    </div>
  </header>
);
