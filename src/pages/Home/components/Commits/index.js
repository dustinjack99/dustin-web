import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { ArrowForwardSharp } from "@mui/icons-material";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import { useState } from "react";
import StepWidget from "../StepWidget/StepWidget";

const SlideShow = autoPlay(SwipeableViews);

const Commits = ({ eventArr }) => {
  const [activeStep, setActiveStep] = useState(0);
  const reg = /(https)(.*)(dustinjack99)/g;
  const reg2 = /(dustinjack99)/g;

  return (
    <Container
      sx={{ backgroundColor: "text", borderRadius: "5px", padding: 2 }}
    >
      <Typography color="secondary" textAlign="center" fontSize="1.25rem">
        GitHub Activity Feed
      </Typography>
      <StepWidget
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        eventArr={eventArr}
      />
      <SlideShow
        axis="x"
        index={activeStep}
        onChangeIndex={setActiveStep}
        enableMouseEvents
      >
        {eventArr.map((event, i) => {
          return (
            <Card className="slide" key={i}>
              <CardHeader
                sx={{ backgroundColor: "secondary.dark", color: "text" }}
                title={<h2>{event?.user?.name}</h2>}
                avatar={<Avatar src={event?.user?.avatar} />}
              />
              <CardContent
                sx={{
                  justifyItems: "center",
                  backgroundColor: "secondary.light",
                }}
              >
                <Typography
                  sx={{
                    color: "text",
                    fontWeight: "bold",
                    marginBottom: "5px",
                  }}
                >
                  Push to:{" "}
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={event?.repo?.url
                      .replace("api.", "")
                      .replace("repos/", "")}
                  >
                    {event?.repo?.name.replace(reg2, "")}
                  </Link>
                  @ {new Date(event?.repo?.time).toLocaleDateString()}
                </Typography>
                <Container
                  sx={{
                    backgroundColor: "text",
                    border: "2px solid",
                    borderRadius: "5px",
                    borderColor: "primary.main",
                  }}
                >
                  <Typography color="secondary.dark" fontWeight="bold" mt={2}>
                    Commits:
                  </Typography>
                  {event?.commits?.map((commit, i) => {
                    return (
                      <CardActions
                        key={commit.message + i}
                        sx={{
                          justifyContent: "space-between",
                          width: "85%",
                          borderBottom: "2px solid",
                          borderColor: "secondary.dark",
                          marginBottom: "5px",
                        }}
                      >
                        <Typography
                          color="secondary.dark"
                          className="commitUrl"
                        >
                          {commit.message.replace(reg, "")}
                        </Typography>
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          href={commit.url
                            .replace("api.", "")
                            .replace("repos/", "")
                            .replace("commits", "commit")}
                        >
                          <IconButton>
                            <ArrowForwardSharp color="primary" />
                          </IconButton>
                        </Link>
                      </CardActions>
                    );
                  })}
                </Container>
              </CardContent>
            </Card>
          );
        })}
      </SlideShow>
    </Container>
  );
};

export default Commits;
