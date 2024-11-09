import React, {useLayoutEffect, useState} from 'react'

const Menu = () => {
    const [content, setContent] = useState("about")
    const [animation, setAnimation] = useState({})
    const info = (type) => {
        if(type === "about") {
        return <p className='about-text'>
            Passionate and Frontend developer with 5+ years of experience. Specialized in Vue.js, HTML5, CSS3, and
            JavaScript (ES6+), but I'm always eagering to learn cool new frontend techonolgies, with a strong understanding of responsive design and user-centered practices.
        </p>
        } else if (type === "projects") {
        return <div className='links'>
            <a target="_blank" href='https://joao-ortiz.github.io/products-sample/'>Products Website Sample Page</a>
            <a target="_blank" href='https://joao-ortiz.github.io/my-react-ts-quizz/'>Quizz Typescript App</a>
            <a target="_blank" href='https://joao-ortiz.github.io/cryptoapp/'>Crypto App</a>
        </div>
        } 
        return <div className='links'>
            <a target="_blank" href='https://github.com/joao-ortiz'>GitHub</a><a target="_blank" href='https://www.linkedin.com/in/joão-gabriel-ortiz-901b1a148/'>Linkedin</a>
        </div>
    }

    useLayoutEffect(() => {
        setAnimation({animation: "none",opacity: 0})
        setTimeout(() => setAnimation({}), 250)
    },[content])
    return <>
        <div className='menu'>
            <button onClick={() => setContent('about')}>About me</button>
            <button onClick={() => setContent('projects')}>Projects</button>
            <button onClick={() => setContent('contact')}>Contact</button>
        </div>
        <div className='information' style={animation}>
            {info(content)}
        </div>
    </>
}

export default Menu