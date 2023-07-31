import { StyledContainer } from "../Container/StyledContainer";
import { StyledSection } from "../HowItWorks/StyledHowItWorks";
import { BsCheckCircleFill } from "react-icons/bs";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { StyledCardWrapper } from "./StyledSubscriptions";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

export default function Subscriptions() {
  return (
    <StyledSection>
      <StyledContainer>
        <h2 className="gsap-subscriptions-title">Choose the subscriptions</h2>
        <StyledCardWrapper className="gsap-subscriptions">
          <Card
            sx={{
              maxWidth: 345,
              borderRadius: 5,
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                sx={{ fontFamily: "inherit" }}
              >
                Basic
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "inherit" }}
              >
                $1/month
              </Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <BsCheckCircleFill color="green" size={25} />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Music library:"
                    secondary="You get all my music 250+ tracks for your projects."
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <BsCheckCircleFill color="green" size={25} />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Download:"
                    secondary="You can download all tracks in MP3 format that I created earlier."
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <BsCheckCircleFill color="green" size={25} />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Direct link:"
                    secondary="You will get a direct link where you can download all music tracks."
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <BsCheckCircleFill color="green" size={25} />
                  </ListItemAvatar>
                  <ListItemText
                    primary="New Tracks:"
                    secondary="Every month I will create 2-8 new music tracks for you."
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <BsCheckCircleFill color="green" size={25} />
                  </ListItemAvatar>
                  <ListItemText
                    primary="No Copyrights:"
                    secondary="You will not receive a copyright claim on your videos on YouTube and other sites."
                  />
                </ListItem>
              </List>
            </CardContent>
            <CardActions>
              <Button
                size="large"
                variant="outlined"
                style={{
                  borderRadius: 20,
                  margin: "0 auto",
                }}
                href="https://bit.ly/2U83zuf"
              >
                Subscribe
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: 345,
              borderRadius: 5,
              border: "10px solid var(--mainBlueColor)",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                sx={{ fontFamily: "inherit", flexGrow: 1 }}
              >
                Standart
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "inherit" }}
              >
                $4/month
              </Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <BsCheckCircleFill color="green" size={25} />
                  </ListItemAvatar>
                  <ListItemText primary="All in BASIC package" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <BsCheckCircleFill color="green" size={25} />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Download:"
                    secondary="You can download all than tracks in the HIGH-QUALITY WAV format that I created earlier. And also you will receive additional versions of most tracks ( for example: Short, Extra Short, Loops, Without Drums, etc.)"
                  />
                </ListItem>
              </List>
            </CardContent>
            <CardActions>
              <Button
                size="large"
                variant="outlined"
                style={{
                  borderRadius: 20,
                  margin: "0 auto",
                }}
                href="https://bit.ly/2U83zuf"
              >
                Subscribe
              </Button>
            </CardActions>
          </Card>
        </StyledCardWrapper>
      </StyledContainer>
    </StyledSection>
  );
}
