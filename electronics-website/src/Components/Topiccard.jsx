import React from 'react'

const Topiccard = () => {
    const menuOptions = [
        {
            text: "INTRODUCTION",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            redirect: "https://"
        },
        {
            text: "SENSORS",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            redirect: "https://"
        },
        {
            text: "ACTUATORS",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            redirect: "https://"
        },
        {
            text: "MICROCONTROLLERS",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            redirect: "https://"
        },
        {
            text: "TRANSDUCERS",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            redirect: "https://"
        },
        {
            text: "IDE",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            redirect: "https"
        },
        {
            text: "PLCs",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. I am a giel, my name is Debra. What is your name???? I'm testing my width on a huge screen.",
            redirect: "https://"
        },
        {
            text: "AOB",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            redirect: "https://"
        },
    ]
  return (
    <div class="card">
        {menuOptions.map((item) => (
            <a href={item.redirect} target="_blank">
                <h1 className="topic-name">
                    {item.text}
                </h1>
                <p className="topic-summary">
                    {item.content}
                </p>
            </a>
        ))}
        
    </div>
  )
}

export default Topiccard