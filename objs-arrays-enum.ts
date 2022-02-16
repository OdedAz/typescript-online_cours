console.log('test for this app')

const person1 : {
    name: string;
    age: number;
    hobbies: string[]
    role: [number, string]
} = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};

// WE CAN CHOOSE THE VALUE MANUALLY
// enum Role { ADMIN = 'ADMIN', READ_ONLY = 200, AUTHOR = 'AUTHOR'}
// OR TO DO IT FROM 0 AND UP, OR ADMIN = 5, AND UP
enum Role { ADMIN , READ_ONLY , AUTHOR }

const person2 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

console.log(person2)