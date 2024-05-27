'use client'

import { useState } from "react";



export function ShowTextbox()
{
    const characterLimit = 100;
    const [numberOfCharacters, setNumberOfCharacters] = useState(0)
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        {
            const numberOfCharacters = e.target.value.length;
            setNumberOfCharacters(numberOfCharacters);
        }

    return(
        <>
        <textarea 
         name="message" 
         id="message" 
         cols={30} 
         rows={5}
         className="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         onChange={handleChange}
         maxLength={characterLimit}>
         </textarea>
         <p>{numberOfCharacters}/{characterLimit}</p>
         </>
    );
}

