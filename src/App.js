import React from 'react';
import './App.css';
import MapContainer from './map.js';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import Link from '@material-ui/core/Link';
import Input from 'react-phone-number-input/input';
import { textAlign } from '@material-ui/system';

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
  left: '25%',
  width: '50%',
  height: '100px',
  top: '50px',
  fontFamily: 'Roboto',
  fontSize: '44px',
  borderRadius: '15px',
  backgroundColor: '#A9A9A9',
  color: 'white'
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
  fontSize: '55px',
  color: '#000000'
}

function App() {
  return (
    <div className="App ">

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#" style={lblStyle}>FireAUl</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-item nav-link" type="button" data-toggle="modal" data-target="#AboutUsLabel">About</a>
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
            </li>
            <li class="nav-item">
              <a class="nav-link" type="button" data-toggle="modal" data-target="#Safety1">Safety</a>
            </li>
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
          </ul>
          <div class="navbar-nav">
            <form class="form-inline my-2 my-lg-0">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Become a Responder!</button>
            </form>
          </div>

        </div>
      </nav>




      <div class="container">
        <MapContainer />
        <Button variant="contained" style={btnSOSStyles}>
             SOS   
      </Button>

        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Phone Number</label>
                    <Input
                      class="form-control"
                      placeholder="e.g. (123) 456-7890"
                      country="US"

                      onChange={phone => 555} required />
                    <br />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <Button variant="contained" style={btnReportStyles} data-toggle="modal" data-target="#exampleModalLong">
          Report
      </Button>

      </div>
      </div>
  
  );
}


export default App;

