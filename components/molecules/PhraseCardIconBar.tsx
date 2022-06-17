import CommentIcon from '../atoms/CommentIcon'
import HeartIcon from '../atoms/HeartIcon'

const PhraseCardIconBar: React.VFC<{ commentCount: number }> = ({
  commentCount,
}) => {
  return (
    <div className="flex justify-around items-center">
      <CommentIcon commentCount={commentCount} />
      <HeartIcon />
    </div>
  )
}

export default PhraseCardIconBar
