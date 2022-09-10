const Icon = {
    CheckSuccess: () => (
        <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.24995 14.2123L2.03745 8.99981L0.262451 10.7623L7.24995 17.7498L22.25 2.7498L20.4875 0.987305L7.24995 14.2123Z" fill="#00A99D"/>
        </svg>
    ),
    PasswordInfo: ({onClick}) => (
        <svg 
            onClick={onClick}
            width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#dywgr0i4da)">
                <path d="M8.25 11.25h1.5v1.5h-1.5v-1.5zm0-6h1.5v4.5h-1.5v-4.5zm.742-3.75C4.853 1.5 1.5 4.86 1.5 9c0 4.14 3.353 7.5 7.492 7.5 4.148 0 7.508-3.36 7.508-7.5 0-4.14-3.36-7.5-7.508-7.5zM9 15c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" fill="#CCC"/>
            </g>
            <defs>
                <clipPath id="dywgr0i4da">
                    <path fill="#fff" d="M0 0h18v18H0z"/>
                </clipPath>
            </defs>
        </svg>
    )
    
}

export default Icon



