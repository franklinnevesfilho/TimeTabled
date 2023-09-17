// eslint-disable-next-line no-unused-vars
import React from "react";
import Event from "./Event.jsx";

const Calendar = () =>{
    return (
        <div className="Calendar">
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>
                </thead>
                <tbody>
                {/* You can populate the table body with your calendar data here */}
                <tr>
                    <td className="time">8 am</td>
                    <Event color="green"  event="Meeting" location='FIU'/>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                </tr>
                <tr>
                    <td className="time">9 am</td>
                    <td></td>
                    <td ></td>
                    <td ></td>
                    <Event color='blue' event='Pizza Party' location='Papa Johns'/>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                </tr>
                <tr>
                    <td className="time">10 am</td>
                    <td></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <Event event='Breakfast' color='pink'/>
                    <td ></td>
                    <td ></td>
                </tr>
                <tr>
                    <td className="time">11 am</td>
                    <td></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                </tr>
                <tr>
                    <td className="time">12 pm</td>
                    <td></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                </tr>
                <tr>
                    <td className="time">1 pm</td>
                    <td></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                </tr>
                <tr>
                    <td className="time">2 pm</td>
                    <td></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                </tr>
                <tr>
                    <td className="time">3 pm</td>
                    <td></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                </tr>
                <tr>
                    <td className="time">4 pm</td>
                    <td></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                </tr>
                <tr>
                    <td className="time">5 pm</td>
                    <Event event={'Dinner'} color={'purple'} location={'Devieto'}/>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                </tr>
                {/* Add more rows for each week or month as needed */}
                </tbody>
            </table>
        </div>
    )
}
export default Calendar;
