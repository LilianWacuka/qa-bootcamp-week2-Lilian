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
function isNotified(user: UserProfile): boolean{
    return user.settings?.notifications ?? false;
}
console.log(isNotified(user1))
console.log(isNotified(user2))
console.log(isNotified(user3))