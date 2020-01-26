import React from 'react';
import './App.css';
import MapContainer from './map.js';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import Link from '@material-ui/core/Link';
import Input from 'react-phone-number-input/input';
import { textAlign } from '@material-ui/system';
import fire from './fire';
import FileUploader from "react-firebase-file-uploader";
import 'whatwg-fetch';

const btnSOSStyles =
{
  left: '20%',
  width: '60%',
  height: '100px',
  top: '25px',
  fontFamily: 'Roboto',
  fontSize: '44px',
  borderRadius: '15px',
  backgroundColor: '#A42323',
  color: 'white',
};

const btnReportStyles =
{
  position: 'absolute',
  left: '27.5%',
  width: '45%',
  height: '100px',
  top: '0px',
  fontFamily: 'Roboto',
  fontSize: '44px',
  borderRadius: '15px',
  backgroundColor: '#A9A9A9',
  color: '#A9A9A9',
  opacity: '0'
}
const btnReportLabelStyles =
{
  left: '20%',
  width: '60%',
  height: '100px',
  top: '25px',
  fontFamily: 'Roboto',
  fontSize: '44px',
  borderRadius: '15px',
  backgroundColor: 'blue',
  color: 'white',
  marginTop: 15
}

const btnRespondStyles =
{
  margin: '20px',
  width: '400px',
  height: '50px',
  fontSize: '25px',
  borderRadius: '15px',
  backgroundColor: '#D3D3D3'
}

