import {
  GridRow,
  GridColumn,
  Grid,
  Image,
  Segment,
  Header,
  List,
  Container,
  FeedUser,
  FeedSummary,
  FeedMeta,
  FeedLike,
  FeedLabel,
  FeedExtra,
  FeedEvent,
  FeedDate,
  FeedContent,
  Feed,
  Icon,
  Input,
  Button
} from "semantic-ui-react";

export default function ChatSandBox() {
  return (
    <>
      <Container
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <Grid columns={2} divided>
          <GridRow>
            <GridColumn width={4}>
              <Header as="h3">Chats</Header>

              <Container
                style={{
                  border: "none",
                  paddingLeft: "10px",
                  paddingBottom: "5px",
                }}
              >
                <Button
                  basic
                  fluid
                  content="Chat"
                  icon="add"
                  labelPosition="right"
                />
              </Container>

              <Container
                style={{
                  border: "none",

                  paddingLeft: "10px",
                }}
              >
                <Button
                  basic
                  fluid
                  content="Contact"
                  icon="add"
                  labelPosition="right"
                />{" "}
              </Container>
              <Container
                style={{
                  border: "none",
                  paddingTop: "30px",
                  paddingLeft: "15px",
                  paddingBottom: "5px",
                }}
              >
                <List divided relaxed>
                  {/* Dummy list of chats */}
                  <List.Item>
                    <Grid>
                      <Grid.Column width={5}>
                        <Image
                          src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                          circular
                        />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <List.Header>Elliot</List.Header>
                        <List.Description>Last seen...</List.Description>
                      </Grid.Column>
                    </Grid>
                  </List.Item>
                  <List.Item>
                    <Grid>
                      <Grid.Column width={5}>
                        <Image
                          src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
                          circular
                        />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <List.Header>Jenny</List.Header>
                        <List.Description>Last seen...</List.Description>
                      </Grid.Column>
                    </Grid>
                  </List.Item>
                  <List.Item>
                    <Grid>
                      <Grid.Column width={5}>
                        <Icon size="large" name="code" circular />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <List.Header>Code Group</List.Header>
                        <List.Description>Last seen...</List.Description>
                      </Grid.Column>
                    </Grid>
                  </List.Item>
                  <List.Item>
                    <Grid>
                      <Grid.Column width={5}>
                        <Image
                          src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
                          circular
                        />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <List.Header>Matthew</List.Header>
                        <List.Description>Last seen...</List.Description>
                      </Grid.Column>
                    </Grid>
                  </List.Item>
                  <List.Item>
                    <Grid>
                      <Grid.Column width={5}>
                        <Image
                          src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg"
                          circular
                        />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <List.Header>Daniel</List.Header>
                        <List.Description>Last seen...</List.Description>
                      </Grid.Column>
                    </Grid>
                  </List.Item>
                  <List.Item>
                    <Grid>
                      <Grid.Column width={5}>
                        <Image
                          src="https://react.semantic-ui.com/images/avatar/small/molly.png"
                          circular
                        />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <List.Header>Molly</List.Header>
                        <List.Description>Last seen...</List.Description>
                      </Grid.Column>
                    </Grid>
                  </List.Item>
                  <List.Item>
                    <Grid>
                      <Grid.Column width={5}>
                        <Image
                          src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
                          circular
                        />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <List.Header>Patrick</List.Header>
                        <List.Description>Last seen...</List.Description>
                      </Grid.Column>
                    </Grid>
                  </List.Item>
                  <List.Item>
                    <Grid>
                      <Grid.Column width={5}>
                        <Icon size="large" name="sun" inverted circular />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <List.Header>Party Group</List.Header>
                        <List.Description>Last seen...</List.Description>
                      </Grid.Column>
                    </Grid>
                  </List.Item>
                  {/* Add more chat items here */}
                </List>
              </Container>
            </GridColumn>
            <GridColumn width={12}>
              <Segment clearing>
                <Header as="h3" floated="left">
                  {" "}
                  <Icon size="large" name="code" circular />
                  Code Group
                </Header>
                <Header as="h3" floated="right">
                  <Icon circular inverted name="users" />
                </Header>
              </Segment>

              <Segment>
                <Feed>
                  <FeedEvent>
                    <FeedLabel>
                      <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                    </FeedLabel>
                    <FeedContent>
                      <FeedSummary>
                        <FeedUser>Elliot Fu</FeedUser> added you as a friend
                        <FeedDate>1 Hour Ago</FeedDate>
                      </FeedSummary>
                      <FeedMeta>
                        <FeedLike>
                          <Icon name="like" />4 Likes
                        </FeedLike>
                      </FeedMeta>
                    </FeedContent>
                  </FeedEvent>

                  <FeedEvent>
                    <FeedLabel>
                      <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                    </FeedLabel>
                    <FeedContent>
                      <FeedSummary>
                        <FeedUser>Elliot Fu</FeedUser> added you as a friend
                        <FeedDate>1 Hour Ago</FeedDate>
                      </FeedSummary>
                      <FeedMeta>
                        <FeedLike>
                          <Icon name="like" />4 Likes
                        </FeedLike>
                      </FeedMeta>
                    </FeedContent>
                  </FeedEvent>

                  <FeedEvent>
                    <FeedLabel image="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
                    <FeedContent>
                      <FeedSummary>
                        <a>Helen Troy</a> added <a>2 new illustrations</a>
                        <FeedDate>4 days ago</FeedDate>
                      </FeedSummary>
                      <FeedExtra images>
                        <a>
                          <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                        </a>
                        <a>
                          <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                        </a>
                      </FeedExtra>
                      <FeedMeta>
                        <FeedLike>
                          <Icon name="like" />1 Like
                        </FeedLike>
                      </FeedMeta>
                    </FeedContent>
                  </FeedEvent>

                  <FeedEvent>
                    <FeedLabel image="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
                    <FeedContent>
                      <FeedSummary
                        date="2 Days Ago"
                        user="Jenny Hess"
                        content="add you as a friend"
                      />
                      <FeedMeta>
                        <FeedLike>
                          <Icon name="like" />8 Likes
                        </FeedLike>
                      </FeedMeta>
                    </FeedContent>
                  </FeedEvent>

                  <FeedEvent>
                    <FeedLabel image="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
                    <FeedContent>
                      <FeedSummary>
                        <a>Joe Henderson</a> posted on his page
                        <FeedDate>3 days ago</FeedDate>
                      </FeedSummary>
                      <FeedExtra text>
                        Ours is a life of constant reruns. We are always
                        circling back to where we would we started, then
                        starting all over again. Even if we do not run extra
                        laps that day, we surely will come back for more of the
                        same another day soon.
                      </FeedExtra>
                      <FeedMeta>
                        <FeedLike>
                          <Icon name="like" />5 Likes
                        </FeedLike>
                      </FeedMeta>
                    </FeedContent>
                  </FeedEvent>

                  <FeedEvent>
                    <FeedLabel image="https://react.semantic-ui.com/images/avatar/small/justen.jpg" />
                    <FeedContent>
                      <FeedSummary>
                        <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                        <FeedDate>4 days ago</FeedDate>
                      </FeedSummary>
                      <FeedExtra images>
                        <a>
                          <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                        </a>
                        <a>
                          <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                        </a>
                      </FeedExtra>
                      <FeedMeta>
                        <FeedLike>
                          <Icon name="like" />
                          41 Likes
                        </FeedLike>
                      </FeedMeta>
                    </FeedContent>
                  </FeedEvent>
                </Feed>
              </Segment>

              <Input
                fluid
                action={{ icon: "send" }}
                placeholder='"Hello how are you, the spy from the cold...'
              />
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </>
  );
}


