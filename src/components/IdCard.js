import './IdCard.css';

function IdCard(props) {
    const { lastName, firstName, gender, height, birth, picture } = props;
    return(
        <div className='Idcard'>
            <div className='img-card'>
              <img src={picture} alt="profile"/>  
            </div>
            
            <div className='text-card'> 

                <div>
                    <p><span>First Name:</span> {firstName}</p>
                </div>
                <div>
                    <p><span>Last Name:</span> {lastName}</p>
                </div>
                <div>
                    <p><span>Gender:</span> {gender}</p>
                </div>
                <div>
                    <p><span>Height:</span> {height}</p>
                </div>
                <div>
                    <p><span>Birth:</span> {birth.toDateString()}</p>
                </div>

            </div>
        </div>
    );
}

export default IdCard;
