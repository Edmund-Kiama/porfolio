export default function WS4Project ({setShown}) {
    return (
        <div className="WS4Project">
            <div className="details">
                <h4>4-Wheel Steering Steering System</h4>
                <p>Grade A | Oct 2023 – March 2024</p>
            </div>
            <div className="img-contain">
                <img height="135px" alt="design" src="https://media.licdn.com/dms/image/v2/D562DAQGjAjAgPNR6Ow/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1736341230338?e=1738926000&v=beta&t=OIAbNycwD2cyJ_WilLw5GvQpNOYlyeSUEYYFWqURv8A"/>
                <img alt="render" height="200px"  src="https://media.licdn.com/dms/image/v2/D562DAQFRxYl3V37CSQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1736341258826?e=1738926000&v=beta&t=t1ZxSwxqynqNUbnLAuWKO46xLuLxh2mpN8wFlWQafI4"/>
                <img alt="model" height="200px"  src="https://media.licdn.com/dms/image/v2/D562DAQHBeKoCK6MHCw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1736341277020?e=1738926000&v=beta&t=3eDZV2l3s5goZJfBgawqN2ux-tTlX4Fp_1SMTO24Emw" />
            </div>
            <ul>
                <li>Designed a mechanism to replicate a four-wheel steering system, incorporating a gear-based working principle for enhanced functionality.</li>
                <li>The gear-based model was designed to function for all three steering phases: positive, negative, and neutral steering phase, which were activated through their specific gear meshes.</li>
                <li>Utilized SolidWorks for design, Blender for render and Ultimaker Cura for fabrication.</li>
                <li>Overcame challenges in fabricating multiple gears and calculating precise gear ratios by employing advanced alignment techniques and meticulous design and calculations.</li>
                <li>Collaborated with a team of two engineers to successfully deliver the project within the set timeline.</li>
            </ul>
            <button onClick={() => setShown(show => !show)} className="back">Back</button>
        </div>
    )
}