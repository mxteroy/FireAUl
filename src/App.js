import React from 'react';
import './App.css';
import MapContainer from './map.js';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import Link from '@material-ui/core/Link'

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

function temp() {

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
   		<Button variant="contained" style={btnSOSStyles} href="SOS.html">
			SOS
		</Button>
		
		<Button variant="contained" style={btnReportStyles}>
			Report
		</Button>
		
		</body>
    </div>
  );
}


export default App;

