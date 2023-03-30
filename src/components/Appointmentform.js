import React,{useState,useEffect} from 'react'


function Appointmentform({display, setDisplay}) {
	
	const [date, setDate] = useState('');
	let notification

	const Submit = () => {
		 Notification.requestPermission().then(perm => {
			if (perm === "granted") {
			  notification = new Notification(`Appointment`,
					{
						body: date ,
						data: {info: "push notification"},
						
					})
			} else {
				notification.addEventListener("error", e => {
					alert("error");
				})
			}
		})
	}

	
	return (
		<div className="form">
			<div style={{marginTop: "100px"}}><h1>Schedule Appointment</h1></div>
			<div className="formbanner">
  				<div>
  					<label htmlFor="fname">First Name: </label>
 					<input id="shadowradius" type="text" id="fname" name="fname"/>
  				</div>
  				<div>
  					<label htmlFor="lname">Last Name: </label>
  					<input id="shadowradius" type="text" id="lname" name="lname"/>
  				</div>
  				<div>
  					<label htmlFor="email">Email: </label>
  					<input type="email" id="email" name="email"/>
				</div>
				<div>
					<label htmlFor="phone">Phone Number: </label>
					<input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
				</div>
				<div>
					 <label htmlFor="date">Choose Date and Time: </label>
  					 <input onChange={(e)=>{setDate(e.target.value)}} type="datetime-local" id="date" name="date" />
				</div>
				<div><h3>Choose a Package:</h3></div>
				<div>
					<input type="radio" id="package" name="package" value="package1" />
  					<label for="package">90 Min Session: 140$</label>
				</div>
				<div>
					<input type="radio" id="package" name="package" value="package2" />
  					<label for="package">60 Min Session: 100$</label>
				</div>
				<div>
					<input type="radio" id="package" name="package" value="package3" />
  					<label for="package">30 Min Session: 60$</label>
				</div>
				<div>
					 <label htmlFor="submit">Confirm: </label>
  					 <input onClick={Submit} type="submit" id="submit" name="submit" />
				</div>
			</div>

			
		</div>
	)
}

export default Appointmentform