import React, { useEffect, useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
import axios from 'axios';

function RegistrationData({videos,edit}){

    videos = videos.map((video)=>{
        let stats = video.statistics;
        let comments = stats.commentCount;
        let likes = stats.likeCount;
        let views = stats.viewCount;
        let subs = 100; // taking const for now, will take from object letter or perform other subscriber api call.

        let earning = Math.min(subs, views) + 10 * comments + 5 * likes;

        video.earning = earning;
        return video;
    })
    videos = videos.sort((first, second)=> second.earning - first.earning)

    const [basicModal, setBasicModal] = useState(false);

    const toggleOpen = () => setBasicModal(!basicModal);
    return (
    <>
        <div className="row m-4">
            <div className="row">
                <div className="col-10">
                <label>Top earner video</label>

                </div>
                <div className="col-2">
                    <MDBBtn className='btn-dark' onClick={toggleOpen}>Request a callback</MDBBtn>
                </div>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-4">
                    <img src={videos[0]?.snippet?.thumbnails?.medium?.url} />
                </div>
                <div className="col-3">
                    <h3>{ videos[0]?.snippet?.title }</h3>
                    <label htmlFor="">{ videos[0]?.statistics?.viewCount }</label> <br />
                    <label htmlFor="">{ videos[0]?.statistics?.likeCount }</label> <br />
                    <label htmlFor="">{ videos[0]?.statistics?.commentCount }</label> <br />
                </div>
                <div className="col-5">
                    <h1>
                    Rs. 
                    {videos[0]?.earning}
                    </h1>
                </div>
            </div>
        </div>
            <br /><br />
        <br /><br /><br />
        <div className="row">
            <label>Other Videos Potentials</label> <br /><br />
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Title</th>
                        <th>Thumbnail</th>
                        <th>Views</th>
                        <th>Likes</th>
                        <th>Comment</th>
                        <th>Uploaded on</th>
                        <th>Estimated Earning</th>
                    </tr>
                </thead>
                <tbody>
                    {videos.map((video,key)=>{
                        
                        return key==0 ? '' : (<tr key={key}>
                            <td>{key+1}</td>
                            <td>{ video?.snippet.title}</td>
                            <td><img src={video?.snippet?.thumbnails?.default?.url} /></td>
                            <td>{ video.statistics?.viewCount }</td>
                            <td>{ video.statistics?.likeCount }</td>
                            <td>{ video.statistics?.commentCount }</td>
                            <td>{ video?.snippet?.publishedAt }</td>
                            <td>{ video.earning}</td>
                            </tr>)
                        }) }
                    
                </tbody>
            </table>
        </div>

        <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent className='text-dark'>
            <MDBModalHeader>
              <MDBModalTitle>Request a callback</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
                <div >
                    <input type='text' placeholder='Name' className='form-control' /> <br />
                    <input type='text' placeholder='Mobile' className='form-control' />
                </div>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn>
              <a  className='btn-primary' href="mailto:ravi@anchors.in?subject='Hello from anchors!'&body='Callback is requested for you'">Request a callbackk</a>
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
    );
}

export default RegistrationData;