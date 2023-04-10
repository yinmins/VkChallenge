import { Int32 } from "react-native/Libraries/Types/CodegenTypes";

export class User {
    public id: Int32;
    public email: string;
    public password: string;
    constructor(id: Int32, email: string, password: string){
         this.id=id;
         this.email=email;
         this.password=password;    
    }
}