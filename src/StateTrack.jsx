import React, { useEffect , useState } from "react";

const StateTracker = () => {

    const [Show, setShow] = useState([])

    const Live = async ()=> {
        const Res = await fetch('https://api.covid19india.org/data.json')
        const data = await Res.json();
        console.log(data.Live);
        setShow(data.Live)
    }

    useEffect(() => {
        Live();
    }, []);

    return (
        <>
            <h1>INDIA State LIVE Tracker</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Death</th>
                            <th>Active</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Show.map((curElem, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{curElem.State}</td>
                                        <td>{curElem.Confirmed}</td>
                                        <td>{curElem.Recovered}</td>
                                        <td>{curElem.Death}</td>
                                        <td>{curElem.Active}</td>
                                        <td>{curElem.LastUpdateTime}</td>
                                    </tr>                               
                                     )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default StateTracker;