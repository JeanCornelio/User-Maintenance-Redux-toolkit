

export type UserId = string;

export interface User  {
    name: string;
    email:string;
    gitHub:string;
}

export interface UserWithId extends User {
    id:UserId
}



export const users: UserWithId[]  = [
    {
        id:'1',
        name:'Jean Cornelio',
        email:'jcornelio@gmail.com',
        gitHub:'JeanCornelio'
    },
    {
        id:'2',
        name:'gorge Ramirez',
        email:'gramirez@gmail.com',
        gitHub:'mdo'
    },
    {
        id:'3',
        name:'Jonny Beato',
        email:'jbeato@gmail.com',
        gitHub:'jose'
    },
    {
        id:'4',
        name:'Tommy Smood',
        email:'tsmood@gmail.com',
        gitHub:'midudev'
    },
]