const lblStyle =
{
  position: 'relative',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '40px',
  color: '#000000'

}

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      latitude: '',
      longitude: '',
      avatar: "",
      isUploading: false,
      progress: 0,
      avatarURL: "",
      fileName: "",
      phone: "",
      name: ""
    }
    this.getMyLocation = this.getMyLocation.bind(this)
  }
  componentDidMount() {
    this.getMyLocation()
  }
  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation
    if (location) {
      location.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      }, (error) => {
        this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }
  }
  handleSOS = e => {
    let ref = fire.database().ref('SOS');
    var info = {
      phone: this.state.phone,
      name: this.state.name
    }
    this.getMyLocation();
    ref.push(info);

    const url = "http://3.82.242.180:5000/sos?name=" + this.state.name.split(' ').join('%20') + '&number=' + this.state.phone; // site that doesn't send Access-Control-*
    window.fetch(url).then((resp) => resp.json())
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });

    this.setState(
      {
        latitude: this.state.latitude,
        longtitude: this.state.longitude,
        phone: this.state.phone,
        name: this.state.name
      }
    )
  }
  handleReport = e => {
    var fileName = this.state.fileName;
    // if (this.state.isUploading) {
    //   setTimeout(500); // setTimeout(func, timeMS, params...)
    // }
    if (fileName.length) {
      const url = "http://3.82.242.180:5000/report?filename=" + fileName; // site that doesn't send Access-Control-*
      window.fetch(url).then((resp) => resp.json())
        .then(function (data) {
          console.log(data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  handleChangeUsername = event =>
    this.setState({ username: event.target.value });
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleFileName = file => {
    var file_name = file.name;
    this.setState({ fileName: file_name });
    return file_name;
  }
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    fire
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
    const url = "http://3.82.242.180:5000/report?filename=" + filename; // site that doesn't send Access-Control-*
    window.fetch(url).then((resp) => resp.json())
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  handleName = e => {
    this.setState({ name: e.target.value });
  }


  render() {
    return (
      <div className="App container-fluid" style={{ display: 'inline-block' }}>
        <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
          <a class="navbar-brand" href="#" style={lblStyle}>FireAUl</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-item nav-link" type="button" data-toggle="modal" data-target="#AboutUsLabel" color="white">About</a>

              </li>

              <li class="nav-item">
                <a class="nav-link" type="button" data-toggle="modal" data-target="#Safety1">Safety</a>

              </li>
              <li class="nav-item">
                <a href="" class="btn btn-default btn-rounded" data-toggle="modal" data-target="#BecomeaResponder">Become a Responder!</a>

              </li>
            </ul>
            <div class="navbar-nav">
            </div>

          </div>
        </nav>

        <div class="modal fade" id="AboutUsLabel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">About us and FireAUl</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                FireAUL is a project designed by a group of students from Texas A&M in order to raise awareness for and help to prevent wildfires in Australia. Community is a key principle at A&M and that is something we have brought to this project. FireAUL can only succeed with the help of the community. If you can serve please sign up now!
                </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="Safety1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">About us and FireAUl</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Bushfires are unpredictable and happen every year. The single biggest killer is indecision. Your best chance of surviving a bushfire is to plan what to do if one comes your way.
                In case of a bushfire, would you
              </div>
              <div class="modal-footer">
                <button type="button" data-toggle="modal" data-target="#YouKnowMsg">1. Be safe and leave early.</button>
                <div class="modal fade" id="YouKnowMsg" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">1. Be safe and leave early.</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        This is the safest choice. Bushfires can spread fast and catch you unprepared. You must know when to leave, where to go and which way to go.
                        If there is a fire within a 3 mile radius of your house, you should leave as soon as possible, bushfires can spread and overwhelm you very rapidly.
                              <br />
                        <br />
                        If you do not have a place to go when fleeing from a bushfire, you can check the map for locations of safe zones that are well equipped to defend against bushfires.
                              <br />
                        <br />
                        Once you have picked a place to head to, to escape from the bushfires, you can use the map to receive directions to head there as soon as possible.
                          </div>
                      <div class="modal-footer">
                        <button type="button" class="close" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" data-toggle="modal" data-target="#YouDontKnowMsg">2. Be prepared to stay and defend your home</button>
                <div class="modal fade" id="YouDontKnowMsg" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">2. Be prepared to stay and defend your home</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        If you are determined to stay and defend your property, it is imperative that everyone in your household knows the plan and is completely prepared. Ensure that all children, dependents, elderly and sick houshold members will leave early.
                              <br />
                        <br />
                        You must be committed to preparing your property by removing any easily flammable items from outside and cut vegetation near your house that could catch fire.
                              <br />
                        <br />
                        It is highly recommended that you have heavy duty protective clothing and firefighting equipment on hand. Be aware that defending against a bushfire can be one of the most traumatic experiences of your life and you must be mentally, physically and emotionally prepared for this. It is not possible to outrun or outlast a bushfire.
                              <br />
                        <br />
                        So, if you have any doubt about any of these factors, you must be safe and leave early.
                          </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="BecomeaResponder" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Be a Responder! Help a mate.</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form onSubmit={this.handleSOS}>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Phone Number</label>
                    <Input
                      class="form-control"
                      placeholder="e.g. (123) 456-7890"
                      country="US"
                      value={this.state.phone}
                      onChange={phone => this.setState({ phone: phone })} />
                    <br />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="e.g. John Doe" value={this.state.name} onChange={this.handleName} />
                  </div>
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#RegisterSafety">Submit</button>
                  <div class="modal fade" id="RegisterSafety" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Thank you for helping protect your community!</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          Understand the risks!
                          <br /> <br />
                          Bushfires are extremely dangerous and have taken many lives. While it is highly appreciated that you are helping out the community, it is important that you understand the implications that come with this responsibility.
<br /> <br />
                          When you go to help someone in danger, you are putting yourself in danger. Make sure you have the appropriate equipment before heading out. Cover up all exposed skin to protect from the heat, and carry masks to protect from the smoke. Wear cotton or wool clothes that will not melt if they catch fire. Carry lots of water and drink it often - even if you are not thirsty.
<br /> <br />
                          Thank you for doing your part in watching after the community.
                              </div>
                        <div class="modal-footer">
                          <button type="button" class="close" data-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid" id="map-container" style={{ display: 'inline-block', padding: 10 }}>
          <MapContainer />
          <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">SOS! We can help.</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form onSubmit={this.handleSOS}>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Phone Number</label>
                      <Input
                        class="form-control"
                        placeholder="e.g. (123) 456-7890"
                        country="US"
                        value={this.state.phone}
                        onChange={phone => this.setState({ phone })} />
                      <br />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Name</label>
                      <input type="text" class="form-control" id="exampleInputEmail1" placeholder="e.g. John Doe" value={this.state.name} onChange={this.handleName} />
                    </div>
                    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#SecondSafety">Submit</button>
                    <div class="modal fade" id="SecondSafety" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="SecondSafety">Please be Safe!</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            Help is on the way!
                          <br />
                            <br />
                            Property is replaceable but your life is not. Shield yourself from radiant heat by covering up your face and other exposed skin. Ensure that you stay hydrated while help arrives. Protect yourself from smoke by covering your mouth and staying close to the ground.
<br />
                            <br />
                            If you are in a vehicle, park your vehicle in a clearing that is clear of bushfire fuel. Stay inside the vehicle as it is safer than being on foot. Close all doors and windows and stay below window level.
<br />
                            <br />
                            Remember, stay calm and stay safe.
                </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Button variant="contained" style={btnSOSStyles} data-toggle="modal" data-target="#exampleModalLong">
            SOS
         </Button>
          <Button variant="contained" style={btnReportLabelStyles} data-toggle="modal" data-target="#ReportMsg">
            Report
         </Button>
          <div class="modal fade" id="ReportMsg" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Report a fire! Prevent a fire!</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  Please be Safe and maintain a safe distance from the fire. If you are within immediate vicinity of the fire and need assistance, please call the authorities or use the SOS button found on our home page!
                           <br />
                  <br />
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                    </div>
                    <div class="custom-file">
                      <input type="file" class="custom-file-input" id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01" />
                      <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="close" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default App;
