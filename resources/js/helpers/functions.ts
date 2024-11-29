

export const isAdmin = (roles: any[]) => {
    return (roles.includes('admin'));
}

export const isClassTeacher = (roles: any[]) => {
    return (roles.includes('class teacher'));
}

export const isSubjectTeacher = (roles: any[]) => {
    return (roles.includes('subject teacher'));
}
