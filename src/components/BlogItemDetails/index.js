// Write your JS code here
const BlogItem = () => {
  const {eachItem} = this.props
  const {id, title, imageUrl, avatarUrl, topic} = eachItem
  return (
    <li>
      <h1>{title}</h1>
      <p>{topic}</p>
    </li>
  )
}
export default BlogItem
