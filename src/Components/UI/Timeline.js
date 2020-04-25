import React, { Component } from 'react'

export class Timeline extends Component {
    render() {
        return (
            <div>
                {/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Timeline</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="/dashboard">Home</a></li>
            <li className="breadcrumb-item active">Timeline</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      {/* Timelime example  */}
      <div className="row">
        <div className="col-md-12">
          {/* The time line */}
          <div className="timeline">
            {/* timeline time label */}
            <div className="time-label">
              <span className="bg-red">10 Feb. 2014</span>
            </div>
            {/* /.timeline-label */}
            {/* timeline item */}
            <div>
              <i className="fas fa-envelope bg-blue" />
              <div className="timeline-item">
                <span className="time"><i className="fas fa-clock" /> 12:05</span>
                <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>
                <div className="timeline-body">
                  Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                  weebly ning heekya handango imeem plugg dopplr jibjab, movity
                  jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                  quora plaxo ideeli hulu weebly balihoo...
                </div>
                <div className="timeline-footer">
                  <a className="btn btn-primary btn-sm">Read more</a>
                  <a className="btn btn-danger btn-sm">Delete</a>
                </div>
              </div>
            </div>
            {/* END timeline item */}
            {/* timeline item */}
            <div>
              <i className="fas fa-user bg-green" />
              <div className="timeline-item">
                <span className="time"><i className="fas fa-clock" /> 5 mins ago</span>
                <h3 className="timeline-header no-border"><a href="#">Sarah Young</a> accepted your friend request</h3>
              </div>
            </div>
            {/* END timeline item */}
            {/* timeline item */}
            <div>
              <i className="fas fa-comments bg-yellow" />
              <div className="timeline-item">
                <span className="time"><i className="fas fa-clock" /> 27 mins ago</span>
                <h3 className="timeline-header"><a href="#">Jay White</a> commented on your post</h3>
                <div className="timeline-body">
                  Take me to your leader!
                  Switzerland is small and neutral!
                  We are more like Germany, ambitious and misunderstood!
                </div>
                <div className="timeline-footer">
                  <a className="btn btn-warning btn-sm">View comment</a>
                </div>
              </div>
            </div>
            {/* END timeline item */}
            {/* timeline time label */}
            <div className="time-label">
              <span className="bg-green">3 Jan. 2014</span>
            </div>
            {/* /.timeline-label */}
            {/* timeline item */}
            <div>
              <i className="fa fa-camera bg-purple" />
              <div className="timeline-item">
                <span className="time"><i className="fas fa-clock" /> 2 days ago</span>
                <h3 className="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>
                <div className="timeline-body">
                  <img src="http://placehold.it/150x100" alt="..." />
                  <img src="http://placehold.it/150x100" alt="..." />
                  <img src="http://placehold.it/150x100" alt="..." />
                  <img src="http://placehold.it/150x100" alt="..." />
                  <img src="http://placehold.it/150x100" alt="..." />
                </div>
              </div>
            </div>
            {/* END timeline item */}
            {/* timeline item */}
            <div>
              <i className="fas fa-video bg-maroon" />
              <div className="timeline-item">
                <span className="time"><i className="fas fa-clock" /> 5 days ago</span>
                <h3 className="timeline-header"><a href="#">Mr. Doe</a> shared a video</h3>
                <div className="timeline-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/tMWkeBIohBs" frameBorder={0} allowFullScreen />
                  </div>
                </div>
                <div className="timeline-footer">
                  <a href="#" className="btn btn-sm bg-maroon">See comments</a>
                </div>
              </div>
            </div>
            {/* END timeline item */}
            <div>
              <i className="fas fa-clock bg-gray" />
            </div>
          </div>
        </div>
        {/* /.col */}
      </div>
    </div>
    {/* /.timeline */}
  </section>
  {/* /.content */}
</div>
{/* /.content-wrapper */}

            </div>
        )
    }
}

export default Timeline
