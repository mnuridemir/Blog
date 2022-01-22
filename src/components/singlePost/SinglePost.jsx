import "./singlePost.css";

export default function SinglePost() {
  return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://images.pexels.com/photos/6396093/pexels-photo-6396093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor" >Author :  <b>Mndev</b> </span>
                    <span className="singlePostDate" > 2 hours ago </span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, similique. Nihil veniam dolor ad vero temporibus maxime architecto rem ea, harum dicta dolorem magnam culpa ullam, iste error aspernatur sit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero placeat unde officia saepe quia ipsa necessitatibus facere, praesentium dolor pariatur doloribus illum molestias consequuntur amet nobis! Eveniet, eius. Dolor, eveniet?
                Cumque, rem eos. Aspernatur dolore nam praesentium, delectus dicta neque ea repellat adipisci suscipit odit corrupti architecto perferendis, illum quam maxime distinctio pariatur minus? Incidunt libero excepturi quod consectetur asperiores!
                Odio praesentium corrupti alias inventore similique architecto, repudiandae perferendis, earum odit cupiditate molestias atque, modi suscipit commodi reiciendis provident obcaecati ducimus! Sint atque non quaerat in dolorum cum doloremque nobis.
                Aut sunt molestias repudiandae quisquam. Similique, sit ad. Quo et voluptates delectus eius, at deleniti ipsam. Placeat vero beatae cupiditate ipsam? Reiciendis nulla eum alias temporibus architecto? Hic, itaque esse! </p>
            </div>
        </div>
    );
}
