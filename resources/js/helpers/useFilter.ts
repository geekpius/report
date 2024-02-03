import {useState, useEffect} from 'react'

type FilterState = {
    form: string,
    subject: string,
}

function useFilter(state: FilterState): any[]
{
    const [filter, setFilter] = useState({
        form: '',
        subject: '',
    })

    useEffect(() => {
        setFilter({
            form: state.form,
            subject: state.subject,
        })
    }, []);

    return [filter, setFilter];
}

export default useFilter;
