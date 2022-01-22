import "./post.css";

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://picsum.photos/300/300" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem, ipsum dolor.</span>
            <hr />
            <span className="postDate">3 hours ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nemo laborum. Libero, illo! Expedita quasi quibusdam sint illum, earum mollitia odio, nihil facere ea, recusandae molestias voluptates! Optio, voluptate? Culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officia rerum culpa similique facilis, unde modi saepe illum suscipit reprehenderit eos accusamus. Magni nemo numquam dolorum id ab, consequatur harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laudantium facilis quod dignissimos et ipsa autem voluptatibus ipsum debitis ullam id nulla, nostrum, facere, excepturi incidunt hic molestiae architecto maxime? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, corporis? Deleniti natus quod laudantium ea earum, quam distinctio, eius quia labore porro repellendus dolor sint eos iste, incidunt nisi a? </p>
    </div>
  )
}
