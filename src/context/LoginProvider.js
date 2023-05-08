import React, { useMemo, useState, useEffect } from 'react';
import LoginContext from './LoginContext';

export default function LoginProvider({children}){
    // const [data, setData] = useState([ '']);
    const [xablau, setXablau] = useState('dark');
    console.log(xablau);

    // function toggleTheme() {
    //   setXablau(xablau === 'dark' ? 'light' : 'dark');
    // }
    
    useEffect(() => {
        document.body.className = xablau;
      }, [xablau]);

    const value = useMemo(() => ({
        xablau,
        setXablau,
        toggleTheme: () => setXablau(xablau === 'dark' ? 'light' : 'dark')
    }), [xablau, setXablau]) 
    
    return (
    <LoginContext.Provider value={ value }>
        <body className={ xablau }>
        {children}
        {/* {toggleTheme} */}
        </body>
    </LoginContext.Provider>
)
}