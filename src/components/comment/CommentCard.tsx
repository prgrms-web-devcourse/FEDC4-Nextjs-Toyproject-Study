interface CommentCardProps {
  user: number;
  comment: {
    commentId: number;
    user: {
      name: string;
      userId: number;
    };
    comment: string;
  };
  onEdit: (commentId: number) => void;
  onDelete: (commentId: number) => void;
}
const CommentCard = ({ comment, onEdit, onDelete, user }: CommentCardProps) => {
  const isMyComment = user === comment.user.userId;
  return (
    <div className='flex flex-col m-3 px-4 py-2 bg-blue-gray-50'>
      <div className='flex flex-row items-center'>
        <span className={`text-left font-bold text-subtitle-1 w-10/12`}>
          {comment.user.name}
        </span>
        <span
          className={`text - body - 2 text-blue-gray-600 text-xs text-right ml-5 mr-1 cursor-pointer
           ${isMyComment ? '' : 'hidden'}`}
          onClick={() => onEdit(comment.commentId)}
        >
          수정
        </span>
        <span
          className={`text-body-2 text-blue-gray-600 text-xs cursor-pointer ${
            isMyComment ? '' : 'hidden'
          }`}
          onClick={() => onDelete(comment.commentId)}
        >
          삭제
        </span>
      </div>
      <span className={`text-left text-body-2`}>{comment.comment}</span>
    </div>
  );
};

export default CommentCard;
