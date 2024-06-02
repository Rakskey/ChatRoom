import {
  FeedUser,
  FeedSummary,
  FeedMeta,
  FeedLike,
  FeedLabel,
  FeedExtra,
  FeedEvent,
  FeedDate,
  FeedContent,
  Icon,
} from "semantic-ui-react";

export default function DetailConversationFeed(feed) {
  return (
    <>
      {feed.conversation.map((item) => (
        <FeedEvent key={item.id}>
          <FeedLabel>
            <img
              src={`https://react.semantic-ui.com/images/avatar/small/${item.userId}.jpg`}
            />
          </FeedLabel>
          <FeedContent>
            <FeedSummary>
              <FeedUser>{item.userId}</FeedUser> added you as a friend
              <FeedDate>{new Date(item.time).toDateString()}</FeedDate>
            </FeedSummary>
            <FeedExtra text>{item.text}</FeedExtra>
            <FeedMeta>
              <FeedLike>
                <Icon name="like" />4 Likes
              </FeedLike>
            </FeedMeta>
          </FeedContent>
        </FeedEvent>
      ))}
    </>
  );
}
