import { Card } from 'react-bootstrap';
import logo from '../../images/logo.png'
import arobase from '../../images/arobase.png'
import './Inscription.css'
import cle from '../../images/cle.png'

export const Inscription = () => {
   
    return(
        <div className="Inscription" >
        <div className="row">
          <div className="col-md-6" style={{border:'none'}}>
            <Card style={{background:'none', border:'none'}}>
             <h1 style={{fontWeight:'bold', textAlign:'center',marginTop:'20%'}}>CONNECTEZ-VOUS</h1>
             <form>
               <img style={{color:'black',marginLeft:'12%', width:'%'}} src={arobase} alt=''/> <input style={{
                    marginTop:'10%',
                    marginLeft:'1%',
                    width:'57%',
                    height:'50px',
                    borderRadius:'5px',
                   
                    boxShadow:'0 1px 9px',
                    border:'none',
                    fontSize:'20px'

                }} type='email' name='email' placeholder='Adresse Mail'></input><br></br>
                 <img style={{color:'black',marginLeft:'12%', width:'%'}} src={cle} alt=''/><input style={{
                    marginTop:'5%',
                    marginLeft:'1%',
                    width:'57%',
                    height:'50px',
                    borderRadius:'5px',
                    
                    boxShadow:'0 1px 9px',
                    border:'none',
                    marginBottom:'5%',
                    fontSize:'20px'

                }} type='password' name='password' placeholder='Mot de passe
                '></input><br></br>
                <a className='password' style={{color:'black', marginLeft:'40%', fontSize:'25px' }} href='n'>Mot de passe oublié ?</a><br></br>
                <button  style={{marginLeft:'21%', marginTop:'7%',width:'56%', height:'54px', border:'none', borderRadius:'10px', background:'black', color:'#429a03',fontSize:'30px',
            marginBottom:'10%', fontWeight:'bold' }}>CONNEXION</button>
             </form>
            </Card>
          </div>
          
          <div className="col-md-6" style={{float:'left'}}>
            <Card
              className="scard "
              style={{border:'none',
              background:'black',
              height:'650px',
            
              }}>
              
            <img style={{width:'30%', justifyContent:'center', marginTop:'30%', marginLeft:'30%'}} src={logo} alt=''/>
         
            </Card>
          </div>
        </div>
      </div>
    );
}