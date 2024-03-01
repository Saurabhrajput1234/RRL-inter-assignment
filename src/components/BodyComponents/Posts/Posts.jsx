import React from "react";
import "./post.css";
import p1image from "../../pics/download 7.svg";
import star from "../../pics/Vector (1).svg";
import tag1 from "../../pics/IMAGE (3).svg";
import tag2 from "../../pics/IMAGE (2).svg";

const Posts = () => {
  const postData = [    //json api data
    {
      "Post-no": 1,
      postname: "WixPro 72-Inch Responsive Website Builder-",
      posthighlights:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: 9.8,
      images: p1image,
      tag: "Best Choice",
      "tag-img": tag1,
      stars: 5,
    },
    {
      "Post-no": 2,
      postname: "SiteCraft 68-Inch Ultimate Web Design Studio-",
      posthighlights:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: 9.5,
      images: p1image,
      tag: "Best Value",
      "tag-img": tag2,
      stars: 4,
    },
    {
      "Post-no": 3,
      postname: "WixPro 72-Inch Responsive Website Builder-",
      posthighlights:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: 9.3,
      images: p1image,
      stars: 5,
    },
    {
      "Post-no": 4,
      postname: "CDK Resposive Builder:",
      posthighlights:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: 9.1,
      images: p1image,
      stars: 4,
    },
  ];

  return (         //map post
    <div className="posts">
      {postData.map((post, index) => (
        <div key={index} className="post">
          <div className="post-image">
            <div className="tag">
              <img src={post["tag-img"]} alt="" />
              <p>{post.tag}</p>
            </div>
            <div className="post-no">
              <p>{post["Post-no"]}</p>
            </div>

            <img src={post.images} alt={post.postname} />
          </div>
          <div className="post-text-content">
            <div className="post-name">
              <h4>{post.postname}</h4>
              <p>
                {" "}
                Comprehensive Digital Platform Creation Tool, Streamlined Design
                Interface for Professional Websites and Online Stores
                (Black/Blue)
              </p>
            </div>
            <div className="post-highlights">
              <h4>Main hignlight</h4>
              <p>{post.posthighlights}</p>
            </div>
            <div className="show-more">
              <a href="/" style={{ color: "#1B88F4", textDecoration: "none" }}>
                Show more
              </a>
            </div>
          </div>
          <div>
            <div className="post-rating">
              <div className="rating-badge">
                <div className="rating">
                  <p>{post.rating}</p>
                </div>
                <div className="rating-text">Exceptional</div>
                <div className="rating-star">
                  {[...Array(post["stars"])].map((_, i) => (
                    <img
                      key={i}
                      src={star}
                      alt="star"
                      style={{ width: "20px", height: "20px" }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="view-button">
              <button>view</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
