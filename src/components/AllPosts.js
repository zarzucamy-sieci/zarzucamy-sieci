import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { Helmet } from "react-helmet";
import backgroundImg from "../background.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import "../styles.css";
import "../index.css";
import logo from "../logos.png";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${backgroundImg})`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    //backgroundAttachment: "fixed",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "3rem",
    [theme.breakpoints.down("sm")]: {
      height: 220,
      fontSize: "0.6em",
    },
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontFamily: "PT Sans",
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
  barContainer: {
    display: "flex",
    alignItems: "center",
  },
}));

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(publishedAt desc){
            title,
            slug,
            publishedAt,
            mainImage{
              asset->{
                _id,
                url
              }
            }
          }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  console.log(allPostsData);
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar className={classes.AppBar} position="fixed">
        <Helmet>
          <title>Zarzucamy Sieci</title>
        </Helmet>
        <Toolbar className={classes.barContainer}>
          <Typography style={{ flex: 1 }}>
            <div className="logoimg" variant="h6" color="primary">
              {/* <img //src="https://i.imgur.com/nkrHhMo.png"
                src={logo}
                alt="logo"/> */}
              {/* <a href="https://zarzucamysieci.pl">
                <img alt="logo" src={logo} onClick="https://zarzucamysieci.pl" />
              </a> */}
              <a href="https://zarzucamysieci.pl">
                <img alt="logo" src={logo} />
              </a>
            </div>
          </Typography>
          <div className="social-container">
            <a
              href="https://www.instagram.com/zarzucamy_sieci"
              className="instagram social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://www.facebook.com/groups/211293953375788"
              className="facebook social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://www.discord.gg/4p8PHrF"
              className="discord social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDiscord} size="2x" />
            </a>
          </div>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
      </Box>
      <Typography variant="h4" className={classes.blogTitle}>
        Posty
        </Typography>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/*<Container maxWidth="lg" className={classes.blogsContainer}>*/}
        {allPostsData &&
          allPostsData.map((post, index) => (
            <Link to={"/" + post.slug.current} key={post.slug.current}>
              <span
                className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                key={index}
              >
                <img
                  className="w-full h-full rounded-r object-cover absolute"
                  src={post.mainImage.asset.url}
                  alt=""
                />
                <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                  <h2 className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                    {post.title}
                  </h2>
                </span>
              </span>
            </Link>
          ))}
        {/*</Container>*/}
      </div>
    </div>
  );
}
