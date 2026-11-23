// create a user profile validator
type UserProfile = {
    id: string; 
    userName: string;
    settings?: {
        notifications: boolean;
    };
}
const user1: UserProfile ={
    id: '234',
    userName: 'Mais',
    settings:{
        notifications: true
    }
}
const user2: UserProfile ={
    id: '289',
    userName: 'Amani',
}
const user3: UserProfile ={
    id:'907',
    userName: 'Paula',
    settings:{
        notifications: false
    }
}
function isnotified(user: UserProfile): boolean{
    return user.settings?.notifications ?? false;
}
console.log(isnotified(user1))
console.log(isnotified(user2))
console.log(isnotified(user3))