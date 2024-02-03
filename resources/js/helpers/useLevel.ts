import {useState, useEffect} from 'react'

function useLevel(level: string): any[]
{
    const [form, setForm] = useState('')

    useEffect(() => {
        setForm(level)
    }, []);

    return [form, setForm];
}

export default useLevel;
