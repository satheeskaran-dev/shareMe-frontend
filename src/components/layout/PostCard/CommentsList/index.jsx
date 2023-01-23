import { Container } from "./styles";
import NewComment from "./NewComment";
import Comment from "./Comment";

const CommentsList = () => {
  return (
    <Container>
      <Comment />
      <Comment />
      <Comment />
      <NewComment />
    </Container>
  );
};

export default CommentsList;
