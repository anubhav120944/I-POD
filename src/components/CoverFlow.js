import React from 'react';

class CoverFlow extends React.Component{
    
    render(){
        return(
            <div style={styles.settings} >

                <div style={styles.titleBar}>
                        <p style={{fontWeight:'bold'}}>iPod</p>
                        <img style={styles.battery} src="https://cdn-icons-png.flaticon.com/128/833/833281.png" alt=''></img>
                </div>
                <div style={{width : '100%' , height : '90%',display:'flex' , flexDirection : 'row' , justifyContent: 'center'}}>
                    <img style={styles.image} src="https://cdn-icons-png.flaticon.com/128/1225/1225938.png"  alt=''/>
                </div>
            </div>
        );
    }
    
}

const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap'
    },
    image : {
        width:'65%',
        height:'65%',
        alignSelf : 'center'
    },
    titleBar : {
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    },
    battery :{
        width : '20px',
        height: '20px',
    }
}

export default CoverFlow;