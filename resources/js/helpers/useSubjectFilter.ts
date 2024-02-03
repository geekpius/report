import {useState, useEffect} from 'react'

function useSubjectFilter(form: string, subjects: any[]): any[]
{
    const [filteredSubject, setFilteredSubjects] = useState([])

    useEffect(() => {
        const newSubjects = subjects.filter((obj) => obj.levels.find((lvl) => lvl.name === form))
        setFilteredSubjects(newSubjects);
    }, [form]);

    return filteredSubject;
}

export default useSubjectFilter;
