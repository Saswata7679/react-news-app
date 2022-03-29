import React from "react";

const Newsitem =(props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } =props;
    return (
      <>
        <div className="card h-100">
          <span
            class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "50%" }}
          >
            {source}
          </span>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            style={{ padding: "10%" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text">
              <small class="text-muted">
                by {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </>
    );
  }

export default Newsitem;
