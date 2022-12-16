import React from "react";
import { TypeAnimation } from 'react-type-animation';

const texts = ["Redis", "Kafka", "Postgres", "RabbitMQ"]
const Text = () =>{

    return(
        <TypeAnimation
        className="text-green"
        sequence={[
          texts[0], 
          1500, 
          texts[1], 
          1500, 
          texts[2],
          1500,
          texts[3],
          1500,
          () => {
            console.log('Done typing!'); // Place optional callbacks anywhere in the array
          }
        ]}
        wrapper="span"
        cursor={false}
        repeat={Infinity}
      />
    )
}

export default Text
