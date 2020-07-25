import React, { Component } from 'react'
import {  
  Link as Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Search from './Search'
import {setLogin} from '../../actions/loginAction'

class PatientList extends Component {
  constructor(){
    super()
    this.state={
      showModal: false,
      showAddModal:false,
      updatedDetails:'',
      updated: "false",
      search:null,
      finalSet: ''      
    }
  }

static getDerivedStateFromProps(props, state) {
    let patientlist = props && props.patient[0] && props.patient[0].patientList;
  patientlist= patientlist && patientlist[0];

  return { finalSet: patientlist };
}


searchSpace=(event)=>{
  let keyword = event.target.value;
  this.setState({search:keyword})
}
logout=()=>{
  this.props.setLogin(setLogin('','',''));
}

  render() {
    const {showModal,showAddModal}=this.state
    const getRole = this.props && this.props.login[0] && this.props.login[0].login.role;
    
    let patientlist = this.props && this.props.patient[0] && this.props.patient[0].patientList;
    patientlist= patientlist && patientlist[0];    
    
    return (
      <div>
        <Link to='/'>Go to Home </Link>
        {getRole && getRole === 'doctor' || getRole && getRole === 'patient' ? <Link to='/' style={{padding:'20px'}} onClick={this.logout}>
                     Logout
                    </Link>:''}
          <p style={{ textAlign: 'center', color: 'blue', fontWeight: 'bold' }}>Patient List</p>
          <div>
            <Search/>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  patient: [state.patient],
  login:[state.login]
});
const mapDispatchToProps = (dispatch) => ({
  setLogin: (email,password,role) =>
        dispatch(setLogin(email,password,role)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientList);

