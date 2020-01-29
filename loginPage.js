import React, { Component } from 'react';
import firebase from './fire';

    const storage = firebase.storage();
    const files = [ 'image1.png', 'image2.png' ]; 
    files.map( filename => {
        storage
          .ref( `/covers/${filename}` )
          .getDownloadURL()
          .then( url => {
            console.log( "Got download url: ", url );
          });
    });

export default class LoginPage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
    }
    this.firestore = firebase.firestore(); // This works fine.
    this.storage = firebase.storage(); // This fails
    console.log( "Got storage ref" );
  }
  

  render() {
    const storage = firebase.storage();
    const files = [ 'image1.png', 'image2.png' ]; 
    files.map( filename => {
        storage
          .ref( `/covers/${filename}` )
          .getDownloadURL()
          .then( url => {
            console.log( "Got download url: ", url );
          });
    });
    return (
      <input type="file" ref={this.setRef}/>
    );
  }
}
