const StateIcon = ({ state, customClass }) => {
    return (
        state === 'Sunny' || state === 'Clear' ? (
            <svg className={customClass} viewBox="2050 -845 262 262" >
                <circle cx="131" cy="131" r="131" fill="#ffde17" data-name="Sun Icon" transform="translate(2050 -845)" />
            </svg >
        ) : state === 'Clouds' ? (
            <svg className={customClass} viewBox="2436.9 -843.1 275.5 274.1" >
                <g data-name="cloudy icon" transform="translate(84 790)">
                    <circle cx="137" cy="137" r="137" fill="#fff" data-name="Ellipse 23" transform="translate(2354 -1633)" />
                    <path fill="#ffde17"
                        d="M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z"
                        data-name="Subtraction 1" />
                </g>
            </svg >
        ) : state === 'Rain' || state === 'Drizzle' || state === 'Mist' ? (
            <svg className={customClass} viewBox="3170 -843.1 163.5 242.7">
                <g data-name="Rain Icon">
                    <g data-name="Water Drops">
                        <path fill="#0032cc" d="M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z" data-name="Path 7" />
                        <path fill="#003eff" d="M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z" data-name="Path 3" />
                    </g>
                </g>
            </svg>
        ) : state === 'Haze' || state === 'Fog' ? (
            <svg className={customClass} viewBox="0 0 454 366">
                <path fill="#12bcff"
                    d="M340 110c-40 0-75-14-110-26-30-11-61-21-92-27-35-6-65 6-89 34a28 28 0 0 1-40 3C-3 83-3 66 8 54 53 1 110-9 174 7c36 9 71 25 106 36 19 5 39 10 58 11 27 2 48-13 65-33 12-13 29-15 41-5s13 28 1 41c-28 33-63 53-105 53zM120 312c-27-1-51 11-70 34-11 13-29 15-41 4-12-10-12-28-1-40 45-53 103-63 167-47 37 10 72 25 108 36 18 6 37 10 55 11 27 2 47-12 64-32 8-9 17-15 30-12 21 4 29 28 16 45-37 45-85 65-143 51-34-8-66-21-99-32-27-9-53-18-86-18zM123 128c42 1 81 15 120 29 26 9 52 18 79 24 28 6 53-3 74-24l11-11c11-11 27-11 39-1 10 10 11 26 1 38-35 43-81 64-137 52-34-7-67-20-100-32-29-10-59-20-91-19-28 1-51 13-69 34-12 13-29 15-41 4s-12-28 0-41c30-35 68-52 114-53z" />
            </svg>
        ) : state === 'Storm' || state === 'Thunderstorm' ? (
            <svg className={customClass} viewBox="3487.9 -810.7 291.2 200.3" >
                <g data-name="Strom icon" transform="translate(1959 -1260.7)">
                    <ellipse cx="55.3" cy="51.7" className="cls-99" data-name="Ellipse 14" rx="55.3" ry="51.7"
                        transform="translate(1529 490.4)" />
                    <ellipse cx="55.3" cy="51.7" className="cls-99" data-name="Ellipse 15" rx="55.3" ry="51.7"
                        transform="translate(1569.6 467.8)" />
                    <circle cx="55.3" cy="55.3" r="55.3" className="cls-99" data-name="Ellipse 16"
                        transform="translate(1618.9 476.8)" />
                    <ellipse cx="55.3" cy="51.7" className="cls-99" data-name="Ellipse 17" rx="55.3" ry="51.7"
                        transform="translate(1631.8 450)" />
                    <ellipse cx="55.3" cy="51.7" className="cls-99" data-name="Ellipse 18" rx="55.3" ry="51.7"
                        transform="translate(1687.1 477.5)" />
                    <ellipse cx="55.3" cy="51.7" className="cls-99" data-name="Ellipse 19" rx="55.3" ry="51.7"
                        transform="translate(1709.6 507.3)" />
                    <circle cx="55.3" cy="55.3" r="55.3" className="cls-99" data-name="Ellipse 20"
                        transform="translate(1639.6 500.1)" />
                    <ellipse cx="55.3" cy="51.7" className="cls-99" data-name="Ellipse 21" rx="55.3" ry="51.7"
                        transform="translate(1569.6 507.3)" />
                    <path fill="none" stroke="#fd0" stroke-width="18"
                        d="M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2" data-name="Path 59" />
                    <path fill="none" stroke="#fd0" stroke-width="15" d="M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2"
                        data-name="Path 60" />
                </g>
            </svg >
        ) : null
    )
}

export default StateIcon