import React from 'react';
import './App.css';
import MapContainer from './map.js';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import Link from '@material-ui/core/Link';
import Input from 'react-phone-number-input/input';

const btnSOSStyles = 
{
	position: 'absolute',
	width: '571px',
	height: '100px',
	left: '106px',
	top: '598px',
	fontSize: '54px',
	borderRadius: '25px',
	backgroundColor: '#A42323',
	color: 'white'
};

const btnReportStyles = 
{
	position: 'absolute',
	width: '571px',
	height: '100px',
	left: '762px',
	top: '598px',
	fontSize: '54px',
	borderRadius: '25px',
	backgroundColor: '#A42323',
	color: 'white'
}

const lblStyle = 
{
	position: 'absolute',
	width: '298px',
	height: '149px',
	left: '570px',
	top: '-17px',

	fontFamily: 'Sahitya',
	fontStyle: 'normal',
	fontWeight: 'bold',
	fontSize: '96px',
	lineHeight: '149px',
	color: '#000000'
}

function App() {

  return (
    <div className="App">

      <header className="App-header">
        <FormLabel style={lblStyle}>
       		FireAUL
       	</FormLabel>
      	<MapContainer/>
      </header>

      <body className="App-body">
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
                onChange={phone => this.setState({ phone })} required/>
                <br/>

                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
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
		
      <Button variant="contained" style={btnReportStyles}  data-toggle="modal" data-target="#exampleModalLong">
        Report
      </Button>
		
		</body>
    </div>
  );
}


export default App;

