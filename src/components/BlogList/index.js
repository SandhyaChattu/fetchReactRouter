// Write your JS code here
import {Component} from 'react'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogList: []}

  componentDidMount() {
    this.getResult()
  }

  getResult = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const dbResponse = await response.json()
    console.log(dbResponse)
    const formatedData = dbResponse.map(eachItem => ({
      id: eachItem.id,
      avatarUrl: eachItem.avathar_url,
      imageUrl: eachItem.image_url,
      topic: eachItem.topic,
      title: eachItem.title,
      author: eachItem.author,
    }))
    this.setState({blogList: formatedData})
  }

  render() {
    const {blogList} = this.state
    return (
      <div>
        <h1>Prabhuva</h1>
        <ul>
          {blogList.map(eachItem => (
            <BlogItem key={eachItem.id} eachItem={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default BlogList
