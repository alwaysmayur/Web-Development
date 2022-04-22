import React from 'react';
import axios from "axios"

class HotelData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: ""
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(event) {
        event.preventDefault();
        axios({
            url: " http://192.168.2.25:3422/Hubspot/WebHook",
            method: "post",
            headers: { "content-type": "application/json" },
            data: {
                "imgURL": "https://www.easemytrip.com/images/hotel-img/hotel-chain-img.png",
                "heading": "Our Top Hotel Chains",
                "discription": "EaseMyTrip has a wide range of luxury and budget-friendly hotel chain properties. We have picked the finest hotels in India with world-class amenities. We bring you not only a stay option, but an experience in your budget to enjoy the luxury. We make sure that all the hotels are safe, hygienic, comfortable, and easily approachable when it comes to location. Book your hotel with EaseMyTrip and don’t forget to grab an amazing hotel deal to save huge on your stay"
            }
        }).then((result) => {
            var persons = result.data
            this.setState({ persons });
        });

        console.log(this.state);
        // document.getElementById('spanResult').innerHTML += " " + this.state.formValues;
        // document.getElementById('spanResult').innerHTML += " " + this.state.formValues;
        // document.getElementById('spanResult').innerHTML += this.state.formValues + " <br/>";
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        );
    }
}

export default HotelData;
