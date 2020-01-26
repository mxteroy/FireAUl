import React from 'react';
import './App.css';
import MapContainer from './map.js';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import Link from '@material-ui/core/Link';
import Input from 'react-phone-number-input/input';
import fire from './fire';
import FileUploader from "react-firebase-file-uploader";


const btnSOSStyles = 
{
	width: '571px',
	height: '100px',
	fontSize: '54px',
	borderRadius: '25px',
	backgroundColor: '#A42323',
  color: 'white',
  textAlign: 'center'
};

const btnReportStyles = 
{
	width: '571px',
	height: '100px',
	fontSize: '54px',
	borderRadius: '25px',
	backgroundColor: '#A42323',
	color: 'white'
}

const lblStyle = 
{
	position: 'relative',
	fontFamily: 'Sahitya',
	fontStyle: 'normal',
	fontWeight: 'bold',
	fontSize: '30px',
	color: '#000000'
}

class App extends React.Component  {
  
  constructor() {
    super()

    this.state = {
        latitude: '',
        longitude: '',
        avatar: "",
        isUploading: false,
        progress: 0,
        avatarURL: ""
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

  handleSOS=e=> {
    let ref = fire.database().ref('SOS');
    
    var info = {
      latitude: this.state.latitude,
      longtitude: this.state.longitude
    }

    ref.push(info);

    this.setState(
      {
        phone: this.state.latitude,
        course: this.state.latitude,
        courseNo: this.state.latitude,
        CRN: this.state.latitude
      }
    )
  }

  handleChangeUsername = event =>
    this.setState({ username: event.target.value });

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

  handleProgress = progress => this.setState({ progress });

  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    fire
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  };

  render () {
    return (
      <div className="App" >
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#" style={lblStyle}>FireAUl</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="{{url_for('home')}}">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-item nav-link" href="{{url_for('login')}}">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <div class="navbar-nav">
                <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
                
            </div>
        </nav>

        <div className="container" style={{display: 'inline-block', width: '100px', height: '100px'}}>
            <MapContainer/>

          <form>
          <label style={btnSOSStyles}>
            SOS
            <FileUploader
              hidden
              accept="image/*"
              storageRef={fire.storage().ref('images')}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />
          </label>
        </form>
    
          <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Phone Number</label>
                    <Input
                    className="form-control"
                    placeholder="e.g. (123) 456-7890"
                    country="US"
                    onChange={phone => this.setState({ phone })} required/>
                    <br/>
    
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        
          <Button variant="contained" style={btnReportStyles}  data-toggle="modal" data-target="#exampleModalLong">
            Report
          </Button>
        </div>
      </div>
    );
  }
}


export default App;

