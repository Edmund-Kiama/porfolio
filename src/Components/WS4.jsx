export default function WS4Project ({setShown}) {
    return (
        <div className="WS4Project">
            <div className="details">
                <h4>4-Wheel Steering Steering System</h4>
                <p>Grade A | Oct 2023 – March 2024</p>
            </div>
            <div className="img-contain">
                <img height="135px" alt="design" src="https://i.pinimg.com/736x/6e/6b/df/6e6bdfbd3a5d7d3d236ca4fdeb1a2567.jpg"/>
                <img alt="render" height="200px"  src="https://i.pinimg.com/736x/0a/19/25/0a19253de15876e29be268854eb9650f.jpg"/>
                <img alt="model" height="200px"  src="https://i.pinimg.com/736x/14/43/43/1443438c0985b6bc8151bb943d2c3507.jpg" />
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