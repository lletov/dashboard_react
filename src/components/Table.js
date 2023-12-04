import React from 'react'

export default function Table() {
  return (
    <div className='table'>
        <table>
            <tr>
                <th></th>
                <th>Address</th>
                <th>Year</th>
                <th>Flats</th>
                <th>Entrance</th>
                <th>Height</th>
                <th>Square</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>City</th>
            </tr>
            <tr>
                <td>2</td>
                <td>ул. подольская, 7 литер а</td>
                <td>1902</td>
                <td>10</td>
                <td>2</td>
                <td>5</td>
                <td>880.60</td>
                <td>59.917015</td>
                <td>30.322821</td>
                <td>spb</td>
            </tr>
            <tr>
                <td>11</td>
                <td>ул. волгоградская, 9</td>
                <td>1963</td>
                <td>80</td>
                <td>4</td>
                <td>5</td>
                <td>3668.70</td>
                <td>55.829052</td>
                <td>49.086157</td>
                <td>kazan</td>
            </tr>
            <tr>
                <td>38</td>
                <td>ул. декабристов, 8 корпус 1</td>
                <td>1984</td>
                <td>237</td>
                <td>5</td>
                <td>12</td>
                <td>13584.00</td>
                <td>55.864460</td>
                <td>37.599094</td>
                <td>moscow</td>
            </tr>
        </table>
        <div>CSV file structure after data parsing</div>
    </div>
    
  )
}
